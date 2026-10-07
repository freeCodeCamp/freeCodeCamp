# @marijn/find-cluster-break

Small JavaScript module for finding grapheme cluster breaks in
strings, scanning from a given position.

```javascript
import {findClusterBreak} from "@marijn/find-cluster-break"
console.log(findClusterBreak("💪🏽🦋", 0))
// → 4
```

This code is open source, released under an MIT license.
    
## Documentation

**`findClusterBreak`**`(str: string, pos: number, forward = true, includeExtending = true): number`

Returns a next grapheme cluster break _after_ (not equal to) `pos`,
if `forward` is true, or before otherwise. Returns `pos` itself if no
further cluster break is available in the string. Moves across
surrogate pairs, extending characters (when `includeExtending` is
true, which is the default), characters joined with zero-width joiners,
and flag emoji.

**`isExtendingChar`**`(code: number): boolean`

Query whether the given character has a `Grapheme_Cluster_Break` value
of `Extend` in Unicode.
