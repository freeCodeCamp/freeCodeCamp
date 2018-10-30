'use strict';
var _ = require('lodash');


/**
 * Choice object
 * Normalize input as choice object
 * @constructor
 * @param {String|Object} val  Choice value. If an object is passed, it should contains
 *                             at least one of `value` or `name` property
 */

var Choice = module.exports = function (val, answers) {
  // Don't process Choice and Separator object
  if (val instanceof Choice || val.type === 'separator') {
    return val;
  }

  if (_.isString(val)) {
    this.name = val;
    this.value = val;
    this.short = val;
  } else {
    _.extend(this, val, {
      name: val.name || val.value,
      value: val.hasOwnProperty('value') ? val.value : val.name,
      short: val.short || val.name || val.value
    });
  }

  if (_.isFunction(val.disabled)) {
    this.disabled = val.disabled(answers);
  } else {
    this.disabled = val.disabled;
  }
};
