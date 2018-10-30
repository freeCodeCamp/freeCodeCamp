const utils = require('./utils');
const merge = utils.merge;
const bus = utils.bus;
const spawn = require('child_process').spawn;

module.exports = function spawnCommand(command, config, eventArgs) {
  var stdio = ['pipe', 'pipe', 'pipe'];

  if (config.options.stdout) {
    stdio = ['pipe', process.stdout, process.stderr];
  }

  var sh = 'sh';
  var shFlag = '-c';

  if (utils.isWindows) {
    sh = 'cmd';
    shFlag = '/c';
  }


  if (!Array.isArray(command)) {
    command = [command];
  }

  const args = command.join(' ');

  const env = merge(process.env, { FILENAME: eventArgs[0] });
  const child = spawn(sh, [shFlag, args], {
    env: merge(config.options.execOptions.env, env),
    stdio: stdio,
  });

  if (config.required) {
    var emit = {
      stdout: function (data) {
        bus.emit('stdout', data);
      },
      stderr: function (data) {
        bus.emit('stderr', data);
      },
    };

    // now work out what to bind to...
    if (config.options.stdout) {
      child.on('stdout', emit.stdout).on('stderr', emit.stderr);
    } else {
      child.stdout.on('data', emit.stdout);
      child.stderr.on('data', emit.stderr);

      bus.stdout = child.stdout;
      bus.stderr = child.stderr;
    }
  }
};
