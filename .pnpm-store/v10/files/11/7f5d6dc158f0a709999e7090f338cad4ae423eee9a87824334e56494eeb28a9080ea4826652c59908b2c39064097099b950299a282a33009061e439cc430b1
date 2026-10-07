import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { TagResourceInput, TagResourceResponse } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TagResourceCommand}.
 */
export interface TagResourceCommandInput extends TagResourceInput {
}
/**
 * @public
 *
 * The output of {@link TagResourceCommand}.
 */
export interface TagResourceCommandOutput extends TagResourceResponse, __MetadataBearer {
}
declare const TagResourceCommand_base: {
    new (input: TagResourceCommandInput): import("@smithy/smithy-client").CommandImpl<TagResourceCommandInput, TagResourceCommandOutput, CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 * <p>Assigns a set of tags to the specified Amazon Cognito identity pool. A tag is a label
 *          that you can use to categorize and manage identity pools in different ways, such as by
 *          purpose, owner, environment, or other criteria.</p>
 *          <p>Each tag consists of a key and value, both of which you define. A key is a general
 *          category for more specific values. For example, if you have two versions of an identity
 *          pool, one for testing and another for production, you might assign an
 *             <code>Environment</code> tag key to both identity pools. The value of this key might be
 *             <code>Test</code> for one identity pool and <code>Production</code> for the
 *          other.</p>
 *          <p>Tags are useful for cost tracking and access control. You can activate your tags so that
 *          they appear on the Billing and Cost Management console, where you can track the costs
 *          associated with your identity pools. In an IAM policy, you can constrain permissions for
 *          identity pools based on specific tags or tag values.</p>
 *          <p>You can use this action up to 5 times per second, per account. An identity pool can have
 *          as many as 50 tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, TagResourceCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, TagResourceCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const input = { // TagResourceInput
 *   ResourceArn: "STRING_VALUE", // required
 *   Tags: { // IdentityPoolTagsType // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TagResourceCommandInput - {@link TagResourceCommandInput}
 * @returns {@link TagResourceCommandOutput}
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
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
export declare class TagResourceCommand extends TagResourceCommand_base {
}
