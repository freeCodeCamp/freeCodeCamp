const fs = require('fs');
const path = require('path');

const filePath = path.join(
  __dirname,
  './curriculum/structure/superblocks/full-stack-developer.json'
);
const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));

function convertBlocks(obj) {
  if (Array.isArray(obj)) {
    return obj.map(convertBlocks);
  } else if (obj && typeof obj === 'object') {
    if (Array.isArray(obj.blocks)) {
      obj.blocks = obj.blocks.map(block =>
        typeof block === 'object' && block !== null && 'dashedName' in block
          ? block.dashedName
          : block
      );
    }
    // Recursively process nested objects
    Object.keys(obj).forEach(key => {
      obj[key] = convertBlocks(obj[key]);
    });
  }
  return obj;
}

const converted = convertBlocks(json);

fs.writeFileSync(
  filePath.replace('.json', '.converted.json'),
  JSON.stringify(converted, null, 2)
);
console.log(
  'Conversion complete. Output written to',
  filePath.replace('.json', '.converted.json')
);
