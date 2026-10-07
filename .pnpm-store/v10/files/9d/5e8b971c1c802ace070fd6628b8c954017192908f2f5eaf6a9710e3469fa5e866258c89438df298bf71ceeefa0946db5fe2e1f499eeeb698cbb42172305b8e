var sudo = require('./');
var exec = require('child_process').exec;

function kill(end) {
  if (process.platform === 'win32') return end();
  exec('sudo -k', end);
}
kill(
  function() {
    var options = {
      name: 'Sudo Prompt'
    };
    if (process.platform === 'win32') {
      var sleep = 'timeout /t 10\r\necho world';
    } else {
      var sleep = 'sleep 10 && echo world';
    }
    sudo.exec(sleep, options,
      function(error, stdout, stderr) {
        console.log(error, stdout, stderr);
      }
    );
    sudo.exec('echo hello', options,
      function(error, stdout, stderr) {
        console.log(error, stdout, stderr);
      }
    );
  }
);
