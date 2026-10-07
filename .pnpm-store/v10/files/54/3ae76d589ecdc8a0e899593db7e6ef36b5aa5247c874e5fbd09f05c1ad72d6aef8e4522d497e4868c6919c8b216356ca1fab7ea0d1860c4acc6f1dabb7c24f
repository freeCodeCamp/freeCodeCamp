type Path = string | RegExp;
type PathParams<KeyType extends keyof any = string> = {
    [ParamName in KeyType]?: string | ReadonlyArray<string>;
};
interface Match {
    matches: boolean;
    params?: PathParams;
}
/**
 * Coerce a path supported by MSW into a path
 * supported by "path-to-regexp".
 */
declare function coercePath(path: string): string;
/**
 * Returns the result of matching given request URL against a mask.
 */
declare function matchRequestUrl(url: URL, path: Path, baseUrl?: string): Match;
declare function isPath(value: unknown): value is Path;

export { type Match, type Path, type PathParams, coercePath, isPath, matchRequestUrl };
