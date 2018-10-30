var cp = require('child_process');
var chalk = require('chalk');
var red = chalk.red
var green = chalk.green
var cyan = chalk.cyan;
var count = 0;

while(count < 10) {
  var child = cp.exec("node ./test/exec/child.js", function(error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log(red('stderr: ' + stderr));
    if (error !== null) {
      console.log(red('exec error: ' + error));
    }
  })

  console.log("child pid: %s | count: %s", child.pid, ++count);
}
