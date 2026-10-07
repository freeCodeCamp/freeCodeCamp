import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

// TODO: mathml-tag-names v3 is a pure ESM package,
// so we cannot update it while supporting both ESM and CommonJS.
//
// In addition, mathml-tag-names v2 provides only a JSON file,
// so ESM cannot import it (raises the "ERR_IMPORT_ASSERTION_TYPE_MISSING" error).
/** @type {string[]} */
const mathMLTags = require('mathml-tag-names/index.json');

export default mathMLTags;
