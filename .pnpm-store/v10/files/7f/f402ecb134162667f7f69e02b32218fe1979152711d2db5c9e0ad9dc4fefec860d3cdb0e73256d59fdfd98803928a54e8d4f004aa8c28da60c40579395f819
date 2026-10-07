/**
 * Create a new AudioContext
 */
export declare function createAudioContext(options?: AudioContextOptions): AudioContext;
/**
 * Create a new OfflineAudioContext
 */
export declare function createOfflineAudioContext(channels: number, length: number, sampleRate: number): OfflineAudioContext;
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
export declare const theWindow: ToneWindow | null;
/**
 * If the browser has a window object which has an AudioContext
 * @hidden
 */
export declare const hasAudioContext: boolean | null;
export declare function createAudioWorkletNode(context: AnyAudioContext, name: string, options?: Partial<AudioWorkletNodeOptions>): AudioWorkletNode;
/**
 * This promise resolves to a boolean which indicates if the
 * functionality is supported within the currently used browse.
 * Taken from [standardized-audio-context](https://github.com/chrisguttandin/standardized-audio-context#issupported)
 */
export { isSupported as supported } from "standardized-audio-context";
