export const themes = {
  night: 'night',
  default: 'default'
};

export const invertTheme = currentTheme =>
  !currentTheme || currentTheme === themes.default
    ? themes.night
    : themes.default;
