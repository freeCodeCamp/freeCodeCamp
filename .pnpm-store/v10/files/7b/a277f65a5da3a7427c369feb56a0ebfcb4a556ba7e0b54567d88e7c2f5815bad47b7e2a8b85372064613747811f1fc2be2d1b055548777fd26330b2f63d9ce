import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { GetCallerIdentityRequest, GetCallerIdentityResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, STSClientResolvedConfig } from "../STSClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCallerIdentityCommand}.
 */
export interface GetCallerIdentityCommandInput extends GetCallerIdentityRequest {
}
/**
 * @public
 *
 * The output of {@link GetCallerIdentityCommand}.
 */
export interface GetCallerIdentityCommandOutput extends GetCallerIdentityResponse, __MetadataBearer {
}
declare const GetCallerIdentityCommand_base: {
    new (input: GetCallerIdentityCommandInput): import("@smithy/smithy-client").CommandImpl<GetCallerIdentityCommandInput, GetCallerIdentityCommandOutput, STSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 * <p>Returns details about the IAM user or role whose credentials are used to
 *          call the operation.</p>
 *          <note>
 *             <p>No permissions are required to perform this operation. If an administrator attaches a
 *             policy to your identity that explicitly denies access to the
 *                <code>sts:GetCallerIdentity</code> action, you can still perform this operation.
 *             Permissions are not required because the same information is returned when access is
 *             denied. To view an example response, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_access-denied-delete-mfa">I Am Not Authorized to Perform: iam:DeleteVirtualMFADevice</a> in the
 *                <i>IAM User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { STSClient, GetCallerIdentityCommand } from "@aws-sdk/client-sts"; // ES Modules import
 * // const { STSClient, GetCallerIdentityCommand } = require("@aws-sdk/client-sts"); // CommonJS import
 * const client = new STSClient(config);
 * const input = {};
 * const command = new GetCallerIdentityCommand(input);
 * const response = await client.send(command);
 * // { // GetCallerIdentityResponse
 * //   UserId: "STRING_VALUE",
 * //   Account: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCallerIdentityCommandInput - {@link GetCallerIdentityCommandInput}
 * @returns {@link GetCallerIdentityCommandOutput}
 * @see {@link GetCallerIdentityCommandInput} for command's `input` shape.
 * @see {@link GetCallerIdentityCommandOutput} for command's `response` shape.
 * @see {@link STSClientResolvedConfig | config} for STSClient's `config` shape.
 *
 * @throws {@link STSServiceException}
 * <p>Base exception class for all service exceptions from STS service.</p>
 *
 * @example To get details about a calling IAM user
 * ```javascript
 * // This example shows a request and response made with the credentials for a user named Alice in the AWS account 123456789012.
 * const input = {};
 * const command = new GetCallerIdentityCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Account": "123456789012",
 *   "Arn": "arn:aws:iam::123456789012:user/Alice",
 *   "UserId": "AKIAI44QH8DHBEXAMPLE"
 * }
 * *\/
 * // example id: to-get-details-about-a-calling-iam-user-1480540050376
 * ```
 *
 * @example To get details about a calling user federated with AssumeRole
 * ```javascript
 * // This example shows a request and response made with temporary credentials created by AssumeRole. The name of the assumed role is my-role-name, and the RoleSessionName is set to my-role-session-name.
 * const input = {};
 * const command = new GetCallerIdentityCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Account": "123456789012",
 *   "Arn": "arn:aws:sts::123456789012:assumed-role/my-role-name/my-role-session-name",
 *   "UserId": "AKIAI44QH8DHBEXAMPLE:my-role-session-name"
 * }
 * *\/
 * // example id: to-get-details-about-a-calling-user-federated-with-assumerole-1480540158545
 * ```
 *
 * @example To get details about a calling user federated with GetFederationToken
 * ```javascript
 * // This example shows a request and response made with temporary credentials created by using GetFederationToken. The Name parameter is set to my-federated-user-name.
 * const input = {};
 * const command = new GetCallerIdentityCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Account": "123456789012",
 *   "Arn": "arn:aws:sts::123456789012:federated-user/my-federated-user-name",
 *   "UserId": "123456789012:my-federated-user-name"
 * }
 * *\/
 * // example id: to-get-details-about-a-calling-user-federated-with-getfederationtoken-1480540231316
 * ```
 *
 */
export declare class GetCallerIdentityCommand extends GetCallerIdentityCommand_base {
}
