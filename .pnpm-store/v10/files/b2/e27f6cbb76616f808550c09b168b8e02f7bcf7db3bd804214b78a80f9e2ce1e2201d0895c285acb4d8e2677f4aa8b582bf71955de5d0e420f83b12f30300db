"use strict";

exports.__esModule = true;
exports.FLAG_RUNNING_INFLIGHT = exports.FLAG_ERROR_EXTRACTION = exports.FLAG_DIRTY_TEXT = exports.FLAG_DIRTY_PAGE_CONTEXT = exports.FLAG_DIRTY_NEW_PAGE = exports.FLAG_DIRTY_DATA = void 0;
exports.hasFlag = hasFlag;
exports.queriesReducer = queriesReducer;
// page query path or static query id

const FLAG_DIRTY_NEW_PAGE = 0b0001;
exports.FLAG_DIRTY_NEW_PAGE = FLAG_DIRTY_NEW_PAGE;
const FLAG_DIRTY_TEXT = 0b0010;
exports.FLAG_DIRTY_TEXT = FLAG_DIRTY_TEXT;
const FLAG_DIRTY_DATA = 0b0100;
exports.FLAG_DIRTY_DATA = FLAG_DIRTY_DATA;
const FLAG_DIRTY_PAGE_CONTEXT = 0b1000;
exports.FLAG_DIRTY_PAGE_CONTEXT = FLAG_DIRTY_PAGE_CONTEXT;
const FLAG_ERROR_EXTRACTION = 0b0001;
exports.FLAG_ERROR_EXTRACTION = FLAG_ERROR_EXTRACTION;
const FLAG_RUNNING_INFLIGHT = 0b0001;
exports.FLAG_RUNNING_INFLIGHT = FLAG_RUNNING_INFLIGHT;
const initialState = () => {
  return {
    byNode: new Map(),
    byConnection: new Map(),
    queryNodes: new Map(),
    trackedQueries: new Map(),
    trackedComponents: new Map(),
    deletedQueries: new Set(),
    dirtyQueriesListToEmitViaWebsocket: []
  };
};
const initialQueryState = () => {
  return {
    dirty: -1,
    // unknown, must be set right after init
    running: 0
  };
};
const initialComponentState = () => {
  return {
    componentPath: ``,
    query: ``,
    pages: new Set(),
    errors: 0
    // TODO: staticQueries: new Set<QueryId>()
  };
};

/**
 * Tracks query dirtiness. Dirty queries are queries that:
 *
 * - depend on nodes or node collections (via `actions.createPageDependency`) that have changed.
 * - have been recently extracted (or their query text has changed)
 * - belong to newly created pages (or pages with modified context)
 *
 * Dirty queries must be re-ran.
 */
