import helmet from 'helmet';

import { homeLocation } from '../../../../config/env.json';

let trusted = [
  "'self'",
  'https://search.freecodecamp.org',
  homeLocation,
  'https://' + process.env.AUTH0_DOMAIN
];

const host = process.env.HOST || 'localhost';
const port = process.env.SYNC_PORT || '3000';

if (process.env.FREECODECAMP_NODE_ENV !== 'production') {
  trusted = trusted.concat([`ws://${host}:${port}`, 'http://localhost:8000']);
}

export default function csp() {
  return helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: trusted.concat([
        'https://*.cloudflare.com',
        '*.cloudflare.com'
      ]),
      connectSrc: trusted.concat([
        'https://glitch.com',
        'https://*.glitch.com',
        'https://*.glitch.me',
        'https://*.cloudflare.com',
        'https://*.algolia.net'
      ]),
      scriptSrc: [
        "'unsafe-eval'",
        "'unsafe-inline'",
        '*.google-analytics.com',
        '*.gstatic.com',
        'https://*.cloudflare.com',
        '*.cloudflare.com',
        'https://*.gitter.im',
        'https://*.cdnjs.com',
        '*.cdnjs.com',
        'https://*.jsdelivr.com',
        '*.jsdelivr.com',
        '*.twimg.com',
        'https://*.twimg.com',
        '*.youtube.com',
        '*.ytimg.com'
      ].concat(trusted),
      styleSrc: [
        "'unsafe-inline'",
        '*.gstatic.com',
        '*.googleapis.com',
        '*.bootstrapcdn.com',
        'https://*.bootstrapcdn.com',
        '*.cloudflare.com',
        'https://*.cloudflare.com',
        'https://use.fontawesome.com'
      ].concat(trusted),
      fontSrc: [
        '*.cloudflare.com',
        'https://*.cloudflare.com',
        '*.bootstrapcdn.com',
        '*.googleapis.com',
        '*.gstatic.com',
        'https://*.bootstrapcdn.com',
        'https://use.fontawesome.com'
      ].concat(trusted),
      imgSrc: [
        // allow all input since we have user submitted images for
        // public profile
        '*',
        'data:'
      ],
      mediaSrc: ['*.bitly.com', '*.amazonaws.com', '*.twitter.com'].concat(
        trusted
      ),
      frameSrc: [
        '*.gitter.im',
        '*.gitter.im https:',
        '*.youtube.com',
        '*.twitter.com',
        '*.ghbtns.com',
        '*.freecatphotoapp.com',
        'freecodecamp.github.io'
      ].concat(trusted)
    },
    // set to true if you only want to report errors
    reportOnly: false,
    // set to true if you want to set all headers
    setAllHeaders: false,
    // set to true if you want to force buggy CSP in Safari 5
    safari5: false
  });
}
