import { TickerClockSource } from "../clock/Ticker.js";
import { Seconds } from "../type/Units.js";
import { AnyAudioContext } from "./AudioContext.js";
import { BaseContext, ContextLatencyHint } from "./BaseContext.js";
import type { DrawClass as Draw } from "../util/Draw.js";
import type { DestinationClass as Destination } from "./Destination.js";
import type { TransportClass as Transport } from "../clock/Transport.js";
import type { ListenerClass as Listener } from "./Listener.js";
export interface ContextOptions {
    clockSource: TickerClockSource;
    latencyHint: ContextLatencyHint;
    lookAhead: Seconds;
    updateInterval: Seconds;
    context: AnyAudioContext;
}
export interface ContextTimeoutEvent {
    callback: (...args: any[]) => void;
    id: number;
    time: Seconds;
}
/**
 * Wrapper around the native AudioContext.
 * @category Core
 */
export declare class Context extends BaseContext {
    readonly name: string;
    /**
     * private reference to the BaseAudioContext
     */
    protected readonly _context: AnyAudioContext;
    /**
     * A reliable callback method
     */
    private readonly _ticker;
    /**
     * The default latency hint
     */
    private _latencyHint;
    /**
     * An object containing all of the constants AudioBufferSourceNodes
     */
    private _constants;
    /**
     * All of the setTimeout events.
     */
    private _timeouts;
    /**
     * The timeout id counter
     */
    private _timeoutIds;
    /**
     * A reference the Transport singleton belonging to this context
     */
    private _transport;
    /**
     * A reference the Listener singleton belonging to this context
     */
    private _listener;
    /**
     * A reference the Destination singleton belonging to this context
     */
    private _destination;
    /**
     * A reference the Transport singleton belonging to this context
     */
    private _draw;
    /**
     * Private indicator if the context has been initialized
     */
    private _initialized;
    /**
     * Private indicator if a close() has been called on the context, since close is async
     */
    private _closeStarted;
    /**
     * Indicates if the context is an OfflineAudioContext or an AudioContext
     */
    readonly isOffline: boolean;
    constructor(context?: AnyAudioContext);
    constructor(options?: Partial<ContextOptions>);
    static getDefaults(): ContextOptions;
    /**
     * Finish setting up the context. **You usually do not need to do this manually.**
     */
    private initialize;
    createAnalyser(): AnalyserNode;
    createOscillator(): OscillatorNode;
    createBufferSource(): AudioBufferSourceNode;
    createBiquadFilter(): BiquadFilterNode;
    createBuffer(numberOfChannels: number, length: number, sampleRate: number): AudioBuffer;
    createChannelMerger(numberOfInputs?: number | undefined): ChannelMergerNode;
    createChannelSplitter(numberOfOutputs?: number | undefined): ChannelSplitterNode;
    createConstantSource(): ConstantSourceNode;
    createConvolver(): ConvolverNode;
    createDelay(maxDelayTime?: number | undefined): DelayNode;
    createDynamicsCompressor(): DynamicsCompressorNode;
    createGain(): GainNode;
    createIIRFilter(feedForward: number[] | Float32Array, feedback: number[] | Float32Array): IIRFilterNode;
    createPanner(): PannerNode;
    createPeriodicWave(real: number[] | Float32Array, imag: number[] | Float32Array, constraints?: PeriodicWaveConstraints | undefined): PeriodicWave;
    createStereoPanner(): StereoPannerNode;
    createWaveShaper(): WaveShaperNode;
    createMediaStreamSource(stream: MediaStream): MediaStreamAudioSourceNode;
    createMediaElementSource(element: HTMLMediaElement): MediaElementAudioSourceNode;
    createMediaStreamDestination(): MediaStreamAudioDestinationNode;
    decodeAudioData(audioData: ArrayBuffer): Promise<AudioBuffer>;
    /**
     * The current time in seconds of the AudioContext.
     */
    get currentTime(): Seconds;
    /**
     * The current time in seconds of the AudioContext.
     */
    get state(): AudioContextState;
    /**
     * The current time in seconds of the AudioContext.
     */
    get sampleRate(): number;
    /**
     * The listener
     */
    get listener(): Listener;
    set listener(l: Listener);
    /**
     * There is only one Transport per Context. It is created on initialization.
     */
    get transport(): Transport;
    set transport(t: Transport);
    /**
     * This is the Draw object for the context which is useful for synchronizing the draw frame with the Tone.js clock.
     */
    get draw(): Draw;
    set draw(d: Draw);
    /**
     * A reference to the Context's destination node.
     */
    get destination(): Destination;
    set destination(d: Destination);
    /**
     * Maps a module name to promise of the addModule method
     */
    private _workletPromise;
    /**
     * Create an audio worklet node from a name and options. The module
     * must first be loaded using {@link addAudioWorkletModule}.
     */
    createAudioWorkletNode(name: string, options?: Partial<AudioWorkletNodeOptions>): AudioWorkletNode;
    /**
     * Add an AudioWorkletProcessor module
     * @param url The url of the module
     */
    addAudioWorkletModule(url: string): Promise<void>;
    /**
     * Returns a promise which resolves when all of the worklets have been loaded on this context
     */
    protected workletsAreReady(): Promise<void>;
    /**
     * How often the interval callback is invoked.
     * This number corresponds to how responsive the scheduling
     * can be. Setting to 0 will result in the lowest practial interval
     * based on context properties. context.updateInterval + context.lookAhead
     * gives you the total latency between scheduling an event and hearing it.
     */
    get updateInterval(): Seconds;
    set updateInterval(interval: Seconds);
    /**
     * What the source of the clock is, either "worker" (default),
     * "timeout", or "offline" (none).
     */
    get clockSource(): TickerClockSource;
    set clockSource(type: TickerClockSource);
    /**
     * The amount of time into the future events are scheduled. Giving Web Audio
     * a short amount of time into the future to schedule events can reduce clicks and
     * improve performance. This value can be set to 0 to get the lowest latency.
     * Adjusting this value also affects the {@link updateInterval}.
     */
    get lookAhead(): Seconds;
    set lookAhead(time: Seconds);
    private _lookAhead;
    /**
     * The type of playback, which affects tradeoffs between audio
     * output latency and responsiveness.
     * In addition to setting the value in seconds, the latencyHint also
     * accepts the strings "interactive" (prioritizes low latency),
     * "playback" (prioritizes sustained playback), "balanced" (balances
     * latency and performance).
     * @example
     * // prioritize sustained playback
     * const context = new Tone.Context({ latencyHint: "playback" });
     * // set this context as the global Context
     * Tone.setContext(context);
     * // the global context is gettable with Tone.getContext()
     * console.log(Tone.getContext().latencyHint);
     */
    get latencyHint(): ContextLatencyHint | Seconds;
    /**
     * The unwrapped AudioContext or OfflineAudioContext
     */
    get rawContext(): AnyAudioContext;
    /**
     * The current audio context time plus a short {@link lookAhead}.
     * @example
     * setInterval(() => {
     * 	console.log("now", Tone.now());
     * }, 100);
     */
    now(): Seconds;
    /**
     * The current audio context time without the {@link lookAhead}.
     * In most cases it is better to use {@link now} instead of {@link immediate} since
     * with {@link now} the {@link lookAhead} is applied equally to _all_ components including internal components,
     * to making sure that everything is scheduled in sync. Mixing {@link now} and {@link immediate}
     * can cause some timing issues. If no lookAhead is desired, you can set the {@link lookAhead} to `0`.
     */
    immediate(): Seconds;
    /**
     * Starts the audio context from a suspended state. This is required
     * to initially start the AudioContext.
     * @see {@link start}
     */
    resume(): Promise<void>;
    /**
     * Close the context. Once closed, the context can no longer be used and
     * any AudioNodes created from the context will be silent.
     */
    close(): Promise<void>;
    /**
     * **Internal** Generate a looped buffer at some constant value.
     */
    getConstant(val: number): AudioBufferSourceNode;
    /**
     * Clean up. Also closes the audio context.
     */
    dispose(): this;
    /**
     * The private loop which keeps track of the context scheduled timeouts
     * Is invoked from the clock source
     */
    private _timeoutLoop;
    /**
     * A setTimeout which is guaranteed by the clock source.
     * Also runs in the offline context.
     * @param  fn       The callback to invoke
     * @param  timeout  The timeout in seconds
     * @returns ID to use when invoking Context.clearTimeout
     */
    setTimeout(fn: (...args: any[]) => void, timeout: Seconds): number;
    /**
     * Clears a previously scheduled timeout with Tone.context.setTimeout
     * @param  id  The ID returned from setTimeout
     */
    clearTimeout(id: number): this;
    /**
     * Clear the function scheduled by {@link setInterval}
     */
    clearInterval(id: number): this;
    /**
     * Adds a repeating event to the context's callback clock
     */
    setInterval(fn: (...args: any[]) => void, interval: Seconds): number;
}
