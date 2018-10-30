/**
 * Manages the internal config of nodemon, checking for the state of support
 * with fs.watch, how nodemon can watch files (using find or fs methods).
 *
 * This is *not* the user's config.
 */
var debug = require('debug')('nodemon');
var load = require('./load');
var rules = require('../rules');
var utils = require('../utils');
var pinVersion = require('../version').pin;
var command = require('./command');
var rulesToMonitor = require('../monitor/match').rulesToMonitor;
var bus = utils.bus;

function reset() {
  rules.reset();

  config.dirs = [];
  config.options = { ignore: [], watch: [] };
  config.lastStarted = 0;
  config.loaded = [];
}

var config = {
  run: false,
  system: {
    cwd: process.cwd(),
  },
  required: false,
  dirs: [],
  timeout: 1000,
  options: {},
};

/**
 * Take user defined settings, then detect the local machine capability, then
 * look for local and global nodemon.json files and merge together the final
 * settings with the config for nodemon.
 *
 * @param  {Object} settings user defined settings for nodemon (typically on
 *  the cli)
 * @param  {Function} ready callback fired once the config is loaded
 */
config.load = function (settings, ready) {
  reset();
  var config = this;
  load(settings, config.options, config, function (options) {
    config.options = options;

    if (options.watch.length === 0) {
      // this is to catch when the watch is left blank
      options.watch.push('*.*');
    }

    if (options['watch_interval']) { // jshint ignore:line
      options.watchInterval = options['watch_interval']; // jshint ignore:line
    }

    config.watchInterval = options.watchInterval || null;
    if (options.signal) {
      config.signal = options.signal;
    }

    var cmd = command(config.options);
    config.command = {
      raw: cmd,
      string: utils.stringify(cmd.executable, cmd.args),
    };

    // now run automatic checks on system adding to the config object
    options.monitor = rulesToMonitor(options.watch, options.ignore, config);

    var cwd = process.cwd();
    debug('config: dirs', config.dirs);
    if (config.dirs.length === 0) {
      config.dirs.unshift(cwd);
    }

    bus.emit('config:update', config);
    pinVersion().then(function () {
      ready(config);
    }).catch(e => {
      // this doesn't help testing, but does give exposure on syntax errors
      console.error(e.stack);
      setTimeout(() => { throw e; }, 0);
    });
  });
};

config.reset = reset;

module.exports = config;
