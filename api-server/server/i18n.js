const i18n = require('i18n');

const clientLocale = process.env.CLIENT_LOCALE || 'english';

i18n.configure({
  staticCatalog: {
    [clientLocale]: require(`../../client/i18n/locales/${clientLocale}/server.json`)
  },
  defaultLocale: clientLocale
});

exports.i18n = i18n;
