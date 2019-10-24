import { homeLocation } from '../../../config/env';

export default function constantHeaders() {
  return function(req, res, next) {
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Origin', '*');
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
