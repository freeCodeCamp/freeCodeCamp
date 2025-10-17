const envData = require('../../config/env.json');

const { clientLocale } = envData;

exports.pathPrefix = clientLocale === 'english' ? '' : '/' + clientLocale;
