// Minimum TypeScript Version: 3.0
import {
  Buffer,
  BufferEncoding,
  SyntaxExtension,
  Token
} from 'micromark/dist/shared-types'
import {Root} from 'mdast'
import {Type} from 'micromark/dist/constant/types'

export = fromMarkdown

declare namespace fromMarkdown {
  interface MdastExtension {
    enter: Record<Type, (token: Token) => void>
    exit: Record<Type, (token: Token) => void>
  }

  interface Options {
    extensions?: SyntaxExtension[]
    mdastExtensions?: MdastExtension[]
  }
}

declare function fromMarkdown(
  value: string | Buffer,
  options?: fromMarkdown.Options
): Root

declare function fromMarkdown(
  value: string | Buffer,
  encoding?: BufferEncoding,
  options?: fromMarkdown.Options
): Root
