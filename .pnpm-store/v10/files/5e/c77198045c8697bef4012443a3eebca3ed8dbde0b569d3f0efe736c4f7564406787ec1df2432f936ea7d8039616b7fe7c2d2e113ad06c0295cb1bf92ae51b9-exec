'use strict';

const Assert = require('@hapi/hoek/lib/assert');
const Clone = require('@hapi/hoek/lib/clone');
const Ignore = require('@hapi/hoek/lib/ignore');
const Reach = require('@hapi/hoek/lib/reach');

const Common = require('./common');
const Errors = require('./errors');
const State = require('./state');


const internals = {
    result: Symbol('result')
};


exports.entry = function (value, schema, prefs) {

    let settings = Common.defaults;
    if (prefs) {
        Assert(prefs.warnings === undefined, 'Cannot override warnings preference in synchronous validation');
        Assert(prefs.artifacts === undefined, 'Cannot override artifacts preference in synchronous validation');
        settings = Common.preferences(Common.defaults, prefs);
    }

    const result = internals.entry(value, schema, settings);
    Assert(!result.mainstay.externals.length, 'Schema with external rules must use validateAsync()');
    const outcome = { value: result.value };

    if (result.error) {
        outcome.error = result.error;
    }

    if (result.mainstay.warnings.length) {
        outcome.warning = Errors.details(result.mainstay.warnings);
    }

    if (result.mainstay.debug) {
        outcome.debug = result.mainstay.debug;
    }

    if (result.mainstay.artifacts) {
        outcome.artifacts = result.mainstay.artifacts;
    }

    return outcome;
};


exports.entryAsync = async function (value, schema, prefs) {

    let settings = Common.defaults;
    if (prefs) {
        settings = Common.preferences(Common.defaults, prefs);
    }

    const result = internals.entry(value, schema, settings);
    const mainstay = result.mainstay;
    if (result.error) {
        if (mainstay.debug) {
            result.error.debug = mainstay.debug;
        }

        throw result.error;
    }

    if (mainstay.externals.length) {
        let root = result.value;
        const errors = [];
        for (const external of mainstay.externals) {
            const path = external.state.path;
            const linked = external.schema.type === 'link' ? mainstay.links.get(external.schema) : null;
            let node = root;
            let key;
            let parent;

            const ancestors = path.length ? [root] : [];
            const original = path.length ? Reach(value, path) : value;

            if (path.length) {
                key = path[path.length - 1];

                let current = root;
                for (const segment of path.slice(0, -1)) {
                    current = current[segment];
                    ancestors.unshift(current);
                }

                parent = ancestors[0];
                node = parent[key];
            }

            try {
                const createError = (code, local) => (linked || external.schema).$_createError(code, node, local, external.state, settings);
                const output = await external.method(node, {
                    schema: external.schema,
                    linked,
                    state: external.state,
                    prefs,
                    original,
                    error: createError,
                    errorsArray: internals.errorsArray,
                    warn: (code, local) => mainstay.warnings.push((linked || external.schema).$_createError(code, node, local, external.state, settings)),
                    message: (messages, local) => (linked || external.schema).$_createError('external', node, local, external.state, settings, { messages })
                });

                if (output === undefined ||
                    output === node) {

                    continue;
                }

                if (output instanceof Errors.Report) {
                    mainstay.tracer.log(external.schema, external.state, 'rule', 'external', 'error');
                    errors.push(output);

                    if (settings.abortEarly) {
                        break;
                    }

                    continue;
                }

                if (Array.isArray(output) &&
                    output[Common.symbols.errors]) {
                    mainstay.tracer.log(external.schema, external.state, 'rule', 'external', 'error');
                    errors.push(...output);

                    if (settings.abortEarly) {
                        break;
                    }

                    continue;
                }

                if (parent) {
                    mainstay.tracer.value(external.state, 'rule', node, output, 'external');
                    parent[key] = output;
                }
                else {
                    mainstay.tracer.value(external.state, 'rule', root, output, 'external');
                    root = output;
                }
            }
            catch (err) {
                if (settings.errors.label) {
                    err.message += ` (${(external.label)})`;       // Change message to include path
                }

                throw err;
            }
        }

        result.value = root;

        if (errors.length) {
            result.error = Errors.process(errors, value, settings);

            if (mainstay.debug) {
                result.error.debug = mainstay.debug;
            }

            throw result.error;
        }
    }

    if (!settings.warnings &&
        !settings.debug &&
        !settings.artifacts) {

        return result.value;
    }

    const outcome = { value: result.value };
    if (mainstay.warnings.length) {
        outcome.warning = Errors.details(mainstay.warnings);
    }

    if (mainstay.debug) {
        outcome.debug = mainstay.debug;
    }

    if (mainstay.artifacts) {
        outcome.artifacts = mainstay.artifacts;
    }

    return outcome;
};


