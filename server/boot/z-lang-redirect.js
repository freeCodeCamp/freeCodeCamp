import supportedLanguages from '../../common/utils/supported-languages';
import passThroughs from '../utils/lang-passthrough-urls';
import accepts from 'accepts';
// import debug from 'debug';

// const log = debug('fcc:controller:lang-redirect');
const toLowerCase = String.prototype.toLowerCase;

export default function redirectLang(app) {
  app.all('*', function(req, res, next) {
    const accept = accepts(req);
    const type = accept.type('html', 'json', 'text');
    const { url, path } = req;
    const langCode = toLowerCase.call(url.split('/')[1]);

    if (passThroughs[langCode]) {
      return next();
    }

    if (!supportedLanguages[langCode]) {
      // language aware redirect
      return res.redirect(url);
    }

    if (type === 'html') {
      req.flash('errors', {
        msg: `We couldn't find path ${ path }`
      });
      return res.render('404', { title: '404'});
    }

    if (type === 'json') {
      return res.status('404').json({ error: 'path not found' });
    }

    res.setHeader('Content-Type', 'text/plain');
    return res.send('404 path not found');
  });
}
