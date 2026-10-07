'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _preact = require("preact");
var _PoweredBy = /*#__PURE__*/ _interop_require_default._(require("../../components/PoweredBy/PoweredBy"));
var _connectPoweredBy = /*#__PURE__*/ _interop_require_default._(require("../../connectors/powered-by/connectPoweredBy"));
var _suit = require("../../lib/suit");
var _utils = require("../../lib/utils");
var suit = (0, _suit.component)('PoweredBy');
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'powered-by'
});
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses;
    return function(param, isFirstRendering) {
        var url = param.url, widgetParams = param.widgetParams;
        if (isFirstRendering) {
            var _widgetParams_theme = widgetParams.theme, theme = _widgetParams_theme === void 0 ? 'light' : _widgetParams_theme;
            (0, _preact.render)(/*#__PURE__*/ (0, _preact.h)(_PoweredBy.default, {
                cssClasses: cssClasses,
                url: url,
                theme: theme
            }), containerNode);
            return;
        }
    };
};
var poweredBy = function poweredBy(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp, _ref_theme = _ref.theme, theme = _ref_theme === void 0 ? 'light' : _ref_theme;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = (0, _utils.getContainerNode)(container);
    var cssClasses = {
        root: (0, _instantsearchuicomponents.cx)(suit(), suit({
            modifierName: theme === 'dark' ? 'dark' : 'light'
        }), userCssClasses.root),
        link: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'link'
        }), userCssClasses.link),
        logo: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'logo'
        }), userCssClasses.logo)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses
    });
    var makeWidget = (0, _connectPoweredBy.default)(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _object_spread_props._(_object_spread._({}, makeWidget({
        theme: theme
    })), {
        $$widgetType: 'ais.poweredBy'
    });
};
var _default = poweredBy;
