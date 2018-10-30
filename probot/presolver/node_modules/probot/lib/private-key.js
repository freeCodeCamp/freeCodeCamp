"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
// tslint:disable-next-line:no-var-requires
var isBase64 = require('is-base64');
var hint = "please use:\n  * `--private-key=/path/to/private-key` flag, or\n  * `PRIVATE_KEY` environment variable, or\n  * `PRIVATE_KEY_PATH` environment variable\n";
/**
 * Finds a private key through various user-(un)specified methods.
 * Order of precedence:
 * 1. Explicit path (CLI option)
 * 2. `PRIVATE_KEY` env var
 * 3. `PRIVATE_KEY_PATH` env var
 * 4. Any file w/ `.pem` extension in current working dir
 * @param filepath - Explicit, user-defined path to keyfile
 * @returns Private key
 * @private
 */
function findPrivateKey(filepath) {
    if (filepath) {
        return fs_1.default.readFileSync(filepath);
    }
    if (process.env.PRIVATE_KEY) {
        var cert = process.env.PRIVATE_KEY;
        if (isBase64(cert)) {
            // Decode base64-encoded certificate
            cert = Buffer.from(cert, 'base64').toString();
        }
        var begin = '-----BEGIN RSA PRIVATE KEY-----';
        var end = '-----END RSA PRIVATE KEY-----';
        if (cert.includes(begin) && cert.includes(end)) {
            // Full key with new lines
            return cert.replace(/\\n/g, '\n');
        }
        throw new Error('The contents of \`PRIVATE_KEY\` could not be validated. Please check to ensure you have copied the contents of the .pem file correctly.');
    }
    if (process.env.PRIVATE_KEY_PATH) {
        return fs_1.default.readFileSync(process.env.PRIVATE_KEY_PATH);
    }
    var pemFiles = fs_1.default.readdirSync(process.cwd())
        .filter(function (path) { return path.endsWith('.pem'); });
    if (pemFiles.length > 1) {
        throw new Error("Found several private keys: " + pemFiles.join(', ') + ". " +
            ("To avoid ambiguity " + hint));
    }
    else if (pemFiles[0]) {
        return findPrivateKey(pemFiles[0]);
    }
    return null;
}
exports.findPrivateKey = findPrivateKey;
//# sourceMappingURL=private-key.js.map