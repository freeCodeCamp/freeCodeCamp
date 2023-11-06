// Import necessary dependencies
const pkg = require('cypress/package.json');
const execa = require('execa');

// Get the Cypress version from the package.json
const version = pkg.version;

// Asynchronous function to install Cypress
(async () => {
  console.log('Installing Cypress ' + version);
  // Use the 'execa' library to run the 'cypress:install' script using 'pnpm'
  await execa('pnpm', ['run', 'cypress:install'], {
    env: { CYPRESS_INSTALL_BINARY: version }
  });
  // Log a message indicating that Cypress has been successfully installed
  console.log('Cypress installed');
})();
