import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssumeRoleWithWebIdentityRequestFilterSensitiveLog, AssumeRoleWithWebIdentityResponseFilterSensitiveLog, } from "../models/models_0";
import { de_AssumeRoleWithWebIdentityCommand, se_AssumeRoleWithWebIdentityCommand } from "../protocols/Aws_query";
export { $Command };
export class AssumeRoleWithWebIdentityCommand extends $Command
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
    .s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {})
    .n("STSClient", "AssumeRoleWithWebIdentityCommand")
    .f(AssumeRoleWithWebIdentityRequestFilterSensitiveLog, AssumeRoleWithWebIdentityResponseFilterSensitiveLog)
    .ser(se_AssumeRoleWithWebIdentityCommand)
    .de(de_AssumeRoleWithWebIdentityCommand)
    .build() {
}
