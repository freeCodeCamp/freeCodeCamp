declare const AUTH_OPERATIONS_TO_INSTRUMENT: string[];
declare const AUTH_ADMIN_OPERATIONS_TO_INSTRUMENT: string[];
export declare const FILTER_MAPPINGS: {
    eq: string;
    neq: string;
    gt: string;
    gte: string;
    lt: string;
    lte: string;
    like: string;
    'like(all)': string;
    'like(any)': string;
    ilike: string;
    'ilike(all)': string;
    'ilike(any)': string;
    is: string;
    in: string;
    cs: string;
    cd: string;
    sr: string;
    nxl: string;
    sl: string;
    nxr: string;
    adj: string;
    ov: string;
    fts: string;
    plfts: string;
    phfts: string;
    wfts: string;
    not: string;
};
export declare const DB_OPERATIONS_TO_INSTRUMENT: string[];
type AuthOperationFn = (...args: unknown[]) => Promise<unknown>;
type AuthOperationName = (typeof AUTH_OPERATIONS_TO_INSTRUMENT)[number];
type AuthAdminOperationName = (typeof AUTH_ADMIN_OPERATIONS_TO_INSTRUMENT)[number];
type PostgRESTQueryOperationFn = (...args: unknown[]) => PostgRESTFilterBuilder;
export interface SupabaseClientInstance {
    auth: {
        admin: Record<AuthAdminOperationName, AuthOperationFn>;
    } & Record<AuthOperationName, AuthOperationFn>;
}
export interface PostgRESTQueryBuilder {
    [key: string]: PostgRESTQueryOperationFn;
}
export interface PostgRESTFilterBuilder {
    method: string;
    headers: Record<string, string>;
    url: URL;
    schema: string;
    body: any;
}
export interface SupabaseResponse {
    status?: number;
    error?: {
        message: string;
        code?: string;
        details?: unknown;
    };
}
export interface SupabaseError extends Error {
    code?: string;
    details?: unknown;
}
export interface SupabaseBreadcrumb {
    type: string;
    category: string;
    message: string;
    data?: {
        query?: string[];
        body?: Record<string, unknown>;
    };
}
export interface SupabaseClientConstructor {
    prototype: {
        from: (table: string) => PostgRESTQueryBuilder;
    };
}
export interface PostgRESTProtoThenable {
    then: <T>(onfulfilled?: ((value: T) => T | PromiseLike<T>) | null, onrejected?: ((reason: any) => T | PromiseLike<T>) | null) => Promise<T>;
}
/**
 * Extracts the database operation type from the HTTP method and headers
 * @param method - The HTTP method of the request
 * @param headers - The request headers
 * @returns The database operation type ('select', 'insert', 'upsert', 'update', or 'delete')
 */
export declare function extractOperation(method: string, headers?: Record<string, string>): string;
/**
 * Translates Supabase filter parameters into readable method names for tracing
 * @param key - The filter key from the URL search parameters
 * @param query - The filter value from the URL search parameters
 * @returns A string representation of the filter as a method call
 */
export declare function translateFiltersIntoMethods(key: string, query: string): string;
export declare const instrumentSupabaseClient: (supabaseClient: unknown, options?: {
    sendOperationData?: boolean;
}) => void;
interface SupabaseIntegrationOptions {
    supabaseClient: any;
    /**
     * Whether to attach PostgREST query filters and mutation body payloads
     * to Sentry telemetry.
     *
     * Falls back to `dataCollection.userInfo` when not set.
     * @default undefined
     */
    sendOperationData?: boolean;
}
export declare const supabaseIntegration: (options: SupabaseIntegrationOptions) => import("..").Integration;
export {};
//# sourceMappingURL=supabase.d.ts.map