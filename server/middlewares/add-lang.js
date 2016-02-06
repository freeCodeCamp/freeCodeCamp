import supportedLanguages from '../utils/supported-languages';
import passthroughs from '../utils/passthrough-urls';

const toLowerCase = String.prototype.toLowerCase;

// redirect(statusOrUrl: String|Number, url?: String) => Void
function langRedirect(...args) {
  const url = args.length === 2 ? args[1] : args[0];
  const maybeLang = toLowerCase.call(url.split('/')[1]);
  const lang = this.req.lang;

  if (
    // if a passthrough languages
    passthroughs[maybeLang] ||
    // if maybe lang matches current language
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
    const { url } = req;
    const maybeLang = url.split('/')[1];

    if (supportedLanguages[maybeLang]) {
      req.lang = maybeLang;
      res.locals.lang = maybeLang;
    }

    res._oldRedirect = res.redirect;
    res.redirect = langRedirect;

    return next();
  };
}
