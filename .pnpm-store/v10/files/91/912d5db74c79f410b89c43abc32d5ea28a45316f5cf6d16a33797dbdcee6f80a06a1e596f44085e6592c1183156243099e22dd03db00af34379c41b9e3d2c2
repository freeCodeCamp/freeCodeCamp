import { GraphQLList } from './graphql';
import { AnyTypeComposer, NamedTypeComposer } from './utils/typeHelpers';
import { NonNullComposer } from './NonNullComposer';
import type { SchemaComposer } from './SchemaComposer';
export declare class ListComposer<T extends AnyTypeComposer<any> = AnyTypeComposer<any>> {
    ofType: T;
    constructor(type: T);
    getType(): GraphQLList<any>;
    getTypeName(): string;
    getUnwrappedTC(): NamedTypeComposer<any>;
    getTypePlural(): ListComposer<ListComposer<T>>;
    getTypeNonNull(): NonNullComposer<ListComposer<T>>;
    get List(): ListComposer<ListComposer<T>>;
    get NonNull(): NonNullComposer<ListComposer<T>>;
    cloneTo(anotherSchemaComposer: SchemaComposer<any>, cloneMap?: Map<any, any>): ListComposer<AnyTypeComposer<any>>;
}
//# sourceMappingURL=ListComposer.d.ts.map