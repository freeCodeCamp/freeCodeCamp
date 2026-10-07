"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "convertFunctionParams", {
  enumerable: true,
  get: function () {
    return _params.default;
  }
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _params = require("./params.js");
var _rest = require("./rest.js");
var _default = exports.default = (0, _helperPluginUtils.declare)((api, options) => {
  var _api$assumption, _api$assumption2;
  api.assertVersion(7);
  const ignoreFunctionLength = (_api$assumption = api.assumption("ignoreFunctionLength")) != null ? _api$assumption : options.loose;
  const noNewArrows = (_api$assumption2 = api.assumption("noNewArrows")) != null ? _api$assumption2 : true;
  return {
    name: "transform-parameters",
    visitor: {
      Function(path) {
        if (path.isArrowFunctionExpression() && path.get("params").some(param => param.isRestElement() || param.isAssignmentPattern())) {
          path.arrowFunctionToExpression({
            allowInsertArrowWithRest: false,
            noNewArrows
          });
          if (!path.isFunctionExpression()) return;
        }
        const convertedRest = (0, _rest.default)(path);
        const convertedParams = (0, _params.default)(path, ignoreFunctionLength);
        if (convertedRest || convertedParams) {
          path.scope.crawl();
        }
      }
    }
  };
});

//# sourceMappingURL=index.js.map
