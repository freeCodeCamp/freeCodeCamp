"use strict";

exports.__esModule = true;
exports.setState = setState;
var _redux = require("../../../redux");
// Calls loadPartialStateFromDisk(slices) and mutates the redux store with the results
function setState(slices) {
  const res = (0, _redux.loadPartialStateFromDisk)(slices);
  Object.entries(res).forEach(([key, val]) => {
    _redux.store.getState()[key] = val;
  });
}
//# sourceMappingURL=state.js.map