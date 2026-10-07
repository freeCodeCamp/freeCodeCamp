import { _ } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$1 } from '@swc/helpers/esm/_sliced_to_array.js';
import { html } from 'htm/preact';
import { createCarouselComponent, cx, generateCarouselId } from 'instantsearch-ui-components';
import { h, Fragment } from 'preact';
import { useState, useRef } from 'preact/hooks';

var Carousel = createCarouselComponent({
    createElement: h,
    Fragment: Fragment
});
function CarouselWithRefs(props) {
    var _useState = _$1(useState(false), 2), canScrollLeft = _useState[0], setCanScrollLeft = _useState[1];
    var _useState1 = _$1(useState(true), 2), canScrollRight = _useState1[0], setCanScrollRight = _useState1[1];
    var carouselRefs = {
        listRef: useRef(null),
        nextButtonRef: useRef(null),
        previousButtonRef: useRef(null),
        carouselIdRef: useRef(generateCarouselId()),
        canScrollLeft: canScrollLeft,
        canScrollRight: canScrollRight,
        setCanScrollLeft: setCanScrollLeft,
        setCanScrollRight: setCanScrollRight
    };
    return /*#__PURE__*/ h(Carousel, _({}, carouselRefs, props));
}
function carousel() {
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, cssClasses = _ref.cssClasses, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates, _ref_showNavigation = _ref.showNavigation, showNavigation = _ref_showNavigation === void 0 ? true : _ref_showNavigation;
    return function CarouselTemplate(param) {
        var items = param.items, widgetTemplates = param.templates, tmp = param.cssClasses, widgetCssClasses = tmp === void 0 ? {} : tmp, _param_sendEvent = param.sendEvent, sendEvent = _param_sendEvent === void 0 ? function() {} : _param_sendEvent;
        var previous = templates.previous, next = templates.next, header = templates.header;
        return /*#__PURE__*/ h(CarouselWithRefs, {
            items: items,
            sendEvent: sendEvent,
            itemComponent: widgetTemplates.item,
            headerComponent: header ? function(props) {
                return header(_({
                    html: html
                }, props));
            } : undefined,
            previousIconComponent: previous ? function() {
                return previous({
                    html: html
                });
            } : undefined,
            nextIconComponent: next ? function() {
                return next({
                    html: html
                });
            } : undefined,
            classNames: _({}, cssClasses, {
                list: cx(cssClasses === null || cssClasses === void 0 ? void 0 : cssClasses.list, widgetCssClasses === null || widgetCssClasses === void 0 ? void 0 : widgetCssClasses.list),
                item: cx(cssClasses === null || cssClasses === void 0 ? void 0 : cssClasses.item, widgetCssClasses === null || widgetCssClasses === void 0 ? void 0 : widgetCssClasses.item)
            }),
            showNavigation: showNavigation
        });
    };
}

export { carousel };
