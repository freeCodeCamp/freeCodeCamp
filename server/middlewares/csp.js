import helmet from 'helmet';

const trusted = [
  "'self'",
  'blob:',
  '104.236.218.15',
  '*.freecodecamp.com',
  'http://www.freecodecamp.com',
  'http://freecodecamp.com',
  'https://www.freecodecamp.com',
  'https://freecodecamp.com',
  'https://freecodecamp.org',
  '*.freecodecamp.org',
  // NOTE(berks): add the following as the blob above was not covering www
  'http://www.freecodecamp.org',
  'ws://freecodecamp.com/',
  'ws://www.freecodecamp.com/',
  '*.gstatic.com',
  '*.google-analytics.com',
  '*.googleapis.com',
  '*.google.com',
  '*.gstatic.com',
  '*.doubleclick.net',
  '*.twitter.com',
  '*.twitch.tv',
  '*.twimg.com',
  "'unsafe-eval'",
  "'unsafe-inline'",
  '*.bootstrapcdn.com',
  '*.cloudflare.com',
  'https://*.cloudflare.com',
  'localhost:3001',
  'ws://localhost:3001/',
  'http://localhost:3001',
  'localhost:3000',
  'ws://localhost:3000/',
  'http://localhost:3000',
  '*.ionicframework.com',
  'https://syndication.twitter.com',
  '*.youtube.com',
  '*.jsdelivr.net',
  'https://*.jsdelivr.net',
  '*.ytimg.com',
  '*.bitly.com',
  'http://cdn.inspectlet.com/',
  'https://cdn.inspeclet.com/',
  'wss://inspectletws.herokuapp.com/',
  'http://hn.inspectlet.com/',
  '*.googleapis.com',
  '*.gstatic.com',
  'https://hn.inspectlet.com/'
];

export default function csp() {
  return helmet.csp({
    defaultSrc: trusted,
    scriptSrc: [
      'https://*.gitter.im',
      '*.optimizely.com',
      '*.aspnetcdn.com',
      '*.d3js.org',
      'https://cdn.inspectlet.com/inspectlet.js',
      'http://cdn.inspectlet.com/inspectlet.js',
      'http://beta.freecodecamp.com'
    ].concat(trusted),
    'connect-src': [
      'vimeo.com'
    ].concat(trusted),
    styleSrc: [
      '*.googleapis.com',
      '*.gstatic.com'
    ].concat(trusted),
    imgSrc: [
      // allow all input since we have user submitted images for
      // public profile
      '*'
    ].concat(trusted),
    fontSrc: [
      '*.googleapis.com',
      '*.gstatic.com'
    ].concat(trusted),
    mediaSrc: [
      '*.amazonaws.com',
      '*.twitter.com'
    ].concat(trusted),
    frameSrc: [
      '*.gitter.im',
      '*.gitter.im https:',
      '*.vimeo.com',
      '*.twitter.com',
      '*.ghbtns.com'
    ].concat(trusted),
    // set to true if you only want to report errors
    reportOnly: false,
    // set to true if you want to set all headers
    setAllHeaders: false,
    // set to true if you want to force buggy CSP in Safari 5
    safari5: false
  });
}
