var Action = require('rx-flux').Action;

module.exports = createActions;

function createActions(actions) {
  if (!Array.isArray(actions)) {
    actions = [actions];
  }
  var Actions = actions.reduce(function(_Actions, action) {
    _Actions[action] = Action.create();
    return _Actions;
  }, {});

  return Actions;
}
