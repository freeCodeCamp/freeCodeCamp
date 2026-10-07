const EventEmitter = require('node:events').EventEmitter;
const childProcess = require('node:child_process');
const path = require('node:path');
const fs = require('node:fs');
const process = require('node:process');

const { Argument, humanReadableArgName } = require('./argument.js');
const { CommanderError } = require('./error.js');
const { Help, stripColor } = require('./help.js');
const { Option, DualOptions } = require('./option.js');
const { suggestSimilar } = require('./suggestSimilar');

class Command extends EventEmitter {
  /**
   * Initialize a new `Command`.
   *
   * @param {string} [name]
   */

  constructor(name) {
    super();
    /** @type {Command[]} */
    this.commands = [];
    /** @type {Option[]} */
    this.options = [];
    this.parent = null;
    this._allowUnknownOption = false;
    this._allowExcessArguments = false;
    /** @type {Argument[]} */
    this.registeredArguments = [];
    this._args = this.registeredArguments; // deprecated old name
    /** @type {string[]} */
    this.args = []; // cli args with options removed
    this.rawArgs = [];
    this.processedArgs = []; // like .args but after custom processing and collecting variadic
    this._scriptPath = null;
    this._name = name || '';
    this._optionValues = {};
    this._optionValueSources = {}; // default, env, cli etc
    this._storeOptionsAsProperties = false;
    this._actionHandler = null;
    this._executableHandler = false;
    this._executableFile = null; // custom name for executable
    this._executableDir = null; // custom search directory for subcommands
    this._defaultCommandName = null;
    this._exitCallback = null;
    this._aliases = [];
    this._combineFlagAndOptionalValue = true;
    this._description = '';
    this._summary = '';
    this._argsDescription = undefined; // legacy
    this._enablePositionalOptions = false;
    this._passThroughOptions = false;
    this._lifeCycleHooks = {}; // a hash of arrays
    /** @type {(boolean | string)} */
    this._showHelpAfterError = false;
    this._showSuggestionAfterError = true;
    this._savedState = null; // used in save/restoreStateBeforeParse

    // see configureOutput() for docs
    this._outputConfiguration = {
      writeOut: (str) => process.stdout.write(str),
      writeErr: (str) => process.stderr.write(str),
      outputError: (str, write) => write(str),
      getOutHelpWidth: () =>
        process.stdout.isTTY ? process.stdout.columns : undefined,
      getErrHelpWidth: () =>
        process.stderr.isTTY ? process.stderr.columns : undefined,
      getOutHasColors: () =>
        useColor() ?? (process.stdout.isTTY && process.stdout.hasColors?.()),
      getErrHasColors: () =>
        useColor() ?? (process.stderr.isTTY && process.stderr.hasColors?.()),
      stripColor: (str) => stripColor(str),
    };

    this._hidden = false;
    /** @type {(Option | null | undefined)} */
    this._helpOption = undefined; // Lazy created on demand. May be null if help option is disabled.
    this._addImplicitHelpCommand = undefined; // undecided whether true or false yet, not inherited
    /** @type {Command} */
    this._helpCommand = undefined; // lazy initialised, inherited
    this._helpConfiguration = {};
    /** @type {string | undefined} */
    this._helpGroupHeading = undefined; // soft initialised when added to parent
    /** @type {string | undefined} */
    this._defaultCommandGroup = undefined;
    /** @type {string | undefined} */
    this._defaultOptionGroup = undefined;
  }

  /**
   * Copy settings that are useful to have in common across root command and subcommands.
   *
   * (Used internally when adding a command using `.command()` so subcommands inherit parent settings.)
   *
   * @param {Command} sourceCommand
   * @return {Command} `this` command for chaining
   */
  copyInheritedSettings(sourceCommand) {
    this._outputConfiguration = sourceCommand._outputConfiguration;
    this._helpOption = sourceCommand._helpOption;
    this._helpCommand = sourceCommand._helpCommand;
    this._helpConfiguration = sourceCommand._helpConfiguration;
    this._exitCallback = sourceCommand._exitCallback;
    this._storeOptionsAsProperties = sourceCommand._storeOptionsAsProperties;
    this._combineFlagAndOptionalValue =
      sourceCommand._combineFlagAndOptionalValue;
    this._allowExcessArguments = sourceCommand._allowExcessArguments;
    this._enablePositionalOptions = sourceCommand._enablePositionalOptions;
    this._showHelpAfterError = sourceCommand._showHelpAfterError;
    this._showSuggestionAfterError = sourceCommand._showSuggestionAfterError;

    return this;
  }

  /**
   * @returns {Command[]}
   * @private
   */

  _getCommandAndAncestors() {
    const result = [];
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    for (let command = this; command; command = command.parent) {
      result.push(command);
    }
    return result;
  }

  /**
   * Define a command.
   *
   * There are two styles of command: pay attention to where to put the description.
   *
   * @example
   * // Command implemented using action handler (description is supplied separately to `.command`)
   * program
   *   .command('clone <source> [destination]')
   *   .description('clone a repository into a newly created directory')
   *   .action((source, destination) => {
   *     console.log('clone command called');
   *   });
   *
   * // Command implemented using separate executable file (description is second parameter to `.command`)
   * program
   *   .command('start <service>', 'start named service')
   *   .command('stop [service]', 'stop named service, or all if no name supplied');
   *
   * @param {string} nameAndArgs - command name and arguments, args are `<required>` or `[optional]` and last may also be `variadic...`
   * @param {(object | string)} [actionOptsOrExecDesc] - configuration options (for action), or description (for executable)
   * @param {object} [execOpts] - configuration options (for executable)
   * @return {Command} returns new command for action handler, or `this` for executable command
   */

  command(nameAndArgs, actionOptsOrExecDesc, execOpts) {
    let desc = actionOptsOrExecDesc;
    let opts = execOpts;
    if (typeof desc === 'object' && desc !== null) {
      opts = desc;
      desc = null;
    }
    opts = opts || {};
    const [, name, args] = nameAndArgs.match(/([^ ]+) *(.*)/);

    const cmd = this.createCommand(name);
    if (desc) {
      cmd.description(desc);
      cmd._executableHandler = true;
    }
    if (opts.isDefault) this._defaultCommandName = cmd._name;
    cmd._hidden = !!(opts.noHelp || opts.hidden); // noHelp is deprecated old name for hidden
    cmd._executableFile = opts.executableFile || null; // Custom name for executable file, set missing to null to match constructor
    if (args) cmd.arguments(args);
    this._registerCommand(cmd);
    cmd.parent = this;
    cmd.copyInheritedSettings(this);

    if (desc) return this;
    return cmd;
  }

  /**
   * Factory routine to create a new unattached command.
   *
   * See .command() for creating an attached subcommand, which uses this routine to
   * create the command. You can override createCommand to customise subcommands.
   *
   * @param {string} [name]
   * @return {Command} new command
   */

  createCommand(name) {
    return new Command(name);
  }

  /**
   * You can customise the help with a subclass of Help by overriding createHelp,
   * or by overriding Help properties using configureHelp().
   *
   * @return {Help}
   */

  createHelp() {
    return Object.assign(new Help(), this.configureHelp());
  }

  /**
   * You can customise the help by overriding Help properties using configureHelp(),
   * or with a subclass of Help by overriding createHelp().
   *
   * @param {object} [configuration] - configuration options
   * @return {(Command | object)} `this` command for chaining, or stored configuration
   */

  configureHelp(configuration) {
    if (configuration === undefined) return this._helpConfiguration;

    this._helpConfiguration = configuration;
    return this;
  }

  /**
   * The default output goes to stdout and stderr. You can customise this for special
   * applications. You can also customise the display of errors by overriding outputError.
   *
   * The configuration properties are all functions:
   *
   *     // change how output being written, defaults to stdout and stderr
   *     writeOut(str)
   *     writeErr(str)
   *     // change how output being written for errors, defaults to writeErr
   *     outputError(str, write) // used for displaying errors and not used for displaying help
   *     // specify width for wrapping help
   *     getOutHelpWidth()
   *     getErrHelpWidth()
   *     // color support, currently only used with Help
   *     getOutHasColors()
   *     getErrHasColors()
   *     stripColor() // used to remove ANSI escape codes if output does not have colors
   *
   * @param {object} [configuration] - configuration options
   * @return {(Command | object)} `this` command for chaining, or stored configuration
   */

  configureOutput(configuration) {
    if (configuration === undefined) return this._outputConfiguration;

    this._outputConfiguration = {
      ...this._outputConfiguration,
      ...configuration,
    };
    return this;
  }

  /**
   * Display the help or a custom message after an error occurs.
   *
   * @param {(boolean|string)} [displayHelp]
   * @return {Command} `this` command for chaining
   */
  showHelpAfterError(displayHelp = true) {
    if (typeof displayHelp !== 'string') displayHelp = !!displayHelp;
    this._showHelpAfterError = displayHelp;
    return this;
  }

  /**
   * Display suggestion of similar commands for unknown commands, or options for unknown options.
   *
   * @param {boolean} [displaySuggestion]
   * @return {Command} `this` command for chaining
   */
  showSuggestionAfterError(displaySuggestion = true) {
    this._showSuggestionAfterError = !!displaySuggestion;
    return this;
  }

  /**
   * Add a prepared subcommand.
   *
   * See .command() for creating an attached subcommand which inherits settings from its parent.
   *
   * @param {Command} cmd - new subcommand
   * @param {object} [opts] - configuration options
   * @return {Command} `this` command for chaining
   */

  addCommand(cmd, opts) {
    if (!cmd._name) {
      throw new Error(`Command passed to .addCommand() must have a name
- specify the name in Command constructor or using .name()`);
    }

    opts = opts || {};
    if (opts.isDefault) this._defaultCommandName = cmd._name;
    if (opts.noHelp || opts.hidden) cmd._hidden = true; // modifying passed command due to existing implementation

    this._registerCommand(cmd);
    cmd.parent = this;
    cmd._checkForBrokenPassThrough();

    return this;
  }

