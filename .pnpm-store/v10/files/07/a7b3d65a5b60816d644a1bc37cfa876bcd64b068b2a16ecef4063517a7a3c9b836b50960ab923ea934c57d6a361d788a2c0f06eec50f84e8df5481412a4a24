import type { Scope } from '../scope';
import { ESLintScopeVariable } from './ESLintScopeVariable';
import type { Variable } from './Variable';
interface ImplicitLibVariableOptions {
    readonly eslintImplicitGlobalSetting?: ESLintScopeVariable['eslintImplicitGlobalSetting'];
    readonly isTypeVariable?: boolean;
    readonly isValueVariable?: boolean;
    readonly writeable?: boolean;
}
/**
 * An variable implicitly defined by the TS Lib
 */
declare class ImplicitLibVariable extends ESLintScopeVariable implements Variable {
    /**
     * `true` if the variable is valid in a type context, false otherwise
     */
    readonly isTypeVariable: boolean;
    /**
     * `true` if the variable is valid in a value context, false otherwise
     */
    readonly isValueVariable: boolean;
    constructor(scope: Scope, name: string, { isTypeVariable, isValueVariable, writeable, eslintImplicitGlobalSetting, }: ImplicitLibVariableOptions);
}
export { ImplicitLibVariable, ImplicitLibVariableOptions };
//# sourceMappingURL=ImplicitLibVariable.d.ts.map