import session from 'express-session';
import secrets from '../../config/secrets';

export default function sessionsMiddleware() {
  return session({
    resave: true,
    saveUninitialized: true,
    secret: secrets.sessionSecret
  });
}
