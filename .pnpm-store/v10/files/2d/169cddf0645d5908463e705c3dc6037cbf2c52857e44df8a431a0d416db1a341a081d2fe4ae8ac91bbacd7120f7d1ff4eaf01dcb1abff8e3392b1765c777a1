import { TSESTree } from '../ts-estree';
interface Definition {
    type: string;
    name: TSESTree.BindingName;
    node: TSESTree.Node;
    parent?: TSESTree.Node | null;
    index?: number | null;
    kind?: string | null;
    rest?: boolean;
}
interface DefinitionConstructor {
    new (type: string, name: TSESTree.BindingName | TSESTree.PropertyName, node: TSESTree.Node, parent?: TSESTree.Node | null, index?: number | null, kind?: string | null): Definition;
}
declare const Definition: DefinitionConstructor;
interface ParameterDefinition extends Definition {
}
declare const ParameterDefinition: DefinitionConstructor & (new (name: TSESTree.Node, node: TSESTree.Node, index?: number | null, rest?: boolean) => ParameterDefinition);
export { Definition, ParameterDefinition };
//# sourceMappingURL=Definition.d.ts.map
