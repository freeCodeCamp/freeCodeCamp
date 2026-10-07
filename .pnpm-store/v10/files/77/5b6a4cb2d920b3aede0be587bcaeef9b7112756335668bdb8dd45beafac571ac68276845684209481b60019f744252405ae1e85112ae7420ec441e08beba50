'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Carousel", {
    enumerable: true,
    get: function() {
        return Carousel;
    }
});
var _interop_require_wildcard = require("@swc/helpers/_/_interop_require_wildcard");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _sliced_to_array = require("@swc/helpers/_/_sliced_to_array");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _react = /*#__PURE__*/ _interop_require_wildcard._(require("react"));
var CarouselUiComponent = (0, _instantsearchuicomponents.createCarouselComponent)({
    createElement: _react.createElement,
    Fragment: _react.Fragment
});
function Carousel(props) {
    var _useState = _sliced_to_array._((0, _react.useState)(false), 2), canScrollLeft = _useState[0], setCanScrollLeft = _useState[1];
    var _useState1 = _sliced_to_array._((0, _react.useState)(true), 2), canScrollRight = _useState1[0], setCanScrollRight = _useState1[1];
    var carouselRefs = {
        listRef: (0, _react.useRef)(null),
        nextButtonRef: (0, _react.useRef)(null),
        previousButtonRef: (0, _react.useRef)(null),
        carouselIdRef: (0, _react.useRef)((0, _instantsearchuicomponents.generateCarouselId)()),
        canScrollLeft: canScrollLeft,
        canScrollRight: canScrollRight,
        setCanScrollLeft: setCanScrollLeft,
        setCanScrollRight: setCanScrollRight
    };
    return /*#__PURE__*/ _react.default.createElement(CarouselUiComponent, _object_spread._({}, carouselRefs, props));
}
