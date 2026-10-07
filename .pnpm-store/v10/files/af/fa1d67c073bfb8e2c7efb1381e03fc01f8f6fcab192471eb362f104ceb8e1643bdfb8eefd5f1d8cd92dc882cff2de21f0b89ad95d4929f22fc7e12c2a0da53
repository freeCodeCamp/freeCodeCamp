import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartDeviceAuthorizationRequestFilterSensitiveLog, } from "../models/models_0";
import { de_StartDeviceAuthorizationCommand, se_StartDeviceAuthorizationCommand } from "../protocols/Aws_restJson1";
export { $Command };
export class StartDeviceAuthorizationCommand extends $Command
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
    .s("AWSSSOOIDCService", "StartDeviceAuthorization", {})
    .n("SSOOIDCClient", "StartDeviceAuthorizationCommand")
    .f(StartDeviceAuthorizationRequestFilterSensitiveLog, void 0)
    .ser(se_StartDeviceAuthorizationCommand)
    .de(de_StartDeviceAuthorizationCommand)
    .build() {
}
