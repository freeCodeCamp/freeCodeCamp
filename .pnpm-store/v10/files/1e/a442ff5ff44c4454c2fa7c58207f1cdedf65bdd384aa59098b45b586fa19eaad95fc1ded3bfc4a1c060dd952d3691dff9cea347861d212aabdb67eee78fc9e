/**
 * Match arguments for overloaded functions that use the `...args: unknown[]` pattern. Arguments
 * are parsed using argument length only.
 */
export function Match(args, match) {
    return (match[args.length]?.(...args) ?? (() => {
        throw Error('Invalid Arguments');
    })());
}
