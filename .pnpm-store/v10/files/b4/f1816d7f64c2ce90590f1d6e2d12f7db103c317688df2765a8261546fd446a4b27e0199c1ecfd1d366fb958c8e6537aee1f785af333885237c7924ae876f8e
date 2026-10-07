var { isNodeChildrenList } = require('./utils');

module.exports = function cleanRaw(node, item, list) {
    // raw in stylesheet or block children
    if (isNodeChildrenList(this.stylesheet, list) ||
        isNodeChildrenList(this.block, list)) {
        list.remove(item);
    }
};
