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
var _utils = require("../../lib/utils");
var _Template = /*#__PURE__*/ _interop_require_default._(require("../Template/Template"));
var Answers = function Answers(param) {
    var hits = param.hits, isLoading = param.isLoading, cssClasses = param.cssClasses, templateProps = param.templateProps;
    return /*#__PURE__*/ (0, _preact.h)("div", {
        className: (0, _instantsearchuicomponents.cx)(cssClasses.root, hits.length === 0 && cssClasses.emptyRoot)
    }, /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, templateProps), {
        templateKey: "header",
        rootProps: {
            className: cssClasses.header
        },
        data: {
            hits: hits,
            isLoading: isLoading
        }
    })), isLoading ? /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, templateProps), {
        templateKey: "loader",
        rootProps: {
            className: cssClasses.loader
        }
    })) : /*#__PURE__*/ (0, _preact.h)("ul", {
        className: cssClasses.list
    }, hits.map(function(hit, index) {
        return /*#__PURE__*/ (0, _preact.h)(_Template.default, _object_spread_props._(_object_spread._({}, templateProps), {
            templateKey: "item",
            rootTagName: "li",
            rootProps: {
                className: cssClasses.item
            },
            key: hit.objectID,
            data: _object_spread_props._(_object_spread._({}, hit), {
                get __hitIndex () {
                    (0, _utils.warning)(false, 'The `__hitIndex` property is deprecated. Use the absolute `__position` instead.');
                    return index;
                }
            })
        }));
    })));
};
var _default = Answers;
