import dedent from 'dedent';
import debugFactory from 'debug';

const isSignUpDisabled = !!process.env.DISABLE_SIGNUP;
const debug = debugFactory('fcc:boot:auth');

module.exports = function enableAuthentication(app) {
  // enable loopback access control authentication. see:
  //  loopback.io/doc/en/lb2/Authentication-authorization-and-permissions.html
  app.enableAuth();
  const router = app.loopback.Router();
  const api = app.loopback.Router();
  const { AccessToken, User } = app.models;

  router.get('/login', function(req, res) {
    res.redirect(301, '/signin');
  });

  router.get('/logout', function(req, res) {
    res.redirect(301, '/signout');
  });

  function getEmailSignin(req, res) {
    if (req.user) {
      return res.redirect('/');
    }
    if (isSignUpDisabled) {
      return res.render('account/beta', {
        title: 'New sign ups are disabled'
      });
    }
    return res.render('account/email-signin', {
      title: 'Sign in to freeCodeCamp using your Email Address'
    });
  }

  router.get('/signup', getEmailSignin);
  router.get('/signin', getEmailSignin);
  router.get('/email-signin', getEmailSignin);

  function signout(req, res) {
    req.logout();
    res.redirect('/');
  }

  router.get('/signout', signout);

  function getDepSignin(req, res) {
    if (req.user) {
      return res.redirect('/');
    }
    return res.render('account/deprecated-signin', {
      title: 'Sign in to freeCodeCamp using a Deprecated Login'
    });
  }

  router.get('/deprecated-signin', getDepSignin);

  function invalidateAuthToken(req, res, next) {
    if (req.user) {
      return res.redirect('/');
    }

    if (!req.query || !req.query.email || !req.query.token) {
      req.flash('info', { msg: defaultErrorMsg });
      return res.redirect('/email-signin');
    }

    const authTokenId = req.query.token;
    const authEmailId = new Buffer(req.query.email, 'base64').toString();

    return AccessToken.findOne$({ where: {id: authTokenId} })
     .map(authToken => {
       if (!authToken) {
         req.flash('info', { msg: defaultErrorMsg });
         return res.redirect('/email-signin');
       }

       const userId = authToken.userId;
       return User.findById(userId, (err, user) => {
         if (err || !user || user.email !== authEmailId) {
           debug(err);
           req.flash('info', { msg: defaultErrorMsg });
           return res.redirect('/email-signin');
         }
         return authToken.validate((err, isValid) => {
           if (err) { throw err; }
           if (!isValid) {
             req.flash('info', { msg: [ 'Looks like the link you clicked has',
              'expired, please request a fresh link, to sign in.'].join('')
              });
             return res.redirect('/email-signin');
           }
           return authToken.destroy((err) => {
             if (err) { debug(err); }
             next();
           });
         });
       });
     })
     .subscribe(
       () => {},
       next
     );
  }

  const defaultErrorMsg = dedent`
    Oops, something is not right,
    please request a fresh link to sign in / sign up.
  `;

  function getPasswordlessAuth(req, res, next) {
    if (req.user) {
      req.flash('info', {
            msg: 'Hey, looks like you’re already signed in.'
          });
      return res.redirect('/');
    }

    if (!req.query || !req.query.email || !req.query.token) {
      req.flash('info', { msg: defaultErrorMsg });
      return res.redirect('/email-signin');
    }

    const email = new Buffer(req.query.email, 'base64').toString();

    return User.findOne$({ where: { email }})
      .map(user => {

        if (!user) {
          debug(`did not find a valid user with email: ${email}`);
          req.flash('info', { msg: defaultErrorMsg });
          return res.redirect('/email-signin');
        }

        const emailVerified = true;
        const emailAuthLinkTTL = null;
        const emailVerifyTTL = null;
        user.update$({
          emailVerified, emailAuthLinkTTL, emailVerifyTTL
        })
        .do((user) => {
          user.emailVerified = emailVerified;
          user.emailAuthLinkTTL = emailAuthLinkTTL;
          user.emailVerifyTTL = emailVerifyTTL;
        });

        return user.createAccessToken(
          { ttl: User.settings.ttl }, (err, accessToken) => {
          if (err) { throw err; }

          var config = {
            signed: !!req.signedCookies,
            maxAge: accessToken.ttl
          };

          if (accessToken && accessToken.id) {
            debug('setting cookies');
            res.cookie('access_token', accessToken.id, config);
            res.cookie('userId', accessToken.userId, config);
          }

          return req.logIn({
            id: accessToken.userId.toString() }, err => {
            if (err) { return next(err); }

            debug('user logged in');

            if (req.session && req.session.returnTo) {
              var redirectTo = req.session.returnTo;
              if (redirectTo === '/map-aside') {
                redirectTo = '/map';
              }
              return res.redirect(redirectTo);
            }

            req.flash('success', { msg:
              'Success! You have signed in to your account. Happy Coding!'
            });
            return res.redirect('/');
          });
        });
    })
    .subscribe(
      () => {},
      next
    );
  }

  router.get('/passwordless-auth', invalidateAuthToken, getPasswordlessAuth);

  function postPasswordlessAuth(req, res) {
    if (req.user || !(req.body && req.body.email)) {
      return res.redirect('/');
    }

    return User.requestAuthEmail(req.body.email)
      .then(msg => {
          return res.status(200).send({ message: msg });
      })
      .catch(err => {
        debug(err);
        return res.status(200).send({ message: defaultErrorMsg });
      });
  }

  api.post('/passwordless-auth', postPasswordlessAuth);

  app.use('/:lang', router);
  app.use(api);
};
