"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.createPages = createPages;
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _apiRunnerNode = _interopRequireDefault(require("../utils/api-runner-node"));
var _assertStore = require("../utils/assert-store");
var _actions = require("../redux/actions");
var _changedPages = require("../utils/changed-pages");
var _datastore = require("../datastore");
const isInitialCreatePages = true;
let createPagesCount = 0;
async function createPages({
  parentSpan,
  gatsbyNodeGraphQLFunction,
  store,
  deferNodeMutation,
  shouldRunCreatePagesStatefully
}) {
  (0, _assertStore.assertStore)(store);
  const activity = _reporter.default.activityTimer(`createPages`, {
    parentSpan
  });
  activity.start();
  const timestamp = Date.now();
  const currentPages = new Map(store.getState().pages);

  // Wrap the GraphQL function so we can measure how long it takes to run.
  const originalGraphQL = gatsbyNodeGraphQLFunction;
  // eslint-disable-next-line
  async function wrappedGraphQL() {
    const start = Date.now();
    // @ts-ignore not sure how to type the following
    const returnValue = await originalGraphQL.apply(this, arguments); // eslint-disable-line
    const end = Date.now();
    const totalMS = end - start;
    if (totalMS > 10000) {
      _reporter.default.warn(`Your GraphQL query in createPages took ${totalMS / 1000} seconds which is an unexpectedly long time. See https://gatsby.dev/create-pages-performance for tips on how to improve this.`);
    }
    return returnValue;
  }
  createPagesCount += 1;
  const traceId = isInitialCreatePages ? `initial-createPages` : `createPages #${createPagesCount}`;
  await (0, _apiRunnerNode.default)(`createPages`, {
    graphql: wrappedGraphQL,
    traceId,
    waitForCascadingActions: true,
    parentSpan: activity.span,
    deferNodeMutation
  }, {
    activity
  });
  activity.end();
  if (shouldRunCreatePagesStatefully) {
    const activity = _reporter.default.activityTimer(`createPagesStatefully`, {
      parentSpan
    });
    activity.start();
    await (0, _apiRunnerNode.default)(`createPagesStatefully`, {
      graphql: gatsbyNodeGraphQLFunction,
      traceId: `initial-createPagesStatefully`,
      waitForCascadingActions: true,
      parentSpan: activity.span,
      deferNodeMutation
    }, {
      activity
    });
    activity.end();
  }
  const dataStore = (0, _datastore.getDataStore)();
  _reporter.default.info(`Total nodes: ${dataStore.countNodes()}, ` + `SitePage nodes: ${store.getState().pages.size} (use --verbose for breakdown)`);
  if (process.env.gatsby_log_level === `verbose`) {
    const types = dataStore.getTypes();
    _reporter.default.verbose(`Number of node types: ${types.length}. Nodes per type: ${types.map(type => type + `: ` + dataStore.countNodes(type)).join(`, `)}`);
  }
  _reporter.default.verbose(`Checking for deleted pages`);
  const deletedPages = (0, _changedPages.deleteUntouchedPages)(store.getState().pages, timestamp, !!shouldRunCreatePagesStatefully);
  _reporter.default.verbose(`Deleted ${deletedPages.length} page${deletedPages.length === 1 ? `` : `s`}`);
  const tim = _reporter.default.activityTimer(`Checking for changed pages`, {
    parentSpan
  });
  tim.start();
  const {
    changedPages
  } = (0, _changedPages.findChangedPages)(currentPages, store.getState().pages);
  _reporter.default.verbose(`Found ${changedPages.length} changed page${changedPages.length === 1 ? `` : `s`}`);
  tim.end();
  store.getState().slices.forEach(slice => {
    if (slice.updatedAt < timestamp) {
      store.dispatch({
        type: `DELETE_SLICE`,
        payload: {
          name: slice.name,
          componentPath: slice.componentPath
        }
      });
    }
  });
  store.dispatch(_actions.actions.apiFinished({
    apiName: `createPages`
  }));
  return {
    changedPages,
    deletedPages
  };
}
//# sourceMappingURL=create-pages.js.map