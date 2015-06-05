var Store = require('thundercats').Store,
    ContextActions = require('./Actions');

var ContextStore = Store.create({
  getInitialValue: function() {
    return {};
  },

  getOperations: function() {
    return ContextActions
      .renderToUser
      .map(function(ctx) {
        return { value: ctx };
      });
  }
});

module.exports = ContextStore;
