"use strict";

exports.__esModule = true;
exports.setRequestHeadersReducer = void 0;
/**
 * Takes in a domain and headers for that domain, from the setRequestHeaders action, and stores them in a Map to be accessed when making requests.
 */
const setRequestHeadersReducer = (state = new Map(), action) => {
  switch (action.type) {
    case `SET_REQUEST_HEADERS`:
      {
        const {
          headers,
          domain
        } = action.payload;
        state.set(domain, headers);
        return state;
      }
    default:
      return state;
  }
};
exports.setRequestHeadersReducer = setRequestHeadersReducer;
//# sourceMappingURL=set-request-headers.js.map