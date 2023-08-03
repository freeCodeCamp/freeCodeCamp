import { withPrefix } from 'gatsby';
import i18next from 'i18next';
import React from 'react';

// Function to generate an array of JSX elements representing head tags for a web page
export function getHeadTagComponents(): JSX.Element[] {
  // URL for the social image
  const socialImage =
    'https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png';

  // Resolve the path to the Bootstrap CSS file using Gatsby's withPrefix function
  const pathToBootstrap = withPrefix('/css/bootstrap.min.css');

  // Array of JSX elements representing head tags
  const headTags = [
    // Preload the Bootstrap CSS file
    <link
      as='style'
      href={pathToBootstrap}
      key='bootstrap-min-preload'
      rel='preload'
    />,
    // Include the Bootstrap CSS file
    <link href={pathToBootstrap} key='bootstrap-min' rel='stylesheet' />,
    // Meta tag for Open Graph title
    <meta content='freeCodeCamp.org' key='og:title' property='og:title' />,
    // Meta tag for Open Graph description, using i18next for translation
    <meta
      content={i18next.t('metaTags:social-description')}
      key='og:description'
      property='og:description'
    />,
    // Meta tag for Open Graph image
    <meta content={socialImage} key='og:image' property='og:image' />,
    // Meta tag for Twitter card type
    <meta
      content='summary_large_image'
      key='twitter:card'
      name='twitter:card'
    />,
    // Meta tag for Twitter image source
    <meta
      content={socialImage}
      key='twitter:image:src'
      name='twitter:image:src'
    />,
    // Meta tag for Twitter title
    <meta
      content='freeCodeCamp.org'
      key='twitter:title'
      name='twitter:title'
    />,
    // Meta tag for Twitter description, using i18next for translation
    <meta
      content={i18next.t('metaTags:social-description')}
      key='twitter:description'
      name='twitter:description'
    />,
    // Monetization meta tag for Coil Web Monetization
    <meta
      content='$ilp.uphold.com/LJmbPn7WD4JB'
      key='monetization'
      name='monetization'
    />
  ];

  return headTags;
}

// Function to generate an array of JSX elements representing script tags for the web page body
export function getPostBodyComponents(pathname: string): JSX.Element[] {
  const scripts = [];

  // MathJax script element for rendering math equations
  const mathJaxScriptElement = (
    <script
      async={false}
      id='mathjax'
      key='mathjax'
      src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML'
      type='text/javascript'
    />
  );

  // Check if the current pathname requires MathJax, and if so, add it to the scripts array
  if (
    pathname.includes('/learn/coding-interview-prep/rosetta-code') ||
    pathname.includes('/learn/project-euler/')
  ) {
    scripts.push(mathJaxScriptElement);
  }

  return scripts;
}
