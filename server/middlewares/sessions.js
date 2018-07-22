import session from 'express-session';
import MongoStoreFactory from 'connect-mongo';

import { db, sessionSecret } from '../../config/secrets';

const MongoStore = MongoStoreFactory(session);
const url = db;

export default function sessionsMiddleware() {
  return session({
    // 900 day session cookie
    cookie: { maxAge: 900 * 24 * 60 * 60 * 1000 },
    // resave forces session to be resaved
    // regardless of whether it was modified
    // this causes race conditions during parallel req
    resave: false,
    saveUninitialized: true,
    secret: sessionSecret,
    store: new MongoStore({ url })
  });
}
