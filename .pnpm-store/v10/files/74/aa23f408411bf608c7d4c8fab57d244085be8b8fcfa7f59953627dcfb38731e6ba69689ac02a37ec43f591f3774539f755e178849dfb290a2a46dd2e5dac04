import type { MinimatchOptions } from './index.js';
/**
 * Escape all magic characters in a glob pattern.
 *
 * If the {@link MinimatchOptions.windowsPathsNoEscape}
 * option is used, then characters are escaped by wrapping in `[]`, because
 * a magic character wrapped in a character class can only be satisfied by
 * that exact character.  In this mode, `\` is _not_ escaped, because it is
 * not interpreted as a magic character, but instead as a path separator.
 *
 * If the {@link MinimatchOptions.magicalBraces} option is used,
 * then braces (`{` and `}`) will be escaped.
 */
export declare const escape: (s: string, { windowsPathsNoEscape, magicalBraces, }?: Pick<MinimatchOptions, "windowsPathsNoEscape" | "magicalBraces">) => string;
//# sourceMappingURL=escape.d.ts.map