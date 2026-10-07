import { KeyValueResult, NonRootResult } from './NonRootResult';
import { RootResult } from './RootResult';
export type IntermediateResult = NonRootResult | ParameterList | ReadonlyProperty;
export interface ParameterList {
    type: 'JsdocTypeParameterList';
    elements: Array<KeyValueResult | RootResult>;
}
export interface ReadonlyProperty {
    type: 'JsdocTypeReadonlyProperty';
    element: RootResult;
}
