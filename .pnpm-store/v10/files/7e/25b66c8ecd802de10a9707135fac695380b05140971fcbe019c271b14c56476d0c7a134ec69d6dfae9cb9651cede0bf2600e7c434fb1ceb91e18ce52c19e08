import { Seconds } from "../type/Units.js";
import { OfflineContext } from "./OfflineContext.js";
import { ToneAudioBuffer } from "./ToneAudioBuffer.js";
import "./Destination.js";
import "./Listener.js";
/**
 * Generate a buffer by rendering all of the Tone.js code within the callback using the OfflineAudioContext.
 * The OfflineAudioContext is capable of rendering much faster than real time in many cases.
 * The callback function also passes in an offline instance of {@link Context} which can be used
 * to schedule events along the Transport.
 * @param  callback  All Tone.js nodes which are created and scheduled within this callback are recorded into the output Buffer.
 * @param  duration     the amount of time to record for.
 * @return  The promise which is invoked with the ToneAudioBuffer of the recorded output.
 * @example
 * // render 2 seconds of the oscillator
 * Tone.Offline(() => {
 * 	// only nodes created in this callback will be recorded
 * 	const oscillator = new Tone.Oscillator().toDestination().start(0);
 * }, 2).then((buffer) => {
 * 	// do something with the output buffer
 * 	console.log(buffer);
 * });
 * @example
 * // can also schedule events along the Transport
 * // using the passed in Offline Transport
 * Tone.Offline(({ transport }) => {
 * 	const osc = new Tone.Oscillator().toDestination();
 * 	transport.schedule(time => {
 * 		osc.start(time).stop(time + 0.1);
 * 	}, 1);
 * 	// make sure to start the transport
 * 	transport.start(0.2);
 * }, 4).then((buffer) => {
 * 	// do something with the output buffer
 * 	console.log(buffer);
 * });
 * @category Core
 */
export declare function Offline(callback: (context: OfflineContext) => Promise<void> | void, duration: Seconds, channels?: number, sampleRate?: number): Promise<ToneAudioBuffer>;
