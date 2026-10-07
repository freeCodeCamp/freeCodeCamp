"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callback = void 0;
const fs = require("fs");
const error_1 = require("../../../error");
/** Error for when the token is missing in the environment. */
const TOKEN_MISSING_ERROR = 'OIDC_TOKEN_FILE must be set in the environment.';
/**
 * The callback function to be used in the automated callback workflow.
 * @param params - The OIDC callback parameters.
 * @returns The OIDC response.
 */
const callback = async () => {
    const tokenFile = process.env.OIDC_TOKEN_FILE;
    if (!tokenFile) {
        throw new error_1.MongoAWSError(TOKEN_MISSING_ERROR);
    }
    const token = await fs.promises.readFile(tokenFile, 'utf8');
    return { accessToken: token };
};
exports.callback = callback;
//# sourceMappingURL=token_machine_workflow.js.map