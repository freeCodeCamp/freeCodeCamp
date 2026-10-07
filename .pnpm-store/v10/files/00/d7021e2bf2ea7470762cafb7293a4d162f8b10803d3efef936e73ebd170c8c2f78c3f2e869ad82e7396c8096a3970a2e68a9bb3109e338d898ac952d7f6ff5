"use strict";

exports.__esModule = true;
exports.telemetryReducer = void 0;
const initialState = {
  gatsbyImageSourceUrls: new Set()
};
const telemetryReducer = (state = initialState, action) => {
  switch (action.type) {
    case `PROCESS_GATSBY_IMAGE_SOURCE_URL`:
      {
        const {
          sourceUrl
        } = action.payload;
        state.gatsbyImageSourceUrls.add(sourceUrl);
        return state;
      }
    case `CLEAR_GATSBY_IMAGE_SOURCE_URL`:
      {
        state.gatsbyImageSourceUrls = new Set();
        return state;
      }
    case `MERGE_WORKER_QUERY_STATE`:
      {
        const {
          queryStateTelemetryChunk
        } = action.payload;

        // This action may be dispatched in cases where queries might not be included in the merge data
        if (!queryStateTelemetryChunk) {
          return state;
        }
        const urlsFromWorker = queryStateTelemetryChunk.gatsbyImageSourceUrls || new Set();
        urlsFromWorker.forEach(url => {
          state.gatsbyImageSourceUrls.add(url);
        });
        return state;
      }
    default:
      {
        return state;
      }
  }
};
exports.telemetryReducer = telemetryReducer;
//# sourceMappingURL=telemetry.js.map