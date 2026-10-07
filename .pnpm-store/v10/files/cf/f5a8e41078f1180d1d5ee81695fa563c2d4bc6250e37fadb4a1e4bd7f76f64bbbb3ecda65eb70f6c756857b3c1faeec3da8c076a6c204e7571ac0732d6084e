'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "component", {
    enumerable: true,
    get: function() {
        return component;
    }
});
var NAMESPACE = 'ais';
var component = function component(componentName) {
    return function() {
        var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, descendantName = _ref.descendantName, modifierName = _ref.modifierName;
        var descendent = descendantName ? "-".concat(descendantName) : '';
        var modifier = modifierName ? "--".concat(modifierName) : '';
        return "".concat(NAMESPACE, "-").concat(componentName).concat(descendent).concat(modifier);
    };
};
