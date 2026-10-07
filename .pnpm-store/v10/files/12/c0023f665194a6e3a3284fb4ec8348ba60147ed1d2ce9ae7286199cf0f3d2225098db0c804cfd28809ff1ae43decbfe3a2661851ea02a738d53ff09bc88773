"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRule = exports.presetRules = void 0;
const split_name_1 = require("./split-name");
exports.presetRules = {
    camelCase: {
        expression: /^[a-z][a-zA-Z0-9]*$/,
        recommendationBuilder: (name) => {
            return (0, split_name_1.splitName)(name)
                .map((word, i) => {
                if (i === 0)
                    return word;
                const [first, ...rest] = word;
                return `${first.toUpperCase()}${rest.join('')}`;
            })
                .join('');
        },
    },
    'kebab-case': {
        expression: /^[a-z][-a-z0-9]*$/,
        recommendationBuilder: (name) => {
            return (0, split_name_1.splitName)(name).join('-');
        },
    },
    PascalCase: {
        expression: /^[A-Z][a-zA-Z0-9]*$/,
        recommendationBuilder: (name) => {
            return (0, split_name_1.splitName)(name)
                .map(word => {
                const [first, ...rest] = word;
                return `${first.toUpperCase()}${rest.join('')}`;
            })
                .join('');
        },
    },
    snake_case: {
        expression: /^[a-z][_a-z0-9]*$/,
        recommendationBuilder: (name) => {
            return (0, split_name_1.splitName)(name).join('_');
        },
    },
};
const getRule = (expression) => {
    const rule = exports.presetRules[expression];
    return rule !== null && rule !== void 0 ? rule : { expression: new RegExp(`^${expression}$`) };
};
exports.getRule = getRule;
