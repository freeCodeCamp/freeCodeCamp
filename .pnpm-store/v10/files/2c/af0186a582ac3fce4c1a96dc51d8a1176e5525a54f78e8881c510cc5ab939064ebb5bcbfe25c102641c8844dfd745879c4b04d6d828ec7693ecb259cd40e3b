import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CognitoIdentityClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityClient";
import {
  ListIdentitiesInput,
  ListIdentitiesResponse,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListIdentitiesCommandInput extends ListIdentitiesInput {}
export interface ListIdentitiesCommandOutput
  extends ListIdentitiesResponse,
    __MetadataBearer {}
declare const ListIdentitiesCommand_base: {
  new (
    input: ListIdentitiesCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    ListIdentitiesCommandInput,
    ListIdentitiesCommandOutput,
    CognitoIdentityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class ListIdentitiesCommand extends ListIdentitiesCommand_base {}
