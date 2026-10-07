"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.setSiteConfig = exports.setProgramStatus = exports.setGraphQLDefinitions = exports.setFunctions = exports.replaceStaticQuery = exports.replaceComponentQuery = exports.removeStaleJob = exports.queryStart = exports.queryExtractionGraphQLError = exports.queryExtractionBabelError = exports.queryExtractedBabelSuccess = exports.queryExtracted = exports.pageQueryRun = exports.deleteNodeManifests = exports.deleteComponentsDependencies = exports.createPageDependency = exports.createPageDependencies = exports.createJobV2FromInternalJob = exports.clearGatsbyImageSourceUrls = exports.clearDirtyQueriesListToEmitViaWebsocket = exports.apiFinished = void 0;
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _joi = require("../../joi-schemas/joi");
var _didYouMean = require("../../utils/did-you-mean");
var _manager = require("../../utils/jobs/manager");
var _engineContext = require("../../utils/engine-context");
/**
 * Create a dependency between a page and data. Probably for
 * internal use only.
 * @private
 */
const createPageDependencies = (payload, plugin = ``) => {
  return {
    type: `CREATE_COMPONENT_DEPENDENCY`,
    plugin,
    payload: payload.map(({
      path,
      nodeId,
      connection
    }) => {
      return {
        path,
        nodeId,
        connection
      };
    })
  };
};

/**
 * Create a dependency between a page and data. Probably for
 * internal use only.
 *
 * Shorthand for createPageDependencies.
 * @private
 */
exports.createPageDependencies = createPageDependencies;
const createPageDependency = (payload, plugin = ``) => createPageDependencies([payload], plugin);

/**
 * Delete dependencies between an array of pages and data. Probably for
 * internal use only. Used when deleting pages.
 * @private
 */
exports.createPageDependency = createPageDependency;
const deleteComponentsDependencies = paths => {
  return {
    type: `DELETE_COMPONENTS_DEPENDENCIES`,
    payload: {
      paths
    }
  };
};

/**
 * When the query watcher extracts a GraphQL query, it calls
 * this to store the query with its component.
 * @private
 */
exports.deleteComponentsDependencies = deleteComponentsDependencies;
const replaceComponentQuery = ({
  query,
  componentPath
}) => {
  return {
    type: `REPLACE_COMPONENT_QUERY`,
    payload: {
      query,
      componentPath
    }
  };
};
exports.replaceComponentQuery = replaceComponentQuery;
const apiFinished = payload => {
  return {
    type: `API_FINISHED`,
    payload
  };
};

/**
 * When the query watcher extracts a "static" GraphQL query from useStaticQuery
 * it calls this to store the query with its component.
 * @private
 */
exports.apiFinished = apiFinished;
const replaceStaticQuery = (args, plugin = null) => {
  return {
    type: `REPLACE_STATIC_QUERY`,
    plugin,
    payload: args
  };
};

/**
 *
 * Report that a query has been extracted from a component. Used by
 * query-compiler.js.
 * @private
 */
exports.replaceStaticQuery = replaceStaticQuery;
const queryExtracted = ({
  componentPath,
  query
}, plugin, traceId) => {
  return {
    type: `QUERY_EXTRACTED`,
    plugin,
    traceId,
    payload: {
      componentPath,
      query
    }
  };
};

/**
 * Set Definitions for fragment extraction, etc.
 *
 * Used by developer tools such as vscode-graphql & graphiql
 *
 * query-compiler.js.
 * @private
 */
exports.queryExtracted = queryExtracted;
const setGraphQLDefinitions = definitionsByName => {
  return {
    type: `SET_GRAPHQL_DEFINITIONS`,
    payload: definitionsByName
  };
};

/**
 *
 * Report that the Relay Compiler found a graphql error when attempting to extract a query
 * @private
 */
exports.setGraphQLDefinitions = setGraphQLDefinitions;
const queryExtractionGraphQLError = ({
  componentPath,
  error
}, plugin, traceId) => {
  return {
    type: `QUERY_EXTRACTION_GRAPHQL_ERROR`,
    plugin,
    traceId,
    payload: {
      componentPath,
      error
    }
  };
};

/**
 *
 * Report that babel was able to extract the graphql query.
 * Indicates that the file is free of JS errors.
 * @private
 */
exports.queryExtractionGraphQLError = queryExtractionGraphQLError;
const queryExtractedBabelSuccess = ({
  componentPath
}, plugin, traceId) => {
  return {
    type: `QUERY_EXTRACTION_BABEL_SUCCESS`,
    plugin,
    traceId,
    payload: {
      componentPath
    }
  };
};

/**
 *
 * Report that the Relay Compiler found a babel error when attempting to extract a query
 * @private
 */
exports.queryExtractedBabelSuccess = queryExtractedBabelSuccess;
const queryExtractionBabelError = ({
  componentPath,
  error
}, plugin, traceId) => {
  return {
    type: `QUERY_EXTRACTION_BABEL_ERROR`,
    plugin,
    traceId,
    payload: {
      componentPath,
      error
    }
  };
};

/**
 * Set overall program status e.g. `BOOTSTRAPING` or `BOOTSTRAP_FINISHED`.
 * @private
 */
exports.queryExtractionBabelError = queryExtractionBabelError;
const setProgramStatus = (status, plugin, traceId) => {
  return {
    type: `SET_PROGRAM_STATUS`,
    plugin,
    traceId,
    payload: status
  };
};

