import type * as Schema from "./Schema.js";
import * as AST from "./SchemaAST.js";
/**
 * @category model
 * @since 3.10.0
 */
export interface Pretty<To> {
    (a: To): string;
}
/**
 * @category annotations
 * @since 3.10.0
 */
export type PrettyAnnotation<A, TypeParameters extends ReadonlyArray<any> = readonly []> = (...pretties: {
    readonly [K in keyof TypeParameters]: Pretty<TypeParameters[K]>;
}) => Pretty<A>;
/**
 * @category prettify
 * @since 3.10.0
 */
export declare const make: <A, I, R>(schema: Schema.Schema<A, I, R>) => (a: A) => string;
/**
 * @since 3.10.0
 */
export declare const match: AST.Match<Pretty<any>>;
//# sourceMappingURL=Pretty.d.ts.map