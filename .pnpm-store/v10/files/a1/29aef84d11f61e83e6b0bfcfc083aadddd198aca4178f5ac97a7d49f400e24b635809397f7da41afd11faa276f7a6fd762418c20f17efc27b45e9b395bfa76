'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get createCarouselComponent () {
        return createCarouselComponent;
    },
    get generateCarouselId () {
        return generateCarouselId;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _lib = require("../lib");
var _recommendshared = require("./recommend-shared");
var lastCarouselId = 0;
function generateCarouselId() {
    return "ais-Carousel-".concat(lastCarouselId++);
}
function PreviousIconDefaultComponent(param) {
    var createElement = param.createElement;
    return /*#__PURE__*/ createElement("svg", {
        width: "8",
        height: "16",
        viewBox: "0 0 8 16",
        fill: "none"
    }, /*#__PURE__*/ createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "currentColor",
        d: "M7.13809 0.744078C7.39844 1.06951 7.39844 1.59715 7.13809 1.92259L2.27616 8L7.13809 14.0774C7.39844 14.4028 7.39844 14.9305 7.13809 15.2559C6.87774 15.5814 6.45563 15.5814 6.19528 15.2559L0.861949 8.58926C0.6016 8.26382 0.6016 7.73618 0.861949 7.41074L6.19528 0.744078C6.45563 0.418641 6.87774 0.418641 7.13809 0.744078Z"
    }));
}
function NextIconDefaultComponent(param) {
    var createElement = param.createElement;
    return /*#__PURE__*/ createElement("svg", {
        width: "8",
        height: "16",
        viewBox: "0 0 8 16",
        fill: "none"
    }, /*#__PURE__*/ createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "currentColor",
        d: "M0.861908 15.2559C0.601559 14.9305 0.601559 14.4028 0.861908 14.0774L5.72384 8L0.861908 1.92259C0.601559 1.59715 0.601559 1.06952 0.861908 0.744079C1.12226 0.418642 1.54437 0.418642 1.80472 0.744079L7.13805 7.41074C7.3984 7.73618 7.3984 8.26382 7.13805 8.58926L1.80472 15.2559C1.54437 15.5814 1.12226 15.5814 0.861908 15.2559Z"
    }));
}
function createCarouselComponent(param) {
    var createElement = param.createElement, Fragment = param.Fragment;
    return function Carousel(userProps) {
        var listRef = userProps.listRef, nextButtonRef = userProps.nextButtonRef, previousButtonRef = userProps.previousButtonRef, carouselIdRef = userProps.carouselIdRef, canScrollLeft = userProps.canScrollLeft, canScrollRight = userProps.canScrollRight, setCanScrollLeft = userProps.setCanScrollLeft, setCanScrollRight = userProps.setCanScrollRight, _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, tmp = userProps.itemComponent, ItemComponent = tmp === void 0 ? (0, _recommendshared.createDefaultItemComponent)({
            createElement: createElement,
            Fragment: Fragment
        }) : tmp, tmp1 = userProps.previousIconComponent, PreviousIcon = tmp1 === void 0 ? PreviousIconDefaultComponent : tmp1, tmp2 = userProps.nextIconComponent, NextIcon = tmp2 === void 0 ? NextIconDefaultComponent : tmp2, HeaderComponent = userProps.headerComponent, _userProps_showNavigation = userProps.showNavigation, showNavigation = _userProps_showNavigation === void 0 ? true : _userProps_showNavigation, items = userProps.items, userTranslations = userProps.translations, sendEvent = userProps.sendEvent, props = _object_without_properties._(userProps, [
            "listRef",
            "nextButtonRef",
            "previousButtonRef",
            "carouselIdRef",
            "canScrollLeft",
            "canScrollRight",
            "setCanScrollLeft",
            "setCanScrollRight",
            "classNames",
            "itemComponent",
            "previousIconComponent",
            "nextIconComponent",
            "headerComponent",
            "showNavigation",
            "items",
            "translations",
            "sendEvent"
        ]);
        var translations = _object_spread._({
            listLabel: 'Items',
            nextButtonLabel: 'Next',
            nextButtonTitle: 'Next',
            previousButtonLabel: 'Previous',
            previousButtonTitle: 'Previous'
        }, userTranslations);
        var cssClasses = {
            root: (0, _lib.cx)('ais-Carousel', classNames.root),
            list: (0, _lib.cx)('ais-Carousel-list', classNames.list),
            item: (0, _lib.cx)('ais-Carousel-item', classNames.item),
            navigation: (0, _lib.cx)('ais-Carousel-navigation', classNames.navigation),
            navigationNext: (0, _lib.cx)('ais-Carousel-navigation--next', classNames.navigationNext),
            navigationPrevious: (0, _lib.cx)('ais-Carousel-navigation--previous', classNames.navigationPrevious)
        };
        function scrollLeft() {
            if (listRef.current) {
                listRef.current.scrollLeft -= listRef.current.offsetWidth * 0.75;
            }
        }
        function scrollRight() {
            if (listRef.current) {
                listRef.current.scrollLeft += listRef.current.offsetWidth * 0.75;
            }
        }
        function updateNavigationButtonsProps() {
            if (!listRef.current) {
                return;
            }
            var isLeftHidden = listRef.current.scrollLeft <= 0;
            var isRightHidden = listRef.current.scrollLeft + listRef.current.clientWidth >= listRef.current.scrollWidth;
            setCanScrollLeft(!isLeftHidden);
            setCanScrollRight(!isRightHidden);
            if (previousButtonRef.current) {
                previousButtonRef.current.hidden = isLeftHidden;
            }
            if (nextButtonRef.current) {
                nextButtonRef.current.hidden = isRightHidden;
            }
        }
        if (items.length === 0) {
            return null;
        }
        return /*#__PURE__*/ createElement("div", _object_spread_props._(_object_spread._({}, props), {
            className: (0, _lib.cx)(cssClasses.root)
        }), HeaderComponent && /*#__PURE__*/ createElement(HeaderComponent, {
            canScrollLeft: canScrollLeft,
            canScrollRight: canScrollRight,
            scrollLeft: scrollLeft,
            scrollRight: scrollRight
        }), showNavigation && /*#__PURE__*/ createElement("button", {
            ref: previousButtonRef,
            title: translations.previousButtonTitle,
            "aria-label": translations.previousButtonLabel,
            hidden: true,
            "aria-controls": carouselIdRef.current,
            className: (0, _lib.cx)(cssClasses.navigation, cssClasses.navigationPrevious),
            onClick: function onClick(event) {
                event.preventDefault();
                scrollLeft();
            }
        }, /*#__PURE__*/ createElement(PreviousIcon, {
            createElement: createElement
        })), /*#__PURE__*/ createElement("ol", {
            className: (0, _lib.cx)(cssClasses.list),
            ref: listRef,
            tabIndex: 0,
            id: carouselIdRef.current,
            "aria-roledescription": "carousel",
            "aria-label": translations.listLabel,
            "aria-live": "polite",
            onScroll: updateNavigationButtonsProps,
            onKeyDown: function onKeyDown(event) {
                if (event.key === 'ArrowLeft') {
                    event.preventDefault();
                    scrollLeft();
                } else if (event.key === 'ArrowRight') {
                    event.preventDefault();
                    scrollRight();
                }
            }
        }, items.map(function(item, index) {
            return /*#__PURE__*/ createElement("li", {
                key: item.objectID,
                className: (0, _lib.cx)(cssClasses.item),
                "aria-roledescription": "slide",
                "aria-label": "".concat(index + 1, " of ").concat(items.length),
                onClick: function onClick() {
                    sendEvent('click:internal', item, 'Item Clicked');
                },
                onAuxClick: function onAuxClick() {
                    sendEvent('click:internal', item, 'Item Clicked');
                }
            }, /*#__PURE__*/ createElement(ItemComponent, {
                item: item,
                sendEvent: sendEvent
            }));
        })), showNavigation && /*#__PURE__*/ createElement("button", {
            ref: nextButtonRef,
            title: translations.nextButtonTitle,
            "aria-label": translations.nextButtonLabel,
            "aria-controls": carouselIdRef.current,
            className: (0, _lib.cx)(cssClasses.navigation, cssClasses.navigationNext),
            onClick: function onClick(event) {
                event.preventDefault();
                scrollRight();
            }
        }, /*#__PURE__*/ createElement(NextIcon, {
            createElement: createElement
        })));
    };
}
