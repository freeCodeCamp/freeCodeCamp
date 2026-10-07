/**
 * Gets entry point of a supported socket integration.
 * @param {'wds' | 'whm' | 'wps' | string} integrationType A valid socket integration type or a path to a module.
 * @returns {string | undefined} Path to the resolved integration entry point.
 */
function getIntegrationEntry(integrationType) {
  let resolvedEntry;
  switch (integrationType) {
    case 'whm': {
      resolvedEntry = 'webpack-hot-middleware/client';
      break;
    }
    case 'wps': {
      resolvedEntry = 'webpack-plugin-serve/client';
      break;
    }
  }

  return resolvedEntry;
}

module.exports = getIntegrationEntry;
