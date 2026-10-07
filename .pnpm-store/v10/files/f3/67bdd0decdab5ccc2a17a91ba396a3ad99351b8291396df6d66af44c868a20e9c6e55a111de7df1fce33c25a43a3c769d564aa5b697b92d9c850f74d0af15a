import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { GetIdentityPoolRolesInput, GetIdentityPoolRolesResponse } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetIdentityPoolRolesCommand}.
 */
export interface GetIdentityPoolRolesCommandInput extends GetIdentityPoolRolesInput {
}
/**
 * @public
 *
 * The output of {@link GetIdentityPoolRolesCommand}.
 */
export interface GetIdentityPoolRolesCommandOutput extends GetIdentityPoolRolesResponse, __MetadataBearer {
}
declare const GetIdentityPoolRolesCommand_base: {
    new (input: GetIdentityPoolRolesCommandInput): import("@smithy/smithy-client").CommandImpl<GetIdentityPoolRolesCommandInput, GetIdentityPoolRolesCommandOutput, CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 * <p>Gets the roles for an identity pool.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, GetIdentityPoolRolesCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, GetIdentityPoolRolesCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const input = { // GetIdentityPoolRolesInput
 *   IdentityPoolId: "STRING_VALUE", // required
 * };
 * const command = new GetIdentityPoolRolesCommand(input);
 * const response = await client.send(command);
 * // { // GetIdentityPoolRolesResponse
 * //   IdentityPoolId: "STRING_VALUE",
 * //   Roles: { // RolesMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   RoleMappings: { // RoleMappingMap
 * //     "<keys>": { // RoleMapping
 * //       Type: "Token" || "Rules", // required
 * //       AmbiguousRoleResolution: "AuthenticatedRole" || "Deny",
 * //       RulesConfiguration: { // RulesConfigurationType
 * //         Rules: [ // MappingRulesList // required
 * //           { // MappingRule
 * //             Claim: "STRING_VALUE", // required
 * //             MatchType: "Equals" || "Contains" || "StartsWith" || "NotEqual", // required
 * //             Value: "STRING_VALUE", // required
 * //             RoleARN: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIdentityPoolRolesCommandInput - {@link GetIdentityPoolRolesCommandInput}
 * @returns {@link GetIdentityPoolRolesCommandOutput}
 * @see {@link GetIdentityPoolRolesCommandInput} for command's `input` shape.
 * @see {@link GetIdentityPoolRolesCommandOutput} for command's `response` shape.
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
export declare class GetIdentityPoolRolesCommand extends GetIdentityPoolRolesCommand_base {
}
