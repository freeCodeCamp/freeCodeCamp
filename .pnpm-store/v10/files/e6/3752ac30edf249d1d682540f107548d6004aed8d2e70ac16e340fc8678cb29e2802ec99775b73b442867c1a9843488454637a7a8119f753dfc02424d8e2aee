import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSessionTokenResponseFilterSensitiveLog, } from "../models/models_0";
import { de_GetSessionTokenCommand, se_GetSessionTokenCommand } from "../protocols/Aws_query";
export { $Command };
export class GetSessionTokenCommand extends $Command
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
    .s("AWSSecurityTokenServiceV20110615", "GetSessionToken", {})
    .n("STSClient", "GetSessionTokenCommand")
    .f(void 0, GetSessionTokenResponseFilterSensitiveLog)
    .ser(se_GetSessionTokenCommand)
    .de(de_GetSessionTokenCommand)
    .build() {
}
