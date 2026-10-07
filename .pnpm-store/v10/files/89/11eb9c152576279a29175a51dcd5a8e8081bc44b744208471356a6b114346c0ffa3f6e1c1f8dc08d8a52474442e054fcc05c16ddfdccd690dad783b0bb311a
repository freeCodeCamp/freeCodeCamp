import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

/**
 * @fileoverview Universal module importer
 */

//-----------------------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(__dirname + "/");
const { ModuleImporter } = require("./module-importer.cjs");

export { ModuleImporter };
