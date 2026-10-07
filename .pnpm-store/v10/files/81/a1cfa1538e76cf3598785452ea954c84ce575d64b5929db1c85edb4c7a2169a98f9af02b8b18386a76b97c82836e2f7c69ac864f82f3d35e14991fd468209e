/**
* Resolve an absolute path from {@link root}, but only
* if {@link input} isn't already absolute.
*
* @param input The path to resolve.
* @param root The base path; default = process.cwd()
* @returns The resolved absolute path.
*/
export declare function absolute(input: string, root?: string): string;
/**
* Resolve a module path from a given root directory.
*
* Emulates [`require.resolve`](https://nodejs.org/docs/latest/api/modules.html#requireresolverequest-options), so module identifiers are allowed.
*
* @see resolve-from
*/
export declare function from(root: URL | string, ident: string, silent: true): string | undefined;
export declare function from(root: URL | string, ident: string, silent?: false): string;
export declare function from(root: URL | string, ident: string, silent?: boolean): string | undefined;
/**
* Resolve a module path from the current working directory.
*
* Alias for {@link from} using the CWD as its root.
*
* @see resolve-cwd
*/
export declare function cwd(ident: string, silent: true): string | undefined;
export declare function cwd(ident: string, silent?: false): string;
export declare function cwd(ident: string, silent?: boolean): string | undefined;