internals.Mainstay = class {

    constructor(tracer, debug, links) {

        this.externals = [];
        this.warnings = [];
        this.tracer = tracer;
        this.debug = debug;
        this.links = links;
        this.shadow = null;
        this.artifacts = null;

        this._snapshots = [];
    }

    snapshot() {

        this._snapshots.push({
            externals: this.externals.slice(),
            warnings: this.warnings.slice()
        });
    }

    restore() {

        const snapshot = this._snapshots.pop();
        this.externals = snapshot.externals;
        this.warnings = snapshot.warnings;
    }

    commit() {

        this._snapshots.pop();
    }
};


internals.entry = function (value, schema, prefs) {

    // Prepare state

    const { tracer, cleanup } = internals.tracer(schema, prefs);
    const debug = prefs.debug ? [] : null;
    const links = schema._ids._schemaChain ? new Map() : null;
    const mainstay = new internals.Mainstay(tracer, debug, links);
    const schemas = schema._ids._schemaChain ? [{ schema }] : null;
    const state = new State([], [], { mainstay, schemas });

    // Validate value

    const result = exports.validate(value, schema, state, prefs);

    // Process value and errors

    if (cleanup) {
        schema.$_root.untrace();
    }

    const error = Errors.process(result.errors, value, prefs);
    return { value: result.value, error, mainstay };
};


internals.tracer = function (schema, prefs) {

    if (schema.$_root._tracer) {
        return { tracer: schema.$_root._tracer._register(schema) };
    }

    if (prefs.debug) {
        Assert(schema.$_root.trace, 'Debug mode not supported');
        return { tracer: schema.$_root.trace()._register(schema), cleanup: true };
    }

    return { tracer: internals.ignore };
};


exports.validate = function (value, schema, state, prefs, overrides = {}) {

    if (schema.$_terms.whens) {
        schema = schema._generate(value, state, prefs).schema;
    }

    // Setup state and settings

    if (schema._preferences) {
        prefs = internals.prefs(schema, prefs);
    }

    // Cache

    if (schema._cache &&
        prefs.cache) {

        const result = schema._cache.get(value);
        state.mainstay.tracer.debug(state, 'validate', 'cached', !!result);
        if (result) {
            return result;
        }
    }

    // Helpers

    const createError = (code, local, localState) => schema.$_createError(code, value, local, localState || state, prefs);
    const helpers = {
        original: value,
        prefs,
        schema,
        state,
        error: createError,
        errorsArray: internals.errorsArray,
        warn: (code, local, localState) => state.mainstay.warnings.push(createError(code, local, localState)),
        message: (messages, local) => schema.$_createError('custom', value, local, state, prefs, { messages })
    };

    // Prepare

    state.mainstay.tracer.entry(schema, state);

    const def = schema._definition;
    if (def.prepare &&
        value !== undefined &&
        prefs.convert) {

        const prepared = def.prepare(value, helpers);
        if (prepared) {
            state.mainstay.tracer.value(state, 'prepare', value, prepared.value);
            if (prepared.errors) {
                return internals.finalize(prepared.value, [].concat(prepared.errors), helpers);         // Prepare error always aborts early
            }

            value = prepared.value;
        }
    }

    // Type coercion

    if (def.coerce &&
        value !== undefined &&
        prefs.convert &&
        (!def.coerce.from || def.coerce.from.includes(typeof value))) {

        const coerced = def.coerce.method(value, helpers);
        if (coerced) {
            state.mainstay.tracer.value(state, 'coerced', value, coerced.value);
            if (coerced.errors) {
                return internals.finalize(coerced.value, [].concat(coerced.errors), helpers);           // Coerce error always aborts early
            }

            value = coerced.value;
        }
    }

    // Empty value

    const empty = schema._flags.empty;
    if (empty &&
        empty.$_match(internals.trim(value, schema), state.nest(empty), Common.defaults)) {

        state.mainstay.tracer.value(state, 'empty', value, undefined);
        value = undefined;
    }

    // Presence requirements (required, optional, forbidden)

    const presence = overrides.presence || schema._flags.presence || (schema._flags._endedSwitch ? null : prefs.presence);
    if (value === undefined) {
        if (presence === 'forbidden') {
            return internals.finalize(value, null, helpers);
        }

        if (presence === 'required') {
            return internals.finalize(value, [schema.$_createError('any.required', value, null, state, prefs)], helpers);
        }

        if (presence === 'optional') {
            if (schema._flags.default !== Common.symbols.deepDefault) {
                return internals.finalize(value, null, helpers);
            }

            state.mainstay.tracer.value(state, 'default', value, {});
            value = {};
        }
    }
    else if (presence === 'forbidden') {
        return internals.finalize(value, [schema.$_createError('any.unknown', value, null, state, prefs)], helpers);
    }

    // Allowed values

    const errors = [];

    if (schema._valids) {
        const match = schema._valids.get(value, state, prefs, schema._flags.insensitive);
        if (match) {
            if (prefs.convert) {
                state.mainstay.tracer.value(state, 'valids', value, match.value);
                value = match.value;
            }

            state.mainstay.tracer.filter(schema, state, 'valid', match);
            return internals.finalize(value, null, helpers);
        }

        if (schema._flags.only) {
            const report = schema.$_createError('any.only', value, { valids: schema._valids.values({ display: true }) }, state, prefs);
            if (prefs.abortEarly) {
                return internals.finalize(value, [report], helpers);
            }

            errors.push(report);
        }
    }

    // Denied values

    if (schema._invalids) {
        const match = schema._invalids.get(value, state, prefs, schema._flags.insensitive);
        if (match) {
            state.mainstay.tracer.filter(schema, state, 'invalid', match);
            const report = schema.$_createError('any.invalid', value, { invalids: schema._invalids.values({ display: true }) }, state, prefs);
            if (prefs.abortEarly) {
                return internals.finalize(value, [report], helpers);
            }

            errors.push(report);
        }
    }

    // Base type

    if (def.validate) {
        const base = def.validate(value, helpers);
        if (base) {
            state.mainstay.tracer.value(state, 'base', value, base.value);
            value = base.value;

            if (base.errors) {
                if (!Array.isArray(base.errors)) {
                    errors.push(base.errors);
                    return internals.finalize(value, errors, helpers);          // Base error always aborts early
                }

                if (base.errors.length) {
                    errors.push(...base.errors);
                    return internals.finalize(value, errors, helpers);          // Base error always aborts early
                }
            }
        }
    }

    // Validate tests

    if (!schema._rules.length) {
        return internals.finalize(value, errors, helpers);
    }

    return internals.rules(value, errors, helpers);
};


