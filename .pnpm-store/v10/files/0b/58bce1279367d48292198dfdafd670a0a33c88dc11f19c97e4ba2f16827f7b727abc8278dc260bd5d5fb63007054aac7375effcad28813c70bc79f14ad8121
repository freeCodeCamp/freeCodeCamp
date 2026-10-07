Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const currentScopes = require('../../currentScopes.js');
const exports$1 = require('../../exports.js');
const spanUtils = require('../../utils/spanUtils.js');
const spanstatus = require('../../tracing/spanstatus.js');

function captureError(error, errorType, extraData) {
  try {
    const client = currentScopes.getClient();
    if (!client) {
      return;
    }
    const activeSpan = spanUtils.getActiveSpan();
    if (activeSpan?.isRecording()) {
      activeSpan.setStatus({
        code: spanstatus.SPAN_STATUS_ERROR,
        message: "internal_error"
      });
    }
    exports$1.captureException(error, {
      mechanism: {
        type: "auto.ai.mcp_server",
        handled: false,
        data: {
          error_type: errorType || "handler_execution",
          ...extraData
        }
      }
    });
  } catch {
  }
}

exports.captureError = captureError;
//# sourceMappingURL=errorCapture.js.map
