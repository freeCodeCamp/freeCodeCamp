"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.createInternalJob = createInternalJob;
exports.enqueueJob = enqueueJob;
exports.getInProcessJobPromise = getInProcessJobPromise;
exports.isJobStale = isJobStale;
exports.removeInProgressJob = removeInProgressJob;
exports.waitJobs = waitJobs;
exports.waitUntilAllJobsComplete = waitUntilAllJobsComplete;
var _isPlainObject2 = _interopRequireDefault(require("lodash/isPlainObject"));
var _path = _interopRequireDefault(require("path"));
var _hasha = _interopRequireDefault(require("hasha"));
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _pDefer = _interopRequireDefault(require("p-defer"));
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _types = require("./types");
exports.InternalJob = _types.InternalJob;
var _importGatsbyPlugin = require("../import-gatsby-plugin");
let activityForJobs = null;
let activeJobs = 0;
let isListeningForMessages = false;
let hasShownIPCDisabledWarning = false;
const jobsInProcess = new Map();
const externalJobsMap = new Map();

/**
 * We want to use absolute paths to make sure they are on the filesystem
 */
function convertPathsToAbsolute(filePath) {
  if (!_path.default.isAbsolute(filePath)) {
    throw new Error(`${filePath} should be an absolute path.`);
  }
  return (0, _gatsbyCoreUtils.slash)(filePath);
}
/**
 * Get contenthash of a file
 */
function createFileHash(path) {
  return _hasha.default.fromFileSync(path, {
    algorithm: `sha1`
  });
}
let hasActiveJobs = null;
function hasExternalJobsEnabled() {
  return process.env.ENABLE_GATSBY_EXTERNAL_JOBS === `true` || process.env.ENABLE_GATSBY_EXTERNAL_JOBS === `1`;
}

/**
 * Get the local worker function and execute it on the user's machine
 */
async function runLocalWorker(workerFn, job) {
  await _fsExtra.default.ensureDir(job.outputDir);
  return new Promise((resolve, reject) => {
    // execute worker nextTick
    // TODO should we think about threading/queueing here?
    setImmediate(() => {
      try {
        resolve(workerFn({
          inputPaths: job.inputPaths,
          outputDir: job.outputDir,
          args: job.args
        }));
      } catch (err) {
        reject(new _types.WorkerError(err));
      }
    });
  });
}
function isJobsIPCMessage(msg) {
  return msg && msg.type && msg.payload && msg.payload.id && externalJobsMap.has(msg.payload.id);
}
function listenForJobMessages() {
  process.on(`message`, msg => {
    if (isJobsIPCMessage(msg)) {
      const {
        job,
        deferred
      } = externalJobsMap.get(msg.payload.id);
      switch (msg.type) {
        case _types.MESSAGE_TYPES.JOB_COMPLETED:
          {
            deferred.resolve(msg.payload.result);
            break;
          }
        case _types.MESSAGE_TYPES.JOB_FAILED:
          {
            deferred.reject(new _types.WorkerError(msg.payload.error));
            break;
          }
        case _types.MESSAGE_TYPES.JOB_NOT_WHITELISTED:
          {
            deferred.resolve(runJob(job, true));
            break;
          }
      }
      externalJobsMap.delete(msg.payload.id);
    }
  });
}
function runExternalWorker(job) {
  const deferred = (0, _pDefer.default)();
  externalJobsMap.set(job.id, {
    job,
    deferred
  });
  const jobCreatedMessage = {
    type: _types.MESSAGE_TYPES.JOB_CREATED,
    payload: job
  };
  process.send(jobCreatedMessage);
  return deferred.promise;
}

/**
 * Make sure we have everything we need to run a job
 * If we do, run it locally.
 * TODO add external job execution through ipc
 */
function runJob(job, forceLocal = false) {
  const {
    plugin
  } = job;
  try {
    return (0, _importGatsbyPlugin.importGatsbyPlugin)(plugin, `gatsby-worker`).then(worker => {
      if (!worker[job.name]) {
        throw new Error(`No worker function found for ${job.name}`);
      }
      if (!forceLocal && !job.plugin.isLocal && hasExternalJobsEnabled()) {
        if (process.send) {
          if (!isListeningForMessages) {
            isListeningForMessages = true;
            listenForJobMessages();
          }
          return runExternalWorker(job);
        } else {
          // only show the offloading warning once
          if (!hasShownIPCDisabledWarning) {
            hasShownIPCDisabledWarning = true;
            _reporter.default.warn(`Offloading of a job failed as IPC could not be detected. Running job locally.`);
          }
        }
      }
      return runLocalWorker(worker[job.name], job);
    });
  } catch (err) {
    throw new Error(`We couldn't find a gatsby-worker.js(${plugin.resolve}/gatsby-worker.js) file for ${plugin.name}@${plugin.version}`);
  }
}
function isInternalJob(job) {
  return job.id !== undefined && job.contentDigest !== undefined;
}

/**
 * Create an internal job object
 */
