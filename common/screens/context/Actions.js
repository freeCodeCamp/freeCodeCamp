var debug = require('debug')('freecc:context'),
    BonfireActions = require('../bonfires/Actions'),
    BonfireStore = require('../bonfires/Store');

var {
  Action,
  waitFor
} = require('thundercats');

var actions = Action.createActions([
  'setContext',
  'renderToUser'
]);

actions
  .setContext
  .filter(function(ctx) {
    return ctx.state.path.indexOf('/bonfire') !== -1;
  })
  .subscribe(function(ctx) {
    debug('set ctx');
    BonfireActions.getBonfire(ctx.state.params);
    waitFor(BonfireStore)
      .firstOrDefault()
      .catch(function(err) {
        // handle timeout error
        debug('err', err);
      })
      .subscribe(function() {
        actions.renderToUser(ctx);
      });
  });

module.exports = actions;
