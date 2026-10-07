import require$$0$1, { format } from 'util';
import { normalize as normalize$1, resolve } from 'path';
import { readFileSync } from 'fs';
import path$1 from 'node:path';
import process$2 from 'node:process';
import { fileURLToPath } from 'node:url';
import fs$1 from 'node:fs';
import require$$0$2 from 'os';
import require$$0 from 'url';
function camelCase$1(str) {
    const isCamelCase = str !== str.toLowerCase() && str !== str.toUpperCase();
    if (!isCamelCase) {
        str = str.toLowerCase();
    }
    if (str.indexOf('-') === -1 && str.indexOf('_') === -1) {
        return str;
    }
    else {
        let camelcase = '';
        let nextChrUpper = false;
        const leadingHyphens = str.match(/^-+/);
        for (let i = leadingHyphens ? leadingHyphens[0].length : 0; i < str.length; i++) {
            let chr = str.charAt(i);
            if (nextChrUpper) {
                nextChrUpper = false;
                chr = chr.toUpperCase();
            }
            if (i !== 0 && (chr === '-' || chr === '_')) {
                nextChrUpper = true;
            }
            else if (chr !== '-' && chr !== '_') {
                camelcase += chr;
            }
        }
        return camelcase;
    }
}
function decamelize$1(str, joinString) {
    const lowercase = str.toLowerCase();
    joinString = joinString || '-';
    let notCamelcase = '';
    for (let i = 0; i < str.length; i++) {
        const chrLower = lowercase.charAt(i);
        const chrString = str.charAt(i);
        if (chrLower !== chrString && i > 0) {
            notCamelcase += `${joinString}${lowercase.charAt(i)}`;
        }
        else {
            notCamelcase += chrString;
        }
    }
    return notCamelcase;
}
function looksLikeNumber(x) {
    if (x === null || x === undefined)
        return false;
    if (typeof x === 'number')
        return true;
    if (/^0x[0-9a-f]+$/i.test(x))
        return true;
    if (/^0[^.]/.test(x))
        return false;
    return /^[-]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x);
}
function tokenizeArgString(argString) {
    if (Array.isArray(argString)) {
        return argString.map(e => typeof e !== 'string' ? e + '' : e);
    }
    argString = argString.trim();
    let i = 0;
    let prevC = null;
    let c = null;
    let opening = null;
    const args = [];
    for (let ii = 0; ii < argString.length; ii++) {
        prevC = c;
        c = argString.charAt(ii);
        if (c === ' ' && !opening) {
            if (!(prevC === ' ')) {
                i++;
            }
            continue;
        }
        if (c === opening) {
            opening = null;
        }
        else if ((c === "'" || c === '"') && !opening) {
            opening = c;
        }
        if (!args[i])
            args[i] = '';
        args[i] += c;
    }
    return args;
}
var DefaultValuesForTypeKey;
(function (DefaultValuesForTypeKey) {
    DefaultValuesForTypeKey["BOOLEAN"] = "boolean";
    DefaultValuesForTypeKey["STRING"] = "string";
    DefaultValuesForTypeKey["NUMBER"] = "number";
    DefaultValuesForTypeKey["ARRAY"] = "array";
})(DefaultValuesForTypeKey || (DefaultValuesForTypeKey = {}));
let mixin;
class YargsParser {
    constructor(_mixin) {
        mixin = _mixin;
    }
    parse(argsInput, options) {
        const opts = Object.assign({
            alias: undefined,
            array: undefined,
            boolean: undefined,
            config: undefined,
            configObjects: undefined,
            configuration: undefined,
            coerce: undefined,
            count: undefined,
            default: undefined,
            envPrefix: undefined,
            narg: undefined,
            normalize: undefined,
            string: undefined,
            number: undefined,
            __: undefined,
            key: undefined
        }, options);
        const args = tokenizeArgString(argsInput);
        const inputIsString = typeof argsInput === 'string';
        const aliases = combineAliases(Object.assign(Object.create(null), opts.alias));
        const configuration = Object.assign({
            'boolean-negation': true,
            'camel-case-expansion': true,
            'combine-arrays': false,
            'dot-notation': true,
            'duplicate-arguments-array': true,
            'flatten-duplicate-arrays': true,
            'greedy-arrays': true,
            'halt-at-non-option': false,
            'nargs-eats-options': false,
            'negation-prefix': 'no-',
            'parse-numbers': true,
            'parse-positional-numbers': true,
            'populate--': false,
            'set-placeholder-key': false,
            'short-option-groups': true,
            'strip-aliased': false,
            'strip-dashed': false,
            'unknown-options-as-args': false
        }, opts.configuration);
        const defaults = Object.assign(Object.create(null), opts.default);
        const configObjects = opts.configObjects || [];
        const envPrefix = opts.envPrefix;
        const notFlagsOption = configuration['populate--'];
        const notFlagsArgv = notFlagsOption ? '--' : '_';
        const newAliases = Object.create(null);
        const defaulted = Object.create(null);
        const __ = opts.__ || mixin.format;
        const flags = {
            aliases: Object.create(null),
            arrays: Object.create(null),
            bools: Object.create(null),
            strings: Object.create(null),
            numbers: Object.create(null),
            counts: Object.create(null),
            normalize: Object.create(null),
            configs: Object.create(null),
            nargs: Object.create(null),
            coercions: Object.create(null),
            keys: []
        };
        const negative = /^-([0-9]+(\.[0-9]+)?|\.[0-9]+)$/;
        const negatedBoolean = new RegExp('^--' + configuration['negation-prefix'] + '(.+)');
        [].concat(opts.array || []).filter(Boolean).forEach(function (opt) {
            const key = typeof opt === 'object' ? opt.key : opt;
            const assignment = Object.keys(opt).map(function (key) {
                const arrayFlagKeys = {
                    boolean: 'bools',
                    string: 'strings',
                    number: 'numbers'
                };
                return arrayFlagKeys[key];
            }).filter(Boolean).pop();
            if (assignment) {
                flags[assignment][key] = true;
            }
            flags.arrays[key] = true;
            flags.keys.push(key);
        });
        [].concat(opts.boolean || []).filter(Boolean).forEach(function (key) {
            flags.bools[key] = true;
            flags.keys.push(key);
        });
        [].concat(opts.string || []).filter(Boolean).forEach(function (key) {
            flags.strings[key] = true;
            flags.keys.push(key);
        });
        [].concat(opts.number || []).filter(Boolean).forEach(function (key) {
            flags.numbers[key] = true;
            flags.keys.push(key);
        });
        [].concat(opts.count || []).filter(Boolean).forEach(function (key) {
            flags.counts[key] = true;
            flags.keys.push(key);
        });
        [].concat(opts.normalize || []).filter(Boolean).forEach(function (key) {
            flags.normalize[key] = true;
            flags.keys.push(key);
        });
        if (typeof opts.narg === 'object') {
            Object.entries(opts.narg).forEach(([key, value]) => {
                if (typeof value === 'number') {
                    flags.nargs[key] = value;
                    flags.keys.push(key);
                }
            });
        }
        if (typeof opts.coerce === 'object') {
            Object.entries(opts.coerce).forEach(([key, value]) => {
                if (typeof value === 'function') {
                    flags.coercions[key] = value;
                    flags.keys.push(key);
                }
            });
        }
        if (typeof opts.config !== 'undefined') {
            if (Array.isArray(opts.config) || typeof opts.config === 'string') {
                [].concat(opts.config).filter(Boolean).forEach(function (key) {
                    flags.configs[key] = true;
                });
            }
            else if (typeof opts.config === 'object') {
                Object.entries(opts.config).forEach(([key, value]) => {
                    if (typeof value === 'boolean' || typeof value === 'function') {
                        flags.configs[key] = value;
                    }
                });
            }
        }
        extendAliases(opts.key, aliases, opts.default, flags.arrays);
        Object.keys(defaults).forEach(function (key) {
            (flags.aliases[key] || []).forEach(function (alias) {
                defaults[alias] = defaults[key];
            });
        });
        let error = null;
        checkConfiguration();
        let notFlags = [];
        const argv = Object.assign(Object.create(null), { _: [] });
        const argvReturn = {};
        for (let i = 0; i < args.length; i++) {
            const arg = args[i];
            const truncatedArg = arg.replace(/^-{3,}/, '---');
            let broken;
            let key;
            let letters;
            let m;
            let next;
            let value;
            if (arg !== '--' && /^-/.test(arg) && isUnknownOptionAsArg(arg)) {
                pushPositional(arg);
            }
            else if (truncatedArg.match(/^---+(=|$)/)) {
                pushPositional(arg);
                continue;
            }
            else if (arg.match(/^--.+=/) || (!configuration['short-option-groups'] && arg.match(/^-.+=/))) {
                m = arg.match(/^--?([^=]+)=([\s\S]*)$/);
                if (m !== null && Array.isArray(m) && m.length >= 3) {
                    if (checkAllAliases(m[1], flags.arrays)) {
                        i = eatArray(i, m[1], args, m[2]);
                    }
                    else if (checkAllAliases(m[1], flags.nargs) !== false) {
                        i = eatNargs(i, m[1], args, m[2]);
                    }
                    else {
                        setArg(m[1], m[2], true);
                    }
                }
            }
            else if (arg.match(negatedBoolean) && configuration['boolean-negation']) {
                m = arg.match(negatedBoolean);
                if (m !== null && Array.isArray(m) && m.length >= 2) {
                    key = m[1];
                    setArg(key, checkAllAliases(key, flags.arrays) ? [false] : false);
                }
            }
            else if (arg.match(/^--.+/) || (!configuration['short-option-groups'] && arg.match(/^-[^-]+/))) {
                m = arg.match(/^--?(.+)/);
                if (m !== null && Array.isArray(m) && m.length >= 2) {
                    key = m[1];
                    if (checkAllAliases(key, flags.arrays)) {
                        i = eatArray(i, key, args);
                    }
                    else if (checkAllAliases(key, flags.nargs) !== false) {
                        i = eatNargs(i, key, args);
                    }
                    else {
                        next = args[i + 1];
                        if (next !== undefined && (!next.match(/^-/) ||
                            next.match(negative)) &&
                            !checkAllAliases(key, flags.bools) &&
                            !checkAllAliases(key, flags.counts)) {
                            setArg(key, next);
                            i++;
                        }
                        else if (/^(true|false)$/.test(next)) {
                            setArg(key, next);
                            i++;
                        }
                        else {
                            setArg(key, defaultValue(key));
                        }
                    }
                }
            }
            else if (arg.match(/^-.\..+=/)) {
                m = arg.match(/^-([^=]+)=([\s\S]*)$/);
                if (m !== null && Array.isArray(m) && m.length >= 3) {
                    setArg(m[1], m[2]);
                }
            }
            else if (arg.match(/^-.\..+/) && !arg.match(negative)) {
                next = args[i + 1];
                m = arg.match(/^-(.\..+)/);
                if (m !== null && Array.isArray(m) && m.length >= 2) {
                    key = m[1];
                    if (next !== undefined && !next.match(/^-/) &&
                        !checkAllAliases(key, flags.bools) &&
                        !checkAllAliases(key, flags.counts)) {
                        setArg(key, next);
                        i++;
                    }
                    else {
                        setArg(key, defaultValue(key));
                    }
                }
            }
            else if (arg.match(/^-[^-]+/) && !arg.match(negative)) {
                letters = arg.slice(1, -1).split('');
                broken = false;
                for (let j = 0; j < letters.length; j++) {
                    next = arg.slice(j + 2);
                    if (letters[j + 1] && letters[j + 1] === '=') {
                        value = arg.slice(j + 3);
                        key = letters[j];
                        if (checkAllAliases(key, flags.arrays)) {
                            i = eatArray(i, key, args, value);
                        }
                        else if (checkAllAliases(key, flags.nargs) !== false) {
                            i = eatNargs(i, key, args, value);
                        }
                        else {
                            setArg(key, value);
                        }
                        broken = true;
                        break;
                    }
                    if (next === '-') {
                        setArg(letters[j], next);
                        continue;
                    }
                    if (/[A-Za-z]/.test(letters[j]) &&
                        /^-?\d+(\.\d*)?(e-?\d+)?$/.test(next) &&
                        checkAllAliases(next, flags.bools) === false) {
                        setArg(letters[j], next);
                        broken = true;
                        break;
                    }
                    if (letters[j + 1] && letters[j + 1].match(/\W/)) {
                        setArg(letters[j], next);
                        broken = true;
                        break;
                    }
                    else {
                        setArg(letters[j], defaultValue(letters[j]));
                    }
                }
                key = arg.slice(-1)[0];
                if (!broken && key !== '-') {
                    if (checkAllAliases(key, flags.arrays)) {
                        i = eatArray(i, key, args);
                    }
                    else if (checkAllAliases(key, flags.nargs) !== false) {
                        i = eatNargs(i, key, args);
                    }
                    else {
                        next = args[i + 1];
                        if (next !== undefined && (!/^(-|--)[^-]/.test(next) ||
                            next.match(negative)) &&
                            !checkAllAliases(key, flags.bools) &&
                            !checkAllAliases(key, flags.counts)) {
                            setArg(key, next);
                            i++;
                        }
                        else if (/^(true|false)$/.test(next)) {
                            setArg(key, next);
                            i++;
                        }
                        else {
                            setArg(key, defaultValue(key));
                        }
                    }
                }
            }
            else if (arg.match(/^-[0-9]$/) &&
                arg.match(negative) &&
                checkAllAliases(arg.slice(1), flags.bools)) {
                key = arg.slice(1);
                setArg(key, defaultValue(key));
            }
            else if (arg === '--') {
                notFlags = args.slice(i + 1);
                break;
            }
            else if (configuration['halt-at-non-option']) {
                notFlags = args.slice(i);
                break;
            }
            else {
                pushPositional(arg);
            }
        }
        applyEnvVars(argv, true); 
        applyEnvVars(argv, false);
        setConfig(argv);
        setConfigObjects();
        applyDefaultsAndAliases(argv, flags.aliases, defaults, true);
        applyCoercions(argv);
        if (configuration['set-placeholder-key'])
            setPlaceholderKeys(argv);
        Object.keys(flags.counts).forEach(function (key) {
            if (!hasKey(argv, key.split('.')))
                setArg(key, 0);
        });
        if (notFlagsOption && notFlags.length)
            argv[notFlagsArgv] = [];
        notFlags.forEach(function (key) {
            argv[notFlagsArgv].push(key);
        });
        if (configuration['camel-case-expansion'] && configuration['strip-dashed']) {
            Object.keys(argv).filter(key => key !== '--' && key.includes('-')).forEach(key => {
                delete argv[key];
            });
        }
        if (configuration['strip-aliased']) {
            [].concat(...Object.keys(aliases).map(k => aliases[k])).forEach(alias => {
                if (configuration['camel-case-expansion'] && alias.includes('-')) {
                    delete argv[alias.split('.').map(prop => camelCase$1(prop)).join('.')];
                }
                delete argv[alias];
            });
        }
        function pushPositional(arg) {
            const maybeCoercedNumber = maybeCoerceNumber('_', arg);
            if (typeof maybeCoercedNumber === 'string' || typeof maybeCoercedNumber === 'number') {
                argv._.push(maybeCoercedNumber);
            }
        }
        function eatNargs(i, key, args, argAfterEqualSign) {
            let ii;
            let toEat = checkAllAliases(key, flags.nargs);
            toEat = typeof toEat !== 'number' || isNaN(toEat) ? 1 : toEat;
            if (toEat === 0) {
                if (!isUndefined(argAfterEqualSign)) {
                    error = Error(__('Argument unexpected for: %s', key));
                }
                setArg(key, defaultValue(key));
                return i;
            }
            let available = isUndefined(argAfterEqualSign) ? 0 : 1;
            if (configuration['nargs-eats-options']) {
                if (args.length - (i + 1) + available < toEat) {
                    error = Error(__('Not enough arguments following: %s', key));
                }
                available = toEat;
            }
            else {
                for (ii = i + 1; ii < args.length; ii++) {
                    if (!args[ii].match(/^-[^0-9]/) || args[ii].match(negative) || isUnknownOptionAsArg(args[ii]))
                        available++;
                    else
                        break;
                }
                if (available < toEat)
                    error = Error(__('Not enough arguments following: %s', key));
            }
            let consumed = Math.min(available, toEat);
            if (!isUndefined(argAfterEqualSign) && consumed > 0) {
                setArg(key, argAfterEqualSign);
                consumed--;
            }
            for (ii = i + 1; ii < (consumed + i + 1); ii++) {
                setArg(key, args[ii]);
            }
            return (i + consumed);
        }
        function eatArray(i, key, args, argAfterEqualSign) {
            let argsToSet = [];
            let next = argAfterEqualSign || args[i + 1];
            const nargsCount = checkAllAliases(key, flags.nargs);
            if (checkAllAliases(key, flags.bools) && !(/^(true|false)$/.test(next))) {
                argsToSet.push(true);
            }
            else if (isUndefined(next) ||
                (isUndefined(argAfterEqualSign) && /^-/.test(next) && !negative.test(next) && !isUnknownOptionAsArg(next))) {
                if (defaults[key] !== undefined) {
                    const defVal = defaults[key];
                    argsToSet = Array.isArray(defVal) ? defVal : [defVal];
                }
            }
            else {
                if (!isUndefined(argAfterEqualSign)) {
                    argsToSet.push(processValue(key, argAfterEqualSign, true));
                }
                for (let ii = i + 1; ii < args.length; ii++) {
                    if ((!configuration['greedy-arrays'] && argsToSet.length > 0) ||
                        (nargsCount && typeof nargsCount === 'number' && argsToSet.length >= nargsCount))
                        break;
                    next = args[ii];
                    if (/^-/.test(next) && !negative.test(next) && !isUnknownOptionAsArg(next))
                        break;
                    i = ii;
                    argsToSet.push(processValue(key, next, inputIsString));
                }
            }
            if (typeof nargsCount === 'number' && ((nargsCount && argsToSet.length < nargsCount) ||
                (isNaN(nargsCount) && argsToSet.length === 0))) {
                error = Error(__('Not enough arguments following: %s', key));
            }
            setArg(key, argsToSet);
            return i;
        }
        function setArg(key, val, shouldStripQuotes = inputIsString) {
            if (/-/.test(key) && configuration['camel-case-expansion']) {
                const alias = key.split('.').map(function (prop) {
                    return camelCase$1(prop);
                }).join('.');
                addNewAlias(key, alias);
            }
            const value = processValue(key, val, shouldStripQuotes);
            const splitKey = key.split('.');
            setKey(argv, splitKey, value);
            if (flags.aliases[key]) {
                flags.aliases[key].forEach(function (x) {
                    const keyProperties = x.split('.');
                    setKey(argv, keyProperties, value);
                });
            }
            if (splitKey.length > 1 && configuration['dot-notation']) {
                (flags.aliases[splitKey[0]] || []).forEach(function (x) {
                    let keyProperties = x.split('.');
                    const a = [].concat(splitKey);
                    a.shift(); 
                    keyProperties = keyProperties.concat(a);
                    if (!(flags.aliases[key] || []).includes(keyProperties.join('.'))) {
                        setKey(argv, keyProperties, value);
                    }
                });
            }
            if (checkAllAliases(key, flags.normalize) && !checkAllAliases(key, flags.arrays)) {
                const keys = [key].concat(flags.aliases[key] || []);
                keys.forEach(function (key) {
                    Object.defineProperty(argvReturn, key, {
                        enumerable: true,
                        get() {
                            return val;
                        },
                        set(value) {
                            val = typeof value === 'string' ? mixin.normalize(value) : value;
                        }
                    });
                });
            }
        }
        function addNewAlias(key, alias) {
            if (!(flags.aliases[key] && flags.aliases[key].length)) {
                flags.aliases[key] = [alias];
                newAliases[alias] = true;
            }
            if (!(flags.aliases[alias] && flags.aliases[alias].length)) {
                addNewAlias(alias, key);
            }
        }
        function processValue(key, val, shouldStripQuotes) {
            if (shouldStripQuotes) {
                val = stripQuotes(val);
            }
            if (checkAllAliases(key, flags.bools) || checkAllAliases(key, flags.counts)) {
                if (typeof val === 'string')
                    val = val === 'true';
            }
            let value = Array.isArray(val)
                ? val.map(function (v) { return maybeCoerceNumber(key, v); })
                : maybeCoerceNumber(key, val);
            if (checkAllAliases(key, flags.counts) && (isUndefined(value) || typeof value === 'boolean')) {
                value = increment();
            }
            if (checkAllAliases(key, flags.normalize) && checkAllAliases(key, flags.arrays)) {
                if (Array.isArray(val))
                    value = val.map((val) => { return mixin.normalize(val); });
                else
                    value = mixin.normalize(val);
            }
            return value;
        }
        function maybeCoerceNumber(key, value) {
            if (!configuration['parse-positional-numbers'] && key === '_')
                return value;
            if (!checkAllAliases(key, flags.strings) && !checkAllAliases(key, flags.bools) && !Array.isArray(value)) {
                const shouldCoerceNumber = looksLikeNumber(value) && configuration['parse-numbers'] && (Number.isSafeInteger(Math.floor(parseFloat(`${value}`))));
                if (shouldCoerceNumber || (!isUndefined(value) && checkAllAliases(key, flags.numbers))) {
                    value = Number(value);
                }
            }
            return value;
        }
        function setConfig(argv) {
            const configLookup = Object.create(null);
            applyDefaultsAndAliases(configLookup, flags.aliases, defaults);
            Object.keys(flags.configs).forEach(function (configKey) {
                const configPath = argv[configKey] || configLookup[configKey];
                if (configPath) {
                    try {
                        let config = null;
                        const resolvedConfigPath = mixin.resolve(mixin.cwd(), configPath);
                        const resolveConfig = flags.configs[configKey];
                        if (typeof resolveConfig === 'function') {
                            try {
                                config = resolveConfig(resolvedConfigPath);
                            }
                            catch (e) {
                                config = e;
                            }
                            if (config instanceof Error) {
                                error = config;
                                return;
                            }
                        }
                        else {
                            config = mixin.require(resolvedConfigPath);
                        }
                        setConfigObject(config);
                    }
                    catch (ex) {
                        if (ex.name === 'PermissionDenied')
                            error = ex;
                        else if (argv[configKey])
                            error = Error(__('Invalid JSON config file: %s', configPath));
                    }
                }
            });
        }
        function setConfigObject(config, prev) {
            Object.keys(config).forEach(function (key) {
                const value = config[key];
                const fullKey = prev ? prev + '.' + key : key;
                if (typeof value === 'object' && value !== null && !Array.isArray(value) && configuration['dot-notation']) {
                    setConfigObject(value, fullKey);
                }
                else {
                    if (!hasKey(argv, fullKey.split('.')) || (checkAllAliases(fullKey, flags.arrays) && configuration['combine-arrays'])) {
                        setArg(fullKey, value);
                    }
                }
            });
        }
        function setConfigObjects() {
            if (typeof configObjects !== 'undefined') {
                configObjects.forEach(function (configObject) {
                    setConfigObject(configObject);
                });
            }
        }
        function applyEnvVars(argv, configOnly) {
            if (typeof envPrefix === 'undefined')
                return;
            const prefix = typeof envPrefix === 'string' ? envPrefix : '';
            const env = mixin.env();
            Object.keys(env).forEach(function (envVar) {
                if (prefix === '' || envVar.lastIndexOf(prefix, 0) === 0) {
                    const keys = envVar.split('__').map(function (key, i) {
                        if (i === 0) {
                            key = key.substring(prefix.length);
                        }
                        return camelCase$1(key);
                    });
                    if (((configOnly && flags.configs[keys.join('.')]) || !configOnly) && !hasKey(argv, keys)) {
                        setArg(keys.join('.'), env[envVar]);
                    }
                }
            });
        }
        function applyCoercions(argv) {
            let coerce;
            const applied = new Set();
            Object.keys(argv).forEach(function (key) {
                if (!applied.has(key)) { 
                    coerce = checkAllAliases(key, flags.coercions);
                    if (typeof coerce === 'function') {
                        try {
                            const value = maybeCoerceNumber(key, coerce(argv[key]));
                            ([].concat(flags.aliases[key] || [], key)).forEach(ali => {
                                applied.add(ali);
                                argv[ali] = value;
                            });
                        }
                        catch (err) {
                            error = err;
                        }
                    }
                }
            });
        }
        function setPlaceholderKeys(argv) {
            flags.keys.forEach((key) => {
                if (~key.indexOf('.'))
                    return;
                if (typeof argv[key] === 'undefined')
                    argv[key] = undefined;
            });
            return argv;
        }
        function applyDefaultsAndAliases(obj, aliases, defaults, canLog = false) {
            Object.keys(defaults).forEach(function (key) {
                if (!hasKey(obj, key.split('.'))) {
                    setKey(obj, key.split('.'), defaults[key]);
                    if (canLog)
                        defaulted[key] = true;
                    (aliases[key] || []).forEach(function (x) {
                        if (hasKey(obj, x.split('.')))
                            return;
                        setKey(obj, x.split('.'), defaults[key]);
                    });
                }
            });
        }
        function hasKey(obj, keys) {
            let o = obj;
            if (!configuration['dot-notation'])
                keys = [keys.join('.')];
            keys.slice(0, -1).forEach(function (key) {
                o = (o[key] || {});
            });
            const key = keys[keys.length - 1];
            if (typeof o !== 'object')
                return false;
            else
                return key in o;
        }
        function setKey(obj, keys, value) {
            let o = obj;
            if (!configuration['dot-notation'])
                keys = [keys.join('.')];
            keys.slice(0, -1).forEach(function (key) {
                key = sanitizeKey(key);
                if (typeof o === 'object' && o[key] === undefined) {
                    o[key] = {};
                }
                if (typeof o[key] !== 'object' || Array.isArray(o[key])) {
                    if (Array.isArray(o[key])) {
                        o[key].push({});
                    }
                    else {
                        o[key] = [o[key], {}];
                    }
                    o = o[key][o[key].length - 1];
                }
                else {
                    o = o[key];
                }
            });
            const key = sanitizeKey(keys[keys.length - 1]);
            const isTypeArray = checkAllAliases(keys.join('.'), flags.arrays);
            const isValueArray = Array.isArray(value);
            let duplicate = configuration['duplicate-arguments-array'];
            if (!duplicate && checkAllAliases(key, flags.nargs)) {
                duplicate = true;
                if ((!isUndefined(o[key]) && flags.nargs[key] === 1) || (Array.isArray(o[key]) && o[key].length === flags.nargs[key])) {
                    o[key] = undefined;
                }
            }
            if (value === increment()) {
                o[key] = increment(o[key]);
            }
            else if (Array.isArray(o[key])) {
                if (duplicate && isTypeArray && isValueArray) {
                    o[key] = configuration['flatten-duplicate-arrays'] ? o[key].concat(value) : (Array.isArray(o[key][0]) ? o[key] : [o[key]]).concat([value]);
                }
                else if (!duplicate && Boolean(isTypeArray) === Boolean(isValueArray)) {
                    o[key] = value;
                }
                else {
                    o[key] = o[key].concat([value]);
                }
            }
            else if (o[key] === undefined && isTypeArray) {
                o[key] = isValueArray ? value : [value];
            }
            else if (duplicate && !(o[key] === undefined ||
                checkAllAliases(key, flags.counts) ||
                checkAllAliases(key, flags.bools))) {
                o[key] = [o[key], value];
            }
            else {
                o[key] = value;
            }
        }
        function extendAliases(...args) {
            args.forEach(function (obj) {
                Object.keys(obj || {}).forEach(function (key) {
                    if (flags.aliases[key])
                        return;
                    flags.aliases[key] = [].concat(aliases[key] || []);
                    flags.aliases[key].concat(key).forEach(function (x) {
                        if (/-/.test(x) && configuration['camel-case-expansion']) {
                            const c = camelCase$1(x);
                            if (c !== key && flags.aliases[key].indexOf(c) === -1) {
                                flags.aliases[key].push(c);
                                newAliases[c] = true;
                            }
                        }
                    });
                    flags.aliases[key].concat(key).forEach(function (x) {
                        if (x.length > 1 && /[A-Z]/.test(x) && configuration['camel-case-expansion']) {
                            const c = decamelize$1(x, '-');
                            if (c !== key && flags.aliases[key].indexOf(c) === -1) {
                                flags.aliases[key].push(c);
                                newAliases[c] = true;
                            }
                        }
                    });
                    flags.aliases[key].forEach(function (x) {
                        flags.aliases[x] = [key].concat(flags.aliases[key].filter(function (y) {
                            return x !== y;
                        }));
                    });
                });
            });
        }
        function checkAllAliases(key, flag) {
            const toCheck = [].concat(flags.aliases[key] || [], key);
            const keys = Object.keys(flag);
            const setAlias = toCheck.find(key => keys.includes(key));
            return setAlias ? flag[setAlias] : false;
        }
        function hasAnyFlag(key) {
            const flagsKeys = Object.keys(flags);
            const toCheck = [].concat(flagsKeys.map(k => flags[k]));
            return toCheck.some(function (flag) {
                return Array.isArray(flag) ? flag.includes(key) : flag[key];
            });
        }
        function hasFlagsMatching(arg, ...patterns) {
            const toCheck = [].concat(...patterns);
            return toCheck.some(function (pattern) {
                const match = arg.match(pattern);
                return match && hasAnyFlag(match[1]);
            });
        }
        function hasAllShortFlags(arg) {
            if (arg.match(negative) || !arg.match(/^-[^-]+/)) {
                return false;
            }
            let hasAllFlags = true;
            let next;
            const letters = arg.slice(1).split('');
            for (let j = 0; j < letters.length; j++) {
                next = arg.slice(j + 2);
                if (!hasAnyFlag(letters[j])) {
                    hasAllFlags = false;
                    break;
                }
                if ((letters[j + 1] && letters[j + 1] === '=') ||
                    next === '-' ||
                    (/[A-Za-z]/.test(letters[j]) && /^-?\d+(\.\d*)?(e-?\d+)?$/.test(next)) ||
                    (letters[j + 1] && letters[j + 1].match(/\W/))) {
                    break;
                }
            }
            return hasAllFlags;
        }
        function isUnknownOptionAsArg(arg) {
            return configuration['unknown-options-as-args'] && isUnknownOption(arg);
        }
        function isUnknownOption(arg) {
            arg = arg.replace(/^-{3,}/, '--');
            if (arg.match(negative)) {
                return false;
            }
            if (hasAllShortFlags(arg)) {
                return false;
            }
            const flagWithEquals = /^-+([^=]+?)=[\s\S]*$/;
            const normalFlag = /^-+([^=]+?)$/;
            const flagEndingInHyphen = /^-+([^=]+?)-$/;
            const flagEndingInDigits = /^-+([^=]+?\d+)$/;
            const flagEndingInNonWordCharacters = /^-+([^=]+?)\W+.*$/;
            return !hasFlagsMatching(arg, flagWithEquals, negatedBoolean, normalFlag, flagEndingInHyphen, flagEndingInDigits, flagEndingInNonWordCharacters);
        }
        function defaultValue(key) {
            if (!checkAllAliases(key, flags.bools) &&
                !checkAllAliases(key, flags.counts) &&
                `${key}` in defaults) {
                return defaults[key];
            }
            else {
                return defaultForType(guessType(key));
            }
        }
        function defaultForType(type) {
            const def = {
                [DefaultValuesForTypeKey.BOOLEAN]: true,
                [DefaultValuesForTypeKey.STRING]: '',
                [DefaultValuesForTypeKey.NUMBER]: undefined,
                [DefaultValuesForTypeKey.ARRAY]: []
            };
            return def[type];
        }
        function guessType(key) {
            let type = DefaultValuesForTypeKey.BOOLEAN;
            if (checkAllAliases(key, flags.strings))
                type = DefaultValuesForTypeKey.STRING;
            else if (checkAllAliases(key, flags.numbers))
                type = DefaultValuesForTypeKey.NUMBER;
            else if (checkAllAliases(key, flags.bools))
                type = DefaultValuesForTypeKey.BOOLEAN;
            else if (checkAllAliases(key, flags.arrays))
                type = DefaultValuesForTypeKey.ARRAY;
            return type;
        }
        function isUndefined(num) {
            return num === undefined;
        }
        function checkConfiguration() {
            Object.keys(flags.counts).find(key => {
                if (checkAllAliases(key, flags.arrays)) {
                    error = Error(__('Invalid configuration: %s, opts.count excludes opts.array.', key));
                    return true;
                }
                else if (checkAllAliases(key, flags.nargs)) {
                    error = Error(__('Invalid configuration: %s, opts.count excludes opts.narg.', key));
                    return true;
                }
                return false;
            });
        }
        return {
            aliases: Object.assign({}, flags.aliases),
            argv: Object.assign(argvReturn, argv),
            configuration: configuration,
            defaulted: Object.assign({}, defaulted),
            error: error,
            newAliases: Object.assign({}, newAliases)
        };
    }
}
function combineAliases(aliases) {
    const aliasArrays = [];
    const combined = Object.create(null);
    let change = true;
    Object.keys(aliases).forEach(function (key) {
        aliasArrays.push([].concat(aliases[key], key));
    });
    while (change) {
        change = false;
        for (let i = 0; i < aliasArrays.length; i++) {
            for (let ii = i + 1; ii < aliasArrays.length; ii++) {
                const intersect = aliasArrays[i].filter(function (v) {
                    return aliasArrays[ii].indexOf(v) !== -1;
                });
                if (intersect.length) {
                    aliasArrays[i] = aliasArrays[i].concat(aliasArrays[ii]);
                    aliasArrays.splice(ii, 1);
                    change = true;
                    break;
                }
            }
        }
    }
    aliasArrays.forEach(function (aliasArray) {
        aliasArray = aliasArray.filter(function (v, i, self) {
            return self.indexOf(v) === i;
        });
        const lastAlias = aliasArray.pop();
        if (lastAlias !== undefined && typeof lastAlias === 'string') {
            combined[lastAlias] = aliasArray;
        }
    });
    return combined;
}
function increment(orig) {
    return orig !== undefined ? orig + 1 : 1;
}
function sanitizeKey(key) {
    if (key === '__proto__')
        return '___proto___';
    return key;
}
function stripQuotes(val) {
    return (typeof val === 'string' &&
        (val[0] === "'" || val[0] === '"') &&
        val[val.length - 1] === val[0])
        ? val.substring(1, val.length - 1)
        : val;
}
var _a, _b, _c;
const minNodeVersion = (process && process.env && process.env.YARGS_MIN_NODE_VERSION)
    ? Number(process.env.YARGS_MIN_NODE_VERSION)
    : 12;
