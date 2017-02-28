var fs = require('fs');
var execSync = require('child_process').execSync;

var files = fs.readdirSync(process.cwd());
for (var i = 0; i < files.length; i++) {
  var file = files[i];
  var stat = fs.statSync(file);
  if (stat.isDirectory()) {
    console.log('versioning %s', file);
    execSync('cd '+ file + ' && npm version '+ process.argv[2] + ' && cd ..');
    console.log('versioned %s', file);
  }
}
