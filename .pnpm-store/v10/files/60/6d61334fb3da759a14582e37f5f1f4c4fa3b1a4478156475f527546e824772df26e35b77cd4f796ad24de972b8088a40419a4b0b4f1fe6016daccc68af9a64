import type { Definition, ImportBindingDefinition } from '@typescript-eslint/scope-manager';
/**
 * Determine whether a variable definition is a type import. e.g.:
 *
 * ```ts
 * import type { Foo } from 'foo';
 * import { type Bar } from 'bar';
 * ```
 *
 * @param definition - The variable definition to check.
 */
export declare function isTypeImport(definition?: Definition): definition is ImportBindingDefinition;
