import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAccountsRequestFilterSensitiveLog } from "../models/models_0";
import { de_ListAccountsCommand, se_ListAccountsCommand } from "../protocols/Aws_restJson1";
export { $Command };
export class ListAccountsCommand extends $Command
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
    .s("SWBPortalService", "ListAccounts", {})
    .n("SSOClient", "ListAccountsCommand")
    .f(ListAccountsRequestFilterSensitiveLog, void 0)
    .ser(se_ListAccountsCommand)
    .de(de_ListAccountsCommand)
    .build() {
}
