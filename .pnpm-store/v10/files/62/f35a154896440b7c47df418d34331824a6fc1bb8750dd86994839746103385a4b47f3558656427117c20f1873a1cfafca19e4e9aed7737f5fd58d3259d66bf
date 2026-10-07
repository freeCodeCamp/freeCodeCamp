"use strict";

exports.__esModule = true;
exports.developMachine = void 0;
var _xstate = require("xstate");
var _actions = require("./actions");
var _services = require("./services");
const RECOMPILE_PANIC_LIMIT = 6;
const getGraphqlTypegenConfig = ctx => !!ctx.store.getState().config.graphqlTypegen;

/**
 * This is the top-level state machine for the `gatsby develop` command
 */
const developConfig = {
  predictableActionArguments: true,
  id: `build`,
  initial: `initializing`,
  // These are mutation events, sent to this machine by the mutation listener
  // in `services/listen-for-mutations.ts`
  on: {
    // These are deferred node mutations, mainly `createNode`
    ADD_NODE_MUTATION: {
      actions: `addNodeMutation`
    },
    // Sent when webpack or chokidar sees a changed file
    SOURCE_FILE_CHANGED: {
      actions: `markSourceFilesDirty`
    },
    // These are calls to the refresh endpoint. Also used by Gatsby Preview.
    // Saves the webhook body from the event into context, then reloads data
    WEBHOOK_RECEIVED: {
      target: `reloadingData`,
      actions: `assignWebhookBody`
    },
    QUERY_RUN_REQUESTED: {
      actions: `trackRequestedQueryRun`
    },
    SET_SCHEMA: {
      actions: `schemaTypegen`,
      cond: ctx => getGraphqlTypegenConfig(ctx) && !ctx.shouldRunInitialTypegen
    },
    SET_GRAPHQL_DEFINITIONS: {
      actions: `definitionsTypegen`,
      cond: ctx => getGraphqlTypegenConfig(ctx) && !ctx.shouldRunInitialTypegen
    }
  },
  states: {
    // Here we handle the initial bootstrap
    initializing: {
      on: {
        // Ignore mutation events because we'll be running everything anyway
        ADD_NODE_MUTATION: undefined,
        SOURCE_FILE_CHANGED: undefined,
        WEBHOOK_RECEIVED: undefined
      },
      invoke: {
        id: `initialize`,
        src: `initialize`,
        onDone: {
          target: `initializingData`,
          actions: [`assignStoreAndWorkerPool`, `spawnMutationListener`]
        },
        onError: {
          actions: `panic`
        }
      }
    },
    // Sourcing nodes, customising and inferring schema, then running createPages
    initializingData: {
      on: {
        // We need to run mutations immediately when in this state
        ADD_NODE_MUTATION: {
          actions: `callApi`
        }
      },
      invoke: {
        id: `initialize-data`,
        src: `initializeData`,
        data: ({
          parentSpan,
          store,
          webhookBody,
          program,
          reporter
        }) => {
          return {
            parentSpan,
            store,
            webhookBody,
            shouldRunCreatePagesStatefully: true,
            deferNodeMutation: true,
            program,
            reporter
          };
        },
        onDone: {
          actions: [`assignServiceResult`, `clearWebhookBody`, `finishParentSpan`],
          target: `runningPostBootstrap`
        },
        onError: {
          actions: `logError`,
          target: `waiting`
        }
      }
    },
    runningPostBootstrap: {
      invoke: {
        id: `post-bootstrap`,
        src: `postBootstrap`,
        onDone: `runningQueries`
      }
    },
    // Running page and static queries and generating the SSRed HTML and page data
    runningQueries: {
      on: {
        SOURCE_FILE_CHANGED: {
          actions: [(0, _xstate.forwardTo)(`run-queries`), `markSourceFilesDirty`]
        },
        ADD_NODE_MUTATION: {
          actions: [`markNodesDirty`, `callApi`]
        },
        QUERY_RUN_REQUESTED: {
          actions: (0, _xstate.forwardTo)(`run-queries`)
        }
      },
      invoke: {
        id: `run-queries`,
        src: `runQueries`,
        // This is all the data that we're sending to the child machine
        data: ({
          program,
          store,
          parentSpan,
          gatsbyNodeGraphQLFunction,
          graphqlRunner,
          websocketManager,
          pendingQueryRuns,
          reporter
        }) => {
          return {
            program,
            store,
            parentSpan,
            gatsbyNodeGraphQLFunction,
            graphqlRunner,
            websocketManager,
            pendingQueryRuns,
            reporter
          };
        },
        onDone: [{
          // If we're at the recompile limit and nodes were mutated again then panic
          target: `waiting`,
          actions: `panicBecauseOfInfiniteLoop`,
          cond: ({
            nodesMutatedDuringQueryRun = false,
            nodesMutatedDuringQueryRunRecompileCount = 0
          }) => nodesMutatedDuringQueryRun && nodesMutatedDuringQueryRunRecompileCount >= RECOMPILE_PANIC_LIMIT
        }, {
          // Nodes were mutated while querying, so we need to re-run everything
          target: `recreatingPages`,
          cond: ({
            nodesMutatedDuringQueryRun
          }) => !!nodesMutatedDuringQueryRun,
          actions: [`markNodesClean`, `incrementRecompileCount`, `clearPendingQueryRuns`]
        }, {
          // If we have no compiler (i.e. it's first run), then spin up the
          // webpack and socket.io servers
          target: `startingDevServers`,
          actions: [`setQueryRunningFinished`, `clearPendingQueryRuns`],
          cond: ({
            compiler
          }) => !compiler
        }, {
          // If source files have changed, then recompile the JS bundle
          target: `recompiling`,
          cond: ({
            sourceFilesDirty
          }) => !!sourceFilesDirty,
          actions: [`clearPendingQueryRuns`]
        }, {
          // ...otherwise just wait.
          target: `waiting`,
          actions: [`clearPendingQueryRuns`]
        }],
        onError: {
          actions: [`logError`, `clearPendingQueryRuns`],
          target: `waiting`
        }
      },
      exit: (0, _xstate.assign)({
        shouldRunInitialTypegen: false
      })
    },
    // Recompile the JS bundle
    recompiling: {
      // Important: mark source files as clean when recompiling starts
      // Doing this `onDone` will wipe all file change events that occur **during** recompilation
      // See https://github.com/gatsbyjs/gatsby/issues/27609
      entry: [`setRecompiledFiles`, `markSourceFilesClean`],
      invoke: {
        src: `recompile`,
        onDone: {
          target: `waiting`
        },
        onError: {
          actions: `logError`,
          target: `waiting`
        }
      }
    },
    // Spin up webpack and socket.io
    startingDevServers: {
      invoke: {
        src: `startWebpackServer`,
        onDone: [{
          target: `initialGraphQLTypegen`,
          cond: ctx => getGraphqlTypegenConfig(ctx)
        }, {
          target: `waiting`
        }],
        onError: {
          actions: `panic`,
          target: `waiting`
        }
      },
      exit: [`assignServers`, `spawnWebpackListener`, `markSourceFilesClean`]
    },
    initialGraphQLTypegen: {
      invoke: {
        src: `graphQLTypegen`,
        onDone: {
          target: `waiting`
        },
        onError: {
          actions: `logError`,
          target: `waiting`
        }
      }
    },
    // Idle, waiting for events that make us rebuild
    waiting: {
      always: [{
        target: `runningQueries`,
        cond: ({
          pendingQueryRuns
        }) => !!pendingQueryRuns && pendingQueryRuns.size > 0
      }],
      entry: [`saveDbState`, `resetRecompileCount`],
      on: {
        // Forward these events to the child machine, so it can handle batching
        ADD_NODE_MUTATION: {
          actions: (0, _xstate.forwardTo)(`waiting`)
        },
        SOURCE_FILE_CHANGED: {
          actions: [(0, _xstate.forwardTo)(`waiting`), `markSourceFilesDirty`]
        },
        // This event is sent from the child
        EXTRACT_QUERIES_NOW: {
          target: `runningQueries`
        }
      },
      invoke: {
        id: `waiting`,
        src: `waitForMutations`,
        // Send existing queued mutations to the child machine, which will execute them
        data: ({
          store,
          nodeMutationBatch = [],
          sourceFilesDirty
        }) => {
          return {
            store,
            nodeMutationBatch,
            sourceFilesDirty,
            runningBatch: []
          };
        },
        // "done" means we need to rebuild
        onDone: {
          actions: `assignServiceResult`,
          target: `recreatingPages`
        },
        onError: {
          actions: `panic`
        }
      }
    },
    // Almost the same as initializing data, but skips various first-run stuff
    reloadingData: {
      on: {
        // We need to run mutations immediately when in this state
        ADD_NODE_MUTATION: {
          actions: `callApi`
        }
      },
      invoke: {
        src: `reloadData`,
        data: ({
          parentSpan,
          store,
          webhookBody,
          webhookSourcePluginName,
          program,
          reporter
        }) => {
          return {
            parentSpan,
            store,
            webhookBody,
            webhookSourcePluginName,
            refresh: true,
            deferNodeMutation: true,
            shouldRunCreatePagesStatefully: false,
            program,
            reporter
          };
        },
        onDone: {
          actions: [`assignServiceResult`, `clearWebhookBody`, `finishParentSpan`],
          target: `runningQueries`
        },
        onError: {
          actions: `logError`,
          target: `waiting`
        }
      }
    },
    // Rebuild pages if a node has been mutated outside of sourceNodes
    recreatingPages: {
      on: {
        // We need to run mutations immediately when in this state
        ADD_NODE_MUTATION: {
          actions: `callApi`
        }
      },
      invoke: {
        id: `recreate-pages`,
        src: `recreatePages`,
        data: ({
          parentSpan,
          store,
          program,
          reporter
        }) => {
          return {
            parentSpan,
            store,
            program,
            deferNodeMutation: true,
            shouldRunCreatePagesStatefully: false,
            reporter
          };
        },
        onDone: {
          actions: `assignServiceResult`,
          target: `runningQueries`
        },
        onError: {
          actions: `logError`,
          target: `waiting`
        }
      }
    }
  }
};
const developMachine = (0, _xstate.createMachine)(developConfig, {
  services: _services.developServices,
  actions: _actions.buildActions
});
exports.developMachine = developMachine;
//# sourceMappingURL=index.js.map