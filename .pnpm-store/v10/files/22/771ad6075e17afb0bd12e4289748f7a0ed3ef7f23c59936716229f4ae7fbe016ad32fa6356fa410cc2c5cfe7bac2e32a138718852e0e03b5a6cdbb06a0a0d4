"use strict";

exports.__esModule = true;
exports.create = create;
exports.stop = stop;
var _jaegerClient = require("jaeger-client");
let tracer;
function create() {
  // See schema
  // https://github.com/jaegertracing/jaeger-client-node/blob/master/src/configuration.js#L37
  const config = {
    serviceName: `gatsby`,
    reporter: {
      // Provide the traces endpoint; this forces the client to
      // connect directly to the Collector and send spans over HTTP
      collectorEndpoint: `http://localhost:14268/api/traces`
    },
    sampler: {
      type: `const`,
      param: 1
    }
  };
  const options = {};
  tracer = (0, _jaegerClient.initTracer)(config, options);
  return tracer;
}
function stop() {
  return new Promise(resolve => {
    tracer.close(resolve);
  });
}
//# sourceMappingURL=jaeger-local.js.map