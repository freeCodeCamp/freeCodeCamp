'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getContainerNode", {
    enumerable: true,
    get: function() {
        return getContainerNode;
    }
});
var _isDomElement = require("./isDomElement");
function getContainerNode(selectorOrHTMLElement) {
    var isSelectorString = typeof selectorOrHTMLElement === 'string';
    var domElement = isSelectorString ? document.querySelector(selectorOrHTMLElement) : selectorOrHTMLElement;
    if (!(0, _isDomElement.isDomElement)(domElement)) {
        var errorMessage = 'Container must be `string` or `HTMLElement`.';
        if (isSelectorString) {
            errorMessage += " Unable to find ".concat(selectorOrHTMLElement);
        }
        throw new Error(errorMessage);
    }
    return domElement;
}
