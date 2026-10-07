import { baseGrammar } from './baseGrammar'
import { type Grammar } from './Grammar'
import { pathGrammar } from './pathGrammar'
import { createNameParslet } from '../parslets/NameParslet'
import { nullableParslet } from '../parslets/NullableParslets'
import { optionalParslet } from '../parslets/OptionalParslet'
import { stringValueParslet } from '../parslets/StringValueParslet'
import { numberParslet } from '../parslets/NumberParslet'
import { createFunctionParslet } from '../parslets/FunctionParslet'
import { createObjectParslet } from '../parslets/ObjectParslet'
import { createTupleParslet } from '../parslets/TupleParslet'
import { createVariadicParslet } from '../parslets/VariadicParslet'
import { typeOfParslet } from '../parslets/TypeOfParslet'
import { keyOfParslet } from '../parslets/KeyOfParslet'
import { importParslet } from '../parslets/ImportParslet'
import { createSpecialNamePathParslet } from '../parslets/SpecialNamePathParslet'
import { readonlyPropertyParslet } from '../parslets/ReadonlyPropertyParslet'
import { arrayBracketsParslet } from '../parslets/ArrayBracketsParslet'
import { arrowFunctionParslet } from '../parslets/ArrowFunctionParslet'
import { createNamePathParslet } from '../parslets/NamePathParslet'
import { intersectionParslet } from '../parslets/IntersectionParslet'
import { predicateParslet } from '../parslets/predicateParslet'
import { createObjectFieldParslet } from '../parslets/ObjectFieldParslet'
import { createKeyValueParslet } from '../parslets/KeyValueParslet'
import { objectSquaredPropertyParslet } from '../parslets/ObjectSquaredPropertyParslet'

const objectFieldGrammar: Grammar = [
  readonlyPropertyParslet,
  createNameParslet({
    allowedAdditionalTokens: ['module', 'event', 'keyof', 'event', 'external', 'in']
  }),
  nullableParslet,
  optionalParslet,
  stringValueParslet,
  numberParslet,
  createObjectFieldParslet({
    allowSquaredProperties: true,
    allowKeyTypes: false,
    allowOptional: true,
    allowReadonly: true
  }),
  objectSquaredPropertyParslet
]

export const typescriptGrammar: Grammar = [
  ...baseGrammar,
  createObjectParslet({
    allowKeyTypes: false,
    objectFieldGrammar
  }),
  typeOfParslet,
  keyOfParslet,
  importParslet,
  stringValueParslet,
  createFunctionParslet({
    allowWithoutParenthesis: true,
    allowNoReturnType: false,
    allowNamedParameters: ['this', 'new', 'args'],
    allowNewAsFunctionKeyword: true
  }),
  createTupleParslet({
    allowQuestionMark: false
  }),
  createVariadicParslet({
    allowEnclosingBrackets: false,
    allowPostfix: false
  }),
  createNameParslet({
    allowedAdditionalTokens: ['event', 'external', 'in']
  }),
  createSpecialNamePathParslet({
    allowedTypes: ['module'],
    pathGrammar
  }),
  arrayBracketsParslet,
  arrowFunctionParslet,
  createNamePathParslet({
    allowSquareBracketsOnAnyType: true,
    allowJsdocNamePaths: false,
    pathGrammar
  }),
  intersectionParslet,
  predicateParslet,
  createKeyValueParslet({
    allowVariadic: true,
    allowOptional: true
  })
]
