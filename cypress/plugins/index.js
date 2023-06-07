// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
/* eslint-disable no-unused-vars */

const { execSync } = require('child_process');
const { existsSync } = require('fs');
require('dotenv').config();

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  config.env = config.env || {};
  on('before:run', () => {
    if (!existsSync('../../config/curriculum.json')) {
      execSync('pnpm run build:curriculum');
    }
  });

  config.env.API_LOCATION = process.env.API_LOCATION;
  return config;
};
