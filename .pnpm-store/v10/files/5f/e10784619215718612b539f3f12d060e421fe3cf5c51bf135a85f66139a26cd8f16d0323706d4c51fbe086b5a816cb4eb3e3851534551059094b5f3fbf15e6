import { TicksClass } from "../core/type/Ticks.js";
import { omitFromObject, optionsFromArguments } from "../core/util/Defaults.js";
import { isArray, isString } from "../core/util/TypeCheck.js";
import { Part } from "./Part.js";
import { ToneEvent } from "./ToneEvent.js";
/**
 * A sequence is an alternate notation of a part. Instead
 * of passing in an array of [time, event] pairs, pass
 * in an array of events which will be spaced at the
 * given subdivision. Sub-arrays will subdivide that beat
 * by the number of items are in the array.
 * Sequence notation inspiration from [Tidal Cycles](http://tidalcycles.org/)
 * @example
 * const synth = new Tone.Synth().toDestination();
 * const seq = new Tone.Sequence((time, note) => {
 * 	synth.triggerAttackRelease(note, 0.1, time);
 * 	// subdivisions are given as subarrays
 * }, ["C4", ["E4", "D4", "E4"], "G4", ["A4", "G4"]]).start(0);
 * Tone.Transport.start();
 * @category Event
 */
export class Sequence extends ToneEvent {
    constructor() {
        const options = optionsFromArguments(Sequence.getDefaults(), arguments, ["callback", "events", "subdivision"]);
        super(options);
        this.name = "Sequence";
        /**
         * The object responsible for scheduling all of the events
         */
        this._part = new Part({
            callback: this._seqCallback.bind(this),
            context: this.context,
        });
        /**
         * private reference to all of the sequence proxies
         */
        this._events = [];
        /**
         * The proxied array
         */
        this._eventsArray = [];
        this._subdivision = this.toTicks(options.subdivision);
        this.events = options.events;
        // set all of the values
        this.loop = options.loop;
        this.loopStart = options.loopStart;
        this.loopEnd = options.loopEnd;
        this.playbackRate = options.playbackRate;
        this.probability = options.probability;
        this.humanize = options.humanize;
        this.mute = options.mute;
        this.playbackRate = options.playbackRate;
    }
    static getDefaults() {
        return Object.assign(omitFromObject(ToneEvent.getDefaults(), ["value"]), {
            events: [],
            loop: true,
            loopEnd: 0,
            loopStart: 0,
            subdivision: "8n",
        });
    }
    /**
     * The internal callback for when an event is invoked
     */
    _seqCallback(time, value) {
        if (value !== null && !this.mute) {
            this.callback(time, value);
        }
    }
    /**
     * The sequence
     */
    get events() {
        return this._events;
    }
    set events(s) {
        this.clear();
        this._eventsArray = s;
        this._events = this._createSequence(this._eventsArray);
        this._eventsUpdated();
    }
    /**
     * Start the part at the given time.
     * @param  time    When to start the part.
     * @param  offset  The offset index to start at
     */
    start(time, offset) {
        this._part.start(time, offset ? this._indexTime(offset) : offset);
        return this;
    }
    /**
     * Stop the part at the given time.
     * @param  time  When to stop the part.
     */
    stop(time) {
        this._part.stop(time);
        return this;
    }
    /**
     * The subdivision of the sequence. This can only be
     * set in the constructor. The subdivision is the
     * interval between successive steps.
     */
    get subdivision() {
        return new TicksClass(this.context, this._subdivision).toSeconds();
    }
    /**
     * Create a sequence proxy which can be monitored to create subsequences
     */
    _createSequence(array) {
        return new Proxy(array, {
            get: (target, property) => {
                // property is index in this case
                return target[property];
            },
            set: (target, property, value) => {
                if (isString(property) && isFinite(parseInt(property, 10))) {
                    if (isArray(value)) {
                        target[property] = this._createSequence(value);
                    }
                    else {
                        target[property] = value;
                    }
                }
                else {
                    target[property] = value;
                }
                this._eventsUpdated();
                // return true to accept the changes
                return true;
            },
        });
    }
    /**
     * When the sequence has changed, all of the events need to be recreated
     */
    _eventsUpdated() {
        this._part.clear();
        this._rescheduleSequence(this._eventsArray, this._subdivision, this.startOffset);
        // update the loopEnd
        this.loopEnd = this.loopEnd;
    }
    /**
     * reschedule all of the events that need to be rescheduled
     */
    _rescheduleSequence(sequence, subdivision, startOffset) {
        sequence.forEach((value, index) => {
            const eventOffset = index * subdivision + startOffset;
            if (isArray(value)) {
                this._rescheduleSequence(value, subdivision / value.length, eventOffset);
            }
            else {
                const startTime = new TicksClass(this.context, eventOffset, "i").toSeconds();
                this._part.add(startTime, value);
            }
        });
    }
    /**
     * Get the time of the index given the Sequence's subdivision
     * @param  index
     * @return The time of that index
     */
    _indexTime(index) {
        return new TicksClass(this.context, index * this._subdivision + this.startOffset).toSeconds();
    }
    /**
     * Clear all of the events
     */
    clear() {
        this._part.clear();
        return this;
    }
    dispose() {
        super.dispose();
        this._part.dispose();
        return this;
    }
    //-------------------------------------
    // PROXY CALLS
    //-------------------------------------
    get loop() {
        return this._part.loop;
    }
    set loop(l) {
        this._part.loop = l;
    }
    /**
     * The index at which the sequence should start looping
     */
    get loopStart() {
        return this._loopStart;
    }
    set loopStart(index) {
        this._loopStart = index;
        this._part.loopStart = this._indexTime(index);
    }
    /**
     * The index at which the sequence should end looping
     */
    get loopEnd() {
        return this._loopEnd;
    }
    set loopEnd(index) {
        this._loopEnd = index;
        if (index === 0) {
            this._part.loopEnd = this._indexTime(this._eventsArray.length);
        }
        else {
            this._part.loopEnd = this._indexTime(index);
        }
    }
    get startOffset() {
        return this._part.startOffset;
    }
    set startOffset(start) {
        this._part.startOffset = start;
    }
    get playbackRate() {
        return this._part.playbackRate;
    }
    set playbackRate(rate) {
        this._part.playbackRate = rate;
    }
    get probability() {
        return this._part.probability;
    }
    set probability(prob) {
        this._part.probability = prob;
    }
    get progress() {
        return this._part.progress;
    }
    get humanize() {
        return this._part.humanize;
    }
    set humanize(variation) {
        this._part.humanize = variation;
    }
    /**
     * The number of scheduled events
     */
    get length() {
        return this._part.length;
    }
}
//# sourceMappingURL=Sequence.js.map