/**
 * @constructor
 */
function AggregateError(errors, message) {
  (this.name = 'AggregateError'), (this.errors = errors);
  this.message = message || '';
}
AggregateError.prototype = Error.prototype;

function any(arr) {
  var P = this;
  return new P(function(resolve, reject) {
    if (!(arr && typeof arr.length !== 'undefined')) {
      return reject(new TypeError('Promise.any accepts an array'));
    }

    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return reject();

    var rejectionReasons = [];
    for (var i = 0; i < args.length; i++) {
      try {
        P.resolve(args[i])
          .then(resolve)
          .catch(function(error) {
            rejectionReasons.push(error);
            if (rejectionReasons.length === args.length) {
              reject(
                new AggregateError(
                  rejectionReasons,
                  'All promises were rejected'
                )
              );
            }
          });
      } catch (ex) {
        reject(ex);
      }
    }
  });
}

export default any;
