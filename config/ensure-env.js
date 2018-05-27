var fs = require('fs');

fs.access(
  './server/rev-manifest.json',
  function(err) {
    if (err) {
      console.log('\n\ncreating manifest\n\n');
      return fs.writeFileSync('server/rev-manifest.json', '{}');
    }
    console.log('\n\nrev-manifest present\n\n');
    return null;
  }
);

fs.access(
  './server/resources/pathMigration.json',
  err => {
    if (err) {
      console.log('\n\ncreating pathMigration\n\n');
      return fs.writeFileSync('server/resources/pathMigration.json', '{}');
    }
    console.log('\n\npathMigration present\n\n');
    return null;
  }
);
