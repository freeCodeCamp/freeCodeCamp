var resolveKeyword = require('css-tree').keyword;
var { hasNoChildren } = require('./utils');

module.exports = function cleanAtrule(node, item, list) {
    if (node.block) {
        // otherwise removed at-rule don't prevent @import for removal
        if (this.stylesheet !== null) {
            this.stylesheet.firstAtrulesAllowed = false;
        }

        if (hasNoChildren(node.block)) {
            list.remove(item);
            return;
        }
    }

    switch (node.name) {
        case 'charset':
            if (hasNoChildren(node.prelude)) {
                list.remove(item);
                return;
            }

            // if there is any rule before @charset -> remove it
            if (item.prev) {
                list.remove(item);
                return;
            }

            break;

        case 'import':
            if (this.stylesheet === null || !this.stylesheet.firstAtrulesAllowed) {
                list.remove(item);
                return;
            }

            // if there are some rules that not an @import or @charset before @import
            // remove it
            list.prevUntil(item.prev, function(rule) {
                if (rule.type === 'Atrule') {
                    if (rule.name === 'import' || rule.name === 'charset') {
                        return;
                    }
                }

                this.root.firstAtrulesAllowed = false;
                list.remove(item);
                return true;
            }, this);

            break;

        default:
            var name = resolveKeyword(node.name).basename;
            if (name === 'keyframes' ||
                name === 'media' ||
                name === 'supports') {

                // drop at-rule with no prelude
                if (hasNoChildren(node.prelude) || hasNoChildren(node.block)) {
                    list.remove(item);
                }
            }
    }
};
