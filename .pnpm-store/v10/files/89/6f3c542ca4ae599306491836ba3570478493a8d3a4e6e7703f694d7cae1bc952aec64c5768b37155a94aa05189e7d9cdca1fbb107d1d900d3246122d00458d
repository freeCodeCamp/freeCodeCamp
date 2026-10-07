import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /*
         * Gets the number of milliseconds that have elapsed since the Unix epoch (1 January 1970 00:00:00 UTC).
         *
         * @return The number of milliseconds.
         */
        now(): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.now
         */
        now(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.now
         */
        now(): PrimitiveChain<number>;
    }
}
