const createDebugger = require('debug');

const log = createDebugger('fcc:boot:explorer');

module.exports = function mountLoopBackExplorer(app) {
  if (process.env.FREECODECAMP_NODE_ENV === 'production') {
    return;
  }
  let explorer;
  try {
    explorer = require('loopback-component-explorer');
  } catch (err) {
    // Print the message only when the app was started via `app.listen()`.
    // Do not print any message when the project is used as a component.
    app.once('started', function() {
      log(
        'Run `npm install loopback-component-explorer` to enable ' +
          'the LoopBack explorer'
      );
    });
    return;
  }

  const restApiRoot = app.get('restApiRoot');
  const mountPath = '/explorer';

  explorer(app, { basePath: restApiRoot, mountPath });
  app.once('started', function() {
    const baseUrl = app.get('url').replace(/\/$/, '');

    log('Browse your REST API at %s%s', baseUrl, mountPath);
  });
};
