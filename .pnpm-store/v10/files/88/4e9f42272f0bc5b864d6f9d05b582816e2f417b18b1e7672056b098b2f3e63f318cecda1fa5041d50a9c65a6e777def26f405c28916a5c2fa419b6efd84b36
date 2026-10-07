'use strict';

const List = require('./List.cjs');

function clone(node) {
    const result = {};

    for (const key of Object.keys(node)) {
        let value = node[key];

        if (value) {
            if (Array.isArray(value) || value instanceof List.List) {
                value = value.map(clone);
            } else if (value.constructor === Object) {
                value = clone(value);
            }
        }

        result[key] = value;
    }

    return result;
}

exports.clone = clone;
