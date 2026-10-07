"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logPlugin = void 0;
var _helperCompilationTargets = require("@babel/helper-compilation-targets");
var _plugins = require("@babel/compat-data/plugins");
const logPlugin = (item, targetVersions, list) => {
  const filteredList = (0, _helperCompilationTargets.getInclusionReasons)(item, targetVersions, list);
  const support = list[item];
  {
    if (item.startsWith("transform-")) {
      const proposalName = `proposal-${item.slice(10)}`;
      if (proposalName === "proposal-dynamic-import" || Object.prototype.hasOwnProperty.call(_plugins, proposalName)) {
        item = proposalName;
      }
    }
  }
  if (!support) {
    console.log(`  ${item}`);
    return;
  }
  let formattedTargets = `{`;
  let first = true;
  for (const target of Object.keys(filteredList)) {
    if (!first) formattedTargets += `,`;
    first = false;
    formattedTargets += ` ${target}`;
    if (support[target]) formattedTargets += ` < ${support[target]}`;
  }
  formattedTargets += ` }`;
  console.log(`  ${item} ${formattedTargets}`);
};
exports.logPlugin = logPlugin;

//# sourceMappingURL=debug.js.map
