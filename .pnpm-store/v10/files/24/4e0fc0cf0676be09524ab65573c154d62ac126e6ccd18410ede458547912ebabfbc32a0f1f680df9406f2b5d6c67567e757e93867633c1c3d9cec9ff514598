"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.prepareUrls = prepareUrls;
var _address = _interopRequireDefault(require("address"));
var _chalk = _interopRequireDefault(require("chalk"));
var _url = _interopRequireDefault(require("url"));
function prepareUrls(protocol, host, port) {
  const formatUrl = hostname => _url.default.format({
    protocol,
    hostname,
    port,
    pathname: `/`
  });
  const prettyPrintUrl = hostname => _url.default.format({
    protocol,
    hostname,
    port: _chalk.default.bold(String(port)),
    pathname: `/`
  });
  const isUnspecifiedHost = host === `0.0.0.0` || host === `::`;
  let prettyHost = host;
  let lanUrlForConfig;
  let lanUrlForTerminal;
  if (isUnspecifiedHost) {
    prettyHost = `localhost`;
    try {
      // This can only return an IPv4 address
      lanUrlForConfig = _address.default.ip();
      if (lanUrlForConfig) {
        // Check if the address is a private ip
        // https://en.wikipedia.org/wiki/Private_network#Private_IPv4_address_spaces
        if (/^10[.]|^172[.](1[6-9]|2[0-9]|3[0-1])[.]|^192[.]168[.]/.test(lanUrlForConfig)) {
          // Address is private, format it for later use
          lanUrlForTerminal = prettyPrintUrl(lanUrlForConfig);
        } else {
          // Address is not private, so we will discard it
          lanUrlForConfig = undefined;
        }
      }
    } catch (_e) {
      // ignored
    }
  }
  // TODO collect errors (GraphQL + Webpack) in Redux so we
  // can clear terminal and print them out on every compile.
  // Borrow pretty printing code from webpack plugin.
  const localUrlForTerminal = prettyPrintUrl(prettyHost);
  const localUrlForBrowser = formatUrl(prettyHost);
  return {
    lanUrlForConfig,
    lanUrlForTerminal,
    localUrlForTerminal,
    localUrlForBrowser
  };
}
//# sourceMappingURL=prepare-urls.js.map