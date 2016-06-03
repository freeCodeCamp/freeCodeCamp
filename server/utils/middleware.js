export function ifNoUserRedirectTo(url, message, type = 'errors') {
  return function(req, res, next) {
    const { path } = req;
    if (req.user) {
      return next();
    }

    req.flash(type, {
      msg: message || `You must be signed in to access ${path}`
    });

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

export function flashIfNotVerified(req, res, next) {
  return next();
  /*
  // disabled until authorized required bug is fixed
  const user = req.user;
  if (!user) {
    return next();
  }
  const email = req.user.email;
  const emailVerified = req.user.emailVerified;
  if (!email || !emailVerified) {
    req.flash('info', {
      msg: 'Please verify your email address ' +
      '<a href="/update-email">here</a>.'
    });
  }
  */
}
