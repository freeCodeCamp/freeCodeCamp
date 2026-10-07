'use strict';

const Assert = require('@hapi/hoek/lib/assert');

const Common = require('./common');
const Ref = require('./ref');


const internals = {};


exports.schema = function (Joi, config, options = {}) {

    Common.assertOptions(options, ['appendPath', 'override']);

    try {
        return internals.schema(Joi, config, options);
    }
    catch (err) {
        if (options.appendPath &&
            err.path !== undefined) {

            err.message = `${err.message} (${err.path})`;
        }

        throw err;
    }
};


internals.schema = function (Joi, config, options) {

    Assert(config !== undefined, 'Invalid undefined schema');

    if (Array.isArray(config)) {
        Assert(config.length, 'Invalid empty array schema');

        if (config.length === 1) {
            config = config[0];
        }
    }

    const valid = (base, ...values) => {

        if (options.override !== false) {
            return base.valid(Joi.override, ...values);
        }

        return base.valid(...values);
    };

    if (internals.simple(config)) {
        return valid(Joi, config);
    }

    if (typeof config === 'function') {
        return Joi.custom(config);
    }

    Assert(typeof config === 'object', 'Invalid schema content:', typeof config);

    if (Common.isResolvable(config)) {
        return valid(Joi, config);
    }

    if (Common.isSchema(config)) {
        return config;
    }

    if (Array.isArray(config)) {
        for (const item of config) {
            if (!internals.simple(item)) {
                return Joi.alternatives().try(...config);
            }
        }

        return valid(Joi, ...config);
    }

    if (config instanceof RegExp) {
        return Joi.string().regex(config);
    }

    if (config instanceof Date) {
        return valid(Joi.date(), config);
    }

    Assert(Object.getPrototypeOf(config) === Object.getPrototypeOf({}), 'Schema can only contain plain objects');

    return Joi.object().keys(config);
};


exports.ref = function (id, options) {

    return Ref.isRef(id) ? id : Ref.create(id, options);
};


exports.compile = function (root, schema, options = {}) {

    Common.assertOptions(options, ['legacy']);

    // Compiled by any supported version

    const any = schema && schema[Common.symbols.any];
    if (any) {
        Assert(options.legacy || any.version === Common.version, 'Cannot mix different versions of joi schemas:', any.version, Common.version);
        return schema;
    }

    // Uncompiled root

    if (typeof schema !== 'object' ||
        !options.legacy) {

        return exports.schema(root, schema, { appendPath: true });          // Will error if schema contains other versions
    }

    // Scan schema for compiled parts

    const compiler = internals.walk(schema);
    if (!compiler) {
        return exports.schema(root, schema, { appendPath: true });
    }

    return compiler.compile(compiler.root, schema);
};


internals.walk = function (schema) {

    if (typeof schema !== 'object') {
        return null;
    }

    if (Array.isArray(schema)) {
        for (const item of schema) {
            const compiler = internals.walk(item);
            if (compiler) {
                return compiler;
            }
        }

        return null;
    }

    const any = schema[Common.symbols.any];
    if (any) {
        return { root: schema[any.root], compile: any.compile };
    }

    Assert(Object.getPrototypeOf(schema) === Object.getPrototypeOf({}), 'Schema can only contain plain objects');

    for (const key in schema) {
        const compiler = internals.walk(schema[key]);
        if (compiler) {
            return compiler;
        }
    }

    return null;
};


internals.simple = function (value) {

    return value === null || ['boolean', 'string', 'number'].includes(typeof value);
};


exports.when = function (schema, condition, options) {

    if (options === undefined) {
        Assert(condition && typeof condition === 'object', 'Missing options');

        options = condition;
        condition = Ref.create('.');
    }

    if (Array.isArray(options)) {
        options = { switch: options };
    }

    Common.assertOptions(options, ['is', 'not', 'then', 'otherwise', 'switch', 'break']);

    // Schema condition

    if (Common.isSchema(condition)) {
        Assert(options.is === undefined, '"is" can not be used with a schema condition');
        Assert(options.not === undefined, '"not" can not be used with a schema condition');
        Assert(options.switch === undefined, '"switch" can not be used with a schema condition');

        return internals.condition(schema, { is: condition, then: options.then, otherwise: options.otherwise, break: options.break });
    }

    // Single condition

    Assert(Ref.isRef(condition) || typeof condition === 'string', 'Invalid condition:', condition);
    Assert(options.not === undefined || options.is === undefined, 'Cannot combine "is" with "not"');

    if (options.switch === undefined) {
        let rule = options;
        if (options.not !== undefined) {
            rule = { is: options.not, then: options.otherwise, otherwise: options.then, break: options.break };
        }

        let is = rule.is !== undefined ? schema.$_compile(rule.is) : schema.$_root.invalid(null, false, 0, '').required();
        Assert(rule.then !== undefined || rule.otherwise !== undefined, 'options must have at least one of "then", "otherwise", or "switch"');
        Assert(rule.break === undefined || rule.then === undefined || rule.otherwise === undefined, 'Cannot specify then, otherwise, and break all together');

        if (options.is !== undefined &&
            !Ref.isRef(options.is) &&
            !Common.isSchema(options.is)) {

            is = is.required();                     // Only apply required if this wasn't already a schema or a ref
        }

        return internals.condition(schema, { ref: exports.ref(condition), is, then: rule.then, otherwise: rule.otherwise, break: rule.break });
    }

    // Switch statement

    Assert(Array.isArray(options.switch), '"switch" must be an array');
    Assert(options.is === undefined, 'Cannot combine "switch" with "is"');
    Assert(options.not === undefined, 'Cannot combine "switch" with "not"');
    Assert(options.then === undefined, 'Cannot combine "switch" with "then"');

    const rule = {
        ref: exports.ref(condition),
        switch: [],
        break: options.break
    };

    for (let i = 0; i < options.switch.length; ++i) {
        const test = options.switch[i];
        const last = i === options.switch.length - 1;

        Common.assertOptions(test, last ? ['is', 'then', 'otherwise'] : ['is', 'then']);

        Assert(test.is !== undefined, 'Switch statement missing "is"');
        Assert(test.then !== undefined, 'Switch statement missing "then"');

        const item = {
            is: schema.$_compile(test.is),
            then: schema.$_compile(test.then)
        };

        if (!Ref.isRef(test.is) &&
            !Common.isSchema(test.is)) {

            item.is = item.is.required();           // Only apply required if this wasn't already a schema or a ref
        }

        if (last) {
            Assert(options.otherwise === undefined || test.otherwise === undefined, 'Cannot specify "otherwise" inside and outside a "switch"');
            const otherwise = options.otherwise !== undefined ? options.otherwise : test.otherwise;
            if (otherwise !== undefined) {
                Assert(rule.break === undefined, 'Cannot specify both otherwise and break');
                item.otherwise = schema.$_compile(otherwise);
            }
        }

        rule.switch.push(item);
    }

    return rule;
};


internals.condition = function (schema, condition) {

    for (const key of ['then', 'otherwise']) {
        if (condition[key] === undefined) {
            delete condition[key];
        }
        else {
            condition[key] = schema.$_compile(condition[key]);
        }
    }

    return condition;
};