/**
 * Broadcast that a page's query was run.
 * @private
 */
exports.setProgramStatus = setProgramStatus;
const pageQueryRun = (payload, plugin, traceId) => {
  return {
    type: `PAGE_QUERY_RUN`,
    plugin,
    traceId,
    payload
  };
};
exports.pageQueryRun = pageQueryRun;
const queryStart = ({
  path,
  componentPath,
  isPage
}, plugin, traceId) => {
  return {
    type: `QUERY_START`,
    plugin,
    traceId,
    payload: {
      path,
      componentPath,
      isPage
    }
  };
};
exports.queryStart = queryStart;
const clearDirtyQueriesListToEmitViaWebsocket = () => {
  return {
    type: `QUERY_CLEAR_DIRTY_QUERIES_LIST_TO_EMIT_VIA_WEBSOCKET`
  };
};

/**
 * Remove jobs which are marked as stale (inputPath doesn't exists)
 * @private
 */
exports.clearDirtyQueriesListToEmitViaWebsocket = clearDirtyQueriesListToEmitViaWebsocket;
const removeStaleJob = (contentDigest, plugin, traceId) => {
  return {
    type: `REMOVE_STALE_JOB_V2`,
    plugin,
    traceId,
    payload: {
      contentDigest
    }
  };
};

/**
 * Set gatsby config
 * @private
 */
exports.removeStaleJob = removeStaleJob;
const setSiteConfig = config => {
  const result = _joi.gatsbyConfigSchema.validate(config || {});
  const normalizedPayload = result.value;
  if (result.error) {
    const hasUnknownKeys = result.error.details.filter(details => details.type === `object.unknown`);
    if (Array.isArray(hasUnknownKeys) && hasUnknownKeys.length) {
      const errorMessages = hasUnknownKeys.map(unknown => {
        const {
          context,
          message
        } = unknown;
        const key = context === null || context === void 0 ? void 0 : context.key;
        const suggestion = key && (0, _didYouMean.didYouMean)(key);
        if (suggestion) {
          return `${message}. ${suggestion}`;
        }
        return message;
      });
      _reporter.default.panic({
        id: `10122`,
        context: {
          sourceMessage: errorMessages.join(`\n`)
        }
      });
    }
    _reporter.default.panic({
      id: `10122`,
      context: {
        sourceMessage: result.error.message
      }
    });
  }
  return {
    type: `SET_SITE_CONFIG`,
    payload: normalizedPayload
  };
};

/**
 * Set gatsby functions
 * @private
 */
exports.setSiteConfig = setSiteConfig;
const setFunctions = functions => {
  return {
    type: `SET_SITE_FUNCTIONS`,
    payload: functions
  };
};
exports.setFunctions = setFunctions;
const deleteNodeManifests = () => {
  return {
    type: `DELETE_NODE_MANIFESTS`
  };
};
exports.deleteNodeManifests = deleteNodeManifests;
const createJobV2FromInternalJob = internalJob => (dispatch, getState) => {
  var _engineContext$reques;
  const jobContentDigest = internalJob.contentDigest;
  const currentState = getState();

  // Check if we already ran this job before, if yes we return the result
  // We have an inflight (in progress) queue inside the jobs manager to make sure
  // we don't waste resources twice during the process
  if (currentState.jobsV2 && currentState.jobsV2.complete.has(jobContentDigest)) {
    return Promise.resolve(currentState.jobsV2.complete.get(jobContentDigest).result);
  }
  const engineContext = (0, _engineContext.getEngineContext)();

  // Always set context, even if engineContext is undefined.
  // We do this because the final list of jobs for a given engine request includes both:
  //  - jobs with the same requestId
  //  - jobs without requestId (technically with requestId === "")
  //
  // See https://nodejs.org/dist/latest-v16.x/docs/api/async_context.html#async_context_troubleshooting_context_loss
  // on cases when async context could be lost.
  dispatch({
    type: `SET_JOB_V2_CONTEXT`,
    payload: {
      job: internalJob,
      requestId: (_engineContext$reques = engineContext === null || engineContext === void 0 ? void 0 : engineContext.requestId) !== null && _engineContext$reques !== void 0 ? _engineContext$reques : ``
    }
  });
  const inProgressJobPromise = (0, _manager.getInProcessJobPromise)(jobContentDigest);
  if (inProgressJobPromise) {
    return inProgressJobPromise;
  }
  dispatch({
    type: `CREATE_JOB_V2`,
    payload: {
      job: internalJob
    },
    plugin: {
      name: internalJob.plugin.name
    }
  });
  const enqueuedJobPromise = (0, _manager.enqueueJob)(internalJob);
  return enqueuedJobPromise.then(result => {
    // store the result in redux so we have it for the next run
    dispatch({
      type: `END_JOB_V2`,
      plugin: {
        name: internalJob.plugin.name
      },
      payload: {
        jobContentDigest,
        result
      }
    });

    // remove the job from our inProgressJobQueue as it's available in our done state.
    // this is a perf optimisations so we don't grow our memory too much when using gatsby preview
    (0, _manager.removeInProgressJob)(jobContentDigest);
    return result;
  });
};
exports.createJobV2FromInternalJob = createJobV2FromInternalJob;
const clearGatsbyImageSourceUrls = () => {
  return {
    type: `CLEAR_GATSBY_IMAGE_SOURCE_URL`
  };
};
exports.clearGatsbyImageSourceUrls = clearGatsbyImageSourceUrls;
//# sourceMappingURL=internal.js.map