internals.rules = function (value, errors, helpers) {

    const { schema, state, prefs } = helpers;

    for (const rule of schema._rules) {
        const definition = schema._definition.rules[rule.method];

        // Skip rules that are also applied in coerce step

        if (definition.convert &&
            prefs.convert) {

            state.mainstay.tracer.log(schema, state, 'rule', rule.name, 'full');
            continue;
        }

        // Resolve references

        let ret;
        let args = rule.args;
        if (rule._resolve.length) {
            args = Object.assign({}, args);                                     // Shallow copy
            for (const key of rule._resolve) {
                const resolver = definition.argsByName.get(key);

                const resolved = args[key].resolve(value, state, prefs);
                const normalized = resolver.normalize ? resolver.normalize(resolved) : resolved;

                const invalid = Common.validateArg(normalized, null, resolver);
                if (invalid) {
                    ret = schema.$_createError('any.ref', resolved, { arg: key, ref: args[key], reason: invalid }, state, prefs);
                    break;
                }

                args[key] = normalized;
            }
        }

        // Test rule

        ret = ret || definition.validate(value, helpers, args, rule);           // Use ret if already set to reference error

        const result = internals.rule(ret, rule);
        if (result.errors) {
            state.mainstay.tracer.log(schema, state, 'rule', rule.name, 'error');

            if (rule.warn) {
                state.mainstay.warnings.push(...result.errors);
                continue;
            }

            if (prefs.abortEarly) {
                return internals.finalize(value, result.errors, helpers);
            }

            errors.push(...result.errors);
        }
        else {
            state.mainstay.tracer.log(schema, state, 'rule', rule.name, 'pass');
            state.mainstay.tracer.value(state, 'rule', value, result.value, rule.name);
            value = result.value;
        }
    }

    return internals.finalize(value, errors, helpers);
};


internals.rule = function (ret, rule) {

    if (ret instanceof Errors.Report) {
        internals.error(ret, rule);
        return { errors: [ret], value: null };
    }

    if (Array.isArray(ret) &&
        ret[Common.symbols.errors]) {

        ret.forEach((report) => internals.error(report, rule));
        return { errors: ret, value: null };
    }

    return { errors: null, value: ret };
};


