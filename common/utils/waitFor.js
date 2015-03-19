var Rx = require('rx'),
    debug = require('debug')('freecc:waitFor');

module.exports = waitFor;

// take an array of observables
// convert them to hot observables
// then wait for each one to publish a value
// returns an observable
function waitFor(observables) {
  observables = [].slice.call(arguments);
  debug('setting waitFor');
  return Rx.Observable.combineLatest(
    observables.map(function(obs) {
      var published = obs.publish();
      published.connect();
      return published;
    }),
    function() {
      debug('waitFor complete');
      return true;
    }
  )
  // only listen for one value
    .firstOrDefault();
}
