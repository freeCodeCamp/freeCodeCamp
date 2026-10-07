import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetFederationTokenResponseFilterSensitiveLog, } from "../models/models_0";
import { de_GetFederationTokenCommand, se_GetFederationTokenCommand } from "../protocols/Aws_query";
export { $Command };
export class GetFederationTokenCommand extends $Command
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
    .s("AWSSecurityTokenServiceV20110615", "GetFederationToken", {})
    .n("STSClient", "GetFederationTokenCommand")
    .f(void 0, GetFederationTokenResponseFilterSensitiveLog)
    .ser(se_GetFederationTokenCommand)
    .de(de_GetFederationTokenCommand)
    .build() {
}
