import React from 'react';
import { clientLocale } from '../../config/env.json';
import { rtlLangs } from '../../config/i18n';

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
  const rtlDirectionAttribute = { dir: 'rtl' };
  const isRtlLanguage: boolean = rtlLangs.includes(clientLocale);

  return (
    <html
      id='__fcc-html'
      {...(isRtlLanguage && rtlDirectionAttribute)}
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
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@freecodecamp' />
        <meta
          name='twitter:title'
          content='Learn to Code — For Free — Coding Courses for Busy People'
        />
        <meta
          name='twitter:description'
          content='Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including: google, apple, microsoft, spotify and amazon'
        />
        <meta
          name='twitter:image'
          content='https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png'
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
