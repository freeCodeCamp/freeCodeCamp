"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.stop = exports.create = void 0;
var _zipkin = _interopRequireDefault(require("zipkin"));
var _zipkinTransportHttp = require("zipkin-transport-http");
var _zipkinJavascriptOpentracing = _interopRequireDefault(require("zipkin-javascript-opentracing"));
var _nodeFetch = _interopRequireDefault(require("node-fetch"));
let logger;
let recorder;

/**
 * Create and return an open-tracing compatible tracer. See
 * https://github.com/opentracing/opentracing-javascript/blob/master/src/tracer.ts
 */
const create = () => {
  logger = new _zipkinTransportHttp.HttpLogger({
    // endpoint of local docker zipkin instance
    endpoint: `http://localhost:9411/api/v1/spans`
  });
  recorder = new _zipkin.default.BatchRecorder({
    logger,
    // timeout = 60 hours, must be longer than site's build time
    timeout: 60 * 60 * 60 * 1000000
  });
  const tracer = new _zipkinJavascriptOpentracing.default({
    localServiceName: `gatsby`,
    serviceName: `gatsby`,
    // Sample 1 out of 1 spans (100%). When tracing production
    // services, it is normal to sample 1 out of 10 requests so that
    // tracing information doesn't impact site performance. But Gatsby
    // is a build tool and only has "1" request (the
    // build). Therefore, we must set this to 100% so that spans
    // aren't missing
    sampler: new _zipkin.default.sampler.CountingSampler(1),
    traceId128Bit: true,
    recorder,
    kind: `client`
  });
  return tracer;
};

// Workaround for issue in Zipkin HTTP Logger where Spans are not
// cleared off their processing queue before the node.js process
// exits. Code is mostly the same as the zipkin processQueue
// implementation.
exports.create = create;
const _processQueue = async () => {
  if (logger.queue.length > 0) {
    const postBody = `[${logger.queue.join(`,`)}]`;
    try {
      const response = await (0, _nodeFetch.default)(logger.endpoint, {
        method: `POST`,
        body: postBody,
        headers: logger.headers,
        timeout: logger.timeout
      });
      if (response.status !== 202) {
        const err = `Unexpected response while sending Zipkin data, status:` + `${response.status}, body: ${postBody}`;
        if (logger.errorListenerSet) logger.emit(`error`, new Error(err));else console.error(err);
      }
    } catch (error) {
      const err = `Error sending Zipkin data ${error}`;
      if (logger.errorListenerSet) logger.emit(`error`, new Error(err));else console.error(err);
    }
  }
};

/**
 * Run any tracer cleanup required before the node.js process
 * exits. For Zipkin HTTP, we must manually process any spans still on
 * the queue
 */
const stop = async () => {
  // First, write all partial spans to the http logger
  recorder.partialSpans.forEach((span, id) => {
    if (recorder._timedOut(span)) {
      recorder._writeSpan(id);
    }
  });

  // Then tell http logger to process all spans in its queue
  await _processQueue();
};
exports.stop = stop;
//# sourceMappingURL=zipkin-local.js.map