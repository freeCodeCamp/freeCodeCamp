import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { AssumeRoleRequest, AssumeRoleResponse } from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  STSClientResolvedConfig,
} from "../STSClient";
export { __MetadataBearer, $Command };
export interface AssumeRoleCommandInput extends AssumeRoleRequest {}
export interface AssumeRoleCommandOutput
  extends AssumeRoleResponse,
    __MetadataBearer {}
declare const AssumeRoleCommand_base: {
  new (
    input: AssumeRoleCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    AssumeRoleCommandInput,
    AssumeRoleCommandOutput,
    STSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class AssumeRoleCommand extends AssumeRoleCommand_base {}
