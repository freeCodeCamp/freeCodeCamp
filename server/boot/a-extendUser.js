import { Observable } from 'rx';
import debugFactory from 'debug';
import { isEmail } from 'validator';
import path from 'path';

const debug = debugFactory('fcc:user:remote');
const isDev = process.env.NODE_ENV !== 'production';

function destroyAllRelated(id, Model) {
  return Observable.fromNodeCallback(
    Model.destroyAll,
    Model
  )({ userId: id });
}

module.exports = function(app) {
  var User = app.models.User;
  var UserIdentity = app.models.UserIdentity;
  var UserCredential = app.models.UserCredential;
  User.observe('before delete', function(ctx, next) {
    debug('removing user', ctx.where);
    var id = ctx.where && ctx.where.id ? ctx.where.id : null;
    if (!id) {
      return next();
    }
    return Observable.combineLatest(
      destroyAllRelated(id, UserIdentity),
      destroyAllRelated(id, UserCredential),
      function(identData, credData) {
        return {
          identData: identData,
          credData: credData
        };
      }
    )
      .subscribe(
        function(data) {
          debug('deleted', data);
        },
        function(err) {
          debug('error deleting user %s stuff', id, err);
          next(err);
        },
        function() {
          debug('user stuff deleted for user %s', id);
          next();
        }
      );
  });

  // set email varified false on user email signup
  // should not be set with oauth signin methods
  User.beforeRemote('create', function(ctx, user, next) {
    var body = ctx.req.body;
    if (body) {
      // this is workaround for preventing a server crash
      // refer strongloop/loopback/#1364
      if (body.password === '') {
        body.password = null;
      }
      body.emailVerified = false;
    }
    next();
  });

  // send welcome email to new camper
  User.afterRemote('create', function({ req, res }, user, next) {
    debug('user created, sending email');
    if (!user.email || !isEmail(user.email)) { return next(); }
    const redirect = req.session && req.session.returnTo ?
      req.session.returnTo :
      '/';

    var mailOptions = {
      type: 'email',
      to: user.email,
      from: 'Team@freecodecamp.com',
      subject: 'Welcome to freeCodeCamp!',
      protocol: isDev ? null : 'https',
      host: isDev ? 'localhost' : 'freecodecamp.com',
      port: isDev ? null : 443,
      template: path.join(
        __dirname,
        '..',
        'views',
        'emails',
        'a-extend-user-welcome.ejs'
      ),
      redirect: '/email-signin'
    };

    debug('sending welcome email');
    return user.verify(mailOptions, function(err) {
      if (err) { return next(err); }
      req.flash('success', {
        msg: [ 'Congratulations ! We\'ve created your account. ',
               'Please check your email. We sent you a link that you can ',
               'click to verify your email address and then login.'
             ].join('')
      });
      return res.redirect(redirect);
    });
  });
};
