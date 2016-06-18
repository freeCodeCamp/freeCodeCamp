import supportedLanguages from '../../utils/supported-languages';

const toLowerCase = String.prototype.toLowerCase;
export function addLang(url, lang) {
  const maybeLang = toLowerCase.call(url.split('/')[1]);
  if (supportedLanguages[maybeLang]) {
    return url;
  }
  if (supportedLanguages[lang]) {
    return `/${lang}${url}`;
  }
  return `/en${url}`;
}
