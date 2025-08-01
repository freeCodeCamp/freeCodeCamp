const fs = require('fs');
const yaml = require('js-yaml');

const parseCertification = filePath => ({
  challenges: [yaml.load(fs.readFileSync(filePath, 'utf8'))]
});

module.exports = { parseCertification };
