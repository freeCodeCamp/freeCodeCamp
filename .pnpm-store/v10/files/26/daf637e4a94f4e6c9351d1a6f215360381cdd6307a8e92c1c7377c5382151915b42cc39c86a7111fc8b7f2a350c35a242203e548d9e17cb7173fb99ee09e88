import {
  AbsoluteLocation,
  BuildHandler,
  BuildHandlerOptions,
  HandlerExecutionContext,
  MetadataBearer,
  Pluggable,
} from "@smithy/types";
import { UserAgentResolvedConfig } from "./configurations";
export declare const userAgentMiddleware: (
  options: UserAgentResolvedConfig
) => <Output extends MetadataBearer>(
  next: BuildHandler<any, any>,
  context: HandlerExecutionContext
) => BuildHandler<any, any>;
export declare const getUserAgentMiddlewareOptions: BuildHandlerOptions &
  AbsoluteLocation;
export declare const getUserAgentPlugin: (
  config: UserAgentResolvedConfig
) => Pluggable<any, any>;
