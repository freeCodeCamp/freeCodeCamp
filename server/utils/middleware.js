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

export function isNamed(req, res, next) {
  if (req.user.name === '') {
    return res.status(200).send(dedent`We need your name so we can
      put it on your
      certificate. <a href="https://github.com/settings/profile">Add your name
      to your GitHub account</a>, then
      go to your <a href="https://www.freecodecamp.com/settings">
      settings</a> page and click the "Update my portfolio from GitHub" button.
      Then we can issue your certificate.`);
  }
  return next();
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
