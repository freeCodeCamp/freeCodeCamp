var debug = require('debug')('freecc:context'),
    Action = require('thundercats').Action,
    waitFor = require('../../utils/waitFor'),
    BonfireActions = require('../bonfires/Actions'),
    BonfireStore = require('../bonfires/Store');

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
    BonfireActions.getNextBonfire(ctx.state.params);
    waitFor(BonfireStore)
      .subscribe(function() {
        actions.renderToUser(ctx);
      });
  });

module.exports = actions;
