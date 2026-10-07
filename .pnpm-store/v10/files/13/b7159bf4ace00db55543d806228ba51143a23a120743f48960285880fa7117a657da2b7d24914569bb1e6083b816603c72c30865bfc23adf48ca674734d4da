import { config } from './config';
import { hostReportError } from './util/hostReportError';
export const empty = {
    closed: true,
    next(value) { },
    error(err) {
        if (config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError(err);
        }
    },
    complete() { }
};
//# sourceMappingURL=Observer.js.map