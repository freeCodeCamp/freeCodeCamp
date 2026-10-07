'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "InstantSearch", {
    enumerable: true,
    get: function() {
        return InstantSearch;
    }
});
var _interop_require_wildcard = require("@swc/helpers/_/_interop_require_wildcard");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _react = /*#__PURE__*/ _interop_require_wildcard._(require("react"));
var _IndexContext = require("../lib/IndexContext");
var _InstantSearchContext = require("../lib/InstantSearchContext");
var _useInstantSearchApi = require("../lib/useInstantSearchApi");
function InstantSearch(_0) {
    var children = _0.children, props = _object_without_properties._(_0, [
        "children"
    ]);
    var search = (0, _useInstantSearchApi.useInstantSearchApi)(props);
    if (!search.started) {
        return null;
    }
    return /*#__PURE__*/ _react.default.createElement(_InstantSearchContext.InstantSearchContext.Provider, {
        value: search
    }, /*#__PURE__*/ _react.default.createElement(_IndexContext.IndexContext.Provider, {
        value: search.mainIndex
    }, children, /*#__PURE__*/ _react.default.createElement(ResetScheduleSearch, {
        search: search
    })));
}
function ResetScheduleSearch(param) {
    var search = param.search;
    (0, _react.useEffect)(function() {
        if (search._resetScheduleSearch) {
            search._resetScheduleSearch();
        }
    }, [
        search
    ]);
    return null;
}
