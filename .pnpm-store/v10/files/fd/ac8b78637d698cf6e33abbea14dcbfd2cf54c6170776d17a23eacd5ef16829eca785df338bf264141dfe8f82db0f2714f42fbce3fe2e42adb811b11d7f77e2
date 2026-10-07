import { monitorEventLoopDelay, performance } from 'perf_hooks';
import { defineIntegration, _INTERNAL_safeDateNow, _INTERNAL_safeUnref, metrics } from '@sentry/core';

const INTEGRATION_NAME = "NodeRuntimeMetrics";
const DEFAULT_INTERVAL_MS = 3e4;
const MIN_COLLECTION_INTERVAL_MS = 1e3;
const EVENT_LOOP_DELAY_RESOLUTION_MS = 10;
function _INTERNAL_normalizeCollectionInterval(rawInterval, integrationName, defaultInterval) {
  if (!Number.isFinite(rawInterval)) {
    console.warn(
      `[Sentry] ${integrationName}: collectionIntervalMs (${rawInterval}) is invalid. Using default of ${defaultInterval}ms.`
    );
    return defaultInterval;
  }
  if (rawInterval < MIN_COLLECTION_INTERVAL_MS) {
    console.warn(
      `[Sentry] ${integrationName}: collectionIntervalMs (${rawInterval}) is below the minimum of ${MIN_COLLECTION_INTERVAL_MS}ms. Using minimum of ${MIN_COLLECTION_INTERVAL_MS}ms.`
    );
    return MIN_COLLECTION_INTERVAL_MS;
  }
  return rawInterval;
}
const nodeRuntimeMetricsIntegration = defineIntegration((options = {}) => {
  const collectionIntervalMs = _INTERNAL_normalizeCollectionInterval(
    options.collectionIntervalMs ?? DEFAULT_INTERVAL_MS,
    INTEGRATION_NAME,
    DEFAULT_INTERVAL_MS
  );
  const collect = {
    // Default on
    cpuUtilization: true,
    memHeapUsed: true,
    memHeapTotal: true,
    memRss: true,
    eventLoopDelayP50: true,
    eventLoopDelayP99: true,
    eventLoopUtilization: true,
    uptime: true,
    // Default off
    cpuTime: false,
    memExternal: false,
    eventLoopDelayMin: false,
    eventLoopDelayMax: false,
    eventLoopDelayMean: false,
    eventLoopDelayP90: false,
    ...options.collect
  };
  const needsEventLoopDelay = collect.eventLoopDelayP99 || collect.eventLoopDelayMin || collect.eventLoopDelayMax || collect.eventLoopDelayMean || collect.eventLoopDelayP50 || collect.eventLoopDelayP90;
  const needsCpu = collect.cpuUtilization || collect.cpuTime;
  let intervalId;
  let prevCpuUsage;
  let prevElu;
  let prevFlushTime = 0;
  let eventLoopDelayHistogram;
  const resolutionNs = EVENT_LOOP_DELAY_RESOLUTION_MS * 1e6;
  const nsToS = (ns) => Math.max(0, (ns - resolutionNs) / 1e9);
  const METRIC_ATTRIBUTES = { attributes: { "sentry.origin": "auto.node.runtime_metrics" } };
  const METRIC_ATTRIBUTES_BYTE = { unit: "byte", attributes: { "sentry.origin": "auto.node.runtime_metrics" } };
  const METRIC_ATTRIBUTES_SECOND = { unit: "second", attributes: { "sentry.origin": "auto.node.runtime_metrics" } };
  function collectMetrics() {
    const now = _INTERNAL_safeDateNow();
    const elapsed = now - prevFlushTime;
    if (needsCpu && prevCpuUsage !== void 0) {
      const delta = process.cpuUsage(prevCpuUsage);
      if (collect.cpuTime) {
        metrics.gauge("node.runtime.cpu.user", delta.user / 1e6, METRIC_ATTRIBUTES_SECOND);
        metrics.gauge("node.runtime.cpu.system", delta.system / 1e6, METRIC_ATTRIBUTES_SECOND);
      }
      if (collect.cpuUtilization && elapsed > 0) {
        metrics.gauge(
          "node.runtime.cpu.utilization",
          (delta.user + delta.system) / (elapsed * 1e3),
          METRIC_ATTRIBUTES
        );
      }
      prevCpuUsage = process.cpuUsage();
    }
    if (collect.memRss || collect.memHeapUsed || collect.memHeapTotal || collect.memExternal) {
      const mem = process.memoryUsage();
      if (collect.memRss) {
        metrics.gauge("node.runtime.mem.rss", mem.rss, METRIC_ATTRIBUTES_BYTE);
      }
      if (collect.memHeapUsed) {
        metrics.gauge("node.runtime.mem.heap_used", mem.heapUsed, METRIC_ATTRIBUTES_BYTE);
      }
      if (collect.memHeapTotal) {
        metrics.gauge("node.runtime.mem.heap_total", mem.heapTotal, METRIC_ATTRIBUTES_BYTE);
      }
      if (collect.memExternal) {
        metrics.gauge("node.runtime.mem.external", mem.external, METRIC_ATTRIBUTES_BYTE);
        metrics.gauge("node.runtime.mem.array_buffers", mem.arrayBuffers, METRIC_ATTRIBUTES_BYTE);
      }
    }
    if (needsEventLoopDelay && eventLoopDelayHistogram) {
      if (collect.eventLoopDelayMin) {
        metrics.gauge(
          "node.runtime.event_loop.delay.min",
          nsToS(eventLoopDelayHistogram.min),
          METRIC_ATTRIBUTES_SECOND
        );
      }
      if (collect.eventLoopDelayMax) {
        metrics.gauge(
          "node.runtime.event_loop.delay.max",
          nsToS(eventLoopDelayHistogram.max),
          METRIC_ATTRIBUTES_SECOND
        );
      }
      if (collect.eventLoopDelayMean) {
        metrics.gauge(
          "node.runtime.event_loop.delay.mean",
          nsToS(eventLoopDelayHistogram.mean),
          METRIC_ATTRIBUTES_SECOND
        );
      }
      if (collect.eventLoopDelayP50) {
        metrics.gauge(
          "node.runtime.event_loop.delay.p50",
          nsToS(eventLoopDelayHistogram.percentile(50)),
          METRIC_ATTRIBUTES_SECOND
        );
      }
      if (collect.eventLoopDelayP90) {
        metrics.gauge(
          "node.runtime.event_loop.delay.p90",
          nsToS(eventLoopDelayHistogram.percentile(90)),
          METRIC_ATTRIBUTES_SECOND
        );
      }
      if (collect.eventLoopDelayP99) {
        metrics.gauge(
          "node.runtime.event_loop.delay.p99",
          nsToS(eventLoopDelayHistogram.percentile(99)),
          METRIC_ATTRIBUTES_SECOND
        );
      }
      eventLoopDelayHistogram.reset();
    }
    if (collect.eventLoopUtilization && prevElu !== void 0) {
      const currentElu = performance.eventLoopUtilization();
      const delta = performance.eventLoopUtilization(currentElu, prevElu);
      metrics.gauge("node.runtime.event_loop.utilization", delta.utilization, METRIC_ATTRIBUTES);
      prevElu = currentElu;
    }
    if (collect.uptime && elapsed > 0) {
      metrics.count("node.runtime.process.uptime", elapsed / 1e3, METRIC_ATTRIBUTES_SECOND);
    }
    prevFlushTime = now;
  }
  return {
    name: INTEGRATION_NAME,
    setup() {
      if (needsEventLoopDelay) {
        eventLoopDelayHistogram?.disable();
        try {
          eventLoopDelayHistogram = monitorEventLoopDelay({ resolution: EVENT_LOOP_DELAY_RESOLUTION_MS });
          eventLoopDelayHistogram.enable();
        } catch {
          eventLoopDelayHistogram = void 0;
        }
      }
      if (needsCpu) {
        prevCpuUsage = process.cpuUsage();
      }
      if (collect.eventLoopUtilization) {
        prevElu = performance.eventLoopUtilization();
      }
      prevFlushTime = _INTERNAL_safeDateNow();
      if (intervalId) {
        clearInterval(intervalId);
      }
      intervalId = _INTERNAL_safeUnref(setInterval(collectMetrics, collectionIntervalMs));
    }
  };
});

export { _INTERNAL_normalizeCollectionInterval, nodeRuntimeMetricsIntegration };
//# sourceMappingURL=nodeRuntimeMetrics.js.map
