'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "carousel", {
    enumerable: true,
    get: function() {
        return carousel;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _sliced_to_array = require("@swc/helpers/_/_sliced_to_array");
var _preact = require("htm/preact");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _preact1 = require("preact");
var _hooks = require("preact/hooks");
var Carousel = (0, _instantsearchuicomponents.createCarouselComponent)({
    createElement: _preact1.h,
    Fragment: _preact1.Fragment
});
function CarouselWithRefs(props) {
    var _useState = _sliced_to_array._((0, _hooks.useState)(false), 2), canScrollLeft = _useState[0], setCanScrollLeft = _useState[1];
    var _useState1 = _sliced_to_array._((0, _hooks.useState)(true), 2), canScrollRight = _useState1[0], setCanScrollRight = _useState1[1];
    var carouselRefs = {
        listRef: (0, _hooks.useRef)(null),
        nextButtonRef: (0, _hooks.useRef)(null),
        previousButtonRef: (0, _hooks.useRef)(null),
        carouselIdRef: (0, _hooks.useRef)((0, _instantsearchuicomponents.generateCarouselId)()),
        canScrollLeft: canScrollLeft,
        canScrollRight: canScrollRight,
        setCanScrollLeft: setCanScrollLeft,
        setCanScrollRight: setCanScrollRight
    };
    return /*#__PURE__*/ (0, _preact1.h)(Carousel, _object_spread._({}, carouselRefs, props));
}
function carousel() {
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, cssClasses = _ref.cssClasses, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates, _ref_showNavigation = _ref.showNavigation, showNavigation = _ref_showNavigation === void 0 ? true : _ref_showNavigation;
    return function CarouselTemplate(param) {
        var items = param.items, widgetTemplates = param.templates, tmp = param.cssClasses, widgetCssClasses = tmp === void 0 ? {} : tmp, _param_sendEvent = param.sendEvent, sendEvent = _param_sendEvent === void 0 ? function() {} : _param_sendEvent;
        var previous = templates.previous, next = templates.next, header = templates.header;
        return /*#__PURE__*/ (0, _preact1.h)(CarouselWithRefs, {
            items: items,
            sendEvent: sendEvent,
            itemComponent: widgetTemplates.item,
            headerComponent: header ? function(props) {
                return header(_object_spread._({
                    html: _preact.html
                }, props));
            } : undefined,
            previousIconComponent: previous ? function() {
                return previous({
                    html: _preact.html
                });
            } : undefined,
            nextIconComponent: next ? function() {
                return next({
                    html: _preact.html
                });
            } : undefined,
            classNames: _object_spread._({}, cssClasses, {
                list: (0, _instantsearchuicomponents.cx)(cssClasses === null || cssClasses === void 0 ? void 0 : cssClasses.list, widgetCssClasses === null || widgetCssClasses === void 0 ? void 0 : widgetCssClasses.list),
                item: (0, _instantsearchuicomponents.cx)(cssClasses === null || cssClasses === void 0 ? void 0 : cssClasses.item, widgetCssClasses === null || widgetCssClasses === void 0 ? void 0 : widgetCssClasses.item)
            }),
            showNavigation: showNavigation
        });
    };
}
