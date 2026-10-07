import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { SetIdentityPoolRolesInput } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetIdentityPoolRolesCommand}.
 */
export interface SetIdentityPoolRolesCommandInput extends SetIdentityPoolRolesInput {
}
/**
 * @public
 *
 * The output of {@link SetIdentityPoolRolesCommand}.
 */
export interface SetIdentityPoolRolesCommandOutput extends __MetadataBearer {
}
declare const SetIdentityPoolRolesCommand_base: {
    new (input: SetIdentityPoolRolesCommandInput): import("@smithy/smithy-client").CommandImpl<SetIdentityPoolRolesCommandInput, SetIdentityPoolRolesCommandOutput, CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 * <p>Sets the roles for an identity pool. These roles are used when making calls to <a>GetCredentialsForIdentity</a> action.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, SetIdentityPoolRolesCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, SetIdentityPoolRolesCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const input = { // SetIdentityPoolRolesInput
 *   IdentityPoolId: "STRING_VALUE", // required
 *   Roles: { // RolesMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   RoleMappings: { // RoleMappingMap
 *     "<keys>": { // RoleMapping
 *       Type: "Token" || "Rules", // required
 *       AmbiguousRoleResolution: "AuthenticatedRole" || "Deny",
 *       RulesConfiguration: { // RulesConfigurationType
 *         Rules: [ // MappingRulesList // required
 *           { // MappingRule
 *             Claim: "STRING_VALUE", // required
 *             MatchType: "Equals" || "Contains" || "StartsWith" || "NotEqual", // required
 *             Value: "STRING_VALUE", // required
 *             RoleARN: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *   },
 * };
 * const command = new SetIdentityPoolRolesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetIdentityPoolRolesCommandInput - {@link SetIdentityPoolRolesCommandInput}
 * @returns {@link SetIdentityPoolRolesCommandOutput}
 * @see {@link SetIdentityPoolRolesCommandInput} for command's `input` shape.
 * @see {@link SetIdentityPoolRolesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Thrown if there are parallel requests to modify a resource.</p>
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
export declare class SetIdentityPoolRolesCommand extends SetIdentityPoolRolesCommand_base {
}
