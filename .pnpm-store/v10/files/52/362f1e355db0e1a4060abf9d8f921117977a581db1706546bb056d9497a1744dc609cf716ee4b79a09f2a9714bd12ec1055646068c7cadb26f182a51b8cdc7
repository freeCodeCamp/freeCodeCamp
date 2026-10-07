"use strict";

exports.__esModule = true;
exports.reloadDataMachine = exports.recreatePagesMachine = exports.initializeDataMachine = void 0;
var _xstate = require("xstate");
var _actions = require("./actions");
var _services = require("./services");
const loadDataStates = {
  customizingSchema: {
    invoke: {
      src: `customizeSchema`,
      id: `customizing-schema`,
      onDone: {
        target: `sourcingNodes`
      }
    }
  },
  sourcingNodes: {
    invoke: {
      src: `sourceNodes`,
      id: `sourcing-nodes`,
      onDone: {
        target: `buildingSchema`,
        actions: `assignChangedPages`
      }
    }
  }
};
const initialCreatePagesStates = {
  buildingSchema: {
    invoke: {
      id: `building-schema`,
      src: `buildSchema`,
      onDone: {
        target: `creatingPages`,
        actions: `assignGraphQLRunners`
      }
    }
  },
  creatingPages: {
    invoke: {
      id: `creating-pages`,
      src: `createPages`,
      onDone: {
        target: `writingOutRedirects`,
        actions: `assignChangedPages`
      }
    }
  },
  writingOutRedirects: {
    invoke: {
      src: `writeOutRedirectsAndWatch`,
      onDone: {
        target: `done`
      }
    }
  }
};
const recreatePagesStates = {
  buildingSchema: {
    invoke: {
      id: `building-schema`,
      src: `buildSchema`,
      onDone: {
        target: `creatingPages`,
        actions: `assignGraphQLRunners`
      }
    }
  },
  creatingPages: {
    invoke: {
      id: `creating-pages`,
      src: `createPages`,
      onDone: {
        target: `done`,
        actions: `assignChangedPages`
      }
    }
  }
};
const doneState = {
  done: {
    type: `final`,
    data: ({
      gatsbyNodeGraphQLFunction,
      graphqlRunner,
      pagesToBuild,
      pagesToDelete
    }) => {
      return {
        gatsbyNodeGraphQLFunction,
        graphqlRunner,
        pagesToBuild,
        pagesToDelete
      };
    }
  }
};
const options = {
  actions: _actions.dataLayerActions,
  services: _services.dataLayerServices
};

/**
 * Machine used during first run
 */

const initializeDataMachine = (0, _xstate.createMachine)({
  predictableActionArguments: true,
  id: `initializeDataMachine`,
  context: {},
  initial: `customizingSchema`,
  states: {
    ...loadDataStates,
    ...initialCreatePagesStates,
    ...doneState
  }
}, options);

/**
 * Machine used when we need to source nodes again
 */
exports.initializeDataMachine = initializeDataMachine;
const reloadDataMachine = (0, _xstate.createMachine)({
  predictableActionArguments: true,
  id: `reloadDataMachine`,
  context: {},
  initial: `customizingSchema`,
  states: {
    ...loadDataStates,
    ...recreatePagesStates,
    ...doneState
  }
}, options);

/**
 * Machine used when we need to re-create pages after a
 * node mutation outside of sourceNodes
 */
exports.reloadDataMachine = reloadDataMachine;
const recreatePagesMachine = (0, _xstate.createMachine)({
  predictableActionArguments: true,
  id: `recreatePagesMachine`,
  context: {},
  initial: `buildingSchema`,
  states: {
    ...recreatePagesStates,
    ...doneState
  }
}, options);
exports.recreatePagesMachine = recreatePagesMachine;
//# sourceMappingURL=index.js.map