import type { StrictlyParseSelector } from './parser.js'

declare global {
  interface ParentNode {
    querySelector<S extends string, E extends StrictlyParseSelector<S>>(
      selector: S,
    ): [E] extends [never] ? never : E | null

    querySelectorAll<S extends string, E extends StrictlyParseSelector<S>>(
      selector: S,
    ): [E] extends [never] ? never : NodeListOf<E>
  }

  interface Element {
    closest<S extends string, E extends StrictlyParseSelector<S>>(
      selector: S,
    ): [E] extends [never] ? never : E | null
  }
}
