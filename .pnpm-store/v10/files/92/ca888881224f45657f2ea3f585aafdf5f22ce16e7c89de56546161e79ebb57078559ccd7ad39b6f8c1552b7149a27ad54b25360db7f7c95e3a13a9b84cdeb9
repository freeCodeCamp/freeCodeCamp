// TypeScript Version: 3.0

import {Point} from 'unist'
import {VFile} from 'vfile'

declare namespace vfileLocation {
  type PositionalPoint = Pick<Point, 'line' | 'column'>
  type FullPoint = Required<Point>
  type Offset = NonNullable<Point['offset']>
  /** @deprecated */
  type Position = PositionalPoint

  interface Location {
    /**
     * Get the offset for a line and column based position in the bound file.
     * Returns `-1` when given invalid or out of bounds input.
     */
    toOffset: (point: PositionalPoint) => Offset

    /**
     * Get the line and column-based point for offset in the bound file.
     */
    toPoint: (offset: Offset) => FullPoint
    /** @deprecated */
    toPosition: (offset: Offset) => FullPoint
  }
}

/**
 * Get transform functions for the given `document`.
 */
declare function vfileLocation(document: string | VFile): vfileLocation.Location

export = vfileLocation
