/**
 Query whether the given character has a `Grapheme_Cluster_Break`
 value of `Extend` in Unicode.
*/
export declare function isExtendingChar(code: number): boolean

/**
 Returns a next grapheme cluster break _after_ (not equal to) `pos`,
 if `forward` is true, or before otherwise. Returns `pos` itself if no
 further cluster break is available in the string. Moves across
 surrogate pairs, extending characters (when `includeExtending` is
 true, which is the default), characters joined with zero-width joiners,
 and flag emoji.
*/
export declare function findClusterBreak(str: string, pos: number, forward?: boolean, includeExtending?: boolean): number
