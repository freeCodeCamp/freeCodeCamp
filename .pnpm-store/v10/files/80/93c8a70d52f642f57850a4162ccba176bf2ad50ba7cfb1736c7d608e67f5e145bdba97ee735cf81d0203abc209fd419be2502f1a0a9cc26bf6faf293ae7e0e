import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { RegisterClientRequest, RegisterClientResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSOOIDCClientResolvedConfig } from "../SSOOIDCClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RegisterClientCommand}.
 */
export interface RegisterClientCommandInput extends RegisterClientRequest {
}
/**
 * @public
 *
 * The output of {@link RegisterClientCommand}.
 */
export interface RegisterClientCommandOutput extends RegisterClientResponse, __MetadataBearer {
}
declare const RegisterClientCommand_base: {
    new (input: RegisterClientCommandInput): import("@smithy/smithy-client").CommandImpl<RegisterClientCommandInput, RegisterClientCommandOutput, SSOOIDCClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 * <p>Registers a client with IAM Identity Center. This allows clients to initiate device authorization.
 *       The output should be persisted for reuse through many authentication requests.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOOIDCClient, RegisterClientCommand } from "@aws-sdk/client-sso-oidc"; // ES Modules import
 * // const { SSOOIDCClient, RegisterClientCommand } = require("@aws-sdk/client-sso-oidc"); // CommonJS import
 * const client = new SSOOIDCClient(config);
 * const input = { // RegisterClientRequest
 *   clientName: "STRING_VALUE", // required
 *   clientType: "STRING_VALUE", // required
 *   scopes: [ // Scopes
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new RegisterClientCommand(input);
 * const response = await client.send(command);
 * // { // RegisterClientResponse
 * //   clientId: "STRING_VALUE",
 * //   clientSecret: "STRING_VALUE",
 * //   clientIdIssuedAt: Number("long"),
 * //   clientSecretExpiresAt: Number("long"),
 * //   authorizationEndpoint: "STRING_VALUE",
 * //   tokenEndpoint: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterClientCommandInput - {@link RegisterClientCommandInput}
 * @returns {@link RegisterClientCommandOutput}
 * @see {@link RegisterClientCommandInput} for command's `input` shape.
 * @see {@link RegisterClientCommandOutput} for command's `response` shape.
 * @see {@link SSOOIDCClientResolvedConfig | config} for SSOOIDCClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates that an error from the service occurred while trying to process a
 *       request.</p>
 *
 * @throws {@link InvalidClientMetadataException} (client fault)
 *  <p>Indicates that the client information sent in the request during registration is
 *       invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a required
 *       parameter might be missing or out of range.</p>
 *
 * @throws {@link InvalidScopeException} (client fault)
 *  <p>Indicates that the scope provided in the request is invalid.</p>
 *
 * @throws {@link SSOOIDCServiceException}
 * <p>Base exception class for all service exceptions from SSOOIDC service.</p>
 *
 * @example Call OAuth/OIDC /register-client endpoint
 * ```javascript
 * //
 * const input = {
 *   "clientName": "My IDE Plugin",
 *   "clientType": "public",
 *   "scopes": [
 *     "sso:account:access",
 *     "codewhisperer:completions"
 *   ]
 * };
 * const command = new RegisterClientCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "clientId": "_yzkThXVzLWVhc3QtMQEXAMPLECLIENTID",
 *   "clientIdIssuedAt": 1579725929,
 *   "clientSecret": "VERYLONGSECRETeyJraWQiOiJrZXktMTU2NDAyODA5OSIsImFsZyI6IkhTMzg0In0",
 *   "clientSecretExpiresAt": 1587584729
 * }
 * *\/
 * // example id: register-client
 * ```
 *
 */
export declare class RegisterClientCommand extends RegisterClientCommand_base {
}