function createInternalJob(job, plugin) {
  // It looks like we already have an augmented job so we shouldn't redo this work
  if (isInternalJob(job)) {
    return job;
  }
  const {
    name,
    inputPaths,
    outputDir,
    args
  } = job;

  // TODO see if we can make this async, filehashing might be expensive to wait for
  // currently this needs to be sync as we could miss jobs to have been scheduled and
  // are still processing their hashes
  const inputPathsWithContentDigest = inputPaths.map(pth => {
    return {
      path: convertPathsToAbsolute(pth),
      contentDigest: createFileHash(pth)
    };
  });
  const internalJob = {
    id: _gatsbyCoreUtils.uuid.v4(),
    name,
    contentDigest: ``,
    inputPaths: inputPathsWithContentDigest,
    outputDir: convertPathsToAbsolute(outputDir),
    args,
    plugin: {
      name: plugin.name,
      version: plugin.version,
      resolve: plugin.resolve,
      isLocal: !plugin.resolve.includes(`/node_modules/`)
    }
  };

  // generate a contentDigest based on all parameters including file content
  internalJob.contentDigest = (0, _gatsbyCoreUtils.createContentDigest)({
    name: job.name,
    inputPaths: internalJob.inputPaths.map(inputPath => inputPath.contentDigest),
    outputDir: internalJob.outputDir,
    args: internalJob.args,
    plugin: internalJob.plugin
  });
  return internalJob;
}
const activitiesForJobTypes = new Map();

/**
 * Creates a job
 */
async function enqueueJob(job) {
  // When we already have a job that's executing, return the same promise.
  // we have another check in our createJobV2 action to return jobs that have been done in a previous gatsby run
  if (jobsInProcess.has(job.contentDigest)) {
    return jobsInProcess.get(job.contentDigest).deferred.promise;
  }
  if (activeJobs === 0) {
    hasActiveJobs = (0, _pDefer.default)();
  }

  // Bump active jobs
  activeJobs++;
  if (!activityForJobs) {
    activityForJobs = _reporter.default.phantomActivity(`Running jobs v2`);
    activityForJobs.start();
  }
  const jobType = `${job.plugin.name}.${job.name}`;
  let activityForJobsProgress = activitiesForJobTypes.get(jobType);
  if (!activityForJobsProgress) {
    activityForJobsProgress = _reporter.default.createProgress(`Running ${jobType} jobs`, 1, 0);
    activityForJobsProgress.start();
    activitiesForJobTypes.set(jobType, activityForJobsProgress);
  } else {
    activityForJobsProgress.total++;
  }
  const deferred = (0, _pDefer.default)();
  jobsInProcess.set(job.contentDigest, {
    id: job.id,
    deferred
  });
  try {
    const result = await runJob(job);
    // this check is to keep our worker results consistent for cloud
    if (result != null && !(0, _isPlainObject2.default)(result)) {
      throw new Error(`Result of a worker should be an object, type of "${typeof result}" was given`);
    }
    deferred.resolve(result);
  } catch (err) {
    deferred.reject(new _types.WorkerError(err));
  } finally {
    // when all jobs are done we end the activity
    if (--activeJobs === 0) {
      hasActiveJobs.resolve();
      activityForJobs.end();
      // eslint-disable-next-line require-atomic-updates
      activityForJobs = null;
    }
    activityForJobsProgress.tick();
  }
  return deferred.promise;
}

/**
 * Get in progress job promise
 */
function getInProcessJobPromise(contentDigest) {
  var _jobsInProcess$get;
  return (_jobsInProcess$get = jobsInProcess.get(contentDigest)) === null || _jobsInProcess$get === void 0 ? void 0 : _jobsInProcess$get.deferred.promise;
}

/**
 * Remove a job from our inProgressQueue to reduce memory usage
 */
function removeInProgressJob(contentDigest) {
  jobsInProcess.delete(contentDigest);
}

/**
 * Wait for all processing jobs to have finished
 */
async function waitUntilAllJobsComplete() {
  await (hasActiveJobs ? hasActiveJobs.promise : Promise.resolve());
  for (const progressActivity of activitiesForJobTypes.values()) {
    progressActivity.end();
  }
  activitiesForJobTypes.clear();
}

/**
 * Wait for specific jobs for engines
 */
async function waitJobs(jobDigests) {
  const promises = [];
  for (const [digest, job] of jobsInProcess) {
    if (jobDigests.has(digest)) {
      promises.push(job.deferred.promise);
    }
  }
  await Promise.all(promises);
}
function isJobStale(job) {
  const areInputPathsStale = job.inputPaths.some(inputPath => {
    // does the inputPath still exists?
    if (!_fsExtra.default.existsSync(inputPath.path)) {
      return true;
    }

    // check if we're talking about the same file
    const fileHash = createFileHash(inputPath.path);
    return fileHash !== inputPath.contentDigest;
  });
  return areInputPathsStale;
}
//# sourceMappingURL=manager.js.map