const nodeVersion = (_b = (_a = process === null || process === void 0 ? void 0 : process.versions) === null || _a === void 0 ? void 0 : _a.node) !== null && _b !== void 0 ? _b : (_c = process === null || process === void 0 ? void 0 : process.version) === null || _c === void 0 ? void 0 : _c.slice(1);
if (nodeVersion) {
    const major = Number(nodeVersion.match(/^([^.]+)/)[1]);
    if (major < minNodeVersion) {
        throw Error(`yargs parser supports a minimum Node.js version of ${minNodeVersion}. Read our version support policy: https://github.com/yargs/yargs-parser#supported-nodejs-versions`);
    }
}
const env$2 = process ? process.env : {};
const parser = new YargsParser({
    cwd: process.cwd,
    env: () => {
        return env$2;
    },
    format,
    normalize: normalize$1,
    resolve,
    require: (path) => {
        if (typeof require !== 'undefined') {
            return require(path);
        }
        else if (path.match(/\.json$/)) {
            return JSON.parse(readFileSync(path, 'utf8'));
        }
        else {
            throw Error('only .json config files are supported in ESM');
        }
    }
});
const yargsParser = function Parser(args, opts) {
    const result = parser.parse(args.slice(), opts);
    return result.argv;
};
yargsParser.detailed = function (args, opts) {
    return parser.parse(args.slice(), opts);
};
yargsParser.camelCase = camelCase$1;
yargsParser.decamelize = decamelize$1;
yargsParser.looksLikeNumber = looksLikeNumber;
const isObject$3 = value => typeof value === 'object' && value !== null;
const isObjectCustom$1 = value =>
	isObject$3(value)
	&& !(value instanceof RegExp)
	&& !(value instanceof Error)
	&& !(value instanceof Date);
const mapObjectSkip$1 = Symbol('mapObjectSkip');
const _mapObject = (object, mapper, options, isSeen = new WeakMap()) => {
	options = {
		deep: false,
		target: {},
		...options,
	};
	if (isSeen.has(object)) {
		return isSeen.get(object);
	}
	isSeen.set(object, options.target);
	const {target} = options;
	delete options.target;
	const mapArray = array => array.map(element => isObjectCustom$1(element) ? _mapObject(element, mapper, options, isSeen) : element);
	if (Array.isArray(object)) {
		return mapArray(object);
	}
	for (const [key, value] of Object.entries(object)) {
		const mapResult = mapper(key, value, object);
		if (mapResult === mapObjectSkip$1) {
			continue;
		}
		let [newKey, newValue, {shouldRecurse = true} = {}] = mapResult;
		if (newKey === '__proto__') {
			continue;
		}
		if (options.deep && shouldRecurse && isObjectCustom$1(newValue)) {
			newValue = Array.isArray(newValue)
				? mapArray(newValue)
				: _mapObject(newValue, mapper, options, isSeen);
		}
		target[newKey] = newValue;
	}
	return target;
};
function mapObject$2(object, mapper, options) {
	if (!isObject$3(object)) {
		throw new TypeError(`Expected an object, got \`${object}\` (${typeof object})`);
	}
	return _mapObject(object, mapper, options);
}
const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER$1 = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;
const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER$1.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER$1.source, 'gu');
const preserveCamelCase = (string, toLowerCase, toUpperCase, preserveConsecutiveUppercase) => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;
	let isLastLastCharPreserved = false;
	for (let index = 0; index < string.length; index++) {
		const character = string[index];
		isLastLastCharPreserved = index > 2 ? string[index - 3] === '-' : true;
		if (isLastCharLower && UPPERCASE.test(character)) {
			string = string.slice(0, index) + '-' + string.slice(index);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			index++;
		} else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character) && (!isLastLastCharPreserved || preserveConsecutiveUppercase)) {
			string = string.slice(0, index - 1) + '-' + string.slice(index - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
		}
	}
	return string;
};
const preserveConsecutiveUppercase = (input, toLowerCase) => {
	LEADING_CAPITAL.lastIndex = 0;
	return input.replaceAll(LEADING_CAPITAL, match => toLowerCase(match));
};
const postProcess = (input, toUpperCase) => {
	SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
	NUMBERS_AND_IDENTIFIER.lastIndex = 0;
	return input
		.replaceAll(NUMBERS_AND_IDENTIFIER, (match, pattern, offset) => ['_', '-'].includes(input.charAt(offset + match.length)) ? match : toUpperCase(match))
		.replaceAll(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier));
};
function camelCase(input, options) {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}
	options = {
		pascalCase: false,
		preserveConsecutiveUppercase: false,
		...options,
	};
	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}
	if (input.length === 0) {
		return '';
	}
	const toLowerCase = options.locale === false
		? string => string.toLowerCase()
		: string => string.toLocaleLowerCase(options.locale);
	const toUpperCase = options.locale === false
		? string => string.toUpperCase()
		: string => string.toLocaleUpperCase(options.locale);
	if (input.length === 1) {
		if (SEPARATORS.test(input)) {
			return '';
		}
		return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
	}
	const hasUpperCase = input !== toLowerCase(input);
	if (hasUpperCase) {
		input = preserveCamelCase(input, toLowerCase, toUpperCase, options.preserveConsecutiveUppercase);
	}
	input = input.replace(LEADING_SEPARATORS, '');
	input = options.preserveConsecutiveUppercase ? preserveConsecutiveUppercase(input, toLowerCase) : toLowerCase(input);
	if (options.pascalCase) {
		input = toUpperCase(input.charAt(0)) + input.slice(1);
	}
	return postProcess(input, toUpperCase);
}
class QuickLRU extends Map {
	constructor(options = {}) {
		super();
		if (!(options.maxSize && options.maxSize > 0)) {
			throw new TypeError('`maxSize` must be a number greater than 0');
		}
		if (typeof options.maxAge === 'number' && options.maxAge === 0) {
			throw new TypeError('`maxAge` must be a number greater than 0');
		}
		this.maxSize = options.maxSize;
		this.maxAge = options.maxAge || Number.POSITIVE_INFINITY;
		this.onEviction = options.onEviction;
		this.cache = new Map();
		this.oldCache = new Map();
		this._size = 0;
	}
	_emitEvictions(cache) {
		if (typeof this.onEviction !== 'function') {
			return;
		}
		for (const [key, item] of cache) {
			this.onEviction(key, item.value);
		}
	}
	_deleteIfExpired(key, item) {
		if (typeof item.expiry === 'number' && item.expiry <= Date.now()) {
			if (typeof this.onEviction === 'function') {
				this.onEviction(key, item.value);
			}
			return this.delete(key);
		}
		return false;
	}
	_getOrDeleteIfExpired(key, item) {
		const deleted = this._deleteIfExpired(key, item);
		if (deleted === false) {
			return item.value;
		}
	}
	_getItemValue(key, item) {
		return item.expiry ? this._getOrDeleteIfExpired(key, item) : item.value;
	}
	_peek(key, cache) {
		const item = cache.get(key);
		return this._getItemValue(key, item);
	}
	_set(key, value) {
		this.cache.set(key, value);
		this._size++;
		if (this._size >= this.maxSize) {
			this._size = 0;
			this._emitEvictions(this.oldCache);
			this.oldCache = this.cache;
			this.cache = new Map();
		}
	}
	_moveToRecent(key, item) {
		this.oldCache.delete(key);
		this._set(key, item);
	}
	* _entriesAscending() {
		for (const item of this.oldCache) {
			const [key, value] = item;
			if (!this.cache.has(key)) {
				const deleted = this._deleteIfExpired(key, value);
				if (deleted === false) {
					yield item;
				}
			}
		}
		for (const item of this.cache) {
			const [key, value] = item;
			const deleted = this._deleteIfExpired(key, value);
			if (deleted === false) {
				yield item;
			}
		}
	}
	get(key) {
		if (this.cache.has(key)) {
			const item = this.cache.get(key);
			return this._getItemValue(key, item);
		}
		if (this.oldCache.has(key)) {
			const item = this.oldCache.get(key);
			if (this._deleteIfExpired(key, item) === false) {
				this._moveToRecent(key, item);
				return item.value;
			}
		}
	}
	set(key, value, {maxAge = this.maxAge} = {}) {
		const expiry =
			typeof maxAge === 'number' && maxAge !== Number.POSITIVE_INFINITY ?
				Date.now() + maxAge :
				undefined;
		if (this.cache.has(key)) {
			this.cache.set(key, {
				value,
				expiry
			});
		} else {
			this._set(key, {value, expiry});
		}
		return this;
	}
	has(key) {
		if (this.cache.has(key)) {
			return !this._deleteIfExpired(key, this.cache.get(key));
		}
		if (this.oldCache.has(key)) {
			return !this._deleteIfExpired(key, this.oldCache.get(key));
		}
		return false;
	}
	peek(key) {
		if (this.cache.has(key)) {
			return this._peek(key, this.cache);
		}
		if (this.oldCache.has(key)) {
			return this._peek(key, this.oldCache);
		}
	}
	delete(key) {
		const deleted = this.cache.delete(key);
		if (deleted) {
			this._size--;
		}
		return this.oldCache.delete(key) || deleted;
	}
	clear() {
		this.cache.clear();
		this.oldCache.clear();
		this._size = 0;
	}
	resize(newSize) {
		if (!(newSize && newSize > 0)) {
			throw new TypeError('`maxSize` must be a number greater than 0');
		}
		const items = [...this._entriesAscending()];
		const removeCount = items.length - newSize;
		if (removeCount < 0) {
			this.cache = new Map(items);
			this.oldCache = new Map();
			this._size = items.length;
		} else {
			if (removeCount > 0) {
				this._emitEvictions(items.slice(0, removeCount));
			}
			this.oldCache = new Map(items.slice(removeCount));
			this.cache = new Map();
			this._size = 0;
		}
		this.maxSize = newSize;
	}
	* keys() {
		for (const [key] of this) {
			yield key;
		}
	}
	* values() {
		for (const [, value] of this) {
			yield value;
		}
	}
	* [Symbol.iterator]() {
		for (const item of this.cache) {
			const [key, value] = item;
			const deleted = this._deleteIfExpired(key, value);
			if (deleted === false) {
				yield [key, value.value];
			}
		}
		for (const item of this.oldCache) {
			const [key, value] = item;
			if (!this.cache.has(key)) {
				const deleted = this._deleteIfExpired(key, value);
				if (deleted === false) {
					yield [key, value.value];
				}
			}
		}
	}
	* entriesDescending() {
		let items = [...this.cache];
		for (let i = items.length - 1; i >= 0; --i) {
			const item = items[i];
			const [key, value] = item;
			const deleted = this._deleteIfExpired(key, value);
			if (deleted === false) {
				yield [key, value.value];
			}
		}
		items = [...this.oldCache];
		for (let i = items.length - 1; i >= 0; --i) {
			const item = items[i];
			const [key, value] = item;
			if (!this.cache.has(key)) {
				const deleted = this._deleteIfExpired(key, value);
				if (deleted === false) {
					yield [key, value.value];
				}
			}
		}
	}
	* entriesAscending() {
		for (const [key, value] of this._entriesAscending()) {
			yield [key, value.value];
		}
	}
	get size() {
		if (!this._size) {
			return this.oldCache.size;
		}
		let oldCacheSize = 0;
		for (const key of this.oldCache.keys()) {
			if (!this.cache.has(key)) {
				oldCacheSize++;
			}
		}
		return Math.min(this._size + oldCacheSize, this.maxSize);
	}
	entries() {
		return this.entriesAscending();
	}
	forEach(callbackFunction, thisArgument = this) {
		for (const [key, value] of this.entriesAscending()) {
			callbackFunction.call(thisArgument, value, key, this);
		}
	}
	get [Symbol.toStringTag]() {
		return JSON.stringify([...this.entriesAscending()]);
	}
}
const has$1 = (array, key) => array.some(element => {
	if (typeof element === 'string') {
		return element === key;
	}
	element.lastIndex = 0;
	return element.test(key);
});
const cache$2 = new QuickLRU({maxSize: 100_000});
const isObject$2 = value =>
	typeof value === 'object'
		&& value !== null
		&& !(value instanceof RegExp)
		&& !(value instanceof Error)
		&& !(value instanceof Date);
const transform$1 = (input, options = {}) => {
	if (!isObject$2(input)) {
		return input;
	}
	const {
		exclude,
		pascalCase = false,
		stopPaths,
		deep = false,
		preserveConsecutiveUppercase = false,
	} = options;
	const stopPathsSet = new Set(stopPaths);
	const makeMapper = parentPath => (key, value) => {
		if (deep && isObject$2(value)) {
			const path = parentPath === undefined ? key : `${parentPath}.${key}`;
			if (!stopPathsSet.has(path)) {
				value = mapObject$2(value, makeMapper(path));
			}
		}
		if (!(exclude && has$1(exclude, key))) {
			const cacheKey = pascalCase ? `${key}_` : key;
			if (cache$2.has(cacheKey)) {
				key = cache$2.get(cacheKey);
			} else {
				const returnValue = camelCase(key, {pascalCase, locale: false, preserveConsecutiveUppercase});
				if (key.length < 100) { 
					cache$2.set(cacheKey, returnValue);
				}
				key = returnValue;
			}
		}
		return [key, value];
	};
	return mapObject$2(input, makeMapper(undefined));
};
function camelcaseKeys(input, options) {
	if (Array.isArray(input)) {
		return Object.keys(input).map(key => transform$1(input[key], options));
	}
	return transform$1(input, options);
}
function trimNewlines(string) {
	let start = 0;
	let end = string.length;
	while (start < end && (string[start] === '\r' || string[start] === '\n')) {
		start++;
	}
	while (end > start && (string[end - 1] === '\r' || string[end - 1] === '\n')) {
		end--;
	}
	return (start > 0 || end < string.length) ? string.slice(start, end) : string;
}
function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}
var minIndent = string => {
	const match = string.match(/^[ \t]*(?=\S)/gm);
	if (!match) {
		return 0;
	}
	return match.reduce((r, a) => Math.min(r, a.length), Infinity);
};
const minIndent$1 = getDefaultExportFromCjs(minIndent);
function stripIndent(string) {
	const indent = minIndent$1(string);
	if (indent === 0) {
		return string;
	}
	const regex = new RegExp(`^[ \\t]{${indent}}`, 'gm');
	return string.replace(regex, '');
}
function indentString(string, count = 1, options = {}) {
	const {
		indent = ' ',
		includeEmptyLines = false
	} = options;
	if (typeof string !== 'string') {
		throw new TypeError(
			`Expected \`input\` to be a \`string\`, got \`${typeof string}\``
		);
	}
	if (typeof count !== 'number') {
		throw new TypeError(
			`Expected \`count\` to be a \`number\`, got \`${typeof count}\``
		);
	}
	if (count < 0) {
		throw new RangeError(
			`Expected \`count\` to be at least 0, got \`${count}\``
		);
	}
	if (typeof indent !== 'string') {
		throw new TypeError(
			`Expected \`options.indent\` to be a \`string\`, got \`${typeof indent}\``
		);
	}
	if (count === 0) {
		return string;
	}
	const regex = includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
	return string.replace(regex, indent.repeat(count));
}
function redent(string, count = 0, options = {}) {
	return indentString(stripIndent(string), count, options);
}
const debug$1 = (
  typeof process === 'object' &&
  process.env &&
  process.env.NODE_DEBUG &&
  /\bsemver\b/i.test(process.env.NODE_DEBUG)
) ? (...args) => console.error('SEMVER', ...args)
  : () => {};
var debug_1 = debug$1;
const SEMVER_SPEC_VERSION = '2.0.0';
const MAX_LENGTH$1 = 256;
const MAX_SAFE_INTEGER$1 = Number.MAX_SAFE_INTEGER ||
 9007199254740991;