function queriesReducer(state = initialState(), action) {
  switch (action.type) {
    case `DELETE_CACHE`:
      return initialState();
    case `CREATE_PAGE`:
      {
        const {
          path,
          componentPath
        } = action.payload;
        let query = state.trackedQueries.get(path);
        if (!query || action.contextModified) {
          query = registerQuery(state, path);
          query.dirty = setFlag(query.dirty, action.contextModified ? FLAG_DIRTY_PAGE_CONTEXT : FLAG_DIRTY_NEW_PAGE);
          state = trackDirtyQuery(state, path);
        }
        registerComponent(state, componentPath).pages.add(path);
        state.deletedQueries.delete(path);
        return state;
      }
    case `CREATE_SLICE`:
      {
        const {
          name,
          componentPath
        } = action.payload;
        const path = `slice--${name}`;
        let query = state.trackedQueries.get(path);
        if (!query || action.contextModified) {
          query = registerQuery(state, path);
          query.dirty = setFlag(query.dirty, action.contextModified ? FLAG_DIRTY_PAGE_CONTEXT : FLAG_DIRTY_NEW_PAGE);
          state = trackDirtyQuery(state, path);
        }
        registerComponent(state, componentPath).pages.add(path);
        state.deletedQueries.delete(path);
        return state;
      }
    case `DELETE_PAGE`:
      {
        // Don't actually remove the page query from trackedQueries, just mark it as "deleted". Why?
        //   We promote a technique of a consecutive deletePage/createPage calls in onCreatePage hook,
        //   see https://www.gatsbyjs.com/docs/creating-and-modifying-pages/#pass-context-to-pages
        //   If we remove a query and then re-add, it will be marked as dirty.
        //   This is OK for cold cache but with warm cache we will re-run all of those queries (unnecessarily).
        //   We will reconcile the state after createPages API call and actually delete those queries.
        state.deletedQueries.add(action.payload.path);
        return state;
      }
    case `DELETE_SLICE`:
      {
        const {
          name
        } = action.payload;
        const path = `slice--${name}`;
        state.deletedQueries.add(path);
        return state;
      }
    case `API_FINISHED`:
      {
        if (action.payload.apiName !== `createPages`) {
          return state;
        }
        for (const queryId of state.deletedQueries) {
          for (const component of state.trackedComponents.values()) {
            component.pages.delete(queryId);
          }
          state = clearNodeDependencies(state, queryId);
          state = clearConnectionDependencies(state, queryId);
          state.trackedQueries.delete(queryId);
        }
        state.deletedQueries.clear();
        return state;
      }
    case `QUERY_EXTRACTED`:
      {
        // Note: this action is called even in case of
        // extraction error or missing query (with query === ``)
        // TODO: use hash instead of a query text
        const {
          componentPath,
          query
        } = action.payload;
        const component = registerComponent(state, componentPath);
        if (hasFlag(component.errors, FLAG_ERROR_EXTRACTION)) {
          return state;
        }
        if (component.query !== query) {
          // Invalidate all pages associated with a component when query text changes
          for (const queryId of component.pages) {
            const query = state.trackedQueries.get(queryId);
            if (query) {
              query.dirty = setFlag(query.dirty, FLAG_DIRTY_TEXT);
              state = trackDirtyQuery(state, queryId);
            }
          }
          component.query = query;
        }
        return state;
      }
    case `QUERY_EXTRACTION_GRAPHQL_ERROR`:
    case `QUERY_EXTRACTION_BABEL_ERROR`:
    case `QUERY_EXTRACTION_BABEL_SUCCESS`:
      {
        const {
          componentPath
        } = action.payload;
        const component = registerComponent(state, componentPath);
        const set = action.type !== `QUERY_EXTRACTION_BABEL_SUCCESS`;
        component.errors = setFlag(component.errors, FLAG_ERROR_EXTRACTION, set);
        return state;
      }
    case `REPLACE_STATIC_QUERY`:
      {
        // Only called when static query text has changed, so no need to compare
        // TODO: unify the behavior?
        const query = registerQuery(state, action.payload.id);
        query.dirty = setFlag(query.dirty, FLAG_DIRTY_TEXT);
        // static queries are not on demand, so skipping tracking which
        // queries were marked dirty recently
        // state = trackDirtyQuery(state, action.payload.id)
        state.deletedQueries.delete(action.payload.id);
        return state;
      }
    case `REMOVE_STATIC_QUERY`:
      {
        state.deletedQueries.add(action.payload);
        return state;
      }
    case `CREATE_COMPONENT_DEPENDENCY`:
      {
        action.payload.forEach(dep => {
          const {
            path: queryId,
            nodeId,
            connection
          } = dep;
          if (nodeId) {
            state = addNodeDependency(state, queryId, nodeId);
          }
          if (connection) {
            state = addConnectionDependency(state, queryId, connection);
          }
        });
        return state;
      }
    case `QUERY_START`:
      {
        // Reset data dependencies as they will be updated when running the query
        const {
          path
        } = action.payload;
        state = clearNodeDependencies(state, path);
        state = clearConnectionDependencies(state, path);
        const query = state.trackedQueries.get(path);
        if (query) {
          query.running = setFlag(query.running, FLAG_RUNNING_INFLIGHT);
        }
        return state;
      }
    case `CREATE_NODE`:
    case `DELETE_NODE`:
      {
        var _state$byNode$get, _state$byConnection$g;
        const node = action.payload;
        if (!node) {
          return state;
        }
        const queriesByNode = (_state$byNode$get = state.byNode.get(node.id)) !== null && _state$byNode$get !== void 0 ? _state$byNode$get : [];
        const queriesByConnection = (_state$byConnection$g = state.byConnection.get(node.internal.type)) !== null && _state$byConnection$g !== void 0 ? _state$byConnection$g : [];
        for (const queryId of queriesByNode) {
          const query = state.trackedQueries.get(queryId);
          if (query) {
            query.dirty = setFlag(query.dirty, FLAG_DIRTY_DATA);
            state = trackDirtyQuery(state, queryId);
          }
        }
        for (const queryId of queriesByConnection) {
          const query = state.trackedQueries.get(queryId);
          if (query) {
            query.dirty = setFlag(query.dirty, FLAG_DIRTY_DATA);
            state = trackDirtyQuery(state, queryId);
          }
        }
        return state;
      }
    case `PAGE_QUERY_RUN`:
      {
        const {
          path
        } = action.payload;
        const query = registerQuery(state, path);
        query.dirty = 0;
        query.running = 0; // TODO: also
        return state;
      }
    case `SET_PROGRAM_STATUS`:
      {
        if (action.payload === `BOOTSTRAP_FINISHED`) {
          // Reset the running state (as it could've been persisted)
          for (const [, query] of state.trackedQueries) {
            query.running = 0;
          }
          // Reset list of dirty queries (this is used only to notify runtime and it could've been persisted)
          state.dirtyQueriesListToEmitViaWebsocket = [];
        }
        return state;
      }
    case `QUERY_CLEAR_DIRTY_QUERIES_LIST_TO_EMIT_VIA_WEBSOCKET`:
      {
        state.dirtyQueriesListToEmitViaWebsocket = [];
        return state;
      }
    case `MERGE_WORKER_QUERY_STATE`:
      {
        // This action may be dispatched in cases where queries might not be included in the merge data
        if (!action.payload.queryStateChunk) {
          return state;
        }
        assertCorrectWorkerState(action.payload);
        state = mergeWorkerDataDependencies(state, action.payload);
        return state;
      }
    default:
      return state;
  }
}
function setFlag(allFlags, flag, set = true) {
  if (allFlags < 0) {
    allFlags = 0;
  }
  return set ? allFlags | flag : allFlags & ~flag;
}
function hasFlag(allFlags, flag) {
  return allFlags >= 0 && (allFlags & flag) > 0;
}
function addNodeDependency(state, queryId, nodeId) {
  // Perf: using two-side maps.
  //   Without additional `queryNodes` map we would have to loop through
  //   all existing nodes in `clearNodeDependencies` to delete node <-> query dependency
  let nodeQueries = state.byNode.get(nodeId);
  if (!nodeQueries) {
    nodeQueries = new Set();
    state.byNode.set(nodeId, nodeQueries);
  }
  let queryNodes = state.queryNodes.get(queryId);
  if (!queryNodes) {
    queryNodes = new Set();
    state.queryNodes.set(queryId, queryNodes);
  }
  nodeQueries.add(queryId);
  queryNodes.add(nodeId);
  return state;
}
function addConnectionDependency(state, queryId, connection) {
  // Note: not using two-side maps for connections as associated overhead
  //   for small number of elements is greater then benefits, so no perf. gains
  let queryIds = state.byConnection.get(connection);
  if (!queryIds) {
    queryIds = new Set();
    state.byConnection.set(connection, queryIds);
  }
  queryIds.add(queryId);
  return state;
}
function clearNodeDependencies(state, queryId) {
  var _state$queryNodes$get;
  const queryNodeIds = (_state$queryNodes$get = state.queryNodes.get(queryId)) !== null && _state$queryNodes$get !== void 0 ? _state$queryNodes$get : new Set();
  for (const nodeId of queryNodeIds) {
    const nodeQueries = state.byNode.get(nodeId);
    if (nodeQueries) {
      nodeQueries.delete(queryId);
    }
  }
  return state;
}
function clearConnectionDependencies(state, queryId) {
  for (const [, queryIds] of state.byConnection) {
    queryIds.delete(queryId);
  }
  return state;
}
function registerQuery(state, queryId) {
  let query = state.trackedQueries.get(queryId);
  if (!query) {
    query = initialQueryState();
    state.trackedQueries.set(queryId, query);
  }
  return query;
}
function registerComponent(state, componentPath) {
  let component = state.trackedComponents.get(componentPath);
  if (!component) {
    component = initialComponentState();
    component.componentPath = componentPath;
    state.trackedComponents.set(componentPath, component);
  }
  return component;
}
function trackDirtyQuery(state, queryId) {
  if (process.env.GATSBY_QUERY_ON_DEMAND) {
    state.dirtyQueriesListToEmitViaWebsocket.push(queryId);
  }
  return state;
}
function mergeWorkerDataDependencies(state, workerStateChunk) {
  const queryState = workerStateChunk.queryStateChunk;

  // First clear data dependencies for all queries tracked by worker
  for (const queryId of queryState.trackedQueries.keys()) {
    state = clearNodeDependencies(state, queryId);
    state = clearConnectionDependencies(state, queryId);
  }

  // Now re-add all data deps from worker
  for (const [nodeId, queries] of queryState.byNode) {
    for (const queryId of queries) {
      state = addNodeDependency(state, queryId, nodeId);
    }
  }
  for (const [connectionName, queries] of queryState.byConnection) {
    for (const queryId of queries) {
      state = addConnectionDependency(state, queryId, connectionName);
    }
  }
  return state;
}
function assertCorrectWorkerState({
  queryStateChunk,
  workerId
}) {
  if (queryStateChunk.deletedQueries.size !== 0) {
    throw new Error(`Assertion failed: workerState.deletedQueries.size === 0 (worker #${workerId})`);
  }
  if (queryStateChunk.trackedComponents.size !== 0) {
    throw new Error(`Assertion failed: queryStateChunk.trackedComponents.size === 0 (worker #${workerId})`);
  }
  for (const query of queryStateChunk.trackedQueries.values()) {
    if (query.dirty) {
      throw new Error(`Assertion failed: all worker queries are not dirty (worker #${workerId})`);
    }
    if (query.running) {
      throw new Error(`Assertion failed: all worker queries are not running (worker #${workerId})`);
    }
  }
}
//# sourceMappingURL=queries.js.map