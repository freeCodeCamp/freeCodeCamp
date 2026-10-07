Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');
const redisCache = require('../../../utils/redisCache.js');
const ioredisInstrumentation = require('./vendored/ioredis-instrumentation.js');
const redisInstrumentation = require('./vendored/redis-instrumentation.js');
const redisDcSubscriber = require('./redis-dc-subscriber.js');

const INTEGRATION_NAME = "Redis";
exports._redisOptions = {};
const cacheResponseHook = (span, redisCommand, cmdArgs, response) => {
  const safeKey = redisCache.getCacheKeySafely(redisCommand, cmdArgs);
  const cacheOperation = redisCache.getCacheOperation(redisCommand);
  if (!safeKey || !cacheOperation || !exports._redisOptions.cachePrefixes || !redisCache.shouldConsiderForCache(redisCommand, safeKey, exports._redisOptions.cachePrefixes)) {
    return;
  }
  const spanData = core.spanToJSON(span).data;
  const networkPeerAddress = spanData["net.peer.name"] ?? spanData["server.address"];
  const networkPeerPort = spanData["net.peer.port"] ?? spanData["server.port"];
  if (networkPeerPort && networkPeerAddress) {
    span.setAttributes({ "network.peer.address": networkPeerAddress, "network.peer.port": networkPeerPort });
  }
  const cacheItemSize = redisCache.calculateCacheItemSize(response);
  if (cacheItemSize) {
    span.setAttribute(core.SEMANTIC_ATTRIBUTE_CACHE_ITEM_SIZE, cacheItemSize);
  }
  if (redisCache.isInCommands(redisCache.GET_COMMANDS, redisCommand) && cacheItemSize !== void 0) {
    span.setAttribute(core.SEMANTIC_ATTRIBUTE_CACHE_HIT, cacheItemSize > 0);
  }
  span.setAttributes({
    [core.SEMANTIC_ATTRIBUTE_SENTRY_OP]: cacheOperation,
    [core.SEMANTIC_ATTRIBUTE_CACHE_KEY]: safeKey
  });
  const spanDescription = safeKey.join(", ");
  span.updateName(
    exports._redisOptions.maxCacheKeyLength ? core.truncate(spanDescription, exports._redisOptions.maxCacheKeyLength) : spanDescription
  );
};
const instrumentIORedis = nodeCore.generateInstrumentOnce(`${INTEGRATION_NAME}.IORedis`, () => {
  return new ioredisInstrumentation.IORedisInstrumentation({
    responseHook: cacheResponseHook
  });
});
const instrumentRedisModule = nodeCore.generateInstrumentOnce(`${INTEGRATION_NAME}.Redis`, () => {
  return new redisInstrumentation.RedisInstrumentation({
    responseHook: cacheResponseHook
  });
});
const instrumentRedis = Object.assign(
  () => {
    instrumentIORedis();
    instrumentRedisModule();
    void Promise.resolve().then(() => redisDcSubscriber.subscribeRedisDiagnosticChannels(cacheResponseHook));
  },
  { id: INTEGRATION_NAME }
);
const _redisIntegration = ((options = {}) => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      exports._redisOptions = options;
      instrumentRedis();
    }
  };
});
const redisIntegration = core.defineIntegration(_redisIntegration);

exports.cacheResponseHook = cacheResponseHook;
exports.instrumentRedis = instrumentRedis;
exports.redisIntegration = redisIntegration;
//# sourceMappingURL=index.js.map