  /**
   * Factory routine to create a new unattached argument.
   *
   * See .argument() for creating an attached argument, which uses this routine to
   * create the argument. You can override createArgument to return a custom argument.
   *
   * @param {string} name
   * @param {string} [description]
   * @return {Argument} new argument
   */

  createArgument(name, description) {
    return new Argument(name, description);
  }

  /**
   * Define argument syntax for command.
   *
   * The default is that the argument is required, and you can explicitly
   * indicate this with <> around the name. Put [] around the name for an optional argument.
   *
   * @example
   * program.argument('<input-file>');
   * program.argument('[output-file]');
   *
   * @param {string} name
   * @param {string} [description]
   * @param {(Function|*)} [parseArg] - custom argument processing function or default value
   * @param {*} [defaultValue]
   * @return {Command} `this` command for chaining
   */
  argument(name, description, parseArg, defaultValue) {
    const argument = this.createArgument(name, description);
    if (typeof parseArg === 'function') {
      argument.default(defaultValue).argParser(parseArg);
    } else {
      argument.default(parseArg);
    }
    this.addArgument(argument);
    return this;
  }

  /**
   * Define argument syntax for command, adding multiple at once (without descriptions).
   *
   * See also .argument().
   *
   * @example
   * program.arguments('<cmd> [env]');
   *
   * @param {string} names
   * @return {Command} `this` command for chaining
   */

  arguments(names) {
    names
      .trim()
      .split(/ +/)
      .forEach((detail) => {
        this.argument(detail);
      });
    return this;
  }

  /**
   * Define argument syntax for command, adding a prepared argument.
   *
   * @param {Argument} argument
   * @return {Command} `this` command for chaining
   */
  addArgument(argument) {
    const previousArgument = this.registeredArguments.slice(-1)[0];
    if (previousArgument?.variadic) {
      throw new Error(
        `only the last argument can be variadic '${previousArgument.name()}'`,
      );
    }
    if (
      argument.required &&
      argument.defaultValue !== undefined &&
      argument.parseArg === undefined
    ) {
      throw new Error(
        `a default value for a required argument is never used: '${argument.name()}'`,
      );
    }
    this.registeredArguments.push(argument);
    return this;
  }

  /**
   * Customise or override default help command. By default a help command is automatically added if your command has subcommands.
   *
   * @example
   *    program.helpCommand('help [cmd]');
   *    program.helpCommand('help [cmd]', 'show help');
   *    program.helpCommand(false); // suppress default help command
   *    program.helpCommand(true); // add help command even if no subcommands
   *
   * @param {string|boolean} enableOrNameAndArgs - enable with custom name and/or arguments, or boolean to override whether added
   * @param {string} [description] - custom description
   * @return {Command} `this` command for chaining
   */

  helpCommand(enableOrNameAndArgs, description) {
    if (typeof enableOrNameAndArgs === 'boolean') {
      this._addImplicitHelpCommand = enableOrNameAndArgs;
      if (enableOrNameAndArgs && this._defaultCommandGroup) {
        // make the command to store the group
        this._initCommandGroup(this._getHelpCommand());
      }
      return this;
    }

    const nameAndArgs = enableOrNameAndArgs ?? 'help [command]';
    const [, helpName, helpArgs] = nameAndArgs.match(/([^ ]+) *(.*)/);
    const helpDescription = description ?? 'display help for command';

    const helpCommand = this.createCommand(helpName);
    helpCommand.helpOption(false);
    if (helpArgs) helpCommand.arguments(helpArgs);
    if (helpDescription) helpCommand.description(helpDescription);

    this._addImplicitHelpCommand = true;
    this._helpCommand = helpCommand;
    // init group unless lazy create
    if (enableOrNameAndArgs || description) this._initCommandGroup(helpCommand);

    return this;
  }

  /**
   * Add prepared custom help command.
   *
   * @param {(Command|string|boolean)} helpCommand - custom help command, or deprecated enableOrNameAndArgs as for `.helpCommand()`
   * @param {string} [deprecatedDescription] - deprecated custom description used with custom name only
   * @return {Command} `this` command for chaining
   */
  addHelpCommand(helpCommand, deprecatedDescription) {
    // If not passed an object, call through to helpCommand for backwards compatibility,
    // as addHelpCommand was originally used like helpCommand is now.
    if (typeof helpCommand !== 'object') {
      this.helpCommand(helpCommand, deprecatedDescription);
      return this;
    }

    this._addImplicitHelpCommand = true;
    this._helpCommand = helpCommand;
    this._initCommandGroup(helpCommand);
    return this;
  }

  /**
   * Lazy create help command.
   *
   * @return {(Command|null)}
   * @package
   */
  _getHelpCommand() {
    const hasImplicitHelpCommand =
      this._addImplicitHelpCommand ??
      (this.commands.length &&
        !this._actionHandler &&
        !this._findCommand('help'));

    if (hasImplicitHelpCommand) {
      if (this._helpCommand === undefined) {
        this.helpCommand(undefined, undefined); // use default name and description
      }
      return this._helpCommand;
    }
    return null;
  }

  /**
   * Add hook for life cycle event.
   *
   * @param {string} event
   * @param {Function} listener
   * @return {Command} `this` command for chaining
   */

  hook(event, listener) {
    const allowedValues = ['preSubcommand', 'preAction', 'postAction'];
    if (!allowedValues.includes(event)) {
      throw new Error(`Unexpected value for event passed to hook : '${event}'.
Expecting one of '${allowedValues.join("', '")}'`);
    }
    if (this._lifeCycleHooks[event]) {
      this._lifeCycleHooks[event].push(listener);
    } else {
      this._lifeCycleHooks[event] = [listener];
    }
    return this;
  }

  /**
   * Register callback to use as replacement for calling process.exit.
   *
   * @param {Function} [fn] optional callback which will be passed a CommanderError, defaults to throwing
   * @return {Command} `this` command for chaining
   */

  exitOverride(fn) {
    if (fn) {
      this._exitCallback = fn;
    } else {
      this._exitCallback = (err) => {
        if (err.code !== 'commander.executeSubCommandAsync') {
          throw err;
        } else {
          // Async callback from spawn events, not useful to throw.
        }
      };
    }
    return this;
  }

  /**
   * Call process.exit, and _exitCallback if defined.
   *
   * @param {number} exitCode exit code for using with process.exit
   * @param {string} code an id string representing the error
   * @param {string} message human-readable description of the error
   * @return never
   * @private
   */

  _exit(exitCode, code, message) {
    if (this._exitCallback) {
      this._exitCallback(new CommanderError(exitCode, code, message));
      // Expecting this line is not reached.
    }
    process.exit(exitCode);
  }

  /**
   * Register callback `fn` for the command.
   *
   * @example
   * program
   *   .command('serve')
   *   .description('start service')
   *   .action(function() {
   *      // do work here
   *   });
   *
   * @param {Function} fn
   * @return {Command} `this` command for chaining
   */

  action(fn) {
    const listener = (args) => {
      // The .action callback takes an extra parameter which is the command or options.
      const expectedArgsCount = this.registeredArguments.length;
      const actionArgs = args.slice(0, expectedArgsCount);
      if (this._storeOptionsAsProperties) {
        actionArgs[expectedArgsCount] = this; // backwards compatible "options"
      } else {
        actionArgs[expectedArgsCount] = this.opts();
      }
      actionArgs.push(this);

      return fn.apply(this, actionArgs);
    };
    this._actionHandler = listener;
    return this;
  }

  /**
   * Factory routine to create a new unattached option.
   *
   * See .option() for creating an attached option, which uses this routine to
   * create the option. You can override createOption to return a custom option.
   *
   * @param {string} flags
   * @param {string} [description]
   * @return {Option} new option
   */

  createOption(flags, description) {
    return new Option(flags, description);
  }

  /**
   * Wrap parseArgs to catch 'commander.invalidArgument'.
   *
   * @param {(Option | Argument)} target
   * @param {string} value
   * @param {*} previous
   * @param {string} invalidArgumentMessage
   * @private
   */

  _callParseArg(target, value, previous, invalidArgumentMessage) {
    try {
      return target.parseArg(value, previous);
    } catch (err) {
      if (err.code === 'commander.invalidArgument') {
        const message = `${invalidArgumentMessage} ${err.message}`;
        this.error(message, { exitCode: err.exitCode, code: err.code });
      }
      throw err;
    }
  }

  /**
   * Check for option flag conflicts.
   * Register option if no conflicts found, or throw on conflict.
   *
   * @param {Option} option
   * @private
   */

  _registerOption(option) {
    const matchingOption =
      (option.short && this._findOption(option.short)) ||
      (option.long && this._findOption(option.long));
    if (matchingOption) {
      const matchingFlag =
        option.long && this._findOption(option.long)
          ? option.long
          : option.short;
      throw new Error(`Cannot add option '${option.flags}'${this._name && ` to command '${this._name}'`} due to conflicting flag '${matchingFlag}'
-  already used by option '${matchingOption.flags}'`);
    }

    this._initOptionGroup(option);
    this.options.push(option);
  }

  /**
   * Check for command name and alias conflicts with existing commands.
   * Register command if no conflicts found, or throw on conflict.
   *
   * @param {Command} command
   * @private
   */

  _registerCommand(command) {
    const knownBy = (cmd) => {
      return [cmd.name()].concat(cmd.aliases());
    };

    const alreadyUsed = knownBy(command).find((name) =>
      this._findCommand(name),
    );
    if (alreadyUsed) {
      const existingCmd = knownBy(this._findCommand(alreadyUsed)).join('|');
      const newCmd = knownBy(command).join('|');
      throw new Error(
        `cannot add command '${newCmd}' as already have command '${existingCmd}'`,
      );
    }

    this._initCommandGroup(command);
    this.commands.push(command);
  }

