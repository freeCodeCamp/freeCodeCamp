/**
 * A time duration.
 */
export type DurationUnit = 'nanosecond' | 'microsecond' | 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week';
/**
 * Size of information derived from bytes.
 */
export type InformationUnit = 'bit' | 'byte' | 'kilobyte' | 'kibibyte' | 'megabyte' | 'mebibyte' | 'gigabyte' | 'gibibyte' | 'terabyte' | 'tebibyte' | 'petabyte' | 'pebibyte' | 'exabyte' | 'exbibyte';
/**
 * Fractions such as percentages.
 */
export type FractionUnit = 'ratio' | 'percent';
/**
 * Untyped value without a unit.
 */
export type NoneUnit = '' | 'none';
type LiteralUnion<T extends string> = T | Omit<T, T>;
export type MeasurementUnit = LiteralUnion<DurationUnit | InformationUnit | FractionUnit | NoneUnit>;
export type Measurements = Record<string, {
    value: number;
    unit: MeasurementUnit;
}>;
export {};
//# sourceMappingURL=measurement.d.ts.map