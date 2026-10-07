var walk = require('css-tree').walk;
var utils = require('./utils');

function processRule(node, item, list) {
    var selectors = node.prelude.children;
    var declarations = node.block.children;

    list.prevUntil(item.prev, function(prev) {
        // skip non-ruleset node if safe
        if (prev.type !== 'Rule') {
            return utils.unsafeToSkipNode.call(selectors, prev);
        }

        var prevSelectors = prev.prelude.children;
        var prevDeclarations = prev.block.children;

        // try to join rulesets with equal pseudo signature
        if (node.pseudoSignature === prev.pseudoSignature) {
            // try to join by selectors
            if (utils.isEqualSelectors(prevSelectors, selectors)) {
                prevDeclarations.appendList(declarations);
                list.remove(item);
                return true;
            }

            // try to join by declarations
            if (utils.isEqualDeclarations(declarations, prevDeclarations)) {
                utils.addSelectors(prevSelectors, selectors);
                list.remove(item);
                return true;
            }
        }

        // go to prev ruleset if has no selector similarities
        return utils.hasSimilarSelectors(selectors, prevSelectors);
    });
}

// NOTE: direction should be left to right, since rulesets merge to left
// ruleset. When direction right to left unmerged rulesets may prevent lookup
// TODO: remove initial merge
module.exports = function initialMergeRule(ast) {
    walk(ast, {
        visit: 'Rule',
        enter: processRule
    });
};
