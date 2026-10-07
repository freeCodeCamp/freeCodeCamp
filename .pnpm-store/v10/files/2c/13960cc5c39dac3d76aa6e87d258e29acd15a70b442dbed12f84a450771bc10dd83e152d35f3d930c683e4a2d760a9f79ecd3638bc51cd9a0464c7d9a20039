'use strict'

import { Parser } from 'acorn'
import { importAttributesOrAssertions } from 'acorn-import-attributes'

const acornOpts = {
  ecmaVersion: 'latest',
  sourceType: 'module'
}

const parser = Parser.extend(importAttributesOrAssertions)

function warn (txt) {
  process.emitWarning(txt, 'get-esm-exports')
}

/**
 * Utilizes an AST parser to interpret ESM source code and build a list of
 * exported identifiers. In the baseline case, the list of identifiers will be
 * the simple identifier names as written in the source code of the module.
 * However, there is a special case:
 *
 * When an `export * from './foo.js'` line is encountered it is rewritten
 * as `* from ./foo.js`. This allows the interpreting code to recognize a
 * transitive export and recursively parse the indicated module. The returned
 * identifier list will have "* from ./foo.js" as an item.
 *
 * @param {object} params
 * @param {string} params.moduleSource The source code of the module to parse
 * and interpret.
 *
 * @returns {Set<string>} The identifiers exported by the module along with any
 * custom directives.
 */
export default function getEsmExports (moduleSource) {
  const exportedNames = new Set()
  const tree = parser.parse(moduleSource, acornOpts)
  for (const node of tree.body) {
    if (!node.type.startsWith('Export')) continue
    switch (node.type) {
      case 'ExportNamedDeclaration':
        if (node.declaration) {
          parseDeclaration(node, exportedNames)
        } else {
          parseSpecifiers(node, exportedNames)
        }
        break

      case 'ExportDefaultDeclaration': {
        exportedNames.add('default')
        break
      }

      case 'ExportAllDeclaration':
        if (node.exported) {
          exportedNames.add(node.exported.name)
        } else {
          exportedNames.add(`* from ${node.source.value}`)
        }
        break
      default:
        warn('unrecognized export type: ' + node.type)
    }
  }
  return exportedNames
}

function parseDeclaration (node, exportedNames) {
  switch (node.declaration.type) {
    case 'FunctionDeclaration':
      exportedNames.add(node.declaration.id.name)
      break
    case 'VariableDeclaration':
      for (const varDecl of node.declaration.declarations) {
        parseVariableDeclaration(varDecl, exportedNames)
      }
      break
    case 'ClassDeclaration':
      exportedNames.add(node.declaration.id.name)
      break
    default:
      warn('unknown declaration type: ' + node.delcaration.type)
  }
}

function parseVariableDeclaration (node, exportedNames) {
  switch (node.id.type) {
    case 'Identifier':
      exportedNames.add(node.id.name)
      break
    case 'ObjectPattern':
      for (const prop of node.id.properties) {
        exportedNames.add(prop.value.name)
      }
      break
    case 'ArrayPattern':
      for (const elem of node.id.elements) {
        exportedNames.add(elem.name)
      }
      break
    default:
      warn('unknown variable declaration type: ' + node.id.type)
  }
}

function parseSpecifiers (node, exportedNames) {
  for (const specifier of node.specifiers) {
    if (specifier.exported.type === 'Identifier') {
      exportedNames.add(specifier.exported.name)
    } else if (specifier.exported.type === 'Literal') {
      exportedNames.add(specifier.exported.value)
    } else {
      warn('unrecognized specifier type: ' + specifier.exported.type)
    }
  }
}
