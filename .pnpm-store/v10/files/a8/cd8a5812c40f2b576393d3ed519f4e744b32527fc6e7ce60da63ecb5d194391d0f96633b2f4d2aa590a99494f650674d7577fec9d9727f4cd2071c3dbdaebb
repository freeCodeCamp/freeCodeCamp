// This file contains all of the valid note names for all pitches between C-4 and C11

type Letter = "C" | "D" | "E" | "F" | "G" | "A" | "B";
type Accidental = "bb" | "b" | "" | "#" | "x";
type Octave =
	| -4
	| -3
	| -2
	| -1
	| 0
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11;

/**
 * A note in Scientific pitch notation.
 * The pitch class + octave number
 * e.g. "C4", "D#3", "G-1"
 * @category Unit
 */
export type Note = `${Letter}${Accidental}${Octave}`;

type IntegerRange<
	N extends number,
	A extends any[] = [],
> = A["length"] extends N ? A[number] : IntegerRange<N, [...A, A["length"]]>;

/**
 * A number representing a midi note. Integers between 0-127
 * @category Unit
 */
export type MidiNote = IntegerRange<128>;
