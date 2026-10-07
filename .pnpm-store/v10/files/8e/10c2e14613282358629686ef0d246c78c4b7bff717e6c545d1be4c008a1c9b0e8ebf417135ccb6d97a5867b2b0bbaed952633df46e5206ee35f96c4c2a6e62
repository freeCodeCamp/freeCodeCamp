import { __awaiter } from "tslib";
import { getContext } from "../Global.js";
import { Tone } from "../Tone.js";
import { optionsFromArguments } from "../util/Defaults.js";
import { noOp } from "../util/Interface.js";
import { isArray, isNumber, isString } from "../util/TypeCheck.js";
import { assert } from "../util/Debug.js";
/**
 * AudioBuffer loading and storage. ToneAudioBuffer is used internally by all
 * classes that make requests for audio files such as Tone.Player,
 * Tone.Sampler and Tone.Convolver.
 * @example
 * const buffer = new Tone.ToneAudioBuffer("https://tonejs.github.io/audio/casio/A1.mp3", () => {
 * 	console.log("loaded");
 * });
 * @category Core
 */
export class ToneAudioBuffer extends Tone {
    constructor() {
        super();
        this.name = "ToneAudioBuffer";
        /**
         * Callback when the buffer is loaded.
         */
        this.onload = noOp;
        const options = optionsFromArguments(ToneAudioBuffer.getDefaults(), arguments, ["url", "onload", "onerror"]);
        this.reverse = options.reverse;
        this.onload = options.onload;
        if (isString(options.url)) {
            // initiate the download
            this.load(options.url).catch(options.onerror);
        }
        else if (options.url) {
            this.set(options.url);
        }
    }
    static getDefaults() {
        return {
            onerror: noOp,
            onload: noOp,
            reverse: false,
        };
    }
    /**
     * The sample rate of the AudioBuffer
     */
    get sampleRate() {
        if (this._buffer) {
            return this._buffer.sampleRate;
        }
        else {
            return getContext().sampleRate;
        }
    }
    /**
     * Pass in an AudioBuffer or ToneAudioBuffer to set the value of this buffer.
     */
    set(buffer) {
        if (buffer instanceof ToneAudioBuffer) {
            // if it's loaded, set it
            if (buffer.loaded) {
                this._buffer = buffer.get();
            }
            else {
                // otherwise when it's loaded, invoke it's callback
                buffer.onload = () => {
                    this.set(buffer);
                    this.onload(this);
                };
            }
        }
        else {
            this._buffer = buffer;
        }
        // reverse it initially
        if (this._reversed) {
            this._reverse();
        }
        return this;
    }
    /**
     * The audio buffer stored in the object.
     */
    get() {
        return this._buffer;
    }
    /**
     * Makes an fetch request for the selected url then decodes the file as an audio buffer.
     * Invokes the callback once the audio buffer loads.
     * @param url The url of the buffer to load. filetype support depends on the browser.
     * @returns A Promise which resolves with this ToneAudioBuffer
     */
    load(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const doneLoading = ToneAudioBuffer.load(url).then((audioBuffer) => {
                this.set(audioBuffer);
                // invoke the onload method
                this.onload(this);
            });
            ToneAudioBuffer.downloads.push(doneLoading);
            try {
                yield doneLoading;
            }
            finally {
                // remove the downloaded file
                const index = ToneAudioBuffer.downloads.indexOf(doneLoading);
                ToneAudioBuffer.downloads.splice(index, 1);
            }
            return this;
        });
    }
    /**
     * clean up
     */
    dispose() {
        super.dispose();
        this._buffer = undefined;
        return this;
    }
    /**
     * Set the audio buffer from the array.
     * To create a multichannel AudioBuffer, pass in a multidimensional array.
     * @param array The array to fill the audio buffer
     */
    fromArray(array) {
        const isMultidimensional = isArray(array) && array[0].length > 0;
        const channels = isMultidimensional ? array.length : 1;
        const len = isMultidimensional
            ? array[0].length
            : array.length;
        const context = getContext();
        const buffer = context.createBuffer(channels, len, context.sampleRate);
        const multiChannelArray = !isMultidimensional && channels === 1
            ? [array]
            : array;
        for (let c = 0; c < channels; c++) {
            buffer.copyToChannel(multiChannelArray[c], c);
        }
        this._buffer = buffer;
        return this;
    }
    /**
     * Sums multiple channels into 1 channel
     * @param chanNum Optionally only copy a single channel from the array.
     */
    toMono(chanNum) {
        if (isNumber(chanNum)) {
            this.fromArray(this.toArray(chanNum));
        }
        else {
            let outputArray = new Float32Array(this.length);
            const numChannels = this.numberOfChannels;
            for (let channel = 0; channel < numChannels; channel++) {
                const channelArray = this.toArray(channel);
                for (let i = 0; i < channelArray.length; i++) {
                    outputArray[i] += channelArray[i];
                }
            }
            // divide by the number of channels
            outputArray = outputArray.map((sample) => sample / numChannels);
            this.fromArray(outputArray);
        }
        return this;
    }
    /**
     * Get the buffer as an array. Single channel buffers will return a 1-dimensional
     * Float32Array, and multichannel buffers will return multidimensional arrays.
     * @param channel Optionally only copy a single channel from the array.
     */
    toArray(channel) {
        if (isNumber(channel)) {
            return this.getChannelData(channel);
        }
        else if (this.numberOfChannels === 1) {
            return this.toArray(0);
        }
        else {
            const ret = [];
            for (let c = 0; c < this.numberOfChannels; c++) {
                ret[c] = this.getChannelData(c);
            }
            return ret;
        }
    }
    /**
     * Returns the Float32Array representing the PCM audio data for the specific channel.
     * @param  channel  The channel number to return
     * @return The audio as a TypedArray
     */
    getChannelData(channel) {
        if (this._buffer) {
            return this._buffer.getChannelData(channel);
        }
        else {
            return new Float32Array(0);
        }
    }
    /**
     * Cut a subsection of the array and return a buffer of the
     * subsection. Does not modify the original buffer
     * @param start The time to start the slice
     * @param end The end time to slice. If none is given will default to the end of the buffer
     */
    slice(start, end = this.duration) {
        assert(this.loaded, "Buffer is not loaded");
        const startSamples = Math.floor(start * this.sampleRate);
        const endSamples = Math.floor(end * this.sampleRate);
        assert(startSamples < endSamples, "The start time must be less than the end time");
        const length = endSamples - startSamples;
        const retBuffer = getContext().createBuffer(this.numberOfChannels, length, this.sampleRate);
        for (let channel = 0; channel < this.numberOfChannels; channel++) {
            retBuffer.copyToChannel(this.getChannelData(channel).subarray(startSamples, endSamples), channel);
        }
        return new ToneAudioBuffer(retBuffer);
    }
    /**
     * Reverse the buffer.
     */
    _reverse() {
        if (this.loaded) {
            for (let i = 0; i < this.numberOfChannels; i++) {
                this.getChannelData(i).reverse();
            }
        }
        return this;
    }
    /**
     * If the buffer is loaded or not
     */
    get loaded() {
        return this.length > 0;
    }
    /**
     * The duration of the buffer in seconds.
     */
    get duration() {
        if (this._buffer) {
            return this._buffer.duration;
        }
        else {
            return 0;
        }
    }
    /**
     * The length of the buffer in samples
     */
    get length() {
        if (this._buffer) {
            return this._buffer.length;
        }
        else {
            return 0;
        }
    }
    /**
     * The number of discrete audio channels. Returns 0 if no buffer is loaded.
     */
    get numberOfChannels() {
        if (this._buffer) {
            return this._buffer.numberOfChannels;
        }
        else {
            return 0;
        }
    }
    /**
     * Reverse the buffer.
     */
    get reverse() {
        return this._reversed;
    }
    set reverse(rev) {
        if (this._reversed !== rev) {
            this._reversed = rev;
            this._reverse();
        }
    }
    /**
     * Create a ToneAudioBuffer from the array. To create a multichannel AudioBuffer,
     * pass in a multidimensional array.
     * @param array The array to fill the audio buffer
     * @return A ToneAudioBuffer created from the array
     */
    static fromArray(array) {
        return new ToneAudioBuffer().fromArray(array);
    }
    /**
     * Creates a ToneAudioBuffer from a URL, returns a promise which resolves to a ToneAudioBuffer
     * @param  url The url to load.
     * @return A promise which resolves to a ToneAudioBuffer
     */
    static fromUrl(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const buffer = new ToneAudioBuffer();
            return yield buffer.load(url);
        });
    }
    /**
     * Loads a url using fetch and returns the AudioBuffer.
     */
    static load(url) {
        return __awaiter(this, void 0, void 0, function* () {
            // make sure there is a slash between the baseUrl and the url
            const baseUrl = ToneAudioBuffer.baseUrl === "" ||
                ToneAudioBuffer.baseUrl.endsWith("/")
                ? ToneAudioBuffer.baseUrl
                : ToneAudioBuffer.baseUrl + "/";
            const response = yield fetch(baseUrl + url);
            if (!response.ok) {
                throw new Error(`could not load url: ${url}`);
            }
            const arrayBuffer = yield response.arrayBuffer();
            const audioBuffer = yield getContext().decodeAudioData(arrayBuffer);
            return audioBuffer;
        });
    }
    /**
     * Checks a url's extension to see if the current browser can play that file type.
     * @param url The url/extension to test
     * @return If the file extension can be played
     * @static
     * @example
     * Tone.ToneAudioBuffer.supportsType("wav"); // returns true
     * Tone.ToneAudioBuffer.supportsType("path/to/file.wav"); // returns true
     */
    static supportsType(url) {
        const extensions = url.split(".");
        const extension = extensions[extensions.length - 1];
        const response = document
            .createElement("audio")
            .canPlayType("audio/" + extension);
        return response !== "";
    }
    /**
     * Returns a Promise which resolves when all of the buffers have loaded
     */
    static loaded() {
        return __awaiter(this, void 0, void 0, function* () {
            // this makes sure that the function is always async
            yield Promise.resolve();
            while (ToneAudioBuffer.downloads.length) {
                yield ToneAudioBuffer.downloads[0];
            }
        });
    }
}
//-------------------------------------
// STATIC METHODS
//-------------------------------------
/**
 * A path which is prefixed before every url.
 */
ToneAudioBuffer.baseUrl = "";
/**
 * All of the downloads
 */
ToneAudioBuffer.downloads = [];
//# sourceMappingURL=ToneAudioBuffer.js.map