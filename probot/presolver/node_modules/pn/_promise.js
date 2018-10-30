// Allow the user to customize the Promise type returned by this library.
var mypromise = global.Promise;
module.exports = function getOrSetPromise(p) {
    if (p) { mypromise = p; }
    return mypromise;
};
