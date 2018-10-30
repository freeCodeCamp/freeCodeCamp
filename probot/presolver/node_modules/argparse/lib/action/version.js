/*:nodoc:*
 * class ActionVersion
 *
 * Support action for printing program version
 * This class inherited from [[Action]]
 **/
'use strict';

var util = require('util');

var Action = require('../action');

//
// Constants
//
var c = require('../const');

/*:nodoc:*
 * new ActionVersion(options)
 * - options (object): options hash see [[Action.new]]
 *
 **/
var ActionVersion = module.exports = function ActionVersion(options) {
  options = options || {};
  options.defaultValue = (options.defaultValue ? options.defaultValue : c.SUPPRESS);
  options.dest = (options.dest || c.SUPPRESS);
  options.nargs = 0;
  this.version = options.version;
  Action.call(this, options);
};
util.inherits(ActionVersion, Action);

/*:nodoc:*
 * ActionVersion#call(parser, namespace, values, optionString) -> Void
 * - parser (ArgumentParser): current parser
 * - namespace (Namespace): namespace for output data
 * - values (Array): parsed values
 * - optionString (Array): input option string(not parsed)
 *
 * Print version and exit
 **/
ActionVersion.prototype.call = function (parser) {
  var version = this.version || parser.version;
  var formatter = parser._getFormatter();
  formatter.addText(version);
  parser.exit(0, formatter.formatHelp());
};
