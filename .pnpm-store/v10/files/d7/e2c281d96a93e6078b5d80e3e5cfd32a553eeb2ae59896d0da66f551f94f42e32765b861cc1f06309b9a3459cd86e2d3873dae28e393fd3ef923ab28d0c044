import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { ListAccountsRequest, ListAccountsResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSOClientResolvedConfig } from "../SSOClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAccountsCommand}.
 */
export interface ListAccountsCommandInput extends ListAccountsRequest {
}
/**
 * @public
 *
 * The output of {@link ListAccountsCommand}.
 */
export interface ListAccountsCommandOutput extends ListAccountsResponse, __MetadataBearer {
}
declare const ListAccountsCommand_base: {
    new (input: ListAccountsCommandInput): import("@smithy/smithy-client").CommandImpl<ListAccountsCommandInput, ListAccountsCommandOutput, SSOClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 * <p>Lists all AWS accounts assigned to the user. These AWS accounts are assigned by the
 *       administrator of the account. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/useraccess.html#assignusers">Assign User Access</a> in the <i>IAM Identity Center User Guide</i>. This operation
 *       returns a paginated response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOClient, ListAccountsCommand } from "@aws-sdk/client-sso"; // ES Modules import
 * // const { SSOClient, ListAccountsCommand } = require("@aws-sdk/client-sso"); // CommonJS import
 * const client = new SSOClient(config);
 * const input = { // ListAccountsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   accessToken: "STRING_VALUE", // required
 * };
 * const command = new ListAccountsCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountsResponse
 * //   nextToken: "STRING_VALUE",
 * //   accountList: [ // AccountListType
 * //     { // AccountInfo
 * //       accountId: "STRING_VALUE",
 * //       accountName: "STRING_VALUE",
 * //       emailAddress: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAccountsCommandInput - {@link ListAccountsCommandInput}
 * @returns {@link ListAccountsCommandOutput}
 * @see {@link ListAccountsCommandInput} for command's `input` shape.
 * @see {@link ListAccountsCommandOutput} for command's `response` shape.
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
export declare class ListAccountsCommand extends ListAccountsCommand_base {
}
