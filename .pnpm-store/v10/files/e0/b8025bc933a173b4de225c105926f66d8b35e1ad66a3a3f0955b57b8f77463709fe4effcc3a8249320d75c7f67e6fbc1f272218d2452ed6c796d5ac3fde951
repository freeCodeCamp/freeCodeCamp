import { ToneWithContext, ToneWithContextOptions } from "../context/ToneWithContext.js";
import { Seconds, Time } from "../type/Units.js";
/**
 * Draw is useful for synchronizing visuals and audio events.
 * Callbacks from Tone.Transport or any of the Tone.Event classes
 * always happen _before_ the scheduled time and are not synchronized
 * to the animation frame so they are not good for triggering tightly
 * synchronized visuals and sound. Draw makes it easy to schedule
 * callbacks using the AudioContext time and uses requestAnimationFrame.
 * @example
 * Tone.Transport.schedule((time) => {
 * 	// use the time argument to schedule a callback with Draw
 * 	Tone.Draw.schedule(() => {
 * 		// do drawing or DOM manipulation here
 * 		console.log(time);
 * 	}, time);
 * }, "+0.5");
 * Tone.Transport.start();
 * @category Core
 */
export declare class DrawClass extends ToneWithContext<ToneWithContextOptions> {
    readonly name: string;
    /**
     * The duration after which events are not invoked.
     */
    expiration: Seconds;
    /**
     * The amount of time before the scheduled time
     * that the callback can be invoked. Default is
     * half the time of an animation frame (0.008 seconds).
     */
    anticipation: Seconds;
    /**
     * All of the events.
     */
    private _events;
    /**
     * The draw loop
     */
    private _boundDrawLoop;
    /**
     * The animation frame id
     */
    private _animationFrame;
    /**
     * Schedule a function at the given time to be invoked
     * on the nearest animation frame.
     * @param  callback  Callback is invoked at the given time.
     * @param  time      The time relative to the AudioContext time to invoke the callback.
     * @example
     * Tone.Transport.scheduleRepeat(time => {
     * 	Tone.Draw.schedule(() => console.log(time), time);
     * }, 1);
     * Tone.Transport.start();
     */
    schedule(callback: () => void, time: Time): this;
    /**
     * Cancel events scheduled after the given time
     * @param  after  Time after which scheduled events will be removed from the scheduling timeline.
     */
    cancel(after?: Time): this;
    /**
     * The draw loop
     */
    private _drawLoop;
    dispose(): this;
}
