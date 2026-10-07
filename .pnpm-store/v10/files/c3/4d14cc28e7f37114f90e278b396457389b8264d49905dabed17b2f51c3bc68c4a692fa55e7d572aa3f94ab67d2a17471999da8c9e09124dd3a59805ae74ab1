'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useInstantSearchContext", {
    enumerable: true,
    get: function() {
        return useInstantSearchContext;
    }
});
var _react = require("react");
var _InstantSearchContext = require("./InstantSearchContext");
var _invariant = require("./invariant");
function useInstantSearchContext() {
    var search = (0, _react.useContext)(_InstantSearchContext.InstantSearchContext);
    (0, _invariant.invariant)(search !== null, 'Hooks must be used inside the <InstantSearch> component.\n\n' + 'They are not compatible with the `react-instantsearch-core@6.x` and `react-instantsearch-dom` packages, so make sure to use the <InstantSearch> component from `react-instantsearch-core@7.x`.');
    return search;
}
