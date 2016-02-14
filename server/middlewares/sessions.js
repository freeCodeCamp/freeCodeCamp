import session from 'express-session';
import MongoStoreFactory from 'connect-mongo';
import secrets from '../../config/secrets';

const MongoStore = MongoStoreFactory(session);

export default function sessionsMiddleware() {
  return session({
    resave: true,
    saveUninitialized: true,
    secret: secrets.sessionSecret,
    store: new MongoStore({ url: secrets.db })
  });
}
