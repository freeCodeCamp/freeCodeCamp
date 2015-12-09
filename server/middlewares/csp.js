import helmet from 'helmet';

const trusted = [
  "'self'"
];

export default function csp() {
  return helmet.csp({
    defaultSrc: trusted,
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
      'https://*.twimg.com'
    ].concat(trusted),
    connectSrc: [
      'vimeo.com'
    ].concat(trusted),
    styleSrc: [
      "'unsafe-inline'",
      '*.gstatic.com',
      '*.googleapis.com',
      '*.bootstrapcdn.com',
      'https://*.bootstrapcdn.com',
      '*.cloudflare.com',
      'https://*.cloudflare.com'
    ].concat(trusted),
    fontSrc: [
      '*.cloudflare.com',
      'https://*.cloudflare.com',
      '*.bootstrapcdn.com',
      '*.googleapis.com',
      '*.gstatic.com',
      'https://*.bootstrapcdn.com'
    ].concat(trusted),
    imgSrc: [
      // allow all input since we have user submitted images for
      // public profile
      '*',
      'data:'
    ],
    mediaSrc: [
      '*.bitly.com',
      '*.amazonaws.com',
      '*.twitter.com'
    ].concat(trusted),
    frameSrc: [
      '*.gitter.im',
      '*.gitter.im https:',
      '*.vimeo.com',
      '*.twitter.com',
      '*.ghbtns.com',
      '*.freecatphotoapp.com'
    ].concat(trusted),
    // set to true if you only want to report errors
    reportOnly: false,
    // set to true if you want to set all headers
    setAllHeaders: false,
    // set to true if you want to force buggy CSP in Safari 5
    safari5: false
  });
}
