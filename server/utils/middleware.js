import dedent from 'dedent';

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
    const user = req.user;
    if (!user) {
      return next();
    }
    const email = req.user.email;
    const emailVerified = req.user.emailVerified;
    if (!email) {
      req.flash('info', { msg:
         dedent `Please update your email address when you get a moment in
                  your <a href="\settings"> Settings Page.</a>`
      });
    } else if (!emailVerified) {
      req.flash('info', { msg:
         dedent `We have your email address with us, but its not yet verified.
                  Please follow the link we sent you, when you get a moment.`
      });
    }
    return next();
}
