module.exports = function mountLoopBackExplorer(app) {
  if (process.env.NODE_ENV === 'production') {
    return;
  }
  var explorer;
  try {
    explorer = require('loopback-component-explorer');
  } catch (err) {
    // Print the message only when the app was started via `app.listen()`.
    // Do not print any message when the project is used as a component.
    app.once('started', function() {
      console.log(
        'Run `npm install loopback-component-explorer` to enable ' +
        'the LoopBack explorer'
      );
    });
    return;
  }

  var restApiRoot = app.get('restApiRoot');
  var mountPath = '/explorer';

  explorer(app, { basePath: restApiRoot, mountPath });
  app.once('started', function() {
    var baseUrl = app.get('url').replace(/\/$/, '');

    console.log('Browse your REST API at %s%s', baseUrl, mountPath);
  });
};
