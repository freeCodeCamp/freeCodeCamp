const { Argument } = require('./lib/argument.js');
const { Command } = require('./lib/command.js');
const { CommanderError, InvalidArgumentError } = require('./lib/error.js');
const { Help } = require('./lib/help.js');
const { Option } = require('./lib/option.js');

exports.program = new Command();

exports.createCommand = (name) => new Command(name);
exports.createOption = (flags, description) => new Option(flags, description);
exports.createArgument = (name, description) => new Argument(name, description);

/**
 * Expose classes
 */

exports.Command = Command;
exports.Option = Option;
exports.Argument = Argument;
exports.Help = Help;

exports.CommanderError = CommanderError;
exports.InvalidArgumentError = InvalidArgumentError;
exports.InvalidOptionArgumentError = InvalidArgumentError; // Deprecated
