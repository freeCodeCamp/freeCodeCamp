import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { ListAccountRolesRequest, ListAccountRolesResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSOClientResolvedConfig } from "../SSOClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAccountRolesCommand}.
 */
export interface ListAccountRolesCommandInput extends ListAccountRolesRequest {
}
/**
 * @public
 *
 * The output of {@link ListAccountRolesCommand}.
 */
export interface ListAccountRolesCommandOutput extends ListAccountRolesResponse, __MetadataBearer {
}
declare const ListAccountRolesCommand_base: {
    new (input: ListAccountRolesCommandInput): import("@smithy/smithy-client").CommandImpl<ListAccountRolesCommandInput, ListAccountRolesCommandOutput, SSOClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 * <p>Lists all roles that are assigned to the user for a given AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOClient, ListAccountRolesCommand } from "@aws-sdk/client-sso"; // ES Modules import
 * // const { SSOClient, ListAccountRolesCommand } = require("@aws-sdk/client-sso"); // CommonJS import
 * const client = new SSOClient(config);
 * const input = { // ListAccountRolesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   accessToken: "STRING_VALUE", // required
 *   accountId: "STRING_VALUE", // required
 * };
 * const command = new ListAccountRolesCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountRolesResponse
 * //   nextToken: "STRING_VALUE",
 * //   roleList: [ // RoleListType
 * //     { // RoleInfo
 * //       roleName: "STRING_VALUE",
 * //       accountId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAccountRolesCommandInput - {@link ListAccountRolesCommandInput}
 * @returns {@link ListAccountRolesCommandOutput}
 * @see {@link ListAccountRolesCommandInput} for command's `input` shape.
 * @see {@link ListAccountRolesCommandOutput} for command's `response` shape.
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
export declare class ListAccountRolesCommand extends ListAccountRolesCommand_base {
}
