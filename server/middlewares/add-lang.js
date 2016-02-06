import supportedLanguages from '../utils/supported-languages';

export default function addLang() {
  return function(req, res, next) {
    const { url } = req;
    const maybeLang = url.split('/')[1];

    if (supportedLanguages[maybeLang]) {
      req.lang = maybeLang;
      res.locals.lang = maybeLang;
    }
    return next();
  };
}
