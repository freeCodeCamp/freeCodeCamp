import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { ListIdentitiesInput, ListIdentitiesResponse } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListIdentitiesCommand}.
 */
export interface ListIdentitiesCommandInput extends ListIdentitiesInput {
}
/**
 * @public
 *
 * The output of {@link ListIdentitiesCommand}.
 */
export interface ListIdentitiesCommandOutput extends ListIdentitiesResponse, __MetadataBearer {
}
declare const ListIdentitiesCommand_base: {
    new (input: ListIdentitiesCommandInput): import("@smithy/smithy-client").CommandImpl<ListIdentitiesCommandInput, ListIdentitiesCommandOutput, CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 * <p>Lists the identities in an identity pool.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, ListIdentitiesCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, ListIdentitiesCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const input = { // ListIdentitiesInput
 *   IdentityPoolId: "STRING_VALUE", // required
 *   MaxResults: Number("int"), // required
 *   NextToken: "STRING_VALUE",
 *   HideDisabled: true || false,
 * };
 * const command = new ListIdentitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListIdentitiesResponse
 * //   IdentityPoolId: "STRING_VALUE",
 * //   Identities: [ // IdentitiesList
 * //     { // IdentityDescription
 * //       IdentityId: "STRING_VALUE",
 * //       Logins: [ // LoginsList
 * //         "STRING_VALUE",
 * //       ],
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIdentitiesCommandInput - {@link ListIdentitiesCommandInput}
 * @returns {@link ListIdentitiesCommandOutput}
 * @see {@link ListIdentitiesCommandInput} for command's `input` shape.
 * @see {@link ListIdentitiesCommandOutput} for command's `response` shape.
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
export declare class ListIdentitiesCommand extends ListIdentitiesCommand_base {
}
