"use strict";

exports.__esModule = true;
exports.remoteFileAllowedUrlsReducer = void 0;
const remoteFileAllowedUrlsReducer = (state = new Set(), action) => {
  switch (action.type) {
    case `ADD_REMOTE_FILE_ALLOWED_URL`:
      {
        for (const url of action.payload.urls) {
          state.add(url);
        }
        return state;
      }
    default:
      return state;
  }
};
exports.remoteFileAllowedUrlsReducer = remoteFileAllowedUrlsReducer;
//# sourceMappingURL=remote-file-allowed-urls.js.map