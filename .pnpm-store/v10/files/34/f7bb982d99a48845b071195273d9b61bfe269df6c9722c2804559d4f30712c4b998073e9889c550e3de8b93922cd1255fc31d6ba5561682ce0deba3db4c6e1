import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterClientResponseFilterSensitiveLog, } from "../models/models_0";
import { de_RegisterClientCommand, se_RegisterClientCommand } from "../protocols/Aws_restJson1";
export { $Command };
export class RegisterClientCommand extends $Command
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
    .s("AWSSSOOIDCService", "RegisterClient", {})
    .n("SSOOIDCClient", "RegisterClientCommand")
    .f(void 0, RegisterClientResponseFilterSensitiveLog)
    .ser(se_RegisterClientCommand)
    .de(de_RegisterClientCommand)
    .build() {
}
