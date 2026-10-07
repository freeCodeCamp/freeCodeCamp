import { Volume } from "../../component/channel/Volume.js";
import { optionsFromArguments } from "../util/Defaults.js";
import { onContextClose, onContextInit } from "./ContextInitialization.js";
import { Gain } from "./Gain.js";
import { connectSeries, ToneAudioNode, } from "./ToneAudioNode.js";
/**
 * A single master output which is connected to the
 * AudioDestinationNode (aka your speakers).
 * It provides useful conveniences such as the ability
 * to set the volume and mute the entire application.
 * It also gives you the ability to apply master effects to your application.
 *
 * @example
 * const oscillator = new Tone.Oscillator().start();
 * // the audio will go from the oscillator to the speakers
 * oscillator.connect(Tone.getDestination());
 * // a convenience for connecting to the master output is also provided:
 * oscillator.toDestination();
 * @category Core
 */
export class DestinationClass extends ToneAudioNode {
    constructor() {
        const options = optionsFromArguments(DestinationClass.getDefaults(), arguments);
        super(options);
        this.name = "Destination";
        this.input = new Volume({ context: this.context });
        this.output = new Gain({ context: this.context });
        /**
         * The volume of the master output in decibels. -Infinity is silent, and 0 is no change.
         * @example
         * const osc = new Tone.Oscillator().toDestination();
         * osc.start();
         * // ramp the volume down to silent over 10 seconds
         * Tone.getDestination().volume.rampTo(-Infinity, 10);
         */
        this.volume = this.input.volume;
        connectSeries(this.input, this.output, this.context.rawContext.destination);
        this.mute = options.mute;
        this._internalChannels = [
            this.input,
            this.context.rawContext.destination,
            this.output,
        ];
    }
    static getDefaults() {
        return Object.assign(ToneAudioNode.getDefaults(), {
            mute: false,
            volume: 0,
        });
    }
    /**
     * Mute the output.
     * @example
     * const oscillator = new Tone.Oscillator().start().toDestination();
     * setTimeout(() => {
     * 	// mute the output
     * 	Tone.Destination.mute = true;
     * }, 1000);
     */
    get mute() {
        return this.input.mute;
    }
    set mute(mute) {
        this.input.mute = mute;
    }
    /**
     * Add a master effects chain. NOTE: this will disconnect any nodes which were previously
     * chained in the master effects chain.
     * @param args All arguments will be connected in a row and the Master will be routed through it.
     * @example
     * // route all audio through a filter and compressor
     * const lowpass = new Tone.Filter(800, "lowpass");
     * const compressor = new Tone.Compressor(-18);
     * Tone.Destination.chain(lowpass, compressor);
     */
    chain(...args) {
        this.input.disconnect();
        args.unshift(this.input);
        args.push(this.output);
        connectSeries(...args);
        return this;
    }
    /**
     * The maximum number of channels the system can output
     * @example
     * console.log(Tone.Destination.maxChannelCount);
     */
    get maxChannelCount() {
        return this.context.rawContext.destination.maxChannelCount;
    }
    /**
     * Clean up
     */
    dispose() {
        super.dispose();
        this.volume.dispose();
        return this;
    }
}
//-------------------------------------
// 	INITIALIZATION
//-------------------------------------
onContextInit((context) => {
    context.destination = new DestinationClass({ context });
});
onContextClose((context) => {
    context.destination.dispose();
});
//# sourceMappingURL=Destination.js.map