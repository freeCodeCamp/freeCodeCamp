"use strict";

exports.__esModule = true;
exports.jobsV2Reducer = void 0;
const initialState = () => {
  return {
    incomplete: new Map(),
    complete: new Map(),
    jobsByRequest: new Map()
  };
};
const jobsV2Reducer = (state = initialState(), action) => {
  switch (action.type) {
    case `DELETE_CACHE`:
      {
        // Wipe the cache if state shape doesn't match the initial shape
        // It is possible when the old cache is loaded for the new version of this reducer
        const cleanState = initialState();
        const cleanStateKeys = Object.keys(cleanState);
        const isOutdatedJobsState = cleanStateKeys.length !== Object.keys(state).length || cleanStateKeys.some(key => !Object.prototype.hasOwnProperty.call(state, key));
        return action.cacheIsCorrupt || isOutdatedJobsState ? cleanState : state;
      }
    case `CREATE_JOB_V2`:
      {
        const {
          job
        } = action.payload;
        state.incomplete.set(job.contentDigest, {
          job
        });
        return state;
      }
    case `END_JOB_V2`:
      {
        const {
          jobContentDigest,
          result
        } = action.payload;
        const {
          job
        } = state.incomplete.get(jobContentDigest);
        if (!job) {
          throw new Error(`If you encounter this error, it's probably a Gatsby internal bug. Please open an issue reporting us this.`);
        }
        state.incomplete.delete(job.contentDigest);

        // inputPaths is used to make sure the job is not stale
        state.complete.set(job.contentDigest, {
          result,
          inputPaths: job.inputPaths
        });
        return state;
      }
    case `REMOVE_STALE_JOB_V2`:
      {
        const {
          contentDigest
        } = action.payload;
        state.incomplete.delete(contentDigest);
        state.complete.delete(contentDigest);
        return state;
      }
    case `SET_JOB_V2_CONTEXT`:
      {
        const {
          requestId,
          job
        } = action.payload;
        let jobs = state.jobsByRequest.get(requestId);
        if (!jobs) {
          jobs = new Set();
          state.jobsByRequest.set(requestId, jobs);
        }
        jobs.add(job.contentDigest);
        return state;
      }
    case `CLEAR_JOB_V2_CONTEXT`:
      {
        const {
          requestId
        } = action.payload;
        state.jobsByRequest.delete(requestId);
      }
  }
  return state;
};
exports.jobsV2Reducer = jobsV2Reducer;
//# sourceMappingURL=jobsv2.js.map