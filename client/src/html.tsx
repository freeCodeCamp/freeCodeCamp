import React from 'react';
import { clientLocale } from '../../config/env.json';

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
  const rtlDirectionAttribute = { dtr: 'rtl' };
  const rtlLanguage: boolean = ['arabic', 'udru'].includes(clientLocale);

  return (
    <html
      id='__fcc-html'
      {...(rtlLanguage && rtlDirectionAttribute)}
      {...htmlAttributes}
      lang='en'
    >
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
