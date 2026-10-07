'use strict';

const { assert, clone, deepEqual, merge } = require('@hapi/hoek');

const Cache = require('./cache');
const Common = require('./common');
const Compile = require('./compile');
const Errors = require('./errors');
const Extend = require('./extend');
const Manifest = require('./manifest');
const Messages = require('./messages');
const Modify = require('./modify');
const Ref = require('./ref');
const Trace = require('./trace');
const Validator = require('./validator');
const Values = require('./values');


const internals = {
    standardTypes: new Set(['string', 'number', 'integer', 'boolean', 'object', 'array', 'null']),
    jsonSchemaTarget: 'draft-2020-12',
    primitiveTypes: new Set(['string', 'number', 'boolean']),
    nullSchema: () => ({ type: 'null' })
};


internals.Base = class {

    constructor(type) {

        // Naming: public, _private, $_extension, $_mutate{action}

        this.type = type;

        this.$_root = null;
        this._definition = {};
        this._reset();
    }

    _reset() {

        this._ids = new Modify.Ids();
        this._preferences = null;
        this._refs = new Ref.Manager();
        this._cache = null;

        this._valids = null;
        this._invalids = null;

        this._flags = {};
        this._rules = [];
        this._singleRules = new Map();              // The rule options passed for non-multi rules

        this.$_terms = {};                          // Hash of arrays of immutable objects (extended by other types)

        this.$_temp = {                             // Runtime state (not cloned)
            ruleset: null,                          // null: use last, false: error, number: start position
            whens: {}                               // Runtime cache of generated whens
        };
    }

    // Manifest

    describe() {

        assert(typeof Manifest.describe === 'function', 'Manifest functionality disabled');
        return Manifest.describe(this);
    }

    $_jsonSchema(mode, options = {}) {

        if (options.target !== undefined &&
            options.target !== internals.jsonSchemaTarget) {

            throw new Error(`Unsupported JSON Schema target: ${options.target}`);
        }

        const rootCall = !options.$defs;
        const defs = options.$defs ?? {};

        let schema = {};

        const isTypeAny = this.type === 'any';
        const isOnly = this._flags.only;

        const valids = this._valids && Array.from(this._valids._values).filter((v) => v !== null);
        let typesOverlap = true;

        // If 'only' is set, check if the allowed values' types overlap with the schema type

        if (valids && valids.length && isOnly && !isTypeAny) {
            const types = new Set(valids.map((v) => typeof v));
            typesOverlap = types.has(this.type) || (this.type === 'date' && types.has('object'));
        }

        // Set the JSON Schema 'type' if it's a standard type and there's an overlap

        if (!isTypeAny && typesOverlap && internals.standardTypes.has(this.type)) {
            schema.type = this.type;
        }

        if (this._flags.description) {
            schema.description = this._flags.description;
        }

        if (this._flags.default !== undefined && typeof this._flags.default !== 'function') {
            schema.default = this._flags.default;
        }

        // Apply type-specific JSON Schema conversion

        const subOptions = { ...options, $defs: defs };
        if (this._definition.jsonSchema && typesOverlap) {
            schema = this._definition.jsonSchema(this, schema, mode, subOptions);
        }

        // Apply rule-specific JSON Schema conversions

        for (const rule of this._rules) {
            const definition = this._definition.rules[rule.name];
            if (definition.jsonSchema && typesOverlap) {
                schema = definition.jsonSchema(rule, schema, isOnly, mode, subOptions);
            }
        }

        // Handle shared schemas

        if (this.$_terms.shared) {
            for (const shared of this.$_terms.shared) {
                defs[shared._flags.id] = shared.$_jsonSchema(mode, subOptions);
            }
        }

        if (rootCall && Object.keys(defs).length) {
            schema.$defs = defs;
        }

        // Handle allowed values (valids)

        if (this._valids) {

            const values = valids.filter((v) => typeof v !== 'symbol');
            if (values.length) {
                if (this._flags.only) {
                    schema.enum = values;

                    const list = Common.intersect(new Set(values.map((v) => typeof v)), internals.primitiveTypes);

                    if (list.size) {
                        const types = [...list];
                        schema.type = types.length === 1 ? types[0] : types;
                    }
                }
                else {
                    // If values are allowed but not exclusive, add them via 'anyOf' if they differ from the main type

                    const otherTypes = values.filter((v) => typeof v !== this.type || isTypeAny);
                    if (otherTypes.length && !(isTypeAny && !isOnly)) {
                        if (!schema.anyOf) {
                            schema = {
                                anyOf: [schema]
                            };
                        }

                        schema.anyOf.push({ enum: otherTypes });
                    }
                }
            }
        }

        // Handle 'null' if it's an allowed value

        if (this._valids && this._valids.has(null) && !(isTypeAny && !isOnly)) {
            if (this._valids.length === 1 && (isTypeAny || isOnly)) {
                schema.type = 'null';
            }
            else if (schema.type) {
                schema.type = [schema.type, 'null'];
            }
            else if (schema.anyOf) {
                schema.anyOf.unshift(internals.nullSchema());
            }
            else {
                schema = {
                    anyOf: [
                        internals.nullSchema(),
                        schema
                    ]
                };
            }
        }

        // Handle conditionals (whens) by generating multiple possible schemas combined with 'anyOf'

        if (this.$_terms.whens) {

            const base = this.clone();
            base.$_terms.whens = null;

            const matches = [];
            for (const when of this.$_terms.whens) {
                const tests = when.is ? [when] : when.switch;
                for (let i = 0; i < tests.length; ++i) {
                    const test = tests[i];
                    if (test.then) {
                        matches.push(base.concat(test.then).$_jsonSchema(mode, subOptions));
                    }

                    if (test.otherwise) {
                        matches.push(base.concat(test.otherwise).$_jsonSchema(mode, subOptions));
                    }

                    if (!test.then || (i === tests.length - 1 && !test.otherwise)) {
                        matches.push(base.$_jsonSchema(mode, subOptions));
                    }
                }
            }

            const results = [];
            for (const match of matches) {
                if (!results.some((r) => deepEqual(r, match))) {
                    results.push(match);
                }
            }

            return { anyOf: results };
        }

        return schema;
    }

    // Rules

    allow(...values) {

        Common.verifyFlat(values, 'allow');
        return this._values(values, '_valids');
    }

    alter(targets) {

        assert(targets && typeof targets === 'object' && !Array.isArray(targets), 'Invalid targets argument');
        assert(!this._inRuleset(), 'Cannot set alterations inside a ruleset');

        const obj = this.clone();
        obj.$_terms.alterations = obj.$_terms.alterations || [];
        for (const target in targets) {
            const adjuster = targets[target];
            assert(typeof adjuster === 'function', 'Alteration adjuster for', target, 'must be a function');
            obj.$_terms.alterations.push({ target, adjuster });
        }

        obj.$_temp.ruleset = false;
        return obj;
    }

    artifact(id) {

        assert(id !== undefined, 'Artifact cannot be undefined');
        assert(!this._cache, 'Cannot set an artifact with a rule cache');

        return this.$_setFlag('artifact', id);
    }

    cast(to) {

        assert(to === false || typeof to === 'string', 'Invalid to value');
        assert(to === false || this._definition.cast[to], 'Type', this.type, 'does not support casting to', to);

        return this.$_setFlag('cast', to === false ? undefined : to);
    }

    default(value, options) {

        return this._default('default', value, options);
    }

    description(desc) {

        assert(desc && typeof desc === 'string', 'Description must be a non-empty string');

        return this.$_setFlag('description', desc);
    }

    empty(schema) {

        const obj = this.clone();

        if (schema !== undefined) {
            schema = obj.$_compile(schema, { override: false });
        }

        return obj.$_setFlag('empty', schema, { clone: false });
    }

    error(err) {

        assert(err, 'Missing error');
        assert(err instanceof Error || typeof err === 'function', 'Must provide a valid Error object or a function');

        return this.$_setFlag('error', err);
    }

    example(example, options = {}) {

        assert(example !== undefined, 'Missing example');
        Common.assertOptions(options, ['override']);

        return this._inner('examples', example, { single: true, override: options.override });
    }

    external(method, description) {

        if (typeof method === 'object') {
            assert(!description, 'Cannot combine options with description');
            description = method.description;
            method = method.method;
        }

        assert(typeof method === 'function', 'Method must be a function');
        assert(description === undefined || description && typeof description === 'string', 'Description must be a non-empty string');

        return this._inner('externals', { method, description }, { single: true });
    }

    failover(value, options) {

        return this._default('failover', value, options);
    }

    forbidden() {

        return this.presence('forbidden');
    }

    id(id) {

        if (!id) {
            return this.$_setFlag('id', undefined);
        }

        assert(typeof id === 'string', 'id must be a non-empty string');
        assert(/^[^\.]+$/.test(id), 'id cannot contain period character');

        return this.$_setFlag('id', id);
    }

    invalid(...values) {

        return this._values(values, '_invalids');
    }

    label(name) {

        assert(name && typeof name === 'string', 'Label name must be a non-empty string');

        return this.$_setFlag('label', name);
    }

    meta(meta) {

        assert(meta !== undefined, 'Meta cannot be undefined');

        return this._inner('metas', meta, { single: true });
    }

    note(...notes) {

        assert(notes.length, 'Missing notes');
        for (const note of notes) {
            assert(note && typeof note === 'string', 'Notes must be non-empty strings');
        }

        return this._inner('notes', notes);
    }

    only(mode = true) {

        assert(typeof mode === 'boolean', 'Invalid mode:', mode);

        return this.$_setFlag('only', mode);
    }

    optional() {

        return this.presence('optional');
    }

    prefs(prefs) {

        assert(prefs, 'Missing preferences');
        assert(prefs.context === undefined, 'Cannot override context');
        assert(prefs.externals === undefined, 'Cannot override externals');
        assert(prefs.warnings === undefined, 'Cannot override warnings');
        assert(prefs.debug === undefined, 'Cannot override debug');

        Common.checkPreferences(prefs);

        const obj = this.clone();
        obj._preferences = Common.preferences(obj._preferences, prefs);
        return obj;
    }

    presence(mode) {

        assert(['optional', 'required', 'forbidden'].includes(mode), 'Unknown presence mode', mode);

        return this.$_setFlag('presence', mode);
    }

    raw(enabled = true) {

        return this.$_setFlag('result', enabled ? 'raw' : undefined);
    }

    result(mode) {

        assert(['raw', 'strip'].includes(mode), 'Unknown result mode', mode);

        return this.$_setFlag('result', mode);
    }

    required() {

        return this.presence('required');
    }

    strict(enabled) {

        const obj = this.clone();

        const convert = enabled === undefined ? false : !enabled;
        obj._preferences = Common.preferences(obj._preferences, { convert });
        return obj;
    }

    strip(enabled = true) {

        return this.$_setFlag('result', enabled ? 'strip' : undefined);
    }

    tag(...tags) {

        assert(tags.length, 'Missing tags');
        for (const tag of tags) {
            assert(tag && typeof tag === 'string', 'Tags must be non-empty strings');
        }

        return this._inner('tags', tags);
    }

    unit(name) {

        assert(name && typeof name === 'string', 'Unit name must be a non-empty string');

        return this.$_setFlag('unit', name);
    }

    valid(...values) {

        Common.verifyFlat(values, 'valid');

        const obj = this.allow(...values);
        obj.$_setFlag('only', !!obj._valids, { clone: false });
        return obj;
    }

    when(condition, options) {

        const obj = this.clone();

        if (!obj.$_terms.whens) {
            obj.$_terms.whens = [];
        }

        const when = Compile.when(obj, condition, options);
        if (!['any', 'link'].includes(obj.type)) {
            const conditions = when.is ? [when] : when.switch;
            for (const item of conditions) {
                assert(!item.then || item.then.type === 'any' || item.then.type === obj.type, 'Cannot combine', obj.type, 'with', item.then && item.then.type);
                assert(!item.otherwise || item.otherwise.type === 'any' || item.otherwise.type === obj.type, 'Cannot combine', obj.type, 'with', item.otherwise && item.otherwise.type);

            }
        }

        obj.$_terms.whens.push(when);
        return obj.$_mutateRebuild();
    }

    // Helpers

    cache(cache) {

        assert(!this._inRuleset(), 'Cannot set caching inside a ruleset');
        assert(!this._cache, 'Cannot override schema cache');
        assert(this._flags.artifact === undefined, 'Cannot cache a rule with an artifact');

        const obj = this.clone();
        obj._cache = cache || Cache.provider.provision();
        obj.$_temp.ruleset = false;
        return obj;
    }

    clone() {

        const obj = Object.create(Object.getPrototypeOf(this));
        return this._assign(obj);
    }

    concat(source) {

        assert(Common.isSchema(source), 'Invalid schema object');
        assert(this.type === 'any' || source.type === 'any' || source.type === this.type, 'Cannot merge type', this.type, 'with another type:', source.type);
        assert(!this._inRuleset(), 'Cannot concatenate onto a schema with open ruleset');
        assert(!source._inRuleset(), 'Cannot concatenate a schema with open ruleset');

        let obj = this.clone();

        if (this.type === 'any' &&
            source.type !== 'any') {

            // Change obj to match source type

            const tmpObj = source.clone();
            for (const key of Object.keys(obj)) {
                if (key !== 'type') {
                    tmpObj[key] = obj[key];
                }
            }

            obj = tmpObj;
        }

        obj._ids.concat(source._ids);
        obj._refs.register(source, Ref.toSibling);

        obj._preferences = obj._preferences ? Common.preferences(obj._preferences, source._preferences) : source._preferences;
        obj._valids = Values.merge(obj._valids, source._valids, source._invalids);
        obj._invalids = Values.merge(obj._invalids, source._invalids, source._valids);

        // Remove unique rules present in source

        for (const name of source._singleRules.keys()) {
            if (obj._singleRules.has(name)) {
                obj._rules = obj._rules.filter((target) => target.keep || target.name !== name);
                obj._singleRules.delete(name);
            }
        }

        // Rules

        for (const test of source._rules) {
            if (!source._definition.rules[test.method].multi) {
                obj._singleRules.set(test.name, test);
            }

            obj._rules.push(test);
        }

        // Flags

        if (obj._flags.empty &&
            source._flags.empty) {

            obj._flags.empty = obj._flags.empty.concat(source._flags.empty);
            const flags = Object.assign({}, source._flags);
            delete flags.empty;
            merge(obj._flags, flags);
        }
        else if (source._flags.empty) {
            obj._flags.empty = source._flags.empty;
            const flags = Object.assign({}, source._flags);
            delete flags.empty;
            merge(obj._flags, flags);
        }
        else {
            merge(obj._flags, source._flags);
        }

        // Terms

        for (const key in source.$_terms) {
            const terms = source.$_terms[key];
            if (!terms) {
                if (!obj.$_terms[key]) {
                    obj.$_terms[key] = terms;
                }

                continue;
            }

            if (!obj.$_terms[key]) {
                obj.$_terms[key] = terms.slice();
                continue;
            }

            obj.$_terms[key] = obj.$_terms[key].concat(terms);
        }

        // Tracing

        if (this.$_root._tracer) {
            this.$_root._tracer._combine(obj, [this, source]);
        }

        // Rebuild

        return obj.$_mutateRebuild();
    }

    extend(options) {

        assert(!options.base, 'Cannot extend type with another base');

        return Extend.type(this, options);
    }

    extract(path) {

        path = Array.isArray(path) ? path : path.split('.');
        return this._ids.reach(path);
    }

    fork(paths, adjuster) {

        assert(!this._inRuleset(), 'Cannot fork inside a ruleset');

        let obj = this;                                             // eslint-disable-line consistent-this
        for (let path of [].concat(paths)) {
            path = Array.isArray(path) ? path : path.split('.');
            obj = obj._ids.fork(path, adjuster, obj);
        }

        obj.$_temp.ruleset = false;
        return obj;
    }

    isAsync() {

        if (Boolean(this.$_terms.externals?.length)) {
            return true;
        }

        if (this.$_terms.whens) {
            for (const when of this.$_terms.whens) {
                if (when.then?.isAsync()) {
                    return true;
                }

                if (when.otherwise?.isAsync()) {
                    return true;
                }

                if (when.switch) {
                    for (const item of when.switch) {
                        if (item.then?.isAsync()) {
                            return true;
                        }

                        if (item.otherwise?.isAsync()) {
                            return true;
                        }
                    }
                }
            }
        }

        return false;
    }

    rule(options) {

        const def = this._definition;
        Common.assertOptions(options, Object.keys(def.modifiers));

        assert(this.$_temp.ruleset !== false, 'Cannot apply rules to empty ruleset or the last rule added does not support rule properties');
        const start = this.$_temp.ruleset === null ? this._rules.length - 1 : this.$_temp.ruleset;
        assert(start >= 0 && start < this._rules.length, 'Cannot apply rules to empty ruleset');

        const obj = this.clone();

        for (let i = start; i < obj._rules.length; ++i) {
            const original = obj._rules[i];
            const rule = clone(original);

            for (const name in options) {
                def.modifiers[name](rule, options[name]);
                assert(rule.name === original.name, 'Cannot change rule name');
            }

            obj._rules[i] = rule;

            if (obj._singleRules.get(rule.name) === original) {
                obj._singleRules.set(rule.name, rule);
            }
        }

        obj.$_temp.ruleset = false;
        return obj.$_mutateRebuild();
    }

    get ruleset() {

        assert(!this._inRuleset(), 'Cannot start a new ruleset without closing the previous one');

        const obj = this.clone();
        obj.$_temp.ruleset = obj._rules.length;
        return obj;
    }

    get $() {

        return this.ruleset;
    }

    tailor(targets) {

        targets = [].concat(targets);

        assert(!this._inRuleset(), 'Cannot tailor inside a ruleset');

        let obj = this;                                                     // eslint-disable-line consistent-this

        if (this.$_terms.alterations) {
            for (const { target, adjuster } of this.$_terms.alterations) {
                if (targets.includes(target)) {
                    obj = adjuster(obj);
                    assert(Common.isSchema(obj), 'Alteration adjuster for', target, 'failed to return a schema object');
                }
            }
        }

        obj = obj.$_modify({ each: (item) => item.tailor(targets), ref: false });
        obj.$_temp.ruleset = false;
        return obj.$_mutateRebuild();
    }

    tracer() {

        return Trace.location ? Trace.location(this) : this;                // $lab:coverage:ignore$
    }

    validate(value, options) {

        return Validator.entry(value, this, options);
    }

    validateAsync(value, options) {

        return Validator.entryAsync(value, this, options);
    }

    // Extensions

    $_addRule(options) {

        // Normalize rule

        if (typeof options === 'string') {
            options = { name: options };
        }

        assert(options && typeof options === 'object', 'Invalid options');
        assert(options.name && typeof options.name === 'string', 'Invalid rule name');

        for (const key in options) {
            assert(key[0] !== '_', 'Cannot set private rule properties');
        }

        const rule = Object.assign({}, options);        // Shallow cloned
        rule._resolve = [];
        rule.method = rule.method || rule.name;

        const definition = this._definition.rules[rule.method];
        const args = rule.args;

        assert(definition, 'Unknown rule', rule.method);

        // Args

        const obj = this.clone();

        if (args) {
            assert(Object.keys(args).length === 1 || Object.keys(args).length === this._definition.rules[rule.name].args.length, 'Invalid rule definition for', this.type, rule.name);

            for (const key in args) {
                let arg = args[key];

                if (definition.argsByName) {
                    const resolver = definition.argsByName.get(key);

                    if (resolver.ref &&
                        Common.isResolvable(arg)) {

                        rule._resolve.push(key);
                        obj.$_mutateRegister(arg);
                    }
                    else {
                        if (resolver.normalize) {
                            arg = resolver.normalize(arg);
                            args[key] = arg;
                        }

                        if (resolver.assert) {
                            const error = Common.validateArg(arg, key, resolver);
                            assert(!error, error, 'or reference');
                        }
                    }
                }

                if (arg === undefined) {
                    delete args[key];
                    continue;
                }

                args[key] = arg;
            }
        }

        // Unique rules

        if (!definition.multi) {
            obj._ruleRemove(rule.name, { clone: false });
            obj._singleRules.set(rule.name, rule);
        }

        if (obj.$_temp.ruleset === false) {
            obj.$_temp.ruleset = null;
        }

        if (definition.priority) {
            obj._rules.unshift(rule);
        }
        else {
            obj._rules.push(rule);
        }

        return obj;
    }

    $_compile(schema, options) {

        return Compile.schema(this.$_root, schema, options);
    }

    $_createError(code, value, local, state, prefs, options = {}) {

        const flags = options.flags !== false ? this._flags : {};
        const messages = options.messages ? Messages.merge(this._definition.messages, options.messages) : this._definition.messages;
        return new Errors.Report(code, value, local, flags, messages, state, prefs);
    }

    $_getFlag(name) {

        return this._flags[name];
    }

    $_getRule(name) {

        return this._singleRules.get(name);
    }

    $_mapLabels(path) {

        path = Array.isArray(path) ? path : path.split('.');
        return this._ids.labels(path);
    }

    $_match(value, state, prefs, overrides) {

        prefs = Object.assign({}, prefs);       // Shallow cloned
        prefs.abortEarly = true;
        prefs._externals = false;

        state.snapshot();
        const result = !Validator.validate(value, this, state, prefs, overrides).errors;
        state.restore();

        return result;
    }

    $_modify(options) {

        Common.assertOptions(options, ['each', 'once', 'ref', 'schema']);
        return Modify.schema(this, options) || this;
    }

    $_mutateRebuild() {

        assert(!this._inRuleset(), 'Cannot add this rule inside a ruleset');

        this._refs.reset();
        this._ids.reset();

        const each = (item, { source, name, path, key }) => {

            const family = this._definition[source][name] && this._definition[source][name].register;
            if (family !== false) {
                this.$_mutateRegister(item, { family, key });
            }
        };

        this.$_modify({ each });

        if (this._definition.rebuild) {
            this._definition.rebuild(this);
        }

        this.$_temp.ruleset = false;
        return this;
    }

    $_mutateRegister(schema, { family, key } = {}) {

        this._refs.register(schema, family);
        this._ids.register(schema, { key });
    }

    $_property(name) {

        return this._definition.properties[name];
    }

    $_reach(path) {

        return this._ids.reach(path);
    }

    $_rootReferences() {

        return this._refs.roots();
    }

    $_setFlag(name, value, options = {}) {

        assert(name[0] === '_' || !this._inRuleset(), 'Cannot set flag inside a ruleset');

        const flag = this._definition.flags[name] || {};
        if (deepEqual(value, flag.default)) {
            value = undefined;
        }

        if (deepEqual(value, this._flags[name])) {
            return this;
        }

        const obj = options.clone !== false ? this.clone() : this;

        if (value !== undefined) {
            obj._flags[name] = value;
            obj.$_mutateRegister(value);
        }
        else {
            delete obj._flags[name];
        }

        if (name[0] !== '_') {
            obj.$_temp.ruleset = false;
        }

        return obj;
    }

    $_parent(method, ...args) {

        return this[method][Common.symbols.parent].call(this, ...args);
    }

    $_validate(value, state, prefs) {

        return Validator.validate(value, this, state, prefs);
    }

    // Internals

    _assign(target) {

        target.type = this.type;

        target.$_root = this.$_root;

        target.$_temp = Object.assign({}, this.$_temp);
        target.$_temp.whens = {};

        target._ids = this._ids.clone();
        target._preferences = this._preferences;
        target._valids = this._valids && this._valids.clone();
        target._invalids = this._invalids && this._invalids.clone();
        target._rules = this._rules.slice();
        target._singleRules = clone(this._singleRules, { shallow: true });
        target._refs = this._refs.clone();
        target._flags = Object.assign({}, this._flags);
        target._cache = null;

        target.$_terms = {};
        for (const key in this.$_terms) {
            target.$_terms[key] = this.$_terms[key] ? this.$_terms[key].slice() : null;
        }

        // Backwards compatibility

        target.$_super = {};
        for (const override in this.$_super) {
            target.$_super[override] = this._super[override].bind(target);
        }

        return target;
    }

    _bare() {

        const obj = this.clone();
        obj._reset();

        const terms = obj._definition.terms;
        for (const name in terms) {
            const term = terms[name];
            obj.$_terms[name] = term.init;
        }

        return obj.$_mutateRebuild();
    }

    _default(flag, value, options = {}) {

        Common.assertOptions(options, 'literal');

        assert(value !== undefined, 'Missing', flag, 'value');
        assert(typeof value === 'function' || !options.literal, 'Only function value supports literal option');

        if (typeof value === 'function' &&
            options.literal) {

            value = {
                [Common.symbols.literal]: true,
                literal: value
            };
        }

        const obj = this.$_setFlag(flag, value);
        return obj;
    }

    _generate(value, state, prefs) {

        if (!this.$_terms.whens) {
            return { schema: this };
        }

        // Collect matching whens

        const whens = [];
        const ids = [];
        for (let i = 0; i < this.$_terms.whens.length; ++i) {
            const when = this.$_terms.whens[i];

            if (when.concat) {
                whens.push(when.concat);
                ids.push(`${i}.concat`);
                continue;
            }

            const input = when.ref ? when.ref.resolve(value, state, prefs) : value;
            const tests = when.is ? [when] : when.switch;
            const before = ids.length;

            for (let j = 0; j < tests.length; ++j) {
                const { is, then, otherwise } = tests[j];

                const baseId = `${i}${when.switch ? '.' + j : ''}`;
                if (is.$_match(input, state.nest(is, `${baseId}.is`), prefs)) {
                    if (then) {
                        const localState = state.localize([...state.path, `${baseId}.then`], state.ancestors, state.schemas);
                        const { schema: generated, id } = then._generate(value, localState, prefs);
                        whens.push(generated);
                        ids.push(`${baseId}.then${id ? `(${id})` : ''}`);
                        break;
                    }
                }
                else if (otherwise) {
                    const localState = state.localize([...state.path, `${baseId}.otherwise`], state.ancestors, state.schemas);
                    const { schema: generated, id } = otherwise._generate(value, localState, prefs);
                    whens.push(generated);
                    ids.push(`${baseId}.otherwise${id ? `(${id})` : ''}`);
                    break;
                }
            }

            if (when.break &&
                ids.length > before) {          // Something matched

                break;
            }
        }

        // Check cache

        const id = ids.join(', ');
        state.mainstay.tracer.debug(state, 'rule', 'when', id);

        if (!id) {
            return { schema: this };
        }

        if (!state.mainstay.tracer.active &&
            this.$_temp.whens[id]) {

            return { schema: this.$_temp.whens[id], id };
        }

        // Generate dynamic schema

        let obj = this;                                             // eslint-disable-line consistent-this
        if (this._definition.generate) {
            obj = this._definition.generate(this, value, state, prefs);
        }

        // Apply whens

        for (const when of whens) {
            obj = obj.concat(when);
        }

        // Tracing

        if (this.$_root._tracer) {
            this.$_root._tracer._combine(obj, [this, ...whens]);
        }

        // Cache result

        this.$_temp.whens[id] = obj;
        return { schema: obj, id };
    }

    _inner(type, values, options = {}) {

        assert(!this._inRuleset(), `Cannot set ${type} inside a ruleset`);

        const obj = this.clone();
        if (!obj.$_terms[type] ||
            options.override) {

            obj.$_terms[type] = [];
        }

        if (options.single) {
            obj.$_terms[type].push(values);
        }
        else {
            obj.$_terms[type].push(...values);
        }

        obj.$_temp.ruleset = false;
        return obj;
    }

    _inRuleset() {

        return this.$_temp.ruleset !== null && this.$_temp.ruleset !== false;
    }

    _ruleRemove(name, options = {}) {

        if (!this._singleRules.has(name)) {
            return this;
        }

        const obj = options.clone !== false ? this.clone() : this;

        obj._singleRules.delete(name);

        const filtered = [];
        for (let i = 0; i < obj._rules.length; ++i) {
            const test = obj._rules[i];
            if (test.name === name &&
                !test.keep) {

                if (obj._inRuleset() &&
                    i < obj.$_temp.ruleset) {

                    --obj.$_temp.ruleset;
                }

                continue;
            }

            filtered.push(test);
        }

        obj._rules = filtered;
        return obj;
    }

    _values(values, key) {

        Common.verifyFlat(values, key.slice(1, -1));

        const obj = this.clone();

        const override = values[0] === Common.symbols.override;
        if (override) {
            values = values.slice(1);
        }

        if (!obj[key] &&
            values.length) {

            obj[key] = new Values();
        }
        else if (override) {
            obj[key] = values.length ? new Values() : null;
            obj.$_mutateRebuild();
        }

        if (!obj[key]) {
            return obj;
        }

        if (override) {
            obj[key].override();
        }

        for (const value of values) {
            assert(value !== undefined, 'Cannot call allow/valid/invalid with undefined');
            assert(value !== Common.symbols.override, 'Override must be the first value');

            const other = key === '_invalids' ? '_valids' : '_invalids';
            if (obj[other]) {
                obj[other].remove(value);
                if (!obj[other].length) {
                    assert(key === '_valids' || !obj._flags.only, 'Setting invalid value', value, 'leaves schema rejecting all values due to previous valid rule');
                    obj[other] = null;
                }
            }

            obj[key].add(value, obj._refs);
        }

        return obj;
    }

    // Standard Schema

    get '~standard'() {

        const mapToStandardError = (error) => {

            let issues;
            if (Errors.ValidationError.isError(error)) {
                issues = error.details.map(({ message, path }) => ({
                    message,
                    path
                }));
            }
            else {
                issues = [{
                    message: error.message
                }];
            }

            return {
                issues
            };
        };

        const mapToStandardValue = (value) => ({ value });

        return {
            version: 1,
            vendor: 'joi',
            validate: (value, options) => {

                const result = Validator.standard(value, this, options);

                if (result instanceof Promise) {
                    return result
                        .then(mapToStandardValue, mapToStandardError);
                }

                if (!result.error) {
                    return mapToStandardValue(result.value);
                }

                return mapToStandardError(result.error);
            },
            jsonSchema: {
                input: (options) => this.$_jsonSchema('input', options),
                output: (options) => this.$_jsonSchema('output', options)
            }
        };
    }
};


internals.Base.prototype[Common.symbols.any] = {
    version: Common.version,
    compile: Compile.compile,
    root: '$_root'
};


internals.Base.prototype.isImmutable = true;                // Prevents Hoek from deep cloning schema objects (must be on prototype)


// Aliases

internals.Base.prototype.deny = internals.Base.prototype.invalid;
internals.Base.prototype.disallow = internals.Base.prototype.invalid;
internals.Base.prototype.equal = internals.Base.prototype.valid;
internals.Base.prototype.exist = internals.Base.prototype.required;
internals.Base.prototype.not = internals.Base.prototype.invalid;
internals.Base.prototype.options = internals.Base.prototype.prefs;
internals.Base.prototype.preferences = internals.Base.prototype.prefs;


module.exports = new internals.Base();
