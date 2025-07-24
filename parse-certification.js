const fs = require('fs');
const yaml = require('js-yaml');

const parseCertification = filePath =>
  yaml.load(fs.readFileSync(filePath, 'utf8'));

module.exports = { parseCertification };
