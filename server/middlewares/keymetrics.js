import pmx from 'pmx';

export default function keymetrics() {
  if (process.env.NODE_ENV !== 'production') {
    return (err, req, res, next) => next(err);
  }
  return pmx.expressErrorHandler();
}
