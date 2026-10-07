'use strict';

var assert = require('assert');
var defaultMessage = 'valid mongo id';

module.exports = function joiObjectId(Joi, message) {
  assert(Joi && Joi.object, 'you must pass Joi as an argument');
  if (message == undefined) {
    message = defaultMessage;
  }
  return function objectId() {
    return Joi.string().regex(/^[0-9a-fA-F]{24}$/, message);
  };
};
