"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plain = void 0;
const bson_1 = require("../../bson");
const error_1 = require("../../error");
const utils_1 = require("../../utils");
const auth_provider_1 = require("./auth_provider");
class Plain extends auth_provider_1.AuthProvider {
    async auth(authContext) {
        const { connection, credentials } = authContext;
        if (!credentials) {
            throw new error_1.MongoMissingCredentialsError('AuthContext must provide credentials.');
        }
        const { username, password } = credentials;
        const payload = new bson_1.Binary(Buffer.from(`\x00${username}\x00${password}`));
        const command = {
            saslStart: 1,
            mechanism: 'PLAIN',
            payload: payload,
            autoAuthorize: 1
        };
        await connection.command((0, utils_1.ns)('$external.$cmd'), command, undefined);
    }
}
exports.Plain = Plain;
//# sourceMappingURL=plain.js.map