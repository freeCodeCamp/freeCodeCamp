var Action = require('thundercats').Action,
    executeBonfire = require('./executeBonfire'),
    getModel = require('../../utils/getModel'),
    debug = require('debug')('freecc:common:bonfires');

var BonfireActions = Action.createActions([
  'setUserCode',
  'testUserCode',
  'setResults',
  'setDisplay',
  'setBonfire',
  'getBonfire',
  'handleBonfireError',
  'openCompletionModal'
]);

BonfireActions
  .getBonfire
  .subscribe(function(params) {
    var Bonfire = getModel('bonfire');
    var bonfireName = params.bonfireName ?
      params.bonfireName.replace(/\-/g, ' ') :
      'meet bonfire';
    debug('getting bonfire for: ', bonfireName);
    var regQuery = { name: { like: bonfireName, options: 'i' } };
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


BonfireActions
  .testUserCode
  .subscribe(function({ userCode, tests }) {
    debug('test bonfire');
    executeBonfire(userCode, tests, function(err, { output, results }) {
      if (err) {
        debug('error running tests', err);
        return BonfireActions.setDisplay(err);
      }
      BonfireActions.setDisplay(output);
      BonfireActions.setResults(results);
    });
  });

module.exports = BonfireActions;
