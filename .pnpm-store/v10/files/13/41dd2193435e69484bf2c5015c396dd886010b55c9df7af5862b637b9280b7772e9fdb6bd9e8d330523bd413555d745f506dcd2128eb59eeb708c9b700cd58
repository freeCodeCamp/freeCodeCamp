/**
 * Tone.js
 * @author Yotam Mann
 * @license http://opensource.org/licenses/MIT MIT License
 * @copyright 2014-2024 Yotam Mann
 */
import { version } from "../version.js";
import { theWindow } from "./context/AudioContext.js";
import { log } from "./util/Debug.js";
/**
 * Tone is the base class of all other classes.
 *
 * @category Core
 * @constructor
 */
export class Tone {
    constructor() {
        //-------------------------------------
        // 	DEBUGGING
        //-------------------------------------
        /**
         * Set this debug flag to log all events that happen in this class.
         */
        this.debug = false;
        //-------------------------------------
        // 	DISPOSING
        //-------------------------------------
        /**
         * Indicates if the instance was disposed
         */
        this._wasDisposed = false;
    }
    /**
     * Returns all of the default options belonging to the class.
     */
    static getDefaults() {
        return {};
    }
    /**
     * Prints the outputs to the console log for debugging purposes.
     * Prints the contents only if either the object has a property
     * called `debug` set to true, or a variable called TONE_DEBUG_CLASS
     * is set to the name of the class.
     * @example
     * const osc = new Tone.Oscillator();
     * // prints all logs originating from this oscillator
     * osc.debug = true;
     * // calls to start/stop will print in the console
     * osc.start();
     */
    log(...args) {
        // if the object is either set to debug = true
        // or if there is a string on the Tone.global.with the class name
        if (this.debug ||
            (theWindow && this.toString() === theWindow.TONE_DEBUG_CLASS)) {
            log(this, ...args);
        }
    }
    /**
     * disconnect and dispose.
     */
    dispose() {
        this._wasDisposed = true;
        return this;
    }
    /**
     * Indicates if the instance was disposed. 'Disposing' an
     * instance means that all of the Web Audio nodes that were
     * created for the instance are disconnected and freed for garbage collection.
     */
    get disposed() {
        return this._wasDisposed;
    }
    /**
     * Convert the class to a string
     * @example
     * const osc = new Tone.Oscillator();
     * console.log(osc.toString());
     */
    toString() {
        return this.name;
    }
}
/**
 * The version number semver
 */
Tone.version = version;
//# sourceMappingURL=Tone.js.map