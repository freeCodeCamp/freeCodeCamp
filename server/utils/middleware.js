import dedent from 'dedent';

export function ifNoUserRedirectTo(url, message, type = 'errors') {
  return function(req, res, next) {
    const { path } = req;
    if (req.user) {
      return next();
    }

    req.flash(type, message || `You must be signed in to access ${path}`);

    return res.redirect(url);
  };
}

export function ifNoUserSend(sendThis) {
  return function(req, res, next) {
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

export function ifNotVerifiedRedirectToSettings(req, res, next) {
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

export function ifUserRedirectTo(path = '/', status) {
  status = status === 302 ? 302 : 301;
  return (req, res, next) => {
    if (req.user) {
      return res.status(status).redirect(path);
    }
    return next();
  };
}
