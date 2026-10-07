import type { TSESTree } from '../ts-estree';
import type { Definition } from './Definition';
import type { Reference } from './Reference';
import type { Scope } from './Scope';
interface Variable {
    name: string;
    identifiers: TSESTree.Identifier[];
    references: Reference[];
    defs: Definition[];
    eslintUsed?: boolean;
    stack?: unknown;
    tainted?: boolean;
    scope?: Scope;
}
declare const Variable: new () => Variable;
export { Variable };
//# sourceMappingURL=Variable.d.ts.map