"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _default = exports.default = (0, _helperPluginUtils.declare)((api, options) => {
  api.assertVersion("^7.0.0-0 || ^8.0.0-0 || >8.0.0-alpha <8.0.0-beta");
  let {
    version
  } = options;
  const {
    legacy
  } = options;
  if (legacy !== undefined) {
    if (typeof legacy !== "boolean") {
      throw new Error(".legacy must be a boolean.");
    }
    if (version !== undefined) {
      throw new Error("You can either use the .legacy or the .version option, not both.");
    }
  }
  if (version === undefined) {
    version = legacy ? "legacy" : "2018-09";
  } else if (version !== "2023-11" && version !== "2023-05" && version !== "2023-01" && version !== "2022-03" && version !== "2021-12" && version !== "2018-09" && version !== "legacy") {
    throw new Error("Unsupported decorators version: " + version);
  }
  var {
    decoratorsBeforeExport
  } = options;
  if (decoratorsBeforeExport === undefined) {
    if (version === "2021-12" || version === "2022-03") {
      decoratorsBeforeExport = false;
    } else if (version === "2018-09") {
      throw new Error("The decorators plugin, when .version is '2018-09' or not specified," + " requires a 'decoratorsBeforeExport' option, whose value must be a boolean.");
    }
  } else {
    if (version === "legacy" || version === "2022-03" || version === "2023-01") {
      throw new Error(`'decoratorsBeforeExport' can't be used with ${version} decorators.`);
    }
    if (typeof decoratorsBeforeExport !== "boolean") {
      throw new Error("'decoratorsBeforeExport' must be a boolean.");
    }
  }
  return {
    name: "syntax-decorators",
    manipulateOptions({
      generatorOpts
    }, parserOpts) {
      if (version === "legacy") {
        parserOpts.plugins.push("decorators-legacy");
      } else {
        if (version === "2023-01" || version === "2023-05" || version === "2023-11") {
          parserOpts.plugins.push(["decorators", {
            allowCallParenthesized: false
          }], "decoratorAutoAccessors");
        } else if (version === "2022-03") {
          parserOpts.plugins.push(["decorators", {
            decoratorsBeforeExport: false,
            allowCallParenthesized: false
          }], "decoratorAutoAccessors");
        } else if (version === "2021-12") {
          parserOpts.plugins.push(["decorators", {
            decoratorsBeforeExport
          }], "decoratorAutoAccessors");
          generatorOpts.decoratorsBeforeExport = decoratorsBeforeExport;
        } else if (version === "2018-09") {
          parserOpts.plugins.push(["decorators", {
            decoratorsBeforeExport
          }]);
          generatorOpts.decoratorsBeforeExport = decoratorsBeforeExport;
        }
      }
    }
  };
});

//# sourceMappingURL=index.js.map
