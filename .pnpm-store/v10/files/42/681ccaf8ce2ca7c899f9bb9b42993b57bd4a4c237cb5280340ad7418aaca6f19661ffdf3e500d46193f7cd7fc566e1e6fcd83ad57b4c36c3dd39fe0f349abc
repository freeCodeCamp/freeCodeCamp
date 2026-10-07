"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCommandBuilderCallback = exports.isCommandBuilderDefinition = exports.isCommandHandlerDefinition = exports.command = void 0;
const common_types_1 = require("./common-types");
const is_promise_1 = require("./is-promise");
const middleware_1 = require("./middleware");
const parse_command_1 = require("./parse-command");
const path = require("path");
const util_1 = require("util");
const yargs_1 = require("./yargs");
const requireDirectory = require("require-directory");
const whichModule = require("which-module");
const Parser = require("yargs-parser");
const DEFAULT_MARKER = /(^\*)|(^\$0)/;
// handles parsing positional arguments,
// and populating argv with said positional
// arguments.
function command(yargs, usage, validation, globalMiddleware = []) {
    const self = {};
    let handlers = {};
    let aliasMap = {};
    let defaultCommand;
    self.addHandler = function addHandler(cmd, description, builder, handler, commandMiddleware, deprecated) {
        let aliases = [];
        const middlewares = middleware_1.commandMiddlewareFactory(commandMiddleware);
        handler = handler || (() => { });
        if (Array.isArray(cmd)) {
            aliases = cmd.slice(1);
            cmd = cmd[0];
        }
        else if (isCommandHandlerDefinition(cmd)) {
            let command = (Array.isArray(cmd.command) || typeof cmd.command === 'string') ? cmd.command : moduleName(cmd);
            if (cmd.aliases)
                command = [].concat(command).concat(cmd.aliases);
            self.addHandler(command, extractDesc(cmd), cmd.builder, cmd.handler, cmd.middlewares, cmd.deprecated);
            return;
        }
        // allow a module to be provided instead of separate builder and handler
        if (isCommandBuilderDefinition(builder)) {
            self.addHandler([cmd].concat(aliases), description, builder.builder, builder.handler, builder.middlewares, builder.deprecated);
            return;
        }
        // parse positionals out of cmd string
        const parsedCommand = parse_command_1.parseCommand(cmd);
        // remove positional args from aliases only
        aliases = aliases.map(alias => parse_command_1.parseCommand(alias).cmd);
        // check for default and filter out '*''
        let isDefault = false;
        const parsedAliases = [parsedCommand.cmd].concat(aliases).filter((c) => {
            if (DEFAULT_MARKER.test(c)) {
                isDefault = true;
                return false;
            }
            return true;
        });
        // standardize on $0 for default command.
        if (parsedAliases.length === 0 && isDefault)
            parsedAliases.push('$0');
        // shift cmd and aliases after filtering out '*'
        if (isDefault) {
            parsedCommand.cmd = parsedAliases[0];
            aliases = parsedAliases.slice(1);
            cmd = cmd.replace(DEFAULT_MARKER, parsedCommand.cmd);
        }
        // populate aliasMap
        aliases.forEach((alias) => {
            aliasMap[alias] = parsedCommand.cmd;
        });
        if (description !== false) {
            usage.command(cmd, description, isDefault, aliases, deprecated);
        }
        handlers[parsedCommand.cmd] = {
            original: cmd,
            description,
            handler,
            builder: builder || {},
            middlewares,
            deprecated,
            demanded: parsedCommand.demanded,
            optional: parsedCommand.optional
        };
        if (isDefault)
            defaultCommand = handlers[parsedCommand.cmd];
    };
    self.addDirectory = function addDirectory(dir, context, req, callerFile, opts) {
        opts = opts || {};
        // disable recursion to support nested directories of subcommands
        if (typeof opts.recurse !== 'boolean')
            opts.recurse = false;
        // exclude 'json', 'coffee' from require-directory defaults
        if (!Array.isArray(opts.extensions))
            opts.extensions = ['js'];
        // allow consumer to define their own visitor function
        const parentVisit = typeof opts.visit === 'function' ? opts.visit : (o) => o;
        // call addHandler via visitor function
        opts.visit = function visit(obj, joined, filename) {
            const visited = parentVisit(obj, joined, filename);
            // allow consumer to skip modules with their own visitor
            if (visited) {
                // check for cyclic reference
                // each command file path should only be seen once per execution
                if (~context.files.indexOf(joined))
                    return visited;
                // keep track of visited files in context.files
                context.files.push(joined);
                self.addHandler(visited);
            }
            return visited;
        };
        requireDirectory({ require: req, filename: callerFile }, dir, opts);
    };
    // lookup module object from require()d command and derive name
    // if module was not require()d and no name given, throw error
    function moduleName(obj) {
        const mod = whichModule(obj);
        if (!mod)
            throw new Error(`No command name given for module: ${util_1.inspect(obj)}`);
        return commandFromFilename(mod.filename);
    }
    // derive command name from filename
    function commandFromFilename(filename) {
        return path.basename(filename, path.extname(filename));
    }
    function extractDesc({ describe, description, desc }) {
        for (const test of [describe, description, desc]) {
            if (typeof test === 'string' || test === false)
                return test;
            common_types_1.assertNotStrictEqual(test, true);
        }
        return false;
    }
    self.getCommands = () => Object.keys(handlers).concat(Object.keys(aliasMap));
    self.getCommandHandlers = () => handlers;
    self.hasDefaultCommand = () => !!defaultCommand;
    self.runCommand = function runCommand(command, yargs, parsed, commandIndex) {
        let aliases = parsed.aliases;
        const commandHandler = handlers[command] || handlers[aliasMap[command]] || defaultCommand;
        const currentContext = yargs.getContext();
        let numFiles = currentContext.files.length;
        const parentCommands = currentContext.commands.slice();
        // what does yargs look like after the builder is run?
        let innerArgv = parsed.argv;
        let positionalMap = {};
        if (command) {
            currentContext.commands.push(command);
            currentContext.fullCommands.push(commandHandler.original);
        }
        const builder = commandHandler.builder;
        if (isCommandBuilderCallback(builder)) {
            // a function can be provided, which builds
            // up a yargs chain and possibly returns it.
            const builderOutput = builder(yargs.reset(parsed.aliases));
            const innerYargs = yargs_1.isYargsInstance(builderOutput) ? builderOutput : yargs;
            if (shouldUpdateUsage(innerYargs)) {
                innerYargs.getUsageInstance().usage(usageFromParentCommandsCommandHandler(parentCommands, commandHandler), commandHandler.description);
            }
            innerArgv = innerYargs._parseArgs(null, null, true, commandIndex);
            aliases = innerYargs.parsed.aliases;
        }
        else if (isCommandBuilderOptionDefinitions(builder)) {
            // as a short hand, an object can instead be provided, specifying
            // the options that a command takes.
            const innerYargs = yargs.reset(parsed.aliases);
            if (shouldUpdateUsage(innerYargs)) {
                innerYargs.getUsageInstance().usage(usageFromParentCommandsCommandHandler(parentCommands, commandHandler), commandHandler.description);
            }
            Object.keys(commandHandler.builder).forEach((key) => {
                innerYargs.option(key, builder[key]);
            });
            innerArgv = innerYargs._parseArgs(null, null, true, commandIndex);
            aliases = innerYargs.parsed.aliases;
        }
        if (!yargs._hasOutput()) {
            positionalMap = populatePositionals(commandHandler, innerArgv, currentContext);
        }
        const middlewares = globalMiddleware.slice(0).concat(commandHandler.middlewares);
        middleware_1.applyMiddleware(innerArgv, yargs, middlewares, true);
        // we apply validation post-hoc, so that custom
        // checks get passed populated positional arguments.
        if (!yargs._hasOutput()) {
            yargs._runValidation(innerArgv, aliases, positionalMap, yargs.parsed.error, !command);
        }
        if (commandHandler.handler && !yargs._hasOutput()) {
            yargs._setHasOutput();
            // to simplify the parsing of positionals in commands,
            // we temporarily populate '--' rather than _, with arguments
            const populateDoubleDash = !!yargs.getOptions().configuration['populate--'];
            if (!populateDoubleDash)
                yargs._copyDoubleDash(innerArgv);
            innerArgv = middleware_1.applyMiddleware(innerArgv, yargs, middlewares, false);
            let handlerResult;
            if (is_promise_1.isPromise(innerArgv)) {
                handlerResult = innerArgv.then(argv => commandHandler.handler(argv));
            }
            else {
                handlerResult = commandHandler.handler(innerArgv);
            }
            const handlerFinishCommand = yargs.getHandlerFinishCommand();
            if (is_promise_1.isPromise(handlerResult)) {
                yargs.getUsageInstance().cacheHelpMessage();
                handlerResult
                    .then(value => {
                    if (handlerFinishCommand) {
                        handlerFinishCommand(value);
                    }
                })
                    .catch(error => {
                    try {
                        yargs.getUsageInstance().fail(null, error);
                    }
                    catch (err) {
                        // fail's throwing would cause an unhandled rejection.
                    }
                })
                    .then(() => {
                    yargs.getUsageInstance().clearCachedHelpMessage();
                });
            }
            else {
                if (handlerFinishCommand) {
                    handlerFinishCommand(handlerResult);
                }
            }
        }
        if (command) {
            currentContext.commands.pop();
            currentContext.fullCommands.pop();
        }
        numFiles = currentContext.files.length - numFiles;
        if (numFiles > 0)
            currentContext.files.splice(numFiles * -1, numFiles);
        return innerArgv;
    };
    function shouldUpdateUsage(yargs) {
        return !yargs.getUsageInstance().getUsageDisabled() &&
            yargs.getUsageInstance().getUsage().length === 0;
    }
    function usageFromParentCommandsCommandHandler(parentCommands, commandHandler) {
        const c = DEFAULT_MARKER.test(commandHandler.original) ? commandHandler.original.replace(DEFAULT_MARKER, '').trim() : commandHandler.original;
        const pc = parentCommands.filter((c) => { return !DEFAULT_MARKER.test(c); });
        pc.push(c);
        return `$0 ${pc.join(' ')}`;
    }
    self.runDefaultBuilderOn = function (yargs) {
        common_types_1.assertNotStrictEqual(defaultCommand, undefined);
        if (shouldUpdateUsage(yargs)) {
            // build the root-level command string from the default string.
            const commandString = DEFAULT_MARKER.test(defaultCommand.original)
                ? defaultCommand.original : defaultCommand.original.replace(/^[^[\]<>]*/, '$0 ');
            yargs.getUsageInstance().usage(commandString, defaultCommand.description);
        }
        const builder = defaultCommand.builder;
        if (isCommandBuilderCallback(builder)) {
            builder(yargs);
        }
        else {
            Object.keys(builder).forEach((key) => {
                yargs.option(key, builder[key]);
            });
        }
    };
    // transcribe all positional arguments "command <foo> <bar> [apple]"
    // onto argv.
    function populatePositionals(commandHandler, argv, context) {
        argv._ = argv._.slice(context.commands.length); // nuke the current commands
        const demanded = commandHandler.demanded.slice(0);
        const optional = commandHandler.optional.slice(0);
        const positionalMap = {};
        validation.positionalCount(demanded.length, argv._.length);
        while (demanded.length) {
            const demand = demanded.shift();
            populatePositional(demand, argv, positionalMap);
        }
        while (optional.length) {
            const maybe = optional.shift();
            populatePositional(maybe, argv, positionalMap);
        }
        argv._ = context.commands.concat(argv._);
        postProcessPositionals(argv, positionalMap, self.cmdToParseOptions(commandHandler.original));
        return positionalMap;
    }
    function populatePositional(positional, argv, positionalMap) {
        const cmd = positional.cmd[0];
        if (positional.variadic) {
            positionalMap[cmd] = argv._.splice(0).map(String);
        }
        else {
            if (argv._.length)
                positionalMap[cmd] = [String(argv._.shift())];
        }
    }
    // we run yargs-parser against the positional arguments
    // applying the same parsing logic used for flags.
    function postProcessPositionals(argv, positionalMap, parseOptions) {
        // combine the parsing hints we've inferred from the command
        // string with explicitly configured parsing hints.
        const options = Object.assign({}, yargs.getOptions());
        options.default = Object.assign(parseOptions.default, options.default);
        for (const key of Object.keys(parseOptions.alias)) {
            options.alias[key] = (options.alias[key] || []).concat(parseOptions.alias[key]);
        }
        options.array = options.array.concat(parseOptions.array);
        delete options.config; //  don't load config when processing positionals.
        const unparsed = [];
        Object.keys(positionalMap).forEach((key) => {
            positionalMap[key].map((value) => {
                if (options.configuration['unknown-options-as-args'])
                    options.key[key] = true;
                unparsed.push(`--${key}`);
                unparsed.push(value);
            });
        });
        // short-circuit parse.
        if (!unparsed.length)
            return;
        const config = Object.assign({}, options.configuration, {
            'populate--': true
        });
        const parsed = Parser.detailed(unparsed, Object.assign({}, options, {
            configuration: config
        }));
        if (parsed.error) {
            yargs.getUsageInstance().fail(parsed.error.message, parsed.error);
        }
        else {
            // only copy over positional keys (don't overwrite
            // flag arguments that were already parsed).
            const positionalKeys = Object.keys(positionalMap);
            Object.keys(positionalMap).forEach((key) => {
                positionalKeys.push(...parsed.aliases[key]);
            });
            Object.keys(parsed.argv).forEach((key) => {
                if (positionalKeys.indexOf(key) !== -1) {
                    // any new aliases need to be placed in positionalMap, which
                    // is used for validation.
                    if (!positionalMap[key])
                        positionalMap[key] = parsed.argv[key];
                    argv[key] = parsed.argv[key];
                }
            });
        }
    }
    self.cmdToParseOptions = function (cmdString) {
        const parseOptions = {
            array: [],
            default: {},
            alias: {},
            demand: {}
        };
        const parsed = parse_command_1.parseCommand(cmdString);
        parsed.demanded.forEach((d) => {
            const [cmd, ...aliases] = d.cmd;
            if (d.variadic) {
                parseOptions.array.push(cmd);
                parseOptions.default[cmd] = [];
            }
            parseOptions.alias[cmd] = aliases;
            parseOptions.demand[cmd] = true;
        });
        parsed.optional.forEach((o) => {
            const [cmd, ...aliases] = o.cmd;
            if (o.variadic) {
                parseOptions.array.push(cmd);
                parseOptions.default[cmd] = [];
            }
            parseOptions.alias[cmd] = aliases;
        });
        return parseOptions;
    };
    self.reset = () => {
        handlers = {};
        aliasMap = {};
        defaultCommand = undefined;
        return self;
    };
    // used by yargs.parse() to freeze
    // the state of commands such that
    // we can apply .parse() multiple times
    // with the same yargs instance.
    const frozens = [];
    self.freeze = () => {
        frozens.push({
            handlers,
            aliasMap,
            defaultCommand
        });
    };
    self.unfreeze = () => {
        const frozen = frozens.pop();
        common_types_1.assertNotStrictEqual(frozen, undefined);
        ({
            handlers,
            aliasMap,
            defaultCommand
        } = frozen);
    };
    return self;
}
exports.command = command;
function isCommandHandlerDefinition(cmd) {
    return typeof cmd === 'object';
}
exports.isCommandHandlerDefinition = isCommandHandlerDefinition;
function isCommandBuilderDefinition(builder) {
    return typeof builder === 'object' &&
        !!builder.builder &&
        typeof builder.handler === 'function';
}
exports.isCommandBuilderDefinition = isCommandBuilderDefinition;
function isCommandBuilderCallback(builder) {
    return typeof builder === 'function';
}
exports.isCommandBuilderCallback = isCommandBuilderCallback;
function isCommandBuilderOptionDefinitions(builder) {
    return typeof builder === 'object';
}
