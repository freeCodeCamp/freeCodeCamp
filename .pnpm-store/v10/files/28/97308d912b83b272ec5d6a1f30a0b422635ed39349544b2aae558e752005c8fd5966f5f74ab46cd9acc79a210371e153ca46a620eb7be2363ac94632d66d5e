import { createAggregatedClient } from "@smithy/smithy-client";
import { AssumeRoleCommand } from "./commands/AssumeRoleCommand";
import { AssumeRoleWithSAMLCommand, } from "./commands/AssumeRoleWithSAMLCommand";
import { AssumeRoleWithWebIdentityCommand, } from "./commands/AssumeRoleWithWebIdentityCommand";
import { DecodeAuthorizationMessageCommand, } from "./commands/DecodeAuthorizationMessageCommand";
import { GetAccessKeyInfoCommand, } from "./commands/GetAccessKeyInfoCommand";
import { GetCallerIdentityCommand, } from "./commands/GetCallerIdentityCommand";
import { GetFederationTokenCommand, } from "./commands/GetFederationTokenCommand";
import { GetSessionTokenCommand, } from "./commands/GetSessionTokenCommand";
import { STSClient } from "./STSClient";
const commands = {
    AssumeRoleCommand,
    AssumeRoleWithSAMLCommand,
    AssumeRoleWithWebIdentityCommand,
    DecodeAuthorizationMessageCommand,
    GetAccessKeyInfoCommand,
    GetCallerIdentityCommand,
    GetFederationTokenCommand,
    GetSessionTokenCommand,
};
export class STS extends STSClient {
}
createAggregatedClient(commands, STS);
