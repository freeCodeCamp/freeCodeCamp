var bundleURL = {};
function getBundleURLCached(id) {
  var value = bundleURL[id];
  if (!value) {
    value = getBundleURL();
    bundleURL[id] = value;
  }

  return value;
}

function getBundleURL() {
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(
      /(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g,
    );
    if (matches) {
      // The first two stack frames will be this function and getBundleURLCached.
      // Use the 3rd one, which will be a runtime in the original bundle.
      return getBaseURL(matches[2]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return (
    ('' + url).replace(
      /^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,
      '$1',
    ) + '/'
  );
}

// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
  let matches = ('' + url).match(
    /(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/,
  );
  if (!matches) {
    throw new Error('Origin not found');
  }
  return matches[0];
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;
