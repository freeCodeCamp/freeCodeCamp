const fs = require('fs');
const yaml = require('js-yaml');

const buildCertification = filePath => ({
  challenges: [yaml.load(fs.readFileSync(filePath, 'utf8'))]
});

module.exports = { buildCertification };
