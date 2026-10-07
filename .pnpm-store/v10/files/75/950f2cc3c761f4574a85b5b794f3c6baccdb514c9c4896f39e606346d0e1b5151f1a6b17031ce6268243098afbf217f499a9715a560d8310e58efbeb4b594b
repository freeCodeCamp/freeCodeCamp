import {LRParser} from "@lezer/lr"
import {Input, PartialParse, Parser, TreeCursor, ParseWrapper} from "@lezer/common"

export const parser: LRParser

export function configureNesting(tags?: readonly {
  tag: string,
  attrs?: (attrs: {[attr: string]: string}) => boolean,
  parser: Parser
}[], attributes?: {
  name: string,
  tagName?: string,
  parser: Parser
}[]): ParseWrapper
