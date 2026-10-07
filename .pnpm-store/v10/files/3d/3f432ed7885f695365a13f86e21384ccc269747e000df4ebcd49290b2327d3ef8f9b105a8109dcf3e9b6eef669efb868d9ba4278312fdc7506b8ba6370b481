import { type Grammar } from './Grammar'
import { createNamePathParslet } from '../parslets/NamePathParslet'
import { createNameParslet } from '../parslets/NameParslet'
import { stringValueParslet } from '../parslets/StringValueParslet'
import { numberParslet } from '../parslets/NumberParslet'
import { createSpecialNamePathParslet } from '../parslets/SpecialNamePathParslet'

const basePathGrammar: Grammar = [
  createNameParslet({
    allowedAdditionalTokens: ['external', 'module']
  }),
  stringValueParslet,
  numberParslet,
  createNamePathParslet({
    allowSquareBracketsOnAnyType: false,
    allowJsdocNamePaths: true,
    pathGrammar: null
  })
]

export const pathGrammar: Grammar = [
  ...basePathGrammar,
  createSpecialNamePathParslet({
    allowedTypes: ['event'],
    pathGrammar: basePathGrammar
  })
]
