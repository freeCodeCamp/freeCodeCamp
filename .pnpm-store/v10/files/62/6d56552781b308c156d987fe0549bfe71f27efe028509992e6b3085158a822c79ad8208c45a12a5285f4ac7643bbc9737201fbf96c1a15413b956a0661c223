"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.loadConfig = loadConfig;
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _preferDefault = require("../prefer-default");
var _getConfigFile = require("../get-config-file");
var _actions = require("../../redux/actions");
var _loadThemes = require("../load-themes");
var _redux = require("../../redux");
var _handleFlags = _interopRequireDefault(require("../../utils/handle-flags"));
var _flags = _interopRequireDefault(require("../../utils/flags"));
async function loadConfig({
  siteDirectory,
  processFlags = false
}) {
  // Try opening the site's gatsby-config.js file.
  const {
    configModule,
    configFilePath
  } = await (0, _getConfigFile.getConfigFile)(siteDirectory, `gatsby-config`);
  let config = (0, _preferDefault.preferDefault)(configModule);

  // The root config cannot be exported as a function, only theme configs
  if (typeof config === `function`) {
    _reporter.default.panic({
      id: `10126`,
      context: {
        configName: `gatsby-config`,
        siteDirectory
      }
    });
  }
  if (processFlags) {
    var _config$flags, _config;
    // Setup flags
    const {
      enabledConfigFlags,
      unknownFlagMessage,
      unfitFlagMessage,
      message
    } = (0, _handleFlags.default)(_flags.default, (_config$flags = (_config = config) === null || _config === void 0 ? void 0 : _config.flags) !== null && _config$flags !== void 0 ? _config$flags : {});
    if (unknownFlagMessage !== ``) {
      _reporter.default.warn(unknownFlagMessage);
    }
    if (unfitFlagMessage !== ``) {
      _reporter.default.warn(unfitFlagMessage);
    }
    //  set process.env for each flag
    enabledConfigFlags.forEach(flag => {
      process.env[flag.env] = `true`;
    });

    // Print out message.
    if (message !== ``) {
      _reporter.default.info(message);
    }
    process.env.GATSBY_SLICES = `true`;
  }

  // theme gatsby configs can be functions or objects
  if (config) {
    const plugins = await (0, _loadThemes.loadThemes)(config, {
      configFilePath,
      rootDir: siteDirectory
    });
    config = plugins.config;
  }
  _redux.store.dispatch(_actions.internalActions.setSiteConfig(config));
  return config;
}
//# sourceMappingURL=index.js.map