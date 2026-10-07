import { createAggregatedClient } from "@smithy/smithy-client";
import { GetRoleCredentialsCommand, } from "./commands/GetRoleCredentialsCommand";
import { ListAccountRolesCommand, } from "./commands/ListAccountRolesCommand";
import { ListAccountsCommand, } from "./commands/ListAccountsCommand";
import { LogoutCommand } from "./commands/LogoutCommand";
import { SSOClient } from "./SSOClient";
const commands = {
    GetRoleCredentialsCommand,
    ListAccountRolesCommand,
    ListAccountsCommand,
    LogoutCommand,
};
export class SSO extends SSOClient {
}
createAggregatedClient(commands, SSO);
