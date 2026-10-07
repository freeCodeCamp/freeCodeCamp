"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finishCommandDocument = finishCommandDocument;
exports.startCommandDocument = startCommandDocument;
const bson_1 = require("../../../bson");
const providers_1 = require("../providers");
/**
 * Generate the finishing command document for authentication. Will be a
 * saslStart or saslContinue depending on the presence of a conversation id.
 */
function finishCommandDocument(token, conversationId) {
    if (conversationId != null) {
        return {
            saslContinue: 1,
            conversationId: conversationId,
            payload: new bson_1.Binary(bson_1.BSON.serialize({ jwt: token }))
        };
    }
    // saslContinue requires a conversationId in the command to be valid so in this
    // case the server allows "step two" to actually be a saslStart with the token
    // as the jwt since the use of the cached value has no correlating conversating
    // on the particular connection.
    return {
        saslStart: 1,
        mechanism: providers_1.AuthMechanism.MONGODB_OIDC,
        payload: new bson_1.Binary(bson_1.BSON.serialize({ jwt: token }))
    };
}
/**
 * Generate the saslStart command document.
 */
function startCommandDocument(credentials) {
    const payload = {};
    if (credentials.username) {
        payload.n = credentials.username;
    }
    return {
        saslStart: 1,
        autoAuthorize: 1,
        mechanism: providers_1.AuthMechanism.MONGODB_OIDC,
        payload: new bson_1.Binary(bson_1.BSON.serialize(payload))
    };
}
//# sourceMappingURL=command_builders.js.map