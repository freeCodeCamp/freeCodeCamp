'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Breadcrumb", {
    enumerable: true,
    get: function() {
        return Breadcrumb;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _react = /*#__PURE__*/ _interop_require_default._(require("react"));
var _reactinstantsearchcore = require("react-instantsearch-core");
var _Breadcrumb = require("../ui/Breadcrumb");
function Breadcrumb(_0) {
    var attributes = _0.attributes, rootPath = _0.rootPath; _0.separator; var transformItems = _0.transformItems, translations = _0.translations, props = _object_without_properties._(_0, [
        "attributes",
        "rootPath",
        "separator",
        "transformItems",
        "translations"
    ]);
    var _useBreadcrumb = (0, _reactinstantsearchcore.useBreadcrumb)({
        attributes: attributes,
        rootPath: rootPath,
        transformItems: transformItems
    }, {
        $$widgetType: 'ais.breadcrumb'
    }), canRefine = _useBreadcrumb.canRefine, createURL = _useBreadcrumb.createURL, items = _useBreadcrumb.items, refine = _useBreadcrumb.refine;
    var uiProps = {
        items: items,
        hasItems: canRefine,
        createURL: createURL,
        onNavigate: refine,
        translations: _object_spread._({
            rootElementText: 'Home'
        }, translations)
    };
    return /*#__PURE__*/ _react.default.createElement(_Breadcrumb.Breadcrumb, _object_spread._({}, props, uiProps));
}
