import { type TSchema } from './schema.mjs';
import { type XGuard, type XGuardInterface } from '../../schema/types/index.mjs';
export type StaticBase<Value extends unknown> = Value;
/**
 * @deprecated Use Type.Refine() + Type.Unsafe() instead.
 *
 *
 * **Reason:** It is noted that JavaScript class instances do not behave like
 * plain objects during structural clone or when the TB compositor needs to
 * assign dynamic modifier properties (such as '~optional').
 *
 * Because the TypeBox compositor needs to transform schematics via object clone /
 * property spread, these operations can result in class instance types losing
 * methods on the prototype (via clone), which can lead to unexpected structures being
 * returned. This has led to special-case (non-clone) handling for Base which needs
 * to be removed as it has proven orthogonal to the TypeBox 1.x design.
 *
 * The Base type was introduced in 1.x to try integrate / embed Standard Schema into JSON
 * Schema; however, support for integrated Standard Schema embedding will not be continued
 * in TypeBox. This type will be removed in the next minor revision of TypeBox.
 *
 * ```typescript
 * // (Deprecated)
 * class DateType extends Type.Base<Date> { Check(value) { return value instanceof Date } }
 *
 * // (Future)
 * const DateType = Type.Refine(Type.Unsafe<Date>({}), value => value instanceof Date)
 * ```
 */
export declare class Base<Value extends unknown = unknown> implements TSchema, XGuard<Value> {
    readonly '~kind': 'Base';
    readonly '~guard': XGuardInterface<Value>;
    constructor();
    /** Checks a value or returns false if invalid */
    Check(_value: unknown): _value is Value;
    /** Returns errors for a value. Return an empty array if valid.  */
    Errors(_value: unknown): object[];
    /** Converts a value into this type */
    Convert(value: unknown): unknown;
    /** Cleans a value according to this type */
    Clean(value: unknown): unknown;
    /** Returns a default value for this type */
    Default(value: unknown): unknown;
    /** Creates a new instance of this type */
    Create(): Value;
    /** Clones this type  */
    Clone(): Base;
}
/** Returns true if the given value is a Base type. */
export declare function IsBase(value: unknown): value is Base;
