import accepts from 'accepts';
import { getRedirectParams } from '../utils/redirection';

export default function fourOhFour(app) {
  app.all('*', function (req, res) {
    const accept = accepts(req);
    // prioritise returning json
    const type = accept.type('json', 'html', 'text');
    const { path } = req;
    const { origin } = getRedirectParams(req);

    if (type === 'json') {
      return res.status('404').json({ error: 'path not found' });
    } else {
      req.flash('danger', `We couldn't find path ${path}`);
      return res.redirectWithFlash(`${origin}/404`);
    }
  });
}
