const fs = require('fs');
const path = require('path');

const env = require('../../config/env');

const apiPath = path.resolve(__dirname, '../../api-server');
const clientPath = path.resolve(__dirname, '../../client');

fs.access(`${apiPath}/server/rev-manifest.json`, function(err) {
  if (err) {
    console.log('\n\ncreating manifest\n\n');
    return fs.writeFileSync(`${apiPath}/server/rev-manifest.json`, '{}');
  }
  console.log('\n\nrev-manifest present\n\n');
  return null;
});

fs.access(`${apiPath}/server/resources/pathMigration.json`, err => {
  if (err) {
    console.log('\n\ncreating pathMigration\n\n');
    return fs.writeFileSync(
      `${apiPath}/server/resources/pathMigration.json`,
      '{}'
    );
  }
  console.log('\n\npathMigration present\n\n');
  return null;
});


fs.writeFileSync(`${clientPath}/config/env.json`, JSON.stringify(env));
