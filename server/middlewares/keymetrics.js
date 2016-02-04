import pmx from 'pmx';

export default function keymetrics() {
  if (process.env.NODE_ENV !== 'production') {
    return (err, req, res, next) => next(err);
  }
  return (err, req, res, next) => {
    if (res.statusCode < 400) { res.statusCode = 500; }

    err.url = req.url;
    err.component = req.url;
    err.action = req.method;
    err.params = req.body;
    err.session = req.session;
    err.username = req.user ? req.user.username : 'anonymous';
    err.userId = req.user ? req.user.id : 'anonymous';

    return next(pmx.notify(err));
  };
}
