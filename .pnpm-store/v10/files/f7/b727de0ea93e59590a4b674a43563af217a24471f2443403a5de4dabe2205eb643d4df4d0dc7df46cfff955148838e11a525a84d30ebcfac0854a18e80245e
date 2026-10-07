// Minimum TypeScript Version: 3.0
import {Node, Parent} from 'unist'

export = toMarkdown

declare namespace toMarkdown {
  interface SafeOptions {
    before: string
    after: string
  }

  type Handle = (
    node: Node,
    parent: Parent | null | undefined,
    context: Context,
    safeOptions: SafeOptions
  ) => string

  interface Context {
    stack: string[]
    enter: (type: string) => () => void
    options: Options
    unsafe: Unsafe[]
    join: Join[]
    handle: Handle
  }

  interface Handlers {
    [key: string]: Handler
  }

  interface Handler {
    peek?: Handle
    (
      node: Node,
      parent: Parent | null | undefined,
      context: Context,
      safeOptions: SafeOptions
    ): string
  }

  interface Unsafe {
    character: string
    inConstruct?: string | string[]
    notInConstruct?: string | string[]
    after?: string
    before?: string
    atBreak?: boolean
  }

  type Join = (
    left: Node,
    right: Node,
    parent: Parent,
    context: Context
  ) => boolean | null | void

  interface Options {
    bullet?: '-' | '*' | '+'
    closeAtx?: boolean
    emphasis?: '_' | '*'
    fence?: '~' | '`'
    fences?: boolean
    incrementListMarker?: boolean
    listItemIndent?: 'tab' | 'one' | 'mixed'
    quote?: '"' | "'"
    resourceLink?: boolean
    rule?: '-' | '_' | '*'
    ruleRepetition?: number
    ruleSpaces?: boolean
    setext?: boolean
    strong?: '_' | '*'
    tightDefinitions?: boolean

    extensions?: Options[]
    handlers?: Handlers
    join?: Join[]
    unsafe?: Unsafe[]
  }
}

declare function toMarkdown(node: Node, options?: toMarkdown.Options): string
