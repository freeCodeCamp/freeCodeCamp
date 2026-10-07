var List = require('css-tree').List;
var walk = require('css-tree').walk;
var utils = require('./utils');

function calcSelectorLength(list) {
    var length = 0;

    list.each(function(data) {
        length += data.id.length + 1;
    });

    return length - 1;
}

function calcDeclarationsLength(tokens) {
    var length = 0;

    for (var i = 0; i < tokens.length; i++) {
        length += tokens[i].length;
    }

    return (
        length +          // declarations
        tokens.length - 1 // delimeters
    );
}

function processRule(node, item, list) {
    var avoidRulesMerge = this.block !== null ? this.block.avoidRulesMerge : false;
    var selectors = node.prelude.children;
    var block = node.block;
    var disallowDownMarkers = Object.create(null);
    var allowMergeUp = true;
    var allowMergeDown = true;

    list.prevUntil(item.prev, function(prev, prevItem) {
        var prevBlock = prev.block;
        var prevType = prev.type;

        if (prevType !== 'Rule') {
            var unsafe = utils.unsafeToSkipNode.call(selectors, prev);

            if (!unsafe && prevType === 'Atrule' && prevBlock) {
                walk(prevBlock, {
                    visit: 'Rule',
                    enter: function(node) {
                        node.prelude.children.each(function(data) {
                            disallowDownMarkers[data.compareMarker] = true;
                        });
                    }
                });
            }

            return unsafe;
        }

        var prevSelectors = prev.prelude.children;

        if (node.pseudoSignature !== prev.pseudoSignature) {
            return true;
        }

        allowMergeDown = !prevSelectors.some(function(selector) {
            return selector.compareMarker in disallowDownMarkers;
        });

        // try prev ruleset if simpleselectors has no equal specifity and element selector
        if (!allowMergeDown && !allowMergeUp) {
            return true;
        }

        // try to join by selectors
        if (allowMergeUp && utils.isEqualSelectors(prevSelectors, selectors)) {
            prevBlock.children.appendList(block.children);
            list.remove(item);
            return true;
        }

        // try to join by properties
        var diff = utils.compareDeclarations(block.children, prevBlock.children);

        // console.log(diff.eq, diff.ne1, diff.ne2);

        if (diff.eq.length) {
            if (!diff.ne1.length && !diff.ne2.length) {
                // equal blocks
                if (allowMergeDown) {
                    utils.addSelectors(selectors, prevSelectors);
                    list.remove(prevItem);
                }

                return true;
            } else if (!avoidRulesMerge) { /* probably we don't need to prevent those merges for @keyframes
                                              TODO: need to be checked */

                if (diff.ne1.length && !diff.ne2.length) {
                    // prevBlock is subset block
                    var selectorLength = calcSelectorLength(selectors);
                    var blockLength = calcDeclarationsLength(diff.eq); // declarations length

                    if (allowMergeUp && selectorLength < blockLength) {
                        utils.addSelectors(prevSelectors, selectors);
                        block.children = new List().fromArray(diff.ne1);
                    }
                } else if (!diff.ne1.length && diff.ne2.length) {
                    // node is subset of prevBlock
                    var selectorLength = calcSelectorLength(prevSelectors);
                    var blockLength = calcDeclarationsLength(diff.eq); // declarations length

                    if (allowMergeDown && selectorLength < blockLength) {
                        utils.addSelectors(selectors, prevSelectors);
                        prevBlock.children = new List().fromArray(diff.ne2);
                    }
                } else {
                    // diff.ne1.length && diff.ne2.length
                    // extract equal block
                    var newSelector = {
                        type: 'SelectorList',
                        loc: null,
                        children: utils.addSelectors(prevSelectors.copy(), selectors)
                    };
                    var newBlockLength = calcSelectorLength(newSelector.children) + 2; // selectors length + curly braces length
                    var blockLength = calcDeclarationsLength(diff.eq); // declarations length

                    // create new ruleset if declarations length greater than
                    // ruleset description overhead
                    if (blockLength >= newBlockLength) {
                        var newItem = list.createItem({
                            type: 'Rule',
                            loc: null,
                            prelude: newSelector,
                            block: {
                                type: 'Block',
                                loc: null,
                                children: new List().fromArray(diff.eq)
                            },
                            pseudoSignature: node.pseudoSignature
                        });

                        block.children = new List().fromArray(diff.ne1);
                        prevBlock.children = new List().fromArray(diff.ne2overrided);

                        if (allowMergeUp) {
                            list.insert(newItem, prevItem);
                        } else {
                            list.insert(newItem, item);
                        }

                        return true;
                    }
                }
            }
        }

        if (allowMergeUp) {
            // TODO: disallow up merge only if any property interception only (i.e. diff.ne2overrided.length > 0);
            // await property families to find property interception correctly
            allowMergeUp = !prevSelectors.some(function(prevSelector) {
                return selectors.some(function(selector) {
                    return selector.compareMarker === prevSelector.compareMarker;
                });
            });
        }

        prevSelectors.each(function(data) {
            disallowDownMarkers[data.compareMarker] = true;
        });
    });
}

module.exports = function restructRule(ast) {
    walk(ast, {
        visit: 'Rule',
        reverse: true,
        enter: processRule
    });
};
