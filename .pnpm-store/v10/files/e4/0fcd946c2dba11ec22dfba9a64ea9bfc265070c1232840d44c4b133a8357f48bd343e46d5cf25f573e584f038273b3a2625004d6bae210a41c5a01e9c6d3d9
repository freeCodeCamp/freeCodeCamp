/**
 * @fileoverview The event generator for AST nodes.
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const esquery = require("esquery");

//------------------------------------------------------------------------------
// Typedefs
//------------------------------------------------------------------------------

/**
 * An object describing an AST selector
 * @typedef {Object} ASTSelector
 * @property {string} rawSelector The string that was parsed into this selector
 * @property {boolean} isExit `true` if this should be emitted when exiting the node rather than when entering
 * @property {Object} parsedSelector An object (from esquery) describing the matching behavior of the selector
 * @property {string[]|null} listenerTypes A list of node types that could possibly cause the selector to match,
 * or `null` if all node types could cause a match
 * @property {number} attributeCount The total number of classes, pseudo-classes, and attribute queries in this selector
 * @property {number} identifierCount The total number of identifier queries in this selector
 */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Computes the union of one or more arrays
 * @param {...any[]} arrays One or more arrays to union
 * @returns {any[]} The union of the input arrays
 */
function union(...arrays) {

    // TODO(stephenwade): Replace this with arrays.flat() when we drop support for Node v10
    return [...new Set([].concat(...arrays))];
}

/**
 * Computes the intersection of one or more arrays
 * @param {...any[]} arrays One or more arrays to intersect
 * @returns {any[]} The intersection of the input arrays
 */
function intersection(...arrays) {
    if (arrays.length === 0) {
        return [];
    }

    let result = [...new Set(arrays[0])];

    for (const array of arrays.slice(1)) {
        result = result.filter(x => array.includes(x));
    }
    return result;
}

/**
 * Gets the possible types of a selector
 * @param {Object} parsedSelector An object (from esquery) describing the matching behavior of the selector
 * @returns {string[]|null} The node types that could possibly trigger this selector, or `null` if all node types could trigger it
 */
function getPossibleTypes(parsedSelector) {
    switch (parsedSelector.type) {
        case "identifier":
            return [parsedSelector.value];

        case "matches": {
            const typesForComponents = parsedSelector.selectors.map(getPossibleTypes);

            if (typesForComponents.every(Boolean)) {
                return union(...typesForComponents);
            }
            return null;
        }

        case "compound": {
            const typesForComponents = parsedSelector.selectors.map(getPossibleTypes).filter(typesForComponent => typesForComponent);

            // If all of the components could match any type, then the compound could also match any type.
            if (!typesForComponents.length) {
                return null;
            }

            /*
             * If at least one of the components could only match a particular type, the compound could only match
             * the intersection of those types.
             */
            return intersection(...typesForComponents);
        }

        case "child":
        case "descendant":
        case "sibling":
        case "adjacent":
            return getPossibleTypes(parsedSelector.right);

        default:
            return null;

    }
}

/**
 * Counts the number of class, pseudo-class, and attribute queries in this selector
 * @param {Object} parsedSelector An object (from esquery) describing the selector's matching behavior
 * @returns {number} The number of class, pseudo-class, and attribute queries in this selector
 */
function countClassAttributes(parsedSelector) {
    switch (parsedSelector.type) {
        case "child":
        case "descendant":
        case "sibling":
        case "adjacent":
            return countClassAttributes(parsedSelector.left) + countClassAttributes(parsedSelector.right);

        case "compound":
        case "not":
        case "matches":
            return parsedSelector.selectors.reduce((sum, childSelector) => sum + countClassAttributes(childSelector), 0);

        case "attribute":
        case "field":
        case "nth-child":
        case "nth-last-child":
            return 1;

        default:
            return 0;
    }
}

/**
 * Counts the number of identifier queries in this selector
 * @param {Object} parsedSelector An object (from esquery) describing the selector's matching behavior
 * @returns {number} The number of identifier queries
 */
function countIdentifiers(parsedSelector) {
    switch (parsedSelector.type) {
        case "child":
        case "descendant":
        case "sibling":
        case "adjacent":
            return countIdentifiers(parsedSelector.left) + countIdentifiers(parsedSelector.right);

        case "compound":
        case "not":
        case "matches":
            return parsedSelector.selectors.reduce((sum, childSelector) => sum + countIdentifiers(childSelector), 0);

        case "identifier":
            return 1;

        default:
            return 0;
    }
}

/**
 * Compares the specificity of two selector objects, with CSS-like rules.
 * @param {ASTSelector} selectorA An AST selector descriptor
 * @param {ASTSelector} selectorB Another AST selector descriptor
 * @returns {number}
 * a value less than 0 if selectorA is less specific than selectorB
 * a value greater than 0 if selectorA is more specific than selectorB
 * a value less than 0 if selectorA and selectorB have the same specificity, and selectorA <= selectorB alphabetically
 * a value greater than 0 if selectorA and selectorB have the same specificity, and selectorA > selectorB alphabetically
 */
function compareSpecificity(selectorA, selectorB) {
    return selectorA.attributeCount - selectorB.attributeCount ||
        selectorA.identifierCount - selectorB.identifierCount ||
        (selectorA.rawSelector <= selectorB.rawSelector ? -1 : 1);
}

/**
 * Parses a raw selector string, and throws a useful error if parsing fails.
 * @param {string} rawSelector A raw AST selector
 * @returns {Object} An object (from esquery) describing the matching behavior of this selector
 * @throws {Error} An error if the selector is invalid
 */
