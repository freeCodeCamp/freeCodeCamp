import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
/**
 * For UUID of a given version (in v1 to v15)
 *
 * According to {@link https://tools.ietf.org/html/rfc4122 | RFC 4122} and {@link https://datatracker.ietf.org/doc/html/rfc9562#name-version-field | RFC 9562} any version between 1 and 15 is valid even if only the ones from 1 to 8 have really been leveraged for now.
 *
 * No mixed case, only lower case digits (0-9a-f)
 *
 * @deprecated Prefer using {@link uuid}
 * @remarks Since 1.17.0
 * @public
 */
export declare function uuidV(versionNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15): Arbitrary<string>;
