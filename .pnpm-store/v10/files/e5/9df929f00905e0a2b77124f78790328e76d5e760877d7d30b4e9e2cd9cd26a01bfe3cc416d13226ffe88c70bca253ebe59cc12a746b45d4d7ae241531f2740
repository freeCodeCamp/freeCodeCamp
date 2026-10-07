import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { CreateTokenRequest, CreateTokenResponse } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SSOOIDCClientResolvedConfig,
} from "../SSOOIDCClient";
export { __MetadataBearer, $Command };
export interface CreateTokenCommandInput extends CreateTokenRequest {}
export interface CreateTokenCommandOutput
  extends CreateTokenResponse,
    __MetadataBearer {}
declare const CreateTokenCommand_base: {
  new (
    input: CreateTokenCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    CreateTokenCommandInput,
    CreateTokenCommandOutput,
    SSOOIDCClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class CreateTokenCommand extends CreateTokenCommand_base {}
