import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { CreateIdentityPoolInput, IdentityPool } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateIdentityPoolCommand}.
 */
export interface CreateIdentityPoolCommandInput extends CreateIdentityPoolInput {
}
/**
 * @public
 *
 * The output of {@link CreateIdentityPoolCommand}.
 */
export interface CreateIdentityPoolCommandOutput extends IdentityPool, __MetadataBearer {
}
declare const CreateIdentityPoolCommand_base: {
    new (input: CreateIdentityPoolCommandInput): import("@smithy/smithy-client").CommandImpl<CreateIdentityPoolCommandInput, CreateIdentityPoolCommandOutput, CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 * <p>Creates a new identity pool. The identity pool is a store of user identity
 *          information that is specific to your AWS account. The keys for <code>SupportedLoginProviders</code> are as follows:</p>
 *
 *          <ul>
 *             <li>
 *                <p>Facebook: <code>graph.facebook.com</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Google: <code>accounts.google.com</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Amazon: <code>www.amazon.com</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Twitter: <code>api.twitter.com</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Digits: <code>www.digits.com</code>
 *                </p>
 *             </li>
 *          </ul>
 *
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, CreateIdentityPoolCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, CreateIdentityPoolCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const input = { // CreateIdentityPoolInput
 *   IdentityPoolName: "STRING_VALUE", // required
 *   AllowUnauthenticatedIdentities: true || false, // required
 *   AllowClassicFlow: true || false,
 *   SupportedLoginProviders: { // IdentityProviders
 *     "<keys>": "STRING_VALUE",
 *   },
 *   DeveloperProviderName: "STRING_VALUE",
 *   OpenIdConnectProviderARNs: [ // OIDCProviderList
 *     "STRING_VALUE",
 *   ],
 *   CognitoIdentityProviders: [ // CognitoIdentityProviderList
 *     { // CognitoIdentityProvider
 *       ProviderName: "STRING_VALUE",
 *       ClientId: "STRING_VALUE",
 *       ServerSideTokenCheck: true || false,
 *     },
 *   ],
 *   SamlProviderARNs: [ // SAMLProviderList
 *     "STRING_VALUE",
 *   ],
 *   IdentityPoolTags: { // IdentityPoolTagsType
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateIdentityPoolCommand(input);
 * const response = await client.send(command);
 * // { // IdentityPool
 * //   IdentityPoolId: "STRING_VALUE", // required
 * //   IdentityPoolName: "STRING_VALUE", // required
 * //   AllowUnauthenticatedIdentities: true || false, // required
 * //   AllowClassicFlow: true || false,
 * //   SupportedLoginProviders: { // IdentityProviders
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   DeveloperProviderName: "STRING_VALUE",
 * //   OpenIdConnectProviderARNs: [ // OIDCProviderList
 * //     "STRING_VALUE",
 * //   ],
 * //   CognitoIdentityProviders: [ // CognitoIdentityProviderList
 * //     { // CognitoIdentityProvider
 * //       ProviderName: "STRING_VALUE",
 * //       ClientId: "STRING_VALUE",
 * //       ServerSideTokenCheck: true || false,
 * //     },
 * //   ],
 * //   SamlProviderARNs: [ // SAMLProviderList
 * //     "STRING_VALUE",
 * //   ],
 * //   IdentityPoolTags: { // IdentityPoolTagsType
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateIdentityPoolCommandInput - {@link CreateIdentityPoolCommandInput}
 * @returns {@link CreateIdentityPoolCommandOutput}
 * @see {@link CreateIdentityPoolCommandInput} for command's `input` shape.
 * @see {@link CreateIdentityPoolCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Thrown when a request is throttled.</p>
 *
 * @throws {@link CognitoIdentityServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentity service.</p>
 *
 */
export declare class CreateIdentityPoolCommand extends CreateIdentityPoolCommand_base {
}
