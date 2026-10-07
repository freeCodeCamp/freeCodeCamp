var mapping = {};

function register(pairs) {
  var keys = Object.keys(pairs);
  for (var i = 0; i < keys.length; i++) {
    mapping[keys[i]] = pairs[keys[i]];
  }
}

function resolve(id) {
  var resolved = mapping[id];
  if (resolved == null) {
    throw new Error('Could not resolve bundle with id ' + id);
  }
  return resolved;
}

module.exports.register = register;
module.exports.resolve = resolve;
