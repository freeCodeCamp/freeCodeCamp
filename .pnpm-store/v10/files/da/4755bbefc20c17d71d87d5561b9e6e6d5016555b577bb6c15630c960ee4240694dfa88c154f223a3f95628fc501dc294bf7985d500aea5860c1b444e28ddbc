import type { Scope } from '../../scope';
import type { HttpIncomingMessage } from './types';
import { type MaxRequestBodySize } from '../../utils/request';
/**
 * This method patches the request object to capture the body.
 * Instead of actually consuming the streamed body ourselves, which has
 * potential side effects, we monkey patch `req.on('data')` to intercept
 * the body chunks. This way, we only read the body if the user also consumes
 * the body, ensuring we do not change any behavior in unexpected ways.
 */
export declare function patchRequestToCaptureBody(req: HttpIncomingMessage, isolationScope: Scope, maxIncomingRequestBodySize: Exclude<MaxRequestBodySize, 'none'>, integrationName: string): void;
//# sourceMappingURL=patch-request-to-capture-body.d.ts.map