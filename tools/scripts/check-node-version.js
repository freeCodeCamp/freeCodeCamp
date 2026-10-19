const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', '..');
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const nvmrc = fs.readFileSync(path.join(root, '.nvmrc'), 'utf8').trim();
const range = pkg.engines && pkg.engines.node;
const floorMatch = typeof range === 'string' ? range.match(/^>=(\d+)$/) : null;
const floor = floorMatch ? Number(floorMatch[1]) : NaN;
const nvmMajor = Number(nvmrc);

if (!Number.isInteger(floor) || !Number.isInteger(nvmMajor) || nvmMajor < floor) {
  console.error(
    `.nvmrc (${nvmrc}) is below engines.node (${range}). These two declarations need to agree.`,
  );
  process.exit(1);
}

const major = Number(process.versions.node.split('.')[0]);
if (major < floor) {
  console.error(
    `freeCodeCamp requires Node.js ${range} (.nvmrc is ${nvmrc}). Current version is ${process.versions.node}.`,
  );
  process.exit(1);
}
