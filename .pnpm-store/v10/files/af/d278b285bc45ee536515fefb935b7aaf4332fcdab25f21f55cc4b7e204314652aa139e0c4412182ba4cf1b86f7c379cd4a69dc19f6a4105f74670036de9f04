"use strict";

exports.__esModule = true;
exports.visitedPagesReducer = void 0;
// The develop server always wants these page components.
const createDefault = () => {
  const defaults = new Set();
  defaults.add(`component---cache-dev-404-page-js`);
  defaults.add(`component---src-pages-404-js`);
  defaults.add(`component---src-pages-index-js`);
  const state = new Map([[`server`, new Set(defaults)]]);
  return state;
};
const visitedPagesReducer = (state = createDefault(), action) => {
  switch (action.type) {
    case `DELETE_CACHE`:
      return createDefault();
    case `CREATE_SERVER_VISITED_PAGE`:
      {
        const server = state.get(`server`);
        if (server) {
          server.add(action.payload.componentChunkName);
        }
        return state;
      }
    default:
      return state;
  }
};
exports.visitedPagesReducer = visitedPagesReducer;
//# sourceMappingURL=visited-page.js.map