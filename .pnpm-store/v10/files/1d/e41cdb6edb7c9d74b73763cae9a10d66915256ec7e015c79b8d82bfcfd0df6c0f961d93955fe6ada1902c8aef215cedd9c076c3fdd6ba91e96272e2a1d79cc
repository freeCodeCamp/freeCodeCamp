import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssumeRoleWithSAMLRequestFilterSensitiveLog, AssumeRoleWithSAMLResponseFilterSensitiveLog, } from "../models/models_0";
import { de_AssumeRoleWithSAMLCommand, se_AssumeRoleWithSAMLCommand } from "../protocols/Aws_query";
export { $Command };
export class AssumeRoleWithSAMLCommand extends $Command
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
    .s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithSAML", {})
    .n("STSClient", "AssumeRoleWithSAMLCommand")
    .f(AssumeRoleWithSAMLRequestFilterSensitiveLog, AssumeRoleWithSAMLResponseFilterSensitiveLog)
    .ser(se_AssumeRoleWithSAMLCommand)
    .de(de_AssumeRoleWithSAMLCommand)
    .build() {
}
