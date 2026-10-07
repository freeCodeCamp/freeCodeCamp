import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  CognitoIdentityClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityClient";
import { DescribeIdentityPoolInput, IdentityPool } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeIdentityPoolCommandInput
  extends DescribeIdentityPoolInput {}
export interface DescribeIdentityPoolCommandOutput
  extends IdentityPool,
    __MetadataBearer {}
declare const DescribeIdentityPoolCommand_base: {
  new (
    input: DescribeIdentityPoolCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    DescribeIdentityPoolCommandInput,
    DescribeIdentityPoolCommandOutput,
    CognitoIdentityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class DescribeIdentityPoolCommand extends DescribeIdentityPoolCommand_base {}
