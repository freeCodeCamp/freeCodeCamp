import * as Sentry from '@sentry/node';
import { nodeProfilingIntegration } from '@sentry/profiling-node';

import {
  DEPLOYMENT_VERSION,
  SENTRY_DSN,
  SENTRY_ENVIRONMENT,
  SENTRY_SERVER_NAME,
  SENTRY_LOGS_DEBUG_SAMPLE_RATE,
  SENTRY_LOGS_INFO_SAMPLE_RATE,
  SENTRY_PROFILE_SESSION_SAMPLE_RATE,
  SENTRY_TRACES_SAMPLE_RATE
} from './utils/env.js';
import {
  makeShouldSendLog,
  makeTracesSampler,
  scrubRedundantLogAttributes,
  scrubRequestPii,
  scrubSpanDescriptions
} from './utils/sentry.js';

const shouldSendLog = makeShouldSendLog(
  SENTRY_LOGS_DEBUG_SAMPLE_RATE,
  SENTRY_LOGS_INFO_SAMPLE_RATE
);

Sentry.init({
  dsn: SENTRY_DSN,
  environment: SENTRY_ENVIRONMENT,
  serverName: SENTRY_SERVER_NAME,
  maxValueLength: 8192, // the default is 250, which is too small.
  release: DEPLOYMENT_VERSION,
  tracesSampler: makeTracesSampler(SENTRY_TRACES_SAMPLE_RATE),
  profileSessionSampleRate: SENTRY_PROFILE_SESSION_SAMPLE_RATE,
  profileLifecycle: 'trace',
  enableLogs: true,
  integrations: [
    nodeProfilingIntegration(),
    Sentry.pinoIntegration({
      log: { levels: ['info', 'warn', 'error', 'fatal', 'debug'] }
    }),
    Sentry.requestDataIntegration({ include: { cookies: false } })
  ],
  beforeSend: event => scrubRequestPii(event),
  beforeSendTransaction: event => scrubSpanDescriptions(event),
  beforeSendLog: log =>
    shouldSendLog(log) ? scrubRedundantLogAttributes(log) : null
});
