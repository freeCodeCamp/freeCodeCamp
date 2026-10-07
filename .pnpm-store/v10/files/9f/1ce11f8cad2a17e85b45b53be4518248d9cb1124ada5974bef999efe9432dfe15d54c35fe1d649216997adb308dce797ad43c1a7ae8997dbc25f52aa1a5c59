var path = require('path');

var extension = require('./lib/extension');
var normalize = require('./lib/normalize');
var register = require('./lib/register');

exports.prepare = function(extensions, filepath, cwd, nothrow) {
  var config, usedExtension, err, option, attempt, error;
  var attempts = [];
  var onlyErrors = true;
  var exts = extension(filepath);

  if (exts) {
    exts.some(function(ext) {
      usedExtension = ext;
      config = normalize(extensions[ext]);
      return !!config;
    });
  }

  if (Object.keys(require.extensions).indexOf(usedExtension) !== -1) {
    return true;
  }

  if (!config) {
    if (nothrow) {
      return;
    }

    throw new Error('No module loader found for "' + usedExtension + '".');
  }

  if (!cwd) {
    cwd = path.dirname(path.resolve(filepath));
  }
  if (!Array.isArray(config)) {
    config = [config];
  }

  for (var i in config) {
    option = config[i];
    attempt = register(cwd, option.module, option.register);
    error = (attempt instanceof Error) ? attempt : null;
    if (error) {
      attempt = null;
    }
    attempts.push({
      moduleName: option.module,
      module: attempt,
      error: error,
    });
    if (!error) {
      onlyErrors = false;
      break;
    }
  }
  if (onlyErrors) {
    err = new Error('Unable to use specified module loaders for "' + usedExtension + '".');
    err.failures = attempts;
    if (nothrow) {
      return err;
    }

    throw err;
  }
  return attempts;
};
