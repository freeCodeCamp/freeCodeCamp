import accepts from 'accepts';

import { homeLocation } from '../../../config/env';

export default function fourOhFour(app) {
  app.all('*', function(req, res) {
    const accept = accepts(req);
    const type = accept.type('html', 'json', 'text');
    const { path } = req;

    if (type === 'html') {
      req.flash('danger', `API endpoint is not defined for '${path}'.`);
      return res.redirectWithFlash(`${homeLocation}/404`);
    }

    if (type === 'json') {
      return res
        .status('404')
        .json({ error: 'API endpoint is not defined for this request' });
    }

    res.setHeader('Content-Type', 'text/plain');
    return res.send('404 - API endpoint is not defined for this request');
  });
}
