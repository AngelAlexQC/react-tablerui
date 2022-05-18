import { writeFile, readFileSync } from 'fs';

// Read package.json
const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
// Read package.json from parent directory
const parentPackageJson = JSON.parse(readFileSync('../package.json', 'utf8'));
// Get name and version from parent
const { name, version } = parentPackageJson;
// Delete dependency in package.json
delete packageJson.dependencies[name];
// Write package.json
writeFile(
  'package.json',
  JSON.stringify(packageJson, null, 2),
  'utf8',
  () => {},
);

