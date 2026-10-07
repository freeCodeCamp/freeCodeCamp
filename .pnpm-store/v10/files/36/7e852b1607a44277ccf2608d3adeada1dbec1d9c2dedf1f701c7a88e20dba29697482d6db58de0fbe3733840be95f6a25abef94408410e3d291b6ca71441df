'use strict';
/**
 * @module Landing
 */
/**
 * Module dependencies.
 */

var Base = require('./base');
var inherits = require('../utils').inherits;
var constants = require('../runner').constants;
var EVENT_RUN_BEGIN = constants.EVENT_RUN_BEGIN;
var EVENT_RUN_END = constants.EVENT_RUN_END;
var EVENT_TEST_END = constants.EVENT_TEST_END;
var STATE_FAILED = require('../runnable').constants.STATE_FAILED;

var cursor = Base.cursor;
var color = Base.color;

/**
 * Expose `Landing`.
 */

exports = module.exports = Landing;

/**
 * Airplane color.
 */

Base.colors.plane = 0;

/**
 * Airplane crash color.
 */

Base.colors['plane crash'] = 31;

/**
 * Runway color.
 */

Base.colors.runway = 90;

/**
 * Constructs a new `Landing` reporter instance.
 *
 * @public
 * @class
 * @memberof Mocha.reporters
 * @extends Mocha.reporters.Base
 * @param {Runner} runner - Instance triggers reporter actions.
 * @param {Object} [options] - runner options
 */
function Landing(runner, options) {
  Base.call(this, runner, options);

  var self = this;
  var width = (Base.window.width * 0.75) | 0;
  var stream = process.stdout;

  var plane = color('plane', '✈');
  var crashed = -1;
  var n = 0;
  var total = 0;

  function runway() {
    var buf = Array(width).join('-');
    return '  ' + color('runway', buf);
  }

  runner.on(EVENT_RUN_BEGIN, function () {
    stream.write('\n\n\n  ');
    cursor.hide();
  });

  runner.on(EVENT_TEST_END, function (test) {
    // check if the plane crashed
    var col = crashed === -1 ? ((width * ++n) / ++total) | 0 : crashed;
    // show the crash
    if (test.state === STATE_FAILED) {
      plane = color('plane crash', '✈');
      crashed = col;
    }

    // render landing strip
    stream.write('\u001b[' + (width + 1) + 'D\u001b[2A');
    stream.write(runway());
    stream.write('\n  ');
    stream.write(color('runway', Array(col).join('⋅')));
    stream.write(plane);
    stream.write(color('runway', Array(width - col).join('⋅') + '\n'));
    stream.write(runway());
    stream.write('\u001b[0m');
  });

  runner.once(EVENT_RUN_END, function () {
    cursor.show();
    process.stdout.write('\n');
    self.epilogue();
  });

  // if cursor is hidden when we ctrl-C, then it will remain hidden unless...
  process.once('SIGINT', function () {
    cursor.show();
    process.nextTick(function () {
      process.kill(process.pid, 'SIGINT');
    });
  });
}

/**
 * Inherit from `Base.prototype`.
 */
inherits(Landing, Base);

Landing.description = 'Unicode landing strip';
