import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTokenWithIAMRequestFilterSensitiveLog, CreateTokenWithIAMResponseFilterSensitiveLog, } from "../models/models_0";
import { de_CreateTokenWithIAMCommand, se_CreateTokenWithIAMCommand } from "../protocols/Aws_restJson1";
export { $Command };
export class CreateTokenWithIAMCommand extends $Command
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
    .s("AWSSSOOIDCService", "CreateTokenWithIAM", {})
    .n("SSOOIDCClient", "CreateTokenWithIAMCommand")
    .f(CreateTokenWithIAMRequestFilterSensitiveLog, CreateTokenWithIAMResponseFilterSensitiveLog)
    .ser(se_CreateTokenWithIAMCommand)
    .de(de_CreateTokenWithIAMCommand)
    .build() {
}
