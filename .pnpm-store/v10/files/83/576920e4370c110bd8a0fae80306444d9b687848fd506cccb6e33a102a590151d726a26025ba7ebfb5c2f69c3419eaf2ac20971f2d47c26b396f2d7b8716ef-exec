'use strict';

const Assert = require('@hapi/hoek/lib/assert');

const Any = require('./any');
const Common = require('../common');
const Template = require('../template');


const internals = {};


internals.isDate = function (value) {

    return value instanceof Date;
};


module.exports = Any.extend({

    type: 'date',

    coerce: {
        from: ['number', 'string'],
        method(value, { schema }) {

            return { value: internals.parse(value, schema._flags.format) || value };
        }
    },

    validate(value, { schema, error, prefs }) {

        if (value instanceof Date &&
            !isNaN(value.getTime())) {

            return;
        }

        const format = schema._flags.format;

        if (!prefs.convert ||
            !format ||
            typeof value !== 'string') {

            return { value, errors: error('date.base') };
        }

        return { value, errors: error('date.format', { format }) };
    },

    rules: {

        compare: {
            method: false,
            validate(value, helpers, { date }, { name, operator, args }) {

                const to = date === 'now' ? Date.now() : date.getTime();
                if (Common.compare(value.getTime(), to, operator)) {
                    return value;
                }

                return helpers.error('date.' + name, { limit: args.date, value });
            },
            args: [
                {
                    name: 'date',
                    ref: true,
                    normalize: (date) => {

                        return date === 'now' ? date : internals.parse(date);
                    },
                    assert: (date) => date !== null,
                    message: 'must have a valid date format'
                }
            ]
        },

        format: {
            method(format) {

                Assert(['iso', 'javascript', 'unix'].includes(format), 'Unknown date format', format);

                return this.$_setFlag('format', format);
            }
        },

        greater: {
            method(date) {

                return this.$_addRule({ name: 'greater', method: 'compare', args: { date }, operator: '>' });
            }
        },

        iso: {
            method() {

                return this.format('iso');
            }
        },

        less: {
            method(date) {

                return this.$_addRule({ name: 'less', method: 'compare', args: { date }, operator: '<' });
            }
        },

        max: {
            method(date) {

                return this.$_addRule({ name: 'max', method: 'compare', args: { date }, operator: '<=' });
            }
        },

        min: {
            method(date) {

                return this.$_addRule({ name: 'min', method: 'compare', args: { date }, operator: '>=' });
            }
        },

        timestamp: {
            method(type = 'javascript') {

                Assert(['javascript', 'unix'].includes(type), '"type" must be one of "javascript, unix"');

                return this.format(type);
            }
        }
    },

    cast: {
        number: {
            from: internals.isDate,
            to(value, helpers) {

                return value.getTime();
            }
        },
        string: {
            from: internals.isDate,
            to(value, { prefs }) {

                return Template.date(value, prefs);
            }
        }
    },

    messages: {
        'date.base': '{{#label}} must be a valid date',
        'date.format': '{{#label}} must be in {msg("date.format." + #format) || #format} format',
        'date.greater': '{{#label}} must be greater than {{:#limit}}',
        'date.less': '{{#label}} must be less than {{:#limit}}',
        'date.max': '{{#label}} must be less than or equal to {{:#limit}}',
        'date.min': '{{#label}} must be greater than or equal to {{:#limit}}',

        // Messages used in date.format

        'date.format.iso': 'ISO 8601 date',
        'date.format.javascript': 'timestamp or number of milliseconds',
        'date.format.unix': 'timestamp or number of seconds'
    }
});


// Helpers

internals.parse = function (value, format) {

    if (value instanceof Date) {
        return value;
    }

    if (typeof value !== 'string' &&
        (isNaN(value) || !isFinite(value))) {

        return null;
    }

    if (/^\s*$/.test(value)) {
        return null;
    }

    // ISO

    if (format === 'iso') {
        if (!Common.isIsoDate(value)) {
            return null;
        }

        return internals.date(value.toString());
    }

    // Normalize number string

    const original = value;
    if (typeof value === 'string' &&
        /^[+-]?\d+(\.\d+)?$/.test(value)) {

        value = parseFloat(value);
    }

    // Timestamp

    if (format) {
        if (format === 'javascript') {
            return internals.date(1 * value);        // Casting to number
        }

        if (format === 'unix') {
            return internals.date(1000 * value);
        }

        if (typeof original === 'string') {
            return null;
        }
    }

    // Plain

    return internals.date(value);
};


internals.date = function (value) {

    const date = new Date(value);
    if (!isNaN(date.getTime())) {
        return date;
    }

    return null;
};