const MAX_SAFE_COMPONENT_LENGTH = 16;
const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH$1 - 6;
const RELEASE_TYPES = [
  'major',
  'premajor',
  'minor',
  'preminor',
  'patch',
  'prepatch',
  'prerelease',
];
var constants$1 = {
  MAX_LENGTH: MAX_LENGTH$1,
  MAX_SAFE_COMPONENT_LENGTH,
  MAX_SAFE_BUILD_LENGTH,
  MAX_SAFE_INTEGER: MAX_SAFE_INTEGER$1,
  RELEASE_TYPES,
  SEMVER_SPEC_VERSION,
  FLAG_INCLUDE_PRERELEASE: 0b001,
  FLAG_LOOSE: 0b010,
};
var re$1 = {exports: {}};
(function (module, exports) {
	const {
	  MAX_SAFE_COMPONENT_LENGTH,
	  MAX_SAFE_BUILD_LENGTH,
	  MAX_LENGTH,
	} = constants$1;
	const debug = debug_1;
	exports = module.exports = {};
	const re = exports.re = [];
	const safeRe = exports.safeRe = [];
	const src = exports.src = [];
	const t = exports.t = {};
	let R = 0;
	const LETTERDASHNUMBER = '[a-zA-Z0-9-]';
	const safeRegexReplacements = [
	  ['\\s', 1],
	  ['\\d', MAX_LENGTH],
	  [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH],
	];
	const makeSafeRegex = (value) => {
	  for (const [token, max] of safeRegexReplacements) {
	    value = value
	      .split(`${token}*`).join(`${token}{0,${max}}`)
	      .split(`${token}+`).join(`${token}{1,${max}}`);
	  }
	  return value
	};
	const createToken = (name, value, isGlobal) => {
	  const safe = makeSafeRegex(value);
	  const index = R++;
	  debug(name, index, value);
	  t[name] = index;
	  src[index] = value;
	  re[index] = new RegExp(value, isGlobal ? 'g' : undefined);
	  safeRe[index] = new RegExp(safe, isGlobal ? 'g' : undefined);
	};
	createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*');
	createToken('NUMERICIDENTIFIERLOOSE', '\\d+');
	createToken('NONNUMERICIDENTIFIER', `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
	createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` +
	                   `(${src[t.NUMERICIDENTIFIER]})\\.` +
	                   `(${src[t.NUMERICIDENTIFIER]})`);
	createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
	                        `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
	                        `(${src[t.NUMERICIDENTIFIERLOOSE]})`);
	createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NUMERICIDENTIFIER]
	}|${src[t.NONNUMERICIDENTIFIER]})`);
	createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NUMERICIDENTIFIERLOOSE]
	}|${src[t.NONNUMERICIDENTIFIER]})`);
	createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]
	}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
	createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]
	}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
	createToken('BUILDIDENTIFIER', `${LETTERDASHNUMBER}+`);
	createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]
	}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
	createToken('FULLPLAIN', `v?${src[t.MAINVERSION]
	}${src[t.PRERELEASE]}?${
	  src[t.BUILD]}?`);
	createToken('FULL', `^${src[t.FULLPLAIN]}$`);
	createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]
	}${src[t.PRERELEASELOOSE]}?${
	  src[t.BUILD]}?`);
	createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`);
	createToken('GTLT', '((?:<|>)?=?)');
	createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
	createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
	createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` +
	                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
	                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
	                   `(?:${src[t.PRERELEASE]})?${
	                     src[t.BUILD]}?` +
	                   `)?)?`);
	createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` +
	                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
	                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
	                        `(?:${src[t.PRERELEASELOOSE]})?${
	                          src[t.BUILD]}?` +
	                        `)?)?`);
	createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
	createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
	createToken('COERCEPLAIN', `${'(^|[^\\d])' +
	              '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` +
	              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
	              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
	createToken('COERCE', `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
	createToken('COERCEFULL', src[t.COERCEPLAIN] +
	              `(?:${src[t.PRERELEASE]})?` +
	              `(?:${src[t.BUILD]})?` +
	              `(?:$|[^\\d])`);
	createToken('COERCERTL', src[t.COERCE], true);
	createToken('COERCERTLFULL', src[t.COERCEFULL], true);
	createToken('LONETILDE', '(?:~>?)');
	createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true);
	exports.tildeTrimReplace = '$1~';
	createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
	createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
	createToken('LONECARET', '(?:\\^)');
	createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true);
	exports.caretTrimReplace = '$1^';
	createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
	createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
	createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
	createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
	createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]
	}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
	exports.comparatorTrimReplace = '$1$2$3';
	createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` +
	                   `\\s+-\\s+` +
	                   `(${src[t.XRANGEPLAIN]})` +
	                   `\\s*$`);
	createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` +
	                        `\\s+-\\s+` +
	                        `(${src[t.XRANGEPLAINLOOSE]})` +
	                        `\\s*$`);
	createToken('STAR', '(<|>)?=?\\s*\\*');
	createToken('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$');
	createToken('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$'); 
} (re$1, re$1.exports));
var reExports = re$1.exports;
const looseOption = Object.freeze({ loose: true });
const emptyOpts = Object.freeze({ });
const parseOptions$1 = options => {
  if (!options) {
    return emptyOpts
  }
  if (typeof options !== 'object') {
    return looseOption
  }
  return options
};
var parseOptions_1 = parseOptions$1;
const numeric = /^[0-9]+$/;
const compareIdentifiers$1 = (a, b) => {
  const anum = numeric.test(a);
  const bnum = numeric.test(b);
  if (anum && bnum) {
    a = +a;
    b = +b;
  }
  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
};
const rcompareIdentifiers = (a, b) => compareIdentifiers$1(b, a);
var identifiers = {
  compareIdentifiers: compareIdentifiers$1,
  rcompareIdentifiers,
};
const debug = debug_1;
const { MAX_LENGTH, MAX_SAFE_INTEGER } = constants$1;
const { safeRe: re, t } = reExports;
const parseOptions = parseOptions_1;
const { compareIdentifiers } = identifiers;
let SemVer$1 = class SemVer {
  constructor (version, options) {
    options = parseOptions(options);
    if (version instanceof SemVer) {
      if (version.loose === !!options.loose &&
          version.includePrerelease === !!options.includePrerelease) {
        return version
      } else {
        version = version.version;
      }
    } else if (typeof version !== 'string') {
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`)
    }
    if (version.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      )
    }
    debug('SemVer', version, options);
    this.options = options;
    this.loose = !!options.loose;
    this.includePrerelease = !!options.includePrerelease;
    const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`)
    }
    this.raw = version;
    this.major = +m[1];
    this.minor = +m[2];
    this.patch = +m[3];
    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError('Invalid major version')
    }
    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError('Invalid minor version')
    }
    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError('Invalid patch version')
    }
    if (!m[4]) {
      this.prerelease = [];
    } else {
      this.prerelease = m[4].split('.').map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id;
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num
          }
        }
        return id
      });
    }
    this.build = m[5] ? m[5].split('.') : [];
    this.format();
  }
  format () {
    this.version = `${this.major}.${this.minor}.${this.patch}`;
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join('.')}`;
    }
    return this.version
  }
  toString () {
    return this.version
  }
  compare (other) {
    debug('SemVer.compare', this.version, this.options, other);
    if (!(other instanceof SemVer)) {
      if (typeof other === 'string' && other === this.version) {
        return 0
      }
      other = new SemVer(other, this.options);
    }
    if (other.version === this.version) {
      return 0
    }
    return this.compareMain(other) || this.comparePre(other)
  }
  compareMain (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    return (
      compareIdentifiers(this.major, other.major) ||
      compareIdentifiers(this.minor, other.minor) ||
      compareIdentifiers(this.patch, other.patch)
    )
  }
  comparePre (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    if (this.prerelease.length && !other.prerelease.length) {
      return -1
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0
    }
    let i = 0;
    do {
      const a = this.prerelease[i];
      const b = other.prerelease[i];
      debug('prerelease compare', i, a, b);
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }
  compareBuild (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    let i = 0;
    do {
      const a = this.build[i];
      const b = other.build[i];
      debug('prerelease compare', i, a, b);
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }
  inc (release, identifier, identifierBase) {
    switch (release) {
      case 'premajor':
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor = 0;
        this.major++;
        this.inc('pre', identifier, identifierBase);
        break
      case 'preminor':
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor++;
        this.inc('pre', identifier, identifierBase);
        break
      case 'prepatch':
        this.prerelease.length = 0;
        this.inc('patch', identifier, identifierBase);
        this.inc('pre', identifier, identifierBase);
        break
      case 'prerelease':
        if (this.prerelease.length === 0) {
          this.inc('patch', identifier, identifierBase);
        }
        this.inc('pre', identifier, identifierBase);
        break
      case 'major':
        if (
          this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0
        ) {
          this.major++;
        }
        this.minor = 0;
        this.patch = 0;
        this.prerelease = [];
        break
      case 'minor':
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++;
        }
        this.patch = 0;
        this.prerelease = [];
        break
      case 'patch':
        if (this.prerelease.length === 0) {
          this.patch++;
        }
        this.prerelease = [];
        break
      case 'pre': {
        const base = Number(identifierBase) ? 1 : 0;
        if (!identifier && identifierBase === false) {
          throw new Error('invalid increment argument: identifier is empty')
        }
        if (this.prerelease.length === 0) {
          this.prerelease = [base];
        } else {
          let i = this.prerelease.length;
          while (--i >= 0) {
            if (typeof this.prerelease[i] === 'number') {
              this.prerelease[i]++;
              i = -2;
            }
          }
          if (i === -1) {
            if (identifier === this.prerelease.join('.') && identifierBase === false) {
              throw new Error('invalid increment argument: identifier already exists')
            }
            this.prerelease.push(base);
          }
        }
        if (identifier) {
          let prerelease = [identifier, base];
          if (identifierBase === false) {
            prerelease = [identifier];
          }
          if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = prerelease;
            }
          } else {
            this.prerelease = prerelease;
          }
        }
        break
      }
      default:
        throw new Error(`invalid increment argument: ${release}`)
    }
    this.raw = this.format();
    if (this.build.length) {
      this.raw += `+${this.build.join('.')}`;
    }
    return this
  }
};
var semver = SemVer$1;
const SemVer = semver;
const parse$6 = (version, options, throwErrors = false) => {
  if (version instanceof SemVer) {
    return version
  }
  try {
    return new SemVer(version, options)
  } catch (er) {
    if (!throwErrors) {
      return null
    }
    throw er
  }
};
var parse_1 = parse$6;
const parse$5 = parse_1;
const valid$1 = (version, options) => {
  const v = parse$5(version, options);
  return v ? v.version : null
};
var valid_1 = valid$1;
const parse$4 = parse_1;
const clean = (version, options) => {
  const s = parse$4(version.trim().replace(/^[=v]+/, ''), options);
  return s ? s.version : null
};
var clean_1 = clean;
const require$$1$3 = [
	"0BSD",
	"AAL",
	"ADSL",
	"AFL-1.1",
	"AFL-1.2",
	"AFL-2.0",
	"AFL-2.1",
	"AFL-3.0",
	"AGPL-1.0-only",
	"AGPL-1.0-or-later",
	"AGPL-3.0-only",
	"AGPL-3.0-or-later",
	"AMDPLPA",
	"AML",
	"AMPAS",
	"ANTLR-PD",
	"ANTLR-PD-fallback",
	"APAFML",
	"APL-1.0",
	"APSL-1.0",
	"APSL-1.1",
	"APSL-1.2",
	"APSL-2.0",
	"ASWF-Digital-Assets-1.0",
	"ASWF-Digital-Assets-1.1",
	"Abstyles",
	"AdaCore-doc",
	"Adobe-2006",
	"Adobe-Glyph",
	"Adobe-Utopia",
	"Afmparse",
	"Aladdin",
	"Apache-1.0",
	"Apache-1.1",
	"Apache-2.0",
	"App-s2p",
	"Arphic-1999",
	"Artistic-1.0",
	"Artistic-1.0-Perl",
	"Artistic-1.0-cl8",
	"Artistic-2.0",
	"BSD-1-Clause",
	"BSD-2-Clause",
	"BSD-2-Clause-Patent",
	"BSD-2-Clause-Views",
	"BSD-3-Clause",
	"BSD-3-Clause-Attribution",
	"BSD-3-Clause-Clear",
	"BSD-3-Clause-HP",
	"BSD-3-Clause-LBNL",
	"BSD-3-Clause-Modification",
	"BSD-3-Clause-No-Military-License",
	"BSD-3-Clause-No-Nuclear-License",
	"BSD-3-Clause-No-Nuclear-License-2014",
	"BSD-3-Clause-No-Nuclear-Warranty",
	"BSD-3-Clause-Open-MPI",
	"BSD-3-Clause-Sun",
	"BSD-3-Clause-flex",
	"BSD-4-Clause",
	"BSD-4-Clause-Shortened",
	"BSD-4-Clause-UC",
	"BSD-4.3RENO",
	"BSD-4.3TAHOE",
	"BSD-Advertising-Acknowledgement",
	"BSD-Attribution-HPND-disclaimer",
	"BSD-Inferno-Nettverk",
	"BSD-Protection",
	"BSD-Source-Code",
	"BSD-Systemics",
	"BSL-1.0",
	"BUSL-1.1",
	"Baekmuk",
	"Bahyph",
	"Barr",
	"Beerware",
	"BitTorrent-1.0",
	"BitTorrent-1.1",
	"Bitstream-Charter",
	"Bitstream-Vera",
	"BlueOak-1.0.0",
	"Boehm-GC",
	"Borceux",
	"Brian-Gladman-3-Clause",
	"C-UDA-1.0",
	"CAL-1.0",
	"CAL-1.0-Combined-Work-Exception",
	"CATOSL-1.1",
	"CC-BY-1.0",
	"CC-BY-2.0",
	"CC-BY-2.5",
	"CC-BY-2.5-AU",
	"CC-BY-3.0",
	"CC-BY-3.0-AT",
	"CC-BY-3.0-DE",
	"CC-BY-3.0-IGO",
	"CC-BY-3.0-NL",
	"CC-BY-3.0-US",
	"CC-BY-4.0",
	"CC-BY-NC-1.0",
	"CC-BY-NC-2.0",
	"CC-BY-NC-2.5",
	"CC-BY-NC-3.0",
	"CC-BY-NC-3.0-DE",
	"CC-BY-NC-4.0",
	"CC-BY-NC-ND-1.0",
	"CC-BY-NC-ND-2.0",
	"CC-BY-NC-ND-2.5",
	"CC-BY-NC-ND-3.0",
	"CC-BY-NC-ND-3.0-DE",
	"CC-BY-NC-ND-3.0-IGO",
	"CC-BY-NC-ND-4.0",
	"CC-BY-NC-SA-1.0",
	"CC-BY-NC-SA-2.0",
	"CC-BY-NC-SA-2.0-DE",
	"CC-BY-NC-SA-2.0-FR",
	"CC-BY-NC-SA-2.0-UK",
	"CC-BY-NC-SA-2.5",
	"CC-BY-NC-SA-3.0",
	"CC-BY-NC-SA-3.0-DE",
	"CC-BY-NC-SA-3.0-IGO",
	"CC-BY-NC-SA-4.0",
	"CC-BY-ND-1.0",
	"CC-BY-ND-2.0",
	"CC-BY-ND-2.5",
	"CC-BY-ND-3.0",
	"CC-BY-ND-3.0-DE",
	"CC-BY-ND-4.0",
	"CC-BY-SA-1.0",
	"CC-BY-SA-2.0",
	"CC-BY-SA-2.0-UK",
	"CC-BY-SA-2.1-JP",
	"CC-BY-SA-2.5",
	"CC-BY-SA-3.0",
	"CC-BY-SA-3.0-AT",
	"CC-BY-SA-3.0-DE",
	"CC-BY-SA-3.0-IGO",
	"CC-BY-SA-4.0",
	"CC-PDDC",
	"CC0-1.0",
	"CDDL-1.0",
	"CDDL-1.1",
	"CDL-1.0",
	"CDLA-Permissive-1.0",
	"CDLA-Permissive-2.0",
	"CDLA-Sharing-1.0",
	"CECILL-1.0",
	"CECILL-1.1",
	"CECILL-2.0",
	"CECILL-2.1",
	"CECILL-B",
	"CECILL-C",
	"CERN-OHL-1.1",
	"CERN-OHL-1.2",
	"CERN-OHL-P-2.0",
	"CERN-OHL-S-2.0",
	"CERN-OHL-W-2.0",
	"CFITSIO",
	"CMU-Mach",
	"CNRI-Jython",
	"CNRI-Python",
	"CNRI-Python-GPL-Compatible",
	"COIL-1.0",
	"CPAL-1.0",
	"CPL-1.0",
	"CPOL-1.02",
	"CUA-OPL-1.0",
	"Caldera",
	"ClArtistic",
	"Clips",
	"Community-Spec-1.0",
	"Condor-1.1",
	"Cornell-Lossless-JPEG",
	"Cronyx",
	"Crossword",
	"CrystalStacker",
	"Cube",
	"D-FSL-1.0",
	"DL-DE-BY-2.0",
	"DL-DE-ZERO-2.0",
	"DOC",
	"DRL-1.0",
	"DSDP",
	"Dotseqn",
	"ECL-1.0",
	"ECL-2.0",
	"EFL-1.0",
	"EFL-2.0",
	"EPICS",
	"EPL-1.0",
	"EPL-2.0",
	"EUDatagrid",
	"EUPL-1.0",
	"EUPL-1.1",
	"EUPL-1.2",
	"Elastic-2.0",
	"Entessa",
	"ErlPL-1.1",
	"Eurosym",
	"FBM",
	"FDK-AAC",
	"FSFAP",
	"FSFUL",
	"FSFULLR",
	"FSFULLRWD",
	"FTL",
	"Fair",
	"Ferguson-Twofish",
	"Frameworx-1.0",
	"FreeBSD-DOC",
	"FreeImage",
	"Furuseth",
	"GD",
	"GFDL-1.1-invariants-only",
	"GFDL-1.1-invariants-or-later",
	"GFDL-1.1-no-invariants-only",
	"GFDL-1.1-no-invariants-or-later",
	"GFDL-1.1-only",
	"GFDL-1.1-or-later",
	"GFDL-1.2-invariants-only",
	"GFDL-1.2-invariants-or-later",
	"GFDL-1.2-no-invariants-only",
	"GFDL-1.2-no-invariants-or-later",
	"GFDL-1.2-only",
	"GFDL-1.2-or-later",
	"GFDL-1.3-invariants-only",
	"GFDL-1.3-invariants-or-later",
	"GFDL-1.3-no-invariants-only",
	"GFDL-1.3-no-invariants-or-later",
	"GFDL-1.3-only",
	"GFDL-1.3-or-later",
	"GL2PS",
	"GLWTPL",
	"GPL-1.0-only",
	"GPL-1.0-or-later",
	"GPL-2.0-only",
	"GPL-2.0-or-later",
	"GPL-3.0-only",
	"GPL-3.0-or-later",
	"Giftware",
	"Glide",
	"Glulxe",
	"Graphics-Gems",
	"HP-1986",
	"HP-1989",
	"HPND",
	"HPND-DEC",
	"HPND-Markus-Kuhn",
	"HPND-Pbmplus",
	"HPND-UC",
	"HPND-doc",
	"HPND-doc-sell",
	"HPND-export-US",
	"HPND-export-US-modify",
	"HPND-sell-regexpr",
	"HPND-sell-variant",
	"HPND-sell-variant-MIT-disclaimer",
	"HTMLTIDY",
	"HaskellReport",
	"Hippocratic-2.1",
	"IBM-pibs",
	"ICU",
	"IEC-Code-Components-EULA",
	"IJG",
	"IJG-short",
	"IPA",
	"IPL-1.0",
	"ISC",
	"ImageMagick",
	"Imlib2",
	"Info-ZIP",
	"Inner-Net-2.0",
	"Intel",
	"Intel-ACPI",
	"Interbase-1.0",
	"JPL-image",
	"JPNIC",
	"JSON",
	"Jam",
	"JasPer-2.0",
	"Kastrup",
	"Kazlib",
	"Knuth-CTAN",
	"LAL-1.2",
	"LAL-1.3",
	"LGPL-2.0-only",
	"LGPL-2.0-or-later",
	"LGPL-2.1-only",
	"LGPL-2.1-or-later",
	"LGPL-3.0-only",
	"LGPL-3.0-or-later",
	"LGPLLR",
	"LOOP",
	"LPL-1.0",
	"LPL-1.02",
	"LPPL-1.0",
	"LPPL-1.1",
	"LPPL-1.2",
	"LPPL-1.3a",
	"LPPL-1.3c",
	"LZMA-SDK-9.11-to-9.20",
	"LZMA-SDK-9.22",
	"Latex2e",
	"Latex2e-translated-notice",
	"Leptonica",
	"LiLiQ-P-1.1",
	"LiLiQ-R-1.1",
	"LiLiQ-Rplus-1.1",
	"Libpng",
	"Linux-OpenIB",
	"Linux-man-pages-1-para",
	"Linux-man-pages-copyleft",
	"Linux-man-pages-copyleft-2-para",
	"Linux-man-pages-copyleft-var",
	"Lucida-Bitmap-Fonts",
	"MIT",
	"MIT-0",
	"MIT-CMU",
	"MIT-Festival",
	"MIT-Modern-Variant",
	"MIT-Wu",
	"MIT-advertising",
	"MIT-enna",
	"MIT-feh",
	"MIT-open-group",
	"MIT-testregex",
	"MITNFA",
	"MMIXware",
	"MPEG-SSG",
	"MPL-1.0",
	"MPL-1.1",
	"MPL-2.0",
	"MPL-2.0-no-copyleft-exception",
	"MS-LPL",
	"MS-PL",
	"MS-RL",
	"MTLL",
	"MakeIndex",
	"Martin-Birgmeier",
	"McPhee-slideshow",
	"Minpack",
	"MirOS",
	"Motosoto",
	"MulanPSL-1.0",
	"MulanPSL-2.0",
	"Multics",
	"Mup",
	"NAIST-2003",
	"NASA-1.3",
	"NBPL-1.0",
	"NCGL-UK-2.0",
	"NCSA",
	"NGPL",
	"NICTA-1.0",
	"NIST-PD",
	"NIST-PD-fallback",
	"NIST-Software",
	"NLOD-1.0",
	"NLOD-2.0",
	"NLPL",
	"NOSL",
	"NPL-1.0",
	"NPL-1.1",
	"NPOSL-3.0",
	"NRL",
	"NTP",
	"NTP-0",
	"Naumen",
	"Net-SNMP",
	"NetCDF",
	"Newsletr",
	"Nokia",
	"Noweb",
	"O-UDA-1.0",
	"OCCT-PL",
	"OCLC-2.0",
	"ODC-By-1.0",
	"ODbL-1.0",
	"OFFIS",
	"OFL-1.0",
	"OFL-1.0-RFN",
	"OFL-1.0-no-RFN",
	"OFL-1.1",
	"OFL-1.1-RFN",
	"OFL-1.1-no-RFN",
	"OGC-1.0",
	"OGDL-Taiwan-1.0",
	"OGL-Canada-2.0",
	"OGL-UK-1.0",
	"OGL-UK-2.0",
	"OGL-UK-3.0",
	"OGTSL",
	"OLDAP-1.1",
	"OLDAP-1.2",
	"OLDAP-1.3",
	"OLDAP-1.4",
	"OLDAP-2.0",
	"OLDAP-2.0.1",
	"OLDAP-2.1",
	"OLDAP-2.2",
	"OLDAP-2.2.1",
	"OLDAP-2.2.2",
	"OLDAP-2.3",
	"OLDAP-2.4",
	"OLDAP-2.5",
	"OLDAP-2.6",
	"OLDAP-2.7",
	"OLDAP-2.8",
	"OLFL-1.3",
	"OML",
	"OPL-1.0",
	"OPL-UK-3.0",
	"OPUBL-1.0",
	"OSET-PL-2.1",
	"OSL-1.0",
	"OSL-1.1",
	"OSL-2.0",
	"OSL-2.1",
	"OSL-3.0",
	"OpenPBS-2.3",
	"OpenSSL",
	"PADL",
	"PDDL-1.0",
	"PHP-3.0",
	"PHP-3.01",
	"PSF-2.0",
	"Parity-6.0.0",
	"Parity-7.0.0",
	"Plexus",
	"PolyForm-Noncommercial-1.0.0",
	"PolyForm-Small-Business-1.0.0",
	"PostgreSQL",
	"Python-2.0",
	"Python-2.0.1",
	"QPL-1.0",
	"QPL-1.0-INRIA-2004",
	"Qhull",
	"RHeCos-1.1",
	"RPL-1.1",
	"RPL-1.5",
	"RPSL-1.0",
	"RSA-MD",
	"RSCPL",
	"Rdisc",
	"Ruby",
	"SAX-PD",
	"SCEA",
	"SGI-B-1.0",
	"SGI-B-1.1",
	"SGI-B-2.0",
	"SGI-OpenGL",
	"SGP4",
	"SHL-0.5",
	"SHL-0.51",
	"SISSL",
	"SISSL-1.2",
	"SL",
	"SMLNJ",
	"SMPPL",
	"SNIA",
	"SPL-1.0",
	"SSH-OpenSSH",
	"SSH-short",
	"SSPL-1.0",
	"SWL",
	"Saxpath",
	"SchemeReport",
	"Sendmail",
	"Sendmail-8.23",
	"SimPL-2.0",
	"Sleepycat",
	"Soundex",
	"Spencer-86",
	"Spencer-94",
	"Spencer-99",
	"SugarCRM-1.1.3",
	"SunPro",
	"Symlinks",
	"TAPR-OHL-1.0",
	"TCL",
	"TCP-wrappers",
	"TMate",
	"TORQUE-1.1",
	"TOSL",
	"TPDL",
	"TPL-1.0",
	"TTWL",
	"TTYP0",
	"TU-Berlin-1.0",
	"TU-Berlin-2.0",
	"TermReadKey",
	"UCAR",
	"UCL-1.0",
	"UPL-1.0",
	"URT-RLE",
	"Unicode-DFS-2015",
	"Unicode-DFS-2016",
	"Unicode-TOU",
	"UnixCrypt",
	"Unlicense",
	"VOSTROM",
	"VSL-1.0",
	"Vim",
	"W3C",
	"W3C-19980720",
	"W3C-20150513",
	"WTFPL",
	"Watcom-1.0",
	"Widget-Workshop",
	"Wsuipa",
	"X11",
	"X11-distribute-modifications-variant",
	"XFree86-1.1",
	"XSkat",
	"Xdebug-1.03",
	"Xerox",
	"Xfig",
	"Xnet",
	"YPL-1.0",
	"YPL-1.1",
	"ZPL-1.1",
	"ZPL-2.0",
	"ZPL-2.1",
	"Zed",
	"Zeeff",
	"Zend-2.0",
	"Zimbra-1.3",
	"Zimbra-1.4",
	"Zlib",
	"blessing",
	"bzip2-1.0.6",
	"check-cvs",
	"checkmk",
	"copyleft-next-0.3.0",
	"copyleft-next-0.3.1",
	"curl",
	"diffmark",
	"dtoa",
	"dvipdfm",
	"eGenix",
	"etalab-2.0",
	"fwlw",
	"gSOAP-1.3b",
	"gnuplot",
	"iMatix",
	"libpng-2.0",
	"libselinux-1.0",
	"libtiff",
	"libutil-David-Nugent",
	"lsof",
	"magaz",
	"metamail",
	"mpi-permissive",
	"mpich2",
	"mplus",
	"pnmstitch",
	"psfrag",
	"psutils",
	"python-ldap",
	"snprintf",
	"ssh-keyscan",
	"swrule",
	"ulem",
	"w3m",
	"xinetd",
	"xlock",
	"xpp",
	"zlib-acknowledgement"
];
const require$$1$2 = [
	"AGPL-1.0",
	"AGPL-3.0",
	"BSD-2-Clause-FreeBSD",
	"BSD-2-Clause-NetBSD",
	"GFDL-1.1",
	"GFDL-1.2",
	"GFDL-1.3",
	"GPL-1.0",
	"GPL-1.0+",
	"GPL-2.0",
	"GPL-2.0+",
	"GPL-2.0-with-GCC-exception",
	"GPL-2.0-with-autoconf-exception",
	"GPL-2.0-with-bison-exception",
	"GPL-2.0-with-classpath-exception",
	"GPL-2.0-with-font-exception",
	"GPL-3.0",
	"GPL-3.0+",
	"GPL-3.0-with-GCC-exception",
	"GPL-3.0-with-autoconf-exception",
	"LGPL-2.0",
	"LGPL-2.0+",
	"LGPL-2.1",
	"LGPL-2.1+",
	"LGPL-3.0",
	"LGPL-3.0+",
	"Nunit",
	"StandardML-NJ",
	"bzip2-1.0.5",
	"eCos-2.0",
	"wxWindows"
];
const require$$2 = [
	"389-exception",
	"Asterisk-exception",
	"Autoconf-exception-2.0",
	"Autoconf-exception-3.0",
	"Autoconf-exception-generic",
	"Autoconf-exception-generic-3.0",
	"Autoconf-exception-macro",
	"Bison-exception-2.2",
	"Bootloader-exception",
	"Classpath-exception-2.0",
	"CLISP-exception-2.0",
	"cryptsetup-OpenSSL-exception",
	"DigiRule-FOSS-exception",
	"eCos-exception-2.0",
	"Fawkes-Runtime-exception",
	"FLTK-exception",
	"Font-exception-2.0",
	"freertos-exception-2.0",
	"GCC-exception-2.0",
	"GCC-exception-2.0-note",
	"GCC-exception-3.1",
	"GNAT-exception",
	"GNU-compiler-exception",
	"gnu-javamail-exception",
	"GPL-3.0-interface-exception",
	"GPL-3.0-linking-exception",
	"GPL-3.0-linking-source-exception",
	"GPL-CC-1.0",
	"GStreamer-exception-2005",
	"GStreamer-exception-2008",
	"i2p-gpl-java-exception",
	"KiCad-libraries-exception",
	"LGPL-3.0-linking-exception",
	"libpri-OpenH323-exception",
	"Libtool-exception",
	"Linux-syscall-note",
	"LLGPL",
	"LLVM-exception",
	"LZMA-exception",
	"mif-exception",
	"OCaml-LGPL-linking-exception",
	"OCCT-exception-1.0",
	"OpenJDK-assembly-exception-1.0",
	"openvpn-openssl-exception",
	"PS-or-PDF-font-exception-20170817",
	"QPL-1.0-INRIA-2004-exception",
	"Qt-GPL-exception-1.0",
	"Qt-LGPL-exception-1.1",
	"Qwt-exception-1.0",
	"SANE-exception",
	"SHL-2.0",
	"SHL-2.1",
	"stunnel-exception",
	"SWI-exception",
	"Swift-exception",
	"Texinfo-exception",
	"u-boot-exception-2.0",
	"UBDL-exception",
	"Universal-FOSS-exception-1.0",
	"vsftpd-openssl-exception",
	"WxWindows-exception-3.1",
	"x11vnc-openssl-exception"
];
var licenses = []
  .concat(require$$1$3)
  .concat(require$$1$2);
var exceptions = require$$2;
var scan$1 = function (source) {
  var index = 0;
  function hasMore () {
    return index < source.length
  }
  function read (value) {
    if (value instanceof RegExp) {
      var chars = source.slice(index);
      var match = chars.match(value);
      if (match) {
        index += match[0].length;
        return match[0]
      }
    } else {
      if (source.indexOf(value, index) === index) {
        index += value.length;
        return value
      }
    }
  }
  function skipWhitespace () {
    read(/[ ]*/);
  }
  function operator () {
    var string;
    var possibilities = ['WITH', 'AND', 'OR', '(', ')', ':', '+'];
    for (var i = 0; i < possibilities.length; i++) {
      string = read(possibilities[i]);
      if (string) {
        break
      }
    }
    if (string === '+' && index > 1 && source[index - 2] === ' ') {
      throw new Error('Space before `+`')
    }
    return string && {
      type: 'OPERATOR',
      string: string
    }
  }
  function idstring () {
    return read(/[A-Za-z0-9-.]+/)
  }
  function expectIdstring () {
    var string = idstring();
    if (!string) {
      throw new Error('Expected idstring at offset ' + index)
    }
    return string
  }
  function documentRef () {
    if (read('DocumentRef-')) {
      var string = expectIdstring();
      return { type: 'DOCUMENTREF', string: string }
    }
  }
  function licenseRef () {
    if (read('LicenseRef-')) {
      var string = expectIdstring();
      return { type: 'LICENSEREF', string: string }
    }
  }
  function identifier () {
    var begin = index;
    var string = idstring();
    if (licenses.indexOf(string) !== -1) {
      return {
        type: 'LICENSE',
        string: string
      }
    } else if (exceptions.indexOf(string) !== -1) {
      return {
        type: 'EXCEPTION',
        string: string
      }
    }
    index = begin;
  }
  function parseToken () {
    return (
      operator() ||
      documentRef() ||
      licenseRef() ||
      identifier()
    )
  }
  var tokens = [];
  while (hasMore()) {
    skipWhitespace();
    if (!hasMore()) {
      break
    }
    var token = parseToken();
    if (!token) {
      throw new Error('Unexpected `' + source[index] +
                      '` at offset ' + index)
    }
    tokens.push(token);
  }
  return tokens
};
var parse$3 = function (tokens) {
  var index = 0;
  function hasMore () {
    return index < tokens.length
  }
  function token () {
    return hasMore() ? tokens[index] : null
  }
  function next () {
    if (!hasMore()) {
      throw new Error()
    }
    index++;
  }
  function parseOperator (operator) {
    var t = token();
    if (t && t.type === 'OPERATOR' && operator === t.string) {
      next();
      return t.string
    }
  }
  function parseWith () {
    if (parseOperator('WITH')) {
      var t = token();
      if (t && t.type === 'EXCEPTION') {
        next();
        return t.string
      }
      throw new Error('Expected exception after `WITH`')
    }
  }
  function parseLicenseRef () {
    var begin = index;
    var string = '';
    var t = token();
    if (t.type === 'DOCUMENTREF') {
      next();
      string += 'DocumentRef-' + t.string + ':';
      if (!parseOperator(':')) {
        throw new Error('Expected `:` after `DocumentRef-...`')
      }
    }
    t = token();
    if (t.type === 'LICENSEREF') {
      next();
      string += 'LicenseRef-' + t.string;
      return { license: string }
    }
    index = begin;
  }
  function parseLicense () {
    var t = token();
    if (t && t.type === 'LICENSE') {
      next();
      var node = { license: t.string };
      if (parseOperator('+')) {
        node.plus = true;
      }
      var exception = parseWith();
      if (exception) {
        node.exception = exception;
      }
      return node
    }
  }
  function parseParenthesizedExpression () {
    var left = parseOperator('(');
    if (!left) {
      return
    }
    var expr = parseExpression();
    if (!parseOperator(')')) {
      throw new Error('Expected `)`')
    }
    return expr
  }
  function parseAtom () {
    return (
      parseParenthesizedExpression() ||
      parseLicenseRef() ||
      parseLicense()
    )
  }
  function makeBinaryOpParser (operator, nextParser) {
    return function parseBinaryOp () {
      var left = nextParser();
      if (!left) {
        return
      }
      if (!parseOperator(operator)) {
        return left
      }
      var right = parseBinaryOp();
      if (!right) {
        throw new Error('Expected expression')
      }
      return {
        left: left,
        conjunction: operator.toLowerCase(),
        right: right
      }
    }
  }
  var parseAnd = makeBinaryOpParser('AND', parseAtom);
  var parseExpression = makeBinaryOpParser('OR', parseAnd);
  var node = parseExpression();
  if (!node || hasMore()) {
    throw new Error('Syntax error')
  }
  return node
};
var scan = scan$1;
var parse$2 = parse$3;
var spdxExpressionParse = function (source) {
  return parse$2(scan(source))
};
var parse$1 = spdxExpressionParse;
var spdxLicenseIds = require$$1$3;
function valid (string) {
  try {
    parse$1(string);
    return true
  } catch (error) {
    return false
  }
}
function sortTranspositions(a, b) {
  var length = b[0].length - a[0].length;
  if (length !== 0) return length
  return a[0].toUpperCase().localeCompare(b[0].toUpperCase())
}
var transpositions = [
  ['APGL', 'AGPL'],
  ['Gpl', 'GPL'],
  ['GLP', 'GPL'],
  ['APL', 'Apache'],
  ['ISD', 'ISC'],
  ['GLP', 'GPL'],
  ['IST', 'ISC'],
  ['Claude', 'Clause'],
  [' or later', '+'],
  [' International', ''],
  ['GNU', 'GPL'],
  ['GUN', 'GPL'],
  ['+', ''],
  ['GNU GPL', 'GPL'],
  ['GNU LGPL', 'LGPL'],
  ['GNU/GPL', 'GPL'],
  ['GNU GLP', 'GPL'],
  ['GNU LESSER GENERAL PUBLIC LICENSE', 'LGPL'],
  ['GNU Lesser General Public License', 'LGPL'],
  ['GNU LESSER GENERAL PUBLIC LICENSE', 'LGPL-2.1'],
  ['GNU Lesser General Public License', 'LGPL-2.1'],
  ['LESSER GENERAL PUBLIC LICENSE', 'LGPL'],
  ['Lesser General Public License', 'LGPL'],
  ['LESSER GENERAL PUBLIC LICENSE', 'LGPL-2.1'],
  ['Lesser General Public License', 'LGPL-2.1'],
  ['GNU General Public License', 'GPL'],
  ['Gnu public license', 'GPL'],
  ['GNU Public License', 'GPL'],
  ['GNU GENERAL PUBLIC LICENSE', 'GPL'],
  ['MTI', 'MIT'],
  ['Mozilla Public License', 'MPL'],
  ['Universal Permissive License', 'UPL'],
  ['WTH', 'WTF'],
  ['WTFGPL', 'WTFPL'],
  ['-License', '']
].sort(sortTranspositions);
var TRANSPOSED = 0;
var CORRECT = 1;
var transforms = [
  function (argument) {
    return argument.toUpperCase()
  },
  function (argument) {
    return argument.trim()
  },
  function (argument) {
    return argument.replace(/\./g, '')
  },
  function (argument) {
    return argument.replace(/\s+/g, '')
  },
  function (argument) {
    return argument.replace(/\s+/g, '-')
  },
  function (argument) {
    return argument.replace('v', '-')
  },
  function (argument) {
    return argument.replace(/,?\s*(\d)/, '-$1')
  },
  function (argument) {
    return argument.replace(/,?\s*(\d)/, '-$1.0')
  },
  function (argument) {
    return argument
      .replace(/,?\s*(V\.|v\.|V|v|Version|version)\s*(\d)/, '-$2')
  },
  function (argument) {
    return argument
      .replace(/,?\s*(V\.|v\.|V|v|Version|version)\s*(\d)/, '-$2.0')
  },
  function (argument) {
    return argument[0].toUpperCase() + argument.slice(1)
  },
  function (argument) {
    return argument.replace('/', '-')
  },
  function (argument) {
    return argument
      .replace(/\s*V\s*(\d)/, '-$1')
      .replace(/(\d)$/, '$1.0')
  },
  function (argument) {
    if (argument.indexOf('3.0') !== -1) {
      return argument + '-or-later'
    } else {
      return argument + '-only'
    }
  },
  function (argument) {
    return argument + 'only'
  },
  function (argument) {
    return argument.replace(/(\d)$/, '-$1.0')
  },
  function (argument) {
    return argument.replace(/(-| )?(\d)$/, '-$2-Clause')
  },
  function (argument) {
    return argument.replace(/(-| )clause(-| )(\d)/, '-$3-Clause')
  },
  function (argument) {
    return argument.replace(/\b(Modified|New|Revised)(-| )?BSD((-| )License)?/i, 'BSD-3-Clause')
  },
  function (argument) {
    return argument.replace(/\bSimplified(-| )?BSD((-| )License)?/i, 'BSD-2-Clause')
  },
  function (argument) {
    return argument.replace(/\b(Free|Net)(-| )?BSD((-| )License)?/i, 'BSD-2-Clause-$1BSD')
  },
  function (argument) {
    return argument.replace(/\bClear(-| )?BSD((-| )License)?/i, 'BSD-3-Clause-Clear')
  },
  function (argument) {
    return argument.replace(/\b(Old|Original)(-| )?BSD((-| )License)?/i, 'BSD-4-Clause')
  },
  function (argument) {
    return 'CC-' + argument
  },
  function (argument) {
    return 'CC-' + argument + '-4.0'
  },
  function (argument) {
    return argument
      .replace('Attribution', 'BY')
      .replace('NonCommercial', 'NC')
      .replace('NoDerivatives', 'ND')
      .replace(/ (\d)/, '-$1')
      .replace(/ ?International/, '')
  },
  function (argument) {
    return 'CC-' +
      argument
        .replace('Attribution', 'BY')
        .replace('NonCommercial', 'NC')
        .replace('NoDerivatives', 'ND')
        .replace(/ (\d)/, '-$1')
        .replace(/ ?International/, '') +
      '-4.0'
  }
];
var licensesWithVersions = spdxLicenseIds
  .map(function (id) {
    var match = /^(.*)-\d+\.\d+$/.exec(id);
    return match
      ? [match[0], match[1]]
      : [id, null]
  })
  .reduce(function (objectMap, item) {
    var key = item[1];
    objectMap[key] = objectMap[key] || [];
    objectMap[key].push(item[0]);
    return objectMap
  }, {});
var licensesWithOneVersion = Object.keys(licensesWithVersions)
  .map(function makeEntries (key) {
    return [key, licensesWithVersions[key]]
  })
  .filter(function identifySoleVersions (item) {
    return (
      item[1].length === 1 &&
      item[0] !== null &&
      item[0] !== 'APL'
    )
  })
  .map(function createLastResorts (item) {
    return [item[0], item[1][0]]
  });
licensesWithVersions = undefined;
var lastResorts = [
  ['UNLI', 'Unlicense'],
  ['WTF', 'WTFPL'],
  ['2 CLAUSE', 'BSD-2-Clause'],
  ['2-CLAUSE', 'BSD-2-Clause'],
  ['3 CLAUSE', 'BSD-3-Clause'],
  ['3-CLAUSE', 'BSD-3-Clause'],
  ['AFFERO', 'AGPL-3.0-or-later'],
  ['AGPL', 'AGPL-3.0-or-later'],
  ['APACHE', 'Apache-2.0'],
  ['ARTISTIC', 'Artistic-2.0'],
  ['Affero', 'AGPL-3.0-or-later'],
  ['BEER', 'Beerware'],
  ['BOOST', 'BSL-1.0'],
  ['BSD', 'BSD-2-Clause'],
  ['CDDL', 'CDDL-1.1'],
  ['ECLIPSE', 'EPL-1.0'],
  ['FUCK', 'WTFPL'],
  ['GNU', 'GPL-3.0-or-later'],
  ['LGPL', 'LGPL-3.0-or-later'],
  ['GPLV1', 'GPL-1.0-only'],
  ['GPL-1', 'GPL-1.0-only'],
  ['GPLV2', 'GPL-2.0-only'],
  ['GPL-2', 'GPL-2.0-only'],
  ['GPL', 'GPL-3.0-or-later'],
  ['MIT +NO-FALSE-ATTRIBS', 'MITNFA'],
  ['MIT', 'MIT'],
  ['MPL', 'MPL-2.0'],
  ['X11', 'X11'],
  ['ZLIB', 'Zlib']
].concat(licensesWithOneVersion).sort(sortTranspositions);
var SUBSTRING = 0;
var IDENTIFIER = 1;
var validTransformation = function (identifier) {
  for (var i = 0; i < transforms.length; i++) {
    var transformed = transforms[i](identifier).trim();
    if (transformed !== identifier && valid(transformed)) {
      return transformed
    }
  }
  return null
};
var validLastResort = function (identifier) {
  var upperCased = identifier.toUpperCase();
  for (var i = 0; i < lastResorts.length; i++) {
    var lastResort = lastResorts[i];
    if (upperCased.indexOf(lastResort[SUBSTRING]) > -1) {
      return lastResort[IDENTIFIER]
    }
  }
  return null
};
var anyCorrection = function (identifier, check) {
  for (var i = 0; i < transpositions.length; i++) {
    var transposition = transpositions[i];
    var transposed = transposition[TRANSPOSED];
    if (identifier.indexOf(transposed) > -1) {
      var corrected = identifier.replace(
        transposed,
        transposition[CORRECT]
      );
      var checked = check(corrected);
      if (checked !== null) {
        return checked
      }
    }
  }
  return null
};
var spdxCorrect = function (identifier, options) {
  options = options || {};
  var upgrade = options.upgrade === undefined ? true : !!options.upgrade;
  function postprocess (value) {
    return upgrade ? upgradeGPLs(value) : value
  }
  var validArugment = (
    typeof identifier === 'string' &&
    identifier.trim().length !== 0
  );
  if (!validArugment) {
    throw Error('Invalid argument. Expected non-empty string.')
  }
  identifier = identifier.trim();
  if (valid(identifier)) {
    return postprocess(identifier)
  }
  var noPlus = identifier.replace(/\+$/, '').trim();
  if (valid(noPlus)) {
    return postprocess(noPlus)
  }
  var transformed = validTransformation(identifier);
  if (transformed !== null) {
    return postprocess(transformed)
  }
  transformed = anyCorrection(identifier, function (argument) {
    if (valid(argument)) {
      return argument
    }
    return validTransformation(argument)
  });
  if (transformed !== null) {
    return postprocess(transformed)
  }
  transformed = validLastResort(identifier);
  if (transformed !== null) {
    return postprocess(transformed)
  }
  transformed = anyCorrection(identifier, validLastResort);
  if (transformed !== null) {
    return postprocess(transformed)
  }
  return null
};
function upgradeGPLs (value) {
  if ([
    'GPL-1.0', 'LGPL-1.0', 'AGPL-1.0',
    'GPL-2.0', 'LGPL-2.0', 'AGPL-2.0',
    'LGPL-2.1'
  ].indexOf(value) !== -1) {
    return value + '-only'
  } else if ([
    'GPL-1.0+', 'GPL-2.0+', 'GPL-3.0+',
    'LGPL-2.0+', 'LGPL-2.1+', 'LGPL-3.0+',
    'AGPL-1.0+', 'AGPL-3.0+'
  ].indexOf(value) !== -1) {
    return value.replace(/\+$/, '-or-later')
  } else if (['GPL-3.0', 'LGPL-3.0', 'AGPL-3.0'].indexOf(value) !== -1) {
    return value + '-or-later'
  } else {
    return value
  }
}
var parse = spdxExpressionParse;
var correct = spdxCorrect;
var genericWarning = (
  'license should be ' +
  'a valid SPDX license expression (without "LicenseRef"), ' +
  '"UNLICENSED", or ' +
  '"SEE LICENSE IN <filename>"'
);
var fileReferenceRE = /^SEE LICEN[CS]E IN (.+)$/;
function startsWith(prefix, string) {
  return string.slice(0, prefix.length) === prefix;
}
function usesLicenseRef(ast) {
  if (ast.hasOwnProperty('license')) {
    var license = ast.license;
    return (
      startsWith('LicenseRef', license) ||
      startsWith('DocumentRef', license)
    );
  } else {
    return (
      usesLicenseRef(ast.left) ||
      usesLicenseRef(ast.right)
    );
  }
}
var validateNpmPackageLicense = function(argument) {
  var ast;
  try {
    ast = parse(argument);
  } catch (e) {
    var match;
    if (
      argument === 'UNLICENSED' ||
      argument === 'UNLICENCED'
    ) {
      return {
        validForOldPackages: true,
        validForNewPackages: true,
        unlicensed: true
      };
    } else if (match = fileReferenceRE.exec(argument)) {
      return {
        validForOldPackages: true,
        validForNewPackages: true,
        inFile: match[1]
      };
    } else {
      var result = {
        validForOldPackages: false,
        validForNewPackages: false,
        warnings: [genericWarning]
      };
      if (argument.trim().length !== 0) {
        var corrected = correct(argument);
        if (corrected) {
          result.warnings.push(
            'license is similar to the valid expression "' + corrected + '"'
          );
        }
      }
      return result;
    }
  }
  if (usesLicenseRef(ast)) {
    return {
      validForNewPackages: false,
      validForOldPackages: false,
      spdx: true,
      warnings: [genericWarning]
    };
  } else {
    return {
      validForNewPackages: true,
      validForOldPackages: true,
      spdx: true
    };
  }
};
var commonjs = {};
Object.defineProperty(commonjs, "__esModule", { value: true });
commonjs.LRUCache = void 0;
const perf = typeof performance === 'object' &&
    performance &&
    typeof performance.now === 'function'
    ? performance
    : Date;
