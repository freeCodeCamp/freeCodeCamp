module.exports = log;

var start = Date.now();

function log(emitter, name) {
  return function(event) {
    emitter.on(event, function() {
      var lag = '' + (Math.round((Date.now() - start) / 100) / 10) + ' sec';
      console.log('[%s] %s => %s', lag, name, event);
    });
  }
}
