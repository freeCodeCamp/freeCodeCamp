import i18next from 'i18next';
import React from 'react';

import { clientLocale } from '../config/env.json';
import latoBoldURL from '../static/fonts/lato/Lato-Bold.woff';
import latoLightURL from '../static/fonts/lato/Lato-Light.woff';
import latoRegularURL from '../static/fonts/lato/Lato-Regular.woff';
import jpSansBoldURL from '../static/fonts/noto-sans-japanese/NotoSansJP-Bold.woff';
import jpSansLightURL from '../static/fonts/noto-sans-japanese/NotoSansJP-Light.woff';
import jpSansRegularURL from '../static/fonts/noto-sans-japanese/NotoSansJP-Regular.woff';
import hackZeroSlashBoldURL from '../static/fonts/hack-zeroslash/Hack-ZeroSlash-Bold.woff';
import hackZeroSlashItalicURL from '../static/fonts/hack-zeroslash/Hack-ZeroSlash-Italic.woff';
import hackZeroSlashRegularURL from '../static/fonts/hack-zeroslash/Hack-ZeroSlash-Regular.woff';
import { isMathJaxAllowed, mathJaxSrc } from '../src/utils/math-jax';

const isJapanese = clientLocale === 'japanese';

export function getheadTagComponents(): JSX.Element[] {
  const socialImage =
    'https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png';

  const headTags = [
    <meta
      content={i18next.t('metaTags:description')}
      key='description'
      name='description'
    />,
    <meta
      content={i18next.t('metaTags:keywords')}
      key='keywords'
      name='keywords'
    />,
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
    />,
    <link
      as='font'
      crossOrigin='anonymous'
      href={latoRegularURL}
      key='font-lato-regular'
      rel='preload'
      type='font/woff'
    />,
    <link
      as='font'
      crossOrigin='anonymous'
      href={latoLightURL}
      key='font-lato-light'
      rel='preload'
      type='font/woff'
    />,
    <link
      as='font'
      crossOrigin='anonymous'
      href={latoBoldURL}
      key='font-lato-bold'
      rel='preload'
      type='font/woff'
    />,
    ...(isJapanese
      ? [
          <link
            as='font'
            crossOrigin='anonymous'
            href={jpSansRegularURL}
            key='font-jp-regular'
            rel='preload'
            type='font/woff'
          />,
          <link
            as='font'
            crossOrigin='anonymous'
            href={jpSansLightURL}
            key='font-jp-light'
            rel='preload'
            type='font/woff'
          />,
          <link
            as='font'
            crossOrigin='anonymous'
            href={jpSansBoldURL}
            key='font-jp-bold'
            rel='preload'
            type='font/woff'
          />
        ]
      : []),
    <link
      as='font'
      crossOrigin='anonymous'
      href={hackZeroSlashRegularURL}
      key='font-hack-regular'
      rel='preload'
      type='font/woff'
    />,
    <link
      as='font'
      crossOrigin='anonymous'
      href={hackZeroSlashBoldURL}
      key='font-hack-bold'
      rel='preload'
      type='font/woff'
    />,
    <link
      as='font'
      crossOrigin='anonymous'
      href={hackZeroSlashItalicURL}
      key='font-hack-italic'
      rel='preload'
      type='font/woff'
    />
  ];
  return headTags;
}

export function getPostBodyComponents(superblock: string): JSX.Element[] {
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

  if (isMathJaxAllowed(superblock)) {
    scripts.push(mathJaxScriptElement);
  }

  return scripts.filter(Boolean);
}

export function getPreBodyThemeScript(): JSX.Element[] {
  const script = (
    <script
      key='prebody-theme-init'
      dangerouslySetInnerHTML={{
        __html: `
(function(){
  let theme = 'light';
  const localTheme = localStorage.getItem('theme');

  if (localTheme !== null) {
    theme = localTheme === 'dark' ? 'dark' : 'light';
  } else if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    theme = 'dark';
  }

  const bodyEl = document && document.body;

  if (bodyEl && bodyEl.classList) {
    bodyEl.classList.remove('light-palette');
    bodyEl.classList.remove('dark-palette');
    bodyEl.classList.add(theme + '-palette');
  }
})();`
      }}
    />
  );
  return [script];
}
