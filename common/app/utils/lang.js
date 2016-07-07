import
  supportedLanguages,
  { langTagRegex }
from '../../utils/supported-languages';

const toLowerCase = String.prototype.toLowerCase;

export function getLangFromPath(path) {
  const maybeLang = toLowerCase.call(path.split('/')[1]);
  if (supportedLanguages[maybeLang]) {
    return maybeLang;
  }
  return 'en';
}

export function addLang(path, lang, primaryLang) {
  // if maybeLang is supported continue
  // if maybeLang is unsupported lang, remove and use lang
  // if maybeLang is not lang tag, add lang tag.
  // if both primary and lang are not lang tags default en
  const maybeLang = toLowerCase.call(path.split('/')[1]);
  const restUrl = path.split('/').slice(2).join('/');

  if (supportedLanguages[maybeLang]) {
    return path;
  }

  if (
    langTagRegex.test(maybeLang) &&
    !supportedLanguages[maybeLang]
  ) {
    return `/${primaryLang || lang }/${restUrl}`;
  }

  if (supportedLanguages[primaryLang || lang]) {
    return `/${primaryLang || lang}${path}`;
  }
  return `/en${path}`;
}
