import { getRedirectParams } from '../utils/redirection';
import { deprecatedEndpoint } from '../utils/deprecatedEndpoint';

module.exports = function (app) {
  const router = app.loopback.Router();
  const User = app.models.User;

  router.get('/api/github', deprecatedEndpoint);
  router.get('/u/:email', unsubscribeDeprecated);
  router.get('/unsubscribe/:email', unsubscribeDeprecated);
  router.get('/ue/:unsubscribeId', unsubscribeById);
  router.get('/resubscribe/:unsubscribeId', resubscribe);

  app.use(router);

  function unsubscribeDeprecated(req, res) {
    req.flash(
      'info',
      'We are no longer able to process this unsubscription request. ' +
        'Please go to your settings to update your email preferences'
    );
    const { origin } = getRedirectParams(req);
    res.redirectWithFlash(origin);
  }

  function unsubscribeById(req, res, next) {
    const { origin } = getRedirectParams(req);
    const { unsubscribeId } = req.params;
    if (!unsubscribeId) {
      req.flash('info', 'We could not find an account to unsubscribe');
      return res.redirectWithFlash(origin);
    }
    return User.find({ where: { unsubscribeId } }, (err, users) => {
      if (err || !users.length) {
        req.flash('info', 'We could not find an account to unsubscribe');
        return res.redirectWithFlash(origin);
      }
      const updates = users.map(user => {
        return new Promise((resolve, reject) =>
          user.updateAttributes(
            {
              sendQuincyEmail: false
            },
            err => {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            }
          )
        );
      });
      return Promise.all(updates)
        .then(() => {
          req.flash(
            'success',
            "We've successfully updated your email preferences."
          );
          return res.redirectWithFlash(
            `${origin}/unsubscribed/${unsubscribeId}`
          );
        })
        .catch(next);
    });
  }

  function resubscribe(req, res, next) {
    const { unsubscribeId } = req.params;
    const { origin } = getRedirectParams(req);
    if (!unsubscribeId) {
      req.flash(
        'info',
        'We we unable to process this request, please check and try againÍ'
      );
      res.redirect(origin);
    }
    return User.find({ where: { unsubscribeId } }, (err, users) => {
      if (err || !users.length) {
        req.flash('info', 'We could not find an account to resubscribe');
        return res.redirectWithFlash(origin);
      }
      const [user] = users;
      return new Promise((resolve, reject) =>
        user.updateAttributes(
          {
            sendQuincyEmail: true
          },
          err => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          }
        )
      )
        .then(() => {
          req.flash(
            'success',
            "We've successfully updated your email preferences. Thank you " +
              'for resubscribing.'
          );
          return res.redirectWithFlash(origin);
        })
        .catch(next);
    });
  }
};
