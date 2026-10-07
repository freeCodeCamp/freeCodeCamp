import { Identity, IdentityProvider } from "@smithy/types";
/**
 * @internal
 */
export declare const createIsIdentityExpiredFunction: (expirationMs: number) => (identity: Identity) => boolean;
/**
 * @internal
 * This may need to be configurable in the future, but for now it is defaulted to 5min.
 */
export declare const EXPIRATION_MS = 300000;
/**
 * @internal
 */
export declare const isIdentityExpired: (identity: Identity) => boolean;
/**
 * @internal
 */
export declare const doesIdentityRequireRefresh: (identity: Identity) => boolean;
/**
 * @internal
 */
export interface MemoizedIdentityProvider<IdentityT extends Identity> {
    (options?: Record<string, any> & {
        forceRefresh?: boolean;
    }): Promise<IdentityT>;
}
/**
 * @internal
 */
export declare const memoizeIdentityProvider: <IdentityT extends Identity>(provider: IdentityT | IdentityProvider<IdentityT> | undefined, isExpired: (resolved: Identity) => boolean, requiresRefresh: (resolved: Identity) => boolean) => MemoizedIdentityProvider<IdentityT> | undefined;
