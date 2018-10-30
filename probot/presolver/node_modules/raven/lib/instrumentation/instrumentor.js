'use strict';

var utils = require('../utils');

var defaultOnConfig = {
  console: true,
  http: true
};

var defaultConfig = {
  console: false,
  http: false,
  pg: false
};

function instrument(Raven, config) {
  if (config === false) {
    return;
  } else if (config === true) {
    config = defaultOnConfig;
  } else {
    config = utils.extend({}, defaultConfig, config);
  }

  Raven.instrumentedOriginals = [];
  Raven.instrumentedModules = [];

  var Module = require('module');
  utils.fill(
    Module,
    '_load',
    function(origLoad) {
      return function(moduleId, parent, isMain) {
        var origModule = origLoad.apply(this, arguments);
        if (config[moduleId] && Raven.instrumentedModules.indexOf(moduleId) === -1) {
          Raven.instrumentedModules.push(moduleId);
          return require('./' + moduleId)(Raven, origModule, Raven.instrumentedOriginals);
        }
        return origModule;
      };
    },
    Raven.instrumentedOriginals
  );

  // special case: since console is built-in and app-level code won't require() it, do that here
  if (config.console) {
    require('console');
  }

  // observation: when the https module does its own require('http'), it *does not* hit our hooked require to instrument http on the fly
  // but if we've previously instrumented http, https *does* get our already-instrumented version
  // this is because raven's transports are required before this instrumentation takes place, which loads https (and http)
  // so module cache will have uninstrumented http; proactively loading it here ensures instrumented version is in module cache
  // alternatively we could refactor to load our transports later, but this is easier and doesn't have much drawback
  if (config.http) {
    require('http');
  }
}

function deinstrument(Raven) {
  if (!Raven.instrumentedOriginals) return;
  var original;
  // eslint-disable-next-line no-cond-assign
  while ((original = Raven.instrumentedOriginals.shift())) {
    var obj = original[0];
    var name = original[1];
    var orig = original[2];
    obj[name] = orig;
  }
}

module.exports = {
  instrument: instrument,
  deinstrument: deinstrument
};
