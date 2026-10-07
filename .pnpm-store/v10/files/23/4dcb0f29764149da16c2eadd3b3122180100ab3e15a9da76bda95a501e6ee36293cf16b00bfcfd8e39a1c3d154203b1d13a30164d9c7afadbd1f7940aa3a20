"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromWebToken = void 0;
const fromWebToken = (init) => async () => {
    var _a;
    (_a = init.logger) === null || _a === void 0 ? void 0 : _a.debug("@aws-sdk/credential-provider-web-identity", "fromWebToken");
    const { roleArn, roleSessionName, webIdentityToken, providerId, policyArns, policy, durationSeconds } = init;
    let { roleAssumerWithWebIdentity } = init;
    if (!roleAssumerWithWebIdentity) {
        const { getDefaultRoleAssumerWithWebIdentity } = await Promise.resolve().then(() => __importStar(require("./loadSts")));
        roleAssumerWithWebIdentity = getDefaultRoleAssumerWithWebIdentity({
            ...init.clientConfig,
            credentialProviderLogger: init.logger,
            parentClientConfig: init.parentClientConfig,
        }, init.clientPlugins);
    }
    return roleAssumerWithWebIdentity({
        RoleArn: roleArn,
        RoleSessionName: roleSessionName !== null && roleSessionName !== void 0 ? roleSessionName : `aws-sdk-js-session-${Date.now()}`,
        WebIdentityToken: webIdentityToken,
        ProviderId: providerId,
        PolicyArns: policyArns,
        Policy: policy,
        DurationSeconds: durationSeconds,
    });
};
exports.fromWebToken = fromWebToken;
