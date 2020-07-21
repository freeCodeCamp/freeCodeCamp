const timezones = require('../../../config/timezones.json');

function getTimezonesOrDefault(isGetDefault = false) {
  return isGetDefault
    ? timezones.find(timezone => timezone.name === 'UTC')
    : timezones;
}

module.exports = getTimezonesOrDefault;
