// @ts-check

/**
 * Result of a call to parseConfiguration.
 *
 * @typedef {Object} ParseConfigurationResult
 * @property {import("markdownlint").Configuration | null} config Configuration object if successful.
 * @property {string | null} message Error message if an error occurred.
 */

/**
 * Parse the content of a configuration file.
 *
 * @param {string} name Name of the configuration file.
 * @param {string} content Configuration content.
 * @param {import("markdownlint").ConfigurationParser[]} [parsers] Parsing function(s).
 * @returns {ParseConfigurationResult} Parse configuration result.
 */
export default function parseConfiguration(name, content, parsers) {
  let config = null;
  let message = null;
  const errors = [];
  let index = 0;
  // Try each parser
  const failed = (parsers || [ JSON.parse ]).every((parser) => {
    try {
      const result = parser(content);
      config = (result && (typeof result === "object") && !Array.isArray(result)) ? result : {};
      // Succeeded
      return false;
      // eslint-disable-next-line jsdoc/reject-any-type
    } catch(/** @type {any} */ error) {
      errors.push(`Parser ${index++}: ${error?.message}`);
    }
    // Failed, try the next parser
    return true;
  });
  // Message if unable to parse
  if (failed) {
    errors.unshift(`Unable to parse '${name}'`);
    message = errors.join("; ");
  }
  return {
    config,
    message
  };
}
