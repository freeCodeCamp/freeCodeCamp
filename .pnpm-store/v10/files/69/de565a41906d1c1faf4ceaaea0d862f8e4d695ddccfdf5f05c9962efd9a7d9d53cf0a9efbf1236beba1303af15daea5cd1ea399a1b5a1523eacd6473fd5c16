import type { ShimWrapped } from './types';
export declare const wrap: <Nodule extends object, FieldName extends keyof Nodule>(nodule: Nodule, name: FieldName, wrapper: (original: Nodule[FieldName], name: FieldName) => Nodule[FieldName]) => ShimWrapped | undefined;
export declare const massWrap: <Nodule extends object, FieldName extends keyof Nodule>(nodules: Nodule[], names: FieldName[], wrapper: (original: Nodule[FieldName]) => Nodule[FieldName]) => void;
export declare const unwrap: <Nodule extends object>(nodule: Nodule, name: keyof Nodule) => void;
export declare const massUnwrap: <Nodule extends object>(nodules: Nodule[], names: (keyof Nodule)[]) => void;
export interface ShimmerOptions {
    logger?: typeof console.error;
}
declare function shimmer(options: ShimmerOptions): void;
declare namespace shimmer {
    var wrap: <Nodule extends object, FieldName extends keyof Nodule>(nodule: Nodule, name: FieldName, wrapper: (original: Nodule[FieldName], name: FieldName) => Nodule[FieldName]) => ShimWrapped | undefined;
    var massWrap: <Nodule extends object, FieldName extends keyof Nodule>(nodules: Nodule[], names: FieldName[], wrapper: (original: Nodule[FieldName]) => Nodule[FieldName]) => void;
    var unwrap: <Nodule extends object>(nodule: Nodule, name: keyof Nodule) => void;
    var massUnwrap: <Nodule extends object>(nodules: Nodule[], names: (keyof Nodule)[]) => void;
}
export default shimmer;
//# sourceMappingURL=shimmer.d.ts.map