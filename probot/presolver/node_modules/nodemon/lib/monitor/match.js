const minimatch = require('minimatch');
const path = require('path');
const fs = require('fs');
const debug = require('debug')('nodemon:match');
const utils = require('../utils');

module.exports = match;
module.exports.rulesToMonitor = rulesToMonitor;

function rulesToMonitor(watch, ignore, config) {
  var monitor = [];

  if (!Array.isArray(ignore)) {
    if (ignore) {
      ignore = [ignore];
    } else {
      ignore = [];
    }
  }

  if (!Array.isArray(watch)) {
    if (watch) {
      watch = [watch];
    } else {
      watch = [];
    }
  }

  if (watch && watch.length) {
    monitor = utils.clone(watch);
  }

  if (ignore) {
    [].push.apply(monitor, (ignore || []).map(function (rule) {
      return '!' + rule;
    }));
  }

  var cwd = process.cwd();

  // next check if the monitored paths are actual directories
  // or just patterns - and expand the rule to include *.*
  monitor = monitor.map(function (rule) {
    var not = rule.slice(0, 1) === '!';

    if (not) {
      rule = rule.slice(1);
    }

    if (rule === '.' || rule === '.*') {
      rule = '*.*';
    }

    var dir = path.resolve(cwd, rule);

    try {
      var stat = fs.statSync(dir);
      if (stat.isDirectory()) {
        rule = dir;
        if (rule.slice(-1) !== '/') {
          rule += '/';
        }
        rule += '**/*';

        // `!not` ... sorry.
        if (!not) {
          config.dirs.push(dir);
        }
      } else {
        // ensures we end up in the check that tries to get a base directory
        // and then adds it to the watch list
        throw new Error();
      }
    } catch (e) {
      var base = tryBaseDir(dir);
      if (!not && base) {
        if (config.dirs.indexOf(base) === -1) {
          config.dirs.push(base);
        }
      }
    }

    if (rule.slice(-1) === '/') {
      // just slap on a * anyway
      rule += '*';
    }

    // if the url ends with * but not **/* and not *.*
    // then convert to **/* - somehow it was missed :-\
    if (rule.slice(-4) !== '**/*' &&
      rule.slice(-1) === '*' &&
      rule.indexOf('*.') === -1) {

      if (rule.slice(-2) !== '**') {
        rule += '*/*';
      }
    }


    return (not ? '!' : '') + rule;
  });

  return monitor;
}

function tryBaseDir(dir) {
  var stat;
  if (/[?*\{\[]+/.test(dir)) { // if this is pattern, then try to find the base
    try {
      var base = path.dirname(dir.replace(/([?*\{\[]+.*$)/, 'foo'));
      stat = fs.statSync(base);
      if (stat.isDirectory()) {
        return base;
      }
    } catch (error) {
      // console.log(error);
    }
  } else {
    try {
      stat = fs.statSync(dir);
      // if this path is actually a single file that exists, then just monitor
      // that, *specifically*.
      if (stat.isFile() || stat.isDirectory()) {
        return dir;
      }
    } catch (e) { }
  }

  return false;
}

function match(files, monitor, ext) {
  // sort the rules by highest specificity (based on number of slashes)
  // ignore rules (!) get sorted highest as they take precedent
  const cwd = process.cwd();
  var rules = monitor.sort(function (a, b) {
    var r = b.split(path.sep).length - a.split(path.sep).length;
    var aIsIgnore = a.slice(0, 1) === '!';
    var bIsIgnore = b.slice(0, 1) === '!';

    if (aIsIgnore || bIsIgnore) {
      if (aIsIgnore) {
        return -1;
      }

      return 1;
    }

    if (r === 0) {
      return b.length - a.length;
    }
    return r;
  }).map(function (s) {
    var prefix = s.slice(0, 1);

    if (prefix === '!') {
      if (s.indexOf('!' + cwd) === 0) {
        return s;
      }
      return '!**' + (prefix !== path.sep ? path.sep : '') + s.slice(1);
    }

    // if it starts with a period, then let's get the relative path
    if (s.indexOf('.') === 0) {
      return path.resolve(cwd, s);
    }

    if (s.indexOf(cwd) === 0) {
      return s;
    }

    return '**' + (prefix !== path.sep ? path.sep : '') + s;
  });

  debug('rules', rules);

  var good = [];
  var whitelist = []; // files that we won't check against the extension
  var ignored = 0;
  var watched = 0;
  var usedRules = [];
  var minimatchOpts = {
    dot: true,
  };

  // enable case-insensitivity on Windows
  if (utils.isWindows) {
    minimatchOpts.nocase = true;
  }

  files.forEach(function (file) {
    file = path.resolve(cwd, file);

    var matched = false;
    for (var i = 0; i < rules.length; i++) {
      if (rules[i].slice(0, 1) === '!') {
        if (!minimatch(file, rules[i], minimatchOpts)) {
          ignored++;
          matched = true;
          break;
        }
      } else {
        debug('match', file, minimatch(file, rules[i], minimatchOpts));
        if (minimatch(file, rules[i], minimatchOpts)) {
          watched++;

          // don't repeat the output if a rule is matched
          if (usedRules.indexOf(rules[i]) === -1) {
            usedRules.push(rules[i]);
            utils.log.detail('matched rule: ' + rules[i]);
          }

          // if the rule doesn't match the WATCH EVERYTHING
          // but *does* match a rule that ends with *.*, then
          // white list it - in that we don't run it through
          // the extension check too.
          if (rules[i] !== '**' + path.sep + '*.*' &&
            rules[i].slice(-3) === '*.*') {
            whitelist.push(file);
          } else if (path.basename(file) === path.basename(rules[i])) {
            // if the file matches the actual rule, then it's put on whitelist
            whitelist.push(file);
          } else {
            good.push(file);
          }
          matched = true;
          break;
        } else {
          // utils.log.detail('no match: ' + rules[i], file);
        }
      }
    }
    if (!matched) {
      ignored++;
    }
  });

  debug('good', good)

  // finally check the good files against the extensions that we're monitoring
  if (ext) {
    if (ext.indexOf(',') === -1) {
      ext = '**/*.' + ext;
    } else {
      ext = '**/*.{' + ext + '}';
    }

    good = good.filter(function (file) {
      // only compare the filename to the extension test
      return minimatch(path.basename(file), ext, minimatchOpts);
    });
  } // else assume *.*

  var result = good.concat(whitelist);

  if (utils.isWindows) {
    // fix for windows testing - I *think* this is okay to do
    result = result.map(function (file) {
      return file.slice(0, 1).toLowerCase() + file.slice(1);
    });
  }

  return {
    result: result,
    ignored: ignored,
    watched: watched,
    total: files.length,
  };
}
