import { Tone } from "../Tone.js";
import { optionsFromArguments } from "../util/Defaults.js";
import { noOp } from "../util/Interface.js";
import { isString } from "../util/TypeCheck.js";
import { ToneAudioBuffer } from "./ToneAudioBuffer.js";
import { assert } from "../util/Debug.js";
/**
 * A data structure for holding multiple buffers in a Map-like datastructure.
 *
 * @example
 * const pianoSamples = new Tone.ToneAudioBuffers({
 * 	A1: "https://tonejs.github.io/audio/casio/A1.mp3",
 * 	A2: "https://tonejs.github.io/audio/casio/A2.mp3",
 * }, () => {
 * 	const player = new Tone.Player().toDestination();
 * 	// play one of the samples when they all load
 * 	player.buffer = pianoSamples.get("A2");
 * 	player.start();
 * });
 * @example
 * // To pass in additional parameters in the second parameter
 * const buffers = new Tone.ToneAudioBuffers({
 * 	 urls: {
 * 		 A1: "A1.mp3",
 * 		 A2: "A2.mp3",
 * 	 },
 * 	 onload: () => console.log("loaded"),
 * 	 baseUrl: "https://tonejs.github.io/audio/casio/"
 * });
 * @category Core
 */
export class ToneAudioBuffers extends Tone {
    constructor() {
        super();
        this.name = "ToneAudioBuffers";
        /**
         * All of the buffers
         */
        this._buffers = new Map();
        /**
         * Keep track of the number of loaded buffers
         */
        this._loadingCount = 0;
        const options = optionsFromArguments(ToneAudioBuffers.getDefaults(), arguments, ["urls", "onload", "baseUrl"], "urls");
        this.baseUrl = options.baseUrl;
        // add each one
        Object.keys(options.urls).forEach((name) => {
            this._loadingCount++;
            const url = options.urls[name];
            this.add(name, url, this._bufferLoaded.bind(this, options.onload), options.onerror);
        });
    }
    static getDefaults() {
        return {
            baseUrl: "",
            onerror: noOp,
            onload: noOp,
            urls: {},
        };
    }
    /**
     * True if the buffers object has a buffer by that name.
     * @param  name  The key or index of the buffer.
     */
    has(name) {
        return this._buffers.has(name.toString());
    }
    /**
     * Get a buffer by name. If an array was loaded,
     * then use the array index.
     * @param  name  The key or index of the buffer.
     */
    get(name) {
        assert(this.has(name), `ToneAudioBuffers has no buffer named: ${name}`);
        return this._buffers.get(name.toString());
    }
    /**
     * A buffer was loaded. decrement the counter.
     */
    _bufferLoaded(callback) {
        this._loadingCount--;
        if (this._loadingCount === 0 && callback) {
            callback();
        }
    }
    /**
     * If the buffers are loaded or not
     */
    get loaded() {
        return Array.from(this._buffers).every(([_, buffer]) => buffer.loaded);
    }
    /**
     * Add a buffer by name and url to the Buffers
     * @param  name      A unique name to give the buffer
     * @param  url  Either the url of the bufer, or a buffer which will be added with the given name.
     * @param  callback  The callback to invoke when the url is loaded.
     * @param  onerror  Invoked if the buffer can't be loaded
     */
    add(name, url, callback = noOp, onerror = noOp) {
        if (isString(url)) {
            // don't include the baseUrl if the url is a base64 encoded sound
            if (this.baseUrl &&
                url.trim().substring(0, 11).toLowerCase() === "data:audio/") {
                this.baseUrl = "";
            }
            this._buffers.set(name.toString(), new ToneAudioBuffer(this.baseUrl + url, callback, onerror));
        }
        else {
            this._buffers.set(name.toString(), new ToneAudioBuffer(url, callback, onerror));
        }
        return this;
    }
    dispose() {
        super.dispose();
        this._buffers.forEach((buffer) => buffer.dispose());
        this._buffers.clear();
        return this;
    }
}
//# sourceMappingURL=ToneAudioBuffers.js.map