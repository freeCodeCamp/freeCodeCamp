var walk = require('css-tree').walk;
var utils = require('./utils');

/*
    At this step all rules has single simple selector. We try to join by equal
    declaration blocks to first rule, e.g.

    .a { color: red }
    b { ... }
    .b { color: red }
    ->
    .a, .b { color: red }
    b { ... }
*/

function processRule(node, item, list) {
    var selectors = node.prelude.children;
    var declarations = node.block.children;
    var nodeCompareMarker = selectors.first().compareMarker;
    var skippedCompareMarkers = {};

    list.nextUntil(item.next, function(next, nextItem) {
        // skip non-ruleset node if safe
        if (next.type !== 'Rule') {
            return utils.unsafeToSkipNode.call(selectors, next);
        }

        if (node.pseudoSignature !== next.pseudoSignature) {
            return true;
        }

        var nextFirstSelector = next.prelude.children.head;
        var nextDeclarations = next.block.children;
        var nextCompareMarker = nextFirstSelector.data.compareMarker;

        // if next ruleset has same marked as one of skipped then stop joining
        if (nextCompareMarker in skippedCompareMarkers) {
            return true;
        }

        // try to join by selectors
        if (selectors.head === selectors.tail) {
            if (selectors.first().id === nextFirstSelector.data.id) {
                declarations.appendList(nextDeclarations);
                list.remove(nextItem);
                return;
            }
        }

        // try to join by properties
        if (utils.isEqualDeclarations(declarations, nextDeclarations)) {
            var nextStr = nextFirstSelector.data.id;

            selectors.some(function(data, item) {
                var curStr = data.id;

                if (nextStr < curStr) {
                    selectors.insert(nextFirstSelector, item);
                    return true;
                }

                if (!item.next) {
                    selectors.insert(nextFirstSelector);
                    return true;
                }
            });

            list.remove(nextItem);
            return;
        }

        // go to next ruleset if current one can be skipped (has no equal specificity nor element selector)
        if (nextCompareMarker === nodeCompareMarker) {
            return true;
        }

        skippedCompareMarkers[nextCompareMarker] = true;
    });
}

module.exports = function mergeRule(ast) {
    walk(ast, {
        visit: 'Rule',
        enter: processRule
    });
};