  /**
   * Add an option.
   *
   * @param {Option} option
   * @return {Command} `this` command for chaining
   */
  addOption(option) {
    this._registerOption(option);

    const oname = option.name();
    const name = option.attributeName();

    // store default value
    if (option.negate) {
      // --no-foo is special and defaults foo to true, unless a --foo option is already defined
      const positiveLongFlag = option.long.replace(/^--no-/, '--');
      if (!this._findOption(positiveLongFlag)) {
        this.setOptionValueWithSource(
          name,
          option.defaultValue === undefined ? true : option.defaultValue,
          'default',
        );
      }
    } else if (option.defaultValue !== undefined) {
      this.setOptionValueWithSource(name, option.defaultValue, 'default');
    }

    // handler for cli and env supplied values
    const handleOptionValue = (val, invalidValueMessage, valueSource) => {
      // val is null for optional option used without an optional-argument.
      // val is undefined for boolean and negated option.
      if (val == null && option.presetArg !== undefined) {
        val = option.presetArg;
      }

      // custom processing
      const oldValue = this.getOptionValue(name);
      if (val !== null && option.parseArg) {
        val = this._callParseArg(option, val, oldValue, invalidValueMessage);
      } else if (val !== null && option.variadic) {
        val = option._collectValue(val, oldValue);
      }

      // Fill-in appropriate missing values. Long winded but easy to follow.
      if (val == null) {
        if (option.negate) {
          val = false;
        } else if (option.isBoolean() || option.optional) {
          val = true;
        } else {
          val = ''; // not normal, parseArg might have failed or be a mock function for testing
        }
      }
      this.setOptionValueWithSource(name, val, valueSource);
    };

    this.on('option:' + oname, (val) => {
      const invalidValueMessage = `error: option '${option.flags}' argument '${val}' is invalid.`;
      handleOptionValue(val, invalidValueMessage, 'cli');
    });

    if (option.envVar) {
      this.on('optionEnv:' + oname, (val) => {
        const invalidValueMessage = `error: option '${option.flags}' value '${val}' from env '${option.envVar}' is invalid.`;
        handleOptionValue(val, invalidValueMessage, 'env');
      });
    }

    return this;
  }

  /**
   * Internal implementation shared by .option() and .requiredOption()
   *
   * @return {Command} `this` command for chaining
   * @private
   */
  _optionEx(config, flags, description, fn, defaultValue) {
    if (typeof flags === 'object' && flags instanceof Option) {
      throw new Error(
        'To add an Option object use addOption() instead of option() or requiredOption()',
      );
    }
    const option = this.createOption(flags, description);
    option.makeOptionMandatory(!!config.mandatory);
    if (typeof fn === 'function') {
      option.default(defaultValue).argParser(fn);
    } else if (fn instanceof RegExp) {
      // deprecated
      const regex = fn;
      fn = (val, def) => {
        const m = regex.exec(val);
        return m ? m[0] : def;
      };
      option.default(defaultValue).argParser(fn);
    } else {
      option.default(fn);
    }

    return this.addOption(option);
  }

  /**
   * Define option with `flags`, `description`, and optional argument parsing function or `defaultValue` or both.
   *
   * The `flags` string contains the short and/or long flags, separated by comma, a pipe or space. A required
   * option-argument is indicated by `<>` and an optional option-argument by `[]`.
   *
   * See the README for more details, and see also addOption() and requiredOption().
   *
   * @example
   * program
   *     .option('-p, --pepper', 'add pepper')
   *     .option('--pt, --pizza-type <TYPE>', 'type of pizza') // required option-argument
   *     .option('-c, --cheese [CHEESE]', 'add extra cheese', 'mozzarella') // optional option-argument with default
   *     .option('-t, --tip <VALUE>', 'add tip to purchase cost', parseFloat) // custom parse function
   *
   * @param {string} flags
   * @param {string} [description]
   * @param {(Function|*)} [parseArg] - custom option processing function or default value
   * @param {*} [defaultValue]
   * @return {Command} `this` command for chaining
   */

  option(flags, description, parseArg, defaultValue) {
    return this._optionEx({}, flags, description, parseArg, defaultValue);
  }

  /**
   * Add a required option which must have a value after parsing. This usually means
   * the option must be specified on the command line. (Otherwise the same as .option().)
   *
   * The `flags` string contains the short and/or long flags, separated by comma, a pipe or space.
   *
   * @param {string} flags
   * @param {string} [description]
   * @param {(Function|*)} [parseArg] - custom option processing function or default value
   * @param {*} [defaultValue]
   * @return {Command} `this` command for chaining
   */

  requiredOption(flags, description, parseArg, defaultValue) {
    return this._optionEx(
      { mandatory: true },
      flags,
      description,
      parseArg,
      defaultValue,
    );
  }

  /**
   * Alter parsing of short flags with optional values.
   *
   * @example
   * // for `.option('-f,--flag [value]'):
   * program.combineFlagAndOptionalValue(true);  // `-f80` is treated like `--flag=80`, this is the default behaviour
   * program.combineFlagAndOptionalValue(false) // `-fb` is treated like `-f -b`
   *
   * @param {boolean} [combine] - if `true` or omitted, an optional value can be specified directly after the flag.
   * @return {Command} `this` command for chaining
   */
  combineFlagAndOptionalValue(combine = true) {
    this._combineFlagAndOptionalValue = !!combine;
    return this;
  }

  /**
   * Allow unknown options on the command line.
   *
   * @param {boolean} [allowUnknown] - if `true` or omitted, no error will be thrown for unknown options.
   * @return {Command} `this` command for chaining
   */
  allowUnknownOption(allowUnknown = true) {
    this._allowUnknownOption = !!allowUnknown;
    return this;
  }

  /**
   * Allow excess command-arguments on the command line. Pass false to make excess arguments an error.
   *
   * @param {boolean} [allowExcess] - if `true` or omitted, no error will be thrown for excess arguments.
   * @return {Command} `this` command for chaining
   */
  allowExcessArguments(allowExcess = true) {
    this._allowExcessArguments = !!allowExcess;
    return this;
  }

  /**
   * Enable positional options. Positional means global options are specified before subcommands which lets
   * subcommands reuse the same option names, and also enables subcommands to turn on passThroughOptions.
   * The default behaviour is non-positional and global options may appear anywhere on the command line.
   *
   * @param {boolean} [positional]
   * @return {Command} `this` command for chaining
   */
  enablePositionalOptions(positional = true) {
    this._enablePositionalOptions = !!positional;
    return this;
  }

  /**
   * Pass through options that come after command-arguments rather than treat them as command-options,
   * so actual command-options come before command-arguments. Turning this on for a subcommand requires
   * positional options to have been enabled on the program (parent commands).
   * The default behaviour is non-positional and options may appear before or after command-arguments.
   *
   * @param {boolean} [passThrough] for unknown options.
   * @return {Command} `this` command for chaining
   */
  passThroughOptions(passThrough = true) {
    this._passThroughOptions = !!passThrough;
    this._checkForBrokenPassThrough();
    return this;
  }

  /**
   * @private
   */

  _checkForBrokenPassThrough() {
    if (
      this.parent &&
      this._passThroughOptions &&
      !this.parent._enablePositionalOptions
    ) {
      throw new Error(
        `passThroughOptions cannot be used for '${this._name}' without turning on enablePositionalOptions for parent command(s)`,
      );
    }
  }

  /**
   * Whether to store option values as properties on command object,
   * or store separately (specify false). In both cases the option values can be accessed using .opts().
   *
   * @param {boolean} [storeAsProperties=true]
   * @return {Command} `this` command for chaining
   */

  storeOptionsAsProperties(storeAsProperties = true) {
    if (this.options.length) {
      throw new Error('call .storeOptionsAsProperties() before adding options');
    }
    if (Object.keys(this._optionValues).length) {
      throw new Error(
        'call .storeOptionsAsProperties() before setting option values',
      );
    }
    this._storeOptionsAsProperties = !!storeAsProperties;
    return this;
  }

  /**
   * Retrieve option value.
   *
   * @param {string} key
   * @return {object} value
   */

  getOptionValue(key) {
    if (this._storeOptionsAsProperties) {
      return this[key];
    }
    return this._optionValues[key];
  }

  /**
   * Store option value.
   *
   * @param {string} key
   * @param {object} value
   * @return {Command} `this` command for chaining
   */

  setOptionValue(key, value) {
    return this.setOptionValueWithSource(key, value, undefined);
  }

  /**
   * Store option value and where the value came from.
   *
   * @param {string} key
   * @param {object} value
   * @param {string} source - expected values are default/config/env/cli/implied
   * @return {Command} `this` command for chaining
   */

  setOptionValueWithSource(key, value, source) {
    if (this._storeOptionsAsProperties) {
      this[key] = value;
    } else {
      this._optionValues[key] = value;
    }
    this._optionValueSources[key] = source;
    return this;
  }

  /**
   * Get source of option value.
   * Expected values are default | config | env | cli | implied
   *
   * @param {string} key
   * @return {string}
   */

  getOptionValueSource(key) {
    return this._optionValueSources[key];
  }

  /**
   * Get source of option value. See also .optsWithGlobals().
   * Expected values are default | config | env | cli | implied
   *
   * @param {string} key
   * @return {string}
   */

  getOptionValueSourceWithGlobals(key) {
    // global overwrites local, like optsWithGlobals
    let source;
    this._getCommandAndAncestors().forEach((cmd) => {
      if (cmd.getOptionValueSource(key) !== undefined) {
        source = cmd.getOptionValueSource(key);
      }
    });
    return source;
  }

  /**
   * Get user arguments from implied or explicit arguments.
   * Side-effects: set _scriptPath if args included script. Used for default program name, and subcommand searches.
   *
   * @private
   */

