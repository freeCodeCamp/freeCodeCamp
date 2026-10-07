import type { GraphQLType } from './graphql';
import type { NamedTypeComposer } from './utils/typeHelpers';
import { ListComposer } from './ListComposer';
import { NonNullComposer } from './NonNullComposer';
import type { SchemaComposer } from './SchemaComposer';
export declare class ThunkComposer<T extends NamedTypeComposer<any> = NamedTypeComposer<any>, G extends GraphQLType = GraphQLType> {
    _thunk: () => T;
    _typeName: string | undefined;
    _typeFromThunk: T | undefined;
    get ofType(): T;
    constructor(thunk: () => T, typeName?: string);
    getUnwrappedTC(): T;
    getType(): G;
    getTypeName(): string;
    getTypePlural(): ListComposer<ThunkComposer<T, G>>;
    getTypeNonNull(): NonNullComposer<ThunkComposer<T, G>>;
    get List(): ListComposer<ThunkComposer<T, G>>;
    get NonNull(): NonNullComposer<ThunkComposer<T, G>>;
    cloneTo(anotherSchemaComposer: SchemaComposer<any>, cloneMap?: Map<any, any>): ThunkComposer<NamedTypeComposer<any>, G>;
}
//# sourceMappingURL=ThunkComposer.d.ts.map