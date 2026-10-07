const querystring = require('querystring');

/**
 * @typedef {Object} AdditionalEntries
 * @property {string[]} prependEntries
 * @property {string[]} overlayEntries
 */

/**
 * Creates an object that contains two entry arrays: the prependEntries and overlayEntries
 * @param {Object} optionsContainer This is the container for the options to this function
 * @param {import('../types').NormalizedPluginOptions} optionsContainer.options Configuration options for this plugin.
 * @param {import('webpack').Compiler["options"]["devServer"]} [optionsContainer.devServer] The webpack devServer config
 * @returns {AdditionalEntries} An object that contains the Webpack entries for prepending and the overlay feature
 */
function getAdditionalEntries({ devServer, options }) {
  /** @type {Record<string, string | number>} */
  let resourceQuery = {};

  if (devServer) {
    const { client, https, http2, sockHost, sockPath, sockPort } = devServer;
    let { host, path, port } = devServer;

    let protocol = https || http2 ? 'https' : 'http';
    if (sockHost) host = sockHost;
    if (sockPath) path = sockPath;
    if (sockPort) port = sockPort;

    if (client && client.webSocketURL != null) {
      let parsedUrl = client.webSocketURL;
      if (typeof parsedUrl === 'string') parsedUrl = new URL(parsedUrl);

      let auth;
      if (parsedUrl.username) {
        auth = parsedUrl.username;
        if (parsedUrl.password) {
          auth += ':' + parsedUrl.password;
        }
      }

      if (parsedUrl.hostname != null) {
        host = [auth != null && auth, parsedUrl.hostname].filter(Boolean).join('@');
      }
      if (parsedUrl.pathname != null) {
        path = parsedUrl.pathname;
      }
      if (parsedUrl.port != null) {
        port = !['0', 'auto'].includes(String(parsedUrl.port)) ? parsedUrl.port : undefined;
      }
      if (parsedUrl.protocol != null) {
        protocol = parsedUrl.protocol !== 'auto' ? parsedUrl.protocol.replace(':', '') : 'ws';
      }
    }

    if (host) resourceQuery.sockHost = host;
    if (path) resourceQuery.sockPath = path;
    if (port) resourceQuery.sockPort = port;
    resourceQuery.sockProtocol = protocol;
  }

  if (options.overlay) {
    const { sockHost, sockPath, sockPort, sockProtocol } = options.overlay;
    if (sockHost) resourceQuery.sockHost = sockHost;
    if (sockPath) resourceQuery.sockPath = sockPath;
    if (sockPort) resourceQuery.sockPort = sockPort;
    if (sockProtocol) resourceQuery.sockProtocol = sockProtocol;
  }

  // We don't need to URI encode the resourceQuery as it will be parsed by Webpack
  const queryString = querystring.stringify(resourceQuery, undefined, undefined, {
    /**
     * @param {string} string
     * @returns {string}
     */
    encodeURIComponent(string) {
      return string;
    },
  });

  const prependEntries = [
    // React-refresh runtime
    require.resolve('../../client/ReactRefreshEntry'),
  ];

  const overlayEntries = [
    // Error overlay runtime
    options.overlay &&
      options.overlay.entry &&
      `${require.resolve(options.overlay.entry)}${queryString ? `?${queryString}` : ''}`,
  ].filter(Boolean);

  return { prependEntries, overlayEntries };
}

module.exports = getAdditionalEntries;
