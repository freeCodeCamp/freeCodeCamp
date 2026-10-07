import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { GetIdInput, GetIdResponse } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetIdCommand}.
 */
export interface GetIdCommandInput extends GetIdInput {
}
/**
 * @public
 *
 * The output of {@link GetIdCommand}.
 */
export interface GetIdCommandOutput extends GetIdResponse, __MetadataBearer {
}
declare const GetIdCommand_base: {
    new (input: GetIdCommandInput): import("@smithy/smithy-client").CommandImpl<GetIdCommandInput, GetIdCommandOutput, CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 * <p>Generates (or retrieves) a Cognito ID. Supplying multiple logins will create an
 *          implicit linked account.</p>
 *          <p>This is a public API. You do not need any credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, GetIdCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, GetIdCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const input = { // GetIdInput
 *   AccountId: "STRING_VALUE",
 *   IdentityPoolId: "STRING_VALUE", // required
 *   Logins: { // LoginsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new GetIdCommand(input);
 * const response = await client.send(command);
 * // { // GetIdResponse
 * //   IdentityId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIdCommandInput - {@link GetIdCommandInput}
 * @returns {@link GetIdCommandOutput}
 * @see {@link GetIdCommandInput} for command's `input` shape.
 * @see {@link GetIdCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 * @throws {@link ExternalServiceException} (client fault)
 *  <p>An exception thrown when a dependent service such as Facebook or Twitter is not
 *          responding</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Thrown when the service encounters an error during processing the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Thrown for missing or bad input parameter(s).</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Thrown when the total number of user pools has exceeded a preset limit.</p>
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
export declare class GetIdCommand extends GetIdCommand_base {
}
