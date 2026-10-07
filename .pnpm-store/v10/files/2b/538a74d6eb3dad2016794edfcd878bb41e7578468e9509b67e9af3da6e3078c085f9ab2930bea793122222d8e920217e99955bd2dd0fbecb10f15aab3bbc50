import * as diagnosticsChannel from 'node:diagnostics_channel';
import { defineIntegration, addBreadcrumb, captureException } from '@sentry/core';

const INTEGRATION_NAME = "ChildProcess";
const childProcessIntegration = defineIntegration((options = {}) => {
  return {
    name: INTEGRATION_NAME,
    setup() {
      diagnosticsChannel.channel("child_process").subscribe((event) => {
        if (event && typeof event === "object" && "process" in event) {
          captureChildProcessEvents(event.process, options);
        }
      });
      diagnosticsChannel.channel("worker_threads").subscribe((event) => {
        if (event && typeof event === "object" && "worker" in event) {
          captureWorkerThreadEvents(event.worker, options);
        }
      });
    }
  };
});
function captureChildProcessEvents(child, options) {
  let hasExited = false;
  let data;
  child.on("spawn", () => {
    if (child.spawnfile === "/usr/bin/sw_vers") {
      hasExited = true;
      return;
    }
    data = { spawnfile: child.spawnfile };
    if (options.includeChildProcessArgs) {
      data.spawnargs = child.spawnargs;
    }
  }).on("exit", (code) => {
    if (!hasExited) {
      hasExited = true;
      if (code !== null && code !== 0) {
        addBreadcrumb({
          category: "child_process",
          message: `Child process exited with code '${code}'`,
          level: code === 0 ? "info" : "warning",
          data
        });
      }
    }
  }).on("error", (error) => {
    if (!hasExited) {
      hasExited = true;
      addBreadcrumb({
        category: "child_process",
        message: `Child process errored with '${error.message}'`,
        level: "error",
        data
      });
    }
  });
}
function captureWorkerThreadEvents(worker, options) {
  let threadId;
  worker.on("online", () => {
    threadId = worker.threadId;
  }).on("error", (error) => {
    if (options.captureWorkerErrors !== false) {
      captureException(error, {
        mechanism: { type: "auto.child_process.worker_thread", handled: false, data: { threadId: String(threadId) } }
      });
    } else {
      addBreadcrumb({
        category: "worker_thread",
        message: `Worker thread errored with '${error.message}'`,
        level: "error",
        data: { threadId }
      });
    }
  });
}

export { childProcessIntegration };
//# sourceMappingURL=childProcess.js.map
