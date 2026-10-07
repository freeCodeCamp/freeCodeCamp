import * as os from 'node:os';
import { ServerRuntimeClient, applySdkMetadata, debug, _INTERNAL_flushLogsBuffer } from '@sentry/core';
import { threadId, isMainThread } from 'worker_threads';
import { DEBUG_BUILD } from '../debug-build.js';

const DEFAULT_CLIENT_REPORT_FLUSH_INTERVAL_MS = 6e4;
class LightNodeClient extends ServerRuntimeClient {
  constructor(options) {
    const serverName = options.includeServerName === false ? void 0 : options.serverName || global.process.env.SENTRY_NAME || os.hostname();
    const clientOptions = {
      ...options,
      platform: "node",
      runtime: { name: "node", version: global.process.version },
      serverName
    };
    applySdkMetadata(clientOptions, "node-light", ["node-core"]);
    debug.log(`Initializing Sentry: process: ${process.pid}, thread: ${isMainThread ? "main" : `worker-${threadId}`}.`);
    super(clientOptions);
    if (this.getOptions().enableLogs) {
      this._logOnExitFlushListener = () => {
        _INTERNAL_flushLogsBuffer(this);
      };
      if (serverName) {
        this.on("beforeCaptureLog", (log) => {
          log.attributes = {
            ...log.attributes,
            "server.address": serverName
          };
        });
      }
      process.on("beforeExit", this._logOnExitFlushListener);
    }
  }
  /** @inheritDoc */
  // @ts-expect-error - PromiseLike is a subset of Promise
  async flush(timeout) {
    if (this.getOptions().sendClientReports) {
      this._flushOutcomes();
    }
    return super.flush(timeout);
  }
  /** @inheritDoc */
  // @ts-expect-error - PromiseLike is a subset of Promise
  async close(timeout) {
    if (this._clientReportInterval) {
      clearInterval(this._clientReportInterval);
    }
    if (this._clientReportOnExitFlushListener) {
      process.off("beforeExit", this._clientReportOnExitFlushListener);
    }
    if (this._logOnExitFlushListener) {
      process.off("beforeExit", this._logOnExitFlushListener);
    }
    return super.close(timeout);
  }
  /**
   * Will start tracking client reports for this client.
   *
   * NOTICE: This method will create an interval that is periodically called and attach a `process.on('beforeExit')`
   * hook. To clean up these resources, call `.close()` when you no longer intend to use the client. Not doing so will
   * result in a memory leak.
   */
  // The reason client reports need to be manually activated with this method instead of just enabling them in a
  // constructor, is that if users periodically and unboundedly create new clients, we will create more and more
  // intervals and beforeExit listeners, thus leaking memory. In these situations, users are required to call
  // `client.close()` in order to dispose of the acquired resources.
  // We assume that calling this method in Sentry.init() is a sensible default, because calling Sentry.init() over and
  // over again would also result in memory leaks.
  // Note: We have experimented with using `FinalizationRegisty` to clear the interval when the client is garbage
  // collected, but it did not work, because the cleanup function never got called.
  startClientReportTracking() {
    const clientOptions = this.getOptions();
    if (clientOptions.sendClientReports) {
      this._clientReportOnExitFlushListener = () => {
        this._flushOutcomes();
      };
      this._clientReportInterval = setInterval(() => {
        DEBUG_BUILD && debug.log("Flushing client reports based on interval.");
        this._flushOutcomes();
      }, clientOptions.clientReportFlushInterval ?? DEFAULT_CLIENT_REPORT_FLUSH_INTERVAL_MS).unref();
      process.on("beforeExit", this._clientReportOnExitFlushListener);
    }
  }
}

export { LightNodeClient };
//# sourceMappingURL=client.js.map
