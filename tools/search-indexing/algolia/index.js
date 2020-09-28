const algoliasearch = require('algoliasearch');
const path = require('path');

const envPath = path.resolve(__dirname, '../.env');
require('dotenv').config({ path: envPath });

const { ALGOLIA_ADMIN_KEY, ALGOLIA_APP_ID } = process.env;

exports.client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY);
