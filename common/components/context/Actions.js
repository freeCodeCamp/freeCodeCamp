var debug = require('debug')('freecc:context'),

    // # util
    createActions = require('../../utils/createActions');

var actions = createActions([
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
    actions.renderToUser(ctx);
  });

module.exports = actions;
