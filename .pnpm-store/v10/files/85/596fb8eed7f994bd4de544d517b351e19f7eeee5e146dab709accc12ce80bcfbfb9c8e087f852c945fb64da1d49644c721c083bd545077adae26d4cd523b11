"use strict";

exports.__esModule = true;
exports.getDataStore = getDataStore;
var _redux = require("../redux");
let dataStore;
function getDataStore() {
  if (!dataStore) {
    const {
      setupLmdbStore
    } = require(`./lmdb/lmdb-datastore`);
    dataStore = setupLmdbStore();
  }
  return dataStore;
}

// It is possible that the store is not initialized yet when calling `DELETE_CACHE`.
//  The code below ensures we wipe cache from the proper store
//  (mostly relevant for tests)
_redux.emitter.on(`DELETE_CACHE`, () => {
  getDataStore();
});
//# sourceMappingURL=datastore.js.map