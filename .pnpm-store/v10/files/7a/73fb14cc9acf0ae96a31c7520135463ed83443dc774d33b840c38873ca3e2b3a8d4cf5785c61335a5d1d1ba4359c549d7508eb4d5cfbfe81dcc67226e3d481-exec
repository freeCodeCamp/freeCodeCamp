'use strict';

const Assert = require('@hapi/hoek/lib/assert');

const Any = require('./any');
const Common = require('../common');


const internals = {
    numberRx: /^\s*[+-]?(?:(?:\d+(?:\.\d*)?)|(?:\.\d+))(?:e([+-]?\d+))?\s*$/i,
    precisionRx: /(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/,
    exponentialPartRegex: /[eE][+-]?\d+$/,
    leadingSignAndZerosRegex: /^[+-]?(0*)?/,
    dotRegex: /\./,
    trailingZerosRegex: /0+$/,
    decimalPlaces(value) {

        const str = value.toString();
        const dindex = str.indexOf('.');
        const eindex = str.indexOf('e');
        return (
            (dindex < 0 ? 0 : (eindex < 0 ? str.length : eindex) - dindex - 1) +
            (eindex < 0 ? 0 : Math.max(0, -parseInt(str.slice(eindex + 1))))
        );
    }
};


module.exports = Any.extend({

    type: 'number',

    flags: {

        unsafe: { default: false }
    },

    coerce: {
        from: 'string',
        method(value, { schema, error }) {

            const matches = value.match(internals.numberRx);
            if (!matches) {
                return;
            }

            value = value.trim();
            const result = { value: parseFloat(value) };

            if (result.value === 0) {
                result.value = 0;           // -0
            }

            if (!schema._flags.unsafe) {
                if (value.match(/e/i)) {
                    if (internals.extractSignificantDigits(value) !== internals.extractSignificantDigits(String(result.value))) {
                        result.errors = error('number.unsafe');
                        return result;
                    }
                }
                else {
                    const string = result.value.toString();
                    if (string.match(/e/i)) {
                        return result;
                    }

                    if (string !== internals.normalizeDecimal(value)) {
                        result.errors = error('number.unsafe');
                        return result;
                    }
                }
            }

            return result;
        }
    },

    validate(value, { schema, error, prefs }) {

        if (value === Infinity ||
            value === -Infinity) {

            return { value, errors: error('number.infinity') };
        }

        if (!Common.isNumber(value)) {
            return { value, errors: error('number.base') };
        }

        const result = { value };

        if (prefs.convert) {
            const rule = schema.$_getRule('precision');
            if (rule) {
                const precision = Math.pow(10, rule.args.limit);                    // This is conceptually equivalent to using toFixed but it should be much faster
                result.value = Math.round(result.value * precision) / precision;
            }
        }

        if (result.value === 0) {
            result.value = 0;           // -0
        }

        if (!schema._flags.unsafe &&
            (value > Number.MAX_SAFE_INTEGER || value < Number.MIN_SAFE_INTEGER)) {

            result.errors = error('number.unsafe');
        }

        return result;
    },

    rules: {

        compare: {
            method: false,
            validate(value, helpers, { limit }, { name, operator, args }) {

                if (Common.compare(value, limit, operator)) {
                    return value;
                }

                return helpers.error('number.' + name, { limit: args.limit, value });
            },
            args: [
                {
                    name: 'limit',
                    ref: true,
                    assert: Common.isNumber,
                    message: 'must be a number'
                }
            ]
        },

        greater: {
            method(limit) {

                return this.$_addRule({ name: 'greater', method: 'compare', args: { limit }, operator: '>' });
            }
        },

        integer: {
            method() {

                return this.$_addRule('integer');
            },
            validate(value, helpers) {

                if (Math.trunc(value) - value === 0) {
                    return value;
                }

                return helpers.error('number.integer');
            }
        },

        less: {
            method(limit) {

                return this.$_addRule({ name: 'less', method: 'compare', args: { limit }, operator: '<' });
            }
        },

        max: {
            method(limit) {

                return this.$_addRule({ name: 'max', method: 'compare', args: { limit }, operator: '<=' });
            }
        },

        min: {
            method(limit) {

                return this.$_addRule({ name: 'min', method: 'compare', args: { limit }, operator: '>=' });
            }
        },

        multiple: {
            method(base) {

                const baseDecimalPlace = typeof base === 'number' ? internals.decimalPlaces(base) : null;
                const pfactor = Math.pow(10, baseDecimalPlace);

                return this.$_addRule({
                    name: 'multiple',
                    args: {
                        base,
                        baseDecimalPlace,
                        pfactor
                    }
                });
            },
            validate(value, helpers, { base, baseDecimalPlace, pfactor }, options) {

                const valueDecimalPlace = internals.decimalPlaces(value);

                if (valueDecimalPlace > baseDecimalPlace) {
                    // Value with higher precision than base can never be a multiple
                    return helpers.error('number.multiple', { multiple: options.args.base, value });
                }

                return Math.round(pfactor * value) % Math.round(pfactor * base) === 0 ?
                    value :
                    helpers.error('number.multiple', { multiple: options.args.base, value });
            },
            args: [
                {
                    name: 'base',
                    ref: true,
                    assert: (value) => typeof value === 'number' && isFinite(value) && value > 0,
                    message: 'must be a positive number'
                },
                'baseDecimalPlace',
                'pfactor'
            ],
            multi: true
        },

        negative: {
            method() {

                return this.sign('negative');
            }
        },

        port: {
            method() {

                return this.$_addRule('port');
            },
            validate(value, helpers) {

                if (Number.isSafeInteger(value) &&
                    value >= 0 &&
                    value <= 65535) {

                    return value;
                }

                return helpers.error('number.port');
            }
        },

        positive: {
            method() {

                return this.sign('positive');
            }
        },

        precision: {
            method(limit) {

                Assert(Number.isSafeInteger(limit), 'limit must be an integer');

                return this.$_addRule({ name: 'precision', args: { limit } });
            },
            validate(value, helpers, { limit }) {

                const places = value.toString().match(internals.precisionRx);
                const decimals = Math.max((places[1] ? places[1].length : 0) - (places[2] ? parseInt(places[2], 10) : 0), 0);
                if (decimals <= limit) {
                    return value;
                }

                return helpers.error('number.precision', { limit, value });
            },
            convert: true
        },

        sign: {
            method(sign) {

                Assert(['negative', 'positive'].includes(sign), 'Invalid sign', sign);

                return this.$_addRule({ name: 'sign', args: { sign } });
            },
            validate(value, helpers, { sign }) {

                if (sign === 'negative' && value < 0 ||
                    sign === 'positive' && value > 0) {

                    return value;
                }

                return helpers.error(`number.${sign}`);
            }
        },

        unsafe: {
            method(enabled = true) {

                Assert(typeof enabled === 'boolean', 'enabled must be a boolean');

                return this.$_setFlag('unsafe', enabled);
            }
        }
    },

    cast: {
        string: {
            from: (value) => typeof value === 'number',
            to(value, helpers) {

                return value.toString();
            }
        }
    },

    messages: {
        'number.base': '{{#label}} must be a number',
        'number.greater': '{{#label}} must be greater than {{#limit}}',
        'number.infinity': '{{#label}} cannot be infinity',
        'number.integer': '{{#label}} must be an integer',
        'number.less': '{{#label}} must be less than {{#limit}}',
        'number.max': '{{#label}} must be less than or equal to {{#limit}}',
        'number.min': '{{#label}} must be greater than or equal to {{#limit}}',
        'number.multiple': '{{#label}} must be a multiple of {{#multiple}}',
        'number.negative': '{{#label}} must be a negative number',
        'number.port': '{{#label}} must be a valid port',
        'number.positive': '{{#label}} must be a positive number',
        'number.precision': '{{#label}} must have no more than {{#limit}} decimal places',
        'number.unsafe': '{{#label}} must be a safe number'
    }
});


// Helpers

internals.extractSignificantDigits = function (value) {

    return value
        .replace(internals.exponentialPartRegex, '')
        .replace(internals.dotRegex, '')
        .replace(internals.trailingZerosRegex, '')
        .replace(internals.leadingSignAndZerosRegex, '');
};


internals.normalizeDecimal = function (str) {

    str = str
        // Remove leading plus signs
        .replace(/^\+/, '')
        // Remove trailing zeros if there is a decimal point and unecessary decimal points
        .replace(/\.0*$/, '')
        // Add a integer 0 if the numbers starts with a decimal point
        .replace(/^(-?)\.([^\.]*)$/, '$10.$2')
        // Remove leading zeros
        .replace(/^(-?)0+([0-9])/, '$1$2');

    if (str.includes('.') &&
        str.endsWith('0')) {

        str = str.replace(/0+$/, '');
    }

    if (str === '-0') {
        return '0';
    }

    return str;
};