  _prepareUserArgs(argv, parseOptions) {
    if (argv !== undefined && !Array.isArray(argv)) {
      throw new Error('first parameter to parse must be array or undefined');
    }
    parseOptions = parseOptions || {};

    // auto-detect argument conventions if nothing supplied
    if (argv === undefined && parseOptions.from === undefined) {
      if (process.versions?.electron) {
        parseOptions.from = 'electron';
      }
      // check node specific options for scenarios where user CLI args follow executable without scriptname
      const execArgv = process.execArgv ?? [];
      if (
        execArgv.includes('-e') ||
        execArgv.includes('--eval') ||
        execArgv.includes('-p') ||
        execArgv.includes('--print')
      ) {
        parseOptions.from = 'eval'; // internal usage, not documented
      }
    }

    // default to using process.argv
    if (argv === undefined) {
      argv = process.argv;
    }
    this.rawArgs = argv.slice();

    // extract the user args and scriptPath
    let userArgs;
    switch (parseOptions.from) {
      case undefined:
      case 'node':
        this._scriptPath = argv[1];
        userArgs = argv.slice(2);
        break;
      case 'electron':
        // @ts-ignore: because defaultApp is an unknown property
        if (process.defaultApp) {
          this._scriptPath = argv[1];
          userArgs = argv.slice(2);
        } else {
          userArgs = argv.slice(1);
        }
        break;
      case 'user':
        userArgs = argv.slice(0);
        break;
      case 'eval':
        userArgs = argv.slice(1);
        break;
      default:
        throw new Error(
          `unexpected parse option { from: '${parseOptions.from}' }`,
        );
    }

    // Find default name for program from arguments.
    if (!this._name && this._scriptPath)
      this.nameFromFilename(this._scriptPath);
    this._name = this._name || 'program';

    return userArgs;
  }

  /**
   * Parse `argv`, setting options and invoking commands when defined.
   *
   * Use parseAsync instead of parse if any of your action handlers are async.
   *
   * Call with no parameters to parse `process.argv`. Detects Electron and special node options like `node --eval`. Easy mode!
   *
   * Or call with an array of strings to parse, and optionally where the user arguments start by specifying where the arguments are `from`:
   * - `'node'`: default, `argv[0]` is the application and `argv[1]` is the script being run, with user arguments after that
   * - `'electron'`: `argv[0]` is the application and `argv[1]` varies depending on whether the electron application is packaged
   * - `'user'`: just user arguments
   *
   * @example
   * program.parse(); // parse process.argv and auto-detect electron and special node flags
   * program.parse(process.argv); // assume argv[0] is app and argv[1] is script
   * program.parse(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
   *
   * @param {string[]} [argv] - optional, defaults to process.argv
   * @param {object} [parseOptions] - optionally specify style of options with from: node/user/electron
   * @param {string} [parseOptions.from] - where the args are from: 'node', 'user', 'electron'
   * @return {Command} `this` command for chaining
   */

  parse(argv, parseOptions) {
    this._prepareForParse();
    const userArgs = this._prepareUserArgs(argv, parseOptions);
    this._parseCommand([], userArgs);

    return this;
  }

  /**
   * Parse `argv`, setting options and invoking commands when defined.
   *
   * Call with no parameters to parse `process.argv`. Detects Electron and special node options like `node --eval`. Easy mode!
   *
   * Or call with an array of strings to parse, and optionally where the user arguments start by specifying where the arguments are `from`:
   * - `'node'`: default, `argv[0]` is the application and `argv[1]` is the script being run, with user arguments after that
   * - `'electron'`: `argv[0]` is the application and `argv[1]` varies depending on whether the electron application is packaged
   * - `'user'`: just user arguments
   *
   * @example
   * await program.parseAsync(); // parse process.argv and auto-detect electron and special node flags
   * await program.parseAsync(process.argv); // assume argv[0] is app and argv[1] is script
   * await program.parseAsync(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
   *
   * @param {string[]} [argv]
   * @param {object} [parseOptions]
   * @param {string} parseOptions.from - where the args are from: 'node', 'user', 'electron'
   * @return {Promise}
   */

  async parseAsync(argv, parseOptions) {
    this._prepareForParse();
    const userArgs = this._prepareUserArgs(argv, parseOptions);
    await this._parseCommand([], userArgs);

    return this;
  }

  _prepareForParse() {
    if (this._savedState === null) {
      this.saveStateBeforeParse();
    } else {
      this.restoreStateBeforeParse();
    }
  }

  /**
   * Called the first time parse is called to save state and allow a restore before subsequent calls to parse.
   * Not usually called directly, but available for subclasses to save their custom state.
   *
   * This is called in a lazy way. Only commands used in parsing chain will have state saved.
   */
  saveStateBeforeParse() {
    this._savedState = {
      // name is stable if supplied by author, but may be unspecified for root command and deduced during parsing
      _name: this._name,
      // option values before parse have default values (including false for negated options)
      // shallow clones
      _optionValues: { ...this._optionValues },
      _optionValueSources: { ...this._optionValueSources },
    };
  }

  /**
   * Restore state before parse for calls after the first.
   * Not usually called directly, but available for subclasses to save their custom state.
   *
   * This is called in a lazy way. Only commands used in parsing chain will have state restored.
   */
  restoreStateBeforeParse() {
    if (this._storeOptionsAsProperties)
      throw new Error(`Can not call parse again when storeOptionsAsProperties is true.
- either make a new Command for each call to parse, or stop storing options as properties`);

    // clear state from _prepareUserArgs
    this._name = this._savedState._name;
    this._scriptPath = null;
    this.rawArgs = [];
    // clear state from setOptionValueWithSource
    this._optionValues = { ...this._savedState._optionValues };
    this._optionValueSources = { ...this._savedState._optionValueSources };
    // clear state from _parseCommand
    this.args = [];
    // clear state from _processArguments
    this.processedArgs = [];
  }

  /**
   * Throw if expected executable is missing. Add lots of help for author.
   *
   * @param {string} executableFile
   * @param {string} executableDir
   * @param {string} subcommandName
   */
  _checkForMissingExecutable(executableFile, executableDir, subcommandName) {
    if (fs.existsSync(executableFile)) return;

    const executableDirMessage = executableDir
      ? `searched for local subcommand relative to directory '${executableDir}'`
      : 'no directory for search for local subcommand, use .executableDir() to supply a custom directory';
    const executableMissing = `'${executableFile}' does not exist
 - if '${subcommandName}' is not meant to be an executable command, remove description parameter from '.command()' and use '.description()' instead
 - if the default executable name is not suitable, use the executableFile option to supply a custom name or path
 - ${executableDirMessage}`;
    throw new Error(executableMissing);
  }

  /**
   * Execute a sub-command executable.
   *
   * @private
   */

  _executeSubCommand(subcommand, args) {
    args = args.slice();
    let launchWithNode = false; // Use node for source targets so do not need to get permissions correct, and on Windows.
    const sourceExt = ['.js', '.ts', '.tsx', '.mjs', '.cjs'];

    function findFile(baseDir, baseName) {
      // Look for specified file
      const localBin = path.resolve(baseDir, baseName);
      if (fs.existsSync(localBin)) return localBin;

      // Stop looking if candidate already has an expected extension.
      if (sourceExt.includes(path.extname(baseName))) return undefined;

      // Try all the extensions.
      const foundExt = sourceExt.find((ext) =>
        fs.existsSync(`${localBin}${ext}`),
      );
      if (foundExt) return `${localBin}${foundExt}`;

      return undefined;
    }

    // Not checking for help first. Unlikely to have mandatory and executable, and can't robustly test for help flags in external command.
    this._checkForMissingMandatoryOptions();
    this._checkForConflictingOptions();

    // executableFile and executableDir might be full path, or just a name
    let executableFile =
      subcommand._executableFile || `${this._name}-${subcommand._name}`;
    let executableDir = this._executableDir || '';
    if (this._scriptPath) {
      let resolvedScriptPath; // resolve possible symlink for installed npm binary
      try {
        resolvedScriptPath = fs.realpathSync(this._scriptPath);
      } catch {
        resolvedScriptPath = this._scriptPath;
      }
      executableDir = path.resolve(
        path.dirname(resolvedScriptPath),
        executableDir,
      );
    }

    // Look for a local file in preference to a command in PATH.
    if (executableDir) {
      let localFile = findFile(executableDir, executableFile);

      // Legacy search using prefix of script name instead of command name
      if (!localFile && !subcommand._executableFile && this._scriptPath) {
        const legacyName = path.basename(
          this._scriptPath,
          path.extname(this._scriptPath),
        );
        if (legacyName !== this._name) {
          localFile = findFile(
            executableDir,
            `${legacyName}-${subcommand._name}`,
          );
        }
      }
      executableFile = localFile || executableFile;
    }

    launchWithNode = sourceExt.includes(path.extname(executableFile));

    let proc;
    if (process.platform !== 'win32') {
      if (launchWithNode) {
        args.unshift(executableFile);
        // add executable arguments to spawn
        args = incrementNodeInspectorPort(process.execArgv).concat(args);

        proc = childProcess.spawn(process.argv[0], args, { stdio: 'inherit' });
      } else {
        proc = childProcess.spawn(executableFile, args, { stdio: 'inherit' });
      }
    } else {
      this._checkForMissingExecutable(
        executableFile,
        executableDir,
        subcommand._name,
      );
      args.unshift(executableFile);
      // add executable arguments to spawn
      args = incrementNodeInspectorPort(process.execArgv).concat(args);
      proc = childProcess.spawn(process.execPath, args, { stdio: 'inherit' });
    }

    if (!proc.killed) {
      // testing mainly to avoid leak warnings during unit tests with mocked spawn
      const signals = ['SIGUSR1', 'SIGUSR2', 'SIGTERM', 'SIGINT', 'SIGHUP'];
      signals.forEach((signal) => {
        process.on(signal, () => {
          if (proc.killed === false && proc.exitCode === null) {
            // @ts-ignore because signals not typed to known strings
            proc.kill(signal);
          }
        });
      });
    }

    // By default terminate process when spawned process terminates.
    const exitCallback = this._exitCallback;
    proc.on('close', (code) => {
      code = code ?? 1; // code is null if spawned process terminated due to a signal
      if (!exitCallback) {
        process.exit(code);
      } else {
        exitCallback(
          new CommanderError(
            code,
            'commander.executeSubCommandAsync',
            '(close)',
          ),
        );
      }
    });
    proc.on('error', (err) => {
      // @ts-ignore: because err.code is an unknown property
      if (err.code === 'ENOENT') {
        this._checkForMissingExecutable(
          executableFile,
          executableDir,
          subcommand._name,
        );
        // @ts-ignore: because err.code is an unknown property
      } else if (err.code === 'EACCES') {
        throw new Error(`'${executableFile}' not executable`);
      }
      if (!exitCallback) {
        process.exit(1);
      } else {
        const wrappedError = new CommanderError(
          1,
          'commander.executeSubCommandAsync',
          '(error)',
        );
        wrappedError.nestedError = err;
        exitCallback(wrappedError);
      }
    });

    // Store the reference to the child process
    this.runningCommand = proc;
  }

