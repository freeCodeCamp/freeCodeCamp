module.exports = function mountRestApi(server) {
  var restApiRoot = server.get('restApiRoot');
  server.use(restApiRoot, server.loopback.rest());
};
