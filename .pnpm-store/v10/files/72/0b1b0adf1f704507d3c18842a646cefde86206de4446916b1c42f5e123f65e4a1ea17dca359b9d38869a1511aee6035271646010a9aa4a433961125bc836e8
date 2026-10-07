"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileGeneralSelector = void 0;
var attributes_1 = require("./attributes");
var pseudo_selectors_1 = require("./pseudo-selectors");
var css_what_1 = require("css-what");
/*
 * All available rules
 */
function compileGeneralSelector(next, selector, options, context, compileToken) {
    var adapter = options.adapter, equals = options.equals;
    switch (selector.type) {
        case css_what_1.SelectorType.PseudoElement: {
            throw new Error("Pseudo-elements are not supported by css-select");
        }
        case css_what_1.SelectorType.ColumnCombinator: {
            throw new Error("Column combinators are not yet supported by css-select");
        }
        case css_what_1.SelectorType.Attribute: {
            if (selector.namespace != null) {
                throw new Error("Namespaced attributes are not yet supported by css-select");
            }
            if (!options.xmlMode || options.lowerCaseAttributeNames) {
                selector.name = selector.name.toLowerCase();
            }
            return attributes_1.attributeRules[selector.action](next, selector, options);
        }
        case css_what_1.SelectorType.Pseudo: {
            return (0, pseudo_selectors_1.compilePseudoSelector)(next, selector, options, context, compileToken);
        }
        // Tags
        case css_what_1.SelectorType.Tag: {
            if (selector.namespace != null) {
                throw new Error("Namespaced tag names are not yet supported by css-select");
            }
            var name_1 = selector.name;
            if (!options.xmlMode || options.lowerCaseTags) {
                name_1 = name_1.toLowerCase();
            }
            return function tag(elem) {
                return adapter.getName(elem) === name_1 && next(elem);
            };
        }
        // Traversal
        case css_what_1.SelectorType.Descendant: {
            if (options.cacheResults === false ||
                typeof WeakSet === "undefined") {
                return function descendant(elem) {
                    var current = elem;
                    while ((current = adapter.getParent(current))) {
                        if (adapter.isTag(current) && next(current)) {
                            return true;
                        }
                    }
                    return false;
                };
            }
            // @ts-expect-error `ElementNode` is not extending object
            var isFalseCache_1 = new WeakSet();
            return function cachedDescendant(elem) {
                var current = elem;
                while ((current = adapter.getParent(current))) {
                    if (!isFalseCache_1.has(current)) {
                        if (adapter.isTag(current) && next(current)) {
                            return true;
                        }
                        isFalseCache_1.add(current);
                    }
                }
                return false;
            };
        }
        case "_flexibleDescendant": {
            // Include element itself, only used while querying an array
            return function flexibleDescendant(elem) {
                var current = elem;
                do {
                    if (adapter.isTag(current) && next(current))
                        return true;
                } while ((current = adapter.getParent(current)));
                return false;
            };
        }
        case css_what_1.SelectorType.Parent: {
            return function parent(elem) {
                return adapter
                    .getChildren(elem)
                    .some(function (elem) { return adapter.isTag(elem) && next(elem); });
            };
        }
        case css_what_1.SelectorType.Child: {
            return function child(elem) {
                var parent = adapter.getParent(elem);
                return parent != null && adapter.isTag(parent) && next(parent);
            };
        }
        case css_what_1.SelectorType.Sibling: {
            return function sibling(elem) {
                var siblings = adapter.getSiblings(elem);
                for (var i = 0; i < siblings.length; i++) {
                    var currentSibling = siblings[i];
                    if (equals(elem, currentSibling))
                        break;
                    if (adapter.isTag(currentSibling) && next(currentSibling)) {
                        return true;
                    }
                }
                return false;
            };
        }
        case css_what_1.SelectorType.Adjacent: {
            if (adapter.prevElementSibling) {
                return function adjacent(elem) {
                    var previous = adapter.prevElementSibling(elem);
                    return previous != null && next(previous);
                };
            }
            return function adjacent(elem) {
                var siblings = adapter.getSiblings(elem);
                var lastElement;
                for (var i = 0; i < siblings.length; i++) {
                    var currentSibling = siblings[i];
                    if (equals(elem, currentSibling))
                        break;
                    if (adapter.isTag(currentSibling)) {
                        lastElement = currentSibling;
                    }
                }
                return !!lastElement && next(lastElement);
            };
        }
        case css_what_1.SelectorType.Universal: {
            if (selector.namespace != null && selector.namespace !== "*") {
                throw new Error("Namespaced universal selectors are not yet supported by css-select");
            }
            return next;
        }
    }
}
exports.compileGeneralSelector = compileGeneralSelector;
