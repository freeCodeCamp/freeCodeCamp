var debug = require('debug')('freecc:models:user');

module.exports = function(User) {
  debug('setting up user hooks');
  /*
   * NOTE(berks): not sure if this is still needed
  User.observe('before save', function setUsername(ctx, next) {
    // set username from twitter
    if (ctx.instance.username && ctx.instance.username.match(/twitter/g)) {
      ctx.instance.username =
        ctx.instance.username.match(/twitter/g) ?
          ctx.instance.username.split('.').pop().toLowerCase() :
          ctx.instance.username;
      debug('username set', ctx.instance.username);
    }
    next();
  });
  */
};
