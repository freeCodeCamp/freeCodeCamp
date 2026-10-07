import type { TSESLint, TSESTree } from '@typescript-eslint/utils';
/**
 * Generates report loc suitable for reporting on how a class member is
 * declared, rather than how it's implemented.
 *
 * ```ts
 * class A {
 *   abstract method(): void;
 *   ~~~~~~~~~~~~~~~
 *
 *   concreteMethod(): void {
 *   ~~~~~~~~~~~~~~
 *      // code
 *   }
 *
 *   abstract private property?: string;
 *   ~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *   @decorator override concreteProperty = 'value';
 *              ~~~~~~~~~~~~~~~~~~~~~~~~~
 * }
 * ```
 */
export declare function getMemberHeadLoc(sourceCode: Readonly<TSESLint.SourceCode>, node: TSESTree.AccessorProperty | TSESTree.MethodDefinition | TSESTree.PropertyDefinition | TSESTree.TSAbstractAccessorProperty | TSESTree.TSAbstractMethodDefinition | TSESTree.TSAbstractPropertyDefinition): TSESTree.SourceLocation;
/**
 * Generates report loc suitable for reporting on how a parameter property is
 * declared.
 *
 * ```ts
 * class A {
 *   constructor(private property: string = 'value') {
 *               ~~~~~~~~~~~~~~~~
 *   }
 * ```
 */
export declare function getParameterPropertyHeadLoc(sourceCode: Readonly<TSESLint.SourceCode>, node: TSESTree.TSParameterProperty, nodeName: string): TSESTree.SourceLocation;
