'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useIndexContext", {
    enumerable: true,
    get: function() {
        return useIndexContext;
    }
});
var _react = require("react");
var _IndexContext = require("./IndexContext");
var _invariant = require("./invariant");
function useIndexContext() {
    var context = (0, _react.useContext)(_IndexContext.IndexContext);
    (0, _invariant.invariant)(context !== null, 'The <Index> component must be used within <InstantSearch>.');
    return context;
}
