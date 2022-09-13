const { execSync } = require('child_process');
const { existsSync } = require('fs');
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8000',
    projectId: 'ke77ns',
    retries: 4,
    chromeWebSecurity: false,
    experimentalWebKitSupport: true,
    specPattern: 'cypress/e2e/default/**/*.js',
    setupNodeEvents(on, config) {
      config.env = config.env || {};
      on('before:run', () => {
        if (!existsSync('./config/curriculum.json')) {
          execSync('npm run build:curriculum');
        }
      });

      config.env.API_LOCATION = 'http://localhost:3000';
      return config;
    }
  }
});