const warned = new Set();
const PROCESS = (typeof process === 'object' && !!process ? process : {});
const emitWarning = (msg, type, code, fn) => {
    typeof PROCESS.emitWarning === 'function'
        ? PROCESS.emitWarning(msg, type, code, fn)
        : console.error(`[${code}] ${type}: ${msg}`);
};
let AC = globalThis.AbortController;
let AS = globalThis.AbortSignal;
if (typeof AC === 'undefined') {
    AS = class AbortSignal {
        onabort;
        _onabort = [];
        reason;
        aborted = false;
        addEventListener(_, fn) {
            this._onabort.push(fn);
        }
    };
    AC = class AbortController {
        constructor() {
            warnACPolyfill();
        }
        signal = new AS();
        abort(reason) {
            if (this.signal.aborted)
                return;
            this.signal.reason = reason;
            this.signal.aborted = true;
            for (const fn of this.signal._onabort) {
                fn(reason);
            }
            this.signal.onabort?.(reason);
        }
    };
    let printACPolyfillWarning = PROCESS.env?.LRU_CACHE_IGNORE_AC_WARNING !== '1';
    const warnACPolyfill = () => {
        if (!printACPolyfillWarning)
            return;
        printACPolyfillWarning = false;
        emitWarning('AbortController is not defined. If using lru-cache in ' +
            'node 14, load an AbortController polyfill from the ' +
            '`node-abort-controller` package. A minimal polyfill is ' +
            'provided for use by LRUCache.fetch(), but it should not be ' +
            'relied upon in other contexts (eg, passing it to other APIs that ' +
            'use AbortController/AbortSignal might have undesirable effects). ' +
            'You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.', 'NO_ABORT_CONTROLLER', 'ENOTSUP', warnACPolyfill);
    };
}
const shouldWarn = (code) => !warned.has(code);
const isPosInt = (n) => n && n === Math.floor(n) && n > 0 && isFinite(n);
const getUintArray = (max) => !isPosInt(max)
    ? null
    : max <= Math.pow(2, 8)
        ? Uint8Array
        : max <= Math.pow(2, 16)
            ? Uint16Array
            : max <= Math.pow(2, 32)
                ? Uint32Array
                : max <= Number.MAX_SAFE_INTEGER
                    ? ZeroArray
                    : null;
class ZeroArray extends Array {
    constructor(size) {
        super(size);
        this.fill(0);
    }
}
class Stack {
    heap;
    length;
    static #constructing = false;
    static create(max) {
        const HeapCls = getUintArray(max);
        if (!HeapCls)
            return [];
        Stack.#constructing = true;
        const s = new Stack(max, HeapCls);
        Stack.#constructing = false;
        return s;
    }
    constructor(max, HeapCls) {
        if (!Stack.#constructing) {
            throw new TypeError('instantiate Stack using Stack.create(n)');
        }
        this.heap = new HeapCls(max);
        this.length = 0;
    }
    push(n) {
        this.heap[this.length++] = n;
    }
    pop() {
        return this.heap[--this.length];
    }
}
let LRUCache$1 = class LRUCache {
    #max;
    #maxSize;
    #dispose;
    #disposeAfter;
    #fetchMethod;
    ttl;
    ttlResolution;
    ttlAutopurge;
    updateAgeOnGet;
    updateAgeOnHas;
    allowStale;
    noDisposeOnSet;
    noUpdateTTL;
    maxEntrySize;
    sizeCalculation;
    noDeleteOnFetchRejection;
    noDeleteOnStaleGet;
    allowStaleOnFetchAbort;
    allowStaleOnFetchRejection;
    ignoreFetchAbort;
    #size;
    #calculatedSize;
    #keyMap;
    #keyList;
    #valList;
    #next;
    #prev;
    #head;
    #tail;
    #free;
    #disposed;
    #sizes;
    #starts;
    #ttls;
    #hasDispose;
    #hasFetchMethod;
    #hasDisposeAfter;
    static unsafeExposeInternals(c) {
        return {
            starts: c.#starts,
            ttls: c.#ttls,
            sizes: c.#sizes,
            keyMap: c.#keyMap,
            keyList: c.#keyList,
            valList: c.#valList,
            next: c.#next,
            prev: c.#prev,
            get head() {
                return c.#head;
            },
            get tail() {
                return c.#tail;
            },
            free: c.#free,
            isBackgroundFetch: (p) => c.#isBackgroundFetch(p),
            backgroundFetch: (k, index, options, context) => c.#backgroundFetch(k, index, options, context),
            moveToTail: (index) => c.#moveToTail(index),
            indexes: (options) => c.#indexes(options),
            rindexes: (options) => c.#rindexes(options),
            isStale: (index) => c.#isStale(index),
        };
    }
    get max() {
        return this.#max;
    }
    get maxSize() {
        return this.#maxSize;
    }
    get calculatedSize() {
        return this.#calculatedSize;
    }
    get size() {
        return this.#size;
    }
    get fetchMethod() {
        return this.#fetchMethod;
    }
    get dispose() {
        return this.#dispose;
    }
    get disposeAfter() {
        return this.#disposeAfter;
    }
    constructor(options) {
        const { max = 0, ttl, ttlResolution = 1, ttlAutopurge, updateAgeOnGet, updateAgeOnHas, allowStale, dispose, disposeAfter, noDisposeOnSet, noUpdateTTL, maxSize = 0, maxEntrySize = 0, sizeCalculation, fetchMethod, noDeleteOnFetchRejection, noDeleteOnStaleGet, allowStaleOnFetchRejection, allowStaleOnFetchAbort, ignoreFetchAbort, } = options;
        if (max !== 0 && !isPosInt(max)) {
            throw new TypeError('max option must be a nonnegative integer');
        }
        const UintArray = max ? getUintArray(max) : Array;
        if (!UintArray) {
            throw new Error('invalid max value: ' + max);
        }
        this.#max = max;
        this.#maxSize = maxSize;
        this.maxEntrySize = maxEntrySize || this.#maxSize;
        this.sizeCalculation = sizeCalculation;
        if (this.sizeCalculation) {
            if (!this.#maxSize && !this.maxEntrySize) {
                throw new TypeError('cannot set sizeCalculation without setting maxSize or maxEntrySize');
            }
            if (typeof this.sizeCalculation !== 'function') {
                throw new TypeError('sizeCalculation set to non-function');
            }
        }
        if (fetchMethod !== undefined &&
            typeof fetchMethod !== 'function') {
            throw new TypeError('fetchMethod must be a function if specified');
        }
        this.#fetchMethod = fetchMethod;
        this.#hasFetchMethod = !!fetchMethod;
        this.#keyMap = new Map();
        this.#keyList = new Array(max).fill(undefined);
        this.#valList = new Array(max).fill(undefined);
        this.#next = new UintArray(max);
        this.#prev = new UintArray(max);
        this.#head = 0;
        this.#tail = 0;
        this.#free = Stack.create(max);
        this.#size = 0;
        this.#calculatedSize = 0;
        if (typeof dispose === 'function') {
            this.#dispose = dispose;
        }
        if (typeof disposeAfter === 'function') {
            this.#disposeAfter = disposeAfter;
            this.#disposed = [];
        }
        else {
            this.#disposeAfter = undefined;
            this.#disposed = undefined;
        }
        this.#hasDispose = !!this.#dispose;
        this.#hasDisposeAfter = !!this.#disposeAfter;
        this.noDisposeOnSet = !!noDisposeOnSet;
        this.noUpdateTTL = !!noUpdateTTL;
        this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection;
        this.allowStaleOnFetchRejection = !!allowStaleOnFetchRejection;
        this.allowStaleOnFetchAbort = !!allowStaleOnFetchAbort;
        this.ignoreFetchAbort = !!ignoreFetchAbort;
        if (this.maxEntrySize !== 0) {
            if (this.#maxSize !== 0) {
                if (!isPosInt(this.#maxSize)) {
                    throw new TypeError('maxSize must be a positive integer if specified');
                }
            }
            if (!isPosInt(this.maxEntrySize)) {
                throw new TypeError('maxEntrySize must be a positive integer if specified');
            }
            this.#initializeSizeTracking();
        }
        this.allowStale = !!allowStale;
        this.noDeleteOnStaleGet = !!noDeleteOnStaleGet;
        this.updateAgeOnGet = !!updateAgeOnGet;
        this.updateAgeOnHas = !!updateAgeOnHas;
        this.ttlResolution =
            isPosInt(ttlResolution) || ttlResolution === 0
                ? ttlResolution
                : 1;
        this.ttlAutopurge = !!ttlAutopurge;
        this.ttl = ttl || 0;
        if (this.ttl) {
            if (!isPosInt(this.ttl)) {
                throw new TypeError('ttl must be a positive integer if specified');
            }
            this.#initializeTTLTracking();
        }
        if (this.#max === 0 && this.ttl === 0 && this.#maxSize === 0) {
            throw new TypeError('At least one of max, maxSize, or ttl is required');
        }
        if (!this.ttlAutopurge && !this.#max && !this.#maxSize) {
            const code = 'LRU_CACHE_UNBOUNDED';
            if (shouldWarn(code)) {
                warned.add(code);
                const msg = 'TTL caching without ttlAutopurge, max, or maxSize can ' +
                    'result in unbounded memory consumption.';
                emitWarning(msg, 'UnboundedCacheWarning', code, LRUCache);
            }
        }
    }
    getRemainingTTL(key) {
        return this.#keyMap.has(key) ? Infinity : 0;
    }
    #initializeTTLTracking() {
        const ttls = new ZeroArray(this.#max);
        const starts = new ZeroArray(this.#max);
        this.#ttls = ttls;
        this.#starts = starts;
        this.#setItemTTL = (index, ttl, start = perf.now()) => {
            starts[index] = ttl !== 0 ? start : 0;
            ttls[index] = ttl;
            if (ttl !== 0 && this.ttlAutopurge) {
                const t = setTimeout(() => {
                    if (this.#isStale(index)) {
                        this.delete(this.#keyList[index]);
                    }
                }, ttl + 1);
                if (t.unref) {
                    t.unref();
                }
            }
        };
        this.#updateItemAge = index => {
            starts[index] = ttls[index] !== 0 ? perf.now() : 0;
        };
        this.#statusTTL = (status, index) => {
            if (ttls[index]) {
                const ttl = ttls[index];
                const start = starts[index];
                if (!ttl || !start)
                    return;
                status.ttl = ttl;
                status.start = start;
                status.now = cachedNow || getNow();
                const age = status.now - start;
                status.remainingTTL = ttl - age;
            }
        };
        let cachedNow = 0;
        const getNow = () => {
            const n = perf.now();
            if (this.ttlResolution > 0) {
                cachedNow = n;
                const t = setTimeout(() => (cachedNow = 0), this.ttlResolution);
                if (t.unref) {
                    t.unref();
                }
            }
            return n;
        };
        this.getRemainingTTL = key => {
            const index = this.#keyMap.get(key);
            if (index === undefined) {
                return 0;
            }
            const ttl = ttls[index];
            const start = starts[index];
            if (!ttl || !start) {
                return Infinity;
            }
            const age = (cachedNow || getNow()) - start;
            return ttl - age;
        };
        this.#isStale = index => {
            const s = starts[index];
            const t = ttls[index];
            return !!t && !!s && (cachedNow || getNow()) - s > t;
        };
    }
    #updateItemAge = () => { };
    #statusTTL = () => { };
    #setItemTTL = () => { };
    #isStale = () => false;
    #initializeSizeTracking() {
        const sizes = new ZeroArray(this.#max);
        this.#calculatedSize = 0;
        this.#sizes = sizes;
        this.#removeItemSize = index => {
            this.#calculatedSize -= sizes[index];
            sizes[index] = 0;
        };
        this.#requireSize = (k, v, size, sizeCalculation) => {
            if (this.#isBackgroundFetch(v)) {
                return 0;
            }
            if (!isPosInt(size)) {
                if (sizeCalculation) {
                    if (typeof sizeCalculation !== 'function') {
                        throw new TypeError('sizeCalculation must be a function');
                    }
                    size = sizeCalculation(v, k);
                    if (!isPosInt(size)) {
                        throw new TypeError('sizeCalculation return invalid (expect positive integer)');
                    }
                }
                else {
                    throw new TypeError('invalid size value (must be positive integer). ' +
                        'When maxSize or maxEntrySize is used, sizeCalculation ' +
                        'or size must be set.');
                }
            }
            return size;
        };
        this.#addItemSize = (index, size, status) => {
            sizes[index] = size;
            if (this.#maxSize) {
                const maxSize = this.#maxSize - sizes[index];
                while (this.#calculatedSize > maxSize) {
                    this.#evict(true);
                }
            }
            this.#calculatedSize += sizes[index];
            if (status) {
                status.entrySize = size;
                status.totalCalculatedSize = this.#calculatedSize;
            }
        };
    }
    #removeItemSize = _i => { };
    #addItemSize = (_i, _s, _st) => { };
    #requireSize = (_k, _v, size, sizeCalculation) => {
        if (size || sizeCalculation) {
            throw new TypeError('cannot set size without setting maxSize or maxEntrySize on cache');
        }
        return 0;
    };
    *#indexes({ allowStale = this.allowStale } = {}) {
        if (this.#size) {
            for (let i = this.#tail; true;) {
                if (!this.#isValidIndex(i)) {
                    break;
                }
                if (allowStale || !this.#isStale(i)) {
                    yield i;
                }
                if (i === this.#head) {
                    break;
                }
                else {
                    i = this.#prev[i];
                }
            }
        }
    }
    *#rindexes({ allowStale = this.allowStale } = {}) {
        if (this.#size) {
            for (let i = this.#head; true;) {
                if (!this.#isValidIndex(i)) {
                    break;
                }
                if (allowStale || !this.#isStale(i)) {
                    yield i;
                }
                if (i === this.#tail) {
                    break;
                }
                else {
                    i = this.#next[i];
                }
            }
        }
    }
    #isValidIndex(index) {
        return (index !== undefined &&
            this.#keyMap.get(this.#keyList[index]) === index);
    }
    *entries() {
        for (const i of this.#indexes()) {
            if (this.#valList[i] !== undefined &&
                this.#keyList[i] !== undefined &&
                !this.#isBackgroundFetch(this.#valList[i])) {
                yield [this.#keyList[i], this.#valList[i]];
            }
        }
    }
    *rentries() {
        for (const i of this.#rindexes()) {
            if (this.#valList[i] !== undefined &&
                this.#keyList[i] !== undefined &&
                !this.#isBackgroundFetch(this.#valList[i])) {
                yield [this.#keyList[i], this.#valList[i]];
            }
        }
    }
    *keys() {
        for (const i of this.#indexes()) {
            const k = this.#keyList[i];
            if (k !== undefined &&
                !this.#isBackgroundFetch(this.#valList[i])) {
                yield k;
            }
        }
    }
    *rkeys() {
        for (const i of this.#rindexes()) {
            const k = this.#keyList[i];
            if (k !== undefined &&
                !this.#isBackgroundFetch(this.#valList[i])) {
                yield k;
            }
        }
    }
    *values() {
        for (const i of this.#indexes()) {
            const v = this.#valList[i];
            if (v !== undefined &&
                !this.#isBackgroundFetch(this.#valList[i])) {
                yield this.#valList[i];
            }
        }
    }
    *rvalues() {
        for (const i of this.#rindexes()) {
            const v = this.#valList[i];
            if (v !== undefined &&
                !this.#isBackgroundFetch(this.#valList[i])) {
                yield this.#valList[i];
            }
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
    [Symbol.toStringTag] = 'LRUCache';
    find(fn, getOptions = {}) {
        for (const i of this.#indexes()) {
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v)
                ? v.__staleWhileFetching
                : v;
            if (value === undefined)
                continue;
            if (fn(value, this.#keyList[i], this)) {
                return this.get(this.#keyList[i], getOptions);
            }
        }
    }
    forEach(fn, thisp = this) {
        for (const i of this.#indexes()) {
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v)
                ? v.__staleWhileFetching
                : v;
            if (value === undefined)
                continue;
            fn.call(thisp, value, this.#keyList[i], this);
        }
    }
    rforEach(fn, thisp = this) {
        for (const i of this.#rindexes()) {
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v)
                ? v.__staleWhileFetching
                : v;
            if (value === undefined)
                continue;
            fn.call(thisp, value, this.#keyList[i], this);
        }
    }
    purgeStale() {
        let deleted = false;
        for (const i of this.#rindexes({ allowStale: true })) {
            if (this.#isStale(i)) {
                this.delete(this.#keyList[i]);
                deleted = true;
            }
        }
        return deleted;
    }
    info(key) {
        const i = this.#keyMap.get(key);
        if (i === undefined)
            return undefined;
        const v = this.#valList[i];
        const value = this.#isBackgroundFetch(v)
            ? v.__staleWhileFetching
            : v;
        if (value === undefined)
            return undefined;
        const entry = { value };
        if (this.#ttls && this.#starts) {
            const ttl = this.#ttls[i];
            const start = this.#starts[i];
            if (ttl && start) {
                const remain = ttl - (perf.now() - start);
                entry.ttl = remain;
                entry.start = Date.now();
            }
        }
        if (this.#sizes) {
            entry.size = this.#sizes[i];
        }
        return entry;
    }
    dump() {
        const arr = [];
        for (const i of this.#indexes({ allowStale: true })) {
            const key = this.#keyList[i];
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v)
                ? v.__staleWhileFetching
                : v;
            if (value === undefined || key === undefined)
                continue;
            const entry = { value };
            if (this.#ttls && this.#starts) {
                entry.ttl = this.#ttls[i];
                const age = perf.now() - this.#starts[i];
                entry.start = Math.floor(Date.now() - age);
            }
            if (this.#sizes) {
                entry.size = this.#sizes[i];
            }
            arr.unshift([key, entry]);
        }
        return arr;
    }
    load(arr) {
        this.clear();
        for (const [key, entry] of arr) {
            if (entry.start) {
                const age = Date.now() - entry.start;
                entry.start = perf.now() - age;
            }
            this.set(key, entry.value, entry);
        }
    }
    set(k, v, setOptions = {}) {
        if (v === undefined) {
            this.delete(k);
            return this;
        }
        const { ttl = this.ttl, start, noDisposeOnSet = this.noDisposeOnSet, sizeCalculation = this.sizeCalculation, status, } = setOptions;
        let { noUpdateTTL = this.noUpdateTTL } = setOptions;
        const size = this.#requireSize(k, v, setOptions.size || 0, sizeCalculation);
        if (this.maxEntrySize && size > this.maxEntrySize) {
            if (status) {
                status.set = 'miss';
                status.maxEntrySizeExceeded = true;
            }
            this.delete(k);
            return this;
        }
        let index = this.#size === 0 ? undefined : this.#keyMap.get(k);
        if (index === undefined) {
            index = (this.#size === 0
                ? this.#tail
                : this.#free.length !== 0
                    ? this.#free.pop()
                    : this.#size === this.#max
                        ? this.#evict(false)
                        : this.#size);
            this.#keyList[index] = k;
            this.#valList[index] = v;
            this.#keyMap.set(k, index);
            this.#next[this.#tail] = index;
            this.#prev[index] = this.#tail;
            this.#tail = index;
            this.#size++;
            this.#addItemSize(index, size, status);
            if (status)
                status.set = 'add';
            noUpdateTTL = false;
        }
        else {
            this.#moveToTail(index);
            const oldVal = this.#valList[index];
            if (v !== oldVal) {
                if (this.#hasFetchMethod && this.#isBackgroundFetch(oldVal)) {
                    oldVal.__abortController.abort(new Error('replaced'));
                    const { __staleWhileFetching: s } = oldVal;
                    if (s !== undefined && !noDisposeOnSet) {
                        if (this.#hasDispose) {
                            this.#dispose?.(s, k, 'set');
                        }
                        if (this.#hasDisposeAfter) {
                            this.#disposed?.push([s, k, 'set']);
                        }
                    }
                }
                else if (!noDisposeOnSet) {
                    if (this.#hasDispose) {
                        this.#dispose?.(oldVal, k, 'set');
                    }
                    if (this.#hasDisposeAfter) {
                        this.#disposed?.push([oldVal, k, 'set']);
                    }
                }
                this.#removeItemSize(index);
                this.#addItemSize(index, size, status);
                this.#valList[index] = v;
                if (status) {
                    status.set = 'replace';
                    const oldValue = oldVal && this.#isBackgroundFetch(oldVal)
                        ? oldVal.__staleWhileFetching
                        : oldVal;
                    if (oldValue !== undefined)
                        status.oldValue = oldValue;
                }
            }
            else if (status) {
                status.set = 'update';
            }
        }
        if (ttl !== 0 && !this.#ttls) {
            this.#initializeTTLTracking();
        }
        if (this.#ttls) {
            if (!noUpdateTTL) {
                this.#setItemTTL(index, ttl, start);
            }
            if (status)
                this.#statusTTL(status, index);
        }
        if (!noDisposeOnSet && this.#hasDisposeAfter && this.#disposed) {
            const dt = this.#disposed;
            let task;
            while ((task = dt?.shift())) {
                this.#disposeAfter?.(...task);
            }
        }
        return this;
    }
    pop() {
        try {
            while (this.#size) {
                const val = this.#valList[this.#head];
                this.#evict(true);
                if (this.#isBackgroundFetch(val)) {
                    if (val.__staleWhileFetching) {
                        return val.__staleWhileFetching;
                    }
                }
                else if (val !== undefined) {
                    return val;
                }
            }
        }
        finally {
            if (this.#hasDisposeAfter && this.#disposed) {
                const dt = this.#disposed;
                let task;
                while ((task = dt?.shift())) {
                    this.#disposeAfter?.(...task);
                }
            }
        }
    }
    #evict(free) {
        const head = this.#head;
        const k = this.#keyList[head];
        const v = this.#valList[head];
        if (this.#hasFetchMethod && this.#isBackgroundFetch(v)) {
            v.__abortController.abort(new Error('evicted'));
        }
        else if (this.#hasDispose || this.#hasDisposeAfter) {
            if (this.#hasDispose) {
                this.#dispose?.(v, k, 'evict');
            }
            if (this.#hasDisposeAfter) {
                this.#disposed?.push([v, k, 'evict']);
            }
        }
        this.#removeItemSize(head);
        if (free) {
            this.#keyList[head] = undefined;
            this.#valList[head] = undefined;
            this.#free.push(head);
        }
        if (this.#size === 1) {
            this.#head = this.#tail = 0;
            this.#free.length = 0;
        }
        else {
            this.#head = this.#next[head];
        }
        this.#keyMap.delete(k);
        this.#size--;
        return head;
    }
    has(k, hasOptions = {}) {
        const { updateAgeOnHas = this.updateAgeOnHas, status } = hasOptions;
        const index = this.#keyMap.get(k);
        if (index !== undefined) {
            const v = this.#valList[index];
            if (this.#isBackgroundFetch(v) &&
                v.__staleWhileFetching === undefined) {
                return false;
            }
            if (!this.#isStale(index)) {
                if (updateAgeOnHas) {
                    this.#updateItemAge(index);
                }
                if (status) {
                    status.has = 'hit';
                    this.#statusTTL(status, index);
                }
                return true;
            }
            else if (status) {
                status.has = 'stale';
                this.#statusTTL(status, index);
            }
        }
        else if (status) {
            status.has = 'miss';
        }
        return false;
    }
    peek(k, peekOptions = {}) {
        const { allowStale = this.allowStale } = peekOptions;
        const index = this.#keyMap.get(k);
        if (index === undefined ||
            (!allowStale && this.#isStale(index))) {
            return;
        }
        const v = this.#valList[index];
        return this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
    }
    #backgroundFetch(k, index, options, context) {
        const v = index === undefined ? undefined : this.#valList[index];
        if (this.#isBackgroundFetch(v)) {
            return v;
        }
        const ac = new AC();
        const { signal } = options;
        signal?.addEventListener('abort', () => ac.abort(signal.reason), {
            signal: ac.signal,
        });
        const fetchOpts = {
            signal: ac.signal,
            options,
            context,
        };
        const cb = (v, updateCache = false) => {
            const { aborted } = ac.signal;
            const ignoreAbort = options.ignoreFetchAbort && v !== undefined;
            if (options.status) {
                if (aborted && !updateCache) {
                    options.status.fetchAborted = true;
                    options.status.fetchError = ac.signal.reason;
                    if (ignoreAbort)
                        options.status.fetchAbortIgnored = true;
                }
                else {
                    options.status.fetchResolved = true;
                }
            }
            if (aborted && !ignoreAbort && !updateCache) {
                return fetchFail(ac.signal.reason);
            }
            const bf = p;
            if (this.#valList[index] === p) {
                if (v === undefined) {
                    if (bf.__staleWhileFetching) {
                        this.#valList[index] = bf.__staleWhileFetching;
                    }
                    else {
                        this.delete(k);
                    }
                }
                else {
                    if (options.status)
                        options.status.fetchUpdated = true;
                    this.set(k, v, fetchOpts.options);
                }
            }
            return v;
        };
        const eb = (er) => {
            if (options.status) {
                options.status.fetchRejected = true;
                options.status.fetchError = er;
            }
            return fetchFail(er);
        };
        const fetchFail = (er) => {
            const { aborted } = ac.signal;
            const allowStaleAborted = aborted && options.allowStaleOnFetchAbort;
            const allowStale = allowStaleAborted || options.allowStaleOnFetchRejection;
            const noDelete = allowStale || options.noDeleteOnFetchRejection;
            const bf = p;
            if (this.#valList[index] === p) {
                const del = !noDelete || bf.__staleWhileFetching === undefined;
                if (del) {
                    this.delete(k);
                }
                else if (!allowStaleAborted) {
                    this.#valList[index] = bf.__staleWhileFetching;
                }
            }
            if (allowStale) {
                if (options.status && bf.__staleWhileFetching !== undefined) {
                    options.status.returnedStale = true;
                }
                return bf.__staleWhileFetching;
            }
            else if (bf.__returned === bf) {
                throw er;
            }
        };
        const pcall = (res, rej) => {
            const fmp = this.#fetchMethod?.(k, v, fetchOpts);
            if (fmp && fmp instanceof Promise) {
                fmp.then(v => res(v === undefined ? undefined : v), rej);
            }
            ac.signal.addEventListener('abort', () => {
                if (!options.ignoreFetchAbort ||
                    options.allowStaleOnFetchAbort) {
                    res(undefined);
                    if (options.allowStaleOnFetchAbort) {
                        res = v => cb(v, true);
                    }
                }
            });
        };
        if (options.status)
            options.status.fetchDispatched = true;
        const p = new Promise(pcall).then(cb, eb);
        const bf = Object.assign(p, {
            __abortController: ac,
            __staleWhileFetching: v,
            __returned: undefined,
        });
        if (index === undefined) {
            this.set(k, bf, { ...fetchOpts.options, status: undefined });
            index = this.#keyMap.get(k);
        }
        else {
            this.#valList[index] = bf;
        }
        return bf;
    }
    #isBackgroundFetch(p) {
        if (!this.#hasFetchMethod)
            return false;
        const b = p;
        return (!!b &&
            b instanceof Promise &&
            b.hasOwnProperty('__staleWhileFetching') &&
            b.__abortController instanceof AC);
    }
    async fetch(k, fetchOptions = {}) {
        const { 
        allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, 
        ttl = this.ttl, noDisposeOnSet = this.noDisposeOnSet, size = 0, sizeCalculation = this.sizeCalculation, noUpdateTTL = this.noUpdateTTL, 
        noDeleteOnFetchRejection = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection = this.allowStaleOnFetchRejection, ignoreFetchAbort = this.ignoreFetchAbort, allowStaleOnFetchAbort = this.allowStaleOnFetchAbort, context, forceRefresh = false, status, signal, } = fetchOptions;
        if (!this.#hasFetchMethod) {
            if (status)
                status.fetch = 'get';
            return this.get(k, {
                allowStale,
                updateAgeOnGet,
                noDeleteOnStaleGet,
                status,
            });
        }
        const options = {
            allowStale,
            updateAgeOnGet,
            noDeleteOnStaleGet,
            ttl,
            noDisposeOnSet,
            size,
            sizeCalculation,
            noUpdateTTL,
            noDeleteOnFetchRejection,
            allowStaleOnFetchRejection,
            allowStaleOnFetchAbort,
            ignoreFetchAbort,
            status,
            signal,
        };
        let index = this.#keyMap.get(k);
        if (index === undefined) {
            if (status)
                status.fetch = 'miss';
            const p = this.#backgroundFetch(k, index, options, context);
            return (p.__returned = p);
        }
        else {
            const v = this.#valList[index];
            if (this.#isBackgroundFetch(v)) {
                const stale = allowStale && v.__staleWhileFetching !== undefined;
                if (status) {
                    status.fetch = 'inflight';
                    if (stale)
                        status.returnedStale = true;
                }
                return stale ? v.__staleWhileFetching : (v.__returned = v);
            }
            const isStale = this.#isStale(index);
            if (!forceRefresh && !isStale) {
                if (status)
                    status.fetch = 'hit';
                this.#moveToTail(index);
                if (updateAgeOnGet) {
                    this.#updateItemAge(index);
                }
                if (status)
                    this.#statusTTL(status, index);
                return v;
            }
            const p = this.#backgroundFetch(k, index, options, context);
            const hasStale = p.__staleWhileFetching !== undefined;
            const staleVal = hasStale && allowStale;
            if (status) {
                status.fetch = isStale ? 'stale' : 'refresh';
                if (staleVal && isStale)
                    status.returnedStale = true;
            }
            return staleVal ? p.__staleWhileFetching : (p.__returned = p);
        }
    }
    get(k, getOptions = {}) {
        const { allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, status, } = getOptions;
        const index = this.#keyMap.get(k);
        if (index !== undefined) {
            const value = this.#valList[index];
            const fetching = this.#isBackgroundFetch(value);
            if (status)
                this.#statusTTL(status, index);
            if (this.#isStale(index)) {
                if (status)
                    status.get = 'stale';
                if (!fetching) {
                    if (!noDeleteOnStaleGet) {
                        this.delete(k);
                    }
                    if (status && allowStale)
                        status.returnedStale = true;
                    return allowStale ? value : undefined;
                }
                else {
                    if (status &&
                        allowStale &&
                        value.__staleWhileFetching !== undefined) {
                        status.returnedStale = true;
                    }
                    return allowStale ? value.__staleWhileFetching : undefined;
                }
            }
            else {
                if (status)
                    status.get = 'hit';
                if (fetching) {
                    return value.__staleWhileFetching;
                }
                this.#moveToTail(index);
                if (updateAgeOnGet) {
                    this.#updateItemAge(index);
                }
                return value;
            }
        }
        else if (status) {
            status.get = 'miss';
        }
    }
    #connect(p, n) {
        this.#prev[n] = p;
        this.#next[p] = n;
    }
    #moveToTail(index) {
        if (index !== this.#tail) {
            if (index === this.#head) {
                this.#head = this.#next[index];
            }
            else {
                this.#connect(this.#prev[index], this.#next[index]);
            }
            this.#connect(this.#tail, index);
            this.#tail = index;
        }
    }
    delete(k) {
        let deleted = false;
        if (this.#size !== 0) {
            const index = this.#keyMap.get(k);
            if (index !== undefined) {
                deleted = true;
                if (this.#size === 1) {
                    this.clear();
                }
                else {
                    this.#removeItemSize(index);
                    const v = this.#valList[index];
                    if (this.#isBackgroundFetch(v)) {
                        v.__abortController.abort(new Error('deleted'));
                    }
                    else if (this.#hasDispose || this.#hasDisposeAfter) {
                        if (this.#hasDispose) {
                            this.#dispose?.(v, k, 'delete');
                        }
                        if (this.#hasDisposeAfter) {
                            this.#disposed?.push([v, k, 'delete']);
                        }
                    }
                    this.#keyMap.delete(k);
                    this.#keyList[index] = undefined;
                    this.#valList[index] = undefined;
                    if (index === this.#tail) {
                        this.#tail = this.#prev[index];
                    }
                    else if (index === this.#head) {
                        this.#head = this.#next[index];
                    }
                    else {
                        const pi = this.#prev[index];
                        this.#next[pi] = this.#next[index];
                        const ni = this.#next[index];
                        this.#prev[ni] = this.#prev[index];
                    }
                    this.#size--;
                    this.#free.push(index);
                }
            }
        }
        if (this.#hasDisposeAfter && this.#disposed?.length) {
            const dt = this.#disposed;
            let task;
            while ((task = dt?.shift())) {
                this.#disposeAfter?.(...task);
            }
        }
        return deleted;
    }
    clear() {
        for (const index of this.#rindexes({ allowStale: true })) {
            const v = this.#valList[index];
            if (this.#isBackgroundFetch(v)) {
                v.__abortController.abort(new Error('deleted'));
            }
            else {
                const k = this.#keyList[index];
                if (this.#hasDispose) {
                    this.#dispose?.(v, k, 'delete');
                }
                if (this.#hasDisposeAfter) {
                    this.#disposed?.push([v, k, 'delete']);
                }
            }
        }
        this.#keyMap.clear();
        this.#valList.fill(undefined);
        this.#keyList.fill(undefined);
        if (this.#ttls && this.#starts) {
            this.#ttls.fill(0);
            this.#starts.fill(0);
        }
        if (this.#sizes) {
            this.#sizes.fill(0);
        }
        this.#head = 0;
        this.#tail = 0;
        this.#free.length = 0;
        this.#calculatedSize = 0;
        this.#size = 0;
        if (this.#hasDisposeAfter && this.#disposed) {
            const dt = this.#disposed;
            let task;
            while ((task = dt?.shift())) {
                this.#disposeAfter?.(...task);
            }
        }
    }
};
commonjs.LRUCache = LRUCache$1;
const maybeJoin = (...args) => args.every(arg => arg) ? args.join('') : '';
const maybeEncode = (arg) => arg ? encodeURIComponent(arg) : '';
const formatHashFragment = (f) => f.toLowerCase().replace(/^\W+|\/|\W+$/g, '').replace(/\W+/g, '-');
const defaults = {
  sshtemplate: ({ domain, user, project, committish }) =>
    `git@${domain}:${user}/${project}.git${maybeJoin('#', committish)}`,
  sshurltemplate: ({ domain, user, project, committish }) =>
    `git+ssh://git@${domain}/${user}/${project}.git${maybeJoin('#', committish)}`,
  edittemplate: ({ domain, user, project, committish, editpath, path }) =>
    `https://${domain}/${user}/${project}${maybeJoin('/', editpath, '/', maybeEncode(committish || 'HEAD'), '/', path)}`,
  browsetemplate: ({ domain, user, project, committish, treepath }) =>
    `https://${domain}/${user}/${project}${maybeJoin('/', treepath, '/', maybeEncode(committish))}`,
  browsetreetemplate: ({ domain, user, project, committish, treepath, path, fragment, hashformat }) =>
    `https://${domain}/${user}/${project}/${treepath}/${maybeEncode(committish || 'HEAD')}/${path}${maybeJoin('#', hashformat(fragment || ''))}`,
  browseblobtemplate: ({ domain, user, project, committish, blobpath, path, fragment, hashformat }) =>
    `https://${domain}/${user}/${project}/${blobpath}/${maybeEncode(committish || 'HEAD')}/${path}${maybeJoin('#', hashformat(fragment || ''))}`,
  docstemplate: ({ domain, user, project, treepath, committish }) =>
    `https://${domain}/${user}/${project}${maybeJoin('/', treepath, '/', maybeEncode(committish))}#readme`,
  httpstemplate: ({ auth, domain, user, project, committish }) =>
    `git+https://${maybeJoin(auth, '@')}${domain}/${user}/${project}.git${maybeJoin('#', committish)}`,
  filetemplate: ({ domain, user, project, committish, path }) =>
    `https://${domain}/${user}/${project}/raw/${maybeEncode(committish || 'HEAD')}/${path}`,
  shortcuttemplate: ({ type, user, project, committish }) =>
    `${type}:${user}/${project}${maybeJoin('#', committish)}`,
  pathtemplate: ({ user, project, committish }) =>
    `${user}/${project}${maybeJoin('#', committish)}`,
  bugstemplate: ({ domain, user, project }) =>
    `https://${domain}/${user}/${project}/issues`,
  hashformat: formatHashFragment,
};
const hosts$1 = {};
hosts$1.github = {
  protocols: ['git:', 'http:', 'git+ssh:', 'git+https:', 'ssh:', 'https:'],
  domain: 'github.com',
  treepath: 'tree',
  blobpath: 'blob',
  editpath: 'edit',
  filetemplate: ({ auth, user, project, committish, path }) =>
    `https://${maybeJoin(auth, '@')}raw.githubusercontent.com/${user}/${project}/${maybeEncode(committish || 'HEAD')}/${path}`,
  gittemplate: ({ auth, domain, user, project, committish }) =>
    `git://${maybeJoin(auth, '@')}${domain}/${user}/${project}.git${maybeJoin('#', committish)}`,
  tarballtemplate: ({ domain, user, project, committish }) =>
    `https://codeload.${domain}/${user}/${project}/tar.gz/${maybeEncode(committish || 'HEAD')}`,
  extract: (url) => {
    let [, user, project, type, committish] = url.pathname.split('/', 5);
    if (type && type !== 'tree') {
      return
    }
    if (!type) {
      committish = url.hash.slice(1);
    }
    if (project && project.endsWith('.git')) {
      project = project.slice(0, -4);
    }
    if (!user || !project) {
      return
    }
    return { user, project, committish }
  },
};
hosts$1.bitbucket = {
  protocols: ['git+ssh:', 'git+https:', 'ssh:', 'https:'],
  domain: 'bitbucket.org',
  treepath: 'src',
  blobpath: 'src',
  editpath: '?mode=edit',
  edittemplate: ({ domain, user, project, committish, treepath, path, editpath }) =>
    `https://${domain}/${user}/${project}${maybeJoin('/', treepath, '/', maybeEncode(committish || 'HEAD'), '/', path, editpath)}`,
  tarballtemplate: ({ domain, user, project, committish }) =>
    `https://${domain}/${user}/${project}/get/${maybeEncode(committish || 'HEAD')}.tar.gz`,
  extract: (url) => {
    let [, user, project, aux] = url.pathname.split('/', 4);
    if (['get'].includes(aux)) {
      return
    }
    if (project && project.endsWith('.git')) {
      project = project.slice(0, -4);
    }
    if (!user || !project) {
      return
    }
    return { user, project, committish: url.hash.slice(1) }
  },
};
hosts$1.gitlab = {
  protocols: ['git+ssh:', 'git+https:', 'ssh:', 'https:'],
  domain: 'gitlab.com',
  treepath: 'tree',
  blobpath: 'tree',
  editpath: '-/edit',
  httpstemplate: ({ auth, domain, user, project, committish }) =>
    `git+https://${maybeJoin(auth, '@')}${domain}/${user}/${project}.git${maybeJoin('#', committish)}`,
  tarballtemplate: ({ domain, user, project, committish }) =>
    `https://${domain}/${user}/${project}/repository/archive.tar.gz?ref=${maybeEncode(committish || 'HEAD')}`,
  extract: (url) => {
    const path = url.pathname.slice(1);
    if (path.includes('/-/') || path.includes('/archive.tar.gz')) {
      return
    }
    const segments = path.split('/');
    let project = segments.pop();
    if (project.endsWith('.git')) {
      project = project.slice(0, -4);
    }
    const user = segments.join('/');
    if (!user || !project) {
      return
    }
    return { user, project, committish: url.hash.slice(1) }
  },
};
hosts$1.gist = {
  protocols: ['git:', 'git+ssh:', 'git+https:', 'ssh:', 'https:'],
  domain: 'gist.github.com',
  editpath: 'edit',
  sshtemplate: ({ domain, project, committish }) =>
    `git@${domain}:${project}.git${maybeJoin('#', committish)}`,
  sshurltemplate: ({ domain, project, committish }) =>
    `git+ssh://git@${domain}/${project}.git${maybeJoin('#', committish)}`,
  edittemplate: ({ domain, user, project, committish, editpath }) =>
    `https://${domain}/${user}/${project}${maybeJoin('/', maybeEncode(committish))}/${editpath}`,
  browsetemplate: ({ domain, project, committish }) =>
    `https://${domain}/${project}${maybeJoin('/', maybeEncode(committish))}`,
  browsetreetemplate: ({ domain, project, committish, path, hashformat }) =>
    `https://${domain}/${project}${maybeJoin('/', maybeEncode(committish))}${maybeJoin('#', hashformat(path))}`,
  browseblobtemplate: ({ domain, project, committish, path, hashformat }) =>
    `https://${domain}/${project}${maybeJoin('/', maybeEncode(committish))}${maybeJoin('#', hashformat(path))}`,
  docstemplate: ({ domain, project, committish }) =>
    `https://${domain}/${project}${maybeJoin('/', maybeEncode(committish))}`,
  httpstemplate: ({ domain, project, committish }) =>
    `git+https://${domain}/${project}.git${maybeJoin('#', committish)}`,
  filetemplate: ({ user, project, committish, path }) =>
    `https://gist.githubusercontent.com/${user}/${project}/raw${maybeJoin('/', maybeEncode(committish))}/${path}`,
  shortcuttemplate: ({ type, project, committish }) =>
    `${type}:${project}${maybeJoin('#', committish)}`,
  pathtemplate: ({ project, committish }) =>
    `${project}${maybeJoin('#', committish)}`,
  bugstemplate: ({ domain, project }) =>
    `https://${domain}/${project}`,
  gittemplate: ({ domain, project, committish }) =>
    `git://${domain}/${project}.git${maybeJoin('#', committish)}`,
  tarballtemplate: ({ project, committish }) =>
    `https://codeload.github.com/gist/${project}/tar.gz/${maybeEncode(committish || 'HEAD')}`,
  extract: (url) => {
    let [, user, project, aux] = url.pathname.split('/', 4);
    if (aux === 'raw') {
      return
    }
    if (!project) {
      if (!user) {
        return
      }
      project = user;
      user = null;
    }
    if (project.endsWith('.git')) {
      project = project.slice(0, -4);
    }
    return { user, project, committish: url.hash.slice(1) }
  },
  hashformat: function (fragment) {
    return fragment && 'file-' + formatHashFragment(fragment)
  },
};
hosts$1.sourcehut = {
  protocols: ['git+ssh:', 'https:'],
  domain: 'git.sr.ht',
  treepath: 'tree',
  blobpath: 'tree',
  filetemplate: ({ domain, user, project, committish, path }) =>
    `https://${domain}/${user}/${project}/blob/${maybeEncode(committish) || 'HEAD'}/${path}`,
  httpstemplate: ({ domain, user, project, committish }) =>
    `https://${domain}/${user}/${project}.git${maybeJoin('#', committish)}`,
  tarballtemplate: ({ domain, user, project, committish }) =>
    `https://${domain}/${user}/${project}/archive/${maybeEncode(committish) || 'HEAD'}.tar.gz`,
  bugstemplate: ({ user, project }) => null,
  extract: (url) => {
    let [, user, project, aux] = url.pathname.split('/', 4);
    if (['archive'].includes(aux)) {
      return
    }
    if (project && project.endsWith('.git')) {
      project = project.slice(0, -4);
    }
    if (!user || !project) {
      return
    }
    return { user, project, committish: url.hash.slice(1) }
  },
};
for (const [name, host] of Object.entries(hosts$1)) {
  hosts$1[name] = Object.assign({}, defaults, host);
}
var hosts_1 = hosts$1;
const url$2 = require$$0;
const lastIndexOfBefore = (str, char, beforeChar) => {
  const startPosition = str.indexOf(beforeChar);
  return str.lastIndexOf(char, startPosition > -1 ? startPosition : Infinity)
};
const safeUrl = (u) => {
  try {
    return new url$2.URL(u)
  } catch {
  }
};
const correctProtocol = (arg, protocols) => {
  const firstColon = arg.indexOf(':');
  const proto = arg.slice(0, firstColon + 1);
  if (Object.prototype.hasOwnProperty.call(protocols, proto)) {
    return arg
  }
  const firstAt = arg.indexOf('@');
  if (firstAt > -1) {
    if (firstAt > firstColon) {
      return `git+ssh://${arg}`
    } else {
      return arg
    }
  }
  const doubleSlash = arg.indexOf('//');
  if (doubleSlash === firstColon + 1) {
    return arg
  }
  return `${arg.slice(0, firstColon + 1)}//${arg.slice(firstColon + 1)}`
};
const correctUrl = (giturl) => {
  const firstAt = lastIndexOfBefore(giturl, '@', '#');
  const lastColonBeforeHash = lastIndexOfBefore(giturl, ':', '#');
  if (lastColonBeforeHash > firstAt) {
    giturl = giturl.slice(0, lastColonBeforeHash) + '/' + giturl.slice(lastColonBeforeHash + 1);
  }
  if (lastIndexOfBefore(giturl, ':', '#') === -1 && giturl.indexOf('//') === -1) {
    giturl = `git+ssh://${giturl}`;
  }
  return giturl
};
var parseUrl$2 = (giturl, protocols) => {
  const withProtocol = protocols ? correctProtocol(giturl, protocols) : giturl;
  return safeUrl(withProtocol) || safeUrl(correctUrl(withProtocol))
};
const parseUrl$1 = parseUrl$2;
const isGitHubShorthand = (arg) => {
  const firstHash = arg.indexOf('#');
  const firstSlash = arg.indexOf('/');
  const secondSlash = arg.indexOf('/', firstSlash + 1);
  const firstColon = arg.indexOf(':');
  const firstSpace = /\s/.exec(arg);
  const firstAt = arg.indexOf('@');
  const spaceOnlyAfterHash = !firstSpace || (firstHash > -1 && firstSpace.index > firstHash);
  const atOnlyAfterHash = firstAt === -1 || (firstHash > -1 && firstAt > firstHash);
  const colonOnlyAfterHash = firstColon === -1 || (firstHash > -1 && firstColon > firstHash);
  const secondSlashOnlyAfterHash = secondSlash === -1 || (firstHash > -1 && secondSlash > firstHash);
  const hasSlash = firstSlash > 0;
  const doesNotEndWithSlash = firstHash > -1 ? arg[firstHash - 1] !== '/' : !arg.endsWith('/');
  const doesNotStartWithDot = !arg.startsWith('.');
  return spaceOnlyAfterHash && hasSlash && doesNotEndWithSlash &&
    doesNotStartWithDot && atOnlyAfterHash && colonOnlyAfterHash &&
    secondSlashOnlyAfterHash
};
var fromUrl$1 = (giturl, opts, { gitHosts, protocols }) => {
  if (!giturl) {
    return
  }
  const correctedUrl = isGitHubShorthand(giturl) ? `github:${giturl}` : giturl;
  const parsed = parseUrl$1(correctedUrl, protocols);
  if (!parsed) {
    return
  }
  const gitHostShortcut = gitHosts.byShortcut[parsed.protocol];
  const gitHostDomain = gitHosts.byDomain[parsed.hostname.startsWith('www.')
    ? parsed.hostname.slice(4)
    : parsed.hostname];
  const gitHostName = gitHostShortcut || gitHostDomain;
  if (!gitHostName) {
    return
  }
  const gitHostInfo = gitHosts[gitHostShortcut || gitHostDomain];
  let auth = null;
  if (protocols[parsed.protocol]?.auth && (parsed.username || parsed.password)) {
    auth = `${parsed.username}${parsed.password ? ':' + parsed.password : ''}`;
  }
  let committish = null;
  let user = null;
  let project = null;
  let defaultRepresentation = null;
  try {
    if (gitHostShortcut) {
      let pathname = parsed.pathname.startsWith('/') ? parsed.pathname.slice(1) : parsed.pathname;
      const firstAt = pathname.indexOf('@');
      if (firstAt > -1) {
        pathname = pathname.slice(firstAt + 1);
      }
      const lastSlash = pathname.lastIndexOf('/');
      if (lastSlash > -1) {
        user = decodeURIComponent(pathname.slice(0, lastSlash));
        if (!user) {
          user = null;
        }
        project = decodeURIComponent(pathname.slice(lastSlash + 1));
      } else {
        project = decodeURIComponent(pathname);
      }
      if (project.endsWith('.git')) {
        project = project.slice(0, -4);
      }
      if (parsed.hash) {
        committish = decodeURIComponent(parsed.hash.slice(1));
      }
      defaultRepresentation = 'shortcut';
    } else {
      if (!gitHostInfo.protocols.includes(parsed.protocol)) {
        return
      }
      const segments = gitHostInfo.extract(parsed);
      if (!segments) {
        return
      }
      user = segments.user && decodeURIComponent(segments.user);
      project = decodeURIComponent(segments.project);
      committish = decodeURIComponent(segments.committish);
      defaultRepresentation = protocols[parsed.protocol]?.name || parsed.protocol.slice(0, -1);
    }
  } catch (err) {
    if (err instanceof URIError) {
      return
    } else {
      throw err
    }
  }
  return [gitHostName, user, auth, project, committish, defaultRepresentation, opts]
};
const { LRUCache } = commonjs;
const hosts = hosts_1;
const fromUrl = fromUrl$1;
const parseUrl = parseUrl$2;
const cache$1 = new LRUCache({ max: 1000 });
class GitHost {
  constructor (type, user, auth, project, committish, defaultRepresentation, opts = {}) {
    Object.assign(this, GitHost.#gitHosts[type], {
      type,
      user,
      auth,
      project,
      committish,
      default: defaultRepresentation,
      opts,
    });
  }
  static #gitHosts = { byShortcut: {}, byDomain: {} }
  static #protocols = {
    'git+ssh:': { name: 'sshurl' },
    'ssh:': { name: 'sshurl' },
    'git+https:': { name: 'https', auth: true },
    'git:': { auth: true },
    'http:': { auth: true },
    'https:': { auth: true },
    'git+http:': { auth: true },
  }
  static addHost (name, host) {
    GitHost.#gitHosts[name] = host;
    GitHost.#gitHosts.byDomain[host.domain] = name;
    GitHost.#gitHosts.byShortcut[`${name}:`] = name;
    GitHost.#protocols[`${name}:`] = { name };
  }
  static fromUrl (giturl, opts) {
    if (typeof giturl !== 'string') {
      return
    }
    const key = giturl + JSON.stringify(opts || {});
    if (!cache$1.has(key)) {
      const hostArgs = fromUrl(giturl, opts, {
        gitHosts: GitHost.#gitHosts,
        protocols: GitHost.#protocols,
      });
      cache$1.set(key, hostArgs ? new GitHost(...hostArgs) : undefined);
    }
    return cache$1.get(key)
  }
  static parseUrl (url) {
    return parseUrl(url)
  }
  #fill (template, opts) {
    if (typeof template !== 'function') {
      return null
    }
    const options = { ...this, ...this.opts, ...opts };
    if (!options.path) {
      options.path = '';
    }
    if (options.path.startsWith('/')) {
      options.path = options.path.slice(1);
    }
    if (options.noCommittish) {
      options.committish = null;
    }
    const result = template(options);
    return options.noGitPlus && result.startsWith('git+') ? result.slice(4) : result
  }
  hash () {
    return this.committish ? `#${this.committish}` : ''
  }
  ssh (opts) {
    return this.#fill(this.sshtemplate, opts)
  }
  sshurl (opts) {
    return this.#fill(this.sshurltemplate, opts)
  }
  browse (path, ...args) {
    if (typeof path !== 'string') {
      return this.#fill(this.browsetemplate, path)
    }
    if (typeof args[0] !== 'string') {
      return this.#fill(this.browsetreetemplate, { ...args[0], path })
    }
    return this.#fill(this.browsetreetemplate, { ...args[1], fragment: args[0], path })
  }
  browseFile (path, ...args) {
    if (typeof args[0] !== 'string') {
      return this.#fill(this.browseblobtemplate, { ...args[0], path })
    }
    return this.#fill(this.browseblobtemplate, { ...args[1], fragment: args[0], path })
  }
  docs (opts) {
    return this.#fill(this.docstemplate, opts)
  }
  bugs (opts) {
    return this.#fill(this.bugstemplate, opts)
  }
  https (opts) {
    return this.#fill(this.httpstemplate, opts)
  }
  git (opts) {
    return this.#fill(this.gittemplate, opts)
  }
  shortcut (opts) {
    return this.#fill(this.shortcuttemplate, opts)
  }
  path (opts) {
    return this.#fill(this.pathtemplate, opts)
  }
  tarball (opts) {
    return this.#fill(this.tarballtemplate, { ...opts, noCommittish: false })
  }
  file (path, opts) {
    return this.#fill(this.filetemplate, { ...opts, path })
  }
  edit (path, opts) {
    return this.#fill(this.edittemplate, { ...opts, path })
  }
  getDefaultRepresentation () {
    return this.default
  }
  toString (opts) {
    if (this.default && typeof this[this.default] === 'function') {
      return this[this.default](opts)
    }
    return this.sshurl(opts)
  }
}
for (const [name, host] of Object.entries(hosts)) {
  GitHost.addHost(name, host);
}
var lib$3 = GitHost;
var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = '[object Function]';
var concatty = function concatty(a, b) {
    var arr = [];
    for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
    }
    for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
    }
    return arr;
};
var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
    }
    return arr;
};
var joiny = function (arr, joiner) {
    var str = '';
    for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
            str += joiner;
        }
    }
    return str;
};
var implementation$1 = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);
    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                concatty(args, arguments)
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        return target.apply(
            that,
            concatty(args, arguments)
        );
    };
    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = '$' + i;
    }
    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};
