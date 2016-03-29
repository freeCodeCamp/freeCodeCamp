import session from 'express-session';
import MongoStoreFactory from 'connect-mongo';
import secrets from '../../config/secrets';

const MongoStore = MongoStoreFactory(session);

export default function sessionsMiddleware() {
  return session({
    // 900 day session cookie
    cookie: { maxAge: 900 * 24 * 60 * 60 * 1000 },
    resave: true,
    saveUninitialized: true,
    secret: secrets.sessionSecret,
    store: new MongoStore({ url: secrets.db })
  });
}