  /**
   * @private
   */

  _dispatchSubcommand(commandName, operands, unknown) {
    const subCommand = this._findCommand(commandName);
    if (!subCommand) this.help({ error: true });

    subCommand._prepareForParse();
    let promiseChain;
    promiseChain = this._chainOrCallSubCommandHook(
      promiseChain,
      subCommand,
      'preSubcommand',
    );
    promiseChain = this._chainOrCall(promiseChain, () => {
      if (subCommand._executableHandler) {
        this._executeSubCommand(subCommand, operands.concat(unknown));
      } else {
        return subCommand._parseCommand(operands, unknown);
      }
    });
    return promiseChain;
  }

  /**
   * Invoke help directly if possible, or dispatch if necessary.
   * e.g. help foo
   *
   * @private
   */

  _dispatchHelpCommand(subcommandName) {
    if (!subcommandName) {
      this.help();
    }
    const subCommand = this._findCommand(subcommandName);
    if (subCommand && !subCommand._executableHandler) {
      subCommand.help();
    }

    // Fallback to parsing the help flag to invoke the help.
    return this._dispatchSubcommand(
      subcommandName,
      [],
      [this._getHelpOption()?.long ?? this._getHelpOption()?.short ?? '--help'],
    );
  }

  /**
   * Check this.args against expected this.registeredArguments.
   *
   * @private
   */

  _checkNumberOfArguments() {
    // too few
    this.registeredArguments.forEach((arg, i) => {
      if (arg.required && this.args[i] == null) {
        this.missingArgument(arg.name());
      }
    });
    // too many
    if (
      this.registeredArguments.length > 0 &&
      this.registeredArguments[this.registeredArguments.length - 1].variadic
    ) {
      return;
    }
    if (this.args.length > this.registeredArguments.length) {
      this._excessArguments(this.args);
    }
  }

  /**
   * Process this.args using this.registeredArguments and save as this.processedArgs!
   *
   * @private
   */

  _processArguments() {
    const myParseArg = (argument, value, previous) => {
      // Extra processing for nice error message on parsing failure.
      let parsedValue = value;
      if (value !== null && argument.parseArg) {
        const invalidValueMessage = `error: command-argument value '${value}' is invalid for argument '${argument.name()}'.`;
        parsedValue = this._callParseArg(
          argument,
          value,
          previous,
          invalidValueMessage,
        );
      }
      return parsedValue;
    };

    this._checkNumberOfArguments();

    const processedArgs = [];
    this.registeredArguments.forEach((declaredArg, index) => {
      let value = declaredArg.defaultValue;
      if (declaredArg.variadic) {
        // Collect together remaining arguments for passing together as an array.
        if (index < this.args.length) {
          value = this.args.slice(index);
          if (declaredArg.parseArg) {
            value = value.reduce((processed, v) => {
              return myParseArg(declaredArg, v, processed);
            }, declaredArg.defaultValue);
          }
        } else if (value === undefined) {
          value = [];
        }
      } else if (index < this.args.length) {
        value = this.args[index];
        if (declaredArg.parseArg) {
          value = myParseArg(declaredArg, value, declaredArg.defaultValue);
        }
      }
      processedArgs[index] = value;
    });
    this.processedArgs = processedArgs;
  }

  /**
   * Once we have a promise we chain, but call synchronously until then.
   *
   * @param {(Promise|undefined)} promise
   * @param {Function} fn
   * @return {(Promise|undefined)}
   * @private
   */

  _chainOrCall(promise, fn) {
    // thenable
    if (promise?.then && typeof promise.then === 'function') {
      // already have a promise, chain callback
      return promise.then(() => fn());
    }
    // callback might return a promise
    return fn();
  }

  /**
   *
   * @param {(Promise|undefined)} promise
   * @param {string} event
   * @return {(Promise|undefined)}
   * @private
   */

  _chainOrCallHooks(promise, event) {
    let result = promise;
    const hooks = [];
    this._getCommandAndAncestors()
      .reverse()
      .filter((cmd) => cmd._lifeCycleHooks[event] !== undefined)
      .forEach((hookedCommand) => {
        hookedCommand._lifeCycleHooks[event].forEach((callback) => {
          hooks.push({ hookedCommand, callback });
        });
      });
    if (event === 'postAction') {
      hooks.reverse();
    }

    hooks.forEach((hookDetail) => {
      result = this._chainOrCall(result, () => {
        return hookDetail.callback(hookDetail.hookedCommand, this);
      });
    });
    return result;
  }

  /**
   *
   * @param {(Promise|undefined)} promise
   * @param {Command} subCommand
   * @param {string} event
   * @return {(Promise|undefined)}
   * @private
   */

  _chainOrCallSubCommandHook(promise, subCommand, event) {
    let result = promise;
    if (this._lifeCycleHooks[event] !== undefined) {
      this._lifeCycleHooks[event].forEach((hook) => {
        result = this._chainOrCall(result, () => {
          return hook(this, subCommand);
        });
      });
    }
    return result;
  }

  /**
   * Process arguments in context of this command.
   * Returns action result, in case it is a promise.
   *
   * @private
   */

  _parseCommand(operands, unknown) {
    const parsed = this.parseOptions(unknown);
    this._parseOptionsEnv(); // after cli, so parseArg not called on both cli and env
    this._parseOptionsImplied();
    operands = operands.concat(parsed.operands);
    unknown = parsed.unknown;
    this.args = operands.concat(unknown);

    if (operands && this._findCommand(operands[0])) {
      return this._dispatchSubcommand(operands[0], operands.slice(1), unknown);
    }
    if (
      this._getHelpCommand() &&
      operands[0] === this._getHelpCommand().name()
    ) {
      return this._dispatchHelpCommand(operands[1]);
    }
    if (this._defaultCommandName) {
      this._outputHelpIfRequested(unknown); // Run the help for default command from parent rather than passing to default command
      return this._dispatchSubcommand(
        this._defaultCommandName,
        operands,
        unknown,
      );
    }
    if (
      this.commands.length &&
      this.args.length === 0 &&
      !this._actionHandler &&
      !this._defaultCommandName
    ) {
      // probably missing subcommand and no handler, user needs help (and exit)
      this.help({ error: true });
    }

    this._outputHelpIfRequested(parsed.unknown);
    this._checkForMissingMandatoryOptions();
    this._checkForConflictingOptions();

    // We do not always call this check to avoid masking a "better" error, like unknown command.
    const checkForUnknownOptions = () => {
      if (parsed.unknown.length > 0) {
        this.unknownOption(parsed.unknown[0]);
      }
    };

    const commandEvent = `command:${this.name()}`;
    if (this._actionHandler) {
      checkForUnknownOptions();
      this._processArguments();

      let promiseChain;
      promiseChain = this._chainOrCallHooks(promiseChain, 'preAction');
      promiseChain = this._chainOrCall(promiseChain, () =>
        this._actionHandler(this.processedArgs),
      );
      if (this.parent) {
        promiseChain = this._chainOrCall(promiseChain, () => {
          this.parent.emit(commandEvent, operands, unknown); // legacy
        });
      }
      promiseChain = this._chainOrCallHooks(promiseChain, 'postAction');
      return promiseChain;
    }
    if (this.parent?.listenerCount(commandEvent)) {
      checkForUnknownOptions();
      this._processArguments();
      this.parent.emit(commandEvent, operands, unknown); // legacy
    } else if (operands.length) {
      if (this._findCommand('*')) {
        // legacy default command
        return this._dispatchSubcommand('*', operands, unknown);
      }
      if (this.listenerCount('command:*')) {
        // skip option check, emit event for possible misspelling suggestion
        this.emit('command:*', operands, unknown);
      } else if (this.commands.length) {
        this.unknownCommand();
      } else {
        checkForUnknownOptions();
        this._processArguments();
      }
    } else if (this.commands.length) {
      checkForUnknownOptions();
      // This command has subcommands and nothing hooked up at this level, so display help (and exit).
      this.help({ error: true });
    } else {
      checkForUnknownOptions();
      this._processArguments();
      // fall through for caller to handle after calling .parse()
    }
  }

  /**
   * Find matching command.
   *
   * @private
   * @return {Command | undefined}
   */
  _findCommand(name) {
    if (!name) return undefined;
    return this.commands.find(
      (cmd) => cmd._name === name || cmd._aliases.includes(name),
    );
  }

  /**
   * Return an option matching `arg` if any.
   *
   * @param {string} arg
   * @return {Option}
   * @package
   */

  _findOption(arg) {
    return this.options.find((option) => option.is(arg));
  }

  /**
   * Display an error message if a mandatory option does not have a value.
   * Called after checking for help flags in leaf subcommand.
   *
   * @private
   */

  _checkForMissingMandatoryOptions() {
    // Walk up hierarchy so can call in subcommand after checking for displaying help.
    this._getCommandAndAncestors().forEach((cmd) => {
      cmd.options.forEach((anOption) => {
        if (
          anOption.mandatory &&
          cmd.getOptionValue(anOption.attributeName()) === undefined
        ) {
          cmd.missingMandatoryOptionValue(anOption);
        }
      });
    });
  }

