/**
 * The name of the patterns
 */
export type PatternName = "up" | "down" | "upDown" | "downUp" | "alternateUp" | "alternateDown" | "random" | "randomOnce" | "randomWalk";
/**
 * PatternGenerator returns a generator which will yield numbers between 0 and numValues
 * according to the passed in pattern that can be used as indexes into an array of size numValues.
 * @param numValues The size of the array to emit indexes for
 * @param pattern The name of the pattern use when iterating over
 * @param index Where to start in the offset of the values array
 */
export declare function PatternGenerator(numValues: number, pattern?: PatternName, index?: number): Iterator<number>;
