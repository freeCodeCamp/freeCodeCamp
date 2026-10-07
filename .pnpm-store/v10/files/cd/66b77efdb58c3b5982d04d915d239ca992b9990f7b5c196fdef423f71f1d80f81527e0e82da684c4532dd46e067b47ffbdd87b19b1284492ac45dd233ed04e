import * as T from '../../type/index.mjs';
export type TInsert = T.Static<typeof Insert>;
export declare const Insert: T.TObject<{
    type: T.TLiteral<'insert'>;
    path: T.TString;
    value: T.TUnknown;
}>;
export type TUpdate = T.Static<typeof Update>;
export declare const Update: T.TObject<{
    type: T.TLiteral<'update'>;
    path: T.TString;
    value: T.TUnknown;
}>;
export type TDelete = T.Static<typeof Delete>;
export declare const Delete: T.TObject<{
    type: T.TLiteral<'delete'>;
    path: T.TString;
}>;
export type TEdit = T.Static<typeof Edit>;
export declare const Edit: T.TUnion<[
    typeof Insert,
    typeof Update,
    typeof Delete
]>;
