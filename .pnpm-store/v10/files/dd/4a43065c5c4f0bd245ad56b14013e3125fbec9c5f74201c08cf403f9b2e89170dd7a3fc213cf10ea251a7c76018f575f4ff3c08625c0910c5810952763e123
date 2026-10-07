"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
const argsert_1 = require("./argsert");
const common_types_1 = require("./common-types");
const levenshtein_1 = require("./levenshtein");
const obj_filter_1 = require("./obj-filter");
const specialKeys = ['$0', '--', '_'];
// validation-type-stuff, missing params,
// bad implications, custom checks.
function validation(yargs, usage, y18n) {
    const __ = y18n.__;
    const __n = y18n.__n;
    const self = {};
    // validate appropriate # of non-option
    // arguments were provided, i.e., '_'.
    self.nonOptionCount = function nonOptionCount(argv) {
        const demandedCommands = yargs.getDemandedCommands();
        // don't count currently executing commands
        const _s = argv._.length - yargs.getContext().commands.length;
        if (demandedCommands._ && (_s < demandedCommands._.min || _s > demandedCommands._.max)) {
            if (_s < demandedCommands._.min) {
                if (demandedCommands._.minMsg !== undefined) {
                    usage.fail(
                    // replace $0 with observed, $1 with expected.
                    demandedCommands._.minMsg
                        ? demandedCommands._.minMsg.replace(/\$0/g, _s.toString()).replace(/\$1/, demandedCommands._.min.toString())
                        : null);
                }
                else {
                    usage.fail(__n('Not enough non-option arguments: got %s, need at least %s', 'Not enough non-option arguments: got %s, need at least %s', _s, _s, demandedCommands._.min));
                }
            }
            else if (_s > demandedCommands._.max) {
                if (demandedCommands._.maxMsg !== undefined) {
                    usage.fail(
                    // replace $0 with observed, $1 with expected.
                    demandedCommands._.maxMsg
                        ? demandedCommands._.maxMsg.replace(/\$0/g, _s.toString()).replace(/\$1/, demandedCommands._.max.toString())
                        : null);
                }
                else {
                    usage.fail(__n('Too many non-option arguments: got %s, maximum of %s', 'Too many non-option arguments: got %s, maximum of %s', _s, _s, demandedCommands._.max));
                }
            }
        }
    };
    // validate the appropriate # of <required>
    // positional arguments were provided:
    self.positionalCount = function positionalCount(required, observed) {
        if (observed < required) {
            usage.fail(__n('Not enough non-option arguments: got %s, need at least %s', 'Not enough non-option arguments: got %s, need at least %s', observed, observed, required));
        }
    };
    // make sure all the required arguments are present.
    self.requiredArguments = function requiredArguments(argv) {
        const demandedOptions = yargs.getDemandedOptions();
        let missing = null;
        for (const key of Object.keys(demandedOptions)) {
            if (!Object.prototype.hasOwnProperty.call(argv, key) || typeof argv[key] === 'undefined') {
                missing = missing || {};
                missing[key] = demandedOptions[key];
            }
        }
        if (missing) {
            const customMsgs = [];
            for (const key of Object.keys(missing)) {
                const msg = missing[key];
                if (msg && customMsgs.indexOf(msg) < 0) {
                    customMsgs.push(msg);
                }
            }
            const customMsg = customMsgs.length ? `\n${customMsgs.join('\n')}` : '';
            usage.fail(__n('Missing required argument: %s', 'Missing required arguments: %s', Object.keys(missing).length, Object.keys(missing).join(', ') + customMsg));
        }
    };
    // check for unknown arguments (strict-mode).
    self.unknownArguments = function unknownArguments(argv, aliases, positionalMap, isDefaultCommand) {
        const commandKeys = yargs.getCommandInstance().getCommands();
        const unknown = [];
        const currentContext = yargs.getContext();
        Object.keys(argv).forEach((key) => {
            if (specialKeys.indexOf(key) === -1 &&
                !Object.prototype.hasOwnProperty.call(positionalMap, key) &&
                !Object.prototype.hasOwnProperty.call(yargs._getParseContext(), key) &&
                !self.isValidAndSomeAliasIsNotNew(key, aliases)) {
                unknown.push(key);
            }
        });
        if ((currentContext.commands.length > 0) || (commandKeys.length > 0) || isDefaultCommand) {
            argv._.slice(currentContext.commands.length).forEach((key) => {
                if (commandKeys.indexOf(key) === -1) {
                    unknown.push(key);
                }
            });
        }
        if (unknown.length > 0) {
            usage.fail(__n('Unknown argument: %s', 'Unknown arguments: %s', unknown.length, unknown.join(', ')));
        }
    };
    self.unknownCommands = function unknownCommands(argv) {
        const commandKeys = yargs.getCommandInstance().getCommands();
        const unknown = [];
        const currentContext = yargs.getContext();
        if ((currentContext.commands.length > 0) || (commandKeys.length > 0)) {
            argv._.slice(currentContext.commands.length).forEach((key) => {
                if (commandKeys.indexOf(key) === -1) {
                    unknown.push(key);
                }
            });
        }
        if (unknown.length > 0) {
            usage.fail(__n('Unknown command: %s', 'Unknown commands: %s', unknown.length, unknown.join(', ')));
            return true;
        }
        else {
            return false;
        }
    };
    // check for a key that is not an alias, or for which every alias is new,
    // implying that it was invented by the parser, e.g., during camelization
    self.isValidAndSomeAliasIsNotNew = function isValidAndSomeAliasIsNotNew(key, aliases) {
        if (!Object.prototype.hasOwnProperty.call(aliases, key)) {
            return false;
        }
        const newAliases = yargs.parsed.newAliases;
        for (const a of [key, ...aliases[key]]) {
            if (!Object.prototype.hasOwnProperty.call(newAliases, a) || !newAliases[key]) {
                return true;
            }
        }
        return false;
    };
    // validate arguments limited to enumerated choices
    self.limitedChoices = function limitedChoices(argv) {
        const options = yargs.getOptions();
        const invalid = {};
        if (!Object.keys(options.choices).length)
            return;
        Object.keys(argv).forEach((key) => {
            if (specialKeys.indexOf(key) === -1 &&
                Object.prototype.hasOwnProperty.call(options.choices, key)) {
                [].concat(argv[key]).forEach((value) => {
                    // TODO case-insensitive configurability
                    if (options.choices[key].indexOf(value) === -1 &&
                        value !== undefined) {
                        invalid[key] = (invalid[key] || []).concat(value);
                    }
                });
            }
        });
        const invalidKeys = Object.keys(invalid);
        if (!invalidKeys.length)
            return;
        let msg = __('Invalid values:');
        invalidKeys.forEach((key) => {
            msg += `\n  ${__('Argument: %s, Given: %s, Choices: %s', key, usage.stringifiedValues(invalid[key]), usage.stringifiedValues(options.choices[key]))}`;
        });
        usage.fail(msg);
    };
    // custom checks, added using the `check` option on yargs.
    let checks = [];
    self.check = function check(f, global) {
        checks.push({
            func: f,
            global
        });
    };
    self.customChecks = function customChecks(argv, aliases) {
        for (let i = 0, f; (f = checks[i]) !== undefined; i++) {
            const func = f.func;
            let result = null;
            try {
                result = func(argv, aliases);
            }
            catch (err) {
                usage.fail(err.message ? err.message : err, err);
                continue;
            }
            if (!result) {
                usage.fail(__('Argument check failed: %s', func.toString()));
            }
            else if (typeof result === 'string' || result instanceof Error) {
                usage.fail(result.toString(), result);
            }
        }
    };
    // check implications, argument foo implies => argument bar.
    let implied = {};
    self.implies = function implies(key, value) {
        argsert_1.argsert('<string|object> [array|number|string]', [key, value], arguments.length);
        if (typeof key === 'object') {
            Object.keys(key).forEach((k) => {
                self.implies(k, key[k]);
            });
        }
        else {
            yargs.global(key);
            if (!implied[key]) {
                implied[key] = [];
            }
            if (Array.isArray(value)) {
                value.forEach((i) => self.implies(key, i));
            }
            else {
                common_types_1.assertNotStrictEqual(value, undefined);
                implied[key].push(value);
            }
        }
    };
    self.getImplied = function getImplied() {
        return implied;
    };
    function keyExists(argv, val) {
        // convert string '1' to number 1
        const num = Number(val);
        val = isNaN(num) ? val : num;
        if (typeof val === 'number') {
            // check length of argv._
            val = argv._.length >= val;
        }
        else if (val.match(/^--no-.+/)) {
            // check if key/value doesn't exist
            val = val.match(/^--no-(.+)/)[1];
            val = !argv[val];
        }
        else {
            // check if key/value exists
            val = argv[val];
        }
        return val;
    }
    self.implications = function implications(argv) {
        const implyFail = [];
        Object.keys(implied).forEach((key) => {
            const origKey = key;
            (implied[key] || []).forEach((value) => {
                let key = origKey;
                const origValue = value;
                key = keyExists(argv, key);
                value = keyExists(argv, value);
                if (key && !value) {
                    implyFail.push(` ${origKey} -> ${origValue}`);
                }
            });
        });
        if (implyFail.length) {
            let msg = `${__('Implications failed:')}\n`;
            implyFail.forEach((value) => {
                msg += (value);
            });
            usage.fail(msg);
        }
    };
    let conflicting = {};
    self.conflicts = function conflicts(key, value) {
        argsert_1.argsert('<string|object> [array|string]', [key, value], arguments.length);
        if (typeof key === 'object') {
            Object.keys(key).forEach((k) => {
                self.conflicts(k, key[k]);
            });
        }
        else {
            yargs.global(key);
            if (!conflicting[key]) {
                conflicting[key] = [];
            }
            if (Array.isArray(value)) {
                value.forEach((i) => self.conflicts(key, i));
            }
            else {
                conflicting[key].push(value);
            }
        }
    };
    self.getConflicting = () => conflicting;
    self.conflicting = function conflictingFn(argv) {
        Object.keys(argv).forEach((key) => {
            if (conflicting[key]) {
                conflicting[key].forEach((value) => {
                    // we default keys to 'undefined' that have been configured, we should not
                    // apply conflicting check unless they are a value other than 'undefined'.
                    if (value && argv[key] !== undefined && argv[value] !== undefined) {
                        usage.fail(__('Arguments %s and %s are mutually exclusive', key, value));
                    }
                });
            }
        });
    };
    self.recommendCommands = function recommendCommands(cmd, potentialCommands) {
        const threshold = 3; // if it takes more than three edits, let's move on.
        potentialCommands = potentialCommands.sort((a, b) => b.length - a.length);
        let recommended = null;
        let bestDistance = Infinity;
        for (let i = 0, candidate; (candidate = potentialCommands[i]) !== undefined; i++) {
            const d = levenshtein_1.levenshtein(cmd, candidate);
            if (d <= threshold && d < bestDistance) {
                bestDistance = d;
                recommended = candidate;
            }
        }
        if (recommended)
            usage.fail(__('Did you mean %s?', recommended));
    };
    self.reset = function reset(localLookup) {
        implied = obj_filter_1.objFilter(implied, k => !localLookup[k]);
        conflicting = obj_filter_1.objFilter(conflicting, k => !localLookup[k]);
        checks = checks.filter(c => c.global);
        return self;
    };
    const frozens = [];
    self.freeze = function freeze() {
        frozens.push({
            implied,
            checks,
            conflicting
        });
    };
    self.unfreeze = function unfreeze() {
        const frozen = frozens.pop();
        common_types_1.assertNotStrictEqual(frozen, undefined);
        ({
            implied,
            checks,
            conflicting
        } = frozen);
    };
    return self;
}
exports.validation = validation;
