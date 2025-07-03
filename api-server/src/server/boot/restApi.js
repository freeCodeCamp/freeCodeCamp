module.exports = function mountRestApi(app) {
  const restApi = app.loopback.rest();
  const restApiRoot = app.get('restApiRoot');
  app.use(restApiRoot, restApi);
};
