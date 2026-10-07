import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CognitoIdentityClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityClient";
import {
  ListIdentityPoolsInput,
  ListIdentityPoolsResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListIdentityPoolsCommandInput extends ListIdentityPoolsInput {}
export interface ListIdentityPoolsCommandOutput
  extends ListIdentityPoolsResponse,
    __MetadataBearer {}
declare const ListIdentityPoolsCommand_base: {
  new (
    input: ListIdentityPoolsCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListIdentityPoolsCommandInput,
    ListIdentityPoolsCommandOutput,
    CognitoIdentityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListIdentityPoolsCommand extends ListIdentityPoolsCommand_base {}
