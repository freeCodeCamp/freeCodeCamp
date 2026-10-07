'use strict';

const Assert = require('@hapi/hoek/lib/assert');

const Any = require('./any');
const Common = require('../common');


const internals = {};


module.exports = Any.extend({

    type: 'binary',

    coerce: {
        from: ['string', 'object'],
        method(value, { schema }) {

            if (typeof value === 'string' || (value !== null && value.type === 'Buffer')) {
                try {
                    return { value: Buffer.from(value, schema._flags.encoding) };
                }
                catch (ignoreErr) { }
            }
        }
    },

    validate(value, { error }) {

        if (!Buffer.isBuffer(value)) {
            return { value, errors: error('binary.base') };
        }
    },

    rules: {
        encoding: {
            method(encoding) {

                Assert(Buffer.isEncoding(encoding), 'Invalid encoding:', encoding);

                return this.$_setFlag('encoding', encoding);
            }
        },

        length: {
            method(limit) {

                return this.$_addRule({ name: 'length', method: 'length', args: { limit }, operator: '=' });
            },
            validate(value, helpers, { limit }, { name, operator, args }) {

                if (Common.compare(value.length, limit, operator)) {
                    return value;
                }

                return helpers.error('binary.' + name, { limit: args.limit, value });
            },
            args: [
                {
                    name: 'limit',
                    ref: true,
                    assert: Common.limit,
                    message: 'must be a positive integer'
                }
            ]
        },

        max: {
            method(limit) {

                return this.$_addRule({ name: 'max', method: 'length', args: { limit }, operator: '<=' });
            }
        },

        min: {
            method(limit) {

                return this.$_addRule({ name: 'min', method: 'length', args: { limit }, operator: '>=' });
            }
        }
    },

    cast: {
        string: {
            from: (value) => Buffer.isBuffer(value),
            to(value, helpers) {

                return value.toString();
            }
        }
    },

    messages: {
        'binary.base': '{{#label}} must be a buffer or a string',
        'binary.length': '{{#label}} must be {{#limit}} bytes',
        'binary.max': '{{#label}} must be less than or equal to {{#limit}} bytes',
        'binary.min': '{{#label}} must be at least {{#limit}} bytes'
    }
});
