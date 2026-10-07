import { ToneWithContext, } from "../context/ToneWithContext.js";
import { Timeline } from "./Timeline.js";
import { onContextClose, onContextInit, } from "../context/ContextInitialization.js";
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
export class DrawClass extends ToneWithContext {
    constructor() {
        super(...arguments);
        this.name = "Draw";
        /**
         * The duration after which events are not invoked.
         */
        this.expiration = 0.25;
        /**
         * The amount of time before the scheduled time
         * that the callback can be invoked. Default is
         * half the time of an animation frame (0.008 seconds).
         */
        this.anticipation = 0.008;
        /**
         * All of the events.
         */
        this._events = new Timeline();
        /**
         * The draw loop
         */
        this._boundDrawLoop = this._drawLoop.bind(this);
        /**
         * The animation frame id
         */
        this._animationFrame = -1;
    }
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
    schedule(callback, time) {
        this._events.add({
            callback,
            time: this.toSeconds(time),
        });
        // start the draw loop on the first event
        if (this._events.length === 1) {
            this._animationFrame = requestAnimationFrame(this._boundDrawLoop);
        }
        return this;
    }
    /**
     * Cancel events scheduled after the given time
     * @param  after  Time after which scheduled events will be removed from the scheduling timeline.
     */
    cancel(after) {
        this._events.cancel(this.toSeconds(after));
        return this;
    }
    /**
     * The draw loop
     */
    _drawLoop() {
        const now = this.context.currentTime;
        this._events.forEachBefore(now + this.anticipation, (event) => {
            if (now - event.time <= this.expiration) {
                event.callback();
            }
            this._events.remove(event);
        });
        if (this._events.length > 0) {
            this._animationFrame = requestAnimationFrame(this._boundDrawLoop);
        }
    }
    dispose() {
        super.dispose();
        this._events.dispose();
        cancelAnimationFrame(this._animationFrame);
        return this;
    }
}
//-------------------------------------
// 	INITIALIZATION
//-------------------------------------
onContextInit((context) => {
    context.draw = new DrawClass({ context });
});
onContextClose((context) => {
    context.draw.dispose();
});
//# sourceMappingURL=Draw.js.map