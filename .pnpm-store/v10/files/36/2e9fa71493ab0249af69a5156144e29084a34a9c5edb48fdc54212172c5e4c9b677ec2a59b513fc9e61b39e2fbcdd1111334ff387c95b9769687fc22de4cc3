"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filters = void 0;
var nth_check_1 = __importDefault(require("nth-check"));
var boolbase_1 = require("boolbase");
function getChildFunc(next, adapter) {
    return function (elem) {
        var parent = adapter.getParent(elem);
        return parent != null && adapter.isTag(parent) && next(elem);
    };
}
exports.filters = {
    contains: function (next, text, _a) {
        var adapter = _a.adapter;
        return function contains(elem) {
            return next(elem) && adapter.getText(elem).includes(text);
        };
    },
    icontains: function (next, text, _a) {
        var adapter = _a.adapter;
        var itext = text.toLowerCase();
        return function icontains(elem) {
            return (next(elem) &&
                adapter.getText(elem).toLowerCase().includes(itext));
        };
    },
    // Location specific methods
    "nth-child": function (next, rule, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var func = (0, nth_check_1.default)(rule);
        if (func === boolbase_1.falseFunc)
            return boolbase_1.falseFunc;
        if (func === boolbase_1.trueFunc)
            return getChildFunc(next, adapter);
        return function nthChild(elem) {
            var siblings = adapter.getSiblings(elem);
            var pos = 0;
            for (var i = 0; i < siblings.length; i++) {
                if (equals(elem, siblings[i]))
                    break;
                if (adapter.isTag(siblings[i])) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    "nth-last-child": function (next, rule, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var func = (0, nth_check_1.default)(rule);
        if (func === boolbase_1.falseFunc)
            return boolbase_1.falseFunc;
        if (func === boolbase_1.trueFunc)
            return getChildFunc(next, adapter);
        return function nthLastChild(elem) {
            var siblings = adapter.getSiblings(elem);
            var pos = 0;
            for (var i = siblings.length - 1; i >= 0; i--) {
                if (equals(elem, siblings[i]))
                    break;
                if (adapter.isTag(siblings[i])) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    "nth-of-type": function (next, rule, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var func = (0, nth_check_1.default)(rule);
        if (func === boolbase_1.falseFunc)
            return boolbase_1.falseFunc;
        if (func === boolbase_1.trueFunc)
            return getChildFunc(next, adapter);
        return function nthOfType(elem) {
            var siblings = adapter.getSiblings(elem);
            var pos = 0;
            for (var i = 0; i < siblings.length; i++) {
                var currentSibling = siblings[i];
                if (equals(elem, currentSibling))
                    break;
                if (adapter.isTag(currentSibling) &&
                    adapter.getName(currentSibling) === adapter.getName(elem)) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    "nth-last-of-type": function (next, rule, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var func = (0, nth_check_1.default)(rule);
        if (func === boolbase_1.falseFunc)
            return boolbase_1.falseFunc;
        if (func === boolbase_1.trueFunc)
            return getChildFunc(next, adapter);
        return function nthLastOfType(elem) {
            var siblings = adapter.getSiblings(elem);
            var pos = 0;
            for (var i = siblings.length - 1; i >= 0; i--) {
                var currentSibling = siblings[i];
                if (equals(elem, currentSibling))
                    break;
                if (adapter.isTag(currentSibling) &&
                    adapter.getName(currentSibling) === adapter.getName(elem)) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    // TODO determine the actual root element
    root: function (next, _rule, _a) {
        var adapter = _a.adapter;
        return function (elem) {
            var parent = adapter.getParent(elem);
            return (parent == null || !adapter.isTag(parent)) && next(elem);
        };
    },
    scope: function (next, rule, options, context) {
        var equals = options.equals;
        if (!context || context.length === 0) {
            // Equivalent to :root
            return exports.filters.root(next, rule, options);
        }
        if (context.length === 1) {
            // NOTE: can't be unpacked, as :has uses this for side-effects
            return function (elem) { return equals(context[0], elem) && next(elem); };
        }
        return function (elem) { return context.includes(elem) && next(elem); };
    },
    hover: dynamicStatePseudo("isHovered"),
    visited: dynamicStatePseudo("isVisited"),
    active: dynamicStatePseudo("isActive"),
};
/**
 * Dynamic state pseudos. These depend on optional Adapter methods.
 *
 * @param name The name of the adapter method to call.
 * @returns Pseudo for the `filters` object.
 */
function dynamicStatePseudo(name) {
    return function dynamicPseudo(next, _rule, _a) {
        var adapter = _a.adapter;
        var func = adapter[name];
        if (typeof func !== "function") {
            return boolbase_1.falseFunc;
        }
        return function active(elem) {
            return func(elem) && next(elem);
        };
    };
}
