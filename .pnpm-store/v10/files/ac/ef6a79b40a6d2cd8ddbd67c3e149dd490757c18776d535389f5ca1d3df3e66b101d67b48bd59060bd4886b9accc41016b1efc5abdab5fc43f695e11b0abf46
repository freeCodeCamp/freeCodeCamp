"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subselects = exports.getNextSiblings = exports.ensureIsTag = exports.PLACEHOLDER_ELEMENT = void 0;
var boolbase_1 = require("boolbase");
var procedure_1 = require("../procedure");
/** Used as a placeholder for :has. Will be replaced with the actual element. */
exports.PLACEHOLDER_ELEMENT = {};
function ensureIsTag(next, adapter) {
    if (next === boolbase_1.falseFunc)
        return boolbase_1.falseFunc;
    return function (elem) { return adapter.isTag(elem) && next(elem); };
}
exports.ensureIsTag = ensureIsTag;
function getNextSiblings(elem, adapter) {
    var siblings = adapter.getSiblings(elem);
    if (siblings.length <= 1)
        return [];
    var elemIndex = siblings.indexOf(elem);
    if (elemIndex < 0 || elemIndex === siblings.length - 1)
        return [];
    return siblings.slice(elemIndex + 1).filter(adapter.isTag);
}
exports.getNextSiblings = getNextSiblings;
var is = function (next, token, options, context, compileToken) {
    var opts = {
        xmlMode: !!options.xmlMode,
        adapter: options.adapter,
        equals: options.equals,
    };
    var func = compileToken(token, opts, context);
    return function (elem) { return func(elem) && next(elem); };
};
/*
 * :not, :has, :is, :matches and :where have to compile selectors
 * doing this in src/pseudos.ts would lead to circular dependencies,
 * so we add them here
 */
exports.subselects = {
    is: is,
    /**
     * `:matches` and `:where` are aliases for `:is`.
     */
    matches: is,
    where: is,
    not: function (next, token, options, context, compileToken) {
        var opts = {
            xmlMode: !!options.xmlMode,
            adapter: options.adapter,
            equals: options.equals,
        };
        var func = compileToken(token, opts, context);
        if (func === boolbase_1.falseFunc)
            return next;
        if (func === boolbase_1.trueFunc)
            return boolbase_1.falseFunc;
        return function not(elem) {
            return !func(elem) && next(elem);
        };
    },
    has: function (next, subselect, options, _context, compileToken) {
        var adapter = options.adapter;
        var opts = {
            xmlMode: !!options.xmlMode,
            adapter: adapter,
            equals: options.equals,
        };
        // @ts-expect-error Uses an array as a pointer to the current element (side effects)
        var context = subselect.some(function (s) {
            return s.some(procedure_1.isTraversal);
        })
            ? [exports.PLACEHOLDER_ELEMENT]
            : undefined;
        var compiled = compileToken(subselect, opts, context);
        if (compiled === boolbase_1.falseFunc)
            return boolbase_1.falseFunc;
        if (compiled === boolbase_1.trueFunc) {
            return function (elem) {
                return adapter.getChildren(elem).some(adapter.isTag) && next(elem);
            };
        }
        var hasElement = ensureIsTag(compiled, adapter);
        var _a = compiled.shouldTestNextSiblings, shouldTestNextSiblings = _a === void 0 ? false : _a;
        /*
         * `shouldTestNextSiblings` will only be true if the query starts with
         * a traversal (sibling or adjacent). That means we will always have a context.
         */
        if (context) {
            return function (elem) {
                context[0] = elem;
                var childs = adapter.getChildren(elem);
                var nextElements = shouldTestNextSiblings
                    ? __spreadArray(__spreadArray([], childs, true), getNextSiblings(elem, adapter), true) : childs;
                return (next(elem) && adapter.existsOne(hasElement, nextElements));
            };
        }
        return function (elem) {
            return next(elem) &&
                adapter.existsOne(hasElement, adapter.getChildren(elem));
        };
    },
};
