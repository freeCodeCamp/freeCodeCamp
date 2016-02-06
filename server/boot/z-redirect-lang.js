import supportedLanguages from '../utils/supported-languages';

const passThroughs = [
  'auth'
].reduce((passThroughs, subroute) => {
  passThroughs[subroute] = true;
  return passThroughs;
}, {});

const toLowerCase = String.prototype.toLowerCase;
export default function redirectLang(app) {
  app.all('*', function(req, res, next) {
    const { url, path } = req;
    const langCode = url.split('/')[1];
    if (supportedLanguages[toLowerCase.call(langCode)]) {
      req.flash('errors', {
        msg: `404: We couldn't find path ${ path }`
      });
      return res.redirect('/en/');
    }

    if (passThroughs[langCode]) {
      return next();
    }

    return res.redirect(`/en${url}`);
  });
}
