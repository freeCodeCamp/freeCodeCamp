import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { DeleteIdentitiesInput, DeleteIdentitiesResponse } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteIdentitiesCommand}.
 */
export interface DeleteIdentitiesCommandInput extends DeleteIdentitiesInput {
}
/**
 * @public
 *
 * The output of {@link DeleteIdentitiesCommand}.
 */
export interface DeleteIdentitiesCommandOutput extends DeleteIdentitiesResponse, __MetadataBearer {
}
declare const DeleteIdentitiesCommand_base: {
    new (input: DeleteIdentitiesCommandInput): import("@smithy/smithy-client").CommandImpl<DeleteIdentitiesCommandInput, DeleteIdentitiesCommandOutput, CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
/**
 * @public
 * <p>Deletes identities from an identity pool. You can specify a list of 1-60 identities
 *          that you want to delete.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, DeleteIdentitiesCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, DeleteIdentitiesCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const input = { // DeleteIdentitiesInput
 *   IdentityIdsToDelete: [ // IdentityIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteIdentitiesCommand(input);
 * const response = await client.send(command);
 * // { // DeleteIdentitiesResponse
 * //   UnprocessedIdentityIds: [ // UnprocessedIdentityIdList
 * //     { // UnprocessedIdentityId
 * //       IdentityId: "STRING_VALUE",
 * //       ErrorCode: "AccessDenied" || "InternalServerError",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteIdentitiesCommandInput - {@link DeleteIdentitiesCommandInput}
 * @returns {@link DeleteIdentitiesCommandOutput}
 * @see {@link DeleteIdentitiesCommandInput} for command's `input` shape.
 * @see {@link DeleteIdentitiesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Thrown when the service encounters an error during processing the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Thrown for missing or bad input parameter(s).</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Thrown when a request is throttled.</p>
 *
 * @throws {@link CognitoIdentityServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentity service.</p>
 *
 */
export declare class DeleteIdentitiesCommand extends DeleteIdentitiesCommand_base {
}
