import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { GetRoleCredentialsRequest, GetRoleCredentialsResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSOClientResolvedConfig } from "../SSOClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRoleCredentialsCommand}.
 */
export interface GetRoleCredentialsCommandInput extends GetRoleCredentialsRequest {
}
/**
 * @public
 *
 * The output of {@link GetRoleCredentialsCommand}.
 */
export interface GetRoleCredentialsCommandOutput extends GetRoleCredentialsResponse, __MetadataBearer {
}
declare const GetRoleCredentialsCommand_base: {
    new (input: GetRoleCredentialsCommandInput): import("@smithy/smithy-client").CommandImpl<GetRoleCredentialsCommandInput, GetRoleCredentialsCommandOutput, SSOClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 * <p>Returns the STS short-term credentials for a given role name that is assigned to the
 *       user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOClient, GetRoleCredentialsCommand } from "@aws-sdk/client-sso"; // ES Modules import
 * // const { SSOClient, GetRoleCredentialsCommand } = require("@aws-sdk/client-sso"); // CommonJS import
 * const client = new SSOClient(config);
 * const input = { // GetRoleCredentialsRequest
 *   roleName: "STRING_VALUE", // required
 *   accountId: "STRING_VALUE", // required
 *   accessToken: "STRING_VALUE", // required
 * };
 * const command = new GetRoleCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // GetRoleCredentialsResponse
 * //   roleCredentials: { // RoleCredentials
 * //     accessKeyId: "STRING_VALUE",
 * //     secretAccessKey: "STRING_VALUE",
 * //     sessionToken: "STRING_VALUE",
 * //     expiration: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRoleCredentialsCommandInput - {@link GetRoleCredentialsCommandInput}
 * @returns {@link GetRoleCredentialsCommandOutput}
 * @see {@link GetRoleCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetRoleCredentialsCommandOutput} for command's `response` shape.
 * @see {@link SSOClientResolvedConfig | config} for SSOClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that a problem occurred with the input to the request. For example, a required
 *       parameter might be missing or out of range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Indicates that the request is being made too frequently and is more than what the server
 *       can handle.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Indicates that the request is not authorized. This can happen due to an invalid access
 *       token in the request.</p>
 *
 * @throws {@link SSOServiceException}
 * <p>Base exception class for all service exceptions from SSO service.</p>
 *
 */
export declare class GetRoleCredentialsCommand extends GetRoleCredentialsCommand_base {
}
