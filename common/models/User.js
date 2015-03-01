var R = require('ramda'),
    debug = require('debug')('freecc:models:user');

module.exports = function(User) {

  debug('setting up user hooks');
  User.observe('before save', function setProfile(ctx, next) {
    debug('setting username', ctx.instance.username);
    ctx.instance.username =
      ctx.instance.username.split('.').pop().toLowerCase();
    debug('username set', ctx.instance.username);
    next();
  });
};
