import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_GetCallerIdentityCommand, se_GetCallerIdentityCommand } from "../protocols/Aws_query";
export { $Command };
export class GetCallerIdentityCommand extends $Command
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
    .s("AWSSecurityTokenServiceV20110615", "GetCallerIdentity", {})
    .n("STSClient", "GetCallerIdentityCommand")
    .f(void 0, void 0)
    .ser(se_GetCallerIdentityCommand)
    .de(de_GetCallerIdentityCommand)
    .build() {
}
