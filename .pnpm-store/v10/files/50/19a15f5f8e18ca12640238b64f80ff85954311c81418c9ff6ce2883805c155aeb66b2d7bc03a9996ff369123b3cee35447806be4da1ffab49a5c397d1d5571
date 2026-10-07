import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAccountRolesRequestFilterSensitiveLog, } from "../models/models_0";
import { de_ListAccountRolesCommand, se_ListAccountRolesCommand } from "../protocols/Aws_restJson1";
export { $Command };
export class ListAccountRolesCommand extends $Command
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
    .s("SWBPortalService", "ListAccountRoles", {})
    .n("SSOClient", "ListAccountRolesCommand")
    .f(ListAccountRolesRequestFilterSensitiveLog, void 0)
    .ser(se_ListAccountRolesCommand)
    .de(de_ListAccountRolesCommand)
    .build() {
}
