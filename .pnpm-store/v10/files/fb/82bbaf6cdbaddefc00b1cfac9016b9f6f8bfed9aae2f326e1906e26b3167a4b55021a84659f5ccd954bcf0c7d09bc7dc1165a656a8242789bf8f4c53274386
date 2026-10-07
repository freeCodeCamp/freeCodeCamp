import { getClient } from '../../currentScopes.js';
import { captureException } from '../../exports.js';
import { getActiveSpan } from '../../utils/spanUtils.js';
import { SPAN_STATUS_ERROR } from '../../tracing/spanstatus.js';

function captureError(error, errorType, extraData) {
  try {
    const client = getClient();
    if (!client) {
      return;
    }
    const activeSpan = getActiveSpan();
    if (activeSpan?.isRecording()) {
      activeSpan.setStatus({
        code: SPAN_STATUS_ERROR,
        message: "internal_error"
      });
    }
    captureException(error, {
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

export { captureError };
//# sourceMappingURL=errorCapture.js.map
