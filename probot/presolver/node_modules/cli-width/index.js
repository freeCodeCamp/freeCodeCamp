'use strict';

exports = module.exports = cliWidth;

function normalizeOpts(options) {
  var defaultOpts = {
    defaultWidth: 0,
    output: process.stdout,
    tty: require('tty')
  };

  if (!options) {
    return defaultOpts;
  } else {
    Object.keys(defaultOpts).forEach(function (key) {
      if (!options[key]) {
        options[key] = defaultOpts[key];
      }
    });

    return options;
  }
}

function cliWidth(options) {
  var opts = normalizeOpts(options);

  if (opts.output.getWindowSize) {
    return opts.output.getWindowSize()[0] || opts.defaultWidth;
  } else {
    if (opts.tty.getWindowSize) {
      return opts.tty.getWindowSize()[1] || opts.defaultWidth;
    } else {
      if (opts.output.columns) {
        return opts.output.columns;
      } else {
        if (process.env.CLI_WIDTH) {
          var width = parseInt(process.env.CLI_WIDTH, 10);

          if (!isNaN(width) && width !== 0) {
            return width;
          }
        }
      }

      return opts.defaultWidth;
    }
  }
};
