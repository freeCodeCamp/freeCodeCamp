'use strict';

/* global Promise */

var _ = require('lodash');
var nock = require('./scope');
var recorder = require('./recorder');

var format = require('util').format;
var path = require('path');
var expect = require('chai').expect;
var debug = require('debug')('nock.back');

var _mode = null;

var fs;

try {
  fs = require('fs');
} catch(err) {
  // do nothing, probably in browser
}

var mkdirp;
try {
  mkdirp = require('mkdirp');
} catch(err) {
  // do nothing, probably in browser
}


/**
 * nock the current function with the fixture given
 *
 * @param {string}   fixtureName  - the name of the fixture, e.x. 'foo.json'
 * @param {object}   options      - [optional] extra options for nock with, e.x. `{ assert: true }`
 * @param {function} nockedFn     - [optional] callback function to be executed with the given fixture being loaded;
 *                                  if defined the function will be called with context `{ scopes: loaded_nocks || [] }`
 *                                  set as `this` and `nockDone` callback function as first and only parameter;
 *                                  if not defined a promise resolving to `{nockDone, context}` where `context` is
 *                                  aforementioned `{ scopes: loaded_nocks || [] }`
 *
 * List of options:
 *
 * @param {function} before       - a preprocessing function, gets called before nock.define
 * @param {function} after        - a postprocessing function, gets called after nock.define
 * @param {function} afterRecord  - a postprocessing function, gets called after recording. Is passed the array
 *                                  of scopes recorded and should return the array scopes to save to the fixture
 * @param {function} recorder     - custom options to pass to the recorder
 *
 */
function Back (fixtureName, options, nockedFn) {
  if(!Back.fixtures) {
    throw new Error(  'Back requires nock.back.fixtures to be set\n' +
                      'Ex:\n' +
                      '\trequire(nock).back.fixtures = \'/path/to/fixures/\'');
  }

  if (!_.isString(fixtureName)) {
    throw new Error('Parameter fixtureName must be a string');
  }

  if( arguments.length === 1 ) {
    options = {};
  } else if( arguments.length === 2 ) {
    // If 2nd parameter is a function then `options` has been omitted
    // otherwise `options` haven't been omitted but `nockedFn` was.
    if (_.isFunction(options)) {
      nockedFn = options;
      options = {};
    }
  }

  _mode.setup();

  var fixture = path.join(Back.fixtures, fixtureName)
    , context = _mode.start(fixture, options);


  var nockDone = function () {
    _mode.finish(fixture, options, context);
  };

  debug('context:', context);

  // If nockedFn is a function then invoke it, otherwise return a promise resolving to nockDone.
  if (_.isFunction(nockedFn)) {
    nockedFn.call(context, nockDone);
  } else {
    return Promise.resolve({nockDone: nockDone, context: context});
  }
}




/*******************************************************************************
*                                    Modes                                     *
*******************************************************************************/


var wild = {


  setup: function () {
    nock.cleanAll();
    recorder.restore();
    nock.activate();
    nock.enableNetConnect();
  },


  start: function () {
    return load(); //don't load anything but get correct context
  },


  finish: function () {
    //nothing to do
  }


};




var dryrun = {


  setup: function () {
    recorder.restore();
    nock.cleanAll();
    nock.activate();
    //  We have to explicitly enable net connectivity as by default it's off.
    nock.enableNetConnect();
  },


  start: function (fixture, options) {
    var contexts = load(fixture, options);

    nock.enableNetConnect();
    return contexts;
  },


  finish: function () {
    //nothing to do
  }


};




var record = {


  setup: function () {
    recorder.restore();
    recorder.clear();
    nock.cleanAll();
    nock.activate();
    nock.disableNetConnect();
  },


  start: function (fixture, options) {
    if (! fs) {
      throw new Error('no fs');
    }
    var context = load(fixture, options);

    if( !context.isLoaded ) {
      recorder.record(_.assign({
        dont_print: true,
        output_objects: true
      }, options && options.recorder));

      context.isRecording = true;
    }

    return context;
  },


  finish: function (fixture, options, context) {
    if( context.isRecording ) {
      var outputs = recorder.outputs();

      if( typeof options.afterRecord === 'function' ) {
        outputs = options.afterRecord(outputs);
      }

      outputs = JSON.stringify(outputs, null, 4);
      debug('recorder outputs:', outputs);

      mkdirp.sync(path.dirname(fixture));
      fs.writeFileSync(fixture, outputs);
    }
  }


};




var lockdown = {


  setup: function () {
    recorder.restore();
    recorder.clear();
    nock.cleanAll();
    nock.activate();
    nock.disableNetConnect();
  },


  start: function (fixture, options) {
    return load(fixture, options);
  },


  finish: function () {
    //nothing to do
  }


};




function load (fixture, options) {
  var context = {
    scopes : [],
    assertScopesFinished: function () {
      assertScopes(this.scopes, fixture);
    }
  };

  if( fixture && fixtureExists(fixture) ) {
    var scopes = nock.loadDefs(fixture);
    applyHook(scopes, options.before);

    scopes = nock.define(scopes);
    applyHook(scopes, options.after);

    context.scopes = scopes;
    context.isLoaded = true;
  }


  return context;
}




function applyHook(scopes, fn) {
  if( !fn ) {
    return;
  }

  if( typeof fn !== 'function' ) {
    throw new Error ('processing hooks must be a function');
  }

  scopes.forEach(fn);
}




function fixtureExists(fixture) {
  if (! fs) {
    throw new Error('no fs');
  }

  return fs.existsSync(fixture);
}




function assertScopes (scopes, fixture) {
  scopes.forEach(function (scope) {
    expect( scope.isDone() )
    .to.be.equal(
      true,
      format('%j was not used, consider removing %s to rerecord fixture', scope.pendingMocks(), fixture)
    );
  });
}




var Modes = {

  wild: wild, //all requests go out to the internet, dont replay anything, doesnt record anything

  dryrun: dryrun, //use recorded nocks, allow http calls, doesnt record anything, useful for writing new tests (default)

  record: record, //use recorded nocks, record new nocks

  lockdown: lockdown, //use recorded nocks, disables all http calls even when not nocked, doesnt record

};





Back.setMode = function(mode) {
  if( !Modes.hasOwnProperty(mode) ) {
    throw new Error ('Unknown mode: ' + mode);
  }

  Back.currentMode = mode;
  debug('New nock back mode:', Back.currentMode);

  _mode = Modes[mode];
  _mode.setup();
};




Back.fixtures = null;
Back.currentMode = null;
Back.setMode(process.env.NOCK_BACK_MODE || 'dryrun');

module.exports = exports = Back;
