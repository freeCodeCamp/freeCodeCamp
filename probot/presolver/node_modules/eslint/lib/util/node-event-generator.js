/**
 * @fileoverview The event generator for AST nodes.
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const esquery = require("esquery");
const lodash = require("lodash");

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

            if (typesForComponents.every(typesForComponent => typesForComponent)) {
                return lodash.union.apply(null, typesForComponents);
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
            return lodash.intersection.apply(null, typesForComponents);
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
        return esquery.parse(rawSelector.replace(/:exit$/, ""));
    } catch (err) {
        if (typeof err.offset === "number") {
            throw new Error(`Syntax error in selector "${rawSelector}" at position ${err.offset}: ${err.message}`);
        }
        throw err;
    }
}

/**
 * Parses a raw selector string, and returns the parsed selector along with specificity and type information.
 * @param {string} rawSelector A raw AST selector
 * @returns {ASTSelector} A selector descriptor
 */
const parseSelector = lodash.memoize(rawSelector => {
    const parsedSelector = tryParseSelector(rawSelector);

    return {
        rawSelector,
        isExit: rawSelector.endsWith(":exit"),
        parsedSelector,
        listenerTypes: getPossibleTypes(parsedSelector),
        attributeCount: countClassAttributes(parsedSelector),
        identifierCount: countIdentifiers(parsedSelector)
    };
});

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * The event generator for AST nodes.
 * This implements below interface.
 *
 * ```ts
 * interface EventGenerator {
 *     emitter: EventEmitter;
 *     enterNode(node: ASTNode): void;
 *     leaveNode(node: ASTNode): void;
 * }
 * ```
 */
class NodeEventGenerator {

    /**
    * @param {EventEmitter} emitter - An event emitter which is the destination of events. This emitter must already
    * have registered listeners for all of the events that it needs to listen for.
    * @returns {NodeEventGenerator} new instance
    */
    constructor(emitter) {
        this.emitter = emitter;
        this.currentAncestry = [];
        this.enterSelectorsByNodeType = new Map();
        this.exitSelectorsByNodeType = new Map();
        this.anyTypeEnterSelectors = [];
        this.anyTypeExitSelectors = [];

        const eventNames = typeof emitter.eventNames === "function"

            // Use the built-in eventNames() function if available (Node 6+)
            ? emitter.eventNames()

            /*
             * Otherwise, use the private _events property.
             * Using a private property isn't ideal here, but this seems to
             * be the best way to get a list of event names without overriding
             * addEventListener, which would hurt performance. This property
             * is widely used and unlikely to be removed in a future version
             * (see https://github.com/nodejs/node/issues/1817). Also, future
             * node versions will have eventNames() anyway.
             */
            : Object.keys(emitter._events); // eslint-disable-line no-underscore-dangle

        eventNames.forEach(rawSelector => {
            const selector = parseSelector(rawSelector);

            if (selector.listenerTypes) {
                selector.listenerTypes.forEach(nodeType => {
                    const typeMap = selector.isExit ? this.exitSelectorsByNodeType : this.enterSelectorsByNodeType;

                    if (!typeMap.has(nodeType)) {
                        typeMap.set(nodeType, []);
                    }
                    typeMap.get(nodeType).push(selector);
                });
            } else {
                (selector.isExit ? this.anyTypeExitSelectors : this.anyTypeEnterSelectors).push(selector);
            }
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
        if (esquery.matches(node, selector.parsedSelector, this.currentAncestry)) {
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
     * @param {ASTNode} node - A node which was entered.
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
     * @param {ASTNode} node - A node which was left.
     * @returns {void}
     */
    leaveNode(node) {
        this.applySelectors(node, true);
        this.currentAncestry.shift();
    }
}

module.exports = NodeEventGenerator;
