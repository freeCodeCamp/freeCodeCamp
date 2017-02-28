var fs = require('fs');
var execSync = require('child_process').execSync;

var files = fs.readdirSync(process.cwd());
for (var i = 0; i < files.length; i++) {
  var file = files[i];
  var stat = fs.statSync(file);
  if (stat.isDirectory()) {
    console.log('publishing %s', file);
    execSync('npm publish ' + file);
    console.log('published %s', file);
  }
}
