"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completion = void 0;
const command_1 = require("./command");
const templates = require("./completion-templates");
const is_promise_1 = require("./is-promise");
const parse_command_1 = require("./parse-command");
const path = require("path");
const common_types_1 = require("./common-types");
// add bash completions to your
//  yargs-powered applications.
function completion(yargs, usage, command) {
    const self = {
        completionKey: 'get-yargs-completions'
    };
    let aliases;
    self.setParsed = function setParsed(parsed) {
        aliases = parsed.aliases;
    };
    const zshShell = (process.env.SHELL && process.env.SHELL.indexOf('zsh') !== -1) ||
        (process.env.ZSH_NAME && process.env.ZSH_NAME.indexOf('zsh') !== -1);
    // get a list of completion commands.
    // 'args' is the array of strings from the line to be completed
    self.getCompletion = function getCompletion(args, done) {
        const completions = [];
        const current = args.length ? args[args.length - 1] : '';
        const argv = yargs.parse(args, true);
        const parentCommands = yargs.getContext().commands;
        // a custom completion function can be provided
        // to completion().
        function runCompletionFunction(argv) {
            common_types_1.assertNotStrictEqual(completionFunction, null);
            if (isSyncCompletionFunction(completionFunction)) {
                const result = completionFunction(current, argv);
                // promise based completion function.
                if (is_promise_1.isPromise(result)) {
                    return result.then((list) => {
                        process.nextTick(() => { done(list); });
                    }).catch((err) => {
                        process.nextTick(() => { throw err; });
                    });
                }
                // synchronous completion function.
                return done(result);
            }
            else {
                // asynchronous completion function
                return completionFunction(current, argv, (completions) => {
                    done(completions);
                });
            }
        }
        if (completionFunction) {
            return is_promise_1.isPromise(argv) ? argv.then(runCompletionFunction) : runCompletionFunction(argv);
        }
        const handlers = command.getCommandHandlers();
        for (let i = 0, ii = args.length; i < ii; ++i) {
            if (handlers[args[i]] && handlers[args[i]].builder) {
                const builder = handlers[args[i]].builder;
                if (command_1.isCommandBuilderCallback(builder)) {
                    const y = yargs.reset();
                    builder(y);
                    return y.argv;
                }
            }
        }
        if (!current.match(/^-/) && parentCommands[parentCommands.length - 1] !== current) {
            usage.getCommands().forEach((usageCommand) => {
                const commandName = parse_command_1.parseCommand(usageCommand[0]).cmd;
                if (args.indexOf(commandName) === -1) {
                    if (!zshShell) {
                        completions.push(commandName);
                    }
                    else {
                        const desc = usageCommand[1] || '';
                        completions.push(commandName.replace(/:/g, '\\:') + ':' + desc);
                    }
                }
            });
        }
        if (current.match(/^-/) || (current === '' && completions.length === 0)) {
            const descs = usage.getDescriptions();
            const options = yargs.getOptions();
            Object.keys(options.key).forEach((key) => {
                const negable = !!options.configuration['boolean-negation'] && options.boolean.includes(key);
                // If the key and its aliases aren't in 'args', add the key to 'completions'
                let keyAndAliases = [key].concat(aliases[key] || []);
                if (negable)
                    keyAndAliases = keyAndAliases.concat(keyAndAliases.map(key => `no-${key}`));
                function completeOptionKey(key) {
                    const notInArgs = keyAndAliases.every(val => args.indexOf(`--${val}`) === -1);
                    if (notInArgs) {
                        const startsByTwoDashes = (s) => /^--/.test(s);
                        const isShortOption = (s) => /^[^0-9]$/.test(s);
                        const dashes = !startsByTwoDashes(current) && isShortOption(key) ? '-' : '--';
                        if (!zshShell) {
                            completions.push(dashes + key);
                        }
                        else {
                            const desc = descs[key] || '';
                            completions.push(dashes + `${key.replace(/:/g, '\\:')}:${desc.replace('__yargsString__:', '')}`);
                        }
                    }
                }
                completeOptionKey(key);
                if (negable && !!options.default[key])
                    completeOptionKey(`no-${key}`);
            });
        }
        done(completions);
    };
    // generate the completion script to add to your .bashrc.
    self.generateCompletionScript = function generateCompletionScript($0, cmd) {
        let script = zshShell ? templates.completionZshTemplate : templates.completionShTemplate;
        const name = path.basename($0);
        // add ./to applications not yet installed as bin.
        if ($0.match(/\.js$/))
            $0 = `./${$0}`;
        script = script.replace(/{{app_name}}/g, name);
        script = script.replace(/{{completion_command}}/g, cmd);
        return script.replace(/{{app_path}}/g, $0);
    };
    // register a function to perform your own custom
    // completions., this function can be either
    // synchrnous or asynchronous.
    let completionFunction = null;
    self.registerFunction = (fn) => {
        completionFunction = fn;
    };
    return self;
}
exports.completion = completion;
function isSyncCompletionFunction(completionFunction) {
    return completionFunction.length < 3;
}
