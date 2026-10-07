import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CognitoIdentityClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityClient";
import { TagResourceInput, TagResourceResponse } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface TagResourceCommandInput extends TagResourceInput {}
export interface TagResourceCommandOutput
  extends TagResourceResponse,
    __MetadataBearer {}
declare const TagResourceCommand_base: {
  new (
    input: TagResourceCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    TagResourceCommandInput,
    TagResourceCommandOutput,
    CognitoIdentityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class TagResourceCommand extends TagResourceCommand_base {}
