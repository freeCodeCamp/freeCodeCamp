export interface BaseToneOptions {
}
/**
 * Tone is the base class of all other classes.
 *
 * @category Core
 * @constructor
 */
export declare abstract class Tone {
    /**
     * The version number semver
     */
    static version: string;
    /**
     * The name of the class
     */
    protected abstract name: string;
    /**
     * Returns all of the default options belonging to the class.
     */
    static getDefaults(): BaseToneOptions;
    /**
     * Set this debug flag to log all events that happen in this class.
     */
    debug: boolean;
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
    protected log(...args: any[]): void;
    /**
     * Indicates if the instance was disposed
     */
    private _wasDisposed;
    /**
     * disconnect and dispose.
     */
    dispose(): this;
    /**
     * Indicates if the instance was disposed. 'Disposing' an
     * instance means that all of the Web Audio nodes that were
     * created for the instance are disconnected and freed for garbage collection.
     */
    get disposed(): boolean;
    /**
     * Convert the class to a string
     * @example
     * const osc = new Tone.Oscillator();
     * console.log(osc.toString());
     */
    toString(): string;
}
