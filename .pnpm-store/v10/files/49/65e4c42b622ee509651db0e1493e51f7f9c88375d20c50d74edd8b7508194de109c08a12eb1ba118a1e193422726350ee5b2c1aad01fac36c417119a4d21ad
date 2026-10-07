/**
 * The hard-coded singleton key for webpack-hot-middleware's client instance.
 *
 * [Ref](https://github.com/webpack-contrib/webpack-hot-middleware/blob/cb29abb9dde435a1ac8e9b19f82d7d36b1093198/client.js#L152)
 */
const singletonKey = '__webpack_hot_middleware_reporter__';

/**
 * Initializes a socket server for HMR for webpack-hot-middleware.
 * @param {function(*): void} messageHandler A handler to consume Webpack compilation messages.
 * @returns {void}
 */
function initWHMEventSource(messageHandler) {
  const client = window[singletonKey];

  client.useCustomOverlay({
    showProblems: function showProblems(type, data) {
      const error = {
        data: data,
        type: type,
      };

      messageHandler(error);
    },
    clear: function clear() {
      messageHandler({ type: 'ok' });
    },
  });
}

module.exports = { init: initWHMEventSource };
