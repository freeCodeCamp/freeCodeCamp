import { Node } from "../../../index";
import { TypeConflictReporter } from "./type-conflict-reporter";
export interface ITypeInfo {
    first?: string;
    total: number;
    example?: unknown;
}
export interface ITypeInfoString extends ITypeInfo {
    empty: number;
    example: string;
}
export interface ITypeInfoDate extends ITypeInfo {
    example: string | Date;
}
export interface ITypeInfoNumber extends ITypeInfo {
    example: number;
}
export interface ITypeInfoBoolean extends ITypeInfo {
    example: boolean;
}
export interface ITypeInfoArray extends ITypeInfo {
    item: IValueDescriptor;
}
export interface ITypeInfoRelatedNodes extends ITypeInfo {
    nodes: {
        [key: string]: number;
    };
}
export interface ITypeInfoObject extends ITypeInfo {
    dprops: {
        [name: string]: IValueDescriptor;
    };
}
export interface IValueDescriptor {
    int?: ITypeInfoNumber;
    float?: ITypeInfoNumber;
    date?: ITypeInfoDate;
    string?: ITypeInfoString;
    boolean?: ITypeInfoBoolean;
    array?: ITypeInfoArray;
    relatedNode?: ITypeInfoRelatedNodes;
    relatedNodeList?: ITypeInfoRelatedNodes;
    object?: ITypeInfoObject;
}
export type ValueType = keyof IValueDescriptor;
export interface ITypeMetadata {
    typeName?: string;
    disabled?: boolean;
    ignored?: boolean;
    dirty?: boolean;
    total?: number;
    ignoredFields?: Set<string>;
    fieldMap?: Record<string, IValueDescriptor>;
    typeConflictReporter?: TypeConflictReporter;
    [key: string]: unknown;
}
declare const ignore: (metadata?: ITypeMetadata, set?: boolean) => ITypeMetadata;
declare const disable: (metadata?: ITypeMetadata, set?: boolean) => ITypeMetadata;
declare const addNode: (metadata: ITypeMetadata, node: Node) => ITypeMetadata;
declare const deleteNode: (metadata: ITypeMetadata, node: Node) => ITypeMetadata;
declare const addNodes: (metadata: ITypeMetadata | undefined, nodes: Iterable<Node>) => ITypeMetadata;
declare const isEmpty: ({ fieldMap }: {
    fieldMap: any;
}) => boolean;
declare const hasNodes: (typeMetadata: ITypeMetadata) => boolean;
declare const haveEqualFields: ({ fieldMap }?: {
    fieldMap?: {} | undefined;
}, { fieldMap: otherFieldMap }?: {
    fieldMap?: {} | undefined;
}) => boolean;
declare const initialMetadata: (state?: Record<string, unknown>) => ITypeMetadata;
export { addNode, addNodes, deleteNode, ignore, disable, isEmpty, hasNodes, haveEqualFields, initialMetadata, };
