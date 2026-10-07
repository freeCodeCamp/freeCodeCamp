import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { GetCredentialsForIdentityInput, GetCredentialsForIdentityResponse } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCredentialsForIdentityCommand}.
 */
export interface GetCredentialsForIdentityCommandInput extends GetCredentialsForIdentityInput {
}
/**
 * @public
 *
 * The output of {@link GetCredentialsForIdentityCommand}.
 */
export interface GetCredentialsForIdentityCommandOutput extends GetCredentialsForIdentityResponse, __MetadataBearer {
}
declare const GetCredentialsForIdentityCommand_base: {
    new (input: GetCredentialsForIdentityCommandInput): import("@smithy/smithy-client").CommandImpl<GetCredentialsForIdentityCommandInput, GetCredentialsForIdentityCommandOutput, CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 * <p>Returns credentials for the provided identity ID. Any provided logins will be
 *          validated against supported login providers. If the token is for
 *          cognito-identity.amazonaws.com, it will be passed through to AWS Security Token Service
 *          with the appropriate role for the token.</p>
 *          <p>This is a public API. You do not need any credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, GetCredentialsForIdentityCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, GetCredentialsForIdentityCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const input = { // GetCredentialsForIdentityInput
 *   IdentityId: "STRING_VALUE", // required
 *   Logins: { // LoginsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   CustomRoleArn: "STRING_VALUE",
 * };
 * const command = new GetCredentialsForIdentityCommand(input);
 * const response = await client.send(command);
 * // { // GetCredentialsForIdentityResponse
 * //   IdentityId: "STRING_VALUE",
 * //   Credentials: { // Credentials
 * //     AccessKeyId: "STRING_VALUE",
 * //     SecretKey: "STRING_VALUE",
 * //     SessionToken: "STRING_VALUE",
 * //     Expiration: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCredentialsForIdentityCommandInput - {@link GetCredentialsForIdentityCommandInput}
 * @returns {@link GetCredentialsForIdentityCommandOutput}
 * @see {@link GetCredentialsForIdentityCommandInput} for command's `input` shape.
 * @see {@link GetCredentialsForIdentityCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 * @throws {@link ExternalServiceException} (client fault)
 *  <p>An exception thrown when a dependent service such as Facebook or Twitter is not
 *          responding</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Thrown when the service encounters an error during processing the request.</p>
 *
 * @throws {@link InvalidIdentityPoolConfigurationException} (client fault)
 *  <p>Thrown if the identity pool has no role associated for the given auth type
 *          (auth/unauth) or if the AssumeRole fails.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Thrown for missing or bad input parameter(s).</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>Thrown when a user is not authorized to access the requested resource.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>Thrown when a user tries to use a login which is already linked to another
 *          account.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Thrown when the requested resource (for example, a dataset or record) does not
 *          exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Thrown when a request is throttled.</p>
 *
 * @throws {@link CognitoIdentityServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentity service.</p>
 *
 */
export declare class GetCredentialsForIdentityCommand extends GetCredentialsForIdentityCommand_base {
}
