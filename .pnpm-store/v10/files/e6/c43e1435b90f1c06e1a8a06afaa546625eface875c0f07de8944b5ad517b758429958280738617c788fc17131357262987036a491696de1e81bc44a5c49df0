'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "checkRendering", {
    enumerable: true,
    get: function() {
        return checkRendering;
    }
});
var _getObjectType = require("./getObjectType");
function checkRendering(rendering, usage) {
    if (rendering === undefined || typeof rendering !== 'function') {
        throw new Error("The render function is not valid (received type ".concat((0, _getObjectType.getObjectType)(rendering), ").\n\n").concat(usage));
    }
}
