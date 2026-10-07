var { isNodeChildrenList } = require('./utils');

function isSafeOperator(node) {
    return node.type === 'Operator' && node.value !== '+' && node.value !== '-';
}

module.exports = function cleanWhitespace(node, item, list) {
    // remove when first or last item in sequence
    if (item.next === null || item.prev === null) {
        list.remove(item);
        return;
    }

    // white space in stylesheet or block children
    if (isNodeChildrenList(this.stylesheet, list) ||
        isNodeChildrenList(this.block, list)) {
        list.remove(item);
        return;
    }

    if (item.next.data.type === 'WhiteSpace') {
        list.remove(item);
        return;
    }

    if (isSafeOperator(item.prev.data) || isSafeOperator(item.next.data)) {
        list.remove(item);
        return;
    }
};
