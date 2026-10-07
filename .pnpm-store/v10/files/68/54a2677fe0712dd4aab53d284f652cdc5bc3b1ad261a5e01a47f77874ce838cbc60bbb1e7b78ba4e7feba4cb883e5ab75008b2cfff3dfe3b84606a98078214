import { Loop } from "./Loop.js";
import { PatternGenerator } from "./PatternGenerator.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { noOp } from "../core/util/Interface.js";
/**
 * Pattern arpeggiates between the given notes
 * in a number of patterns.
 * @example
 * const pattern = new Tone.Pattern((time, note) => {
 * 	// the order of the notes passed in depends on the pattern
 * }, ["C2", "D4", "E5", "A6"], "upDown");
 * @category Event
 */
export class Pattern extends Loop {
    constructor() {
        const options = optionsFromArguments(Pattern.getDefaults(), arguments, [
            "callback",
            "values",
            "pattern",
        ]);
        super(options);
        this.name = "Pattern";
        this.callback = options.callback;
        this._values = options.values;
        this._pattern = PatternGenerator(options.values.length, options.pattern);
        this._type = options.pattern;
    }
    static getDefaults() {
        return Object.assign(Loop.getDefaults(), {
            pattern: "up",
            values: [],
            callback: noOp,
        });
    }
    /**
     * Internal function called when the notes should be called
     */
    _tick(time) {
        const index = this._pattern.next();
        this._index = index.value;
        this._value = this._values[index.value];
        this.callback(time, this._value);
    }
    /**
     * The array of events.
     */
    get values() {
        return this._values;
    }
    set values(val) {
        this._values = val;
        // reset the pattern
        this.pattern = this._type;
    }
    /**
     * The current value of the pattern.
     */
    get value() {
        return this._value;
    }
    /**
     * The current index of the pattern.
     */
    get index() {
        return this._index;
    }
    /**
     * The pattern type.
     */
    get pattern() {
        return this._type;
    }
    set pattern(pattern) {
        this._type = pattern;
        this._pattern = PatternGenerator(this._values.length, this._type);
    }
}
//# sourceMappingURL=Pattern.js.map