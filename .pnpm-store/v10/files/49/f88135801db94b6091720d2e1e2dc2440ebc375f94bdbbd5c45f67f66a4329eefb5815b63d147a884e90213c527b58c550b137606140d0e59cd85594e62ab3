import { HandlerOptions as RawHandlerOptions, OperationContext } from '../../handler';
import type { Handler as NetlifyHandler, HandlerEvent as NetlifyHandlerEvent, HandlerContext as NetlifyHandlerContext } from '@netlify/functions';
/**
 * Handler options when using the netlify adapter
 *
 * @category Server/@netlify/functions
 */
export type HandlerOptions<Context extends OperationContext = undefined> = RawHandlerOptions<NetlifyHandlerEvent, NetlifyHandlerContext, Context>;
/**
 * Create a GraphQL over HTTP spec compliant request handler for netlify functions
 *
 * @category Server/@netlify/functions
 */
export declare function createHandler<Context extends OperationContext = undefined>(options: HandlerOptions<Context>): NetlifyHandler;