internals.error = function (report, rule) {

    if (rule.message) {
        report._setTemplate(rule.message);
    }

    return report;
};


internals.finalize = function (value, errors, helpers) {

    errors = errors || [];
    const { schema, state, prefs } = helpers;

    // Failover value

    if (errors.length) {
        const failover = internals.default('failover', undefined, errors, helpers);
        if (failover !== undefined) {
            state.mainstay.tracer.value(state, 'failover', value, failover);
            value = failover;
            errors = [];
        }
    }

    // Error override

    if (errors.length &&
        schema._flags.error) {

        if (typeof schema._flags.error === 'function') {
            errors = schema._flags.error(errors);
            if (!Array.isArray(errors)) {
                errors = [errors];
            }

            for (const error of errors) {
                Assert(error instanceof Error || error instanceof Errors.Report, 'error() must return an Error object');
            }
        }
        else {
            errors = [schema._flags.error];
        }
    }

    // Default

    if (value === undefined) {
        const defaulted = internals.default('default', value, errors, helpers);
        state.mainstay.tracer.value(state, 'default', value, defaulted);
        value = defaulted;
    }

    // Cast

    if (schema._flags.cast &&
        value !== undefined) {

        const caster = schema._definition.cast[schema._flags.cast];
        if (caster.from(value)) {
            const casted = caster.to(value, helpers);
            state.mainstay.tracer.value(state, 'cast', value, casted, schema._flags.cast);
            value = casted;
        }
    }

    // Externals

    if (schema.$_terms.externals &&
        prefs.externals &&
        prefs._externals !== false) {                       // Disabled for matching

        for (const { method } of schema.$_terms.externals) {
            state.mainstay.externals.push({ method, schema, state, label: Errors.label(schema._flags, state, prefs) });
        }
    }

    // Result

    const result = { value, errors: errors.length ? errors : null };

    if (schema._flags.result) {
        result.value = schema._flags.result === 'strip' ? undefined : /* raw */ helpers.original;
        state.mainstay.tracer.value(state, schema._flags.result, value, result.value);
        state.shadow(value, schema._flags.result);
    }

    // Cache

    if (schema._cache &&
        prefs.cache !== false &&
        !schema._refs.length) {

        schema._cache.set(helpers.original, result);
    }

    // Artifacts

    if (value !== undefined &&
        !result.errors &&
        schema._flags.artifact !== undefined) {

        state.mainstay.artifacts = state.mainstay.artifacts || new Map();
        if (!state.mainstay.artifacts.has(schema._flags.artifact)) {
            state.mainstay.artifacts.set(schema._flags.artifact, []);
        }

        state.mainstay.artifacts.get(schema._flags.artifact).push(state.path);
    }

    return result;
};


internals.prefs = function (schema, prefs) {

    const isDefaultOptions = prefs === Common.defaults;
    if (isDefaultOptions &&
        schema._preferences[Common.symbols.prefs]) {

        return schema._preferences[Common.symbols.prefs];
    }

    prefs = Common.preferences(prefs, schema._preferences);
    if (isDefaultOptions) {
        schema._preferences[Common.symbols.prefs] = prefs;
    }

    return prefs;
};


internals.default = function (flag, value, errors, helpers) {

    const { schema, state, prefs } = helpers;
    const source = schema._flags[flag];
    if (prefs.noDefaults ||
        source === undefined) {

        return value;
    }

    state.mainstay.tracer.log(schema, state, 'rule', flag, 'full');

    if (!source) {
        return source;
    }

    if (typeof source === 'function') {
        const args = source.length ? [Clone(state.ancestors[0]), helpers] : [];

        try {
            return source(...args);
        }
        catch (err) {
            errors.push(schema.$_createError(`any.${flag}`, null, { error: err }, state, prefs));
            return;
        }
    }

    if (typeof source !== 'object') {
        return source;
    }

    if (source[Common.symbols.literal]) {
        return source.literal;
    }

    if (Common.isResolvable(source)) {
        return source.resolve(value, state, prefs);
    }

    return Clone(source);
};


internals.trim = function (value, schema) {

    if (typeof value !== 'string') {
        return value;
    }

    const trim = schema.$_getRule('trim');
    if (!trim ||
        !trim.args.enabled) {

        return value;
    }

    return value.trim();
};


internals.ignore = {
    active: false,
    debug: Ignore,
    entry: Ignore,
    filter: Ignore,
    log: Ignore,
    resolve: Ignore,
    value: Ignore
};


internals.errorsArray = function () {

    const errors = [];
    errors[Common.symbols.errors] = true;
    return errors;
};
