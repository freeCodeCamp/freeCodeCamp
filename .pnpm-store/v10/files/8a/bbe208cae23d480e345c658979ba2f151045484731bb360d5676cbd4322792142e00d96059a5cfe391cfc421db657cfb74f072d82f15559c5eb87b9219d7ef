import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { CreateTokenRequest, CreateTokenResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSOOIDCClientResolvedConfig } from "../SSOOIDCClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateTokenCommand}.
 */
export interface CreateTokenCommandInput extends CreateTokenRequest {
}
/**
 * @public
 *
 * The output of {@link CreateTokenCommand}.
 */
export interface CreateTokenCommandOutput extends CreateTokenResponse, __MetadataBearer {
}
declare const CreateTokenCommand_base: {
    new (input: CreateTokenCommandInput): import("@smithy/smithy-client").CommandImpl<CreateTokenCommandInput, CreateTokenCommandOutput, SSOOIDCClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 * <p>Creates and returns access and refresh tokens for clients that are authenticated using
 *       client secrets. The access token can be used to fetch short-term credentials for the assigned
 *       AWS accounts or to access application APIs using <code>bearer</code> authentication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOOIDCClient, CreateTokenCommand } from "@aws-sdk/client-sso-oidc"; // ES Modules import
 * // const { SSOOIDCClient, CreateTokenCommand } = require("@aws-sdk/client-sso-oidc"); // CommonJS import
 * const client = new SSOOIDCClient(config);
 * const input = { // CreateTokenRequest
 *   clientId: "STRING_VALUE", // required
 *   clientSecret: "STRING_VALUE", // required
 *   grantType: "STRING_VALUE", // required
 *   deviceCode: "STRING_VALUE",
 *   code: "STRING_VALUE",
 *   refreshToken: "STRING_VALUE",
 *   scope: [ // Scopes
 *     "STRING_VALUE",
 *   ],
 *   redirectUri: "STRING_VALUE",
 * };
 * const command = new CreateTokenCommand(input);
 * const response = await client.send(command);
 * // { // CreateTokenResponse
 * //   accessToken: "STRING_VALUE",
 * //   tokenType: "STRING_VALUE",
 * //   expiresIn: Number("int"),
 * //   refreshToken: "STRING_VALUE",
 * //   idToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTokenCommandInput - {@link CreateTokenCommandInput}
 * @returns {@link CreateTokenCommandOutput}
 * @see {@link CreateTokenCommandInput} for command's `input` shape.
 * @see {@link CreateTokenCommandOutput} for command's `response` shape.
 * @see {@link SSOOIDCClientResolvedConfig | config} for SSOOIDCClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link AuthorizationPendingException} (client fault)
 *  <p>Indicates that a request to authorize a client with an access user session token is
 *       pending.</p>
 *
 * @throws {@link ExpiredTokenException} (client fault)
 *  <p>Indicates that the token issued by the service is expired and is no longer valid.</p>
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
 * @throws {@link InvalidGrantException} (client fault)
 *  <p>Indicates that a request contains an invalid grant. This can occur if a client makes a
 *         <a>CreateToken</a> request with an invalid grant type.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a required
 *       parameter might be missing or out of range.</p>
 *
 * @throws {@link InvalidScopeException} (client fault)
 *  <p>Indicates that the scope provided in the request is invalid.</p>
 *
 * @throws {@link SlowDownException} (client fault)
 *  <p>Indicates that the client is making the request too frequently and is more than the
 *       service can handle. </p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>Indicates that the client is not currently authorized to make the request. This can happen
 *       when a <code>clientId</code> is not issued for a public client.</p>
 *
 * @throws {@link UnsupportedGrantTypeException} (client fault)
 *  <p>Indicates that the grant type in the request is not supported by the service.</p>
 *
 * @throws {@link SSOOIDCServiceException}
 * <p>Base exception class for all service exceptions from SSOOIDC service.</p>
 *
 * @example Call OAuth/OIDC /token endpoint for Device Code grant with Secret authentication
 * ```javascript
 * //
 * const input = {
 *   "clientId": "_yzkThXVzLWVhc3QtMQEXAMPLECLIENTID",
 *   "clientSecret": "VERYLONGSECRETeyJraWQiOiJrZXktMTU2NDAyODA5OSIsImFsZyI6IkhTMzg0In0",
 *   "deviceCode": "yJraWQiOiJrZXktMTU2Njk2ODA4OCIsImFsZyI6IkhTMzIn0EXAMPLEDEVICECODE",
 *   "grantType": "urn:ietf:params:oauth:grant-type:device-code"
 * };
 * const command = new CreateTokenCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "accessToken": "aoal-YigITUDiNX1xZwOMXM5MxOWDL0E0jg9P6_C_jKQPxS_SKCP6f0kh1Up4g7TtvQqkMnD-GJiU_S1gvug6SrggAkc0:MGYCMQD3IatVjV7jAJU91kK3PkS/SfA2wtgWzOgZWDOR7sDGN9t0phCZz5It/aes/3C1Zj0CMQCKWOgRaiz6AIhza3DSXQNMLjRKXC8F8ceCsHlgYLMZ7hZidEXAMPLEACCESSTOKEN",
 *   "expiresIn": 1579729529,
 *   "refreshToken": "aorvJYubGpU6i91YnH7Mfo-AT2fIVa1zCfA_Rvq9yjVKIP3onFmmykuQ7E93y2I-9Nyj-A_sVvMufaLNL0bqnDRtgAkc0:MGUCMFrRsktMRVlWaOR70XGMFGLL0SlcCw4DiYveIiOVx1uK9BbD0gvAddsW3UTLozXKMgIxAJ3qxUvjpnlLIOaaKOoa/FuNgqJVvr9GMwDtnAtlh9iZzAkEXAMPLEREFRESHTOKEN",
 *   "tokenType": "Bearer"
 * }
 * *\/
 * // example id: create-token-for-device-code
 * ```
 *
 * @example Call OAuth/OIDC /token endpoint for Refresh Token grant with Secret authentication
 * ```javascript
 * //
 * const input = {
 *   "clientId": "_yzkThXVzLWVhc3QtMQEXAMPLECLIENTID",
 *   "clientSecret": "VERYLONGSECRETeyJraWQiOiJrZXktMTU2NDAyODA5OSIsImFsZyI6IkhTMzg0In0",
 *   "grantType": "refresh_token",
 *   "refreshToken": "aorvJYubGpU6i91YnH7Mfo-AT2fIVa1zCfA_Rvq9yjVKIP3onFmmykuQ7E93y2I-9Nyj-A_sVvMufaLNL0bqnDRtgAkc0:MGUCMFrRsktMRVlWaOR70XGMFGLL0SlcCw4DiYveIiOVx1uK9BbD0gvAddsW3UTLozXKMgIxAJ3qxUvjpnlLIOaaKOoa/FuNgqJVvr9GMwDtnAtlh9iZzAkEXAMPLEREFRESHTOKEN",
 *   "scope": [
 *     "codewhisperer:completions"
 *   ]
 * };
 * const command = new CreateTokenCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "accessToken": "aoal-YigITUDiNX1xZwOMXM5MxOWDL0E0jg9P6_C_jKQPxS_SKCP6f0kh1Up4g7TtvQqkMnD-GJiU_S1gvug6SrggAkc0:MGYCMQD3IatVjV7jAJU91kK3PkS/SfA2wtgWzOgZWDOR7sDGN9t0phCZz5It/aes/3C1Zj0CMQCKWOgRaiz6AIhza3DSXQNMLjRKXC8F8ceCsHlgYLMZ7hZidEXAMPLEACCESSTOKEN",
 *   "expiresIn": 1579729529,
 *   "refreshToken": "aorvJYubGpU6i91YnH7Mfo-AT2fIVa1zCfA_Rvq9yjVKIP3onFmmykuQ7E93y2I-9Nyj-A_sVvMufaLNL0bqnDRtgAkc0:MGUCMFrRsktMRVlWaOR70XGMFGLL0SlcCw4DiYveIiOVx1uK9BbD0gvAddsW3UTLozXKMgIxAJ3qxUvjpnlLIOaaKOoa/FuNgqJVvr9GMwDtnAtlh9iZzAkEXAMPLEREFRESHTOKEN",
 *   "tokenType": "Bearer"
 * }
 * *\/
 * // example id: create-token-for-refresh-token
 * ```
 *
 */
export declare class CreateTokenCommand extends CreateTokenCommand_base {
}
