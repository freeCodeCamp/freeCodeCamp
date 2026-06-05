import * as Sentry from '@sentry/node';
import { nodeProfilingIntegration } from '@sentry/profiling-node';

import {
  DEPLOYMENT_VERSION,
  SENTRY_DSN,
  SENTRY_ENVIRONMENT,
  SENTRY_LOGS_INFO_SAMPLE_RATE,
  SENTRY_PROFILE_SESSION_SAMPLE_RATE,
  SENTRY_TRACES_SAMPLE_RATE
} from './utils/env.js';
import { makeTracesSampler, shouldSendLog } from './utils/sentry.js';

const hasClientErrorStatus = (error: unknown): boolean =>
  typeof error === 'object' &&
  error !== null &&
  'statusCode' in error &&
  typeof error.statusCode === 'number' &&
  error.statusCode < 500;

Sentry.init({
  dsn: SENTRY_DSN,
  environment: SENTRY_ENVIRONMENT,
  maxValueLength: 8192, // the default is 250, which is too small.
  release: DEPLOYMENT_VERSION,
  tracesSampler: makeTracesSampler(SENTRY_TRACES_SAMPLE_RATE),
  profileSessionSampleRate: SENTRY_PROFILE_SESSION_SAMPLE_RATE,
  profileLifecycle: 'trace',
  enableLogs: true,
  integrations: [
    nodeProfilingIntegration(),
    Sentry.pinoIntegration({
      log: { levels: ['info', 'warn', 'error', 'fatal'] }
    })
  ],
  beforeSend: (event, hint) =>
    hasClientErrorStatus(hint.originalException) ? null : event,
  beforeSendLog: log =>
    shouldSendLog(log, SENTRY_LOGS_INFO_SAMPLE_RATE, Math.random) ? log : null
});
