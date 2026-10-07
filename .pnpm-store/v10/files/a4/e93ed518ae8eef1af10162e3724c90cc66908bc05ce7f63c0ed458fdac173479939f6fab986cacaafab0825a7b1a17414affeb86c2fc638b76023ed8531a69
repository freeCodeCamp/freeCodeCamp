import {
  AnyNode,
  AtRule,
  Builder,
  Comment,
  Container,
  Declaration,
  Document,
  Root,
  Rule
} from './postcss.js'

declare namespace Stringifier {
  export { Stringifier_ as default }
}

declare class Stringifier_ {
  builder: Builder
  constructor(builder: Builder)
  atrule(node: AtRule, semicolon?: boolean): void
  beforeAfter(node: AnyNode, detect: 'after' | 'before'): string
  block(node: AnyNode, start: string): void
  body(node: Container): void
  comment(node: Comment): void
  decl(node: Declaration, semicolon?: boolean): void
  document(node: Document): void
  raw(node: AnyNode, own: null | string, detect?: string): boolean | string
  rawBeforeClose(root: Root): string | undefined
  rawBeforeComment(root: Root, node: Comment): string | undefined
  rawBeforeDecl(root: Root, node: Declaration): string | undefined
  rawBeforeOpen(root: Root): string | undefined
  rawBeforeRule(root: Root): string | undefined
  rawColon(root: Root): string | undefined
  rawEmptyBody(root: Root): string | undefined
  rawIndent(root: Root): string | undefined
  rawSemicolon(root: Root): boolean | undefined
  rawValue(node: AnyNode, prop: string): number | string
  root(node: Root): void
  rule(node: Rule): void
  stringify(node: AnyNode, semicolon?: boolean): void
}

declare class Stringifier extends Stringifier_ {}

export = Stringifier
