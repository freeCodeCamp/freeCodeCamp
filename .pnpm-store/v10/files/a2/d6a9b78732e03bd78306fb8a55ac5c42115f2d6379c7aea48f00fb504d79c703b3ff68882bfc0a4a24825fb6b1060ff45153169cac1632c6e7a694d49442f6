/** @typedef {string | string[] | import('webpack').Entry} StaticEntry */
/** @typedef {StaticEntry | import('webpack').EntryFunc} WebpackEntry */

const EntryParseError = new Error(
  [
    '[ReactRefreshPlugin]',
    'Failed to parse the Webpack `entry` object!',
    'Please ensure the `entry` option in your Webpack config is specified.',
  ].join(' ')
);

/**
 * Webpack entries related to socket integrations.
 * They have to run before any code that sets up the error overlay.
 * @type {string[]}
 */
const socketEntries = [
  'webpack-dev-server/client',
  'webpack-hot-middleware/client',
  'webpack-plugin-serve/client',
  'react-dev-utils/webpackHotDevClient',
];

/**
 * Checks if a Webpack entry string is related to socket integrations.
 * @param {string} entry A Webpack entry string.
 * @returns {boolean} Whether the entry is related to socket integrations.
 */
function isSocketEntry(entry) {
  return socketEntries.some((socketEntry) => entry.includes(socketEntry));
}

/**
 * Injects an entry to the bundle for react-refresh.
 * @param {WebpackEntry} [originalEntry] A Webpack entry object.
 * @param {import('./getAdditionalEntries').AdditionalEntries} additionalEntries An object that contains the Webpack entries for prepending and the overlay feature
 * @returns {WebpackEntry} An injected entry object.
 */
function injectRefreshEntry(originalEntry, additionalEntries) {
  const { prependEntries, overlayEntries } = additionalEntries;

  // Single string entry point
  if (typeof originalEntry === 'string') {
    if (isSocketEntry(originalEntry)) {
      return [...prependEntries, originalEntry, ...overlayEntries];
    }

    return [...prependEntries, ...overlayEntries, originalEntry];
  }
  // Single array entry point
  if (Array.isArray(originalEntry)) {
    if (originalEntry.length === 0) {
      throw EntryParseError;
    }

    const socketEntryIndex = originalEntry.findIndex(isSocketEntry);

    let socketAndPrecedingEntries = [];
    if (socketEntryIndex !== -1) {
      socketAndPrecedingEntries = originalEntry.splice(0, socketEntryIndex + 1);
    }

    return [...prependEntries, ...socketAndPrecedingEntries, ...overlayEntries, ...originalEntry];
  }
  // Multiple entry points
  if (typeof originalEntry === 'object') {
    const entries = Object.entries(originalEntry);
    if (entries.length === 0) {
      throw EntryParseError;
    }

    return entries.reduce(
      (acc, [curKey, curEntry]) => ({
        ...acc,
        [curKey]:
          typeof curEntry === 'object' && curEntry.import
            ? {
                ...curEntry,
                import: injectRefreshEntry(curEntry.import, additionalEntries),
              }
            : injectRefreshEntry(curEntry, additionalEntries),
      }),
      {}
    );
  }
  // Dynamic entry points
  if (typeof originalEntry === 'function') {
    return (...args) =>
      Promise.resolve(originalEntry(...args)).then((resolvedEntry) =>
        injectRefreshEntry(resolvedEntry, additionalEntries)
      );
  }

  throw EntryParseError;
}

module.exports = injectRefreshEntry;
module.exports.socketEntries = socketEntries;
