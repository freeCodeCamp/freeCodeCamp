import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { CreateTokenWithIAMRequest, CreateTokenWithIAMResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSOOIDCClientResolvedConfig } from "../SSOOIDCClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateTokenWithIAMCommand}.
 */
export interface CreateTokenWithIAMCommandInput extends CreateTokenWithIAMRequest {
}
/**
 * @public
 *
 * The output of {@link CreateTokenWithIAMCommand}.
 */
export interface CreateTokenWithIAMCommandOutput extends CreateTokenWithIAMResponse, __MetadataBearer {
}
declare const CreateTokenWithIAMCommand_base: {
    new (input: CreateTokenWithIAMCommandInput): import("@smithy/smithy-client").CommandImpl<CreateTokenWithIAMCommandInput, CreateTokenWithIAMCommandOutput, SSOOIDCClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 * <p>Creates and returns access and refresh tokens for clients and applications that are
 *       authenticated using IAM entities. The access token can be used to fetch short-term credentials
 *       for the assigned AWS accounts or to access application APIs using <code>bearer</code>
 *       authentication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOOIDCClient, CreateTokenWithIAMCommand } from "@aws-sdk/client-sso-oidc"; // ES Modules import
 * // const { SSOOIDCClient, CreateTokenWithIAMCommand } = require("@aws-sdk/client-sso-oidc"); // CommonJS import
 * const client = new SSOOIDCClient(config);
 * const input = { // CreateTokenWithIAMRequest
 *   clientId: "STRING_VALUE", // required
 *   grantType: "STRING_VALUE", // required
 *   code: "STRING_VALUE",
 *   refreshToken: "STRING_VALUE",
 *   assertion: "STRING_VALUE",
 *   scope: [ // Scopes
 *     "STRING_VALUE",
 *   ],
 *   redirectUri: "STRING_VALUE",
 *   subjectToken: "STRING_VALUE",
 *   subjectTokenType: "STRING_VALUE",
 *   requestedTokenType: "STRING_VALUE",
 * };
 * const command = new CreateTokenWithIAMCommand(input);
 * const response = await client.send(command);
 * // { // CreateTokenWithIAMResponse
 * //   accessToken: "STRING_VALUE",
 * //   tokenType: "STRING_VALUE",
 * //   expiresIn: Number("int"),
 * //   refreshToken: "STRING_VALUE",
 * //   idToken: "STRING_VALUE",
 * //   issuedTokenType: "STRING_VALUE",
 * //   scope: [ // Scopes
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateTokenWithIAMCommandInput - {@link CreateTokenWithIAMCommandInput}
 * @returns {@link CreateTokenWithIAMCommandOutput}
 * @see {@link CreateTokenWithIAMCommandInput} for command's `input` shape.
 * @see {@link CreateTokenWithIAMCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidRequestRegionException} (client fault)
 *  <p>Indicates that a token provided as input to the request was issued by and is only usable
 *       by calling IAM Identity Center endpoints in another region.</p>
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
 * @example Call OAuth/OIDC /token endpoint for Authorization Code grant with IAM authentication
 * ```javascript
 * //
 * const input = {
 *   "clientId": "arn:aws:sso::123456789012:application/ssoins-111111111111/apl-222222222222",
 *   "code": "yJraWQiOiJrZXktMTU2Njk2ODA4OCIsImFsZyI6IkhTMzg0In0EXAMPLEAUTHCODE",
 *   "grantType": "authorization_code",
 *   "redirectUri": "https://mywebapp.example/redirect",
 *   "scope": [
 *     "openid",
 *     "aws",
 *     "sts:identity_context"
 *   ]
 * };
 * const command = new CreateTokenWithIAMCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "accessToken": "aoal-YigITUDiNX1xZwOMXM5MxOWDL0E0jg9P6_C_jKQPxS_SKCP6f0kh1Up4g7TtvQqkMnD-GJiU_S1gvug6SrggAkc0:MGYCMQD3IatVjV7jAJU91kK3PkS/SfA2wtgWzOgZWDOR7sDGN9t0phCZz5It/aes/3C1Zj0CMQCKWOgRaiz6AIhza3DSXQNMLjRKXC8F8ceCsHlgYLMZ7hZidEXAMPLEACCESSTOKEN",
 *   "expiresIn": 1579729529,
 *   "idToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhd3M6aWRlbnRpdHlfc3RvcmVfaWQiOiJkLTMzMzMzMzMzMzMiLCJzdWIiOiI3MzA0NDhmMi1lMGExLTcwYTctYzk1NC0wMDAwMDAwMDAwMDAiLCJhd3M6aW5zdGFuY2VfYWNjb3VudCI6IjExMTExMTExMTExMSIsInN0czppZGVudGl0eV9jb250ZXh0IjoiRVhBTVBMRUlERU5USVRZQ09OVEVYVCIsInN0czphdWRpdF9jb250ZXh0IjoiRVhBTVBMRUFVRElUQ09OVEVYVCIsImlzcyI6Imh0dHBzOi8vaWRlbnRpdHljZW50ZXIuYW1hem9uYXdzLmNvbS9zc29pbnMtMTExMTExMTExMTExIiwiYXdzOmlkZW50aXR5X3N0b3JlX2FybiI6ImFybjphd3M6aWRlbnRpdHlzdG9yZTo6MTExMTExMTExMTExOmlkZW50aXR5c3RvcmUvZC0zMzMzMzMzMzMzIiwiYXVkIjoiYXJuOmF3czpzc286OjEyMzQ1Njc4OTAxMjphcHBsaWNhdGlvbi9zc29pbnMtMTExMTExMTExMTExL2FwbC0yMjIyMjIyMjIyMjIiLCJhd3M6aW5zdGFuY2VfYXJuIjoiYXJuOmF3czpzc286OjppbnN0YW5jZS9zc29pbnMtMTExMTExMTExMTExIiwiYXdzOmNyZWRlbnRpYWxfaWQiOiJfWlIyTjZhVkJqMjdGUEtheWpfcEtwVjc3QVBERl80MXB4ZXRfWWpJdUpONlVJR2RBdkpFWEFNUExFQ1JFRElEIiwiYXV0aF90aW1lIjoiMjAyMC0wMS0yMlQxMjo0NToyOVoiLCJleHAiOjE1Nzk3Mjk1MjksImlhdCI6MTU3OTcyNTkyOX0.Xyah6qbk78qThzJ41iFU2yfGuRqqtKXHrJYwQ8L9Ip0",
 *   "issuedTokenType": "urn:ietf:params:oauth:token-type:refresh_token",
 *   "refreshToken": "aorvJYubGpU6i91YnH7Mfo-AT2fIVa1zCfA_Rvq9yjVKIP3onFmmykuQ7E93y2I-9Nyj-A_sVvMufaLNL0bqnDRtgAkc0:MGUCMFrRsktMRVlWaOR70XGMFGLL0SlcCw4DiYveIiOVx1uK9BbD0gvAddsW3UTLozXKMgIxAJ3qxUvjpnlLIOaaKOoa/FuNgqJVvr9GMwDtnAtlh9iZzAkEXAMPLEREFRESHTOKEN",
 *   "scope": [
 *     "openid",
 *     "aws",
 *     "sts:identity_context"
 *   ],
 *   "tokenType": "Bearer"
 * }
 * *\/
 * // example id: create-token-with-iam-for-auth-code
 * ```
 *
 * @example Call OAuth/OIDC /token endpoint for Refresh Token grant with IAM authentication
 * ```javascript
 * //
 * const input = {
 *   "clientId": "arn:aws:sso::123456789012:application/ssoins-111111111111/apl-222222222222",
 *   "grantType": "refresh_token",
 *   "refreshToken": "aorvJYubGpU6i91YnH7Mfo-AT2fIVa1zCfA_Rvq9yjVKIP3onFmmykuQ7E93y2I-9Nyj-A_sVvMufaLNL0bqnDRtgAkc0:MGUCMFrRsktMRVlWaOR70XGMFGLL0SlcCw4DiYveIiOVx1uK9BbD0gvAddsW3UTLozXKMgIxAJ3qxUvjpnlLIOaaKOoa/FuNgqJVvr9GMwDtnAtlh9iZzAkEXAMPLEREFRESHTOKEN"
 * };
 * const command = new CreateTokenWithIAMCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "accessToken": "aoal-YigITUDiNX1xZwOMXM5MxOWDL0E0jg9P6_C_jKQPxS_SKCP6f0kh1Up4g7TtvQqkMnD-GJiU_S1gvug6SrggAkc0:MGYCMQD3IatVjV7jAJU91kK3PkS/SfA2wtgWzOgZWDOR7sDGN9t0phCZz5It/aes/3C1Zj0CMQCKWOgRaiz6AIhza3DSXQNMLjRKXC8F8ceCsHlgYLMZ7hZidEXAMPLEACCESSTOKEN",
 *   "expiresIn": 1579729529,
 *   "issuedTokenType": "urn:ietf:params:oauth:token-type:refresh_token",
 *   "refreshToken": "aorvJYubGpU6i91YnH7Mfo-AT2fIVa1zCfA_Rvq9yjVKIP3onFmmykuQ7E93y2I-9Nyj-A_sVvMufaLNL0bqnDRtgAkc0:MGUCMFrRsktMRVlWaOR70XGMFGLL0SlcCw4DiYveIiOVx1uK9BbD0gvAddsW3UTLozXKMgIxAJ3qxUvjpnlLIOaaKOoa/FuNgqJVvr9GMwDtnAtlh9iZzAkEXAMPLEREFRESHTOKEN",
 *   "scope": [
 *     "openid",
 *     "aws",
 *     "sts:identity_context"
 *   ],
 *   "tokenType": "Bearer"
 * }
 * *\/
 * // example id: create-token-with-iam-for-refresh-token
 * ```
 *
 * @example Call OAuth/OIDC /token endpoint for JWT Bearer grant with IAM authentication
 * ```javascript
 * //
 * const input = {
 *   "assertion": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFMVE16YWtpaGlSbGFfOHoyQkVKVlhlV01xbyJ9.eyJ2ZXIiOiIyLjAiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vOTEyMjA0MGQtNmM2Ny00YzViLWIxMTItMzZhMzA0YjY2ZGFkL3YyLjAiLCJzdWIiOiJBQUFBQUFBQUFBQUFBQUFBQUFBQUFJa3pxRlZyU2FTYUZIeTc4MmJidGFRIiwiYXVkIjoiNmNiMDQwMTgtYTNmNS00NmE3LWI5OTUtOTQwYzc4ZjVhZWYzIiwiZXhwIjoxNTM2MzYxNDExLCJpYXQiOjE1MzYyNzQ3MTEsIm5iZiI6MTUzNjI3NDcxMSwibmFtZSI6IkFiZSBMaW5jb2xuIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiQWJlTGlAbWljcm9zb2Z0LmNvbSIsIm9pZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC02NmYzLTMzMzJlY2E3ZWE4MSIsInRpZCI6IjkxMjIwNDBkLTZjNjctNGM1Yi1iMTEyLTM2YTMwNGI2NmRhZCIsIm5vbmNlIjoiMTIzNTIzIiwiYWlvIjoiRGYyVVZYTDFpeCFsTUNXTVNPSkJjRmF0emNHZnZGR2hqS3Y4cTVnMHg3MzJkUjVNQjVCaXN2R1FPN1lXQnlqZDhpUURMcSFlR2JJRGFreXA1bW5PcmNkcUhlWVNubHRlcFFtUnA2QUlaOGpZIn0.1AFWW-Ck5nROwSlltm7GzZvDwUkqvhSQpm55TQsmVo9Y59cLhRXpvB8n-55HCr9Z6G_31_UbeUkoz612I2j_Sm9FFShSDDjoaLQr54CreGIJvjtmS3EkK9a7SJBbcpL1MpUtlfygow39tFjY7EVNW9plWUvRrTgVk7lYLprvfzw-CIqw3gHC-T7IK_m_xkr08INERBtaecwhTeN4chPC4W3jdmw_lIxzC48YoQ0dB1L9-ImX98Egypfrlbm0IBL5spFzL6JDZIRRJOu8vecJvj1mq-IUhGt0MacxX8jdxYLP-KUu2d9MbNKpCKJuZ7p8gwTL5B7NlUdh_dmSviPWrw",
 *   "clientId": "arn:aws:sso::123456789012:application/ssoins-111111111111/apl-222222222222",
 *   "grantType": "urn:ietf:params:oauth:grant-type:jwt-bearer"
 * };
 * const command = new CreateTokenWithIAMCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "accessToken": "aoal-YigITUDiNX1xZwOMXM5MxOWDL0E0jg9P6_C_jKQPxS_SKCP6f0kh1Up4g7TtvQqkMnD-GJiU_S1gvug6SrggAkc0:MGYCMQD3IatVjV7jAJU91kK3PkS/SfA2wtgWzOgZWDOR7sDGN9t0phCZz5It/aes/3C1Zj0CMQCKWOgRaiz6AIhza3DSXQNMLjRKXC8F8ceCsHlgYLMZ7hZidEXAMPLEACCESSTOKEN",
 *   "expiresIn": 1579729529,
 *   "idToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhd3M6aWRlbnRpdHlfc3RvcmVfaWQiOiJkLTMzMzMzMzMzMzMiLCJzdWIiOiI3MzA0NDhmMi1lMGExLTcwYTctYzk1NC0wMDAwMDAwMDAwMDAiLCJhd3M6aW5zdGFuY2VfYWNjb3VudCI6IjExMTExMTExMTExMSIsInN0czppZGVudGl0eV9jb250ZXh0IjoiRVhBTVBMRUlERU5USVRZQ09OVEVYVCIsInN0czphdWRpdF9jb250ZXh0IjoiRVhBTVBMRUFVRElUQ09OVEVYVCIsImlzcyI6Imh0dHBzOi8vaWRlbnRpdHljZW50ZXIuYW1hem9uYXdzLmNvbS9zc29pbnMtMTExMTExMTExMTExIiwiYXdzOmlkZW50aXR5X3N0b3JlX2FybiI6ImFybjphd3M6aWRlbnRpdHlzdG9yZTo6MTExMTExMTExMTExOmlkZW50aXR5c3RvcmUvZC0zMzMzMzMzMzMzIiwiYXVkIjoiYXJuOmF3czpzc286OjEyMzQ1Njc4OTAxMjphcHBsaWNhdGlvbi9zc29pbnMtMTExMTExMTExMTExL2FwbC0yMjIyMjIyMjIyMjIiLCJhd3M6aW5zdGFuY2VfYXJuIjoiYXJuOmF3czpzc286OjppbnN0YW5jZS9zc29pbnMtMTExMTExMTExMTExIiwiYXdzOmNyZWRlbnRpYWxfaWQiOiJfWlIyTjZhVkJqMjdGUEtheWpfcEtwVjc3QVBERl80MXB4ZXRfWWpJdUpONlVJR2RBdkpFWEFNUExFQ1JFRElEIiwiYXV0aF90aW1lIjoiMjAyMC0wMS0yMlQxMjo0NToyOVoiLCJleHAiOjE1Nzk3Mjk1MjksImlhdCI6MTU3OTcyNTkyOX0.Xyah6qbk78qThzJ41iFU2yfGuRqqtKXHrJYwQ8L9Ip0",
 *   "issuedTokenType": "urn:ietf:params:oauth:token-type:refresh_token",
 *   "refreshToken": "aorvJYubGpU6i91YnH7Mfo-AT2fIVa1zCfA_Rvq9yjVKIP3onFmmykuQ7E93y2I-9Nyj-A_sVvMufaLNL0bqnDRtgAkc0:MGUCMFrRsktMRVlWaOR70XGMFGLL0SlcCw4DiYveIiOVx1uK9BbD0gvAddsW3UTLozXKMgIxAJ3qxUvjpnlLIOaaKOoa/FuNgqJVvr9GMwDtnAtlh9iZzAkEXAMPLEREFRESHTOKEN",
 *   "scope": [
 *     "openid",
 *     "aws",
 *     "sts:identity_context"
 *   ],
 *   "tokenType": "Bearer"
 * }
 * *\/
 * // example id: create-token-with-iam-for-jwt-bearer
 * ```
 *
 * @example Call OAuth/OIDC /token endpoint for Token Exchange grant with IAM authentication
 * ```javascript
 * //
 * const input = {
 *   "clientId": "arn:aws:sso::123456789012:application/ssoins-111111111111/apl-222222222222",
 *   "grantType": "urn:ietf:params:oauth:grant-type:token-exchange",
 *   "requestedTokenType": "urn:ietf:params:oauth:token-type:access_token",
 *   "subjectToken": "aoak-Hig8TUDPNX1xZwOMXM5MxOWDL0E0jg9P6_C_jKQPxS_SKCP6f0kh1Up4g7TtvQqkMnD-GJiU_S1gvug6SrggAkc0:MGYCMQD3IatVjV7jAJU91kK3PkS/SfA2wtgWzOgZWDOR7sDGN9t0phCZz5It/aes/3C1Zj0CMQCKWOgRaiz6AIhza3DSXQNMLjRKXC8F8ceCsHlgYLMZ7hZDIFFERENTACCESSTOKEN",
 *   "subjectTokenType": "urn:ietf:params:oauth:token-type:access_token"
 * };
 * const command = new CreateTokenWithIAMCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "accessToken": "aoal-YigITUDiNX1xZwOMXM5MxOWDL0E0jg9P6_C_jKQPxS_SKCP6f0kh1Up4g7TtvQqkMnD-GJiU_S1gvug6SrggAkc0:MGYCMQD3IatVjV7jAJU91kK3PkS/SfA2wtgWzOgZWDOR7sDGN9t0phCZz5It/aes/3C1Zj0CMQCKWOgRaiz6AIhza3DSXQNMLjRKXC8F8ceCsHlgYLMZ7hZidEXAMPLEACCESSTOKEN",
 *   "expiresIn": 1579729529,
 *   "idToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhd3M6aWRlbnRpdHlfc3RvcmVfaWQiOiJkLTMzMzMzMzMzMzMiLCJzdWIiOiI3MzA0NDhmMi1lMGExLTcwYTctYzk1NC0wMDAwMDAwMDAwMDAiLCJhd3M6aW5zdGFuY2VfYWNjb3VudCI6IjExMTExMTExMTExMSIsInN0czppZGVudGl0eV9jb250ZXh0IjoiRVhBTVBMRUlERU5USVRZQ09OVEVYVCIsImlzcyI6Imh0dHBzOi8vaWRlbnRpdHljZW50ZXIuYW1hem9uYXdzLmNvbS9zc29pbnMtMTExMTExMTExMTExIiwiYXdzOmlkZW50aXR5X3N0b3JlX2FybiI6ImFybjphd3M6aWRlbnRpdHlzdG9yZTo6MTExMTExMTExMTExOmlkZW50aXR5c3RvcmUvZC0zMzMzMzMzMzMzIiwiYXVkIjoiYXJuOmF3czpzc286OjEyMzQ1Njc4OTAxMjphcHBsaWNhdGlvbi9zc29pbnMtMTExMTExMTExMTExL2FwbC0yMjIyMjIyMjIyMjIiLCJhd3M6aW5zdGFuY2VfYXJuIjoiYXJuOmF3czpzc286OjppbnN0YW5jZS9zc29pbnMtMTExMTExMTExMTExIiwiYXdzOmNyZWRlbnRpYWxfaWQiOiJfWlIyTjZhVkJqMjdGUEtheWpfcEtwVjc3QVBERl80MXB4ZXRfWWpJdUpONlVJR2RBdkpFWEFNUExFQ1JFRElEIiwiYXV0aF90aW1lIjoiMjAyMC0wMS0yMlQxMjo0NToyOVoiLCJleHAiOjE1Nzk3Mjk1MjksImlhdCI6MTU3OTcyNTkyOX0.5SYiW1kMsuUr7nna-l5tlakM0GNbMHvIM2_n0QD23jM",
 *   "issuedTokenType": "urn:ietf:params:oauth:token-type:access_token",
 *   "scope": [
 *     "openid",
 *     "aws",
 *     "sts:identity_context"
 *   ],
 *   "tokenType": "Bearer"
 * }
 * *\/
 * // example id: create-token-with-iam-for-token-exchange
 * ```
 *
 */
export declare class CreateTokenWithIAMCommand extends CreateTokenWithIAMCommand_base {
}
