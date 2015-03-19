var Action = require('thundercats').Action,
  getModel = require('../../utils/getModel'),
  debug = require('debug')('freecc:common:bonfires');

var BonfireActions = Action.createActions([
  'testBonfire',
  'setBonfire',
  'getNextBonfire',
  'handleBonfireError',
  'openCompletionModal'
]);

BonfireActions
  .getNextBonfire
  .subscribe(function(params) {
    var Bonfire = getModel('bonfires');
    var bonfireName = params.bonfireName ?
      params.bonfireName.replace(/\-/g, ' ') :
      'meet bonfire';
    debug('getting bonfire for: ', bonfireName);
    var regQuery = { name: { like: bonfireName, options: 'i' } };
    debug('Count of all bonfires, are we looking in the right collection?', Bonfire.count());
    Bonfire.find(
      { where: regQuery },
      function(err, bonfire) {
        if (err) {
          return debug('bonfire get err', err);
        }
        if (!bonfire || bonfire.length < 1) {
          return debug('404 no bonfire found for ', bonfireName);
        }
        bonfire = bonfire.pop();
        if (bonfire) {
          debug(
            'found bonfire %s for route %s',
            bonfire.name,
            bonfireName
          );
        }
        BonfireActions.setBonfire(bonfire);
      }
    );
  });

module.exports = BonfireActions;
