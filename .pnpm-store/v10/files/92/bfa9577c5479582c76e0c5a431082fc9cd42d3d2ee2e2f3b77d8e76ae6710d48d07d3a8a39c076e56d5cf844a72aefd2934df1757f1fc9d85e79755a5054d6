"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VoidTag = /** @class */ (function () {
    function VoidTag(addClosingSlash, tags) {
        if (addClosingSlash === void 0) { addClosingSlash = false; }
        this.addClosingSlash = addClosingSlash;
        if (Array.isArray(tags)) {
            this.voidTags = tags.reduce(function (set, tag) {
                return set.add(tag.toLowerCase());
            }, new Set());
        }
        else {
            this.voidTags = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'].reduce(function (set, tag) {
                return set.add(tag);
            }, new Set());
        }
    }
    VoidTag.prototype.formatNode = function (tag, attrs, innerHTML) {
        var addClosingSlash = this.addClosingSlash;
        var closingSpace = (addClosingSlash && attrs && !attrs.endsWith(' ')) ? ' ' : '';
        var closingSlash = addClosingSlash ? "".concat(closingSpace, "/") : '';
        return this.isVoidElement(tag.toLowerCase()) ? "<".concat(tag).concat(attrs).concat(closingSlash, ">") : "<".concat(tag).concat(attrs, ">").concat(innerHTML, "</").concat(tag, ">");
    };
    VoidTag.prototype.isVoidElement = function (tag) {
        return this.voidTags.has(tag);
    };
    return VoidTag;
}());
exports.default = VoidTag;
