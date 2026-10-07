import {
	AudioContext as stdAudioContext,
	AudioWorkletNode as stdAudioWorkletNode,
	OfflineAudioContext as stdOfflineAudioContext,
} from "standardized-audio-context";
import { assert } from "../util/Debug.js";
import { isDefined } from "../util/TypeCheck.js";

/**
 * Create a new AudioContext
 */
export function createAudioContext(
	options?: AudioContextOptions
): AudioContext {
	return new stdAudioContext(options) as unknown as AudioContext;
}

/**
 * Create a new OfflineAudioContext
 */
export function createOfflineAudioContext(
	channels: number,
	length: number,
	sampleRate: number
): OfflineAudioContext {
	return new stdOfflineAudioContext(
		channels,
		length,
		sampleRate
	) as unknown as OfflineAudioContext;
}

/**
 * Either the online or offline audio context
 */
export type AnyAudioContext = AudioContext | OfflineAudioContext;

/**
 * Interface for things that Tone.js adds to the window
 */
interface ToneWindow extends Window {
	TONE_SILENCE_LOGGING?: boolean;
	TONE_DEBUG_CLASS?: string;
	BaseAudioContext: any;
	AudioWorkletNode: any;
}

/**
 * A reference to the window object
 * @hidden
 */
export const theWindow: ToneWindow | null =
	typeof self === "object" ? self : null;

/**
 * If the browser has a window object which has an AudioContext
 * @hidden
 */
export const hasAudioContext =
	theWindow &&
	(theWindow.hasOwnProperty("AudioContext") ||
		theWindow.hasOwnProperty("webkitAudioContext"));

export function createAudioWorkletNode(
	context: AnyAudioContext,
	name: string,
	options?: Partial<AudioWorkletNodeOptions>
): AudioWorkletNode {
	assert(
		isDefined(stdAudioWorkletNode),
		"AudioWorkletNode only works in a secure context (https or localhost)"
	);
	return new (
		context instanceof theWindow?.BaseAudioContext
			? theWindow?.AudioWorkletNode
			: stdAudioWorkletNode
	)(context, name, options);
}

/**
 * This promise resolves to a boolean which indicates if the
 * functionality is supported within the currently used browse.
 * Taken from [standardized-audio-context](https://github.com/chrisguttandin/standardized-audio-context#issupported)
 */
export { isSupported as supported } from "standardized-audio-context";
