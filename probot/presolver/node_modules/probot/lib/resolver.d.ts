export declare const resolve: (appFnId: string, opts?: ResolveOptions | undefined) => any;
export declare type Resolver = (appFnId: string, opts: {
    basedir: string;
}) => string;
export interface ResolveOptions {
    basedir?: string;
    resolver?: Resolver;
}
