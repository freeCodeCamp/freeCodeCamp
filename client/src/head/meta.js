import React from 'react';

const meta = [
  <meta content='freeCodeCamp.org' name='og:title' />,
  <meta
    content={
      'Learn to code. Build projects. Earn certifications.' +
      'Since 2015, 40,000 graduates have gotten jobs at tech ' +
      'companies including Google, Apple, Amazon, and Microsoft.'
    }
    name='og:description'
  />,
  <meta
    content='https://cdn.freecodecamp.org/platform/universal/fcc-og-1200-social-green.png'
    property='og:image'
  />,
  <meta content='summary_large_image' key='twitter:card' name='twitter:card' />,
  <meta
    content='https://cdn.freecodecamp.org/platform/universal/fcc-twitter-1120X600-social-green.png'
    name='twitter:image:src'
  />,
  <meta content='freeCodeCamp.org' name='twitter:title' />,
  <meta
    content={
      'Learn to code. Build projects. Earn certifications.' +
      'Since 2015, 40,000 graduates have gotten jobs at tech ' +
      'companies including Google, Apple, Amazon, and Microsoft.'
    }
    name='twitter:description'
  />
];

export default meta;
