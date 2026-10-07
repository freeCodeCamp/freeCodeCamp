const { createMacro, MacroError } = require('babel-plugin-macros')
const { addNamed } = require('@babel/helper-module-imports')
const {
  FAFamilyIds,
  FAFamilyClassicId,
  FAFamilyDuotoneId
} = require('@fortawesome-internal-tools/fontawesome-icons/canonical')
const { FALegacyStyleIds } = require('@fortawesome-internal-tools/fontawesome-icons/legacy')

module.exports = createMacro(importer, {
  configName: 'fontawesome-svg-core'
})

const styles = FALegacyStyleIds

const macroNames = [...styles, 'icon']

const families = FAFamilyIds.map((family) => family.toLowerCase())

function importer({ references, state, babel, source, config }) {
  const license = config !== undefined ? config.license : 'free'

  if (!['free', 'pro'].includes(license)) {
    throw new Error("config license must be either 'free' or 'pro'")
  }

  Object.keys(references).forEach((key) => {
    replace({
      macroName: key,
      license,
      references: references[key],
      state,
      babel,
      source
    })
  })
}

function replace({ macroName, license, references, state, babel }) {
  references.forEach((nodePath) => {
    const { iconName, style, family } = resolveReplacement({ nodePath, babel, state, macroName })

    const name = `fa${capitalize(camelCase(iconName))}`
    const importFrom = getImport({ family, style, license, name })

    const importName = addNamed(nodePath, name, importFrom)

    nodePath.parentPath.replaceWith(importName)
  })
}

function getImport({ family, style, license, name }) {
  if (family) {
    return `@fortawesome/${family.toLowerCase()}-${style}-svg-icons/${name}`
  } else if (style === 'brands') {
    return `@fortawesome/free-brands-svg-icons/${name}`
  } else {
    return `@fortawesome/${license}-${style}-svg-icons/${name}`
  }
}

function resolveReplacement({ nodePath, babel, state, macroName }) {
  if ('icon' === macroName) {
    return resolveReplacementIcon({ nodePath, babel, state, macroName })
  } else {
    return resolveReplacementLegacyStyle({ nodePath, babel, state, macroName })
  }
}

// The macros corresonding to legacy style names: solid(), regular(), light(), thin(), duotone(), brands().
function resolveReplacementLegacyStyle({ nodePath, babel, macroName }) {
  const { types: t } = babel
  const { parentPath } = nodePath

  if (!styles.includes(macroName)) {
    throw parentPath.buildCodeFrameError(
      `${macroName} is not a valid macro name. Use one of ${macroNames.join(', ')}`,
      MacroError
    )
  }

  if (parentPath.node.arguments) {
    if (parentPath.node.arguments.length < 1) {
      throw parentPath.buildCodeFrameError(
        `Received an invalid number of arguments for ${macroName} macro: must be exactly 1`,
        MacroError
      )
    }

    if (parentPath.node.arguments.length > 1) {
      throw parentPath.buildCodeFrameError(
        `Received an invalid number of arguments for ${macroName} macro: must be exactly 1`,
        MacroError
      )
    }

    if (
      (parentPath.node.arguments.length === 1 || parentPath.node.arguments.length === 2) &&
      t.isStringLiteral(parentPath.node.arguments[0]) &&
      nodePath.parentPath.node.arguments[0].value.startsWith('fa-')
    ) {
      throw parentPath.buildCodeFrameError(
        `Don't begin the icon name with fa-, just use ${nodePath.parentPath.node.arguments[0].value.slice(3)}`,
        MacroError
      )
    }

    if (
      (parentPath.node.arguments.length === 1 || parentPath.node.arguments.length === 2) &&
      !t.isStringLiteral(parentPath.node.arguments[0])
    ) {
      throw parentPath.buildCodeFrameError(
        'Only string literals are supported when referencing icons (use a string here instead)',
        MacroError
      )
    }
  } else {
    throw parentPath.buildCodeFrameError('Pass the icon name you would like to import as an argument.', MacroError)
  }

  return {
    iconName: nodePath.parentPath.node.arguments[0].value,
    style: macroName,
    family: undefined
  }
}

