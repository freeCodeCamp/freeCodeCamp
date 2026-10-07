var assert = require('assert');
var fs = require('fs');
var sudo = require('./');
var exec = require('child_process').exec;

function kill(end) {
  if (process.platform === 'win32') return end();
  exec('sudo -k', end);
}

function icns() {
  if (process.platform !== 'darwin') return undefined;
  var path = '/Applications/Electron.app/Contents/Resources/Electron.icns';
  try {
    fs.statSync(path);
    return path;
  } catch (error) {}
  return undefined;
}

kill(
  function() {
    var options = {
      env: { 'SUDO_PROMPT_TEST_ENV': 'hello world' },
      icns: icns(),
      name: 'Electron'
    };
    if (process.platform === 'win32') {
      var command = 'echo %SUDO_PROMPT_TEST_ENV%';
      var expected = 'hello world\r\n';
    } else {
      // We use double quotes to tell echo to preserve internal space:
      var command = 'echo "$SUDO_PROMPT_TEST_ENV"';
      var expected = 'hello world\n';
    }
    console.log(
      'sudo.exec(' +
        JSON.stringify(command) + ', ' +
        JSON.stringify(options) +
      ')'
    );
    sudo.exec(command, options,
      function(error, stdout, stderr) {
        console.log('error:', error);
        console.log('stdout: ' + JSON.stringify(stdout));
        console.log('stderr: ' + JSON.stringify(stderr));
        assert(error === undefined || typeof error === 'object');
        assert(stdout === undefined || typeof stdout === 'string');
        assert(stderr === undefined || typeof stderr === 'string');
        kill(
          function() {
            if (error) throw error;
            if (stdout !== expected) {
              throw new Error('stdout != ' + JSON.stringify(expected));
            }
            if (stderr !== '') {
              throw new Error('stderr != ""');
            }
            console.log('OK');
          }
        );
      }
    );
  }
);
