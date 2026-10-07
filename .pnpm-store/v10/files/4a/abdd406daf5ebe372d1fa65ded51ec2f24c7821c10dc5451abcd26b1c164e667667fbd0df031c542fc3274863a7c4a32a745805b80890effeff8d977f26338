import getNode from './default.js';
import expressionFn from '../function/expression.js';
import varFn from '../function/var.js';

function isPlusMinusOperator(node) {
    return (
        node !== null &&
        node.type === 'Operator' &&
        (node.value[node.value.length - 1] === '-' || node.value[node.value.length - 1] === '+')
    );
}

export default {
    getNode,
    onWhiteSpace(next, children) {
        if (isPlusMinusOperator(next)) {
            next.value = ' ' + next.value;
        }
        if (isPlusMinusOperator(children.last)) {
            children.last.value += ' ';
        }
    },
    'expression': expressionFn,
    'var': varFn
};
