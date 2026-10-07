"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createValidationRequest;

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

var _ParcelConfig = _interopRequireDefault(require("../ParcelConfig"));

var _ReporterRunner = require("../ReporterRunner");

var _Validation = _interopRequireDefault(require("../Validation"));

var _ParcelConfigRequest = _interopRequireDefault(require("./ParcelConfigRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createValidationRequest(input) {
  return {
    id: 'validation',
    type: 'validation_request',
    run: async ({
      input: {
        assetRequests,
        optionsRef
      },
      api,
      options,
      farm
    }) => {
      let {
        config: processedConfig,
        cachePath
      } = (0, _nullthrows().default)(await api.runRequest((0, _ParcelConfigRequest.default)()));
      let config = new _ParcelConfig.default(processedConfig, options);
      let trackedRequestsDesc = assetRequests.filter(request => {
        return config.getValidatorNames(request.filePath).length > 0;
      }); // Schedule validations on workers for all plugins that implement the one-asset-at-a-time "validate" method.

      let promises = trackedRequestsDesc.map(async request => (await farm.createHandle('runValidate'))({
        requests: [request],
        optionsRef: optionsRef,
        configCachePath: cachePath
      })); // Skip sending validation requests if no validators were configured

      if (trackedRequestsDesc.length === 0) {
        return;
      } // Schedule validations on the main thread for all validation plugins that implement "validateAll".


      promises.push(new _Validation.default({
        requests: trackedRequestsDesc,
        options,
        config,
        report: _ReporterRunner.report,
        dedicatedThread: true
      }).run());
      await Promise.all(promises);
    },
    input
  };
}