  /**
   * Display an error message if conflicting options are used together in this.
   *
   * @private
   */
  _checkForConflictingLocalOptions() {
    const definedNonDefaultOptions = this.options.filter((option) => {
      const optionKey = option.attributeName();
      if (this.getOptionValue(optionKey) === undefined) {
        return false;
      }
      return this.getOptionValueSource(optionKey) !== 'default';
    });

    const optionsWithConflicting = definedNonDefaultOptions.filter(
      (option) => option.conflictsWith.length > 0,
    );

    optionsWithConflicting.forEach((option) => {
      const conflictingAndDefined = definedNonDefaultOptions.find((defined) =>
        option.conflictsWith.includes(defined.attributeName()),
      );
      if (conflictingAndDefined) {
        this._conflictingOption(option, conflictingAndDefined);
      }
    });
  }

  /**
   * Display an error message if conflicting options are used together.
   * Called after checking for help flags in leaf subcommand.
   *
   * @private
   */
  _checkForConflictingOptions() {
    // Walk up hierarchy so can call in subcommand after checking for displaying help.
    this._getCommandAndAncestors().forEach((cmd) => {
      cmd._checkForConflictingLocalOptions();
    });
  }

  /**
   * Parse options from `argv` removing known options,
   * and return argv split into operands and unknown arguments.
   *
   * Side effects: modifies command by storing options. Does not reset state if called again.
   *
   * Examples:
   *
   *     argv => operands, unknown
   *     --known kkk op => [op], []
   *     op --known kkk => [op], []
   *     sub --unknown uuu op => [sub], [--unknown uuu op]
   *     sub -- --unknown uuu op => [sub --unknown uuu op], []
   *
   * @param {string[]} args
   * @return {{operands: string[], unknown: string[]}}
   */

  parseOptions(args) {
    const operands = []; // operands, not options or values
    const unknown = []; // first unknown option and remaining unknown args
    let dest = operands;

    function maybeOption(arg) {
      return arg.length > 1 && arg[0] === '-';
    }

    const negativeNumberArg = (arg) => {
      // return false if not a negative number
      if (!/^-(\d+|\d*\.\d+)(e[+-]?\d+)?$/.test(arg)) return false;
      // negative number is ok unless digit used as an option in command hierarchy
      return !this._getCommandAndAncestors().some((cmd) =>
        cmd.options
          .map((opt) => opt.short)
          .some((short) => /^-\d$/.test(short)),
      );
    };

    // parse options
    let activeVariadicOption = null;
    let activeGroup = null; // working through group of short options, like -abc
    let i = 0;
    while (i < args.length || activeGroup) {
      const arg = activeGroup ?? args[i++];
      activeGroup = null;

      // literal
      if (arg === '--') {
        if (dest === unknown) dest.push(arg);
        dest.push(...args.slice(i));
        break;
      }

      if (
        activeVariadicOption &&
        (!maybeOption(arg) || negativeNumberArg(arg))
      ) {
        this.emit(`option:${activeVariadicOption.name()}`, arg);
        continue;
      }
      activeVariadicOption = null;

      if (maybeOption(arg)) {
        const option = this._findOption(arg);
        // recognised option, call listener to assign value with possible custom processing
        if (option) {
          if (option.required) {
            const value = args[i++];
            if (value === undefined) this.optionMissingArgument(option);
            this.emit(`option:${option.name()}`, value);
          } else if (option.optional) {
            let value = null;
            // historical behaviour is optional value is following arg unless an option
            if (
              i < args.length &&
              (!maybeOption(args[i]) || negativeNumberArg(args[i]))
            ) {
              value = args[i++];
            }
            this.emit(`option:${option.name()}`, value);
          } else {
            // boolean flag
            this.emit(`option:${option.name()}`);
          }
          activeVariadicOption = option.variadic ? option : null;
          continue;
        }
      }

      // Look for combo options following single dash, eat first one if known.
      if (arg.length > 2 && arg[0] === '-' && arg[1] !== '-') {
        const option = this._findOption(`-${arg[1]}`);
        if (option) {
          if (
            option.required ||
            (option.optional && this._combineFlagAndOptionalValue)
          ) {
            // option with value following in same argument
            this.emit(`option:${option.name()}`, arg.slice(2));
          } else {
            // boolean option
            this.emit(`option:${option.name()}`);
            // remove the processed option and keep processing group
            activeGroup = `-${arg.slice(2)}`;
          }
          continue;
        }
      }

      // Look for known long flag with value, like --foo=bar
      if (/^--[^=]+=/.test(arg)) {
        const index = arg.indexOf('=');
        const option = this._findOption(arg.slice(0, index));
        if (option && (option.required || option.optional)) {
          this.emit(`option:${option.name()}`, arg.slice(index + 1));
          continue;
        }
      }

      // Not a recognised option by this command.
      // Might be a command-argument, or subcommand option, or unknown option, or help command or option.

      // An unknown option means further arguments also classified as unknown so can be reprocessed by subcommands.
      // A negative number in a leaf command is not an unknown option.
      if (
        dest === operands &&
        maybeOption(arg) &&
        !(this.commands.length === 0 && negativeNumberArg(arg))
      ) {
        dest = unknown;
      }

      // If using positionalOptions, stop processing our options at subcommand.
      if (
        (this._enablePositionalOptions || this._passThroughOptions) &&
        operands.length === 0 &&
        unknown.length === 0
      ) {
        if (this._findCommand(arg)) {
          operands.push(arg);
          unknown.push(...args.slice(i));
          break;
        } else if (
          this._getHelpCommand() &&
          arg === this._getHelpCommand().name()
        ) {
          operands.push(arg, ...args.slice(i));
          break;
        } else if (this._defaultCommandName) {
          unknown.push(arg, ...args.slice(i));
          break;
        }
      }

      // If using passThroughOptions, stop processing options at first command-argument.
      if (this._passThroughOptions) {
        dest.push(arg, ...args.slice(i));
        break;
      }

      // add arg
      dest.push(arg);
    }

    return { operands, unknown };
  }

  /**
   * Return an object containing local option values as key-value pairs.
   *
   * @return {object}
   */
  opts() {
    if (this._storeOptionsAsProperties) {
      // Preserve original behaviour so backwards compatible when still using properties
      const result = {};
      const len = this.options.length;

      for (let i = 0; i < len; i++) {
        const key = this.options[i].attributeName();
        result[key] =
          key === this._versionOptionName ? this._version : this[key];
      }
      return result;
    }

    return this._optionValues;
  }

  /**
   * Return an object containing merged local and global option values as key-value pairs.
   *
   * @return {object}
   */
  optsWithGlobals() {
    // globals overwrite locals
    return this._getCommandAndAncestors().reduce(
      (combinedOptions, cmd) => Object.assign(combinedOptions, cmd.opts()),
      {},
    );
  }

  /**
   * Display error message and exit (or call exitOverride).
   *
   * @param {string} message
   * @param {object} [errorOptions]
   * @param {string} [errorOptions.code] - an id string representing the error
   * @param {number} [errorOptions.exitCode] - used with process.exit
   */
  error(message, errorOptions) {
    // output handling
    this._outputConfiguration.outputError(
      `${message}\n`,
      this._outputConfiguration.writeErr,
    );
    if (typeof this._showHelpAfterError === 'string') {
      this._outputConfiguration.writeErr(`${this._showHelpAfterError}\n`);
    } else if (this._showHelpAfterError) {
      this._outputConfiguration.writeErr('\n');
      this.outputHelp({ error: true });
    }

    // exit handling
    const config = errorOptions || {};
    const exitCode = config.exitCode || 1;
    const code = config.code || 'commander.error';
    this._exit(exitCode, code, message);
  }

  /**
   * Apply any option related environment variables, if option does
   * not have a value from cli or client code.
   *
   * @private
   */
  _parseOptionsEnv() {
    this.options.forEach((option) => {
      if (option.envVar && option.envVar in process.env) {
        const optionKey = option.attributeName();
        // Priority check. Do not overwrite cli or options from unknown source (client-code).
        if (
          this.getOptionValue(optionKey) === undefined ||
          ['default', 'config', 'env'].includes(
            this.getOptionValueSource(optionKey),
          )
        ) {
          if (option.required || option.optional) {
            // option can take a value
            // keep very simple, optional always takes value
            this.emit(`optionEnv:${option.name()}`, process.env[option.envVar]);
          } else {
            // boolean
            // keep very simple, only care that envVar defined and not the value
            this.emit(`optionEnv:${option.name()}`);
          }
        }
      }
    });
  }

  /**
   * Apply any implied option values, if option is undefined or default value.
   *
   * @private
   */
  _parseOptionsImplied() {
    const dualHelper = new DualOptions(this.options);
    const hasCustomOptionValue = (optionKey) => {
      return (
        this.getOptionValue(optionKey) !== undefined &&
        !['default', 'implied'].includes(this.getOptionValueSource(optionKey))
      );
    };
    this.options
      .filter(
        (option) =>
          option.implied !== undefined &&
          hasCustomOptionValue(option.attributeName()) &&
          dualHelper.valueFromOption(
            this.getOptionValue(option.attributeName()),
            option,
          ),
      )
      .forEach((option) => {
        Object.keys(option.implied)
          .filter((impliedKey) => !hasCustomOptionValue(impliedKey))
          .forEach((impliedKey) => {
            this.setOptionValueWithSource(
              impliedKey,
              option.implied[impliedKey],
              'implied',
            );
          });
      });
  }

  /**
   * Argument `name` is missing.
   *
   * @param {string} name
   * @private
   */

  missingArgument(name) {
    const message = `error: missing required argument '${name}'`;
    this.error(message, { code: 'commander.missingArgument' });
  }

  /**
   * `Option` is missing an argument.
   *
   * @param {Option} option
   * @private
   */

  optionMissingArgument(option) {
    const message = `error: option '${option.flags}' argument missing`;
    this.error(message, { code: 'commander.optionMissingArgument' });
  }

