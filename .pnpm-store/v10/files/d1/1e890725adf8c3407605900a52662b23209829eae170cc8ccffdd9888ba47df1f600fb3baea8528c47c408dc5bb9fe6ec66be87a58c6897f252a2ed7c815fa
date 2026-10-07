import type { StackFrame } from '../types/stackframe';
type StackFrameIteratee = (frame: StackFrame) => StackFrame;
interface RewriteFramesOptions {
    /**
     * Root path (the beginning of the path) that will be stripped from the frames' filename.
     *
     * This option has slightly different behaviour in the browser and on servers:
     * - In the browser, the value you provide in `root` will be stripped from the beginning stack frames' paths (if the path started with the value).
     * - On the server, the root value will only replace the beginning of stack frame filepaths, when the path is absolute. If no `root` value is provided and the path is absolute, the frame will be reduced to only the filename and the provided `prefix` option.
     *
     * Browser example:
     * - Original frame: `'http://example.com/my/path/static/asset.js'`
     * - `root: 'http://example.com/my/path'`
     * - `assetPrefix: 'app://'`
     * - Resulting frame: `'app:///static/asset.js'`
     *
     * Server example:
     * - Original frame: `'/User/local/my/path/static/asset.js'`
     * - `root: '/User/local/my/path'`
     * - `assetPrefix: 'app://'`
     * - Resulting frame: `'app:///static/asset.js'`
     */
    root?: string;
    /**
     * A custom prefix that stack frames will be prepended with.
     *
     * Default: `'app://'`
     *
     * This option has slightly different behaviour in the browser and on servers:
     * - In the browser, the value you provide in `prefix` will prefix the resulting filename when the value you provided in `root` was applied. Effectively replacing whatever `root` matched in the beginning of the frame with `prefix`.
     * - On the server, the prefix is applied to all stackframes with absolute paths. On Windows, the drive identifier (e.g. "C://") is replaced with the prefix.
     */
    prefix?: string;
    /**
     * Defines an iterator that is used to iterate through all of the stack frames for modification before being sent to Sentry.
     * Setting this option will effectively disable both the `root` and the `prefix` options.
     */
    iteratee?: StackFrameIteratee;
}
/**
 * Rewrite event frames paths.
 */
export declare const rewriteFramesIntegration: (options?: RewriteFramesOptions | undefined) => import("..").Integration;
/**
 * Exported only for tests.
 */
export declare function generateIteratee({ isBrowser, root, prefix, }: {
    isBrowser: boolean;
    root?: string;
    prefix: string;
}): StackFrameIteratee;
export {};
//# sourceMappingURL=rewriteframes.d.ts.map