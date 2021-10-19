import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import React from 'react';
import { sentry } from '../../config/secrets';

if (sentry.dns === 'dsn_from_sentry_dashboard') {
  console.log('Sentry reporting disabled unless DSN is provided!');
} else {
  Sentry.init({
    dsn: sentry.dns,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0
  });
  console.log('Sentry initialized');
}

interface HTMLProps {
  body: string;
  bodyAttributes?: Record<string, unknown>;
  headComponents?: React.ReactNode[];
  htmlAttributes?: Record<string, unknown>;
  postBodyComponents?: React.ReactNode[];
  preBodyComponents?: React.ReactNode[];
}

export default function HTML({
  body,
  bodyAttributes,
  headComponents,
  htmlAttributes,
  postBodyComponents,
  preBodyComponents
}: HTMLProps): JSX.Element {
  return (
    <html id='__fcc-html' {...htmlAttributes} lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta content='ie=edge' httpEquiv='x-ua-compatible' />
        <meta
          content='width=device-width, initial-scale=1.0, shrink-to-fit=no'
          name='viewport'
        />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div
          className='tex2jax_ignore'
          dangerouslySetInnerHTML={{ __html: body }}
          id='___gatsby'
          key={'body'}
        />
        {postBodyComponents}
      </body>
    </html>
  );
}
