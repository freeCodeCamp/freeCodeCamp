/*

nodemon is a utility for node, and replaces the use of the executable
node. So the user calls `nodemon foo.js` instead.

nodemon can be run in a number of ways:

`nodemon` - tries to use package.json#main property to run
`nodemon` - if no package, looks for index.js
`nodemon app.js` - runs app.js
`nodemon --arg app.js --apparg` - eats arg1, and runs app.js with apparg
`nodemon --apparg` - as above, but passes apparg to package.json#main (or
  index.js)
`nodemon --debug app.js

*/

var fs = require('fs');
var path = require('path');
var existsSync = fs.existsSync || path.existsSync;

module.exports = parse;

/**
 * Parses the command line arguments `process.argv` and returns the
 * nodemon options, the user script and the executable script.
 *
 * @param  {Array} full process arguments, including `node` leading arg
 * @return {Object} { options, script, args }
 */
function parse(argv) {
  if (typeof argv === 'string') {
    argv = argv.split(' ');
  }

  var eat = function (i, args) {
    if (i <= args.length) {
      return args.splice(i + 1, 1).pop();
    }
  };

  var args = argv.slice(2);
  var script = null;
  var nodemonOptions = { scriptPosition: null };

  var nodemonOpt = nodemonOption.bind(null, nodemonOptions);
  var lookForArgs = true;

  // move forward through the arguments
  for (var i = 0; i < args.length; i++) {
    // if the argument looks like a file, then stop eating
    if (!script) {
      if (args[i] === '.' || existsSync(args[i])) {
        script = args.splice(i, 1).pop();

        // we capture the position of the script because we'll reinsert it in
        // the right place in run.js:command (though I'm not sure we should even
        // take it out of the array in the first place, but this solves passing
        // arguments to the exec process for now).
        nodemonOptions.scriptPosition = i;
        i--;
        continue;
      }
    }

    if (lookForArgs) {
      // respect the standard way of saying: hereafter belongs to my script
      if (args[i] === '--') {
        args.splice(i, 1);
        nodemonOptions.scriptPosition = i;
        // cycle back one argument, as we just ate this one up
        i--;

        // ignore all further nodemon arguments
        lookForArgs = false;

        // move to the next iteration
        continue;
      }

      if (nodemonOpt(args[i], eat.bind(null, i, args)) !== false) {
        args.splice(i, 1);
        // cycle back one argument, as we just ate this one up
        i--;
      }
    }
  }

  nodemonOptions.script = script;
  nodemonOptions.args = args;

  return nodemonOptions;
}


/**
 * Given an argument (ie. from process.argv), sets nodemon
 * options and can eat up the argument value
 *
 * @param {Object} options object that will be updated
 * @param {Sting} current argument from argv
 * @param {Function} the callback to eat up the next argument in argv
 * @return {Boolean} false if argument was not a nodemon arg
 */
function nodemonOption(options, arg, eatNext) {
  // line separation on purpose to help legibility
  if (arg === '--help' || arg === '-h' || arg === '-?') {
    var help = eatNext();
    options.help = help ? help : true;
  } else

  if (arg === '--version' || arg === '-v') {
    options.version = true;
  } else

  if (arg === '--no-update-notifier') {
    options.noUpdateNotifier = true;
  } else

  if (arg === '--spawn') {
    options.spawn = true;
  } else

  if (arg === '--dump') {
    options.dump = true;
  } else

  if (arg === '--verbose' || arg === '-V') {
    options.verbose = true;
  } else

  if (arg === '--legacy-watch' || arg === '-L') {
    options.legacyWatch = true;
  } else

  if (arg === '--polling-interval' || arg === '-P') {
    options.pollingInterval = parseInt(eatNext(), 10);
  } else

  // Depricated as this is "on" by default
  if (arg === '--js') {
    options.js = true;
  } else

  if (arg === '--quiet' || arg === '-q') {
    options.quiet = true;
  } else

  if (arg === '--config') {
    options.configFile = eatNext();
  } else

  if (arg === '--watch' || arg === '-w') {
    if (!options.watch) { options.watch = []; }
    options.watch.push(eatNext());
  } else

  if (arg === '--ignore' || arg === '-i') {
    if (!options.ignore) { options.ignore = []; }
    options.ignore.push(eatNext());
  } else

  if (arg === '--exitcrash') {
    options.exitcrash = true;
  } else

  if (arg === '--delay' || arg === '-d') {
    options.delay = parseDelay(eatNext());
  } else

  if (arg === '--exec' || arg === '-x') {
    options.exec = eatNext();
  } else

  if (arg === '--no-stdin' || arg === '-I') {
    options.stdin = false;
  } else

  if (arg === '--on-change-only' || arg === '-C') {
    options.runOnChangeOnly = true;
  } else

  if (arg === '--ext' || arg === '-e') {
    options.ext = eatNext();
  } else

  if (arg === '--no-colours' || arg === '--no-colors') {
    options.colours = false;
  } else

  if (arg === '--signal' || arg === '-s') {
    options.signal = eatNext();
  } else

  if (arg === '--cwd') {
    options.cwd = eatNext();

    // go ahead and change directory. This is primarily for nodemon tools like
    // grunt-nodemon - we're doing this early because it will affect where the
    // user script is searched for.
    process.chdir(path.resolve(options.cwd));
  } else {

    // this means we didn't match
    return false;
  }
}

/**
 * Given an argument (ie. from nodemonOption()), will parse and return the
 * equivalent millisecond value or 0 if the argument cannot be parsed
 *
 * @param {String} argument value given to the --delay option
 * @return {Number} millisecond equivalent of the argument
 */
function parseDelay(value) {
  var millisPerSecond = 1000;
  var millis = 0;

  if (value.match(/^\d*ms$/)) {
    // Explicitly parse for milliseconds when using ms time specifier
    millis = parseInt(value, 10);
  } else {
    // Otherwise, parse for seconds, with or without time specifier then convert
    millis = parseFloat(value) * millisPerSecond;
  }

  return isNaN(millis) ? 0 : millis;
}

