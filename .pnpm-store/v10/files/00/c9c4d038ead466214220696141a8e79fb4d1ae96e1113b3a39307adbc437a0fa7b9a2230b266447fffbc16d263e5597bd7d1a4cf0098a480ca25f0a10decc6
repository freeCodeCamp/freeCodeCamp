"use strict";

exports.__esModule = true;
exports.routeLoadingIndicatorRequests = routeLoadingIndicatorRequests;
exports.writeVirtualLoadingIndicatorModule = writeVirtualLoadingIndicatorModule;
var _gatsbyWebpackVirtualModules = require("./gatsby-webpack-virtual-modules");
// set value to undefined first, because env vars needed to determine if indicator
// should ever be enabled by default might not be set yet - we set it to "initial"
// first time we write out module if loading indicator is allowed
// "initial" means that browser will decide if it should show it
// for now we do disable it by default when running in cypress
// to not cause problems for users when they iterate on their E2E tests
// this check could be expanded in the future to add support for more scenarios
// like that.
let indicatorEnabled = undefined;
function writeVirtualLoadingIndicatorModule() {
  if (indicatorEnabled === undefined) {
    indicatorEnabled = process.env.GATSBY_QUERY_ON_DEMAND && process.env.GATSBY_QUERY_ON_DEMAND_LOADING_INDICATOR === `true` ? `auto` : false;
  }
  (0, _gatsbyWebpackVirtualModules.writeModule)(`$virtual/loading-indicator.js`, `
    export function isLoadingIndicatorEnabled() {
    return ${indicatorEnabled === `auto` ? `\`Cypress\` in window
          ? false
          : true` : JSON.stringify(indicatorEnabled)}
  }`);
}
function routeLoadingIndicatorRequests(app) {
  app.get(`/___loading-indicator/:method?`, (req, res) => {
    if (req.params.method === `enable` && indicatorEnabled !== true) {
      indicatorEnabled = true;
      writeVirtualLoadingIndicatorModule();
    } else if (req.params.method === `disable` && indicatorEnabled !== false) {
      indicatorEnabled = false;
      writeVirtualLoadingIndicatorModule();
    } else if (req.params.method === `auto` && indicatorEnabled !== `auto`) {
      indicatorEnabled = `auto`;
      writeVirtualLoadingIndicatorModule();
    }
    res.status(200).send({
      status: indicatorEnabled === `auto` ? `auto` : indicatorEnabled ? `enabled` : `disabled`
    });
  });
}
//# sourceMappingURL=loading-indicator.js.map