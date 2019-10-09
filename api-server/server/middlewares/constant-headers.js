import {
  homeLocation,
  apiLocation,
  donateLocation,
  forumProxy,
  newsProxy
} from '../../../config/env';

export default function constantHeaders() {
  const allowedOrigins = [
    homeLocation,
    apiLocation,
    donateLocation,
    forumProxy,
    newsProxy
  ];
  return function(req, res, next) {
    const origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
      res.header('Access-Control-Allow-Origin', origin);
    } else {
      res.header('Access-Control-Allow-Origin', homeLocation);
    }
    res.header('Access-Control-Allow-Credentials', true);
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  };
}
