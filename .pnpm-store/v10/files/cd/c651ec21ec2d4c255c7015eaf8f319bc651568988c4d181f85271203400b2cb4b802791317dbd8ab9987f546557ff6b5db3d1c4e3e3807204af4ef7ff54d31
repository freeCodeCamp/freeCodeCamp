"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenCache = void 0;
const error_1 = require("../../../error");
class MongoOIDCError extends error_1.MongoDriverError {
}
/** @internal */
class TokenCache {
    get hasAccessToken() {
        return !!this.accessToken;
    }
    get hasRefreshToken() {
        return !!this.refreshToken;
    }
    get hasIdpInfo() {
        return !!this.idpInfo;
    }
    getAccessToken() {
        if (!this.accessToken) {
            throw new MongoOIDCError('Attempted to get an access token when none exists.');
        }
        return this.accessToken;
    }
    getRefreshToken() {
        if (!this.refreshToken) {
            throw new MongoOIDCError('Attempted to get a refresh token when none exists.');
        }
        return this.refreshToken;
    }
    getIdpInfo() {
        if (!this.idpInfo) {
            throw new MongoOIDCError('Attempted to get IDP information when none exists.');
        }
        return this.idpInfo;
    }
    put(response, idpInfo) {
        this.accessToken = response.accessToken;
        this.refreshToken = response.refreshToken;
        this.expiresInSeconds = response.expiresInSeconds;
        if (idpInfo) {
            this.idpInfo = idpInfo;
        }
    }
    removeAccessToken() {
        this.accessToken = undefined;
    }
    removeRefreshToken() {
        this.refreshToken = undefined;
    }
}
exports.TokenCache = TokenCache;
//# sourceMappingURL=token_cache.js.map