function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

export default (function (option, Dayjs, dayjs) {
  dayjs.updateLocale = function (locale, customConfig) {
    var localeList = dayjs.Ls;
    var localeConfig = localeList[locale];
    if (!localeConfig) return;
    var customConfigKeys = customConfig ? Object.keys(customConfig) : [];
    customConfigKeys.forEach(function (c) {
      if (localeConfig[c] && customConfig[c] && typeof localeConfig[c] === 'object' && typeof customConfig[c] === 'object' && !Array.isArray(localeConfig[c])) {
        localeConfig[c] = _extends({}, localeConfig[c], customConfig[c]);
      } else {
        localeConfig[c] = customConfig[c];
      }
    });
    return localeConfig; // eslint-disable-line consistent-return
  };
});