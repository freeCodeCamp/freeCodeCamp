/**
 * Replace the default lib.dom.d.ts interface to reflect the fact
 * that the AudioParamMap extends Map
 */
interface AudioParamMap extends Map<string, AudioParam> {
	forEach(
		callbackfn: (
			value: AudioParam,
			key: string,
			parent: AudioParamMap
		) => void,
		thisArg?: any
	): void;
}
