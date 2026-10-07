import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { SetPrincipalTagAttributeMapInput, SetPrincipalTagAttributeMapResponse } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetPrincipalTagAttributeMapCommand}.
 */
export interface SetPrincipalTagAttributeMapCommandInput extends SetPrincipalTagAttributeMapInput {
}
/**
 * @public
 *
 * The output of {@link SetPrincipalTagAttributeMapCommand}.
 */
export interface SetPrincipalTagAttributeMapCommandOutput extends SetPrincipalTagAttributeMapResponse, __MetadataBearer {
}
declare const SetPrincipalTagAttributeMapCommand_base: {
    new (input: SetPrincipalTagAttributeMapCommandInput): import("@smithy/smithy-client").CommandImpl<SetPrincipalTagAttributeMapCommandInput, SetPrincipalTagAttributeMapCommandOutput, CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 * <p>You can use this operation to use default (username and clientID) attribute or custom attribute mappings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, SetPrincipalTagAttributeMapCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, SetPrincipalTagAttributeMapCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const input = { // SetPrincipalTagAttributeMapInput
 *   IdentityPoolId: "STRING_VALUE", // required
 *   IdentityProviderName: "STRING_VALUE", // required
 *   UseDefaults: true || false,
 *   PrincipalTags: { // PrincipalTags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new SetPrincipalTagAttributeMapCommand(input);
 * const response = await client.send(command);
 * // { // SetPrincipalTagAttributeMapResponse
 * //   IdentityPoolId: "STRING_VALUE",
 * //   IdentityProviderName: "STRING_VALUE",
 * //   UseDefaults: true || false,
 * //   PrincipalTags: { // PrincipalTags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param SetPrincipalTagAttributeMapCommandInput - {@link SetPrincipalTagAttributeMapCommandInput}
 * @returns {@link SetPrincipalTagAttributeMapCommandOutput}
 * @see {@link SetPrincipalTagAttributeMapCommandInput} for command's `input` shape.
 * @see {@link SetPrincipalTagAttributeMapCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Thrown when the service encounters an error during processing the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Thrown for missing or bad input parameter(s).</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>Thrown when a user is not authorized to access the requested resource.</p>
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
export declare class SetPrincipalTagAttributeMapCommand extends SetPrincipalTagAttributeMapCommand_base {
}
