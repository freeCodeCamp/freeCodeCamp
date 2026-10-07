// @flow strict-local

let bundleURL: ?string = null;
function getBundleURLCached(): string {
  if (bundleURL == null) {
    bundleURL = _getBundleURL();
  }

  return bundleURL;
}

function _getBundleURL(): string {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    let stack: string = typeof err.stack === 'string' ? err.stack : '';
    let matches = stack.match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

export function getBaseURL(url: ?string): string {
  if (url == null) {
    return '/';
  }

  return url.replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

export const getBundleURL = getBundleURLCached;
