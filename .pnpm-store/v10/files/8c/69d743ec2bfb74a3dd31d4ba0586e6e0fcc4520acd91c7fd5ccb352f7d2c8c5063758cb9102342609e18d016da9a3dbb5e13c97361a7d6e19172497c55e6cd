import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { LogoutRequestFilterSensitiveLog } from "../models/models_0";
import { de_LogoutCommand, se_LogoutCommand } from "../protocols/Aws_restJson1";
export { $Command };
export class LogoutCommand extends $Command
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
    .s("SWBPortalService", "Logout", {})
    .n("SSOClient", "LogoutCommand")
    .f(LogoutRequestFilterSensitiveLog, void 0)
    .ser(se_LogoutCommand)
    .de(de_LogoutCommand)
    .build() {
}
