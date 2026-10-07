/**
 * Adapted from the `change-case` library.
 *
 * Copyright (c) 2014 Blake Embrey (hello@blakeembrey.com)
 */

/** @internal */
export const lowerCase = (str: string) => str.toLowerCase()

/** @internal */
export const upperCase = (str: string) => str.toUpperCase()

interface Options {
  splitRegexp?: RegExp | ReadonlyArray<RegExp>
  stripRegexp?: RegExp | ReadonlyArray<RegExp>
  delimiter?: string
  transform?: (part: string, index: number, parts: ReadonlyArray<string>) => string
}

/**
 * Replace `re` in the input string with the replacement value.
 */
const replace = (input: string, re: RegExp | ReadonlyArray<RegExp>, value: string): string =>
  re instanceof RegExp
    ? input.replace(re, value)
    : re.reduce((input, re) => input.replace(re, value), input)

// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
const DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g]

// Remove all non-word characters.
const DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi

/**
 * Normalize the string into something other libraries can manipulate easier.
 */
const noCase = (input: string, options: Options = {}): string => {
  const {
    delimiter = " ",
    splitRegexp = DEFAULT_SPLIT_REGEXP,
    stripRegexp = DEFAULT_STRIP_REGEXP,
    transform = lowerCase
  } = options
  const result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0")
  let start = 0
  let end = result.length
  // Trim the delimiter from around the output string.
  while (result.charAt(start) === "\0") {
    start++
  }
  while (result.charAt(end - 1) === "\0") {
    end--
  }
  // Transform each token independently.
  return result.slice(start, end).split("\0").map(transform).join(delimiter)
}

const pascalCaseTransform = (input: string, index: number): string => {
  const firstChar = input.charAt(0)
  const lowerChars = input.substring(1).toLowerCase()
  if (index > 0 && firstChar >= "0" && firstChar <= "9") {
    return `_${firstChar}${lowerChars}`
  }
  return `${firstChar.toUpperCase()}${lowerChars}`
}

/** @internal */
export const pascalCase = (input: string, options?: Options): string =>
  noCase(input, {
    delimiter: "",
    transform: pascalCaseTransform,
    ...options
  })

const camelCaseTransform = (input: string, index: number): string =>
  index === 0
    ? input.toLowerCase()
    : pascalCaseTransform(input, index)

/** @internal */
export const camelCase = (input: string, options?: Options): string =>
  pascalCase(input, {
    transform: camelCaseTransform,
    ...options
  })

/** @internal */
export const constantCase = (input: string, options?: Options): string =>
  noCase(input, {
    delimiter: "_",
    transform: upperCase,
    ...options
  })

/** @internal */
export const kebabCase = (input: string, options?: Options) =>
  noCase(input, {
    delimiter: "-",
    ...options
  })

/** @internal */
export const snakeCase = (input: string, options?: Options) =>
  noCase(input, {
    delimiter: "_",
    ...options
  })
