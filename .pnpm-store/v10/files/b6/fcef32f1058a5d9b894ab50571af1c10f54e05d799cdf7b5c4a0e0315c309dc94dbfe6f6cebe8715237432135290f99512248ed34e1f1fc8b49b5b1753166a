import { Rule, Scope } from 'eslint';
import * as ESTree from 'estree';

declare function declaredScope(
    context: Rule.RuleContext,
    name: string,
    node?: ESTree.Node,
): Scope.Scope['type'] | undefined;

export default declaredScope;
