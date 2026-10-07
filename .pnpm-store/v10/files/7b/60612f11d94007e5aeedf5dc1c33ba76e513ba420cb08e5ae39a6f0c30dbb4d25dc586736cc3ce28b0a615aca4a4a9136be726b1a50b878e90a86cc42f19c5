import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_ListIdentityPoolsCommand, se_ListIdentityPoolsCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class ListIdentityPoolsCommand extends $Command
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
    .s("AWSCognitoIdentityService", "ListIdentityPools", {})
    .n("CognitoIdentityClient", "ListIdentityPoolsCommand")
    .f(void 0, void 0)
    .ser(se_ListIdentityPoolsCommand)
    .de(de_ListIdentityPoolsCommand)
    .build() {
}
