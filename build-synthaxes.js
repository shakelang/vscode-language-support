const fs = require("fs");
const yaml = require("js-yaml");

const inputFilePath = process.argv[2];
const outputFilePath = process.argv[3];

if (!inputFilePath || !outputFilePath) {
  console.error("Please provide input and output file paths");
  process.exit(1);
}

try {
  const yamlContent = fs.readFileSync(inputFilePath, "utf8");
  const jsonContent = yaml.load(yamlContent);
  fs.writeFileSync(
    outputFilePath,
    JSON.stringify(jsonContent, null, 2),
    "utf8"
  );
  console.log(`File converted and saved to ${outputFilePath}`);
} catch (e) {
  console.error(e);
}
