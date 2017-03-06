module Rx {
    export interface Recorded {
        /**
         * Checks whether the given recorded object is equal to the current instance.
         *
         * @param {Recorded} other Recorded object to check for equality.
         * @returns {Boolean} true if both objects are equal; false otherwise.
         */
        equals(other: Recorded): boolean;
        /**
         * Returns a string representation of the current Recorded value.
         *
         * @returns {String} String representation of the current Recorded value.
         */
        toString(): string;
        time: number;
        value: any;
    }

    interface RecordedStatic {
        /**
         * Creates a new object recording the production of the specified value at the given virtual time.
         *
         * @constructor
         * @param {Number} time Virtual time the value was produced on.
         * @param {Mixed} value Value that was produced.
         * @param {Function} comparer An optional comparer.
         */
        new (time: number, value: any, equalityComparer?: _Comparer<any, boolean>): Recorded;
    }

    export var Recorded: RecordedStatic;
}

(function() {
    var r: Rx.Recorded = new Rx.Recorded(100, 'abc');
    var r: Rx.Recorded = new Rx.Recorded(100, 'abc', (x, y) => false);

    var b: boolean = r.equals(r);
    var s: string = r.toString();
    var t: number = r.time;
    var a: any = r.value;
});
