"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.queryRunner = queryRunner;
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _hash = require("gatsby-core-utils/hash");
var _path = _interopRequireDefault(require("path"));
var _redux = require("../redux");
var _actions = require("../redux/actions");
var _graphqlErrorsCodeframe = require("./graphql-errors-codeframe");
var _errorParser = _interopRequireDefault(require("./error-parser"));
var _pageData = require("../utils/page-data");
var _cacheLmdb = _interopRequireDefault(require("../utils/cache-lmdb"));
let resultHashCache;
function getResultHashCache() {
  if (!resultHashCache) {
    resultHashCache = new _cacheLmdb.default({
      name: `query-result-hashes`,
      encoding: `string`
    }).init();
  }
  return resultHashCache;
}
function reportLongRunningQueryJob(queryJob) {
  const messageParts = [`This query took more than 15s to run — which might indicate you're querying too much or have some unoptimized code:`, `File path: ${queryJob.componentPath}`];
  if (queryJob.queryType === `page`) {
    messageParts.push(`URL path: ${queryJob.context.path}`);
  }
  _reporter.default.warn(messageParts.join(`\n`));
}
function panicQueryJobError(queryJob, errors) {
  let urlPath = undefined;
  let queryContext = {};
  const plugin = queryJob.pluginCreatorId || `none`;
  if (queryJob.queryType === `page`) {
    urlPath = queryJob.context.path;
    queryContext = queryJob.context.context;
  }
  const structuredErrors = errors.map(e => {
    const structuredError = (0, _errorParser.default)({
      message: e.message,
      filePath: undefined,
      location: undefined,
      error: e
    });
    structuredError.context = {
      ...structuredError.context,
      codeFrame: (0, _graphqlErrorsCodeframe.getCodeFrame)(queryJob.query, e.locations && e.locations[0].line, e.locations && e.locations[0].column),
      filePath: queryJob.componentPath,
      ...(urlPath ? {
        urlPath
      } : {}),
      ...queryContext,
      plugin
    };
    return structuredError;
  });
  _reporter.default.panicOnBuild(structuredErrors);
}
async function startQueryJob(graphqlRunner, queryJob, parentSpan) {
  let isPending = true;

  // Print out warning when query takes too long
  const timeoutId = setTimeout(() => {
    if (isPending) {
      reportLongRunningQueryJob(queryJob);
    }
  }, 15000);
  return graphqlRunner.query(queryJob.query, queryJob.context, {
    parentSpan,
    queryName: queryJob.id,
    componentPath: queryJob.componentPath
  }).finally(() => {
    isPending = false;
    clearTimeout(timeoutId);
  });
}
async function queryRunner(graphqlRunner, queryJob, parentSpan) {
  const {
    program
  } = _redux.store.getState();
  _redux.store.dispatch(_actions.actions.queryStart({
    path: queryJob.id,
    componentPath: queryJob.componentPath,
    isPage: queryJob.queryType === `page`
  }));

  // Run query
  let result;
  // Nothing to do if the query doesn't exist.
  if (!queryJob.query || queryJob.query === ``) {
    result = {};
  } else {
    result = await startQueryJob(graphqlRunner, queryJob, parentSpan);
  }
  if (result.errors) {
    // If there's a graphql error then log the error and exit
    panicQueryJobError(queryJob, result.errors);
  }

  // Add the page/slice context onto the results.
  if (queryJob) {
    if (queryJob.queryType === `page`) {
      result[`pageContext`] = Object.assign({}, queryJob.context);
    } else if (queryJob.queryType === `slice`) {
      result[`sliceContext`] = Object.assign({}, queryJob.context);
    }
  }

  // Delete internal data from pageContext
  if (result.pageContext) {
    delete result.pageContext.path;
    delete result.pageContext.internalComponentName;
    delete result.pageContext.component;
    delete result.pageContext.componentChunkName;
    delete result.pageContext.updatedAt;
    delete result.pageContext.pluginCreator___NODE;
    delete result.pageContext.pluginCreatorId;
    delete result.pageContext.componentPath;
    delete result.pageContext.context;
    delete result.pageContext.isCreatedByStatefulCreatePages;
    delete result.pageContext.matchPath;
    delete result.pageContext.mode;
    delete result.pageContext.slices;
  }
  const resultJSON = JSON.stringify(result);
  const resultHash = await (0, _hash.sha1)(resultJSON);
  const resultHashCache = getResultHashCache();
  let resultHashCacheKey = queryJob.id;
  if (queryJob.queryType === `static`) {
    // For static queries we use hash for a file path we output results to.
    // With automatic sort and aggregation graphql codemod it is possible
    // to have same result, but different query text hashes which would skip
    // writing out file to disk if we don't check query hash as well
    resultHashCacheKey += `-${queryJob.hash}`;
  }
  if (resultHash !== (await resultHashCache.get(resultHashCacheKey)) || queryJob.queryType === `page` && !(0, _pageData.pageDataExists)(_path.default.join(program.directory, `public`), queryJob.id)) {
    await resultHashCache.set(resultHashCacheKey, resultHash);
    if (queryJob.queryType === `page` || queryJob.queryType === `slice`) {
      // We need to save this temporarily in cache because
      // this might be incomplete at the moment
      await (0, _pageData.savePageQueryResult)(queryJob.id, resultJSON);
      if (queryJob.queryType === `page`) {
        _redux.store.dispatch({
          type: `ADD_PENDING_PAGE_DATA_WRITE`,
          payload: {
            path: queryJob.id
          }
        });
      } else if (queryJob.queryType === `slice`) {
        _redux.store.dispatch({
          type: `ADD_PENDING_SLICE_DATA_WRITE`,
          payload: {
            name: queryJob.id.substring(7) // remove "slice--" prefix
          }
        });
      }
    } else if (queryJob.queryType === `static`) {
      const resultPath = _path.default.join(program.directory, `public`, `page-data`, `sq`, `d`, `${queryJob.hash}.json`);
      await _fsExtra.default.outputFile(resultPath, resultJSON);
    }
  }

  // Broadcast that a page's query has run.
  _redux.store.dispatch(_actions.actions.pageQueryRun({
    path: queryJob.id,
    componentPath: queryJob.componentPath,
    queryType: queryJob.queryType,
    resultHash,
    queryHash: queryJob.hash
  }));
  return result;
}
//# sourceMappingURL=query-runner.js.map