import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import envData from '../../config/env.json';
import { themeSelector } from '../redux/selectors';

import latoBoldURL from '../../static/fonts/lato/Lato-Bold.woff';
import latoLightURL from '../../static/fonts/lato/Lato-Light.woff';
import latoRegularURL from '../../static/fonts/lato/Lato-Regular.woff';

import jpSansBoldURL from '../../static/fonts/noto-sans-japanese/NotoSansJP-Bold.woff';
import jpSansLightURL from '../../static/fonts/noto-sans-japanese/NotoSansJP-Light.woff';
import jpSansRegularURL from '../../static/fonts/noto-sans-japanese/NotoSansJP-Regular.woff';

import hackZeroSlashBoldURL from '../../static/fonts/hack-zeroslash/Hack-ZeroSlash-Bold.woff';
import hackZeroSlashItalicURL from '../../static/fonts/hack-zeroslash/Hack-ZeroSlash-Italic.woff';
import hackZeroSlashRegularURL from '../../static/fonts/hack-zeroslash/Hack-ZeroSlash-Regular.woff';

interface PageHeadProps {
  title?: string;
  children?: React.ReactNode;
  noindex?: boolean;
  certification?: boolean;
}

// Each Gatsby page exports its own Head; shared defaults belong here rather
// than in a layout, which Gatsby does not render as part of Head.
export default function PageHead({
  title,
  children,
  noindex = false,
  certification = false
}: PageHeadProps): JSX.Element {
  const { t, i18n } = useTranslation();
  const theme = useSelector(themeSelector) as string;
  const pageTitle = title ?? t('metaTags:title');
  const isJapanese = envData.clientLocale === 'japanese';

  useEffect(() => {
    // Gatsby copies Head on page renders, but does not copy subsequent updates
    // from Redux subscribers in production (e.g. a fetched profile's title).
    const titleElement = document.head.querySelector('title[data-gatsby-head]');
    if (titleElement) titleElement.textContent = pageTitle;
  }, [pageTitle]);

  return (
    <>
      <html lang={i18n.language} />
      <body className={`${certification ? 'light' : theme}-palette`} />
      <title id='page-title'>{pageTitle}</title>
      {noindex && <meta id='robots' name='robots' content='noindex' />}
      {!certification && (
        <>
          <meta
            id='description'
            name='description'
            content={t('metaTags:description')}
          />
          <meta
            id='keywords'
            name='keywords'
            content={t('metaTags:keywords')}
          />
          <link
            as='font'
            crossOrigin='anonymous'
            href={latoRegularURL}
            rel='preload'
            type='font/woff'
          />
          <link
            as='font'
            crossOrigin='anonymous'
            href={latoLightURL}
            rel='preload'
            type='font/woff'
          />
          <link
            as='font'
            crossOrigin='anonymous'
            href={latoBoldURL}
            rel='preload'
            type='font/woff'
          />
          {isJapanese && (
            <link
              as='font'
              crossOrigin='anonymous'
              href={jpSansRegularURL}
              rel='preload'
              type='font/woff'
            />
          )}
          {isJapanese && (
            <link
              as='font'
              crossOrigin='anonymous'
              href={jpSansLightURL}
              rel='preload'
              type='font/woff'
            />
          )}
          {isJapanese && (
            <link
              as='font'
              crossOrigin='anonymous'
              href={jpSansBoldURL}
              rel='preload'
              type='font/woff'
            />
          )}

          <link
            as='font'
            crossOrigin='anonymous'
            href={hackZeroSlashRegularURL}
            rel='preload'
            type='font/woff'
          />
          <link
            as='font'
            crossOrigin='anonymous'
            href={hackZeroSlashBoldURL}
            rel='preload'
            type='font/woff'
          />
          <link
            as='font'
            crossOrigin='anonymous'
            href={hackZeroSlashItalicURL}
            rel='preload'
            type='font/woff'
          />
        </>
      )}
      {children}
    </>
  );
}
