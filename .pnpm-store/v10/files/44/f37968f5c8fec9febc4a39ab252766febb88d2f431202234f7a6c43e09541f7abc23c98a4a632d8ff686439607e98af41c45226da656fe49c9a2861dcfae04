/**
 * The size parameter defines how large the generated values could be.
 *
 * The default in fast-check is 'small' but it could be increased (resp. decreased)
 * to ask arbitraries for larger (resp. smaller) values.
 *
 * @remarks Since 2.22.0
 * @public
 */
export type Size = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
/**
 * @remarks Since 2.22.0
 * @public
 */
export type RelativeSize = '-4' | '-3' | '-2' | '-1' | '=' | '+1' | '+2' | '+3' | '+4';
/**
 * Superset of {@link Size} to override the default defined for size
 * @remarks Since 2.22.0
 * @public
 */
export type SizeForArbitrary = RelativeSize | Size | 'max' | undefined;
/**
 * Superset of {@link Size} to override the default defined for size.
 * It can either be based on a numeric value manually selected by the user (not recommended)
 * or rely on presets based on size (recommended).
 *
 * This size will be used to infer a bias to limit the depth, used as follow within recursive structures:
 * While going deeper, the bias on depth will increase the probability to generate small instances.
 *
 * When used with {@link Size}, the larger the size the deeper the structure.
 * When used with numeric values, the larger the number (floating point number &gt;= 0),
 * the deeper the structure. `+0` means extremelly biased depth meaning barely impossible to generate
 * deep structures, while `Number.POSITIVE_INFINITY` means "depth has no impact".
 *
 * Using `max` or `Number.POSITIVE_INFINITY` is fully equivalent.
 *
 * @remarks Since 2.25.0
 * @public
 */
export type DepthSize = RelativeSize | Size | 'max' | number | undefined;
/**
 * Resolve the size that should be used given the current context
 * @param size - Size defined by the caller on the arbitrary
 */
export declare function resolveSize(size: Exclude<SizeForArbitrary, 'max'> | undefined): Size;
