import supportedLanguages from '../utils/supported-languages';
import passthroughs from '../utils/passthrough-urls';

const toLowerCase = String.prototype.toLowerCase;

// redirect(statusOrUrl: String|Number, url?: String) => Void
function langRedirect(...args) {
  const url = args.length === 2 ? args[1] : args[0];
  const { lang } = this.req;
  const maybeLang = toLowerCase.call(url.split('/')[1]);

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

export default function addLang() {
  return function(req, res, next) {
    const { url, user = {} } = req;
    const maybeLang = url.split('/')[1];
    const userLang = user.languageTag;
    const finalLang = userLang && supportedLanguages[userLang] ?
      userLang :
      maybeLang;

    if (supportedLanguages[finalLang]) {
      req.lang = finalLang;
      res.locals.lang = finalLang;
    }

    res._oldRedirect = res.redirect;
    res.redirect = langRedirect;

    return next();
  };
}
