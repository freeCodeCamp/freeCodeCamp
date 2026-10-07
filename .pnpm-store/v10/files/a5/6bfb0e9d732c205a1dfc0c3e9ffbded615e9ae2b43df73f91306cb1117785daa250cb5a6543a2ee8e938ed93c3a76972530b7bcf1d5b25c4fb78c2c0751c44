import { TSESTree } from '../ts-estree';
import { Definition } from './Definition';
import { Reference } from './Reference';
import { Scope } from './Scope';
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
