module.exports = function mountLoopBackExplorer(app) {
  if (process.env.NODE_ENV === 'production') {
    return;
  }
  var explorer;
  try {
    explorer = require('loopback-explorer');
  } catch (err) {
    // Print the message only when the app was started via `app.listen()`.
    // Do not print any message when the project is used as a component.
    app.once('started', function() {
      console.log(
        'Run `npm install loopback-explorer` to enable the LoopBack explorer'
      );
    });
    return;
  }

  var restApiRoot = app.get('restApiRoot');

  var explorerApp = explorer(app, { basePath: restApiRoot });
  app.use('/explorer', explorerApp);
  app.once('started', function() {
    var baseUrl = app.get('url').replace(/\/$/, '');
    // express 4.x (loopback 2.x) uses `mountpath`
    // express 3.x (loopback 1.x) uses `route`
    var explorerPath = explorerApp.mountpath || explorerApp.route;
    console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
  });
};