var implementation = implementation$1;
var functionBind = Function.prototype.bind || implementation;
var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = functionBind;
var hasown = bind.call(call, $hasOwn);
var assert = true;
var async_hooks = ">= 8";
var buffer_ieee754 = ">= 0.5 && < 0.9.7";
var buffer = true;
var child_process = true;
var cluster = ">= 0.5";
var console$1 = true;
var constants = true;
var crypto = true;
var _debug_agent = ">= 1 && < 8";
var _debugger = "< 8";
var dgram = true;
var diagnostics_channel = [
	">= 14.17 && < 15",
	">= 15.1"
];
var dns = true;
var domain = ">= 0.7.12";
var events = true;
var freelist = "< 6";
var fs = true;
var _http_agent = ">= 0.11.1";
var _http_client = ">= 0.11.1";
var _http_common = ">= 0.11.1";
var _http_incoming = ">= 0.11.1";
var _http_outgoing = ">= 0.11.1";
var _http_server = ">= 0.11.1";
var http = true;
var http2 = ">= 8.8";
var https = true;
var inspector = ">= 8";
var _linklist = "< 8";
var module = true;
var net = true;
var os$2 = true;
var path = true;
var perf_hooks = ">= 8.5";
var process$1 = ">= 1";
var punycode = ">= 0.5";
var querystring = true;
var readline = true;
var repl = true;
var smalloc = ">= 0.11.5 && < 3";
var _stream_duplex = ">= 0.9.4";
var _stream_transform = ">= 0.9.4";
var _stream_wrap = ">= 1.4.1";
var _stream_passthrough = ">= 0.9.4";
var _stream_readable = ">= 0.9.4";
var _stream_writable = ">= 0.9.4";
var stream = true;
var string_decoder = true;
var sys = [
	">= 0.4 && < 0.7",
	">= 0.8"
];
var timers = true;
var _tls_common = ">= 0.11.13";
var _tls_legacy = ">= 0.11.3 && < 10";
var _tls_wrap = ">= 0.11.3";
var tls = true;
var trace_events = ">= 10";
var tty = true;
var url$1 = true;
var util$1 = true;
var v8 = ">= 1";
var vm = true;
var wasi = [
	">= 13.4 && < 13.5",
	">= 18.17 && < 19",
	">= 20"
];
var worker_threads = ">= 11.7";
var zlib = ">= 0.5";
const require$$1$1 = {
	assert: assert,
	"node:assert": [
	">= 14.18 && < 15",
	">= 16"
],
	"assert/strict": ">= 15",
	"node:assert/strict": ">= 16",
	async_hooks: async_hooks,
	"node:async_hooks": [
	">= 14.18 && < 15",
	">= 16"
],
	buffer_ieee754: buffer_ieee754,
	buffer: buffer,
	"node:buffer": [
	">= 14.18 && < 15",
	">= 16"
],
	child_process: child_process,
	"node:child_process": [
	">= 14.18 && < 15",
	">= 16"
],
	cluster: cluster,
	"node:cluster": [
	">= 14.18 && < 15",
	">= 16"
],
	console: console$1,
	"node:console": [
	">= 14.18 && < 15",
	">= 16"
],
	constants: constants,
	"node:constants": [
	">= 14.18 && < 15",
	">= 16"
],
	crypto: crypto,
	"node:crypto": [
	">= 14.18 && < 15",
	">= 16"
],
	_debug_agent: _debug_agent,
	_debugger: _debugger,
	dgram: dgram,
	"node:dgram": [
	">= 14.18 && < 15",
	">= 16"
],
	diagnostics_channel: diagnostics_channel,
	"node:diagnostics_channel": [
	">= 14.18 && < 15",
	">= 16"
],
	dns: dns,
	"node:dns": [
	">= 14.18 && < 15",
	">= 16"
],
	"dns/promises": ">= 15",
	"node:dns/promises": ">= 16",
	domain: domain,
	"node:domain": [
	">= 14.18 && < 15",
	">= 16"
],
	events: events,
	"node:events": [
	">= 14.18 && < 15",
	">= 16"
],
	freelist: freelist,
	fs: fs,
	"node:fs": [
	">= 14.18 && < 15",
	">= 16"
],
	"fs/promises": [
	">= 10 && < 10.1",
	">= 14"
],
	"node:fs/promises": [
	">= 14.18 && < 15",
	">= 16"
],
	_http_agent: _http_agent,
	"node:_http_agent": [
	">= 14.18 && < 15",
	">= 16"
],
	_http_client: _http_client,
	"node:_http_client": [
	">= 14.18 && < 15",
	">= 16"
],
	_http_common: _http_common,
	"node:_http_common": [
	">= 14.18 && < 15",
	">= 16"
],
	_http_incoming: _http_incoming,
	"node:_http_incoming": [
	">= 14.18 && < 15",
	">= 16"
],
	_http_outgoing: _http_outgoing,
	"node:_http_outgoing": [
	">= 14.18 && < 15",
	">= 16"
],
	_http_server: _http_server,
	"node:_http_server": [
	">= 14.18 && < 15",
	">= 16"
],
	http: http,
	"node:http": [
	">= 14.18 && < 15",
	">= 16"
],
	http2: http2,
	"node:http2": [
	">= 14.18 && < 15",
	">= 16"
],
	https: https,
	"node:https": [
	">= 14.18 && < 15",
	">= 16"
],
	inspector: inspector,
	"node:inspector": [
	">= 14.18 && < 15",
	">= 16"
],
	"inspector/promises": [
	">= 19"
],
	"node:inspector/promises": [
	">= 19"
],
	_linklist: _linklist,
	module: module,
	"node:module": [
	">= 14.18 && < 15",
	">= 16"
],
	net: net,
	"node:net": [
	">= 14.18 && < 15",
	">= 16"
],
	"node-inspect/lib/_inspect": ">= 7.6 && < 12",
	"node-inspect/lib/internal/inspect_client": ">= 7.6 && < 12",
	"node-inspect/lib/internal/inspect_repl": ">= 7.6 && < 12",
	os: os$2,
	"node:os": [
	">= 14.18 && < 15",
	">= 16"
],
	path: path,
	"node:path": [
	">= 14.18 && < 15",
	">= 16"
],
	"path/posix": ">= 15.3",
	"node:path/posix": ">= 16",
	"path/win32": ">= 15.3",
	"node:path/win32": ">= 16",
	perf_hooks: perf_hooks,
	"node:perf_hooks": [
	">= 14.18 && < 15",
	">= 16"
],
	process: process$1,
	"node:process": [
	">= 14.18 && < 15",
	">= 16"
],
	punycode: punycode,
	"node:punycode": [
	">= 14.18 && < 15",
	">= 16"
],
	querystring: querystring,
	"node:querystring": [
	">= 14.18 && < 15",
	">= 16"
],
	readline: readline,
	"node:readline": [
	">= 14.18 && < 15",
	">= 16"
],
	"readline/promises": ">= 17",
	"node:readline/promises": ">= 17",
	repl: repl,
	"node:repl": [
	">= 14.18 && < 15",
	">= 16"
],
	smalloc: smalloc,
	_stream_duplex: _stream_duplex,
	"node:_stream_duplex": [
	">= 14.18 && < 15",
	">= 16"
],
	_stream_transform: _stream_transform,
	"node:_stream_transform": [
	">= 14.18 && < 15",
	">= 16"
],
	_stream_wrap: _stream_wrap,
	"node:_stream_wrap": [
	">= 14.18 && < 15",
	">= 16"
],
	_stream_passthrough: _stream_passthrough,
	"node:_stream_passthrough": [
	">= 14.18 && < 15",
	">= 16"
],
	_stream_readable: _stream_readable,
	"node:_stream_readable": [
	">= 14.18 && < 15",
	">= 16"
],
	_stream_writable: _stream_writable,
	"node:_stream_writable": [
	">= 14.18 && < 15",
	">= 16"
],
	stream: stream,
	"node:stream": [
	">= 14.18 && < 15",
	">= 16"
],
	"stream/consumers": ">= 16.7",
	"node:stream/consumers": ">= 16.7",
	"stream/promises": ">= 15",
	"node:stream/promises": ">= 16",
	"stream/web": ">= 16.5",
	"node:stream/web": ">= 16.5",
	string_decoder: string_decoder,
	"node:string_decoder": [
	">= 14.18 && < 15",
	">= 16"
],
	sys: sys,
	"node:sys": [
	">= 14.18 && < 15",
	">= 16"
],
	"test/reporters": ">= 19.9 && < 20.2",
	"node:test/reporters": [
	">= 18.17 && < 19",
	">= 19.9",
	">= 20"
],
	"node:test": [
	">= 16.17 && < 17",
	">= 18"
],
	timers: timers,
	"node:timers": [
	">= 14.18 && < 15",
	">= 16"
],
	"timers/promises": ">= 15",
	"node:timers/promises": ">= 16",
	_tls_common: _tls_common,
	"node:_tls_common": [
	">= 14.18 && < 15",
	">= 16"
],
	_tls_legacy: _tls_legacy,
	_tls_wrap: _tls_wrap,
	"node:_tls_wrap": [
	">= 14.18 && < 15",
	">= 16"
],
	tls: tls,
	"node:tls": [
	">= 14.18 && < 15",
	">= 16"
],
	trace_events: trace_events,
	"node:trace_events": [
	">= 14.18 && < 15",
	">= 16"
],
	tty: tty,
	"node:tty": [
	">= 14.18 && < 15",
	">= 16"
],
	url: url$1,
	"node:url": [
	">= 14.18 && < 15",
	">= 16"
],
	util: util$1,
	"node:util": [
	">= 14.18 && < 15",
	">= 16"
],
	"util/types": ">= 15.3",
	"node:util/types": ">= 16",
	"v8/tools/arguments": ">= 10 && < 12",
	"v8/tools/codemap": [
	">= 4.4 && < 5",
	">= 5.2 && < 12"
],
	"v8/tools/consarray": [
	">= 4.4 && < 5",
	">= 5.2 && < 12"
],
	"v8/tools/csvparser": [
	">= 4.4 && < 5",
	">= 5.2 && < 12"
],
	"v8/tools/logreader": [
	">= 4.4 && < 5",
	">= 5.2 && < 12"
],
	"v8/tools/profile_view": [
	">= 4.4 && < 5",
	">= 5.2 && < 12"
],
	"v8/tools/splaytree": [
	">= 4.4 && < 5",
	">= 5.2 && < 12"
],
	v8: v8,
	"node:v8": [
	">= 14.18 && < 15",
	">= 16"
],
	vm: vm,
	"node:vm": [
	">= 14.18 && < 15",
	">= 16"
],
	wasi: wasi,
	"node:wasi": [
	">= 18.17 && < 19",
	">= 20"
],
	worker_threads: worker_threads,
	"node:worker_threads": [
	">= 14.18 && < 15",
	">= 16"
],
	zlib: zlib,
	"node:zlib": [
	">= 14.18 && < 15",
	">= 16"
]
};
var hasOwn = hasown;
function specifierIncluded(current, specifier) {
	var nodeParts = current.split('.');
	var parts = specifier.split(' ');
	var op = parts.length > 1 ? parts[0] : '=';
	var versionParts = (parts.length > 1 ? parts[1] : parts[0]).split('.');
	for (var i = 0; i < 3; ++i) {
		var cur = parseInt(nodeParts[i] || 0, 10);
		var ver = parseInt(versionParts[i] || 0, 10);
		if (cur === ver) {
			continue; 
		}
		if (op === '<') {
			return cur < ver;
		}
		if (op === '>=') {
			return cur >= ver;
		}
		return false;
	}
	return op === '>=';
}
function matchesRange(current, range) {
	var specifiers = range.split(/ ?&& ?/);
	if (specifiers.length === 0) {
		return false;
	}
	for (var i = 0; i < specifiers.length; ++i) {
		if (!specifierIncluded(current, specifiers[i])) {
			return false;
		}
	}
	return true;
}
function versionIncluded(nodeVersion, specifierValue) {
	if (typeof specifierValue === 'boolean') {
		return specifierValue;
	}
	var current = typeof nodeVersion === 'undefined'
		? process.versions && process.versions.node
		: nodeVersion;
	if (typeof current !== 'string') {
		throw new TypeError(typeof nodeVersion === 'undefined' ? 'Unable to determine current node version' : 'If provided, a valid node version is required');
	}
	if (specifierValue && typeof specifierValue === 'object') {
		for (var i = 0; i < specifierValue.length; ++i) {
			if (matchesRange(current, specifierValue[i])) {
				return true;
			}
		}
		return false;
	}
	return matchesRange(current, specifierValue);
}
var data = require$$1$1;
var isCoreModule = function isCore(x, nodeVersion) {
	return hasOwn(data, x) && versionIncluded(nodeVersion, data[x]);
};
var extract_description = extractDescription$1;
function extractDescription$1 (d) {
  if (!d) {
    return
  }
  if (d === 'ERROR: No README data found!') {
    return
  }
  d = d.trim().split('\n');
  let s = 0;
  while (d[s] && d[s].trim().match(/^(#|$)/)) {
    s++;
  }
  const l = d.length;
  let e = s + 1;
  while (e < l && d[e].trim()) {
    e++;
  }
  return d.slice(s, e).join(' ').trim()
}
var topLevel = {
	dependancies: "dependencies",
	dependecies: "dependencies",
	depdenencies: "dependencies",
	devEependencies: "devDependencies",
	depends: "dependencies",
	"dev-dependencies": "devDependencies",
	devDependences: "devDependencies",
	devDepenencies: "devDependencies",
	devdependencies: "devDependencies",
	repostitory: "repository",
	repo: "repository",
	prefereGlobal: "preferGlobal",
	hompage: "homepage",
	hampage: "homepage",
	autohr: "author",
	autor: "author",
	contributers: "contributors",
	publicationConfig: "publishConfig",
	script: "scripts"
};
var bugs = {
	web: "url",
	name: "url"
};
var script = {
	server: "start",
	tests: "test"
};
const require$$7 = {
	topLevel: topLevel,
	bugs: bugs,
	script: script
};
var isValidSemver = valid_1;
var cleanSemver = clean_1;
var validateLicense = validateNpmPackageLicense;
var hostedGitInfo = lib$3;
var isBuiltinModule = isCoreModule;
var depTypes = ['dependencies', 'devDependencies', 'optionalDependencies'];
var extractDescription = extract_description;
var url = require$$0;
var typos = require$$7;
var isEmail = str => str.includes('@') && (str.indexOf('@') < str.lastIndexOf('.'));
var fixer$1 = {
  warn: function () {},
  fixRepositoryField: function (data) {
    if (data.repositories) {
      this.warn('repositories');
      data.repository = data.repositories[0];
    }
    if (!data.repository) {
      return this.warn('missingRepository')
    }
    if (typeof data.repository === 'string') {
      data.repository = {
        type: 'git',
        url: data.repository,
      };
    }
    var r = data.repository.url || '';
    if (r) {
      var hosted = hostedGitInfo.fromUrl(r);
      if (hosted) {
        r = data.repository.url
          = hosted.getDefaultRepresentation() === 'shortcut' ? hosted.https() : hosted.toString();
      }
    }
    if (r.match(/github.com\/[^/]+\/[^/]+\.git\.git$/)) {
      this.warn('brokenGitUrl', r);
    }
  },
  fixTypos: function (data) {
    Object.keys(typos.topLevel).forEach(function (d) {
      if (Object.prototype.hasOwnProperty.call(data, d)) {
        this.warn('typo', d, typos.topLevel[d]);
      }
    }, this);
  },
  fixScriptsField: function (data) {
    if (!data.scripts) {
      return
    }
    if (typeof data.scripts !== 'object') {
      this.warn('nonObjectScripts');
      delete data.scripts;
      return
    }
    Object.keys(data.scripts).forEach(function (k) {
      if (typeof data.scripts[k] !== 'string') {
        this.warn('nonStringScript');
        delete data.scripts[k];
      } else if (typos.script[k] && !data.scripts[typos.script[k]]) {
        this.warn('typo', k, typos.script[k], 'scripts');
      }
    }, this);
  },
  fixFilesField: function (data) {
    var files = data.files;
    if (files && !Array.isArray(files)) {
      this.warn('nonArrayFiles');
      delete data.files;
    } else if (data.files) {
      data.files = data.files.filter(function (file) {
        if (!file || typeof file !== 'string') {
          this.warn('invalidFilename', file);
          return false
        } else {
          return true
        }
      }, this);
    }
  },
  fixBinField: function (data) {
    if (!data.bin) {
      return
    }
    if (typeof data.bin === 'string') {
      var b = {};
      var match;
      if (match = data.name.match(/^@[^/]+[/](.*)$/)) {
        b[match[1]] = data.bin;
      } else {
        b[data.name] = data.bin;
      }
      data.bin = b;
    }
  },
  fixManField: function (data) {
    if (!data.man) {
      return
    }
    if (typeof data.man === 'string') {
      data.man = [data.man];
    }
  },
  fixBundleDependenciesField: function (data) {
    var bdd = 'bundledDependencies';
    var bd = 'bundleDependencies';
    if (data[bdd] && !data[bd]) {
      data[bd] = data[bdd];
      delete data[bdd];
    }
    if (data[bd] && !Array.isArray(data[bd])) {
      this.warn('nonArrayBundleDependencies');
      delete data[bd];
    } else if (data[bd]) {
      data[bd] = data[bd].filter(function (filtered) {
        if (!filtered || typeof filtered !== 'string') {
          this.warn('nonStringBundleDependency', filtered);
          return false
        } else {
          if (!data.dependencies) {
            data.dependencies = {};
          }
          if (!Object.prototype.hasOwnProperty.call(data.dependencies, filtered)) {
            this.warn('nonDependencyBundleDependency', filtered);
            data.dependencies[filtered] = '*';
          }
          return true
        }
      }, this);
    }
  },
  fixDependencies: function (data, strict) {
    objectifyDeps(data, this.warn);
    addOptionalDepsToDeps(data, this.warn);
    this.fixBundleDependenciesField(data)
    ;['dependencies', 'devDependencies'].forEach(function (deps) {
      if (!(deps in data)) {
        return
      }
      if (!data[deps] || typeof data[deps] !== 'object') {
        this.warn('nonObjectDependencies', deps);
        delete data[deps];
        return
      }
      Object.keys(data[deps]).forEach(function (d) {
        var r = data[deps][d];
        if (typeof r !== 'string') {
          this.warn('nonStringDependency', d, JSON.stringify(r));
          delete data[deps][d];
        }
        var hosted = hostedGitInfo.fromUrl(data[deps][d]);
        if (hosted) {
          data[deps][d] = hosted.toString();
        }
      }, this);
    }, this);
  },
  fixModulesField: function (data) {
    if (data.modules) {
      this.warn('deprecatedModules');
      delete data.modules;
    }
  },
  fixKeywordsField: function (data) {
    if (typeof data.keywords === 'string') {
      data.keywords = data.keywords.split(/,\s+/);
    }
    if (data.keywords && !Array.isArray(data.keywords)) {
      delete data.keywords;
      this.warn('nonArrayKeywords');
    } else if (data.keywords) {
      data.keywords = data.keywords.filter(function (kw) {
        if (typeof kw !== 'string' || !kw) {
          this.warn('nonStringKeyword');
          return false
        } else {
          return true
        }
      }, this);
    }
  },
  fixVersionField: function (data, strict) {
    var loose = !strict;
    if (!data.version) {
      data.version = '';
      return true
    }
    if (!isValidSemver(data.version, loose)) {
      throw new Error('Invalid version: "' + data.version + '"')
    }
    data.version = cleanSemver(data.version, loose);
    return true
  },
  fixPeople: function (data) {
    modifyPeople(data, unParsePerson);
    modifyPeople(data, parsePerson);
  },
  fixNameField: function (data, options) {
    if (typeof options === 'boolean') {
      options = { strict: options };
    } else if (typeof options === 'undefined') {
      options = {};
    }
    var strict = options.strict;
    if (!data.name && !strict) {
      data.name = '';
      return
    }
    if (typeof data.name !== 'string') {
      throw new Error('name field must be a string.')
    }
    if (!strict) {
      data.name = data.name.trim();
    }
    ensureValidName(data.name, strict, options.allowLegacyCase);
    if (isBuiltinModule(data.name)) {
      this.warn('conflictingName', data.name);
    }
  },
  fixDescriptionField: function (data) {
    if (data.description && typeof data.description !== 'string') {
      this.warn('nonStringDescription');
      delete data.description;
    }
    if (data.readme && !data.description) {
      data.description = extractDescription(data.readme);
    }
    if (data.description === undefined) {
      delete data.description;
    }
    if (!data.description) {
      this.warn('missingDescription');
    }
  },
  fixReadmeField: function (data) {
    if (!data.readme) {
      this.warn('missingReadme');
      data.readme = 'ERROR: No README data found!';
    }
  },
  fixBugsField: function (data) {
    if (!data.bugs && data.repository && data.repository.url) {
      var hosted = hostedGitInfo.fromUrl(data.repository.url);
      if (hosted && hosted.bugs()) {
        data.bugs = { url: hosted.bugs() };
      }
    } else if (data.bugs) {
      if (typeof data.bugs === 'string') {
        if (isEmail(data.bugs)) {
          data.bugs = { email: data.bugs };
        } else if (url.parse(data.bugs).protocol) {
          data.bugs = { url: data.bugs };
        } else {
          this.warn('nonEmailUrlBugsString');
        }
      } else {
        bugsTypos(data.bugs, this.warn);
        var oldBugs = data.bugs;
        data.bugs = {};
        if (oldBugs.url) {
          if (typeof (oldBugs.url) === 'string' && url.parse(oldBugs.url).protocol) {
            data.bugs.url = oldBugs.url;
          } else {
            this.warn('nonUrlBugsUrlField');
          }
        }
        if (oldBugs.email) {
          if (typeof (oldBugs.email) === 'string' && isEmail(oldBugs.email)) {
            data.bugs.email = oldBugs.email;
          } else {
            this.warn('nonEmailBugsEmailField');
          }
        }
      }
      if (!data.bugs.email && !data.bugs.url) {
        delete data.bugs;
        this.warn('emptyNormalizedBugs');
      }
    }
  },
  fixHomepageField: function (data) {
    if (!data.homepage && data.repository && data.repository.url) {
      var hosted = hostedGitInfo.fromUrl(data.repository.url);
      if (hosted && hosted.docs()) {
        data.homepage = hosted.docs();
      }
    }
    if (!data.homepage) {
      return
    }
    if (typeof data.homepage !== 'string') {
      this.warn('nonUrlHomepage');
      return delete data.homepage
    }
    if (!url.parse(data.homepage).protocol) {
      data.homepage = 'http://' + data.homepage;
    }
  },
  fixLicenseField: function (data) {
    const license = data.license || data.licence;
    if (!license) {
      return this.warn('missingLicense')
    }
    if (
      typeof (license) !== 'string' ||
      license.length < 1 ||
      license.trim() === ''
    ) {
      return this.warn('invalidLicense')
    }
    if (!validateLicense(license).validForNewPackages) {
      return this.warn('invalidLicense')
    }
  },
};
function isValidScopedPackageName (spec) {
  if (spec.charAt(0) !== '@') {
    return false
  }
  var rest = spec.slice(1).split('/');
  if (rest.length !== 2) {
    return false
  }
  return rest[0] && rest[1] &&
    rest[0] === encodeURIComponent(rest[0]) &&
    rest[1] === encodeURIComponent(rest[1])
}
function isCorrectlyEncodedName (spec) {
  return !spec.match(/[/@\s+%:]/) &&
    spec === encodeURIComponent(spec)
}
function ensureValidName (name, strict, allowLegacyCase) {
  if (name.charAt(0) === '.' ||
      !(isValidScopedPackageName(name) || isCorrectlyEncodedName(name)) ||
      (strict && (!allowLegacyCase) && name !== name.toLowerCase()) ||
      name.toLowerCase() === 'node_modules' ||
      name.toLowerCase() === 'favicon.ico') {
    throw new Error('Invalid name: ' + JSON.stringify(name))
  }
}
function modifyPeople (data, fn) {
  if (data.author) {
    data.author = fn(data.author);
  }['maintainers', 'contributors'].forEach(function (set) {
    if (!Array.isArray(data[set])) {
      return
    }
    data[set] = data[set].map(fn);
  });
  return data
}
function unParsePerson (person) {
  if (typeof person === 'string') {
    return person
  }
  var name = person.name || '';
  var u = person.url || person.web;
  var wrappedUrl = u ? (' (' + u + ')') : '';
  var e = person.email || person.mail;
  var wrappedEmail = e ? (' <' + e + '>') : '';
  return name + wrappedEmail + wrappedUrl
}
function parsePerson (person) {
  if (typeof person !== 'string') {
    return person
  }
  var matchedName = person.match(/^([^(<]+)/);
  var matchedUrl = person.match(/\(([^()]+)\)/);
  var matchedEmail = person.match(/<([^<>]+)>/);
  var obj = {};
  if (matchedName && matchedName[0].trim()) {
    obj.name = matchedName[0].trim();
  }
  if (matchedEmail) {
    obj.email = matchedEmail[1];
  }
  if (matchedUrl) {
    obj.url = matchedUrl[1];
  }
  return obj
}
function addOptionalDepsToDeps (data, warn) {
  var o = data.optionalDependencies;
  if (!o) {
    return
  }
  var d = data.dependencies || {};
  Object.keys(o).forEach(function (k) {
    d[k] = o[k];
  });
  data.dependencies = d;
}
function depObjectify (deps, type, warn) {
  if (!deps) {
    return {}
  }
  if (typeof deps === 'string') {
    deps = deps.trim().split(/[\n\r\s\t ,]+/);
  }
  if (!Array.isArray(deps)) {
    return deps
  }
  warn('deprecatedArrayDependencies', type);
  var o = {};
  deps.filter(function (d) {
    return typeof d === 'string'
  }).forEach(function (d) {
    d = d.trim().split(/(:?[@\s><=])/);
    var dn = d.shift();
    var dv = d.join('');
    dv = dv.trim();
    dv = dv.replace(/^@/, '');
    o[dn] = dv;
  });
  return o
}
function objectifyDeps (data, warn) {
  depTypes.forEach(function (type) {
    if (!data[type]) {
      return
    }
    data[type] = depObjectify(data[type], type, warn);
  });
}
function bugsTypos (bugs, warn) {
  if (!bugs) {
    return
  }
  Object.keys(bugs).forEach(function (k) {
    if (typos.bugs[k]) {
      warn('typo', k, typos.bugs[k], 'bugs');
      bugs[typos.bugs[k]] = bugs[k];
      delete bugs[k];
    }
  });
}
var repositories = "'repositories' (plural) Not supported. Please pick one as the 'repository' field";
var missingRepository = "No repository field.";
var brokenGitUrl = "Probably broken git url: %s";
var nonObjectScripts = "scripts must be an object";
var nonStringScript = "script values must be string commands";
var nonArrayFiles = "Invalid 'files' member";
var invalidFilename = "Invalid filename in 'files' list: %s";
var nonArrayBundleDependencies = "Invalid 'bundleDependencies' list. Must be array of package names";
var nonStringBundleDependency = "Invalid bundleDependencies member: %s";
var nonDependencyBundleDependency = "Non-dependency in bundleDependencies: %s";
var nonObjectDependencies = "%s field must be an object";
var nonStringDependency = "Invalid dependency: %s %s";
var deprecatedArrayDependencies = "specifying %s as array is deprecated";
var deprecatedModules = "modules field is deprecated";
var nonArrayKeywords = "keywords should be an array of strings";
var nonStringKeyword = "keywords should be an array of strings";
var conflictingName = "%s is also the name of a node core module.";
var nonStringDescription = "'description' field should be a string";
var missingDescription = "No description";
var missingReadme = "No README data";
var missingLicense = "No license field.";
var nonEmailUrlBugsString = "Bug string field must be url, email, or {email,url}";
var nonUrlBugsUrlField = "bugs.url field must be a string url. Deleted.";
var nonEmailBugsEmailField = "bugs.email field must be a string email. Deleted.";
var emptyNormalizedBugs = "Normalized value of bugs field is an empty object. Deleted.";
var nonUrlHomepage = "homepage field must be a string url. Deleted.";
var invalidLicense = "license should be a valid SPDX license expression";
var typo = "%s should probably be %s.";
const require$$1 = {
	repositories: repositories,
	missingRepository: missingRepository,
	brokenGitUrl: brokenGitUrl,
	nonObjectScripts: nonObjectScripts,
	nonStringScript: nonStringScript,
	nonArrayFiles: nonArrayFiles,
	invalidFilename: invalidFilename,
	nonArrayBundleDependencies: nonArrayBundleDependencies,
	nonStringBundleDependency: nonStringBundleDependency,
	nonDependencyBundleDependency: nonDependencyBundleDependency,
	nonObjectDependencies: nonObjectDependencies,
	nonStringDependency: nonStringDependency,
	deprecatedArrayDependencies: deprecatedArrayDependencies,
	deprecatedModules: deprecatedModules,
	nonArrayKeywords: nonArrayKeywords,
	nonStringKeyword: nonStringKeyword,
	conflictingName: conflictingName,
	nonStringDescription: nonStringDescription,
	missingDescription: missingDescription,
	missingReadme: missingReadme,
	missingLicense: missingLicense,
	nonEmailUrlBugsString: nonEmailUrlBugsString,
	nonUrlBugsUrlField: nonUrlBugsUrlField,
	nonEmailBugsEmailField: nonEmailBugsEmailField,
	emptyNormalizedBugs: emptyNormalizedBugs,
	nonUrlHomepage: nonUrlHomepage,
	invalidLicense: invalidLicense,
	typo: typo
};
var util = require$$0$1;
var messages = require$$1;
var make_warning = function () {
  var args = Array.prototype.slice.call(arguments, 0);
  var warningName = args.shift();
  if (warningName === 'typo') {
    return makeTypoWarning.apply(null, args)
  } else {
    var msgTemplate = messages[warningName] ? messages[warningName] : warningName + ": '%s'";
    args.unshift(msgTemplate);
    return util.format.apply(null, args)
  }
};
function makeTypoWarning (providedName, probableName, field) {
  if (field) {
    providedName = field + "['" + providedName + "']";
    probableName = field + "['" + probableName + "']";
  }
  return util.format(messages.typo, providedName, probableName)
}
var normalize_1 = normalize;
var fixer = fixer$1;
normalize.fixer = fixer;
var makeWarning = make_warning;
var fieldsToFix = ['name', 'version', 'description', 'repository', 'modules', 'scripts',
  'files', 'bin', 'man', 'bugs', 'keywords', 'readme', 'homepage', 'license'];
var otherThingsToFix = ['dependencies', 'people', 'typos'];
var thingsToFix = fieldsToFix.map(function (fieldName) {
  return ucFirst(fieldName) + 'Field'
});
thingsToFix = thingsToFix.concat(otherThingsToFix);
function normalize (data, warn, strict) {
  if (warn === true) {
    warn = null;
    strict = true;
  }
  if (!strict) {
    strict = false;
  }
  if (!warn || data.private) {
    warn = function (msg) {  };
  }
  if (data.scripts &&
      data.scripts.install === 'node-gyp rebuild' &&
      !data.scripts.preinstall) {
    data.gypfile = true;
  }
  fixer.warn = function () {
    warn(makeWarning.apply(null, arguments));
  };
  thingsToFix.forEach(function (thingName) {
    fixer['fix' + ucFirst(thingName)](data, strict);
  });
  data._id = data.name + '@' + data.version;
}
function ucFirst (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
const normalizePackageData = getDefaultExportFromCjs(normalize_1);
const toPath$1 = urlOrPath => urlOrPath instanceof URL ? fileURLToPath(urlOrPath) : urlOrPath;
function findUpSync(name, {
	cwd = process$2.cwd(),
	type = 'file',
	stopAt,
} = {}) {
	let directory = path$1.resolve(toPath$1(cwd) ?? '');
	const {root} = path$1.parse(directory);
	stopAt = path$1.resolve(directory, toPath$1(stopAt) ?? root);
	while (directory && directory !== stopAt && directory !== root) {
		const filePath = path$1.isAbsolute(name) ? name : path$1.join(directory, name);
		try {
			const stats = fs$1.statSync(filePath, {throwIfNoEntry: false});
			if ((type === 'file' && stats?.isFile()) || (type === 'directory' && stats?.isDirectory())) {
				return filePath;
			}
		} catch {}
		directory = path$1.dirname(directory);
	}
}
var lib$2 = {};
var lib$1 = {};
var jsTokens = {};
Object.defineProperty(jsTokens, "__esModule", {
  value: true
});
jsTokens.default = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyus]{1,6}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g;
jsTokens.matchToToken = function(match) {
  var token = {type: "invalid", value: match[0], closed: undefined};
       if (match[ 1]) token.type = "string" , token.closed = !!(match[3] || match[4]);
  else if (match[ 5]) token.type = "comment";
  else if (match[ 6]) token.type = "comment", token.closed = !!match[7];
  else if (match[ 8]) token.type = "regex";
  else if (match[ 9]) token.type = "number";
  else if (match[10]) token.type = "name";
  else if (match[11]) token.type = "punctuator";
  else if (match[12]) token.type = "whitespace";
  return token
};
var lib = {};
var identifier = {};
Object.defineProperty(identifier, "__esModule", {
  value: true
});
identifier.isIdentifierChar = isIdentifierChar;
identifier.isIdentifierName = isIdentifierName;
identifier.isIdentifierStart = isIdentifierStart;
let nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u0870-\u0887\u0889-\u088e\u08a0-\u08c9\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c5d\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cdd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u1711\u171f-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4c\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7ca\ua7d0\ua7d1\ua7d3\ua7d5-\ua7d9\ua7f2-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
let nonASCIIidentifierChars = "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u0898-\u089f\u08ca-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3c\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0cf3\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ece\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u180f-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf-\u1ace\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1dff\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\u30fb\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f\uff65";
const nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
const nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
const astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191];
const astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
function isInAstralSet(code, set) {
  let pos = 0x10000;
  for (let i = 0, length = set.length; i < length; i += 2) {
    pos += set[i];
    if (pos > code) return false;
    pos += set[i + 1];
    if (pos >= code) return true;
  }
  return false;
}
function isIdentifierStart(code) {
  if (code < 65) return code === 36;
  if (code <= 90) return true;
  if (code < 97) return code === 95;
  if (code <= 122) return true;
  if (code <= 0xffff) {
    return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code));
  }
  return isInAstralSet(code, astralIdentifierStartCodes);
}
function isIdentifierChar(code) {
  if (code < 48) return code === 36;
  if (code < 58) return true;
  if (code < 65) return false;
  if (code <= 90) return true;
  if (code < 97) return code === 95;
  if (code <= 122) return true;
  if (code <= 0xffff) {
    return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code));
  }
  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
}
function isIdentifierName(name) {
  let isFirst = true;
  for (let i = 0; i < name.length; i++) {
    let cp = name.charCodeAt(i);
    if ((cp & 0xfc00) === 0xd800 && i + 1 < name.length) {
      const trail = name.charCodeAt(++i);
      if ((trail & 0xfc00) === 0xdc00) {
        cp = 0x10000 + ((cp & 0x3ff) << 10) + (trail & 0x3ff);
      }
    }
    if (isFirst) {
      isFirst = false;
      if (!isIdentifierStart(cp)) {
        return false;
      }
    } else if (!isIdentifierChar(cp)) {
      return false;
    }
  }
  return !isFirst;
}
var keyword = {};
Object.defineProperty(keyword, "__esModule", {
  value: true
});
keyword.isKeyword = isKeyword;
keyword.isReservedWord = isReservedWord;
keyword.isStrictBindOnlyReservedWord = isStrictBindOnlyReservedWord;
keyword.isStrictBindReservedWord = isStrictBindReservedWord;
keyword.isStrictReservedWord = isStrictReservedWord;
const reservedWords = {
  keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
  strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
  strictBind: ["eval", "arguments"]
};
const keywords = new Set(reservedWords.keyword);
const reservedWordsStrictSet = new Set(reservedWords.strict);
const reservedWordsStrictBindSet = new Set(reservedWords.strictBind);
function isReservedWord(word, inModule) {
  return inModule && word === "await" || word === "enum";
}
function isStrictReservedWord(word, inModule) {
  return isReservedWord(word, inModule) || reservedWordsStrictSet.has(word);
}
function isStrictBindOnlyReservedWord(word) {
  return reservedWordsStrictBindSet.has(word);
}
function isStrictBindReservedWord(word, inModule) {
  return isStrictReservedWord(word, inModule) || isStrictBindOnlyReservedWord(word);
}
function isKeyword(word) {
  return keywords.has(word);
}
(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	Object.defineProperty(exports, "isIdentifierChar", {
	  enumerable: true,
	  get: function () {
	    return _identifier.isIdentifierChar;
	  }
	});
	Object.defineProperty(exports, "isIdentifierName", {
	  enumerable: true,
	  get: function () {
	    return _identifier.isIdentifierName;
	  }
	});
	Object.defineProperty(exports, "isIdentifierStart", {
	  enumerable: true,
	  get: function () {
	    return _identifier.isIdentifierStart;
	  }
	});
	Object.defineProperty(exports, "isKeyword", {
	  enumerable: true,
	  get: function () {
	    return _keyword.isKeyword;
	  }
	});
	Object.defineProperty(exports, "isReservedWord", {
	  enumerable: true,
	  get: function () {
	    return _keyword.isReservedWord;
	  }
	});
	Object.defineProperty(exports, "isStrictBindOnlyReservedWord", {
	  enumerable: true,
	  get: function () {
	    return _keyword.isStrictBindOnlyReservedWord;
	  }
	});
	Object.defineProperty(exports, "isStrictBindReservedWord", {
	  enumerable: true,
	  get: function () {
	    return _keyword.isStrictBindReservedWord;
	  }
	});
	Object.defineProperty(exports, "isStrictReservedWord", {
	  enumerable: true,
	  get: function () {
	    return _keyword.isStrictReservedWord;
	  }
	});
	var _identifier = identifier;
	var _keyword = keyword;
} (lib));
var chalk$1 = {exports: {}};
var matchOperatorsRe$1 = /[|\\{}()[\]^$+*?.]/g;
var escapeStringRegexp$1 = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}
	return str.replace(matchOperatorsRe$1, '\\$&');
};
var ansiStyles$1 = {exports: {}};
var conversions$2 = {exports: {}};
var colorName = {	"aliceblue": [240, 248, 255],	"antiquewhite": [250, 235, 215],	"aqua": [0, 255, 255],	"aquamarine": [127, 255, 212],	"azure": [240, 255, 255],	"beige": [245, 245, 220],	"bisque": [255, 228, 196],	"black": [0, 0, 0],	"blanchedalmond": [255, 235, 205],	"blue": [0, 0, 255],	"blueviolet": [138, 43, 226],	"brown": [165, 42, 42],	"burlywood": [222, 184, 135],	"cadetblue": [95, 158, 160],	"chartreuse": [127, 255, 0],	"chocolate": [210, 105, 30],	"coral": [255, 127, 80],	"cornflowerblue": [100, 149, 237],	"cornsilk": [255, 248, 220],	"crimson": [220, 20, 60],	"cyan": [0, 255, 255],	"darkblue": [0, 0, 139],	"darkcyan": [0, 139, 139],	"darkgoldenrod": [184, 134, 11],	"darkgray": [169, 169, 169],	"darkgreen": [0, 100, 0],	"darkgrey": [169, 169, 169],	"darkkhaki": [189, 183, 107],	"darkmagenta": [139, 0, 139],	"darkolivegreen": [85, 107, 47],	"darkorange": [255, 140, 0],	"darkorchid": [153, 50, 204],	"darkred": [139, 0, 0],	"darksalmon": [233, 150, 122],	"darkseagreen": [143, 188, 143],	"darkslateblue": [72, 61, 139],	"darkslategray": [47, 79, 79],	"darkslategrey": [47, 79, 79],	"darkturquoise": [0, 206, 209],	"darkviolet": [148, 0, 211],	"deeppink": [255, 20, 147],	"deepskyblue": [0, 191, 255],	"dimgray": [105, 105, 105],	"dimgrey": [105, 105, 105],	"dodgerblue": [30, 144, 255],	"firebrick": [178, 34, 34],	"floralwhite": [255, 250, 240],	"forestgreen": [34, 139, 34],	"fuchsia": [255, 0, 255],	"gainsboro": [220, 220, 220],	"ghostwhite": [248, 248, 255],	"gold": [255, 215, 0],	"goldenrod": [218, 165, 32],	"gray": [128, 128, 128],	"green": [0, 128, 0],	"greenyellow": [173, 255, 47],	"grey": [128, 128, 128],	"honeydew": [240, 255, 240],	"hotpink": [255, 105, 180],	"indianred": [205, 92, 92],	"indigo": [75, 0, 130],	"ivory": [255, 255, 240],	"khaki": [240, 230, 140],	"lavender": [230, 230, 250],	"lavenderblush": [255, 240, 245],	"lawngreen": [124, 252, 0],	"lemonchiffon": [255, 250, 205],	"lightblue": [173, 216, 230],	"lightcoral": [240, 128, 128],	"lightcyan": [224, 255, 255],	"lightgoldenrodyellow": [250, 250, 210],	"lightgray": [211, 211, 211],	"lightgreen": [144, 238, 144],	"lightgrey": [211, 211, 211],	"lightpink": [255, 182, 193],	"lightsalmon": [255, 160, 122],	"lightseagreen": [32, 178, 170],	"lightskyblue": [135, 206, 250],	"lightslategray": [119, 136, 153],	"lightslategrey": [119, 136, 153],	"lightsteelblue": [176, 196, 222],	"lightyellow": [255, 255, 224],	"lime": [0, 255, 0],	"limegreen": [50, 205, 50],	"linen": [250, 240, 230],	"magenta": [255, 0, 255],	"maroon": [128, 0, 0],	"mediumaquamarine": [102, 205, 170],	"mediumblue": [0, 0, 205],	"mediumorchid": [186, 85, 211],	"mediumpurple": [147, 112, 219],	"mediumseagreen": [60, 179, 113],	"mediumslateblue": [123, 104, 238],	"mediumspringgreen": [0, 250, 154],	"mediumturquoise": [72, 209, 204],	"mediumvioletred": [199, 21, 133],	"midnightblue": [25, 25, 112],	"mintcream": [245, 255, 250],	"mistyrose": [255, 228, 225],	"moccasin": [255, 228, 181],	"navajowhite": [255, 222, 173],	"navy": [0, 0, 128],	"oldlace": [253, 245, 230],	"olive": [128, 128, 0],	"olivedrab": [107, 142, 35],	"orange": [255, 165, 0],	"orangered": [255, 69, 0],	"orchid": [218, 112, 214],	"palegoldenrod": [238, 232, 170],	"palegreen": [152, 251, 152],	"paleturquoise": [175, 238, 238],	"palevioletred": [219, 112, 147],	"papayawhip": [255, 239, 213],	"peachpuff": [255, 218, 185],	"peru": [205, 133, 63],	"pink": [255, 192, 203],	"plum": [221, 160, 221],	"powderblue": [176, 224, 230],	"purple": [128, 0, 128],	"rebeccapurple": [102, 51, 153],	"red": [255, 0, 0],	"rosybrown": [188, 143, 143],	"royalblue": [65, 105, 225],	"saddlebrown": [139, 69, 19],	"salmon": [250, 128, 114],	"sandybrown": [244, 164, 96],	"seagreen": [46, 139, 87],	"seashell": [255, 245, 238],	"sienna": [160, 82, 45],	"silver": [192, 192, 192],	"skyblue": [135, 206, 235],	"slateblue": [106, 90, 205],	"slategray": [112, 128, 144],	"slategrey": [112, 128, 144],	"snow": [255, 250, 250],	"springgreen": [0, 255, 127],	"steelblue": [70, 130, 180],	"tan": [210, 180, 140],	"teal": [0, 128, 128],	"thistle": [216, 191, 216],	"tomato": [255, 99, 71],	"turquoise": [64, 224, 208],	"violet": [238, 130, 238],	"wheat": [245, 222, 179],	"white": [255, 255, 255],	"whitesmoke": [245, 245, 245],	"yellow": [255, 255, 0],	"yellowgreen": [154, 205, 50]};
var cssKeywords = colorName;
var reverseKeywords = {};
for (var key in cssKeywords) {
	if (cssKeywords.hasOwnProperty(key)) {
		reverseKeywords[cssKeywords[key]] = key;
	}
}
var convert$1 = conversions$2.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};
for (var model in convert$1) {
	if (convert$1.hasOwnProperty(model)) {
		if (!('channels' in convert$1[model])) {
			throw new Error('missing channels property: ' + model);
		}
		if (!('labels' in convert$1[model])) {
			throw new Error('missing channel labels property: ' + model);
		}
		if (convert$1[model].labels.length !== convert$1[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}
		var channels = convert$1[model].channels;
		var labels = convert$1[model].labels;
		delete convert$1[model].channels;
		delete convert$1[model].labels;
		Object.defineProperty(convert$1[model], 'channels', {value: channels});
		Object.defineProperty(convert$1[model], 'labels', {value: labels});
	}
}
convert$1.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;
	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}
	h = Math.min(h * 60, 360);
	if (h < 0) {
		h += 360;
	}
	l = (min + max) / 2;
	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}
	return [h, s * 100, l * 100];
};
convert$1.rgb.hsv = function (rgb) {
	var rdif;
	var gdif;
	var bdif;
	var h;
	var s;
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var v = Math.max(r, g, b);
	var diff = v - Math.min(r, g, b);
	var diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};
	if (diff === 0) {
		h = s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);
		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}
		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}
	return [
		h * 360,
		s * 100,
		v * 100
	];
};
convert$1.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert$1.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));
	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
	return [h, w * 100, b * 100];
};
convert$1.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;
	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;
	return [c * 100, m * 100, y * 100, k * 100];
};
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}
convert$1.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}
	var currentClosestDistance = Infinity;
	var currentClosestKeyword;
	for (var keyword in cssKeywords) {
		if (cssKeywords.hasOwnProperty(keyword)) {
			var value = cssKeywords[keyword];
			var distance = comparativeDistance(rgb, value);
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}
	return currentClosestKeyword;
};
convert$1.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};
convert$1.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);
	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);
	return [x * 100, y * 100, z * 100];
};
convert$1.rgb.lab = function (rgb) {
	var xyz = convert$1.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;
	x /= 95.047;
	y /= 100;
	z /= 108.883;
	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);
	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);
	return [l, a, b];
};
convert$1.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;
	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}
	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}
	t1 = 2 * l - t2;
	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}
		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}
		rgb[i] = val * 255;
	}
	return rgb;
};
convert$1.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;
	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);
	return [h, sv * 100, v * 100];
};
convert$1.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;
	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;
	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};
