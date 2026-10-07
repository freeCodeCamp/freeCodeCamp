import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { StartDeviceAuthorizationRequest, StartDeviceAuthorizationResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSOOIDCClientResolvedConfig } from "../SSOOIDCClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartDeviceAuthorizationCommand}.
 */
export interface StartDeviceAuthorizationCommandInput extends StartDeviceAuthorizationRequest {
}
/**
 * @public
 *
 * The output of {@link StartDeviceAuthorizationCommand}.
 */
export interface StartDeviceAuthorizationCommandOutput extends StartDeviceAuthorizationResponse, __MetadataBearer {
}
declare const StartDeviceAuthorizationCommand_base: {
    new (input: StartDeviceAuthorizationCommandInput): import("@smithy/smithy-client").CommandImpl<StartDeviceAuthorizationCommandInput, StartDeviceAuthorizationCommandOutput, SSOOIDCClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 * <p>Initiates device authorization by requesting a pair of verification codes from the
 *       authorization service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOOIDCClient, StartDeviceAuthorizationCommand } from "@aws-sdk/client-sso-oidc"; // ES Modules import
 * // const { SSOOIDCClient, StartDeviceAuthorizationCommand } = require("@aws-sdk/client-sso-oidc"); // CommonJS import
 * const client = new SSOOIDCClient(config);
 * const input = { // StartDeviceAuthorizationRequest
 *   clientId: "STRING_VALUE", // required
 *   clientSecret: "STRING_VALUE", // required
 *   startUrl: "STRING_VALUE", // required
 * };
 * const command = new StartDeviceAuthorizationCommand(input);
 * const response = await client.send(command);
 * // { // StartDeviceAuthorizationResponse
 * //   deviceCode: "STRING_VALUE",
 * //   userCode: "STRING_VALUE",
 * //   verificationUri: "STRING_VALUE",
 * //   verificationUriComplete: "STRING_VALUE",
 * //   expiresIn: Number("int"),
 * //   interval: Number("int"),
 * // };
 *
 * ```
 *
 * @param StartDeviceAuthorizationCommandInput - {@link StartDeviceAuthorizationCommandInput}
 * @returns {@link StartDeviceAuthorizationCommandOutput}
 * @see {@link StartDeviceAuthorizationCommandInput} for command's `input` shape.
 * @see {@link StartDeviceAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link SSOOIDCClientResolvedConfig | config} for SSOOIDCClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates that an error from the service occurred while trying to process a
 *       request.</p>
 *
 * @throws {@link InvalidClientException} (client fault)
 *  <p>Indicates that the <code>clientId</code> or <code>clientSecret</code> in the request is
 *       invalid. For example, this can occur when a client sends an incorrect <code>clientId</code> or
 *       an expired <code>clientSecret</code>.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a required
 *       parameter might be missing or out of range.</p>
 *
 * @throws {@link SlowDownException} (client fault)
 *  <p>Indicates that the client is making the request too frequently and is more than the
 *       service can handle. </p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>Indicates that the client is not currently authorized to make the request. This can happen
 *       when a <code>clientId</code> is not issued for a public client.</p>
 *
 * @throws {@link SSOOIDCServiceException}
 * <p>Base exception class for all service exceptions from SSOOIDC service.</p>
 *
 * @example Call OAuth/OIDC /start-device-authorization endpoint
 * ```javascript
 * //
 * const input = {
 *   "clientId": "_yzkThXVzLWVhc3QtMQEXAMPLECLIENTID",
 *   "clientSecret": "VERYLONGSECRETeyJraWQiOiJrZXktMTU2NDAyODA5OSIsImFsZyI6IkhTMzg0In0",
 *   "startUrl": "https://identitycenter.amazonaws.com/ssoins-111111111111"
 * };
 * const command = new StartDeviceAuthorizationCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "deviceCode": "yJraWQiOiJrZXktMTU2Njk2ODA4OCIsImFsZyI6IkhTMzIn0EXAMPLEDEVICECODE",
 *   "expiresIn": 1579729529,
 *   "interval": 1,
 *   "userCode": "makdfsk83yJraWQiOiJrZXktMTU2Njk2sImFsZyI6IkhTMzIn0EXAMPLEUSERCODE",
 *   "verificationUri": "https://device.sso.us-west-2.amazonaws.com",
 *   "verificationUriComplete": "https://device.sso.us-west-2.amazonaws.com?user_code=makdfsk83yJraWQiOiJrZXktMTU2Njk2sImFsZyI6IkhTMzIn0EXAMPLEUSERCODE"
 * }
 * *\/
 * // example id: start-device-authorization
 * ```
 *
 */
export declare class StartDeviceAuthorizationCommand extends StartDeviceAuthorizationCommand_base {
}
