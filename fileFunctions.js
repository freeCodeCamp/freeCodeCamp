const fs = require('fs');

const saveToFile = (fileName, data) => {
  fs.writeFile(fileName, data, err => {
    if (err) { return console.log(err) }
  });
}

const openJSONFile = fileName => {
  const data = JSON.parse(fs.readFileSync(fileName, 'utf8'));
  console.log('Opened JSON file')
  return data;
};

exports.saveToFile = saveToFile;
exports.openJSONFile = openJSONFile;