convert$1.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;
	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;
	return [h, sl * 100, l * 100];
};
convert$1.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}
	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;
	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}
	n = wh + f * (v - wh); 
	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}
	return [r * 255, g * 255, b * 255];
};
convert$1.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;
	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);
	return [r * 255, g * 255, b * 255];
};
convert$1.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;
	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;
	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;
	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;
	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);
	return [r * 255, g * 255, b * 255];
};
convert$1.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;
	x /= 95.047;
	y /= 100;
	z /= 108.883;
	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);
	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);
	return [l, a, b];
};
convert$1.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;
	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;
	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
	x *= 95.047;
	y *= 100;
	z *= 108.883;
	return [x, y, z];
};
convert$1.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;
	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;
	if (h < 0) {
		h += 360;
	}
	c = Math.sqrt(a * a + b * b);
	return [l, c, h];
};
convert$1.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;
	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);
	return [l, a, b];
};
convert$1.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert$1.rgb.hsv(args)[2]; 
	value = Math.round(value / 50);
	if (value === 0) {
		return 30;
	}
	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));
	if (value === 2) {
		ansi += 60;
	}
	return ansi;
};
convert$1.hsv.ansi16 = function (args) {
	return convert$1.rgb.ansi16(convert$1.hsv.rgb(args), args[2]);
};
convert$1.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}
		if (r > 248) {
			return 231;
		}
		return Math.round(((r - 8) / 247) * 24) + 232;
	}
	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);
	return ansi;
};
convert$1.ansi16.rgb = function (args) {
	var color = args % 10;
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}
		color = color / 10.5 * 255;
		return [color, color, color];
	}
	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;
	return [r, g, b];
};
convert$1.ansi256.rgb = function (args) {
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}
	args -= 16;
	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;
	return [r, g, b];
};
convert$1.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);
	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};
