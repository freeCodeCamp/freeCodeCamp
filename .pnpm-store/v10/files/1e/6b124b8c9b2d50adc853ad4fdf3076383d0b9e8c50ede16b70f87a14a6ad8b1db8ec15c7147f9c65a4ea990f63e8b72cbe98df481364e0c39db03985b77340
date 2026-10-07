import { ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
import { ToneAudioBuffer } from "../../core/context/ToneAudioBuffer.js";
import { Gain } from "../../core/context/Gain.js";
export interface ConvolverOptions extends ToneAudioNodeOptions {
    onload: () => void;
    normalize: boolean;
    url?: string | AudioBuffer | ToneAudioBuffer;
}
/**
 * Convolver is a wrapper around the Native Web Audio
 * [ConvolverNode](http://webaudio.github.io/web-audio-api/#the-convolvernode-interface).
 * Convolution is useful for reverb and filter emulation. Read more about convolution reverb on
 * [Wikipedia](https://en.wikipedia.org/wiki/Convolution_reverb).
 *
 * @example
 * // initializing the convolver with an impulse response
 * const convolver = new Tone.Convolver("./path/to/ir.wav").toDestination();
 * @category Component
 */
export declare class Convolver extends ToneAudioNode<ConvolverOptions> {
    readonly name: string;
    /**
     * The native ConvolverNode
     */
    private _convolver;
    /**
     * The Buffer belonging to the convolver
     */
    private _buffer;
    readonly input: Gain;
    readonly output: Gain;
    /**
     * @param url The URL of the impulse response or the ToneAudioBuffer containing the impulse response.
     * @param onload The callback to invoke when the url is loaded.
     */
    constructor(url?: string | AudioBuffer | ToneAudioBuffer, onload?: () => void);
    constructor(options?: Partial<ConvolverOptions>);
    static getDefaults(): ConvolverOptions;
    /**
     * Load an impulse response url as an audio buffer.
     * Decodes the audio asynchronously and invokes
     * the callback once the audio buffer loads.
     * @param url The url of the buffer to load. filetype support depends on the browser.
     */
    load(url: string): Promise<void>;
    /**
     * The convolver's buffer
     */
    get buffer(): ToneAudioBuffer | null;
    set buffer(buffer: ToneAudioBuffer | null);
    /**
     * The normalize property of the ConvolverNode interface is a boolean that
     * controls whether the impulse response from the buffer will be scaled by
     * an equal-power normalization when the buffer attribute is set, or not.
     */
    get normalize(): boolean;
    set normalize(norm: boolean);
    dispose(): this;
}
