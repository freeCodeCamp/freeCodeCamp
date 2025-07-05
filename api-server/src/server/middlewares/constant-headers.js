import { allowedOrigins } from '../../../config/cors-settings';

export default function constantHeaders() {
  return function (req, res, next) {
    if (
      req.headers &&
      req.headers.origin &&
      allowedOrigins.includes(req.headers.origin)
    ) {
      res.header('Access-Control-Allow-Origin', req.headers.origin);
    } else {
      res.header('Access-Control-Allow-Origin', process.env.HOME_LOCATION);
    }
    res.header('Access-Control-Allow-Credentials', true);
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  };
}
