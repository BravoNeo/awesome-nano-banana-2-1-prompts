import { readFile } from "node:fs/promises";
import { validateCatalog } from "./community-image-gallery/catalog.mjs";

if (process.argv.length !== 3) {
  console.error(
    "Usage: node scripts/validate-catalog.mjs path/to/reviewed-catalog.json",
  );
  process.exitCode = 1;
} else {
  try {
    const policy = JSON.parse(
      await readFile(
        new URL("../config/model-policy.json", import.meta.url),
        "utf8",
      ),
    );
    const catalog = validateCatalog(
      JSON.parse(await readFile(process.argv[2], "utf8")),
      policy,
    );
    console.log(
      JSON.stringify({
        model: catalog.model,
        independentWorks: catalog.count,
        mechanicalValidation: "PASS",
        sourceReview:
          "Required separately; validation is not proof of authentic sources.",
      }),
    );
  } catch (error) {
    console.error("Catalog rejected: " + error.message);
    process.exitCode = 1;
  }
}
