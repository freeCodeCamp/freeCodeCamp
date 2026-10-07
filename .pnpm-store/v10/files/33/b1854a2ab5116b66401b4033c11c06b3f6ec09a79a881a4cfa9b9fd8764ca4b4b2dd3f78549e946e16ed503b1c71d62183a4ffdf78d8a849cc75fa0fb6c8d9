"use strict";

exports.__esModule = true;
exports.queryStates = exports.queryRunningMachine = void 0;
var _xstate = require("xstate");
var _services = require("./services");
var _actions = require("./actions");
/**
 * This is a child state machine, spawned to perform the query running
 */

const PAGE_QUERY_ENQUEUING_TIMEOUT = 50;
const queryStates = {
  predictableActionArguments: true,
  initial: `extractingQueries`,
  id: `queryRunningMachine`,
  on: {
    SOURCE_FILE_CHANGED: {
      actions: `markSourceFilesDirty`
    },
    QUERY_RUN_REQUESTED: {
      actions: `trackRequestedQueryRun`
    }
  },
  states: {
    extractingQueries: {
      id: `extracting-queries`,
      invoke: {
        id: `extracting-queries`,
        src: `extractQueries`,
        onDone: {
          target: `waitingPendingQueries`
        }
      }
    },
    // This state exists solely because "extractQueries" finishes too early.
    // It finishes before extracted queries are enqueued for execution.
    // As a result calculateDirtyQueries doesn't see them and they are not executed.
    //
    // This happens because extracted queries are enqueued for execution with setTimeout(x, 0)
    // wrapper in actions of redux/machines/page-component which fires after "extractQueries" finishes.
    //
    // see https://github.com/gatsbyjs/gatsby/issues/26580
    //
    // FIXME: this has to be fixed properly by not leaving "extractingQueries" state
    //   until all extracted queries are enqueued for execution (but requires a refactor)
    waitingPendingQueries: {
      id: `waiting-pending-queries`,
      after: {
        [PAGE_QUERY_ENQUEUING_TIMEOUT]: {
          target: `writingRequires`,
          actions: `markSourceFilesClean`
        }
      }
    },
    writingRequires: {
      invoke: {
        src: `writeOutRequires`,
        id: `writing-requires`,
        onDone: {
          target: `calculatingDirtyQueries`
        }
      }
    },
    calculatingDirtyQueries: {
      entry: (0, _xstate.assign)(({
        pendingQueryRuns
      }) => {
        return {
          pendingQueryRuns: new Set(),
          currentlyHandledPendingQueryRuns: pendingQueryRuns
        };
      }),
      invoke: {
        id: `calculating-dirty-queries`,
        src: `calculateDirtyQueries`,
        onDone: {
          target: `runningStaticQueries`,
          actions: [`assignDirtyQueries`, `clearCurrentlyHandledPendingQueryRuns`]
        }
      }
    },
    runningStaticQueries: {
      invoke: {
        src: `runStaticQueries`,
        id: `running-static-queries`,
        onDone: {
          target: `runningPageQueries`
        }
      }
    },
    runningPageQueries: {
      invoke: {
        src: `runPageQueries`,
        id: `running-page-queries`,
        onDone: {
          target: `runningSliceQueries`
        }
      }
    },
    runningSliceQueries: {
      invoke: {
        src: `runSliceQueries`,
        id: `running-slice-queries`,
        onDone: {
          target: `waitingForJobs`,
          actions: `flushPageData`
        }
      }
    },
    // This waits for the jobs API to finish
    waitingForJobs: {
      // If files are dirty go and extract again
      always: [{
        cond: ctx => !!ctx.filesDirty,
        target: `extractingQueries`
      }, {
        cond: ({
          pendingQueryRuns
        }) => !!pendingQueryRuns && pendingQueryRuns.size > 0,
        target: `calculatingDirtyQueries`
      }],
      invoke: {
        src: `waitUntilAllJobsComplete`,
        id: `waiting-for-jobs`,
        onDone: {
          target: `done`
        }
      }
    },
    done: {
      type: `final`
    }
  }
};
exports.queryStates = queryStates;
const queryRunningMachine = (0, _xstate.createMachine)(queryStates, {
  actions: _actions.queryActions,
  services: _services.queryRunningServices
});
exports.queryRunningMachine = queryRunningMachine;
//# sourceMappingURL=index.js.map