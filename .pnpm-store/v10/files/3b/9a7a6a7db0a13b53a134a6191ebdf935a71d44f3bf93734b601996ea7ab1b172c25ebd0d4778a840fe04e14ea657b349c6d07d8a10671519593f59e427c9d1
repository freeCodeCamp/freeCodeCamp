"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Pluralize_pluralize;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPluralize = exports.Pluralize = void 0;
const pluralize_1 = __importDefault(require("pluralize"));
class Pluralize {
    constructor(dictionaries) {
        _Pluralize_pluralize.set(this, void 0);
        __classPrivateFieldSet(this, _Pluralize_pluralize, pluralize_1.default, "f");
        dictionaries && this.setDictionaries(dictionaries);
    }
    correct(name, rule) {
        const corrector = {
            singular: __classPrivateFieldGet(this, _Pluralize_pluralize, "f").singular,
            plural: __classPrivateFieldGet(this, _Pluralize_pluralize, "f").plural,
        };
        return corrector[rule](name);
    }
    isValidName(name, rule) {
        const validator = {
            singular: __classPrivateFieldGet(this, _Pluralize_pluralize, "f").isSingular,
            plural: __classPrivateFieldGet(this, _Pluralize_pluralize, "f").isPlural,
        };
        return validator[rule](name);
    }
    setDictionaries({ irregular, plural, singular, uncountable }) {
        irregular && irregular.forEach(([singular, plural]) => __classPrivateFieldGet(this, _Pluralize_pluralize, "f").addIrregularRule(singular, plural));
        plural && plural.forEach(([plural, singular]) => __classPrivateFieldGet(this, _Pluralize_pluralize, "f").addPluralRule(new RegExp(plural), singular));
        singular && singular.forEach(([singular, plural]) => __classPrivateFieldGet(this, _Pluralize_pluralize, "f").addSingularRule(new RegExp(singular), plural));
        uncountable && uncountable.forEach(__classPrivateFieldGet(this, _Pluralize_pluralize, "f").addUncountableRule);
    }
}
exports.Pluralize = Pluralize;
_Pluralize_pluralize = new WeakMap();
const getPluralize = (context) => {
    var _a, _b;
    const dictionaries = (_b = (_a = context.settings) === null || _a === void 0 ? void 0 : _a['filenames-simple']) === null || _b === void 0 ? void 0 : _b.pluralize;
    return new Pluralize(dictionaries);
};
exports.getPluralize = getPluralize;
