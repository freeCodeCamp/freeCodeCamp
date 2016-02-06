import supportedLanguages from '../utils/supported-languages';

const toLowerCase = String.prototype.toLowerCase;
export default function redirectLang(app) {
  app.all('*', function(req, res) {
    const { url, path } = req;
    const langCode = url.split('/')[0];
    if (supportedLanguages[toLowerCase.call(langCode)]) {
      req.flash('errors', {
        msg: `404: We couldn't find path ${ path }`
      });
      return res.redirect('/en/');
    }

    return res.redirect(`/en${url}`);
  });
}
