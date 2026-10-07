import type { Scope } from '../scope';
import type { Variable } from './Variable';
import { ESLintScopeVariable } from './ESLintScopeVariable';
export interface ImplicitLibVariableOptions {
    readonly eslintImplicitGlobalSetting?: ESLintScopeVariable['eslintImplicitGlobalSetting'];
    readonly isTypeVariable?: boolean;
    readonly isValueVariable?: boolean;
    readonly writeable?: boolean;
}
export interface LibDefinition {
    libs: readonly LibDefinition[];
    variables: readonly [string, ImplicitLibVariableOptions][];
}
/**
 * An variable implicitly defined by the TS Lib
 */
export declare class ImplicitLibVariable extends ESLintScopeVariable implements Variable {
    /**
     * `true` if the variable is valid in a type context, false otherwise
     */
    readonly isTypeVariable: boolean;
    /**
     * `true` if the variable is valid in a value context, false otherwise
     */
    readonly isValueVariable: boolean;
    constructor(scope: Scope, name: string, { eslintImplicitGlobalSetting, isTypeVariable, isValueVariable, writeable, }: ImplicitLibVariableOptions);
}
