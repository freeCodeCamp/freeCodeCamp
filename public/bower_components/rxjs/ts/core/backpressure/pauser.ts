module Rx {
    /**
    * Used to pause and resume streams.
    */
    export interface Pauser {
        /**
         * Pauses the underlying sequence.
         */
        pause(): void;

        /**
        * Resumes the underlying sequence.
        */
        resume(): void;
    }
}

(function() {
    var p: Rx.Pauser;

    p.pause;
    p.resume;
})
