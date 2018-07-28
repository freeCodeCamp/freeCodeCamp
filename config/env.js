module.exports = {
  homeLocation: process.env.HOME_URL || 'http://localhost:4545',
  homeDomain: process.env.HOME_DOMAIN || 'localhost',
  supportEmail:
    (
      typeof process.env.SUPPORT_EMAIL === 'string' &&
      process.env.SUPPORT_EMAIL
    ) ||
    ''
};
