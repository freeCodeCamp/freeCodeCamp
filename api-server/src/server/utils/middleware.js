import dedent from 'dedent';
import { validationResult } from 'express-validator';
import { createValidatorErrorFormatter } from './create-handled-error.js';
import {
  getAccessTokenFromRequest,
  removeCookies
} from './getSetAccessToken.js';
import { getRedirectParams } from './redirection';

// New Middleware Function to Handle Unauthenticated Users
export function handleUnauthenticatedRequests(req, res, next) {
  // Check if the user is authenticated
  if (!req.isAuthenticated()) {
    // Instead of throwing an error, provide a friendly message
    return res.status(200).json({
      message: 'User not signed in or authenticated',
      status: 'unauthenticated'
    });
  }
  // Proceed to the next middleware or route handler
  next();
}

// Existing middleware functions
export function ifNoUserRedirectHome(message, type = 'errors') {
  return function (req, res, next) {
    const { path } = req;
    if (req.user) {
      return next();
    }

    const { origin } = getRedirectParams(req);
    req.flash(type, message || `You must be signed in to access ${path}`);

    return res.redirect(origin);
  };
}

export function ifNoUserSend(sendThis) {
  return function (req, res, next) {
    if (req.user) {
      return next();
    }
    return res.status(200).send(sendThis);
  };
}

export function ifNoUser401(req, res, next) {
  if (req.user) {
    return next();
  }
  return res.status(401).end();
}

export function ifNotVerifiedRedirectToUpdateEmail(req, res, next) {
  const { user } = req;
  if (!user) {
    return next();
  }
  if (!user.emailVerified) {
    req.flash(
      'danger',
      dedent`
        We do not have your verified email address on record,
        please add it in the settings to continue with your request.
      `
    );
    return res.redirect('/settings');
  }
  return next();
}

export function ifUserRedirectTo(status) {
  status = status === 301 ? 301 : 302;
  return (req, res, next) => {
    const { accessToken } = getAccessTokenFromRequest(req);
    const { returnTo } = getRedirectParams(req);
    if (req.user && accessToken) {
      return res.status(status).redirect(returnTo);
    }
    if (req.user && !accessToken) {
      removeCookies(req, res);
      delete req.session.passport;
    }
    return next();
  };
}

export function ifNotMobileRedirect() {
  return (req, res, next) => {
    next();
  };
}

// for use with express-validator error formatter
export const createValidatorErrorHandler =
  (...args) =>
  (req, res, next) => {
    const validation = validationResult(req).formatWith(
      createValidatorErrorFormatter(...args)
    );

    if (!validation.isEmpty()) {
      const errors = validation.array();
      return next(errors.pop());
    }

    return next();
  };
