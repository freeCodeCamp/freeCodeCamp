import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_DeleteIdentityPoolCommand, se_DeleteIdentityPoolCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class DeleteIdentityPoolCommand extends $Command
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSCognitoIdentityService", "DeleteIdentityPool", {})
    .n("CognitoIdentityClient", "DeleteIdentityPoolCommand")
    .f(void 0, void 0)
    .ser(se_DeleteIdentityPoolCommand)
    .de(de_DeleteIdentityPoolCommand)
    .build() {
}
