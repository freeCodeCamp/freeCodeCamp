import { defineIntegration, spanToJSON, SEMANTIC_ATTRIBUTE_CACHE_ITEM_SIZE, SEMANTIC_ATTRIBUTE_CACHE_HIT, SEMANTIC_ATTRIBUTE_CACHE_KEY, SEMANTIC_ATTRIBUTE_SENTRY_OP, truncate } from '@sentry/core';
import { generateInstrumentOnce } from '@sentry/node-core';
import { getCacheKeySafely, getCacheOperation, shouldConsiderForCache, calculateCacheItemSize, isInCommands, GET_COMMANDS } from '../../../utils/redisCache.js';
import { IORedisInstrumentation } from './vendored/ioredis-instrumentation.js';
import { RedisInstrumentation } from './vendored/redis-instrumentation.js';
import { subscribeRedisDiagnosticChannels } from './redis-dc-subscriber.js';

const INTEGRATION_NAME = "Redis";
let _redisOptions = {};
const cacheResponseHook = (span, redisCommand, cmdArgs, response) => {
  const safeKey = getCacheKeySafely(redisCommand, cmdArgs);
  const cacheOperation = getCacheOperation(redisCommand);
  if (!safeKey || !cacheOperation || !_redisOptions.cachePrefixes || !shouldConsiderForCache(redisCommand, safeKey, _redisOptions.cachePrefixes)) {
    return;
  }
  const spanData = spanToJSON(span).data;
  const networkPeerAddress = spanData["net.peer.name"] ?? spanData["server.address"];
  const networkPeerPort = spanData["net.peer.port"] ?? spanData["server.port"];
  if (networkPeerPort && networkPeerAddress) {
    span.setAttributes({ "network.peer.address": networkPeerAddress, "network.peer.port": networkPeerPort });
  }
  const cacheItemSize = calculateCacheItemSize(response);
  if (cacheItemSize) {
    span.setAttribute(SEMANTIC_ATTRIBUTE_CACHE_ITEM_SIZE, cacheItemSize);
  }
  if (isInCommands(GET_COMMANDS, redisCommand) && cacheItemSize !== void 0) {
    span.setAttribute(SEMANTIC_ATTRIBUTE_CACHE_HIT, cacheItemSize > 0);
  }
  span.setAttributes({
    [SEMANTIC_ATTRIBUTE_SENTRY_OP]: cacheOperation,
    [SEMANTIC_ATTRIBUTE_CACHE_KEY]: safeKey
  });
  const spanDescription = safeKey.join(", ");
  span.updateName(
    _redisOptions.maxCacheKeyLength ? truncate(spanDescription, _redisOptions.maxCacheKeyLength) : spanDescription
  );
};
const instrumentIORedis = generateInstrumentOnce(`${INTEGRATION_NAME}.IORedis`, () => {
  return new IORedisInstrumentation({
    responseHook: cacheResponseHook
  });
});
const instrumentRedisModule = generateInstrumentOnce(`${INTEGRATION_NAME}.Redis`, () => {
  return new RedisInstrumentation({
    responseHook: cacheResponseHook
  });
});
const instrumentRedis = Object.assign(
  () => {
    instrumentIORedis();
    instrumentRedisModule();
    void Promise.resolve().then(() => subscribeRedisDiagnosticChannels(cacheResponseHook));
  },
  { id: INTEGRATION_NAME }
);
const _redisIntegration = ((options = {}) => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      _redisOptions = options;
      instrumentRedis();
    }
  };
});
const redisIntegration = defineIntegration(_redisIntegration);

export { _redisOptions, cacheResponseHook, instrumentRedis, redisIntegration };
//# sourceMappingURL=index.js.map
