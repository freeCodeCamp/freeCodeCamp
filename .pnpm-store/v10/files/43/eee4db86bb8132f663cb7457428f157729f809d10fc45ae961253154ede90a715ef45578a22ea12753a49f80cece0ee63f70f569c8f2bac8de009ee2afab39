/* global ʎɐɹɔosǝʌɹǝs */
const { ClientSocket } = require('webpack-plugin-serve/lib/client/ClientSocket');

/**
 * Initializes a socket server for HMR for webpack-plugin-serve.
 * @param {function(*): void} messageHandler A handler to consume Webpack compilation messages.
 * @returns {void}
 */
function initWPSSocket(messageHandler) {
  /**
   * The hard-coded options injection key from webpack-plugin-serve.
   *
   * [Ref](https://github.com/shellscape/webpack-plugin-serve/blob/aeb49f14e900802c98df4a4607a76bc67b1cffdf/lib/index.js#L258)
   * @type {Object | undefined}
   */
  let options;
  try {
    options = ʎɐɹɔosǝʌɹǝs;
  } catch (e) {
    // Bail out because this indicates the plugin is not included
    return;
  }

  const { address, client = {}, secure } = options;
  const protocol = secure ? 'wss' : 'ws';
  const socket = new ClientSocket(client, protocol + '://' + (client.address || address) + '/wps');

  socket.addEventListener('message', function listener(message) {
    const { action, data } = JSON.parse(message.data);

    switch (action) {
      case 'done': {
        messageHandler({ type: 'ok' });
        break;
      }
      case 'problems': {
        if (data.errors.length) {
          messageHandler({ type: 'errors', data: data.errors });
        } else if (data.warnings.length) {
          messageHandler({ type: 'warnings', data: data.warnings });
        }
        break;
      }
      default: {
        // Do nothing
      }
    }
  });
}

module.exports = { init: initWPSSocket };
