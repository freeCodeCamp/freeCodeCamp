import { __awaiter } from "tslib";
import { Ticker } from "../clock/Ticker.js";
import { isAudioContext } from "../util/AdvancedTypeCheck.js";
import { optionsFromArguments } from "../util/Defaults.js";
import { Timeline } from "../util/Timeline.js";
import { isDefined } from "../util/TypeCheck.js";
import { createAudioContext, createAudioWorkletNode, } from "./AudioContext.js";
import { closeContext, initializeContext } from "./ContextInitialization.js";
import { BaseContext } from "./BaseContext.js";
import { assert } from "../util/Debug.js";
/**
 * Wrapper around the native AudioContext.
 * @category Core
 */
export class Context extends BaseContext {
    constructor() {
        var _a, _b;
        super();
        this.name = "Context";
        /**
         * An object containing all of the constants AudioBufferSourceNodes
         */
        this._constants = new Map();
        /**
         * All of the setTimeout events.
         */
        this._timeouts = new Timeline();
        /**
         * The timeout id counter
         */
        this._timeoutIds = 0;
        /**
         * Private indicator if the context has been initialized
         */
        this._initialized = false;
        /**
         * Private indicator if a close() has been called on the context, since close is async
         */
        this._closeStarted = false;
        /**
         * Indicates if the context is an OfflineAudioContext or an AudioContext
         */
        this.isOffline = false;
        //--------------------------------------------
        // AUDIO WORKLET
        //--------------------------------------------
        /**
         * Maps a module name to promise of the addModule method
         */
        this._workletPromise = null;
        const options = optionsFromArguments(Context.getDefaults(), arguments, [
            "context",
        ]);
        if (options.context) {
            this._context = options.context;
            // custom context provided, latencyHint unknown (unless explicitly provided in options)
            this._latencyHint = ((_a = arguments[0]) === null || _a === void 0 ? void 0 : _a.latencyHint) || "";
        }
        else {
            this._context = createAudioContext({
                latencyHint: options.latencyHint,
            });
            this._latencyHint = options.latencyHint;
        }
        this._ticker = new Ticker(this.emit.bind(this, "tick"), options.clockSource, options.updateInterval, this._context.sampleRate);
        this.on("tick", this._timeoutLoop.bind(this));
        // fwd events from the context
        this._context.onstatechange = () => {
            this.emit("statechange", this.state);
        };
        // if no custom updateInterval provided, updateInterval will be derived by lookAhead setter
        this[((_b = arguments[0]) === null || _b === void 0 ? void 0 : _b.hasOwnProperty("updateInterval"))
            ? "_lookAhead"
            : "lookAhead"] = options.lookAhead;
    }
    static getDefaults() {
        return {
            clockSource: "worker",
            latencyHint: "interactive",
            lookAhead: 0.1,
            updateInterval: 0.05,
        };
    }
    /**
     * Finish setting up the context. **You usually do not need to do this manually.**
     */
    initialize() {
        if (!this._initialized) {
            // add any additional modules
            initializeContext(this);
            this._initialized = true;
        }
        return this;
    }
    //---------------------------
    // BASE AUDIO CONTEXT METHODS
    //---------------------------
    createAnalyser() {
        return this._context.createAnalyser();
    }
    createOscillator() {
        return this._context.createOscillator();
    }
    createBufferSource() {
        return this._context.createBufferSource();
    }
    createBiquadFilter() {
        return this._context.createBiquadFilter();
    }
    createBuffer(numberOfChannels, length, sampleRate) {
        return this._context.createBuffer(numberOfChannels, length, sampleRate);
    }
    createChannelMerger(numberOfInputs) {
        return this._context.createChannelMerger(numberOfInputs);
    }
    createChannelSplitter(numberOfOutputs) {
        return this._context.createChannelSplitter(numberOfOutputs);
    }
    createConstantSource() {
        return this._context.createConstantSource();
    }
    createConvolver() {
        return this._context.createConvolver();
    }
    createDelay(maxDelayTime) {
        return this._context.createDelay(maxDelayTime);
    }
    createDynamicsCompressor() {
        return this._context.createDynamicsCompressor();
    }
    createGain() {
        return this._context.createGain();
    }
    createIIRFilter(feedForward, feedback) {
        // @ts-ignore
        return this._context.createIIRFilter(feedForward, feedback);
    }
    createPanner() {
        return this._context.createPanner();
    }
    createPeriodicWave(real, imag, constraints) {
        return this._context.createPeriodicWave(real, imag, constraints);
    }
    createStereoPanner() {
        return this._context.createStereoPanner();
    }
    createWaveShaper() {
        return this._context.createWaveShaper();
    }
    createMediaStreamSource(stream) {
        assert(isAudioContext(this._context), "Not available if OfflineAudioContext");
        const context = this._context;
        return context.createMediaStreamSource(stream);
    }
    createMediaElementSource(element) {
        assert(isAudioContext(this._context), "Not available if OfflineAudioContext");
        const context = this._context;
        return context.createMediaElementSource(element);
    }
    createMediaStreamDestination() {
        assert(isAudioContext(this._context), "Not available if OfflineAudioContext");
        const context = this._context;
        return context.createMediaStreamDestination();
    }
    decodeAudioData(audioData) {
        return this._context.decodeAudioData(audioData);
    }
    /**
     * The current time in seconds of the AudioContext.
     */
    get currentTime() {
        return this._context.currentTime;
    }
    /**
     * The current time in seconds of the AudioContext.
     */
    get state() {
        return this._context.state;
    }
    /**
     * The current time in seconds of the AudioContext.
     */
    get sampleRate() {
        return this._context.sampleRate;
    }
    /**
     * The listener
     */
    get listener() {
        this.initialize();
        return this._listener;
    }
    set listener(l) {
        assert(!this._initialized, "The listener cannot be set after initialization.");
        this._listener = l;
    }
    /**
     * There is only one Transport per Context. It is created on initialization.
     */
    get transport() {
        this.initialize();
        return this._transport;
    }
    set transport(t) {
        assert(!this._initialized, "The transport cannot be set after initialization.");
        this._transport = t;
    }
    /**
     * This is the Draw object for the context which is useful for synchronizing the draw frame with the Tone.js clock.
     */
    get draw() {
        this.initialize();
        return this._draw;
    }
    set draw(d) {
        assert(!this._initialized, "Draw cannot be set after initialization.");
        this._draw = d;
    }
    /**
     * A reference to the Context's destination node.
     */
    get destination() {
        this.initialize();
        return this._destination;
    }
    set destination(d) {
        assert(!this._initialized, "The destination cannot be set after initialization.");
        this._destination = d;
    }
    /**
     * Create an audio worklet node from a name and options. The module
     * must first be loaded using {@link addAudioWorkletModule}.
     */
    createAudioWorkletNode(name, options) {
        return createAudioWorkletNode(this.rawContext, name, options);
    }
    /**
     * Add an AudioWorkletProcessor module
     * @param url The url of the module
     */
    addAudioWorkletModule(url) {
        return __awaiter(this, void 0, void 0, function* () {
            assert(isDefined(this.rawContext.audioWorklet), "AudioWorkletNode is only available in a secure context (https or localhost)");
            if (!this._workletPromise) {
                this._workletPromise = this.rawContext.audioWorklet.addModule(url);
            }
            yield this._workletPromise;
        });
    }
    /**
     * Returns a promise which resolves when all of the worklets have been loaded on this context
     */
    workletsAreReady() {
        return __awaiter(this, void 0, void 0, function* () {
            (yield this._workletPromise) ? this._workletPromise : Promise.resolve();
        });
    }
    //---------------------------
    // TICKER
    //---------------------------
    /**
     * How often the interval callback is invoked.
     * This number corresponds to how responsive the scheduling
     * can be. Setting to 0 will result in the lowest practial interval
     * based on context properties. context.updateInterval + context.lookAhead
     * gives you the total latency between scheduling an event and hearing it.
     */
    get updateInterval() {
        return this._ticker.updateInterval;
    }
    set updateInterval(interval) {
        this._ticker.updateInterval = interval;
    }
    /**
     * What the source of the clock is, either "worker" (default),
     * "timeout", or "offline" (none).
     */
    get clockSource() {
        return this._ticker.type;
    }
    set clockSource(type) {
        this._ticker.type = type;
    }
    /**
     * The amount of time into the future events are scheduled. Giving Web Audio
     * a short amount of time into the future to schedule events can reduce clicks and
     * improve performance. This value can be set to 0 to get the lowest latency.
     * Adjusting this value also affects the {@link updateInterval}.
     */
    get lookAhead() {
        return this._lookAhead;
    }
    set lookAhead(time) {
        this._lookAhead = time;
        // if lookAhead is 0, default to .01 updateInterval
        this.updateInterval = time ? time / 2 : 0.01;
    }
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
    get latencyHint() {
        return this._latencyHint;
    }
    /**
     * The unwrapped AudioContext or OfflineAudioContext
     */
    get rawContext() {
        return this._context;
    }
    /**
     * The current audio context time plus a short {@link lookAhead}.
     * @example
     * setInterval(() => {
     * 	console.log("now", Tone.now());
     * }, 100);
     */
    now() {
        return this._context.currentTime + this._lookAhead;
    }
    /**
     * The current audio context time without the {@link lookAhead}.
     * In most cases it is better to use {@link now} instead of {@link immediate} since
     * with {@link now} the {@link lookAhead} is applied equally to _all_ components including internal components,
     * to making sure that everything is scheduled in sync. Mixing {@link now} and {@link immediate}
     * can cause some timing issues. If no lookAhead is desired, you can set the {@link lookAhead} to `0`.
     */
    immediate() {
        return this._context.currentTime;
    }
    /**
     * Starts the audio context from a suspended state. This is required
     * to initially start the AudioContext.
     * @see {@link start}
     */
    resume() {
        if (isAudioContext(this._context)) {
            return this._context.resume();
        }
        else {
            return Promise.resolve();
        }
    }
    /**
     * Close the context. Once closed, the context can no longer be used and
     * any AudioNodes created from the context will be silent.
     */
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            if (isAudioContext(this._context) &&
                this.state !== "closed" &&
                !this._closeStarted) {
                this._closeStarted = true;
                yield this._context.close();
            }
            if (this._initialized) {
                closeContext(this);
            }
        });
    }
    /**
     * **Internal** Generate a looped buffer at some constant value.
     */
    getConstant(val) {
        if (this._constants.has(val)) {
            return this._constants.get(val);
        }
        else {
            const buffer = this._context.createBuffer(1, 128, this._context.sampleRate);
            const arr = buffer.getChannelData(0);
            for (let i = 0; i < arr.length; i++) {
                arr[i] = val;
            }
            const constant = this._context.createBufferSource();
            constant.channelCount = 1;
            constant.channelCountMode = "explicit";
            constant.buffer = buffer;
            constant.loop = true;
            constant.start(0);
            this._constants.set(val, constant);
            return constant;
        }
    }
    /**
     * Clean up. Also closes the audio context.
     */
    dispose() {
        super.dispose();
        this._ticker.dispose();
        this._timeouts.dispose();
        Object.keys(this._constants).map((val) => this._constants[val].disconnect());
        this.close();
        return this;
    }
    //---------------------------
    // TIMEOUTS
    //---------------------------
    /**
     * The private loop which keeps track of the context scheduled timeouts
     * Is invoked from the clock source
     */
    _timeoutLoop() {
        const now = this.now();
        this._timeouts.forEachBefore(now, (event) => {
            // invoke the callback
            event.callback();
            this._timeouts.remove(event);
        });
    }
    /**
     * A setTimeout which is guaranteed by the clock source.
     * Also runs in the offline context.
     * @param  fn       The callback to invoke
     * @param  timeout  The timeout in seconds
     * @returns ID to use when invoking Context.clearTimeout
     */
    setTimeout(fn, timeout) {
        this._timeoutIds++;
        const now = this.now();
        this._timeouts.add({
            callback: fn,
            id: this._timeoutIds,
            time: now + timeout,
        });
        return this._timeoutIds;
    }
    /**
     * Clears a previously scheduled timeout with Tone.context.setTimeout
     * @param  id  The ID returned from setTimeout
     */
    clearTimeout(id) {
        this._timeouts.forEach((event) => {
            if (event.id === id) {
                this._timeouts.remove(event);
            }
        });
        return this;
    }
    /**
     * Clear the function scheduled by {@link setInterval}
     */
    clearInterval(id) {
        return this.clearTimeout(id);
    }
    /**
     * Adds a repeating event to the context's callback clock
     */
    setInterval(fn, interval) {
        const id = ++this._timeoutIds;
        const intervalFn = () => {
            const now = this.now();
            this._timeouts.add({
                callback: () => {
                    // invoke the callback
                    fn();
                    // invoke the event to repeat it
                    intervalFn();
                },
                id,
                time: now + interval,
            });
        };
        // kick it off
        intervalFn();
        return id;
    }
}
//# sourceMappingURL=Context.js.map