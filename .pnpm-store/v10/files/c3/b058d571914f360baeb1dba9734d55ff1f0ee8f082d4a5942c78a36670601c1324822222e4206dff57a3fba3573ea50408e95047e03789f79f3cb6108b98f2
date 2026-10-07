// deno-fmt-ignore-file
import { Settings } from '../../system/settings/index.mjs';
import { IsKind } from './schema.mjs';
// ------------------------------------------------------------------
// Type.Base<...>
// ------------------------------------------------------------------
function BaseProperty(value) {
    return {
        enumerable: Settings.Get().enumerableKind,
        writable: false,
        configurable: false,
        value
    };
}
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
export class Base {
    constructor() {
        globalThis.Object.defineProperty(this, '~kind', BaseProperty('Base'));
        globalThis.Object.defineProperty(this, '~guard', BaseProperty({
            check: (value) => this.Check(value),
            errors: (value) => this.Errors(value)
        }));
    }
    /** Checks a value or returns false if invalid */
    Check(_value) {
        return true;
    }
    /** Returns errors for a value. Return an empty array if valid.  */
    Errors(_value) {
        return [];
    }
    /** Converts a value into this type */
    Convert(value) {
        return value;
    }
    /** Cleans a value according to this type */
    Clean(value) {
        return value;
    }
    /** Returns a default value for this type */
    Default(value) {
        return value;
    }
    /** Creates a new instance of this type */
    Create() {
        throw new Error('Create not implemented');
    }
    /** Clones this type  */
    Clone() {
        throw Error('Clone not implemented');
    }
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is a Base type. */
export function IsBase(value) {
    return IsKind(value, 'Base');
}
