"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.onCreateDevServer = onCreateDevServer;
var _path = _interopRequireDefault(require("path"));
var _utils = require("@builder.io/partytown/utils");
var _proxy = require("./proxy");
/**
 * Copy Partytown library files to public.
 * @see {@link https://partytown.builder.io/copy-library-files}
 */
exports.onPreBootstrap = async ({
  store
}) => {
  const {
    program
  } = store.getState();
  await (0, _utils.copyLibFiles)(_path.default.join(program.directory, `public`, `~partytown`));
};

/**
 * Implement reverse proxy so scripts can fetch in web workers without CORS errors.
 * @see {@link https://partytown.builder.io/proxying-requests}
 */
exports.createPages = ({
  actions,
  store
}) => {
  const {
    createRedirect
  } = actions;
  const {
    config = {}
  } = store.getState();
  const {
    partytownProxiedURLs = []
  } = config;
  for (const host of partytownProxiedURLs) {
    const encodedURL = encodeURIComponent(host);
    createRedirect({
      fromPath: `${_proxy.thirdPartyProxyPath}?url=${encodedURL}`,
      toPath: host,
      statusCode: 200
    });
  }
};
async function onCreateDevServer({
  app,
  store
}) {
  const {
    config
  } = store.getState();
  const {
    partytownProxiedURLs = []
  } = config || {};
  app.use(_proxy.thirdPartyProxyPath, (0, _proxy.partytownProxy)(partytownProxiedURLs));
}
//# sourceMappingURL=gatsby-node.js.map