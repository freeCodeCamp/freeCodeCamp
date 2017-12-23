import
  supportedLanguages,
  { langTagRegex }
from '../../common/utils/supported-languages';
import passthroughs from '../utils/lang-passthrough-urls';
import debug from 'debug';

const log = debug('fcc:middlewares:lang');
const toLowerCase = String.prototype.toLowerCase;

// redirect(statusOrUrl: String|Number, url?: String) => Void
function langRedirect(...args) {
  const url = args.length === 2 ? args[1] : args[0];
  const { lang } = this.req;
  const maybeLang = toLowerCase.call((url.split('/')[1] || ''));

  if (
    passthroughs[maybeLang] ||
    supportedLanguages[maybeLang]
  ) {
    return this._oldRedirect(...arguments);
  }

  // if language present add to url
  if (lang) {
    return this._oldRedirect(`/${lang}${url}`);
  }

  // default to english
  return this._oldRedirect(`/en${url}`);
}

// prefer url lang over user lang
// if url lang is not supported move to user lang
// if user lang is not supported default to english
export default function addLang() {
  return function(req, res, next) {
    const { url, user = {} } = req;
    const maybeLang = url.split('/')[1];
    const restUrl = url.split('/').slice(2).join('/');
    const userLang = user.languageTag;
    let finalLang;
    if (supportedLanguages[maybeLang]) {
      finalLang = maybeLang;
    } else if (supportedLanguages[userLang]) {
      finalLang = userLang;
    } else {
      finalLang = 'en';
    }
    // found url lang tag that is not yet supported
    // redirect to fix url with supported lang tag
    if (langTagRegex.test(maybeLang) && !supportedLanguages[maybeLang]) {
      log(`unsupported lang tag ${maybeLang}`);
      return res.redirect(`/${finalLang}/${restUrl}`);
    }
    res.locals.supportedLanguages = supportedLanguages;

    if (supportedLanguages[finalLang]) {
      req.lang = finalLang;
      res.locals.lang = finalLang;
    }

    res._oldRedirect = res.redirect;
    res.redirect = langRedirect;

    return next();
  };
}
