"use strict";

exports.__esModule = true;
exports.programReducer = void 0;
var _reporter = require("gatsby-cli/lib/reporter/reporter");
const initialState = {
  directory: `/`,
  status: `BOOTSTRAPPING`,
  _: `develop`,
  useYarn: false,
  open: false,
  openTracingConfigFile: ``,
  port: 80,
  proxyPort: 80,
  host: `localhost`,
  sitePackageJson: {},
  extensions: [],
  browserslist: [],
  report: _reporter.reporter,
  disablePlugins: []
};
const programReducer = (state = initialState, action) => {
  switch (action.type) {
    case `SET_PROGRAM`:
      return {
        ...state,
        ...action.payload
      };
    case `SET_PROGRAM_EXTENSIONS`:
      return {
        ...state,
        extensions: action.payload
      };
    case `SET_PROGRAM_STATUS`:
      return {
        ...state,
        status: `BOOTSTRAP_FINISHED`
      };
    case `DISABLE_PLUGINS_BY_NAME`:
      {
        if (!state.disablePlugins) {
          state.disablePlugins = [];
        }
        for (const pluginToDisable of action.payload.pluginsToDisable) {
          let disabledPlugin = state.disablePlugins.find(entry => entry.name === pluginToDisable);
          if (!disabledPlugin) {
            disabledPlugin = {
              name: pluginToDisable,
              reasons: []
            };
            state.disablePlugins.push(disabledPlugin);
          }
          disabledPlugin.reasons.push(action.payload.reason);
        }
        return state;
      }
    default:
      return state;
  }
};
exports.programReducer = programReducer;
//# sourceMappingURL=program.js.map