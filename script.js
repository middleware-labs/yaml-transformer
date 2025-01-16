const fs = require('fs');
const yaml = require('js-yaml');

// Load the input YAML file
const inputFile = process.argv[2];

if (!inputFile) {
  console.error('Please provide a YAML file as the first argument.');
  process.exit(1);
}

// Read the YAML file content
const fileContent = fs.readFileSync(inputFile, 'utf8');

// Parse and transform the YAML content
const parsedYaml = yaml.load(fileContent);

// Dump the YAML with custom formatting options
const formattedYaml = yaml.dump(parsedYaml, {
  indent: 2,
  noArrayIndent: false,
  skipInvalid: false,
  flowLevel: 100,
  sortKeys: true,
  lineWidth: 80,
  noRefs: false,
  noCompatMode: false,
  condenseFlow: true
});

// Write the formatted YAML back to the file
fs.writeFileSync(inputFile, formattedYaml);

console.log(`File ${inputFile} has been formatted and saved.`);
