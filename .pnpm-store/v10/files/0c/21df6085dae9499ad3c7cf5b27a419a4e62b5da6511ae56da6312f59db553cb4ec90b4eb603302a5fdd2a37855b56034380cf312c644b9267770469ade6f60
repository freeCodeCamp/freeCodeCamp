import { GraphQLNonNull } from './graphql';
import { AnyTypeComposer, NamedTypeComposer } from './utils/typeHelpers';
import { ListComposer } from './ListComposer';
import type { SchemaComposer } from './SchemaComposer';
export declare class NonNullComposer<T extends AnyTypeComposer<any> = AnyTypeComposer<any>> {
    ofType: T;
    constructor(type: T);
    getType(): GraphQLNonNull<any>;
    getTypeName(): string;
    getUnwrappedTC(): NamedTypeComposer<any>;
    getTypePlural(): ListComposer<NonNullComposer<T>>;
    getTypeNonNull(): NonNullComposer<T>;
    get List(): ListComposer<NonNullComposer<T>>;
    get NonNull(): NonNullComposer<T>;
    cloneTo(anotherSchemaComposer: SchemaComposer<any>, cloneMap?: Map<any, any>): NonNullComposer<AnyTypeComposer<any>>;
}
//# sourceMappingURL=NonNullComposer.d.ts.map