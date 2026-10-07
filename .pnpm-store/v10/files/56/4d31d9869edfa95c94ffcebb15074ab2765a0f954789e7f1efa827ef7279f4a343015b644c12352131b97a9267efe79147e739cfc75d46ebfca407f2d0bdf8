/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */
import { config } from './config';
import { hostReportError } from './util/hostReportError';
export var empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map
