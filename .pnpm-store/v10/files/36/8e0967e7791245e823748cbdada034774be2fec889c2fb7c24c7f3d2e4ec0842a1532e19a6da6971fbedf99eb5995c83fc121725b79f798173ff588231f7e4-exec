'use strict';

const Assert = require('@hapi/hoek/lib/assert');

const Keys = require('./keys');


const internals = {};


module.exports = Keys.extend({

    type: 'function',

    properties: {
        typeof: 'function'
    },

    rules: {
        arity: {
            method(n) {

                Assert(Number.isSafeInteger(n) && n >= 0, 'n must be a positive integer');

                return this.$_addRule({ name: 'arity', args: { n } });
            },
            validate(value, helpers, { n }) {

                if (value.length === n) {
                    return value;
                }

                return helpers.error('function.arity', { n });
            }
        },

        class: {
            method() {

                return this.$_addRule('class');
            },
            validate(value, helpers) {

                if ((/^\s*class\s/).test(value.toString())) {
                    return value;
                }

                return helpers.error('function.class', { value });
            }
        },

        minArity: {
            method(n) {

                Assert(Number.isSafeInteger(n) && n > 0, 'n must be a strict positive integer');

                return this.$_addRule({ name: 'minArity', args: { n } });
            },
            validate(value, helpers, { n }) {

                if (value.length >= n) {
                    return value;
                }

                return helpers.error('function.minArity', { n });
            }
        },

        maxArity: {
            method(n) {

                Assert(Number.isSafeInteger(n) && n >= 0, 'n must be a positive integer');

                return this.$_addRule({ name: 'maxArity', args: { n } });
            },
            validate(value, helpers, { n }) {

                if (value.length <= n) {
                    return value;
                }

                return helpers.error('function.maxArity', { n });
            }
        }
    },

    messages: {
        'function.arity': '{{#label}} must have an arity of {{#n}}',
        'function.class': '{{#label}} must be a class',
        'function.maxArity': '{{#label}} must have an arity lesser or equal to {{#n}}',
        'function.minArity': '{{#label}} must have an arity greater or equal to {{#n}}'
    }
});
