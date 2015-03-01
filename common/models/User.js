var R = require('ramda'),
    debug = require('debug')('freecc:models:user');

module.exports = function(User) {

  debug('setting up user hooks');
  User.observe('before save', function setProfile(ctx, next) {
    debug('setting username', ctx.instance.username);
    ctx.instance.username =
      ctx.instance.username.match(/twitter/g) ?
      ctx.instance.username.split('.').pop().toLowerCase() : ctx.instance.username;
    debug('username set', ctx.instance.username);
    next();
  });
};
