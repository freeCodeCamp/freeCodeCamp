module.exports.watch = watch;
module.exports.resetWatchers = resetWatchers;

var debug = require('debug')('nodemon:watch');
var debugRoot = require('debug')('nodemon');
var chokidar = require('chokidar');
var undefsafe = require('undefsafe');
var config = require('../config');
var path = require('path');
var utils = require('../utils');
var bus = utils.bus;
var match = require('./match');
var watchers = [];
var debouncedBus;

bus.on('reset', resetWatchers);

function resetWatchers() {
  debugRoot('resetting watchers');
  watchers.forEach(function (watcher) {
    watcher.close();
  });
  watchers = [];
}

function watch() {
  if (watchers.length) {
    debug('early exit on watch, still watching (%s)', watchers.length);
    return;
  }

  var dirs = [].slice.call(config.dirs);

  debugRoot('start watch on: %s', dirs.join(', '));
  const rootIgnored = config.options.ignore;
  debugRoot('ignored', rootIgnored);

  var watchedFiles = [];

  const promise = new Promise(function (resolve) {
    const dotFilePattern = /[/\\]\./;
    var ignored = match.rulesToMonitor(
      [], // not needed
      Array.from(rootIgnored),
      config
    ).map(pattern => pattern.slice(1));

    const addDotFile = dirs.filter(dir => dir.match(dotFilePattern));

    // don't ignore dotfiles if explicitly watched.
    if (addDotFile.length === 0) {
      ignored.push(dotFilePattern);
    }

    var watchOptions = {
      ignorePermissionErrors: true,
      ignored: ignored,
      persistent: true,
      usePolling: config.options.legacyWatch || false,
      interval: config.options.pollingInterval,
    };

    if (utils.isWindows) {
      watchOptions.disableGlobbing = true;
    }

    if (process.env.TEST) {
      watchOptions.useFsEvents = false;
    }

    var watcher = chokidar.watch(
      dirs,
      Object.assign({}, watchOptions, config.options.watchOptions || {})
    );

    watcher.ready = false;

    var total = 0;

    watcher.on('change', filterAndRestart);
    watcher.on('add', function (file) {
      if (watcher.ready) {
        return filterAndRestart(file);
      }

      watchedFiles.push(file);
      bus.emit('watching', file);
      debug('watching dir: %s', file);
    });
    watcher.on('ready', function () {
      watchedFiles = Array.from(new Set(watchedFiles)); // ensure no dupes
      total = watchedFiles.length;
      watcher.ready = true;
      resolve(total);
      debugRoot('watch is complete');
    });

    watcher.on('error', function (error) {
      if (error.code === 'EINVAL') {
        utils.log.error(
          'Internal watch failed. Likely cause: too many ' +
          'files being watched (perhaps from the root of a drive?\n' +
          'See https://github.com/paulmillr/chokidar/issues/229 for details'
        );
      } else {
        utils.log.error('Internal watch failed: ' + error.message);
        process.exit(1);
      }
    });

    watchers.push(watcher);
  });

  return promise.catch(e => {
    // this is a core error and it should break nodemon - so I have to break
    // out of a promise using the setTimeout
    setTimeout(() => {
      throw e;
    });
  }).then(function () {
    utils.log.detail(`watching ${watchedFiles.length} file${
      watchedFiles.length === 1 ? '' : 's'}`);
    return watchedFiles;
  });
}

function filterAndRestart(files) {
  if (!Array.isArray(files)) {
    files = [files];
  }

  if (files.length) {
    var cwd = process.cwd();
    if (this.options && this.options.cwd) {
      cwd = this.options.cwd;
    }

    utils.log.detail(
      'files triggering change check: ' +
      files
        .map(file => {
          const res = path.relative(cwd, file);
          return res;
        })
        .join(', ')
    );

    // make sure the path is right and drop an empty
    // filenames (sometimes on windows)
    files = files.filter(Boolean).map(file => {
      return path.relative(process.cwd(), path.relative(cwd, file));
    });

    if (utils.isWindows) {
      // ensure the drive letter is in uppercase (c:\foo -> C:\foo)
      files = files.map(f => {
        if (f.indexOf(':') === -1) { return f; }
        return f[0].toUpperCase() + f.slice(1);
      });
    }


    debug('filterAndRestart on', files);

    var matched = match(
      files,
      config.options.monitor,
      undefsafe(config, 'options.execOptions.ext')
    );

    debug('matched?', JSON.stringify(matched));

    // if there's no matches, then test to see if the changed file is the
    // running script, if so, let's allow a restart
    if (config.options.execOptions.script) {
      const script = path.resolve(config.options.execOptions.script);
      if (matched.result.length === 0 && script) {
        const length = script.length;
        files.find(file => {
          if (file.substr(-length, length) === script) {
            matched = {
              result: [file],
              total: 1,
            };
            return true;
          }
        });
      }
    }

    utils.log.detail(
      'changes after filters (before/after): ' +
      [files.length, matched.result.length].join('/')
    );

    // reset the last check so we're only looking at recently modified files
    config.lastStarted = Date.now();

    if (matched.result.length) {
      if (config.options.delay > 0) {
        utils.log.detail('delaying restart for ' + config.options.delay + 'ms');
        if (debouncedBus === undefined) {
          debouncedBus = debounce(restartBus, config.options.delay);
        }
        debouncedBus(matched);
      } else {
        return restartBus(matched);
      }
    }
  }
}

function restartBus(matched) {
  utils.log.status('restarting due to changes...');
  matched.result.map(file => {
    utils.log.detail(path.relative(process.cwd(), file));
  });

  if (config.options.verbose) {
    utils.log._log('');
  }

  bus.emit('restart', matched.result);
}

function debounce(fn, delay) {
  var timer = null;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() =>fn.apply(context, args), delay);
  };
}
