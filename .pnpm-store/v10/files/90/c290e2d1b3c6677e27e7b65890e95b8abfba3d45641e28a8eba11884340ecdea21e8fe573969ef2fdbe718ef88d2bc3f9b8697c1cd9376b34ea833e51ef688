/**
 * The global configuration object for RxJS, used to configure things
 * like what Promise contructor should used to create Promises
 */
export declare const config: {
    /**
     * The promise constructor used by default for methods such as
     * {@link toPromise} and {@link forEach}
     */
    Promise: PromiseConstructorLike;
    /**
     * If true, turns on synchronous error rethrowing, which is a deprecated behavior
     * in v6 and higher. This behavior enables bad patterns like wrapping a subscribe
     * call in a try/catch block. It also enables producer interference, a nasty bug
     * where a multicast can be broken for all observers by a downstream consumer with
     * an unhandled error. DO NOT USE THIS FLAG UNLESS IT'S NEEDED TO BY TIME
     * FOR MIGRATION REASONS.
     */
    useDeprecatedSynchronousErrorHandling: boolean;
};
