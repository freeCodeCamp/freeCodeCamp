/**
 * @file - Conifiguration for LightHouse CI. Vist the link below
 * for more details ->
 * https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md
 */

module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:8000/'],
      startServerCommand: 'npm run start'
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
};