  /**
   * `Option` does not have a value, and is a mandatory option.
   *
   * @param {Option} option
   * @private
   */

  missingMandatoryOptionValue(option) {
    const message = `error: required option '${option.flags}' not specified`;
    this.error(message, { code: 'commander.missingMandatoryOptionValue' });
  }

  /**
   * `Option` conflicts with another option.
   *
   * @param {Option} option
   * @param {Option} conflictingOption
   * @private
   */
  _conflictingOption(option, conflictingOption) {
    // The calling code does not know whether a negated option is the source of the
    // value, so do some work to take an educated guess.
    const findBestOptionFromValue = (option) => {
      const optionKey = option.attributeName();
      const optionValue = this.getOptionValue(optionKey);
      const negativeOption = this.options.find(
        (target) => target.negate && optionKey === target.attributeName(),
      );
      const positiveOption = this.options.find(
        (target) => !target.negate && optionKey === target.attributeName(),
      );
      if (
        negativeOption &&
        ((negativeOption.presetArg === undefined && optionValue === false) ||
          (negativeOption.presetArg !== undefined &&
            optionValue === negativeOption.presetArg))
      ) {
        return negativeOption;
      }
      return positiveOption || option;
    };

    const getErrorMessage = (option) => {
      const bestOption = findBestOptionFromValue(option);
      const optionKey = bestOption.attributeName();
      const source = this.getOptionValueSource(optionKey);
      if (source === 'env') {
        return `environment variable '${bestOption.envVar}'`;
      }
      return `option '${bestOption.flags}'`;
    };

    const message = `error: ${getErrorMessage(option)} cannot be used with ${getErrorMessage(conflictingOption)}`;
    this.error(message, { code: 'commander.conflictingOption' });
  }

  /**
   * Unknown option `flag`.
   *
   * @param {string} flag
   * @private
   */

  unknownOption(flag) {
    if (this._allowUnknownOption) return;
    let suggestion = '';

    if (flag.startsWith('--') && this._showSuggestionAfterError) {
      // Looping to pick up the global options too
      let candidateFlags = [];
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      let command = this;
      do {
        const moreFlags = command
          .createHelp()
          .visibleOptions(command)
          .filter((option) => option.long)
          .map((option) => option.long);
        candidateFlags = candidateFlags.concat(moreFlags);
        command = command.parent;
      } while (command && !command._enablePositionalOptions);
      suggestion = suggestSimilar(flag, candidateFlags);
    }

    const message = `error: unknown option '${flag}'${suggestion}`;
    this.error(message, { code: 'commander.unknownOption' });
  }

  /**
   * Excess arguments, more than expected.
   *
   * @param {string[]} receivedArgs
   * @private
   */

  _excessArguments(receivedArgs) {
    if (this._allowExcessArguments) return;

    const expected = this.registeredArguments.length;
    const s = expected === 1 ? '' : 's';
    const forSubcommand = this.parent ? ` for '${this.name()}'` : '';
    const message = `error: too many arguments${forSubcommand}. Expected ${expected} argument${s} but got ${receivedArgs.length}.`;
    this.error(message, { code: 'commander.excessArguments' });
  }

  /**
   * Unknown command.
   *
   * @private
   */

  unknownCommand() {
    const unknownName = this.args[0];
    let suggestion = '';

    if (this._showSuggestionAfterError) {
      const candidateNames = [];
      this.createHelp()
        .visibleCommands(this)
        .forEach((command) => {
          candidateNames.push(command.name());
          // just visible alias
          if (command.alias()) candidateNames.push(command.alias());
        });
      suggestion = suggestSimilar(unknownName, candidateNames);
    }

    const message = `error: unknown command '${unknownName}'${suggestion}`;
    this.error(message, { code: 'commander.unknownCommand' });
  }

  /**
   * Get or set the program version.
   *
   * This method auto-registers the "-V, --version" option which will print the version number.
   *
   * You can optionally supply the flags and description to override the defaults.
   *
   * @param {string} [str]
   * @param {string} [flags]
   * @param {string} [description]
   * @return {(this | string | undefined)} `this` command for chaining, or version string if no arguments
   */

  version(str, flags, description) {
    if (str === undefined) return this._version;
    this._version = str;
    flags = flags || '-V, --version';
    description = description || 'output the version number';
    const versionOption = this.createOption(flags, description);
    this._versionOptionName = versionOption.attributeName();
    this._registerOption(versionOption);

    this.on('option:' + versionOption.name(), () => {
      this._outputConfiguration.writeOut(`${str}\n`);
      this._exit(0, 'commander.version', str);
    });
    return this;
  }

  /**
   * Set the description.
   *
   * @param {string} [str]
   * @param {object} [argsDescription]
   * @return {(string|Command)}
   */
  description(str, argsDescription) {
    if (str === undefined && argsDescription === undefined)
      return this._description;
    this._description = str;
    if (argsDescription) {
      this._argsDescription = argsDescription;
    }
    return this;
  }

  /**
   * Set the summary. Used when listed as subcommand of parent.
   *
   * @param {string} [str]
   * @return {(string|Command)}
   */
  summary(str) {
    if (str === undefined) return this._summary;
    this._summary = str;
    return this;
  }

  /**
   * Set an alias for the command.
   *
   * You may call more than once to add multiple aliases. Only the first alias is shown in the auto-generated help.
   *
   * @param {string} [alias]
   * @return {(string|Command)}
   */

  alias(alias) {
    if (alias === undefined) return this._aliases[0]; // just return first, for backwards compatibility

    /** @type {Command} */
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let command = this;
    if (
      this.commands.length !== 0 &&
      this.commands[this.commands.length - 1]._executableHandler
    ) {
      // assume adding alias for last added executable subcommand, rather than this
      command = this.commands[this.commands.length - 1];
    }

    if (alias === command._name)
      throw new Error("Command alias can't be the same as its name");
    const matchingCommand = this.parent?._findCommand(alias);
    if (matchingCommand) {
      // c.f. _registerCommand
      const existingCmd = [matchingCommand.name()]
        .concat(matchingCommand.aliases())
        .join('|');
      throw new Error(
        `cannot add alias '${alias}' to command '${this.name()}' as already have command '${existingCmd}'`,
      );
    }

    command._aliases.push(alias);
    return this;
  }

  /**
   * Set aliases for the command.
   *
   * Only the first alias is shown in the auto-generated help.
   *
   * @param {string[]} [aliases]
   * @return {(string[]|Command)}
   */

  aliases(aliases) {
    // Getter for the array of aliases is the main reason for having aliases() in addition to alias().
    if (aliases === undefined) return this._aliases;

    aliases.forEach((alias) => this.alias(alias));
    return this;
  }

  /**
   * Set / get the command usage `str`.
   *
   * @param {string} [str]
   * @return {(string|Command)}
   */

  usage(str) {
    if (str === undefined) {
      if (this._usage) return this._usage;

      const args = this.registeredArguments.map((arg) => {
        return humanReadableArgName(arg);
      });
      return []
        .concat(
          this.options.length || this._helpOption !== null ? '[options]' : [],
          this.commands.length ? '[command]' : [],
          this.registeredArguments.length ? args : [],
        )
        .join(' ');
    }

    this._usage = str;
    return this;
  }

  /**
   * Get or set the name of the command.
   *
   * @param {string} [str]
   * @return {(string|Command)}
   */

  name(str) {
    if (str === undefined) return this._name;
    this._name = str;
    return this;
  }

  /**
   * Set/get the help group heading for this subcommand in parent command's help.
   *
   * @param {string} [heading]
   * @return {Command | string}
   */

  helpGroup(heading) {
    if (heading === undefined) return this._helpGroupHeading ?? '';
    this._helpGroupHeading = heading;
    return this;
  }

  /**
   * Set/get the default help group heading for subcommands added to this command.
   * (This does not override a group set directly on the subcommand using .helpGroup().)
   *
   * @example
   * program.commandsGroup('Development Commands:);
   * program.command('watch')...
   * program.command('lint')...
   * ...
   *
   * @param {string} [heading]
   * @returns {Command | string}
   */
  commandsGroup(heading) {
    if (heading === undefined) return this._defaultCommandGroup ?? '';
    this._defaultCommandGroup = heading;
    return this;
  }

  /**
   * Set/get the default help group heading for options added to this command.
   * (This does not override a group set directly on the option using .helpGroup().)
   *
   * @example
   * program
   *   .optionsGroup('Development Options:')
   *   .option('-d, --debug', 'output extra debugging')
   *   .option('-p, --profile', 'output profiling information')
   *
   * @param {string} [heading]
   * @returns {Command | string}
   */
  optionsGroup(heading) {
    if (heading === undefined) return this._defaultOptionGroup ?? '';
    this._defaultOptionGroup = heading;
    return this;
  }

  /**
   * @param {Option} option
   * @private
   */
  _initOptionGroup(option) {
    if (this._defaultOptionGroup && !option.helpGroupHeading)
      option.helpGroup(this._defaultOptionGroup);
  }

  /**
   * @param {Command} cmd
   * @private
   */
  _initCommandGroup(cmd) {
    if (this._defaultCommandGroup && !cmd.helpGroup())
      cmd.helpGroup(this._defaultCommandGroup);
  }

  /**
   * Set the name of the command from script filename, such as process.argv[1],
   * or require.main.filename, or __filename.
   *
   * (Used internally and public although not documented in README.)
   *
   * @example
   * program.nameFromFilename(require.main.filename);
   *
   * @param {string} filename
   * @return {Command}
   */

  nameFromFilename(filename) {
    this._name = path.basename(filename, path.extname(filename));

    return this;
  }

  /**
   * Get or set the directory for searching for executable subcommands of this command.
   *
   * @example
   * program.executableDir(__dirname);
   * // or
   * program.executableDir('subcommands');
   *
   * @param {string} [path]
   * @return {(string|null|Command)}
   */

  executableDir(path) {
    if (path === undefined) return this._executableDir;
    this._executableDir = path;
    return this;
  }

