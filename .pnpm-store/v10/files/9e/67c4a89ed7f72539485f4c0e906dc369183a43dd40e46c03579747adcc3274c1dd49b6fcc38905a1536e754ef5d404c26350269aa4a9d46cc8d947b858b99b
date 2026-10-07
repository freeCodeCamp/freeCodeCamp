import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";
import {
  CreateTokenCommandInput,
  CreateTokenCommandOutput,
} from "./commands/CreateTokenCommand";
import {
  CreateTokenWithIAMCommandInput,
  CreateTokenWithIAMCommandOutput,
} from "./commands/CreateTokenWithIAMCommand";
import {
  RegisterClientCommandInput,
  RegisterClientCommandOutput,
} from "./commands/RegisterClientCommand";
import {
  StartDeviceAuthorizationCommandInput,
  StartDeviceAuthorizationCommandOutput,
} from "./commands/StartDeviceAuthorizationCommand";
import { SSOOIDCClient } from "./SSOOIDCClient";
export interface SSOOIDC {
  createToken(
    args: CreateTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTokenCommandOutput>;
  createToken(
    args: CreateTokenCommandInput,
    cb: (err: any, data?: CreateTokenCommandOutput) => void
  ): void;
  createToken(
    args: CreateTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTokenCommandOutput) => void
  ): void;
  createTokenWithIAM(
    args: CreateTokenWithIAMCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTokenWithIAMCommandOutput>;
  createTokenWithIAM(
    args: CreateTokenWithIAMCommandInput,
    cb: (err: any, data?: CreateTokenWithIAMCommandOutput) => void
  ): void;
  createTokenWithIAM(
    args: CreateTokenWithIAMCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTokenWithIAMCommandOutput) => void
  ): void;
  registerClient(
    args: RegisterClientCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterClientCommandOutput>;
  registerClient(
    args: RegisterClientCommandInput,
    cb: (err: any, data?: RegisterClientCommandOutput) => void
  ): void;
  registerClient(
    args: RegisterClientCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterClientCommandOutput) => void
  ): void;
  startDeviceAuthorization(
    args: StartDeviceAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDeviceAuthorizationCommandOutput>;
  startDeviceAuthorization(
    args: StartDeviceAuthorizationCommandInput,
    cb: (err: any, data?: StartDeviceAuthorizationCommandOutput) => void
  ): void;
  startDeviceAuthorization(
    args: StartDeviceAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDeviceAuthorizationCommandOutput) => void
  ): void;
}
export declare class SSOOIDC extends SSOOIDCClient implements SSOOIDC {}
