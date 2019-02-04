const path = require('path');

if (process.env.NODE_ENV !== 'production') {
  const envPath = path.resolve(__dirname, '../.env');
  require('dotenv').config({ path: envPath });
}

const {
  HOME_LOCATION: home,
  API_LOCATION: api,
  FORUM_LOCATION: forum,
  LOCALE: locale,
} = process.env;

const locations = {
  homeLocation: home,
  apiLocation: api,
  forumLocation: forum
};

module.exports = Object.assign(locations, { locale });