  /**
   * Return program help documentation.
   *
   * @param {{ error: boolean }} [contextOptions] - pass {error:true} to wrap for stderr instead of stdout
   * @return {string}
   */

  helpInformation(contextOptions) {
    const helper = this.createHelp();
    const context = this._getOutputContext(contextOptions);
    helper.prepareContext({
      error: context.error,
      helpWidth: context.helpWidth,
      outputHasColors: context.hasColors,
    });
    const text = helper.formatHelp(this, helper);
    if (context.hasColors) return text;
    return this._outputConfiguration.stripColor(text);
  }

  /**
   * @typedef HelpContext
   * @type {object}
   * @property {boolean} error
   * @property {number} helpWidth
   * @property {boolean} hasColors
   * @property {function} write - includes stripColor if needed
   *
   * @returns {HelpContext}
   * @private
   */

  _getOutputContext(contextOptions) {
    contextOptions = contextOptions || {};
    const error = !!contextOptions.error;
    let baseWrite;
    let hasColors;
    let helpWidth;
    if (error) {
      baseWrite = (str) => this._outputConfiguration.writeErr(str);
      hasColors = this._outputConfiguration.getErrHasColors();
      helpWidth = this._outputConfiguration.getErrHelpWidth();
    } else {
      baseWrite = (str) => this._outputConfiguration.writeOut(str);
      hasColors = this._outputConfiguration.getOutHasColors();
      helpWidth = this._outputConfiguration.getOutHelpWidth();
    }
    const write = (str) => {
      if (!hasColors) str = this._outputConfiguration.stripColor(str);
      return baseWrite(str);
    };
    return { error, write, hasColors, helpWidth };
  }

  /**
   * Output help information for this command.
   *
   * Outputs built-in help, and custom text added using `.addHelpText()`.
   *
   * @param {{ error: boolean } | Function} [contextOptions] - pass {error:true} to write to stderr instead of stdout
   */

  outputHelp(contextOptions) {
    let deprecatedCallback;
    if (typeof contextOptions === 'function') {
      deprecatedCallback = contextOptions;
      contextOptions = undefined;
    }

    const outputContext = this._getOutputContext(contextOptions);
    /** @type {HelpTextEventContext} */
    const eventContext = {
      error: outputContext.error,
      write: outputContext.write,
      command: this,
    };

    this._getCommandAndAncestors()
      .reverse()
      .forEach((command) => command.emit('beforeAllHelp', eventContext));
    this.emit('beforeHelp', eventContext);

    let helpInformation = this.helpInformation({ error: outputContext.error });
    if (deprecatedCallback) {
      helpInformation = deprecatedCallback(helpInformation);
      if (
        typeof helpInformation !== 'string' &&
        !Buffer.isBuffer(helpInformation)
      ) {
        throw new Error('outputHelp callback must return a string or a Buffer');
      }
    }
    outputContext.write(helpInformation);

    if (this._getHelpOption()?.long) {
      this.emit(this._getHelpOption().long); // deprecated
    }
    this.emit('afterHelp', eventContext);
    this._getCommandAndAncestors().forEach((command) =>
      command.emit('afterAllHelp', eventContext),
    );
  }

  /**
   * You can pass in flags and a description to customise the built-in help option.
   * Pass in false to disable the built-in help option.
   *
   * @example
   * program.helpOption('-?, --help' 'show help'); // customise
   * program.helpOption(false); // disable
   *
   * @param {(string | boolean)} flags
   * @param {string} [description]
   * @return {Command} `this` command for chaining
   */

  helpOption(flags, description) {
    // Support enabling/disabling built-in help option.
    if (typeof flags === 'boolean') {
      if (flags) {
        if (this._helpOption === null) this._helpOption = undefined; // reenable
        if (this._defaultOptionGroup) {
          // make the option to store the group
          this._initOptionGroup(this._getHelpOption());
        }
      } else {
        this._helpOption = null; // disable
      }
      return this;
    }

    // Customise flags and description.
    this._helpOption = this.createOption(
      flags ?? '-h, --help',
      description ?? 'display help for command',
    );
    // init group unless lazy create
    if (flags || description) this._initOptionGroup(this._helpOption);

    return this;
  }

  /**
   * Lazy create help option.
   * Returns null if has been disabled with .helpOption(false).
   *
   * @returns {(Option | null)} the help option
   * @package
   */
  _getHelpOption() {
    // Lazy create help option on demand.
    if (this._helpOption === undefined) {
      this.helpOption(undefined, undefined);
    }
    return this._helpOption;
  }

  /**
   * Supply your own option to use for the built-in help option.
   * This is an alternative to using helpOption() to customise the flags and description etc.
   *
   * @param {Option} option
   * @return {Command} `this` command for chaining
   */
  addHelpOption(option) {
    this._helpOption = option;
    this._initOptionGroup(option);
    return this;
  }

  /**
   * Output help information and exit.
   *
   * Outputs built-in help, and custom text added using `.addHelpText()`.
   *
   * @param {{ error: boolean }} [contextOptions] - pass {error:true} to write to stderr instead of stdout
   */

  help(contextOptions) {
    this.outputHelp(contextOptions);
    let exitCode = Number(process.exitCode ?? 0); // process.exitCode does allow a string or an integer, but we prefer just a number
    if (
      exitCode === 0 &&
      contextOptions &&
      typeof contextOptions !== 'function' &&
      contextOptions.error
    ) {
      exitCode = 1;
    }
    // message: do not have all displayed text available so only passing placeholder.
    this._exit(exitCode, 'commander.help', '(outputHelp)');
  }

  /**
   * // Do a little typing to coordinate emit and listener for the help text events.
   * @typedef HelpTextEventContext
   * @type {object}
   * @property {boolean} error
   * @property {Command} command
   * @property {function} write
   */

  /**
   * Add additional text to be displayed with the built-in help.
   *
   * Position is 'before' or 'after' to affect just this command,
   * and 'beforeAll' or 'afterAll' to affect this command and all its subcommands.
   *
   * @param {string} position - before or after built-in help
   * @param {(string | Function)} text - string to add, or a function returning a string
   * @return {Command} `this` command for chaining
   */

  addHelpText(position, text) {
    const allowedValues = ['beforeAll', 'before', 'after', 'afterAll'];
    if (!allowedValues.includes(position)) {
      throw new Error(`Unexpected value for position to addHelpText.
Expecting one of '${allowedValues.join("', '")}'`);
    }

    const helpEvent = `${position}Help`;
    this.on(helpEvent, (/** @type {HelpTextEventContext} */ context) => {
      let helpStr;
      if (typeof text === 'function') {
        helpStr = text({ error: context.error, command: context.command });
      } else {
        helpStr = text;
      }
      // Ignore falsy value when nothing to output.
      if (helpStr) {
        context.write(`${helpStr}\n`);
      }
    });
    return this;
  }

  /**
   * Output help information if help flags specified
   *
   * @param {Array} args - array of options to search for help flags
   * @private
   */

  _outputHelpIfRequested(args) {
    const helpOption = this._getHelpOption();
    const helpRequested = helpOption && args.find((arg) => helpOption.is(arg));
    if (helpRequested) {
      this.outputHelp();
      // (Do not have all displayed text available so only passing placeholder.)
      this._exit(0, 'commander.helpDisplayed', '(outputHelp)');
    }
  }
}

/**
 * Scan arguments and increment port number for inspect calls (to avoid conflicts when spawning new command).
 *
 * @param {string[]} args - array of arguments from node.execArgv
 * @returns {string[]}
 * @private
 */

function incrementNodeInspectorPort(args) {
  // Testing for these options:
  //  --inspect[=[host:]port]
  //  --inspect-brk[=[host:]port]
  //  --inspect-port=[host:]port
  return args.map((arg) => {
    if (!arg.startsWith('--inspect')) {
      return arg;
    }
    let debugOption;
    let debugHost = '127.0.0.1';
    let debugPort = '9229';
    let match;
    if ((match = arg.match(/^(--inspect(-brk)?)$/)) !== null) {
      // e.g. --inspect
      debugOption = match[1];
    } else if (
      (match = arg.match(/^(--inspect(-brk|-port)?)=([^:]+)$/)) !== null
    ) {
      debugOption = match[1];
      if (/^\d+$/.test(match[3])) {
        // e.g. --inspect=1234
        debugPort = match[3];
      } else {
        // e.g. --inspect=localhost
        debugHost = match[3];
      }
    } else if (
      (match = arg.match(/^(--inspect(-brk|-port)?)=([^:]+):(\d+)$/)) !== null
    ) {
      // e.g. --inspect=localhost:1234
      debugOption = match[1];
      debugHost = match[3];
      debugPort = match[4];
    }

    if (debugOption && debugPort !== '0') {
      return `${debugOption}=${debugHost}:${parseInt(debugPort) + 1}`;
    }
    return arg;
  });
}

/**
 * @returns {boolean | undefined}
 * @package
 */
function useColor() {
  // Test for common conventions.
  // NB: the observed behaviour is in combination with how author adds color! For example:
  //   - we do not test NODE_DISABLE_COLORS, but util:styletext does
  //   - we do test NO_COLOR, but Chalk does not
  //
  // References:
  // https://no-color.org
  // https://bixense.com/clicolors/
  // https://github.com/nodejs/node/blob/0a00217a5f67ef4a22384cfc80eb6dd9a917fdc1/lib/internal/tty.js#L109
  // https://github.com/chalk/supports-color/blob/c214314a14bcb174b12b3014b2b0a8de375029ae/index.js#L33
  // (https://force-color.org recent web page from 2023, does not match major javascript implementations)

  if (
    process.env.NO_COLOR ||
    process.env.FORCE_COLOR === '0' ||
    process.env.FORCE_COLOR === 'false'
  )
    return false;
  if (process.env.FORCE_COLOR || process.env.CLICOLOR_FORCE !== undefined)
    return true;
  return undefined;
}

exports.Command = Command;
exports.useColor = useColor; // exporting for tests
