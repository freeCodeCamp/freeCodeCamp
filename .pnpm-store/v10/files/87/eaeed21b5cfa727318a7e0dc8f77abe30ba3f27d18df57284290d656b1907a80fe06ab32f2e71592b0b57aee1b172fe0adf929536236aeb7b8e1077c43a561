"use strict";

exports.__esModule = true;
exports.adapterReducer = void 0;
var _noOpManager = require("../../utils/adapter/no-op-manager");
const adapterReducer = (state = {
  instance: undefined,
  manager: (0, _noOpManager.noOpAdapterManager)(),
  config: {
    excludeDatastoreFromEngineFunction: false,
    pluginsToDisable: []
  }
}, action) => {
  switch (action.type) {
    case `SET_ADAPTER`:
      return action.payload;
    default:
      return state;
  }
};
exports.adapterReducer = adapterReducer;
//# sourceMappingURL=adapter.js.map