import { Observer } from './types';
import { config } from './config';
import { hostReportError } from './util/hostReportError';

export const empty: Observer<any> = {
  closed: true,
  next(value: any): void { /* noop */},
  error(err: any): void {
    if (config.useDeprecatedSynchronousErrorHandling) {
      throw err;
    } else {
      hostReportError(err);
    }
  },
  complete(): void { /*noop*/ }
};
