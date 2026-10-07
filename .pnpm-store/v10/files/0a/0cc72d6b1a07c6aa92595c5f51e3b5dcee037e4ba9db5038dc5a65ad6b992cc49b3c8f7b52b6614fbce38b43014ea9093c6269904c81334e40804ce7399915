var property = require('css-tree').property;

module.exports = function cleanDeclartion(node, item, list) {
    if (node.value.children && node.value.children.isEmpty()) {
        list.remove(item);
        return;
    }

    if (property(node.property).custom) {
        if (/\S/.test(node.value.value)) {
            node.value.value = node.value.value.trim();
        }
    }
};