function tryParseSelector(rawSelector) {
    try {
        return esquery.parse(rawSelector.replace(/:exit$/u, ""));
    } catch (err) {
        if (err.location && err.location.start && typeof err.location.start.offset === "number") {
            throw new SyntaxError(`Syntax error in selector "${rawSelector}" at position ${err.location.start.offset}: ${err.message}`);
        }
        throw err;
    }
}

const selectorCache = new Map();

/**
 * Parses a raw selector string, and returns the parsed selector along with specificity and type information.
 * @param {string} rawSelector A raw AST selector
 * @returns {ASTSelector} A selector descriptor
 */
function parseSelector(rawSelector) {
    if (selectorCache.has(rawSelector)) {
        return selectorCache.get(rawSelector);
    }

    const parsedSelector = tryParseSelector(rawSelector);

    const result = {
        rawSelector,
        isExit: rawSelector.endsWith(":exit"),
        parsedSelector,
        listenerTypes: getPossibleTypes(parsedSelector),
        attributeCount: countClassAttributes(parsedSelector),
        identifierCount: countIdentifiers(parsedSelector)
    };

    selectorCache.set(rawSelector, result);
    return result;
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * The event generator for AST nodes.
 * This implements below interface.
 *
 * ```ts
 * interface EventGenerator {
 *     emitter: SafeEmitter;
 *     enterNode(node: ASTNode): void;
 *     leaveNode(node: ASTNode): void;
 * }
 * ```
 */
class NodeEventGenerator {

    // eslint-disable-next-line jsdoc/require-description
    /**
     * @param {SafeEmitter} emitter
     * An SafeEmitter which is the destination of events. This emitter must already
     * have registered listeners for all of the events that it needs to listen for.
     * (See lib/linter/safe-emitter.js for more details on `SafeEmitter`.)
     * @param {ESQueryOptions} esqueryOptions `esquery` options for traversing custom nodes.
     * @returns {NodeEventGenerator} new instance
     */
    constructor(emitter, esqueryOptions) {
        this.emitter = emitter;
        this.esqueryOptions = esqueryOptions;
        this.currentAncestry = [];
        this.enterSelectorsByNodeType = new Map();
        this.exitSelectorsByNodeType = new Map();
        this.anyTypeEnterSelectors = [];
        this.anyTypeExitSelectors = [];

        emitter.eventNames().forEach(rawSelector => {
            const selector = parseSelector(rawSelector);

            if (selector.listenerTypes) {
                const typeMap = selector.isExit ? this.exitSelectorsByNodeType : this.enterSelectorsByNodeType;

                selector.listenerTypes.forEach(nodeType => {
                    if (!typeMap.has(nodeType)) {
                        typeMap.set(nodeType, []);
                    }
                    typeMap.get(nodeType).push(selector);
                });
                return;
            }
            const selectors = selector.isExit ? this.anyTypeExitSelectors : this.anyTypeEnterSelectors;

            selectors.push(selector);
        });

        this.anyTypeEnterSelectors.sort(compareSpecificity);
        this.anyTypeExitSelectors.sort(compareSpecificity);
        this.enterSelectorsByNodeType.forEach(selectorList => selectorList.sort(compareSpecificity));
        this.exitSelectorsByNodeType.forEach(selectorList => selectorList.sort(compareSpecificity));
    }

    /**
     * Checks a selector against a node, and emits it if it matches
     * @param {ASTNode} node The node to check
     * @param {ASTSelector} selector An AST selector descriptor
     * @returns {void}
     */
    applySelector(node, selector) {
        if (esquery.matches(node, selector.parsedSelector, this.currentAncestry, this.esqueryOptions)) {
            this.emitter.emit(selector.rawSelector, node);
        }
    }

    /**
     * Applies all appropriate selectors to a node, in specificity order
     * @param {ASTNode} node The node to check
     * @param {boolean} isExit `false` if the node is currently being entered, `true` if it's currently being exited
     * @returns {void}
     */
    applySelectors(node, isExit) {
        const selectorsByNodeType = (isExit ? this.exitSelectorsByNodeType : this.enterSelectorsByNodeType).get(node.type) || [];
        const anyTypeSelectors = isExit ? this.anyTypeExitSelectors : this.anyTypeEnterSelectors;

        /*
         * selectorsByNodeType and anyTypeSelectors were already sorted by specificity in the constructor.
         * Iterate through each of them, applying selectors in the right order.
         */
        let selectorsByTypeIndex = 0;
        let anyTypeSelectorsIndex = 0;

        while (selectorsByTypeIndex < selectorsByNodeType.length || anyTypeSelectorsIndex < anyTypeSelectors.length) {
            if (
                selectorsByTypeIndex >= selectorsByNodeType.length ||
                anyTypeSelectorsIndex < anyTypeSelectors.length &&
                compareSpecificity(anyTypeSelectors[anyTypeSelectorsIndex], selectorsByNodeType[selectorsByTypeIndex]) < 0
            ) {
                this.applySelector(node, anyTypeSelectors[anyTypeSelectorsIndex++]);
            } else {
                this.applySelector(node, selectorsByNodeType[selectorsByTypeIndex++]);
            }
        }
    }

    /**
     * Emits an event of entering AST node.
     * @param {ASTNode} node A node which was entered.
     * @returns {void}
     */
    enterNode(node) {
        if (node.parent) {
            this.currentAncestry.unshift(node.parent);
        }
        this.applySelectors(node, false);
    }

    /**
     * Emits an event of leaving AST node.
     * @param {ASTNode} node A node which was left.
     * @returns {void}
     */
    leaveNode(node) {
        this.applySelectors(node, true);
        this.currentAncestry.shift();
    }
}

module.exports = NodeEventGenerator;
