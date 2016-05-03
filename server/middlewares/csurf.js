import csurf from 'csurf';

export default function() {
  const protection = csurf({ cookie: true });
  return function csrf(req, res, next) {
    const path = req.path.split('/')[1];
    if (/api/.test(path)) {
      return next();
    }
    return protection(req, res, next);
  };
}
