import type { LangChainOptions } from './types';
/**
 * Wraps a LangChain embedding method (embedQuery or embedDocuments) to create Sentry spans.
 *
 * Used internally by the Node.js auto-instrumentation to patch embedding class prototypes.
 */
export declare function instrumentEmbeddingMethod(originalMethod: (...args: unknown[]) => Promise<unknown>, options?: LangChainOptions): (...args: unknown[]) => Promise<unknown>;
/**
 * Wraps a LangChain embeddings instance to create Sentry spans for `embedQuery` and `embedDocuments` calls.
 *
 * Use this in non-Node runtimes (Cloudflare, browser, etc.) where auto-instrumentation is not available.
 *
 * @example
 * ```javascript
 * import * as Sentry from '@sentry/cloudflare';
 * import { OpenAIEmbeddings } from '@langchain/openai';
 *
 * const embeddings = Sentry.instrumentLangChainEmbeddings(
 *   new OpenAIEmbeddings({ model: 'text-embedding-3-small' })
 * );
 *
 * await embeddings.embedQuery('Hello world');
 * await embeddings.embedDocuments(['doc1', 'doc2']);
 * ```
 */
export declare function instrumentLangChainEmbeddings<T extends object>(instance: T, options?: LangChainOptions): T;
//# sourceMappingURL=embeddings.d.ts.map