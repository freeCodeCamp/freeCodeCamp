import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { AssumeRoleRequest, AssumeRoleResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, STSClientResolvedConfig } from "../STSClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssumeRoleCommand}.
 */
export interface AssumeRoleCommandInput extends AssumeRoleRequest {
}
/**
 * @public
 *
 * The output of {@link AssumeRoleCommand}.
 */
export interface AssumeRoleCommandOutput extends AssumeRoleResponse, __MetadataBearer {
}
declare const AssumeRoleCommand_base: {
    new (input: AssumeRoleCommandInput): import("@smithy/smithy-client").CommandImpl<AssumeRoleCommandInput, AssumeRoleCommandOutput, STSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 * <p>Returns a set of temporary security credentials that you can use to access Amazon Web Services
 *          resources. These temporary credentials consist of an access key ID, a secret access key,
 *          and a security token. Typically, you use <code>AssumeRole</code> within your account or for
 *          cross-account access. For a comparison of <code>AssumeRole</code> with other API operations
 *          that produce temporary credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting Temporary Security
 *             Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison">Comparing the
 *             Amazon Web Services STS API operations</a> in the <i>IAM User Guide</i>.</p>
 *          <p>
 *             <b>Permissions</b>
 *          </p>
 *          <p>The temporary security credentials created by <code>AssumeRole</code> can be used to
 *          make API calls to any Amazon Web Services service with the following exception: You cannot call the
 *          Amazon Web Services STS <code>GetFederationToken</code> or <code>GetSessionToken</code> API
 *          operations.</p>
 *          <p>(Optional) You can pass inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policies</a> to
 *          this operation. You can pass a single JSON policy document to use as an inline session
 *          policy. You can also specify up to 10 managed policy Amazon Resource Names (ARNs) to use as
 *          managed session policies. The plaintext that you use for both inline and managed session
 *          policies can't exceed 2,048 characters. Passing policies to this operation returns new
 *          temporary credentials. The resulting session's permissions are the intersection of the
 *          role's identity-based policy and the session policies. You can use the role's temporary
 *          credentials in subsequent Amazon Web Services API calls to access resources in the account that owns
 *          the role. You cannot use session policies to grant more permissions than those allowed
 *          by the identity-based policy of the role that is being assumed. For more information, see
 *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session
 *             Policies</a> in the <i>IAM User Guide</i>.</p>
 *          <p>When you create a role, you create two policies: a role trust policy that specifies
 *             <i>who</i> can assume the role, and a permissions policy that specifies
 *             <i>what</i> can be done with the role. You specify the trusted principal
 *          that is allowed to assume the role in the role trust policy.</p>
 *          <p>To assume a role from a different account, your Amazon Web Services account must be trusted by the
 *          role. The trust relationship is defined in the role's trust policy when the role is
 *          created. That trust policy states which accounts are allowed to delegate that access to
 *          users in the account. </p>
 *          <p>A user who wants to access a role in a different account must also have permissions that
 *          are delegated from the account administrator. The administrator must attach a policy that
 *          allows the user to call <code>AssumeRole</code> for the ARN of the role in the other
 *          account.</p>
 *          <p>To allow a user to assume a role in the same account, you can do either of the
 *          following:</p>
 *          <ul>
 *             <li>
 *                <p>Attach a policy to the user that allows the user to call <code>AssumeRole</code>
 *                (as long as the role's trust policy trusts the account).</p>
 *             </li>
 *             <li>
 *                <p>Add the user as a principal directly in the role's trust policy.</p>
 *             </li>
 *          </ul>
 *          <p>You can do either because the role’s trust policy acts as an IAM resource-based
 *          policy. When a resource-based policy grants access to a principal in the same account, no
 *          additional identity-based policy is required. For more information about trust policies and
 *          resource-based policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">IAM Policies</a> in the
 *             <i>IAM User Guide</i>.</p>
 *          <p>
 *             <b>Tags</b>
 *          </p>
 *          <p>(Optional) You can pass tag key-value pairs to your session. These tags are called
 *          session tags. For more information about session tags, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in the
 *             <i>IAM User Guide</i>.</p>
 *          <p>An administrator must grant you the permissions necessary to pass session tags. The
 *          administrator can also create granular permissions to allow you to pass only specific
 *          session tags. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_attribute-based-access-control.html">Tutorial: Using Tags
 *             for Attribute-Based Access Control</a> in the
 *          <i>IAM User Guide</i>.</p>
 *          <p>You can set the session tags as transitive. Transitive tags persist during role
 *          chaining. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html#id_session-tags_role-chaining">Chaining Roles
 *             with Session Tags</a> in the <i>IAM User Guide</i>.</p>
 *          <p>
 *             <b>Using MFA with AssumeRole</b>
 *          </p>
 *          <p>(Optional) You can include multi-factor authentication (MFA) information when you call
 *             <code>AssumeRole</code>. This is useful for cross-account scenarios to ensure that the
 *          user that assumes the role has been authenticated with an Amazon Web Services MFA device. In that
 *          scenario, the trust policy of the role being assumed includes a condition that tests for
 *          MFA authentication. If the caller does not include valid MFA information, the request to
 *          assume the role is denied. The condition in a trust policy that tests for MFA
 *          authentication might look like the following example.</p>
 *          <p>
 *             <code>"Condition": \{"Bool": \{"aws:MultiFactorAuthPresent": true\}\}</code>
 *          </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/MFAProtectedAPI.html">Configuring MFA-Protected API Access</a>
 *          in the <i>IAM User Guide</i> guide.</p>
 *          <p>To use MFA with <code>AssumeRole</code>, you pass values for the
 *             <code>SerialNumber</code> and <code>TokenCode</code> parameters. The
 *             <code>SerialNumber</code> value identifies the user's hardware or virtual MFA device.
 *          The <code>TokenCode</code> is the time-based one-time password (TOTP) that the MFA device
 *          produces. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { STSClient, AssumeRoleCommand } from "@aws-sdk/client-sts"; // ES Modules import
 * // const { STSClient, AssumeRoleCommand } = require("@aws-sdk/client-sts"); // CommonJS import
 * const client = new STSClient(config);
 * const input = { // AssumeRoleRequest
 *   RoleArn: "STRING_VALUE", // required
 *   RoleSessionName: "STRING_VALUE", // required
 *   PolicyArns: [ // policyDescriptorListType
 *     { // PolicyDescriptorType
 *       arn: "STRING_VALUE",
 *     },
 *   ],
 *   Policy: "STRING_VALUE",
 *   DurationSeconds: Number("int"),
 *   Tags: [ // tagListType
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   TransitiveTagKeys: [ // tagKeyListType
 *     "STRING_VALUE",
 *   ],
 *   ExternalId: "STRING_VALUE",
 *   SerialNumber: "STRING_VALUE",
 *   TokenCode: "STRING_VALUE",
 *   SourceIdentity: "STRING_VALUE",
 *   ProvidedContexts: [ // ProvidedContextsListType
 *     { // ProvidedContext
 *       ProviderArn: "STRING_VALUE",
 *       ContextAssertion: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new AssumeRoleCommand(input);
 * const response = await client.send(command);
 * // { // AssumeRoleResponse
 * //   Credentials: { // Credentials
 * //     AccessKeyId: "STRING_VALUE", // required
 * //     SecretAccessKey: "STRING_VALUE", // required
 * //     SessionToken: "STRING_VALUE", // required
 * //     Expiration: new Date("TIMESTAMP"), // required
 * //   },
 * //   AssumedRoleUser: { // AssumedRoleUser
 * //     AssumedRoleId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //   },
 * //   PackedPolicySize: Number("int"),
 * //   SourceIdentity: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssumeRoleCommandInput - {@link AssumeRoleCommandInput}
 * @returns {@link AssumeRoleCommandOutput}
 * @see {@link AssumeRoleCommandInput} for command's `input` shape.
 * @see {@link AssumeRoleCommandOutput} for command's `response` shape.
 * @see {@link STSClientResolvedConfig | config} for STSClient's `config` shape.
 *
 * @throws {@link ExpiredTokenException} (client fault)
 *  <p>The web identity token that was passed is expired or is not valid. Get a new identity
 *             token from the identity provider and then retry the request.</p>
 *
 * @throws {@link MalformedPolicyDocumentException} (client fault)
 *  <p>The request was rejected because the policy document was malformed. The error message
 *             describes the specific error.</p>
 *
 * @throws {@link PackedPolicyTooLargeException} (client fault)
 *  <p>The request was rejected because the total packed size of the session policies and
 *             session tags combined was too large. An Amazon Web Services conversion compresses the session policy
 *             document, session policy ARNs, and session tags into a packed binary format that has a
 *             separate limit. The error message indicates by percentage how close the policies and
 *             tags are to the upper size limit. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in
 *             the <i>IAM User Guide</i>.</p>
 *          <p>You could receive this error even though you meet other defined session policy and
 *             session tag limits. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-limits-entity-length">IAM and STS Entity
 *                 Character Limits</a> in the <i>IAM User Guide</i>.</p>
 *
 * @throws {@link RegionDisabledException} (client fault)
 *  <p>STS is not activated in the requested region for the account that is being asked to
 *             generate credentials. The account administrator must use the IAM console to activate STS
 *             in that region. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
 *                 Deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the <i>IAM User
 *                     Guide</i>.</p>
 *
 * @throws {@link STSServiceException}
 * <p>Base exception class for all service exceptions from STS service.</p>
 *
 * @example To assume a role
 * ```javascript
 * //
 * const input = {
 *   "ExternalId": "123ABC",
 *   "Policy": "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Sid\":\"Stmt1\",\"Effect\":\"Allow\",\"Action\":\"s3:ListAllMyBuckets\",\"Resource\":\"*\"}]}",
 *   "RoleArn": "arn:aws:iam::123456789012:role/demo",
 *   "RoleSessionName": "testAssumeRoleSession",
 *   "Tags": [
 *     {
 *       "Key": "Project",
 *       "Value": "Unicorn"
 *     },
 *     {
 *       "Key": "Team",
 *       "Value": "Automation"
 *     },
 *     {
 *       "Key": "Cost-Center",
 *       "Value": "12345"
 *     }
 *   ],
 *   "TransitiveTagKeys": [
 *     "Project",
 *     "Cost-Center"
 *   ]
 * };
 * const command = new AssumeRoleCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AssumedRoleUser": {
 *     "Arn": "arn:aws:sts::123456789012:assumed-role/demo/Bob",
 *     "AssumedRoleId": "ARO123EXAMPLE123:Bob"
 *   },
 *   "Credentials": {
 *     "AccessKeyId": "AKIAIOSFODNN7EXAMPLE",
 *     "Expiration": "2011-07-15T23:28:33.359Z",
 *     "SecretAccessKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYzEXAMPLEKEY",
 *     "SessionToken": "AQoDYXdzEPT//////////wEXAMPLEtc764bNrC9SAPBSM22wDOk4x4HIZ8j4FZTwdQWLWsKWHGBuFqwAeMicRXmxfpSPfIeoIYRqTflfKD8YUuwthAx7mSEI/qkPpKPi/kMcGdQrmGdeehM4IC1NtBmUpp2wUE8phUZampKsburEDy0KPkyQDYwT7WZ0wq5VSXDvp75YU9HFvlRd8Tx6q6fE8YQcHNVXAkiY9q6d+xo0rKwT38xVqr7ZD0u0iPPkUL64lIZbqBAz+scqKmlzm8FDrypNC9Yjc8fPOLn9FX9KSYvKTr4rvx3iSIlTJabIQwj2ICCR/oLxBA=="
 *   },
 *   "PackedPolicySize": 8
 * }
 * *\/
 * // example id: to-assume-a-role-1480532402212
 * ```
 *
 */
export declare class AssumeRoleCommand extends AssumeRoleCommand_base {
}