convert$1.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}
	var colorString = match[0];
	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}
	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;
	return [r, g, b];
};
convert$1.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;
	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}
	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}
	hue /= 6;
	hue %= 1;
	return [hue * 360, chroma * 100, grayscale * 100];
};
convert$1.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;
	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}
	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}
	return [hsl[0], c * 100, f * 100];
};
convert$1.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var c = s * v;
	var f = 0;
	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}
	return [hsv[0], c * 100, f * 100];
};
convert$1.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}
	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;
	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}
	mg = (1.0 - c) * g;
	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};
convert$1.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	var f = 0;
	if (v > 0.0) {
		f = c / v;
	}
	return [hcg[0], f * 100, v * 100];
};
convert$1.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;
	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}
	return [hcg[0], s * 100, l * 100];
};
convert$1.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};
convert$1.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;
	if (c < 1) {
		g = (v - c) / (1 - c);
	}
	return [hwb[0], c * 100, g * 100];
};
convert$1.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};
convert$1.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};
convert$1.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};
convert$1.gray.hsl = convert$1.gray.hsv = function (args) {
	return [0, 0, args[0]];
};
convert$1.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};
convert$1.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};
convert$1.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};
convert$1.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;
	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};
convert$1.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};
var conversionsExports = conversions$2.exports;
var conversions$1 = conversionsExports;
function buildGraph() {
	var graph = {};
	var models = Object.keys(conversions$1);
	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			distance: -1,
			parent: null
		};
	}
	return graph;
}
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; 
	graph[fromModel].distance = 0;
	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions$1[current]);
		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];
			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}
	return graph;
}
function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}
function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions$1[graph[toModel].parent][toModel];
	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions$1[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}
	fn.conversion = path;
	return fn;
}
var route$1 = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};
	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];
		if (node.parent === null) {
			continue;
		}
		conversion[toModel] = wrapConversion(toModel, graph);
	}
	return conversion;
};
var conversions = conversionsExports;
var route = route$1;
var convert = {};
var models = Object.keys(conversions);
function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}
		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}
		return fn(args);
	};
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}
	return wrappedFn;
}
function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}
		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}
		var result = fn(args);
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}
		return result;
	};
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}
	return wrappedFn;
}
models.forEach(function (fromModel) {
	convert[fromModel] = {};
	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});
	var routes = route(fromModel);
	var routeModels = Object.keys(routes);
	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];
		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});
