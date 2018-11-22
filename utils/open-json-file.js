const fs = require('fs');

const openJSONFile = fileName => {
  const data = JSON.parse(fs.readFileSync(fileName, 'utf8'));
  console.log('Opened JSON file')
  return data;
};

module.exports = { openJSONFile };
