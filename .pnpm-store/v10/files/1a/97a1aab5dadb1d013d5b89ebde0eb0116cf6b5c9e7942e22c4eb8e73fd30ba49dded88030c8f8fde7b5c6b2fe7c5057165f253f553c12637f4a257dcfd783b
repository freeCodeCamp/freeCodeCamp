"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExplainableCursor = void 0;
const abstract_cursor_1 = require("./abstract_cursor");
/**
 * @public
 *
 * A base class for any cursors that have `explain()` methods.
 */
class ExplainableCursor extends abstract_cursor_1.AbstractCursor {
    resolveExplainTimeoutOptions(verbosity, options) {
        let explain;
        let timeout;
        if (verbosity == null && options == null) {
            explain = undefined;
            timeout = undefined;
        }
        else if (verbosity != null && options == null) {
            explain =
                typeof verbosity !== 'object'
                    ? verbosity
                    : 'verbosity' in verbosity
                        ? verbosity
                        : undefined;
            timeout = typeof verbosity === 'object' && 'timeoutMS' in verbosity ? verbosity : undefined;
        }
        else {
            // @ts-expect-error TS isn't smart enough to determine that if both options are provided, the first is explain options
            explain = verbosity;
            timeout = options;
        }
        return { timeout, explain };
    }
}
exports.ExplainableCursor = ExplainableCursor;
//# sourceMappingURL=explainable_cursor.js.map