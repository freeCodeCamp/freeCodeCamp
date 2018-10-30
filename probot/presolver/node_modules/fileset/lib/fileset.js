var util         = require('util');
var minimatch    = require('minimatch');
var glob         = require('glob');
var Glob         = glob.Glob;
var EventEmitter = require('events').EventEmitter;

module.exports = fileset;

// Async API
function fileset(include, exclude, options, cb) {
  if (typeof exclude === 'function') cb = exclude, exclude = '';
  else if (typeof options === 'function') cb = options, options = {};

  var includes = (typeof include === 'string') ? include.split(' ') : include;
  var excludes = (typeof exclude === 'string') ? exclude.split(' ') : exclude;

  var em = new EventEmitter;
  var remaining = includes.length;
  var results = [];

  if (!includes.length) return cb(new Error('Must provide an include pattern'));

  em.includes = includes.map(function(pattern) {
    return new fileset.Fileset(pattern, options)
      .on('error', cb ? cb : em.emit.bind(em, 'error'))
      .on('match', em.emit.bind(em, 'match'))
      .on('match', em.emit.bind(em, 'include'))
      .on('end', next.bind({}, pattern))
  });

  function next(pattern, matches) {
    results = results.concat(matches);

    if (!(--remaining)) {
      results = results.filter(function(file) {
        return !excludes.filter(function(glob) {
          var match = minimatch(file, glob, { matchBase: true });
          if(match) em.emit('exclude', file);
          return match;
        }).length;
      });

      if(cb) cb(null, results);
      em.emit('end', results);
    }
  }

  return em;
}

// Sync API
fileset.sync = function filesetSync(include, exclude) {
  if (!exclude) exclude = '';

  // includes / excludes, either an array or string separated by comma or whitespace
  var includes = (typeof include === 'string') ? include.split(/[\s,]/g) : include;
  var excludes = (typeof exclude === 'string') ? exclude.split(/[\s,]/g) : exclude;

  // Filter out any false positive '' empty strings
  includes = includes.filter(function(pattern) { return pattern; });
  excludes = excludes.filter(function(pattern) { return pattern; });

  // - todo: pass in glob options as last param
  var options = { matchBase: true };

  // always ignore node_modules for sync api
  options.ignore = ['node_modules/**/*'];

  // First, glob match on all include patters into a single array
  var results = includes.map(function(include) {
    return glob.sync(include, options);
  }).reduce(function(a, b) {
    return a.concat(b);
  }, []);

  // Then filters out on any exclude match
  var ignored = excludes.map(function(exclude) {
    return glob.sync(exclude, options);
  }).reduce(function(a, b) {
    return a.concat(b);
  }, []);

  // And filter any exclude match
  results = results.filter(function(file) {
    return !ignored.filter(function(glob) {
      return minimatch(file, glob, { matchBase: true });
    }).length;
  });

  return results;
};

fileset.Fileset = function Fileset(pattern, options, cb) {
  if (typeof options === 'function') cb = options, options = {};
  if (!options) options = {};

  // ignore node_modules by default, unless specified
  options.ignore = options.ignore || ['node_modules/**/*'];

  Glob.call(this, pattern, options);

  if (typeof cb === 'function') {
    this.on('error', cb);
    this.on('end', function(matches) { cb(null, matches); });
  }
};

util.inherits(fileset.Fileset, Glob);
