import timezones from '../../../config/timezones.json';

export default function getTimezonesOrDefault(isGetDefault = false) {
  return isGetDefault
    ? timezones.find(timezone => timezone.name === 'UTC')
    : timezones;
}
