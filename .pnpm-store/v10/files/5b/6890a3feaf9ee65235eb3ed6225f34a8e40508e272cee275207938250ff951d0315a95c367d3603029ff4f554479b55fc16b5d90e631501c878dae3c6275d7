import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_UpdateIdentityPoolCommand, se_UpdateIdentityPoolCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class UpdateIdentityPoolCommand extends $Command
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
    .s("AWSCognitoIdentityService", "UpdateIdentityPool", {})
    .n("CognitoIdentityClient", "UpdateIdentityPoolCommand")
    .f(void 0, void 0)
    .ser(se_UpdateIdentityPoolCommand)
    .de(de_UpdateIdentityPoolCommand)
    .build() {
}
