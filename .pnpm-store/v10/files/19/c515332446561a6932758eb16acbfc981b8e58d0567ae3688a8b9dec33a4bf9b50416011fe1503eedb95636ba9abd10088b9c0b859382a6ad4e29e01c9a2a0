// deno-fmt-ignore-file
import * as T from '../../type/index.mjs';
export const Insert = T.Object({
    type: T.Literal('insert'),
    path: T.String(),
    value: T.Unknown(),
});
export const Update = Object({
    type: T.Literal('update'),
    path: T.String(),
    value: T.Unknown(),
});
export const Delete = T.Object({
    type: T.Literal('delete'),
    path: T.String(),
});
export const Edit = T.Union([Insert, Update, Delete]);
