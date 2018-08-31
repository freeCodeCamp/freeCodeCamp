module.exports = function mountRestApi(app) {
  var restApiRoot = app.get('restApiRoot');
  app.use(restApiRoot, app.loopback.rest());
};
