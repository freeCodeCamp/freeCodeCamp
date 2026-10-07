import { getContext } from "../Global.js";
import { TimeClass } from "./Time.js";
/**
 * TransportTime is a time along the Transport's
 * timeline. It is similar to Tone.Time, but instead of evaluating
 * against the AudioContext's clock, it is evaluated against
 * the Transport's position. See [TransportTime wiki](https://github.com/Tonejs/Tone.js/wiki/TransportTime).
 * @category Unit
 */
export class TransportTimeClass extends TimeClass {
    constructor() {
        super(...arguments);
        this.name = "TransportTime";
    }
    /**
     * Return the current time in whichever context is relevant
     */
    _now() {
        return this.context.transport.seconds;
    }
}
/**
 * TransportTime is a time along the Transport's
 * timeline. It is similar to Tone.Time, but instead of evaluating
 * against the AudioContext's clock, it is evaluated against
 * the Transport's position. See [TransportTime wiki](https://github.com/Tonejs/Tone.js/wiki/TransportTime).
 * @category Unit
 */
export function TransportTime(value, units) {
    return new TransportTimeClass(getContext(), value, units);
}
//# sourceMappingURL=TransportTime.js.map