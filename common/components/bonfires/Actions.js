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
    debug('getting bonfire for: ', params);
    var Bonfire = getModel('bonfire');
    var bonfireName = params.bonfireName ?
      params.bonfireName.replace(/\-/g, ' ') :
      'meet bonfire';
    Bonfire.find(
      { where: { 'name': new RegExp(bonfireName, 'i') } },
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
