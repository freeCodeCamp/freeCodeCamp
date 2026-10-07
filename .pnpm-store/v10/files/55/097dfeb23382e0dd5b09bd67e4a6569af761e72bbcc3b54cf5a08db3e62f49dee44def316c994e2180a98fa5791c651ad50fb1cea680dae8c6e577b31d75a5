"use strict";

exports.__esModule = true;
exports.waitJobsByRequest = waitJobsByRequest;
exports.waitUntilAllJobsComplete = void 0;
var _redux = require("../redux");
var _manager = require("./jobs/manager");
async function waitJobsV1() {
  return new Promise(resolve => {
    const onEndJob = () => {
      if (_redux.store.getState().jobs.active.length === 0) {
        resolve();
        _redux.emitter.off(`END_JOB`, onEndJob);
      }
    };
    _redux.emitter.on(`END_JOB`, onEndJob);
    onEndJob();
  });
}
const waitUntilAllJobsComplete = () => Promise.all([waitJobsV1(), (0, _manager.waitUntilAllJobsComplete)()]).then();
exports.waitUntilAllJobsComplete = waitUntilAllJobsComplete;
async function waitJobsByRequest(requestId) {
  var _jobs$jobsByRequest$g, _jobs$jobsByRequest$g2;
  const jobs = _redux.store.getState().jobsV2;
  const jobDigests = new Set([...((_jobs$jobsByRequest$g = jobs.jobsByRequest.get(requestId)) !== null && _jobs$jobsByRequest$g !== void 0 ? _jobs$jobsByRequest$g : []), ...((_jobs$jobsByRequest$g2 = jobs.jobsByRequest.get(``)) !== null && _jobs$jobsByRequest$g2 !== void 0 ? _jobs$jobsByRequest$g2 : []) // wait for jobs without requestId just in case
  ]);

  await Promise.all([waitJobsV1(), (0, _manager.waitJobs)(jobDigests)]);
}
//# sourceMappingURL=wait-until-jobs-complete.js.map