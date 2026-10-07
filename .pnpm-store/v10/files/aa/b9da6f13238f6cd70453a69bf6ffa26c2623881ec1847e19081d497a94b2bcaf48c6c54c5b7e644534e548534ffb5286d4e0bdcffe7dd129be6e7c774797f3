/** Options for parsing imports. */
type Options = {
  /**
   * If set to a file path, then {@link Import.moduleSpecifier.resolved} of
   * returned instances will be set to the result of calling
   * `require.resolve(moduleSpecifier.value)` from the given file path.
   * Otherwise, will be undefined.
   */
  readonly resolveFrom?: string
}

/**
 * A type representing what kind of module a specifier refers to.
 *
 * - 'unknown' if the module specifier is not a simple constant string literal
 * - 'invalid' if the module specifier is the empty string
 * - 'absolute' if the module specifier is an absolute file path
 * - 'relative' if the module specifier is a relative file path
 * - 'builtin' if the module specifier is the name of a builtin Node.js package
 * - 'package' otherwise
 */
type ModuleSpecifierType =
  | 'invalid'
  | 'absolute'
  | 'relative'
  | 'builtin'
  | 'package'
  | 'unknown'

/**
 * A type representing an import in JavaScript code.
 *
 * `code.substring(startIndex, endIndex)` returns the full import statement or
 * expression.
 */
type Import = {
  /** The start index of the import in the JavaScript (inclusive). */
  startIndex: number

  /** The end index of the import in the JavaScript (exclusive). */
  endIndex: number

  /** Whether the import is a dynamic import (e.g. `import('module')`). */
  isDynamicImport: boolean

  /**
   * A type representing the code specifiying the module being imported.
   *
   * `code.substring(moduleSpecifier.startIndex, moduleSpecifier.endIndex)`
   * returns the module specifier including quotes.
   */
  moduleSpecifier: {
    /**
     * What kind of module the specifier refers to.
     *
     * 'unknown' when `moduleSpecifier.isConstant` is false.
     */
    type: ModuleSpecifierType

    /** The start index of the specifier in the JavaScript (inclusive). */
    startIndex: number

    /** The end index of the specifier in the JavaScript (exclusive). */
    endIndex: number

    /**
     * True when the import is not a dynamic import (`isDynamicImport` is
     * false), or when the import is a dynamic import where the specifier is a
     * simple string literal (e.g. import('fs'), import("fs"), import(`fs`)).
     */
    isConstant: boolean

    /**
     * The module specifier as it was written in the code. For non-constant
     * dynamic imports it could be a complex expression.
     */
    code: string

    /**
     * `code` without string literal quotes and unescaped if `isConstant` is
     * true. Otherwise, it is undefined.
     */
    value?: string

    /** Set if the `resolveFrom` option is set and `value` is not undefined. */
    resolved?: string
  }

  /**
   * A type representing what is being imported from the module.
   *
   * Undefined if `isDynamicImport` is true.
   */
  importClause?: {
    /**
     * The default import identifier or undefined if the import statement does
     * not have a default import.
     */
    default?: string

    /**
     * An array of objects representing the named imports of the import
     * statement. It is empty if the import statement does not have any named
     * imports. Each object in the array has a specifier field set to the
     * imported identifier and a binding field set to the identifier for
     * accessing the imported value.
     * For example, `import { a, x as y } from 'something'` would have the
     * following array:
     * ```
     * [{ specifier: 'a', binding: 'a' }, { specifier: 'x', binding: 'y' }]
     * ```
     */
    named: { specifier: string; binding: string }[]

    /**
     * The namespace import identifier or undefined if the import statement does
     * not have a namespace import.
     */
    namespace?: string
  }
}

/**
 * A promise that resolves once WASM has finished loading.
 *
 * Await this promise to be certain calling `parseImportsSync` is safe.
 */
declare const wasmLoadPromise: Promise<void>

/**
 * Returns a promise resolving to a lazy iterable/iterator that iterates over
 * the imports in `code`.
 */
declare const parseImports: (
  code: string,
  options?: Options,
) => Promise<Iterable<Import>>

/**
 * Returns a lazy iterable/iterator that iterates over the imports in `code`.
 *
 * @throws if called before WASM has finished loading. Await `wasmLoadPromise`
 * to be sure it has finished.
 */
declare const parseImportsSync: (
  code: string,
  options?: Options,
) => Iterable<Import>

export { type Import, type ModuleSpecifierType, type Options, parseImports, parseImportsSync, wasmLoadPromise };