// The icon() macro.
function resolveReplacementIcon({ nodePath, babel, macroName }) {
  const { types: t } = babel
  const { parentPath } = nodePath

  if ('icon' !== macroName) {
    throw parentPath.buildCodeFrameError(
      `${macroName} is not a valid macro name. Use one of ${macroNames.join(', ')}`,
      MacroError
    )
  }

  if (parentPath.node.arguments.length !== 1) {
    throw parentPath.buildCodeFrameError(
      `Received an invalid number of arguments for ${macroName} macro: must be exactly 1`,
      MacroError
    )
  }

  if (!t.isObjectExpression(parentPath.node.arguments[0])) {
    throw parentPath.buildCodeFrameError(
      "Only object expressions are supported when referencing icons with this macro, like this: { name: 'star' }",
      MacroError
    )
  }

  const properties = parentPath.node.arguments[0].properties || []

  const namePropIndex = properties.findIndex((prop) => 'name' === prop.key.name)

  const name =
    namePropIndex >= 0
      ? getStringLiteralPropertyValue(t, parentPath, parentPath.node.arguments[0].properties[namePropIndex])
      : undefined

  if (!name) {
    throw parentPath.buildCodeFrameError(
      'The object argument to the icon() macro must have a name property',
      MacroError
    )
  }

  const stylePropIndex = properties.findIndex((prop) => 'style' === prop.key.name)

  let style =
    stylePropIndex >= 0
      ? getStringLiteralPropertyValue(t, parentPath, parentPath.node.arguments[0].properties[stylePropIndex])
      : undefined

  if (style && !styles.includes(style)) {
    throw parentPath.buildCodeFrameError(
      `Invalid style name: ${style}. It must be one of the following: ${styles.join(', ')}`,
      MacroError
    )
  }

  const familyPropIndex = properties.findIndex((prop) => 'family' === prop.key.name)

  let family =
    familyPropIndex >= 0
      ? getStringLiteralPropertyValue(t, parentPath, parentPath.node.arguments[0].properties[familyPropIndex])
      : undefined

  if (family && !families.includes(family)) {
    throw parentPath.buildCodeFrameError(
      `Invalid family name: ${family}. It must be one of the following: ${families.join(', ')}`,
      MacroError
    )
  }

  if (FAFamilyDuotoneId === style && family && FAFamilyClassicId !== family) {
    throw parentPath.buildCodeFrameError(
      `duotone cannot be used as a style name with any family other than classic`,
      MacroError
    )
  }

  if ('brands' === style && family && FAFamilyClassicId !== family) {
    throw parentPath.buildCodeFrameError(
      `brands cannot be used as a style name with any family other than classic`,
      MacroError
    )
  }

  if (family && !style) {
    throw parentPath.buildCodeFrameError(`When a family is specified, a style must also be specified`, MacroError)
  }

  if (FAFamilyDuotoneId === style || FAFamilyDuotoneId === family) {
    family = undefined
    style = FAFamilyDuotoneId
  }

  if ('brands' === style) {
    family = undefined
  }

  // defaults
  if (!style) {
    style = 'solid'
  }

  if (FAFamilyClassicId === family) {
    family = undefined
  }

  return {
    iconName: name,
    family,
    style
  }
}

function getStringLiteralPropertyValue(t, parentPath, property) {
  if (!('object' === typeof t && 'function' === typeof t.isStringLiteral)) {
    throw Error('ERROR: invalid babel-types arg. This is probably a programming error in import.macro')
  }

  if (!('object' === typeof property && 'object' === typeof property.value && 'object' == typeof property.key)) {
    throw Error('ERROR: invalid babel property arg. This is probably a programming error in import.macro')
  }

  if (!('object' === typeof parentPath && 'function' === typeof parentPath.buildCodeFrameError)) {
    throw Error('ERROR: invalid babel parentPath arg. This is probably a programming error in import.macro')
  }

  if (!t.isStringLiteral(property.value)) {
    throw parentPath.buildCodeFrameError(
      `Only string literals are supported for the ${property.key.name} property (use a string here instead)`,
      MacroError
    )
  }

  return property.value.value
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1)
}

function camelCase(str) {
  return str
    .split('-')
    .map((s, index) => {
      return (index === 0 ? s[0].toLowerCase() : s[0].toUpperCase()) + s.slice(1).toLowerCase()
    })
    .join('')
}
