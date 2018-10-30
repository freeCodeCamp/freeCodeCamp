"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.createApp = function (options) {
    return function () {
        var payload = {
            exp: Math.floor(Date.now() / 1000) + 60,
            iat: Math.floor(Date.now() / 1000),
            iss: options.id // GitHub App ID
        };
        // Sign with RSA SHA256
        return jsonwebtoken_1.default.sign(payload, options.cert, { algorithm: 'RS256' });
    };
};
//# sourceMappingURL=github-app.js.map