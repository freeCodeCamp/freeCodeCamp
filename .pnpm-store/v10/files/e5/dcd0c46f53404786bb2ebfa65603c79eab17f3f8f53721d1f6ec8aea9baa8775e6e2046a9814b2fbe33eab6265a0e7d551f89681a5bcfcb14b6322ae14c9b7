'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createFrequentlyBoughtTogetherComponent", {
    enumerable: true,
    get: function() {
        return createFrequentlyBoughtTogetherComponent;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _lib = require("../lib");
var _recommendshared = require("./recommend-shared");
function createFrequentlyBoughtTogetherComponent(param) {
    var createElement = param.createElement, Fragment = param.Fragment;
    return function FrequentlyBoughtTogether(userProps) {
        var _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, tmp = userProps.emptyComponent, EmptyComponent = tmp === void 0 ? (0, _recommendshared.createDefaultEmptyComponent)({
            createElement: createElement,
            Fragment: Fragment
        }) : tmp, tmp1 = userProps.headerComponent, HeaderComponent = tmp1 === void 0 ? (0, _recommendshared.createDefaultHeaderComponent)({
            createElement: createElement,
            Fragment: Fragment
        }) : tmp1, tmp2 = userProps.itemComponent, ItemComponent = tmp2 === void 0 ? (0, _recommendshared.createDefaultItemComponent)({
            createElement: createElement,
            Fragment: Fragment
        }) : tmp2, tmp3 = userProps.layout, Layout = tmp3 === void 0 ? (0, _recommendshared.createListComponent)({
            createElement: createElement,
            Fragment: Fragment
        }) : tmp3, items = userProps.items, status = userProps.status, userTranslations = userProps.translations, sendEvent = userProps.sendEvent, props = _object_without_properties._(userProps, [
            "classNames",
            "emptyComponent",
            "headerComponent",
            "itemComponent",
            "layout",
            "items",
            "status",
            "translations",
            "sendEvent"
        ]);
        var translations = _object_spread._({
            title: 'Frequently bought together',
            sliderLabel: 'Frequently bought together products'
        }, userTranslations);
        var cssClasses = {
            root: (0, _lib.cx)('ais-FrequentlyBoughtTogether', classNames.root),
            emptyRoot: (0, _lib.cx)('ais-FrequentlyBoughtTogether', classNames.root, 'ais-FrequentlyBoughtTogether--empty', classNames.emptyRoot, props.className),
            title: (0, _lib.cx)('ais-FrequentlyBoughtTogether-title', classNames.title),
            container: (0, _lib.cx)('ais-FrequentlyBoughtTogether-container', classNames.container),
            list: (0, _lib.cx)('ais-FrequentlyBoughtTogether-list', classNames.list),
            item: (0, _lib.cx)('ais-FrequentlyBoughtTogether-item', classNames.item)
        };
        if (items.length === 0 && status === 'idle') {
            return /*#__PURE__*/ createElement("section", _object_spread_props._(_object_spread._({}, props), {
                className: cssClasses.emptyRoot
            }), /*#__PURE__*/ createElement(EmptyComponent, null));
        }
        return /*#__PURE__*/ createElement("section", _object_spread_props._(_object_spread._({}, props), {
            className: cssClasses.root
        }), /*#__PURE__*/ createElement(HeaderComponent, {
            classNames: cssClasses,
            items: items,
            translations: translations
        }), /*#__PURE__*/ createElement(Layout, {
            classNames: cssClasses,
            itemComponent: ItemComponent,
            items: items,
            sendEvent: sendEvent
        }));
    };
}
