import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  RegisterClientRequest,
  RegisterClientResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSOOIDCClientResolvedConfig,
} from "../SSOOIDCClient";
export { __MetadataBearer, $Command };
export interface RegisterClientCommandInput extends RegisterClientRequest {}
export interface RegisterClientCommandOutput
  extends RegisterClientResponse,
    __MetadataBearer {}
declare const RegisterClientCommand_base: {
  new (
    input: RegisterClientCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    RegisterClientCommandInput,
    RegisterClientCommandOutput,
    SSOOIDCClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class RegisterClientCommand extends RegisterClientCommand_base {}
