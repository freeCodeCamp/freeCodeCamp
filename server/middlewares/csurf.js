import csurf from 'csurf';

import { cookie } from '../../config/secrets';

export default function() {
  const protection = csurf(
    {
      cookie: {
        domain: cookie.domain || 'localhost'
      }
    }
  );
  return function csrf(req, res, next) {

    const path = req.path.split('/')[1];
    if (/(api|external)/.test(path)) {
      return next();
    }
    return protection(req, res, next);
  };
}
