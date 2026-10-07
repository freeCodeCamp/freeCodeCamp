import { argsert } from './argsert.js';
import { assertNotStrictEqual, } from './typings/common-types.js';
import { levenshtein as distance } from './utils/levenshtein.js';
import { objFilter } from './utils/obj-filter.js';
const specialKeys = ['$0', '--', '_'];
export function validation(yargs, usage, y18n, shim) {
    const __ = y18n.__;
    const __n = y18n.__n;
    const self = {};
    self.nonOptionCount = function nonOptionCount(argv) {
        const demandedCommands = yargs.getDemandedCommands();
        const positionalCount = argv._.length + (argv['--'] ? argv['--'].length : 0);
        const _s = positionalCount - yargs.getContext().commands.length;
        if (demandedCommands._ &&
            (_s < demandedCommands._.min || _s > demandedCommands._.max)) {
            if (_s < demandedCommands._.min) {
                if (demandedCommands._.minMsg !== undefined) {
                    usage.fail(demandedCommands._.minMsg
                        ? demandedCommands._.minMsg
                            .replace(/\$0/g, _s.toString())
                            .replace(/\$1/, demandedCommands._.min.toString())
                        : null);
                }
                else {
                    usage.fail(__n('Not enough non-option arguments: got %s, need at least %s', 'Not enough non-option arguments: got %s, need at least %s', _s, _s.toString(), demandedCommands._.min.toString()));
                }
            }
            else if (_s > demandedCommands._.max) {
                if (demandedCommands._.maxMsg !== undefined) {
                    usage.fail(demandedCommands._.maxMsg
                        ? demandedCommands._.maxMsg
                            .replace(/\$0/g, _s.toString())
                            .replace(/\$1/, demandedCommands._.max.toString())
                        : null);
                }
                else {
                    usage.fail(__n('Too many non-option arguments: got %s, maximum of %s', 'Too many non-option arguments: got %s, maximum of %s', _s, _s.toString(), demandedCommands._.max.toString()));
                }
            }
        }
    };
    self.positionalCount = function positionalCount(required, observed) {
        if (observed < required) {
            usage.fail(__n('Not enough non-option arguments: got %s, need at least %s', 'Not enough non-option arguments: got %s, need at least %s', observed, observed + '', required + ''));
        }
    };
    self.requiredArguments = function requiredArguments(argv) {
        const demandedOptions = yargs.getDemandedOptions();
        let missing = null;
        for (const key of Object.keys(demandedOptions)) {
            if (!Object.prototype.hasOwnProperty.call(argv, key) ||
                typeof argv[key] === 'undefined') {
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
    self.unknownArguments = function unknownArguments(argv, aliases, positionalMap, isDefaultCommand, checkPositionals = true) {
        const commandKeys = yargs.getCommandInstance().getCommands();
        const unknown = [];
        const currentContext = yargs.getContext();
        Object.keys(argv).forEach(key => {
            if (specialKeys.indexOf(key) === -1 &&
                !Object.prototype.hasOwnProperty.call(positionalMap, key) &&
                !Object.prototype.hasOwnProperty.call(yargs._getParseContext(), key) &&
                !self.isValidAndSomeAliasIsNotNew(key, aliases)) {
                unknown.push(key);
            }
        });
        if (checkPositionals &&
            (currentContext.commands.length > 0 ||
                commandKeys.length > 0 ||
                isDefaultCommand)) {
            argv._.slice(currentContext.commands.length).forEach(key => {
                if (commandKeys.indexOf('' + key) === -1) {
                    unknown.push('' + key);
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
        if (currentContext.commands.length > 0 || commandKeys.length > 0) {
            argv._.slice(currentContext.commands.length).forEach(key => {
                if (commandKeys.indexOf('' + key) === -1) {
                    unknown.push('' + key);
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
    self.isValidAndSomeAliasIsNotNew = function isValidAndSomeAliasIsNotNew(key, aliases) {
        if (!Object.prototype.hasOwnProperty.call(aliases, key)) {
            return false;
        }
        const newAliases = yargs.parsed.newAliases;
        for (const a of [key, ...aliases[key]]) {
            if (!Object.prototype.hasOwnProperty.call(newAliases, a) ||
                !newAliases[key]) {
                return true;
            }
        }
        return false;
    };
    self.limitedChoices = function limitedChoices(argv) {
        const options = yargs.getOptions();
        const invalid = {};
        if (!Object.keys(options.choices).length)
            return;
        Object.keys(argv).forEach(key => {
            if (specialKeys.indexOf(key) === -1 &&
                Object.prototype.hasOwnProperty.call(options.choices, key)) {
                [].concat(argv[key]).forEach(value => {
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
        invalidKeys.forEach(key => {
            msg += `\n  ${__('Argument: %s, Given: %s, Choices: %s', key, usage.stringifiedValues(invalid[key]), usage.stringifiedValues(options.choices[key]))}`;
        });
        usage.fail(msg);
    };
    let checks = [];
    self.check = function check(f, global) {
        checks.push({
            func: f,
            global,
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
    let implied = {};
    self.implies = function implies(key, value) {
        argsert('<string|object> [array|number|string]', [key, value], arguments.length);
        if (typeof key === 'object') {
            Object.keys(key).forEach(k => {
                self.implies(k, key[k]);
            });
        }
        else {
            yargs.global(key);
            if (!implied[key]) {
                implied[key] = [];
            }
            if (Array.isArray(value)) {
                value.forEach(i => self.implies(key, i));
            }
            else {
                assertNotStrictEqual(value, undefined, shim);
                implied[key].push(value);
            }
        }
    };
    self.getImplied = function getImplied() {
        return implied;
    };
    function keyExists(argv, val) {
        const num = Number(val);
        val = isNaN(num) ? val : num;
        if (typeof val === 'number') {
            val = argv._.length >= val;
        }
        else if (val.match(/^--no-.+/)) {
            val = val.match(/^--no-(.+)/)[1];
            val = !argv[val];
        }
        else {
            val = argv[val];
        }
        return val;
    }
    self.implications = function implications(argv) {
        const implyFail = [];
        Object.keys(implied).forEach(key => {
            const origKey = key;
            (implied[key] || []).forEach(value => {
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
            implyFail.forEach(value => {
                msg += value;
            });
            usage.fail(msg);
        }
    };
    let conflicting = {};
    self.conflicts = function conflicts(key, value) {
        argsert('<string|object> [array|string]', [key, value], arguments.length);
        if (typeof key === 'object') {
            Object.keys(key).forEach(k => {
                self.conflicts(k, key[k]);
            });
        }
        else {
            yargs.global(key);
            if (!conflicting[key]) {
                conflicting[key] = [];
            }
            if (Array.isArray(value)) {
                value.forEach(i => self.conflicts(key, i));
            }
            else {
                conflicting[key].push(value);
            }
        }
    };
    self.getConflicting = () => conflicting;
    self.conflicting = function conflictingFn(argv) {
        Object.keys(argv).forEach(key => {
            if (conflicting[key]) {
                conflicting[key].forEach(value => {
                    if (value && argv[key] !== undefined && argv[value] !== undefined) {
                        usage.fail(__('Arguments %s and %s are mutually exclusive', key, value));
                    }
                });
            }
        });
    };
    self.recommendCommands = function recommendCommands(cmd, potentialCommands) {
        const threshold = 3;
        potentialCommands = potentialCommands.sort((a, b) => b.length - a.length);
        let recommended = null;
        let bestDistance = Infinity;
        for (let i = 0, candidate; (candidate = potentialCommands[i]) !== undefined; i++) {
            const d = distance(cmd, candidate);
            if (d <= threshold && d < bestDistance) {
                bestDistance = d;
                recommended = candidate;
            }
        }
        if (recommended)
            usage.fail(__('Did you mean %s?', recommended));
    };
    self.reset = function reset(localLookup) {
        implied = objFilter(implied, k => !localLookup[k]);
        conflicting = objFilter(conflicting, k => !localLookup[k]);
        checks = checks.filter(c => c.global);
        return self;
    };
    const frozens = [];
    self.freeze = function freeze() {
        frozens.push({
            implied,
            checks,
            conflicting,
        });
    };
    self.unfreeze = function unfreeze() {
        const frozen = frozens.pop();
        assertNotStrictEqual(frozen, undefined, shim);
        ({ implied, checks, conflicting } = frozen);
    };
    return self;
}
