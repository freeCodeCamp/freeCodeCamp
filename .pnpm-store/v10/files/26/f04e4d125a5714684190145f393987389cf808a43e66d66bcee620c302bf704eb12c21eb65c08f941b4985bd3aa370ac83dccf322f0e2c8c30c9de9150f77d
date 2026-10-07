import { ObjectTypeComposer } from '../ObjectTypeComposer';
import { InterfaceTypeComposer } from '../InterfaceTypeComposer';
import type { InputTypeComposer } from '../InputTypeComposer';
import { ComposeOutputType, ComposeInputType, ComposeInputTypeDefinition, AnyTypeComposer } from './typeHelpers';
export declare type ToInputTypeOpts = {
    prefix?: string;
    postfix?: string;
    fallbackType?: ComposeInputTypeDefinition | null;
};
export declare function toInputType(anyTC: AnyTypeComposer<any>, opts?: ToInputTypeOpts): ComposeInputType;
export declare function toInputObjectType<TContext>(tc: ObjectTypeComposer<any, TContext> | InterfaceTypeComposer<any, TContext>, opts?: ToInputTypeOpts): InputTypeComposer<TContext>;
export declare function convertInputObjectField(field: ComposeOutputType<any>, opts: ToInputTypeOpts): ComposeInputType;
//# sourceMappingURL=toInputType.d.ts.map