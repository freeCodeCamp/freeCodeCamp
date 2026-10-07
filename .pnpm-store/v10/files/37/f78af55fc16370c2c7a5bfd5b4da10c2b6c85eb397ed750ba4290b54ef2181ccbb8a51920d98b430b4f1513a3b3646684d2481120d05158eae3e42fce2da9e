import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { GetFederationTokenRequest, GetFederationTokenResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, STSClientResolvedConfig } from "../STSClient";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetFederationTokenCommand}.
 */
export interface GetFederationTokenCommandInput extends GetFederationTokenRequest {
}
/**
 * @public
 *
 * The output of {@link GetFederationTokenCommand}.
 */
export interface GetFederationTokenCommandOutput extends GetFederationTokenResponse, __MetadataBearer {
}
declare const GetFederationTokenCommand_base: {
    new (input: GetFederationTokenCommandInput): import("@smithy/smithy-client").CommandImpl<GetFederationTokenCommandInput, GetFederationTokenCommandOutput, STSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 * <p>Returns a set of temporary security credentials (consisting of an access key ID, a
 *          secret access key, and a security token) for a user. A typical use is in a proxy
 *          application that gets temporary security credentials on behalf of distributed applications
 *          inside a corporate network.</p>
 *          <p>You must call the <code>GetFederationToken</code> operation using the long-term security
 *          credentials of an IAM user. As a result, this call is appropriate in
 *          contexts where those credentials can be safeguarded, usually in a server-based application.
 *          For a comparison of <code>GetFederationToken</code> with the other API operations that
 *          produce temporary credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html">Requesting Temporary Security
 *             Credentials</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#stsapi_comparison">Comparing the
 *             Amazon Web Services STS API operations</a> in the <i>IAM User Guide</i>.</p>
 *          <p>Although it is possible to call <code>GetFederationToken</code> using the security
 *          credentials of an Amazon Web Services account root user rather than an IAM user that you
 *          create for the purpose of a proxy application, we do not recommend it. For more
 *          information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#lock-away-credentials">Safeguard your root user credentials and don't use them for everyday tasks</a> in the
 *             <i>IAM User Guide</i>. </p>
 *          <note>
 *             <p>You can create a mobile-based or browser-based app that can authenticate users using
 *             a web identity provider like Login with Amazon, Facebook, Google, or an OpenID
 *             Connect-compatible identity provider. In this case, we recommend that you use <a href="http://aws.amazon.com/cognito/">Amazon Cognito</a> or
 *                <code>AssumeRoleWithWebIdentity</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_assumerolewithwebidentity">Federation Through a Web-based Identity Provider</a> in the
 *                <i>IAM User Guide</i>.</p>
 *          </note>
 *          <p>
 *             <b>Session duration</b>
 *          </p>
 *          <p>The temporary credentials are valid for the specified duration, from 900 seconds (15
 *          minutes) up to a maximum of 129,600 seconds (36 hours). The default session duration is
 *          43,200 seconds (12 hours). Temporary credentials obtained by using the root user
 *          credentials have a maximum duration of 3,600 seconds (1 hour).</p>
 *          <p>
 *             <b>Permissions</b>
 *          </p>
 *          <p>You can use the temporary credentials created by <code>GetFederationToken</code> in any
 *          Amazon Web Services service with the following exceptions:</p>
 *          <ul>
 *             <li>
 *                <p>You cannot call any IAM operations using the CLI or the Amazon Web Services API. This
 *                limitation does not apply to console sessions.</p>
 *             </li>
 *             <li>
 *                <p>You cannot call any STS operations except <code>GetCallerIdentity</code>.</p>
 *             </li>
 *          </ul>
 *          <p>You can use temporary credentials for single sign-on (SSO) to the console.</p>
 *          <p>You must pass an inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policy</a> to
 *          this operation. You can pass a single JSON policy document to use as an inline session
 *          policy. You can also specify up to 10 managed policy Amazon Resource Names (ARNs) to use as
 *          managed session policies. The plaintext that you use for both inline and managed session
 *          policies can't exceed 2,048 characters.</p>
 *          <p>Though the session policy parameters are optional, if you do not pass a policy, then the
 *          resulting federated user session has no permissions. When you pass session policies, the
 *          session permissions are the intersection of the IAM user policies and the
 *          session policies that you pass. This gives you a way to further restrict the permissions
 *          for a federated user. You cannot use session policies to grant more permissions than those
 *          that are defined in the permissions policy of the IAM user. For more
 *          information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in
 *          the <i>IAM User Guide</i>. For information about using
 *             <code>GetFederationToken</code> to create temporary security credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_getfederationtoken">GetFederationToken—Federation Through a Custom Identity Broker</a>. </p>
 *          <p>You can use the credentials to access a resource that has a resource-based policy. If
 *          that policy specifically references the federated user session in the
 *             <code>Principal</code> element of the policy, the session has the permissions allowed by
 *          the policy. These permissions are granted in addition to the permissions granted by the
 *          session policies.</p>
 *          <p>
 *             <b>Tags</b>
 *          </p>
 *          <p>(Optional) You can pass tag key-value pairs to your session. These are called session
 *          tags. For more information about session tags, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html">Passing Session Tags in STS</a> in the
 *             <i>IAM User Guide</i>.</p>
 *          <note>
 *             <p>You can create a mobile-based or browser-based app that can authenticate users using
 *             a web identity provider like Login with Amazon, Facebook, Google, or an OpenID
 *             Connect-compatible identity provider. In this case, we recommend that you use <a href="http://aws.amazon.com/cognito/">Amazon Cognito</a> or
 *                <code>AssumeRoleWithWebIdentity</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_request.html#api_assumerolewithwebidentity">Federation Through a Web-based Identity Provider</a> in the
 *                <i>IAM User Guide</i>.</p>
 *          </note>
 *          <p>An administrator must grant you the permissions necessary to pass session tags. The
 *          administrator can also create granular permissions to allow you to pass only specific
 *          session tags. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_attribute-based-access-control.html">Tutorial: Using Tags
 *             for Attribute-Based Access Control</a> in the
 *          <i>IAM User Guide</i>.</p>
 *          <p>Tag key–value pairs are not case sensitive, but case is preserved. This means that you
 *          cannot have separate <code>Department</code> and <code>department</code> tag keys. Assume
 *          that the user that you are federating has the
 *             <code>Department</code>=<code>Marketing</code> tag and you pass the
 *             <code>department</code>=<code>engineering</code> session tag. <code>Department</code>
 *          and <code>department</code> are not saved as separate tags, and the session tag passed in
 *          the request takes precedence over the user tag.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { STSClient, GetFederationTokenCommand } from "@aws-sdk/client-sts"; // ES Modules import
 * // const { STSClient, GetFederationTokenCommand } = require("@aws-sdk/client-sts"); // CommonJS import
 * const client = new STSClient(config);
 * const input = { // GetFederationTokenRequest
 *   Name: "STRING_VALUE", // required
 *   Policy: "STRING_VALUE",
 *   PolicyArns: [ // policyDescriptorListType
 *     { // PolicyDescriptorType
 *       arn: "STRING_VALUE",
 *     },
 *   ],
 *   DurationSeconds: Number("int"),
 *   Tags: [ // tagListType
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new GetFederationTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetFederationTokenResponse
 * //   Credentials: { // Credentials
 * //     AccessKeyId: "STRING_VALUE", // required
 * //     SecretAccessKey: "STRING_VALUE", // required
 * //     SessionToken: "STRING_VALUE", // required
 * //     Expiration: new Date("TIMESTAMP"), // required
 * //   },
 * //   FederatedUser: { // FederatedUser
 * //     FederatedUserId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //   },
 * //   PackedPolicySize: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetFederationTokenCommandInput - {@link GetFederationTokenCommandInput}
 * @returns {@link GetFederationTokenCommandOutput}
 * @see {@link GetFederationTokenCommandInput} for command's `input` shape.
 * @see {@link GetFederationTokenCommandOutput} for command's `response` shape.
 * @see {@link STSClientResolvedConfig | config} for STSClient's `config` shape.
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
 * @example To get temporary credentials for a role by using GetFederationToken
 * ```javascript
 * //
 * const input = {
 *   "DurationSeconds": 3600,
 *   "Name": "testFedUserSession",
 *   "Policy": "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Sid\":\"Stmt1\",\"Effect\":\"Allow\",\"Action\":\"s3:ListAllMyBuckets\",\"Resource\":\"*\"}]}",
 *   "Tags": [
 *     {
 *       "Key": "Project",
 *       "Value": "Pegasus"
 *     },
 *     {
 *       "Key": "Cost-Center",
 *       "Value": "98765"
 *     }
 *   ]
 * };
 * const command = new GetFederationTokenCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Credentials": {
 *     "AccessKeyId": "AKIAIOSFODNN7EXAMPLE",
 *     "Expiration": "2011-07-15T23:28:33.359Z",
 *     "SecretAccessKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYzEXAMPLEKEY",
 *     "SessionToken": "AQoDYXdzEPT//////////wEXAMPLEtc764bNrC9SAPBSM22wDOk4x4HIZ8j4FZTwdQWLWsKWHGBuFqwAeMicRXmxfpSPfIeoIYRqTflfKD8YUuwthAx7mSEI/qkPpKPi/kMcGdQrmGdeehM4IC1NtBmUpp2wUE8phUZampKsburEDy0KPkyQDYwT7WZ0wq5VSXDvp75YU9HFvlRd8Tx6q6fE8YQcHNVXAkiY9q6d+xo0rKwT38xVqr7ZD0u0iPPkUL64lIZbqBAz+scqKmlzm8FDrypNC9Yjc8fPOLn9FX9KSYvKTr4rvx3iSIlTJabIQwj2ICCR/oLxBA=="
 *   },
 *   "FederatedUser": {
 *     "Arn": "arn:aws:sts::123456789012:federated-user/Bob",
 *     "FederatedUserId": "123456789012:Bob"
 *   },
 *   "PackedPolicySize": 8
 * }
 * *\/
 * // example id: to-get-temporary-credentials-for-a-role-by-using-getfederationtoken-1480540749900
 * ```
 *
 */
export declare class GetFederationTokenCommand extends GetFederationTokenCommand_base {
}
