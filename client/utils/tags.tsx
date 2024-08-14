import i18next from 'i18next';
import React from 'react';

import { isMathJaxAllowed, mathJaxSrc } from '../src/utils/math-jax';

export function getheadTagComponents(): JSX.Element[] {
  const socialImage =
    'https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png';

  const headTags = [
    <meta content='freeCodeCamp.org' key='og:title' name='og:title' />,
    <meta
      content={i18next.t('metaTags:social-description')}
      key='og:description'
      name='og:description'
    />,
    <meta content={socialImage} key='og:image' property='og:image' />,
    <meta
      content='summary_large_image'
      key='twitter:card'
      name='twitter:card'
    />,
    <meta
      content={socialImage}
      key='twitter:image:src'
      name='twitter:image:src'
    />,
    <meta
      content='freeCodeCamp.org'
      key='twitter:title'
      name='twitter:title'
    />,
    <meta
      content={i18next.t('metaTags:social-description')}
      key='twitter:description'
      name='twitter:description'
    />,
    <meta
      content='$ilp.uphold.com/LJmbPn7WD4JB'
      key='monetization'
      name='monetization'
    />
  ];
  return headTags;
}

export function getPostBodyComponents(pathname: string): JSX.Element[] {
  const scripts = [];
  const mathJaxScriptElement = (
    <script
      async={false}
      id='mathjax'
      key='mathjax'
      src={mathJaxSrc}
      type='text/javascript'
    />
  );

  if (isMathJaxAllowed(pathname)) {
    scripts.push(mathJaxScriptElement);
  }

  return scripts.filter(Boolean);
}
