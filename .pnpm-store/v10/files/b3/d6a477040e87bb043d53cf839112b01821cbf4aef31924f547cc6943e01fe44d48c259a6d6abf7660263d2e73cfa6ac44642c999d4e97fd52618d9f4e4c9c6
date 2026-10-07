"use strict";

exports.__esModule = true;
exports.removeStaleJobs = void 0;
var _manager = require("../utils/jobs/manager");
var _actions = require("../redux/actions");
const removeStaleJobs = jobs => {
  const actions = [];

  // If any of our finished jobs are stale we remove them to keep our cache small
  jobs.complete.forEach((job, contentDigest) => {
    if ((0, _manager.isJobStale)(job)) {
      actions.push(_actions.internalActions.removeStaleJob(contentDigest));
    }
  });

  // If any of our pending jobs do not have an existing inputPath or the inputPath changed
  // we remove it from the queue as they would fail anyway
  jobs.incomplete.forEach(({
    job
  }) => {
    if ((0, _manager.isJobStale)(job)) {
      actions.push(_actions.internalActions.removeStaleJob(job.contentDigest));
    } else {
      actions.push(_actions.internalActions.createJobV2FromInternalJob(job));
    }
  });
  return actions;
};
exports.removeStaleJobs = removeStaleJobs;
//# sourceMappingURL=remove-stale-jobs.js.map