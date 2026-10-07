"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthProvider = exports.AuthContext = void 0;
const error_1 = require("../../error");
/**
 * Context used during authentication
 * @internal
 */
class AuthContext {
    constructor(connection, credentials, options) {
        /** If the context is for reauthentication. */
        this.reauthenticating = false;
        this.connection = connection;
        this.credentials = credentials;
        this.options = options;
    }
}
exports.AuthContext = AuthContext;
/**
 * Provider used during authentication.
 * @internal
 */
class AuthProvider {
    /**
     * Prepare the handshake document before the initial handshake.
     *
     * @param handshakeDoc - The document used for the initial handshake on a connection
     * @param authContext - Context for authentication flow
     */
    async prepare(handshakeDoc, _authContext) {
        return handshakeDoc;
    }
    /**
     * Reauthenticate.
     * @param context - The shared auth context.
     */
    async reauth(context) {
        if (context.reauthenticating) {
            throw new error_1.MongoRuntimeError('Reauthentication already in progress.');
        }
        try {
            context.reauthenticating = true;
            await this.auth(context);
        }
        finally {
            context.reauthenticating = false;
        }
    }
}
exports.AuthProvider = AuthProvider;
//# sourceMappingURL=auth_provider.js.map