import rateLimit from 'express-rate-limit';
import MongoStore from 'rate-limit-mongo';

const url = process.env.MONGODB || process.env.MONGOHQ_URL;

// Rate limit for mobile login
// 10 requests per 15 minute windows
export default function rateLimitMiddleware() {
  return rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: req => {
      return req.headers['x-forwarded-for'] || 'localhost';
    },
    store: new MongoStore({
      collectionName: 'UserRateLimit',
      uri: url,
      expireTimeMs: 15 * 60 * 1000
    })
  });
}
