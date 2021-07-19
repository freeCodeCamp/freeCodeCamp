const fs = require('fs');

// Process the contents of a argument (json) to an Object
function getMetaData(file) {
  let metaData;

  try {
    metaData = fs.readFileSync(file);
  } catch (err) {
    throw `No _meta.json file exists at ${file}`;
  }

  return JSON.parse(metaData);
}

exports.getMetaData = getMetaData;
