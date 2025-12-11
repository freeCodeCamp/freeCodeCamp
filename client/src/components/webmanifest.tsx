import React from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';

export default function WebManifest(): JSX.Element {
  return (
    <Helmet>
      <link
        rel='icon'
        href={withPrefix('/favicon-32x32.png')}
        type='image/png'
      />
      <link
        rel='manifest'
        href={withPrefix('/manifest.webmanifest')}
        crossOrigin='anonymous'
      />
      <link
        rel='apple-touch-icon'
        sizes='48x48'
        href={withPrefix('/icons/icon-48x48.png')}
      />
      <link
        rel='apple-touch-icon'
        sizes='72x72'
        href={withPrefix('/icons/icon-72x72.png')}
      />
      <link
        rel='apple-touch-icon'
        sizes='96x96'
        href={withPrefix('/icons/icon-96x96.png')}
      />
      <link
        rel='apple-touch-icon'
        sizes='144x144'
        href={withPrefix('/icons/icon-144x144.png')}
      />
      <link
        rel='apple-touch-icon'
        sizes='192x192'
        href={withPrefix('/icons/icon-192x192.png')}
      />
      <link
        rel='apple-touch-icon'
        sizes='256x256'
        href={withPrefix('/icons/icon-256x256.png')}
      />
      <link
        rel='apple-touch-icon'
        sizes='384x384'
        href={withPrefix('/icons/icon-384x384.png')}
      />
      <link
        rel='apple-touch-icon'
        sizes='512x512'
        href={withPrefix('/icons/icon-512x512.png')}
      />
    </Helmet>
  );
}
