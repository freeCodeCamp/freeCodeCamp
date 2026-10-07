"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.X509 = void 0;
const error_1 = require("../../error");
const utils_1 = require("../../utils");
const auth_provider_1 = require("./auth_provider");
class X509 extends auth_provider_1.AuthProvider {
    async prepare(handshakeDoc, authContext) {
        const { credentials } = authContext;
        if (!credentials) {
            throw new error_1.MongoMissingCredentialsError('AuthContext must provide credentials.');
        }
        return { ...handshakeDoc, speculativeAuthenticate: x509AuthenticateCommand(credentials) };
    }
    async auth(authContext) {
        const connection = authContext.connection;
        const credentials = authContext.credentials;
        if (!credentials) {
            throw new error_1.MongoMissingCredentialsError('AuthContext must provide credentials.');
        }
        const response = authContext.response;
        if (response?.speculativeAuthenticate) {
            return;
        }
        await connection.command((0, utils_1.ns)('$external.$cmd'), x509AuthenticateCommand(credentials), undefined);
    }
}
exports.X509 = X509;
function x509AuthenticateCommand(credentials) {
    const command = { authenticate: 1, mechanism: 'MONGODB-X509' };
    if (credentials.username) {
        command.user = credentials.username;
    }
    return command;
}
//# sourceMappingURL=x509.js.map