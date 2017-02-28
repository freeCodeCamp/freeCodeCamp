var _ref, count, starts, compact, last;
_ref = test, count = _ref.count, starts = _ref.starts, compact = _ref.compact, last = _ref.last;


var channels = [{ 'one': 'channel' }];
for ( var i = 0, channel, len = channels.length; channel = channels[i], i < len; i++ ) {
    // Doing stuff
}


// !!
// see parser.js [exports.comma]
// comma operator breaks jshint...
// the next line should result in an error (parser or jshint)
func tion Model(data, block) {
    // ...
}
Model.create = function(base, options) {
    // If options is falsy, base wasn't provided so args need shuffling.
    options || (options = base, base = Model); // <-- massive amount of JSHint complaining here!
    console.log(base, options);
    // ...
};


function gh56() {
    var args = Array.prototype.slice.call( arguments );
    args[0] = error( args[0] );

    callback && callback.apply( commit, (args.push( commit ), args) );
}

function gh676() {
  var c = b;
  b = a,
  if (b) {
    a = c;
  }
  return a;
}

function gh771() {
  gh676(),
}

// GH-793.

function next() {}
next.bind(null, new Error());
next.bind(null, typeof gh56);