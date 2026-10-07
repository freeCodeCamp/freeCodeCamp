"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parser_context_1 = require("./parser-context");
var render_1 = require("./render");
var CssSelectorParser = /** @class */ (function () {
    function CssSelectorParser() {
        this.pseudos = {};
        this.attrEqualityMods = {};
        this.ruleNestingOperators = {};
        this.substitutesEnabled = false;
    }
    CssSelectorParser.prototype.registerSelectorPseudos = function () {
        var pseudos = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            pseudos[_i] = arguments[_i];
        }
        for (var _a = 0, pseudos_1 = pseudos; _a < pseudos_1.length; _a++) {
            var pseudo = pseudos_1[_a];
            this.pseudos[pseudo] = 'selector';
        }
        return this;
    };
    CssSelectorParser.prototype.unregisterSelectorPseudos = function () {
        var pseudos = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            pseudos[_i] = arguments[_i];
        }
        for (var _a = 0, pseudos_2 = pseudos; _a < pseudos_2.length; _a++) {
            var pseudo = pseudos_2[_a];
            delete this.pseudos[pseudo];
        }
        return this;
    };
    CssSelectorParser.prototype.registerNumericPseudos = function () {
        var pseudos = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            pseudos[_i] = arguments[_i];
        }
        for (var _a = 0, pseudos_3 = pseudos; _a < pseudos_3.length; _a++) {
            var pseudo = pseudos_3[_a];
            this.pseudos[pseudo] = 'numeric';
        }
        return this;
    };
    CssSelectorParser.prototype.unregisterNumericPseudos = function () {
        var pseudos = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            pseudos[_i] = arguments[_i];
        }
        for (var _a = 0, pseudos_4 = pseudos; _a < pseudos_4.length; _a++) {
            var pseudo = pseudos_4[_a];
            delete this.pseudos[pseudo];
        }
        return this;
    };
    CssSelectorParser.prototype.registerNestingOperators = function () {
        var operators = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operators[_i] = arguments[_i];
        }
        for (var _a = 0, operators_1 = operators; _a < operators_1.length; _a++) {
            var operator = operators_1[_a];
            this.ruleNestingOperators[operator] = true;
        }
        return this;
    };
    CssSelectorParser.prototype.unregisterNestingOperators = function () {
        var operators = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operators[_i] = arguments[_i];
        }
        for (var _a = 0, operators_2 = operators; _a < operators_2.length; _a++) {
            var operator = operators_2[_a];
            delete this.ruleNestingOperators[operator];
        }
        return this;
    };
    CssSelectorParser.prototype.registerAttrEqualityMods = function () {
        var mods = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            mods[_i] = arguments[_i];
        }
        for (var _a = 0, mods_1 = mods; _a < mods_1.length; _a++) {
            var mod = mods_1[_a];
            this.attrEqualityMods[mod] = true;
        }
        return this;
    };
    CssSelectorParser.prototype.unregisterAttrEqualityMods = function () {
        var mods = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            mods[_i] = arguments[_i];
        }
        for (var _a = 0, mods_2 = mods; _a < mods_2.length; _a++) {
            var mod = mods_2[_a];
            delete this.attrEqualityMods[mod];
        }
        return this;
    };
    CssSelectorParser.prototype.enableSubstitutes = function () {
        this.substitutesEnabled = true;
        return this;
    };
    CssSelectorParser.prototype.disableSubstitutes = function () {
        this.substitutesEnabled = false;
        return this;
    };
    CssSelectorParser.prototype.parse = function (str) {
        return parser_context_1.parseCssSelector(str, 0, this.pseudos, this.attrEqualityMods, this.ruleNestingOperators, this.substitutesEnabled);
    };
    CssSelectorParser.prototype.render = function (path) {
        return render_1.renderEntity(path).trim();
    };
    return CssSelectorParser;
}());
exports.CssSelectorParser = CssSelectorParser;
