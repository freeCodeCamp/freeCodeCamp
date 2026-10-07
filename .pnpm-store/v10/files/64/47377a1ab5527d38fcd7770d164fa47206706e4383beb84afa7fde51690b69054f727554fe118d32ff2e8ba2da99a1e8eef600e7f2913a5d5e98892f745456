'use strict';

const _default = require('./default.cjs');
const expression = require('../function/expression.cjs');
const _var = require('../function/var.cjs');

function isPlusMinusOperator(node) {
    return (
        node !== null &&
        node.type === 'Operator' &&
        (node.value[node.value.length - 1] === '-' || node.value[node.value.length - 1] === '+')
    );
}

const value = {
    getNode: _default,
    onWhiteSpace(next, children) {
        if (isPlusMinusOperator(next)) {
            next.value = ' ' + next.value;
        }
        if (isPlusMinusOperator(children.last)) {
            children.last.value += ' ';
        }
    },
    'expression': expression,
    'var': _var
};

module.exports = value;
