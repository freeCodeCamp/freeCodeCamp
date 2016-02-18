import supportedLanguages from '../utils/supported-languages';
import passThroughs from '../utils/passthrough-urls';

const toLowerCase = String.prototype.toLowerCase;

export default function redirectLang(app) {
  app.all('*', function(req, res, next) {
    const { url, path } = req;
    const langCode = toLowerCase.call(url.split('/')[1]);

    if (passThroughs[langCode]) {
      return next();
    }

    if (supportedLanguages[langCode]) {
      req.flash('errors', {
        msg: `404: We couldn't find path ${ path }`
      });
      return res.redirect('/en/map');
    }

    return res.redirect(`/en${url}`);
  });
}
