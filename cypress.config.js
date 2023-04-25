const { execSync } = require('child_process');
const { existsSync } = require('fs');
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8000',
    projectId: 'ke77ns',
    retries: 4,
    chromeWebSecurity: false,

    // This is the default spec pattern, that we use on /learn proper
    //
    // For special ones like the third- party or the mobile app specs,
    // you can use the below command:
    //
    // pnpm run cypress:dev:run -- --spec "cypress/e2e/mobile-learn/**/*"
    // pnpm run cypress:dev:run -- --spec "cypress/e2e/third-party/**/*"
    //
    // and so on.
    //
    specPattern: ['cypress/e2e/default/**/*.js', 'cypress/e2e/default/**/*.ts'],

    // Temporary disable these until we can address the flakiness
    excludeSpecPattern: [
      'cypress/e2e/**/challenge-hot-keys.ts',
      'cypress/e2e/**/multifile.ts'
    ],

    setupNodeEvents(on, config) {
      config.env = config.env || {};
      on('before:run', () => {
        if (!existsSync('./config/curriculum.json')) {
          execSync('pnpm run build:curriculum');
        }
      });

      config.env.API_LOCATION = 'http://localhost:3000';
      return config;
    }
  }
});
