import { Grammar } from './Grammar'
import { nullableParslet } from '../parslets/NullableParslets'
import { optionalParslet } from '../parslets/OptionalParslet'
import { numberParslet } from '../parslets/NumberParslet'
import { parenthesisParslet } from '../parslets/ParenthesisParslet'
import { specialTypesParslet } from '../parslets/SpecialTypesParslet'
import { notNullableParslet } from '../parslets/NotNullableParslet'
import { createParameterListParslet } from '../parslets/ParameterListParslet'
import { genericParslet } from '../parslets/GenericParslet'
import { unionParslet } from '../parslets/UnionParslets'

export const baseGrammar: Grammar = [
  nullableParslet,
  optionalParslet,
  numberParslet,
  parenthesisParslet,
  specialTypesParslet,
  notNullableParslet,
  createParameterListParslet({
    allowTrailingComma: true
  }),
  genericParslet,
  unionParslet,
  optionalParslet
]
