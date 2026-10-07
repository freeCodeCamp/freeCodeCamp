"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chars = exports.CharsType = void 0;
var CharsType;
(function (CharsType) {
    CharsType["HTML"] = "HTML";
    CharsType["OpenTemplate"] = "OpenTemplate";
    CharsType["Template"] = "Template";
    CharsType["CloseTemplate"] = "CloseTemplate";
})(CharsType || (exports.CharsType = CharsType = {}));
class Chars {
    constructor(type, value, range, wrapper) {
        this.type = type;
        this.value = value;
        this.range = range;
        this.wrapper = wrapper;
        this.isTemplate = type !== CharsType.HTML;
    }
    concat(chars) {
        this.value += chars.value;
        this.range[1] = chars.range[1];
    }
    equals(chars) {
        return this.value === chars;
    }
    length() {
        return this.value.length;
    }
}
exports.Chars = Chars;
