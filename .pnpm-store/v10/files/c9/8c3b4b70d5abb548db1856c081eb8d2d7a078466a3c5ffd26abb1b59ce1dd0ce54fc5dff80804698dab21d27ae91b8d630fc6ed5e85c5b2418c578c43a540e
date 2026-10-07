import { createAggregatedClient } from "@smithy/smithy-client";
import { CreateTokenCommand } from "./commands/CreateTokenCommand";
import { CreateTokenWithIAMCommand, } from "./commands/CreateTokenWithIAMCommand";
import { RegisterClientCommand, } from "./commands/RegisterClientCommand";
import { StartDeviceAuthorizationCommand, } from "./commands/StartDeviceAuthorizationCommand";
import { SSOOIDCClient } from "./SSOOIDCClient";
const commands = {
    CreateTokenCommand,
    CreateTokenWithIAMCommand,
    RegisterClientCommand,
    StartDeviceAuthorizationCommand,
};
export class SSOOIDC extends SSOOIDCClient {
}
createAggregatedClient(commands, SSOOIDC);
