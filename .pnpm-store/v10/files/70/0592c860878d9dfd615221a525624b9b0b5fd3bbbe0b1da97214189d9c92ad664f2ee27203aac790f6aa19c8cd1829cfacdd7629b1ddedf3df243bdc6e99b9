import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { ListIdentityPoolsInput, ListIdentityPoolsResponse } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListIdentityPoolsCommand}.
 */
export interface ListIdentityPoolsCommandInput extends ListIdentityPoolsInput {
}
/**
 * @public
 *
 * The output of {@link ListIdentityPoolsCommand}.
 */
export interface ListIdentityPoolsCommandOutput extends ListIdentityPoolsResponse, __MetadataBearer {
}
declare const ListIdentityPoolsCommand_base: {
    new (input: ListIdentityPoolsCommandInput): import("@smithy/smithy-client").CommandImpl<ListIdentityPoolsCommandInput, ListIdentityPoolsCommandOutput, CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 * <p>Lists all of the Cognito identity pools registered for your account.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, ListIdentityPoolsCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, ListIdentityPoolsCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const input = { // ListIdentityPoolsInput
 *   MaxResults: Number("int"), // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListIdentityPoolsCommand(input);
 * const response = await client.send(command);
 * // { // ListIdentityPoolsResponse
 * //   IdentityPools: [ // IdentityPoolsList
 * //     { // IdentityPoolShortDescription
 * //       IdentityPoolId: "STRING_VALUE",
 * //       IdentityPoolName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIdentityPoolsCommandInput - {@link ListIdentityPoolsCommandInput}
 * @returns {@link ListIdentityPoolsCommandOutput}
 * @see {@link ListIdentityPoolsCommandInput} for command's `input` shape.
 * @see {@link ListIdentityPoolsCommandOutput} for command's `response` shape.
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
export declare class ListIdentityPoolsCommand extends ListIdentityPoolsCommand_base {
}