var colorConvert = convert;
ansiStyles$1.exports;
(function (module) {
	const colorConvert$1 = colorConvert;
	const wrapAnsi16 = (fn, offset) => function () {
		const code = fn.apply(colorConvert$1, arguments);
		return `\u001B[${code + offset}m`;
	};
	const wrapAnsi256 = (fn, offset) => function () {
		const code = fn.apply(colorConvert$1, arguments);
		return `\u001B[${38 + offset};5;${code}m`;
	};
	const wrapAnsi16m = (fn, offset) => function () {
		const rgb = fn.apply(colorConvert$1, arguments);
		return `\u001B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
	};
	function assembleStyles() {
		const codes = new Map();
		const styles = {
			modifier: {
				reset: [0, 0],
				bold: [1, 22],
				dim: [2, 22],
				italic: [3, 23],
				underline: [4, 24],
				inverse: [7, 27],
				hidden: [8, 28],
				strikethrough: [9, 29]
			},
			color: {
				black: [30, 39],
				red: [31, 39],
				green: [32, 39],
				yellow: [33, 39],
				blue: [34, 39],
				magenta: [35, 39],
				cyan: [36, 39],
				white: [37, 39],
				gray: [90, 39],
				redBright: [91, 39],
				greenBright: [92, 39],
				yellowBright: [93, 39],
				blueBright: [94, 39],
				magentaBright: [95, 39],
				cyanBright: [96, 39],
				whiteBright: [97, 39]
			},
			bgColor: {
				bgBlack: [40, 49],
				bgRed: [41, 49],
				bgGreen: [42, 49],
				bgYellow: [43, 49],
				bgBlue: [44, 49],
				bgMagenta: [45, 49],
				bgCyan: [46, 49],
				bgWhite: [47, 49],
				bgBlackBright: [100, 49],
				bgRedBright: [101, 49],
				bgGreenBright: [102, 49],
				bgYellowBright: [103, 49],
				bgBlueBright: [104, 49],
				bgMagentaBright: [105, 49],
				bgCyanBright: [106, 49],
				bgWhiteBright: [107, 49]
			}
		};
		styles.color.grey = styles.color.gray;
		for (const groupName of Object.keys(styles)) {
			const group = styles[groupName];
			for (const styleName of Object.keys(group)) {
				const style = group[styleName];
				styles[styleName] = {
					open: `\u001B[${style[0]}m`,
					close: `\u001B[${style[1]}m`
				};
				group[styleName] = styles[styleName];
				codes.set(style[0], style[1]);
			}
			Object.defineProperty(styles, groupName, {
				value: group,
				enumerable: false
			});
			Object.defineProperty(styles, 'codes', {
				value: codes,
				enumerable: false
			});
		}
		const ansi2ansi = n => n;
		const rgb2rgb = (r, g, b) => [r, g, b];
		styles.color.close = '\u001B[39m';
		styles.bgColor.close = '\u001B[49m';
		styles.color.ansi = {
			ansi: wrapAnsi16(ansi2ansi, 0)
		};
		styles.color.ansi256 = {
			ansi256: wrapAnsi256(ansi2ansi, 0)
		};
		styles.color.ansi16m = {
			rgb: wrapAnsi16m(rgb2rgb, 0)
		};
		styles.bgColor.ansi = {
			ansi: wrapAnsi16(ansi2ansi, 10)
		};
		styles.bgColor.ansi256 = {
			ansi256: wrapAnsi256(ansi2ansi, 10)
		};
		styles.bgColor.ansi16m = {
			rgb: wrapAnsi16m(rgb2rgb, 10)
		};
		for (let key of Object.keys(colorConvert$1)) {
			if (typeof colorConvert$1[key] !== 'object') {
				continue;
			}
			const suite = colorConvert$1[key];
			if (key === 'ansi16') {
				key = 'ansi';
			}
			if ('ansi16' in suite) {
				styles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);
				styles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);
			}
			if ('ansi256' in suite) {
				styles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);
				styles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);
			}
			if ('rgb' in suite) {
				styles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);
				styles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);
			}
		}
		return styles;
	}
	Object.defineProperty(module, 'exports', {
		enumerable: true,
		get: assembleStyles
	}); 
} (ansiStyles$1));
var ansiStylesExports$1 = ansiStyles$1.exports;
var hasFlag$3 = (flag, argv) => {
	argv = argv || process.argv;
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const pos = argv.indexOf(prefix + flag);
	const terminatorPos = argv.indexOf('--');
	return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};
const os$1 = require$$0$2;
const hasFlag$2 = hasFlag$3;
const env$1 = process.env;
let forceColor$1;
if (hasFlag$2('no-color') ||
	hasFlag$2('no-colors') ||
	hasFlag$2('color=false')) {
	forceColor$1 = false;
} else if (hasFlag$2('color') ||
	hasFlag$2('colors') ||
	hasFlag$2('color=true') ||
	hasFlag$2('color=always')) {
	forceColor$1 = true;
}
if ('FORCE_COLOR' in env$1) {
	forceColor$1 = env$1.FORCE_COLOR.length === 0 || parseInt(env$1.FORCE_COLOR, 10) !== 0;
}
function translateLevel$1(level) {
	if (level === 0) {
		return false;
	}
	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}
function supportsColor$1(stream) {
	if (forceColor$1 === false) {
		return 0;
	}
	if (hasFlag$2('color=16m') ||
		hasFlag$2('color=full') ||
		hasFlag$2('color=truecolor')) {
		return 3;
	}
	if (hasFlag$2('color=256')) {
		return 2;
	}
	if (stream && !stream.isTTY && forceColor$1 !== true) {
		return 0;
	}
	const min = forceColor$1 ? 1 : 0;
	if (process.platform === 'win32') {
		const osRelease = os$1.release().split('.');
		if (
			Number(process.versions.node.split('.')[0]) >= 8 &&
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}
		return 1;
	}
	if ('CI' in env$1) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env$1) || env$1.CI_NAME === 'codeship') {
			return 1;
		}
		return min;
	}
	if ('TEAMCITY_VERSION' in env$1) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env$1.TEAMCITY_VERSION) ? 1 : 0;
	}
	if (env$1.COLORTERM === 'truecolor') {
		return 3;
	}
	if ('TERM_PROGRAM' in env$1) {
		const version = parseInt((env$1.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
		switch (env$1.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
		}
	}
	if (/-256(color)?$/i.test(env$1.TERM)) {
		return 2;
	}
	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env$1.TERM)) {
		return 1;
	}
	if ('COLORTERM' in env$1) {
		return 1;
	}
	if (env$1.TERM === 'dumb') {
		return min;
	}
	return min;
}
function getSupportLevel$1(stream) {
	const level = supportsColor$1(stream);
	return translateLevel$1(level);
}
var supportsColor_1$1 = {
	supportsColor: getSupportLevel$1,
	stdout: getSupportLevel$1(process.stdout),
	stderr: getSupportLevel$1(process.stderr)
};
const TEMPLATE_REGEX$1 = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
const STYLE_REGEX$1 = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
const STRING_REGEX$1 = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
const ESCAPE_REGEX$1 = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi;
const ESCAPES$1 = new Map([
	['n', '\n'],
	['r', '\r'],
	['t', '\t'],
	['b', '\b'],
	['f', '\f'],
	['v', '\v'],
	['0', '\0'],
	['\\', '\\'],
	['e', '\u001B'],
	['a', '\u0007']
]);
function unescape$1(c) {
	if ((c[0] === 'u' && c.length === 5) || (c[0] === 'x' && c.length === 3)) {
		return String.fromCharCode(parseInt(c.slice(1), 16));
	}
	return ESCAPES$1.get(c) || c;
}
function parseArguments$1(name, args) {
	const results = [];
	const chunks = args.trim().split(/\s*,\s*/g);
	let matches;
	for (const chunk of chunks) {
		if (!isNaN(chunk)) {
			results.push(Number(chunk));
		} else if ((matches = chunk.match(STRING_REGEX$1))) {
			results.push(matches[2].replace(ESCAPE_REGEX$1, (m, escape, chr) => escape ? unescape$1(escape) : chr));
		} else {
			throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
		}
	}
	return results;
}
function parseStyle$1(style) {
	STYLE_REGEX$1.lastIndex = 0;
	const results = [];
	let matches;
	while ((matches = STYLE_REGEX$1.exec(style)) !== null) {
		const name = matches[1];
		if (matches[2]) {
			const args = parseArguments$1(name, matches[2]);
			results.push([name].concat(args));
		} else {
			results.push([name]);
		}
	}
	return results;
}
function buildStyle$1(chalk, styles) {
	const enabled = {};
	for (const layer of styles) {
		for (const style of layer.styles) {
			enabled[style[0]] = layer.inverse ? null : style.slice(1);
		}
	}
	let current = chalk;
	for (const styleName of Object.keys(enabled)) {
		if (Array.isArray(enabled[styleName])) {
			if (!(styleName in current)) {
				throw new Error(`Unknown Chalk style: ${styleName}`);
			}
			if (enabled[styleName].length > 0) {
				current = current[styleName].apply(current, enabled[styleName]);
			} else {
				current = current[styleName];
			}
		}
	}
	return current;
}
var templates$1 = (chalk, tmp) => {
	const styles = [];
	const chunks = [];
	let chunk = [];
	tmp.replace(TEMPLATE_REGEX$1, (m, escapeChar, inverse, style, close, chr) => {
		if (escapeChar) {
			chunk.push(unescape$1(escapeChar));
		} else if (style) {
			const str = chunk.join('');
			chunk = [];
			chunks.push(styles.length === 0 ? str : buildStyle$1(chalk, styles)(str));
			styles.push({inverse, styles: parseStyle$1(style)});
		} else if (close) {
			if (styles.length === 0) {
				throw new Error('Found extraneous } in Chalk template literal');
			}
			chunks.push(buildStyle$1(chalk, styles)(chunk.join('')));
			chunk = [];
			styles.pop();
		} else {
			chunk.push(chr);
		}
	});
	chunks.push(chunk.join(''));
	if (styles.length > 0) {
		const errMsg = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? '' : 's'} (\`}\`)`;
		throw new Error(errMsg);
	}
	return chunks.join('');
};
(function (module) {
	const escapeStringRegexp = escapeStringRegexp$1;
	const ansiStyles = ansiStylesExports$1;
	const stdoutColor = supportsColor_1$1.stdout;
	const template = templates$1;
	const isSimpleWindowsTerm = process.platform === 'win32' && !(process.env.TERM || '').toLowerCase().startsWith('xterm');
	const levelMapping = ['ansi', 'ansi', 'ansi256', 'ansi16m'];
	const skipModels = new Set(['gray']);
	const styles = Object.create(null);
	function applyOptions(obj, options) {
		options = options || {};
		const scLevel = stdoutColor ? stdoutColor.level : 0;
		obj.level = options.level === undefined ? scLevel : options.level;
		obj.enabled = 'enabled' in options ? options.enabled : obj.level > 0;
	}
	function Chalk(options) {
		if (!this || !(this instanceof Chalk) || this.template) {
			const chalk = {};
			applyOptions(chalk, options);
			chalk.template = function () {
				const args = [].slice.call(arguments);
				return chalkTag.apply(null, [chalk.template].concat(args));
			};
			Object.setPrototypeOf(chalk, Chalk.prototype);
			Object.setPrototypeOf(chalk.template, chalk);
			chalk.template.constructor = Chalk;
			return chalk.template;
		}
		applyOptions(this, options);
	}
	if (isSimpleWindowsTerm) {
		ansiStyles.blue.open = '\u001B[94m';
	}
	for (const key of Object.keys(ansiStyles)) {
		ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');
		styles[key] = {
			get() {
				const codes = ansiStyles[key];
				return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, key);
			}
		};
	}
	styles.visible = {
		get() {
			return build.call(this, this._styles || [], true, 'visible');
		}
	};
	ansiStyles.color.closeRe = new RegExp(escapeStringRegexp(ansiStyles.color.close), 'g');
	for (const model of Object.keys(ansiStyles.color.ansi)) {
		if (skipModels.has(model)) {
			continue;
		}
		styles[model] = {
			get() {
				const level = this.level;
				return function () {
					const open = ansiStyles.color[levelMapping[level]][model].apply(null, arguments);
					const codes = {
						open,
						close: ansiStyles.color.close,
						closeRe: ansiStyles.color.closeRe
					};
					return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
				};
			}
		};
	}
	ansiStyles.bgColor.closeRe = new RegExp(escapeStringRegexp(ansiStyles.bgColor.close), 'g');
	for (const model of Object.keys(ansiStyles.bgColor.ansi)) {
		if (skipModels.has(model)) {
			continue;
		}
		const bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
		styles[bgModel] = {
			get() {
				const level = this.level;
				return function () {
					const open = ansiStyles.bgColor[levelMapping[level]][model].apply(null, arguments);
					const codes = {
						open,
						close: ansiStyles.bgColor.close,
						closeRe: ansiStyles.bgColor.closeRe
					};
					return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
				};
			}
		};
	}
	const proto = Object.defineProperties(() => {}, styles);
	function build(_styles, _empty, key) {
		const builder = function () {
			return applyStyle.apply(builder, arguments);
		};
		builder._styles = _styles;
		builder._empty = _empty;
		const self = this;
		Object.defineProperty(builder, 'level', {
			enumerable: true,
			get() {
				return self.level;
			},
			set(level) {
				self.level = level;
			}
		});
		Object.defineProperty(builder, 'enabled', {
			enumerable: true,
			get() {
				return self.enabled;
			},
			set(enabled) {
				self.enabled = enabled;
			}
		});
		builder.hasGrey = this.hasGrey || key === 'gray' || key === 'grey';
		builder.__proto__ = proto; 
		return builder;
	}
	function applyStyle() {
		const args = arguments;
		const argsLen = args.length;
		let str = String(arguments[0]);
		if (argsLen === 0) {
			return '';
		}
		if (argsLen > 1) {
			for (let a = 1; a < argsLen; a++) {
				str += ' ' + args[a];
			}
		}
		if (!this.enabled || this.level <= 0 || !str) {
			return this._empty ? '' : str;
		}
		const originalDim = ansiStyles.dim.open;
		if (isSimpleWindowsTerm && this.hasGrey) {
			ansiStyles.dim.open = '';
		}
		for (const code of this._styles.slice().reverse()) {
			str = code.open + str.replace(code.closeRe, code.open) + code.close;
			str = str.replace(/\r?\n/g, `${code.close}$&${code.open}`);
		}
		ansiStyles.dim.open = originalDim;
		return str;
	}
	function chalkTag(chalk, strings) {
		if (!Array.isArray(strings)) {
			return [].slice.call(arguments, 1).join(' ');
		}
		const args = [].slice.call(arguments, 2);
		const parts = [strings.raw[0]];
		for (let i = 1; i < strings.length; i++) {
			parts.push(String(args[i - 1]).replace(/[{}\\]/g, '\\$&'));
			parts.push(String(strings.raw[i]));
		}
		return template(chalk, parts.join(''));
	}
	Object.defineProperties(Chalk.prototype, styles);
	module.exports = Chalk(); 
	module.exports.supportsColor = stdoutColor;
	module.exports.default = module.exports; 
} (chalk$1));
var chalkExports$1 = chalk$1.exports;
Object.defineProperty(lib$1, "__esModule", {
  value: true
});
lib$1.default = highlight;
lib$1.shouldHighlight = shouldHighlight;
var _jsTokens = jsTokens;
var _helperValidatorIdentifier = lib;
var _chalk$1 = _interopRequireWildcard$1(chalkExports$1, true);
function _getRequireWildcardCache$1(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache$1 = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard$1(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache$1(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const sometimesKeywords = new Set(["as", "async", "from", "get", "of", "set"]);
function getDefs$1(chalk) {
  return {
    keyword: chalk.cyan,
    capitalized: chalk.yellow,
    jsxIdentifier: chalk.yellow,
    punctuator: chalk.yellow,
    number: chalk.magenta,
    string: chalk.green,
    regex: chalk.magenta,
    comment: chalk.grey,
    invalid: chalk.white.bgRed.bold
  };
}
const NEWLINE$1 = /\r\n|[\n\r\u2028\u2029]/;
const BRACKET = /^[()[\]{}]$/;
let tokenize;
{
  const JSX_TAG = /^[a-z][\w-]*$/i;
  const getTokenType = function (token, offset, text) {
    if (token.type === "name") {
      if ((0, _helperValidatorIdentifier.isKeyword)(token.value) || (0, _helperValidatorIdentifier.isStrictReservedWord)(token.value, true) || sometimesKeywords.has(token.value)) {
        return "keyword";
      }
      if (JSX_TAG.test(token.value) && (text[offset - 1] === "<" || text.slice(offset - 2, offset) == "</")) {
        return "jsxIdentifier";
      }
      if (token.value[0] !== token.value[0].toLowerCase()) {
        return "capitalized";
      }
    }
    if (token.type === "punctuator" && BRACKET.test(token.value)) {
      return "bracket";
    }
    if (token.type === "invalid" && (token.value === "@" || token.value === "#")) {
      return "punctuator";
    }
    return token.type;
  };
  tokenize = function* (text) {
    let match;
    while (match = _jsTokens.default.exec(text)) {
      const token = _jsTokens.matchToToken(match);
      yield {
        type: getTokenType(token, match.index, text),
        value: token.value
      };
    }
  };
}
function highlightTokens(defs, text) {
  let highlighted = "";
  for (const {
    type,
    value
  } of tokenize(text)) {
    const colorize = defs[type];
    if (colorize) {
      highlighted += value.split(NEWLINE$1).map(str => colorize(str)).join("\n");
    } else {
      highlighted += value;
    }
  }
  return highlighted;
}
function shouldHighlight(options) {
  return _chalk$1.default.level > 0 || options.forceColor;
}
let chalkWithForcedColor$1 = undefined;
function getChalk$1(forceColor) {
  if (forceColor) {
    var _chalkWithForcedColor;
    (_chalkWithForcedColor = chalkWithForcedColor$1) != null ? _chalkWithForcedColor : chalkWithForcedColor$1 = new _chalk$1.default.constructor({
      enabled: true,
      level: 1
    });
    return chalkWithForcedColor$1;
  }
  return _chalk$1.default;
}
{
  lib$1.getChalk = options => getChalk$1(options.forceColor);
}
function highlight(code, options = {}) {
  if (code !== "" && shouldHighlight(options)) {
    const defs = getDefs$1(getChalk$1(options.forceColor));
    return highlightTokens(defs, code);
  } else {
    return code;
  }
}
var chalk = {exports: {}};
var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
var escapeStringRegexp = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}
	return str.replace(matchOperatorsRe, '\\$&');
};
var ansiStyles = {exports: {}};
ansiStyles.exports;
(function (module) {
	const colorConvert$1 = colorConvert;
	const wrapAnsi16 = (fn, offset) => function () {
		const code = fn.apply(colorConvert$1, arguments);
		return `\u001B[${code + offset}m`;
	};
	const wrapAnsi256 = (fn, offset) => function () {
		const code = fn.apply(colorConvert$1, arguments);
		return `\u001B[${38 + offset};5;${code}m`;
	};
	const wrapAnsi16m = (fn, offset) => function () {
		const rgb = fn.apply(colorConvert$1, arguments);
		return `\u001B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
	};
	function assembleStyles() {
		const codes = new Map();
		const styles = {
			modifier: {
				reset: [0, 0],
				bold: [1, 22],
				dim: [2, 22],
				italic: [3, 23],
				underline: [4, 24],
				inverse: [7, 27],
				hidden: [8, 28],
				strikethrough: [9, 29]
			},
			color: {
				black: [30, 39],
				red: [31, 39],
				green: [32, 39],
				yellow: [33, 39],
				blue: [34, 39],
				magenta: [35, 39],
				cyan: [36, 39],
				white: [37, 39],
				gray: [90, 39],
				redBright: [91, 39],
				greenBright: [92, 39],
				yellowBright: [93, 39],
				blueBright: [94, 39],
				magentaBright: [95, 39],
				cyanBright: [96, 39],
				whiteBright: [97, 39]
			},
			bgColor: {
				bgBlack: [40, 49],
				bgRed: [41, 49],
				bgGreen: [42, 49],
				bgYellow: [43, 49],
				bgBlue: [44, 49],
				bgMagenta: [45, 49],
				bgCyan: [46, 49],
				bgWhite: [47, 49],
				bgBlackBright: [100, 49],
				bgRedBright: [101, 49],
				bgGreenBright: [102, 49],
				bgYellowBright: [103, 49],
				bgBlueBright: [104, 49],
				bgMagentaBright: [105, 49],
				bgCyanBright: [106, 49],
				bgWhiteBright: [107, 49]
			}
		};
		styles.color.grey = styles.color.gray;
		for (const groupName of Object.keys(styles)) {
			const group = styles[groupName];
			for (const styleName of Object.keys(group)) {
				const style = group[styleName];
				styles[styleName] = {
					open: `\u001B[${style[0]}m`,
					close: `\u001B[${style[1]}m`
				};
				group[styleName] = styles[styleName];
				codes.set(style[0], style[1]);
			}
			Object.defineProperty(styles, groupName, {
				value: group,
				enumerable: false
			});
			Object.defineProperty(styles, 'codes', {
				value: codes,
				enumerable: false
			});
		}
		const ansi2ansi = n => n;
		const rgb2rgb = (r, g, b) => [r, g, b];
		styles.color.close = '\u001B[39m';
		styles.bgColor.close = '\u001B[49m';
		styles.color.ansi = {
			ansi: wrapAnsi16(ansi2ansi, 0)
		};
		styles.color.ansi256 = {
			ansi256: wrapAnsi256(ansi2ansi, 0)
		};
		styles.color.ansi16m = {
			rgb: wrapAnsi16m(rgb2rgb, 0)
		};
		styles.bgColor.ansi = {
			ansi: wrapAnsi16(ansi2ansi, 10)
		};
		styles.bgColor.ansi256 = {
			ansi256: wrapAnsi256(ansi2ansi, 10)
		};
		styles.bgColor.ansi16m = {
			rgb: wrapAnsi16m(rgb2rgb, 10)
		};
		for (let key of Object.keys(colorConvert$1)) {
			if (typeof colorConvert$1[key] !== 'object') {
				continue;
			}
			const suite = colorConvert$1[key];
			if (key === 'ansi16') {
				key = 'ansi';
			}
			if ('ansi16' in suite) {
				styles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);
				styles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);
			}
			if ('ansi256' in suite) {
				styles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);
				styles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);
			}
			if ('rgb' in suite) {
				styles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);
				styles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);
			}
		}
		return styles;
	}
	Object.defineProperty(module, 'exports', {
		enumerable: true,
		get: assembleStyles
	}); 
} (ansiStyles));
var ansiStylesExports = ansiStyles.exports;
var hasFlag$1 = (flag, argv) => {
	argv = argv || process.argv;
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const pos = argv.indexOf(prefix + flag);
	const terminatorPos = argv.indexOf('--');
	return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};
const os = require$$0$2;
const hasFlag = hasFlag$1;
const env = process.env;
let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false')) {
	forceColor = false;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = true;
}
if ('FORCE_COLOR' in env) {
	forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
}
function translateLevel(level) {
	if (level === 0) {
		return false;
	}
	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}
function supportsColor(stream) {
	if (forceColor === false) {
		return 0;
	}
	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}
	if (hasFlag('color=256')) {
		return 2;
	}
	if (stream && !stream.isTTY && forceColor !== true) {
		return 0;
	}
	const min = forceColor ? 1 : 0;
	if (process.platform === 'win32') {
		const osRelease = os.release().split('.');
		if (
			Number(process.versions.node.split('.')[0]) >= 8 &&
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}
		return 1;
	}
	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}
		return min;
	}
	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}
	if (env.COLORTERM === 'truecolor') {
		return 3;
	}
	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
		}
	}
	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}
	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}
	if ('COLORTERM' in env) {
		return 1;
	}
	if (env.TERM === 'dumb') {
		return min;
	}
	return min;
}
function getSupportLevel(stream) {
	const level = supportsColor(stream);
	return translateLevel(level);
}
var supportsColor_1 = {
	supportsColor: getSupportLevel,
	stdout: getSupportLevel(process.stdout),
	stderr: getSupportLevel(process.stderr)
};
const TEMPLATE_REGEX = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
const STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
const STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
const ESCAPE_REGEX = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi;
const ESCAPES = new Map([
	['n', '\n'],
	['r', '\r'],
	['t', '\t'],
	['b', '\b'],
	['f', '\f'],
	['v', '\v'],
	['0', '\0'],
	['\\', '\\'],
	['e', '\u001B'],
	['a', '\u0007']
]);
function unescape(c) {
	if ((c[0] === 'u' && c.length === 5) || (c[0] === 'x' && c.length === 3)) {
		return String.fromCharCode(parseInt(c.slice(1), 16));
	}
	return ESCAPES.get(c) || c;
}
function parseArguments(name, args) {
	const results = [];
	const chunks = args.trim().split(/\s*,\s*/g);
	let matches;
	for (const chunk of chunks) {
		if (!isNaN(chunk)) {
			results.push(Number(chunk));
		} else if ((matches = chunk.match(STRING_REGEX))) {
			results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, chr) => escape ? unescape(escape) : chr));
		} else {
			throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
		}
	}
	return results;
}
function parseStyle(style) {
	STYLE_REGEX.lastIndex = 0;
	const results = [];
	let matches;
	while ((matches = STYLE_REGEX.exec(style)) !== null) {
		const name = matches[1];
		if (matches[2]) {
			const args = parseArguments(name, matches[2]);
			results.push([name].concat(args));
		} else {
			results.push([name]);
		}
	}
	return results;
}
function buildStyle(chalk, styles) {
	const enabled = {};
	for (const layer of styles) {
		for (const style of layer.styles) {
			enabled[style[0]] = layer.inverse ? null : style.slice(1);
		}
	}
	let current = chalk;
	for (const styleName of Object.keys(enabled)) {
		if (Array.isArray(enabled[styleName])) {
			if (!(styleName in current)) {
				throw new Error(`Unknown Chalk style: ${styleName}`);
			}
			if (enabled[styleName].length > 0) {
				current = current[styleName].apply(current, enabled[styleName]);
			} else {
				current = current[styleName];
			}
		}
	}
	return current;
}
var templates = (chalk, tmp) => {
	const styles = [];
	const chunks = [];
	let chunk = [];
	tmp.replace(TEMPLATE_REGEX, (m, escapeChar, inverse, style, close, chr) => {
		if (escapeChar) {
			chunk.push(unescape(escapeChar));
		} else if (style) {
			const str = chunk.join('');
			chunk = [];
			chunks.push(styles.length === 0 ? str : buildStyle(chalk, styles)(str));
			styles.push({inverse, styles: parseStyle(style)});
		} else if (close) {
			if (styles.length === 0) {
				throw new Error('Found extraneous } in Chalk template literal');
			}
			chunks.push(buildStyle(chalk, styles)(chunk.join('')));
			chunk = [];
			styles.pop();
		} else {
			chunk.push(chr);
		}
	});
	chunks.push(chunk.join(''));
	if (styles.length > 0) {
		const errMsg = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? '' : 's'} (\`}\`)`;
		throw new Error(errMsg);
	}
	return chunks.join('');
};
(function (module) {
	const escapeStringRegexp$1 = escapeStringRegexp;
	const ansiStyles = ansiStylesExports;
	const stdoutColor = supportsColor_1.stdout;
	const template = templates;
	const isSimpleWindowsTerm = process.platform === 'win32' && !(process.env.TERM || '').toLowerCase().startsWith('xterm');
	const levelMapping = ['ansi', 'ansi', 'ansi256', 'ansi16m'];
	const skipModels = new Set(['gray']);
	const styles = Object.create(null);
	function applyOptions(obj, options) {
		options = options || {};
		const scLevel = stdoutColor ? stdoutColor.level : 0;
		obj.level = options.level === undefined ? scLevel : options.level;
		obj.enabled = 'enabled' in options ? options.enabled : obj.level > 0;
	}
	function Chalk(options) {
		if (!this || !(this instanceof Chalk) || this.template) {
			const chalk = {};
			applyOptions(chalk, options);
			chalk.template = function () {
				const args = [].slice.call(arguments);
				return chalkTag.apply(null, [chalk.template].concat(args));
			};
			Object.setPrototypeOf(chalk, Chalk.prototype);
			Object.setPrototypeOf(chalk.template, chalk);
			chalk.template.constructor = Chalk;
			return chalk.template;
		}
		applyOptions(this, options);
	}
	if (isSimpleWindowsTerm) {
		ansiStyles.blue.open = '\u001B[94m';
	}
	for (const key of Object.keys(ansiStyles)) {
		ansiStyles[key].closeRe = new RegExp(escapeStringRegexp$1(ansiStyles[key].close), 'g');
		styles[key] = {
			get() {
				const codes = ansiStyles[key];
				return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, key);
			}
		};
	}
	styles.visible = {
		get() {
			return build.call(this, this._styles || [], true, 'visible');
		}
	};
	ansiStyles.color.closeRe = new RegExp(escapeStringRegexp$1(ansiStyles.color.close), 'g');
	for (const model of Object.keys(ansiStyles.color.ansi)) {
		if (skipModels.has(model)) {
			continue;
		}
		styles[model] = {
			get() {
				const level = this.level;
				return function () {
					const open = ansiStyles.color[levelMapping[level]][model].apply(null, arguments);
					const codes = {
						open,
						close: ansiStyles.color.close,
						closeRe: ansiStyles.color.closeRe
					};
					return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
				};
			}
		};
	}
	ansiStyles.bgColor.closeRe = new RegExp(escapeStringRegexp$1(ansiStyles.bgColor.close), 'g');
	for (const model of Object.keys(ansiStyles.bgColor.ansi)) {
		if (skipModels.has(model)) {
			continue;
		}
		const bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
		styles[bgModel] = {
			get() {
				const level = this.level;
				return function () {
					const open = ansiStyles.bgColor[levelMapping[level]][model].apply(null, arguments);
					const codes = {
						open,
						close: ansiStyles.bgColor.close,
						closeRe: ansiStyles.bgColor.closeRe
					};
					return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
				};
			}
		};
	}
	const proto = Object.defineProperties(() => {}, styles);
	function build(_styles, _empty, key) {
		const builder = function () {
			return applyStyle.apply(builder, arguments);
		};
		builder._styles = _styles;
		builder._empty = _empty;
		const self = this;
		Object.defineProperty(builder, 'level', {
			enumerable: true,
			get() {
				return self.level;
			},
			set(level) {
				self.level = level;
			}
		});
		Object.defineProperty(builder, 'enabled', {
			enumerable: true,
			get() {
				return self.enabled;
			},
			set(enabled) {
				self.enabled = enabled;
			}
		});
		builder.hasGrey = this.hasGrey || key === 'gray' || key === 'grey';
		builder.__proto__ = proto; 
		return builder;
	}
	function applyStyle() {
		const args = arguments;
		const argsLen = args.length;
		let str = String(arguments[0]);
		if (argsLen === 0) {
			return '';
		}
		if (argsLen > 1) {
			for (let a = 1; a < argsLen; a++) {
				str += ' ' + args[a];
			}
		}
		if (!this.enabled || this.level <= 0 || !str) {
			return this._empty ? '' : str;
		}
		const originalDim = ansiStyles.dim.open;
		if (isSimpleWindowsTerm && this.hasGrey) {
			ansiStyles.dim.open = '';
		}
		for (const code of this._styles.slice().reverse()) {
			str = code.open + str.replace(code.closeRe, code.open) + code.close;
			str = str.replace(/\r?\n/g, `${code.close}$&${code.open}`);
		}
		ansiStyles.dim.open = originalDim;
		return str;
	}
	function chalkTag(chalk, strings) {
		if (!Array.isArray(strings)) {
			return [].slice.call(arguments, 1).join(' ');
		}
		const args = [].slice.call(arguments, 2);
		const parts = [strings.raw[0]];
		for (let i = 1; i < strings.length; i++) {
			parts.push(String(args[i - 1]).replace(/[{}\\]/g, '\\$&'));
			parts.push(String(strings.raw[i]));
		}
		return template(chalk, parts.join(''));
	}
	Object.defineProperties(Chalk.prototype, styles);
	module.exports = Chalk(); 
	module.exports.supportsColor = stdoutColor;
	module.exports.default = module.exports; 
} (chalk));
var chalkExports = chalk.exports;
Object.defineProperty(lib$2, "__esModule", {
  value: true
});
var codeFrameColumns_1 = lib$2.codeFrameColumns = codeFrameColumns;
lib$2.default = _default;
var _highlight = lib$1;
var _chalk = _interopRequireWildcard(chalkExports, true);
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
let chalkWithForcedColor = undefined;
function getChalk(forceColor) {
  if (forceColor) {
    var _chalkWithForcedColor;
    (_chalkWithForcedColor = chalkWithForcedColor) != null ? _chalkWithForcedColor : chalkWithForcedColor = new _chalk.default.constructor({
      enabled: true,
      level: 1
    });
    return chalkWithForcedColor;
  }
  return _chalk.default;
}
let deprecationWarningShown = false;
function getDefs(chalk) {
  return {
    gutter: chalk.grey,
    marker: chalk.red.bold,
    message: chalk.red.bold
  };
}
const NEWLINE = /\r\n|[\n\r\u2028\u2029]/;
function getMarkerLines(loc, source, opts) {
  const startLoc = Object.assign({
    column: 0,
    line: -1
  }, loc.start);
  const endLoc = Object.assign({}, startLoc, loc.end);
  const {
    linesAbove = 2,
    linesBelow = 3
  } = opts || {};
  const startLine = startLoc.line;
  const startColumn = startLoc.column;
  const endLine = endLoc.line;
  const endColumn = endLoc.column;
  let start = Math.max(startLine - (linesAbove + 1), 0);
  let end = Math.min(source.length, endLine + linesBelow);
  if (startLine === -1) {
    start = 0;
  }
  if (endLine === -1) {
    end = source.length;
  }
  const lineDiff = endLine - startLine;
  const markerLines = {};
  if (lineDiff) {
    for (let i = 0; i <= lineDiff; i++) {
      const lineNumber = i + startLine;
      if (!startColumn) {
        markerLines[lineNumber] = true;
      } else if (i === 0) {
        const sourceLength = source[lineNumber - 1].length;
        markerLines[lineNumber] = [startColumn, sourceLength - startColumn + 1];
      } else if (i === lineDiff) {
        markerLines[lineNumber] = [0, endColumn];
      } else {
        const sourceLength = source[lineNumber - i].length;
        markerLines[lineNumber] = [0, sourceLength];
      }
    }
  } else {
    if (startColumn === endColumn) {
      if (startColumn) {
        markerLines[startLine] = [startColumn, 0];
      } else {
        markerLines[startLine] = true;
      }
    } else {
      markerLines[startLine] = [startColumn, endColumn - startColumn];
    }
  }
  return {
    start,
    end,
    markerLines
  };
}
function codeFrameColumns(rawLines, loc, opts = {}) {
  const highlighted = (opts.highlightCode || opts.forceColor) && (0, _highlight.shouldHighlight)(opts);
  const chalk = getChalk(opts.forceColor);
  const defs = getDefs(chalk);
  const maybeHighlight = (chalkFn, string) => {
    return highlighted ? chalkFn(string) : string;
  };
  const lines = rawLines.split(NEWLINE);
  const {
    start,
    end,
    markerLines
  } = getMarkerLines(loc, lines, opts);
  const hasColumns = loc.start && typeof loc.start.column === "number";
  const numberMaxWidth = String(end).length;
  const highlightedLines = highlighted ? (0, _highlight.default)(rawLines, opts) : rawLines;
  let frame = highlightedLines.split(NEWLINE, end).slice(start, end).map((line, index) => {
    const number = start + 1 + index;
    const paddedNumber = ` ${number}`.slice(-numberMaxWidth);
    const gutter = ` ${paddedNumber} |`;
    const hasMarker = markerLines[number];
    const lastMarkerLine = !markerLines[number + 1];
    if (hasMarker) {
      let markerLine = "";
      if (Array.isArray(hasMarker)) {
        const markerSpacing = line.slice(0, Math.max(hasMarker[0] - 1, 0)).replace(/[^\t]/g, " ");
        const numberOfMarkers = hasMarker[1] || 1;
        markerLine = ["\n ", maybeHighlight(defs.gutter, gutter.replace(/\d/g, " ")), " ", markerSpacing, maybeHighlight(defs.marker, "^").repeat(numberOfMarkers)].join("");
        if (lastMarkerLine && opts.message) {
          markerLine += " " + maybeHighlight(defs.message, opts.message);
        }
      }
      return [maybeHighlight(defs.marker, ">"), maybeHighlight(defs.gutter, gutter), line.length > 0 ? ` ${line}` : "", markerLine].join("");
    } else {
      return ` ${maybeHighlight(defs.gutter, gutter)}${line.length > 0 ? ` ${line}` : ""}`;
    }
  }).join("\n");
  if (opts.message && !hasColumns) {
    frame = `${" ".repeat(numberMaxWidth + 1)}${opts.message}\n${frame}`;
  }
  if (highlighted) {
    return chalk.reset(frame);
  } else {
    return frame;
  }
}
function _default(rawLines, lineNumber, colNumber, opts = {}) {
  if (!deprecationWarningShown) {
    deprecationWarningShown = true;
    const message = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
    if (process.emitWarning) {
      process.emitWarning(message, "DeprecationWarning");
    } else {
      const deprecationError = new Error(message);
      deprecationError.name = "DeprecationWarning";
      console.warn(new Error(message));
    }
  }
  colNumber = Math.max(colNumber, 0);
  const location = {
    start: {
      column: colNumber,
      line: lineNumber
    }
  };
  return codeFrameColumns(rawLines, location, opts);
}
const safeLastIndexOf = (string, searchString, index) =>
	index < 0 ? -1 : string.lastIndexOf(searchString, index);
function getPosition(text, textIndex) {
	const lineBreakBefore = safeLastIndexOf(text, '\n', textIndex - 1);
	const column = textIndex - lineBreakBefore - 1;
	let line = 0;
	for (
		let index = lineBreakBefore;
		index >= 0;
		index = safeLastIndexOf(text, '\n', index - 1)
	) {
		line++;
	}
	return {line, column};
}
function indexToLineColumn(text, textIndex, {oneBased = false} = {}) {
	if (textIndex < 0 || (textIndex >= text.length && text.length > 0)) {
		throw new RangeError('Index out of bounds');
	}
	const position = getPosition(text, textIndex);
	return oneBased ? {line: position.line + 1, column: position.column + 1} : position;
}
const getCodePoint = character => `\\u{${character.codePointAt(0).toString(16)}}`;
class JSONError extends Error {
	name = 'JSONError';
	fileName;
	codeFrame;
	rawCodeFrame;
	#message;
	constructor(message) {
		super();
		this.#message = message;
		Error.captureStackTrace?.(this, JSONError);
	}
	get message() {
		const {fileName, codeFrame} = this;
		return `${this.#message}${fileName ? ` in ${fileName}` : ''}${codeFrame ? `\n\n${codeFrame}\n` : ''}`;
	}
	set message(message) {
		this.#message = message;
	}
}
const generateCodeFrame = (string, location, highlightCode = true) =>
	codeFrameColumns_1(string, {start: location}, {highlightCode});
const getErrorLocation = (string, message) => {
	const match = message.match(/in JSON at position (?<index>\d+)(?: \(line (?<line>\d+) column (?<column>\d+)\))?$/);
	if (!match) {
		return;
	}
	let {index, line, column} = match.groups;
	if (line && column) {
		return {line: Number(line), column: Number(column)};
	}
	index = Number(index);
	if (index === string.length) {
		const {line, column} = indexToLineColumn(string, string.length - 1, {oneBased: true});
		return {line, column: column + 1};
	}
	return indexToLineColumn(string, index, {oneBased: true});
};
const addCodePointToUnexpectedToken = message => message.replace(
	/(?<=^Unexpected token )(?<quote>')?(.)\k<quote>/,
	(_, _quote, token) => `"${token}"(${getCodePoint(token)})`,
);
function parseJson(string, reviver, fileName) {
	if (typeof reviver === 'string') {
		fileName = reviver;
		reviver = undefined;
	}
	let message;
	try {
		return JSON.parse(string, reviver);
	} catch (error) {
		message = error.message;
	}
	let location;
	if (string) {
		location = getErrorLocation(string, message);
		message = addCodePointToUnexpectedToken(message);
	} else {
		message += ' while parsing empty string';
	}
	const jsonError = new JSONError(message);
	jsonError.fileName = fileName;
	if (location) {
		jsonError.codeFrame = generateCodeFrame(string, location);
		jsonError.rawCodeFrame = generateCodeFrame(string, location, /* highlightCode */ false);
	}
	throw jsonError;
}
function toPath(urlOrPath) {
	return urlOrPath instanceof URL ? fileURLToPath(urlOrPath) : urlOrPath;
}
const getPackagePath = cwd => path$1.resolve(toPath(cwd) ?? '.', 'package.json');
const _readPackage = (file, normalize) => {
	const json = typeof file === 'string'
		? parseJson(file)
		: file;
	if (normalize) {
		normalizePackageData(json);
	}
	return json;
};
function readPackageSync({cwd, normalize = true} = {}) {
	const packageFile = fs$1.readFileSync(getPackagePath(cwd), 'utf8');
	return _readPackage(packageFile, normalize);
}
function readPackageUpSync(options) {
	const filePath = findUpSync('package.json', options);
	if (!filePath) {
		return;
	}
	return {
		packageJson: readPackageSync({...options, cwd: path$1.dirname(filePath)}),
		path: filePath,
	};
}
const handlePreserveConsecutiveUppercase = (decamelized, separator) => {
	// Lowercase all single uppercase characters. As we
	// want to preserve uppercase sequences, we cannot
	// simply lowercase the separated string at the end.
	// `data_For_USACounties` → `data_for_USACounties`
	decamelized = decamelized.replace(
		/((?<![\p{Uppercase_Letter}\d])[\p{Uppercase_Letter}\d](?![\p{Uppercase_Letter}\d]))/gu,
		$0 => $0.toLowerCase(),
	);
	// Remaining uppercase sequences will be separated from lowercase sequences.
	// `data_For_USACounties` → `data_for_USA_counties`
	return decamelized.replace(
		/(\p{Uppercase_Letter}+)(\p{Uppercase_Letter}\p{Lowercase_Letter}+)/gu,
		(_, $1, $2) => $1 + separator + $2.toLowerCase(),
	);
};
function decamelize(
	text,
	{
		separator = '_',
		preserveConsecutiveUppercase = false,
	} = {},
) {
	if (!(typeof text === 'string' && typeof separator === 'string')) {
		throw new TypeError(
			'The `text` and `separator` arguments should be of type `string`',
		);
	}
	// Checking the second character is done later on. Therefore process shorter strings here.
	if (text.length < 2) {
		return preserveConsecutiveUppercase ? text : text.toLowerCase();
	}
	const replacement = `$1${separator}$2`;
	// Split lowercase sequences followed by uppercase character.
	// `dataForUSACounties` → `data_For_USACounties`
	// `myURLstring → `my_URLstring`
	const decamelized = text.replace(
		/([\p{Lowercase_Letter}\d])(\p{Uppercase_Letter})/gu,
		replacement,
	);
	if (preserveConsecutiveUppercase) {
		return handlePreserveConsecutiveUppercase(decamelized, separator);
	}
	// Split multiple uppercase characters followed by one or more lowercase characters.
	// `my_URLstring` → `my_ur_lstring`
	return decamelized
		.replace(
			/(\p{Uppercase_Letter})(\p{Uppercase_Letter}\p{Lowercase_Letter}+)/gu,
			replacement,
		)
		.toLowerCase();
}
var minimistOptions = {exports: {}};
var toString$1 = Object.prototype.toString;
var isPlainObj = function (x) {
	var prototype;
	return toString$1.call(x) === '[object Object]' && (prototype = Object.getPrototypeOf(x), prototype === null || prototype === Object.getPrototypeOf({}));
};
var arrify$1 = function (val) {
	if (val === null || val === undefined) {
		return [];
	}
	return Array.isArray(val) ? val : [val];
};
var toString = Object.prototype.toString;
var kindOf$1 = function kindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;
  if (type === 'boolean') return 'boolean';
  if (type === 'string') return 'string';
  if (type === 'number') return 'number';
  if (type === 'symbol') return 'symbol';
  if (type === 'function') {
    return isGeneratorFn(val) ? 'generatorfunction' : 'function';
  }
  if (isArray(val)) return 'array';
  if (isBuffer(val)) return 'buffer';
  if (isArguments(val)) return 'arguments';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  if (isRegexp(val)) return 'regexp';
  switch (ctorName(val)) {
    case 'Symbol': return 'symbol';
    case 'Promise': return 'promise';
    // Set, Map, WeakSet, WeakMap
    case 'WeakMap': return 'weakmap';
    case 'WeakSet': return 'weakset';
    case 'Map': return 'map';
    case 'Set': return 'set';
    // 8-bit typed arrays
    case 'Int8Array': return 'int8array';
    case 'Uint8Array': return 'uint8array';
    case 'Uint8ClampedArray': return 'uint8clampedarray';
    // 16-bit typed arrays
    case 'Int16Array': return 'int16array';
    case 'Uint16Array': return 'uint16array';
    // 32-bit typed arrays
    case 'Int32Array': return 'int32array';
    case 'Uint32Array': return 'uint32array';
    case 'Float32Array': return 'float32array';
    case 'Float64Array': return 'float64array';
  }
  if (isGeneratorObj(val)) {
    return 'generator';
  }
  // Non-plain objects
  type = toString.call(val);
  switch (type) {
    case '[object Object]': return 'object';
    // iterators
    case '[object Map Iterator]': return 'mapiterator';
    case '[object Set Iterator]': return 'setiterator';
    case '[object String Iterator]': return 'stringiterator';
    case '[object Array Iterator]': return 'arrayiterator';
  }
  // other
  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
};
function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}
function isArray(val) {
  if (Array.isArray) return Array.isArray(val);
  return val instanceof Array;
}
function isError(val) {
  return val instanceof Error || (typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number');
}
function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function'
    && typeof val.getDate === 'function'
    && typeof val.setDate === 'function';
}
function isRegexp(val) {
  if (val instanceof RegExp) return true;
  return typeof val.flags === 'string'
    && typeof val.ignoreCase === 'boolean'
    && typeof val.multiline === 'boolean'
    && typeof val.global === 'boolean';
}
function isGeneratorFn(name, val) {
  return ctorName(name) === 'GeneratorFunction';
}
function isGeneratorObj(val) {
  return typeof val.throw === 'function'
    && typeof val.return === 'function'
    && typeof val.next === 'function';
}
function isArguments(val) {
  try {
    if (typeof val.length === 'number' && typeof val.callee === 'function') {
      return true;
    }
  } catch (err) {
    if (err.message.indexOf('callee') !== -1) {
      return true;
    }
  }
  return false;
}
/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */
function isBuffer(val) {
  if (val.constructor && typeof val.constructor.isBuffer === 'function') {
    return val.constructor.isBuffer(val);
  }
  return false;
}
const isPlainObject = isPlainObj;
const arrify = arrify$1;
const kindOf = kindOf$1;
const push = (obj, prop, value) => {
	if (!obj[prop]) {
		obj[prop] = [];
	}
	obj[prop].push(value);
};
const insert = (obj, prop, key, value) => {
	if (!obj[prop]) {
		obj[prop] = {};
	}
	obj[prop][key] = value;
};
const prettyPrint = output => {
	return Array.isArray(output) ?
		`[${output.map(prettyPrint).join(', ')}]` :
		kindOf(output) === 'string' ? JSON.stringify(output) : output;
};
const resolveType = value => {
	if (Array.isArray(value) && value.length > 0) {
		const [element] = value;
		return `${kindOf(element)}-array`;
	}
	return kindOf(value);
};
const normalizeExpectedType = (type, defaultValue) => {
	const inferredType = type === 'array' ? 'string-array' : type;
	if (arrayTypes.includes(inferredType) && Array.isArray(defaultValue) && defaultValue.length === 0) {
		return 'array';
	}
	return inferredType;
};
const passthroughOptions = ['stopEarly', 'unknown', '--'];
const primitiveTypes = ['string', 'boolean', 'number'];
const arrayTypes = primitiveTypes.map(t => `${t}-array`);
const availableTypes = [...primitiveTypes, 'array', ...arrayTypes];
const buildOptions = options => {
	options = options || {};
	const result = {};
	passthroughOptions.forEach(key => {
		if (options[key]) {
			result[key] = options[key];
		}
	});
	Object.keys(options).forEach(key => {
		let value = options[key];
		if (key === 'arguments') {
			key = '_';
		}
		// If short form is used
		// convert it to long form
		// e.g. { 'name': 'string' }
		if (typeof value === 'string') {
			value = {type: value};
		}
		if (isPlainObject(value)) {
			const props = value;
			const {type} = props;
			if (type) {
				if (!availableTypes.includes(type)) {
					throw new TypeError(`Expected type of "${key}" to be one of ${prettyPrint(availableTypes)}, got ${prettyPrint(type)}`);
				}
				if (arrayTypes.includes(type)) {
					const [elementType] = type.split('-');
					push(result, 'array', {key, [elementType]: true});
				} else {
					push(result, type, key);
				}
			}
			if ({}.hasOwnProperty.call(props, 'default')) {
				const {default: defaultValue} = props;
				const defaultType = resolveType(defaultValue);
				const expectedType = normalizeExpectedType(type, defaultValue);
				if (expectedType && expectedType !== defaultType) {
					throw new TypeError(`Expected "${key}" default value to be of type "${expectedType}", got ${prettyPrint(defaultType)}`);
				}
				insert(result, 'default', key, defaultValue);
			}
			arrify(props.alias).forEach(alias => {
				insert(result, 'alias', alias, key);
			});
		}
	});
	return result;
};
minimistOptions.exports = buildOptions;
minimistOptions.exports.default = buildOptions;
var minimistOptionsExports = minimistOptions.exports;
const constructParserOptions = /*@__PURE__*/getDefaultExportFromCjs(minimistOptionsExports);
var mapObj = {exports: {}};
const isObject$1 = value => typeof value === 'object' && value !== null;
const mapObjectSkip = Symbol('skip');
// Customized for this use-case
const isObjectCustom = value =>
	isObject$1(value) &&
	!(value instanceof RegExp) &&
	!(value instanceof Error) &&
	!(value instanceof Date);
const mapObject = (object, mapper, options, isSeen = new WeakMap()) => {
	options = {
		deep: false,
		target: {},
		...options
	};
	if (isSeen.has(object)) {
		return isSeen.get(object);
	}
	isSeen.set(object, options.target);
	const {target} = options;
	delete options.target;
	const mapArray = array => array.map(element => isObjectCustom(element) ? mapObject(element, mapper, options, isSeen) : element);
	if (Array.isArray(object)) {
		return mapArray(object);
	}
	for (const [key, value] of Object.entries(object)) {
		const mapResult = mapper(key, value, object);
		if (mapResult === mapObjectSkip) {
			continue;
		}
		let [newKey, newValue, {shouldRecurse = true} = {}] = mapResult;
		// Drop `__proto__` keys.
		if (newKey === '__proto__') {
			continue;
		}
		if (options.deep && shouldRecurse && isObjectCustom(newValue)) {
			newValue = Array.isArray(newValue) ?
				mapArray(newValue) :
				mapObject(newValue, mapper, options, isSeen);
		}
		target[newKey] = newValue;
	}
	return target;
};
mapObj.exports = (object, mapper, options) => {
	if (!isObject$1(object)) {
		throw new TypeError(`Expected an object, got \`${object}\` (${typeof object})`);
	}
	return mapObject(object, mapper, options);
};
mapObj.exports.mapObjectSkip = mapObjectSkip;
var mapObjExports = mapObj.exports;
const mapObject$1 = /*@__PURE__*/getDefaultExportFromCjs(mapObjExports);
const has = (array, key) => array.some(element => {
	if (typeof element === 'string') {
		return element === key;
	}
	element.lastIndex = 0;
	return element.test(key);
});
const cache = new QuickLRU({maxSize: 100_000});
// Reproduces behavior from `map-obj`.
const isObject = value =>
	typeof value === 'object'
		&& value !== null
		&& !(value instanceof RegExp)
		&& !(value instanceof Error)
		&& !(value instanceof Date);
const transform = (input, options = {}) => {
	if (!isObject(input)) {
		return input;
	}
	const {
		separator = '_',
		exclude,
		deep = false,
	} = options;
	const makeMapper = parentPath => (key, value) => {
		if (deep && isObject(value)) {
			value = mapObject$1(value, makeMapper());
		}
		if (!(exclude && has(exclude, key))) {
			const cacheKey = `${separator}${key}`;
			if (cache.has(cacheKey)) {
				key = cache.get(cacheKey);
			} else {
				const returnValue = decamelize(key, {separator});
				if (key.length < 100) { // Prevent abuse
					cache.set(cacheKey, returnValue);
				}
				key = returnValue;
			}
		}
		return [key, value];
	};
	return mapObject$1(input, makeMapper());
};
function decamelizeKeys(input, options) {
	if (Array.isArray(input)) {
		return Object.keys(input).map(key => transform(input[key], options));
	}
	return transform(input, options);
}
export { readPackageUpSync as a, constructParserOptions as b, camelcaseKeys as c, decamelizeKeys as d, decamelize as e, normalizePackageData as n, redent as r, trimNewlines as t, yargsParser as y };
