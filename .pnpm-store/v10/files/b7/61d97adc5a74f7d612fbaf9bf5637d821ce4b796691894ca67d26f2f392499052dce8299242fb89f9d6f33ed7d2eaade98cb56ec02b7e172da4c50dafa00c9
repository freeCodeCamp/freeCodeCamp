"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addProposalSyntaxPlugins = addProposalSyntaxPlugins;
exports.removeUnnecessaryItems = removeUnnecessaryItems;
exports.removeUnsupportedItems = removeUnsupportedItems;
var _semver = require("semver");
var _availablePlugins = require("./available-plugins.js");
const has = Function.call.bind(Object.hasOwnProperty);
function addProposalSyntaxPlugins(items, proposalSyntaxPlugins) {
  proposalSyntaxPlugins.forEach(plugin => {
    items.add(plugin);
  });
}
function removeUnnecessaryItems(items, overlapping) {
  items.forEach(item => {
    var _overlapping$item;
    (_overlapping$item = overlapping[item]) == null || _overlapping$item.forEach(name => items.delete(name));
  });
}
function removeUnsupportedItems(items, babelVersion) {
  items.forEach(item => {
    if (has(_availablePlugins.minVersions, item) && _semver.lt(babelVersion, _availablePlugins.minVersions[item])) {
      items.delete(item);
    }
  });
}

//# sourceMappingURL=filter-items.js.map
