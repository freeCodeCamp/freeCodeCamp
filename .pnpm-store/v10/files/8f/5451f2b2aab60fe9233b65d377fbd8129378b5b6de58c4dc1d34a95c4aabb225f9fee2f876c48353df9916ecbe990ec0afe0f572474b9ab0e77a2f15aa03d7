'use strict';


var format  = require('util').format;


var ERR_CODE = 'ARGError';

/*:nodoc:*
 * argumentError(argument, message) -> TypeError
 * - argument (Object): action with broken argument
 * - message (String): error message
 *
 * Error format helper. An error from creating or using an argument
 * (optional or positional). The string value of this exception
 * is the message, augmented with information
 * about the argument that caused it.
 *
 * #####Example
 *
 *      var argumentErrorHelper = require('./argument/error');
 *      if (conflictOptionals.length > 0) {
 *        throw argumentErrorHelper(
 *          action,
 *          format('Conflicting option string(s): %s', conflictOptionals.join(', '))
 *        );
 *      }
 *
 **/
module.exports = function (argument, message) {
  var argumentName = null;
  var errMessage;
  var err;

  if (argument.getName) {
    argumentName = argument.getName();
  } else {
    argumentName = '' + argument;
  }

  if (!argumentName) {
    errMessage = message;
  } else {
    errMessage = format('argument "%s": %s', argumentName, message);
  }

  err = new TypeError(errMessage);
  err.code = ERR_CODE;
  return err;
};
