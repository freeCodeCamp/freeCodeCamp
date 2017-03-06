module Rx {
    export interface Subscription {
        /**
         * Checks whether the given subscription is equal to the current instance.
         * @param other Subscription object to check for equality.
         * @returns {Boolean} true if both objects are equal; false otherwise.
         */
        equals(other: Subscription): boolean;
        /**
         * Returns a string representation of the current Subscription value.
         * @returns {String} String representation of the current Subscription value.
         */
        toString(): string;
    }

    interface SubscriptionStatic {
        /**
         * Creates a new subscription object with the given virtual subscription and unsubscription time.
         *
         * @constructor
         * @param {Number} subscribe Virtual time at which the subscription occurred.
         * @param {Number} unsubscribe Virtual time at which the unsubscription occurred.
         */
        new (subscribeAt: number, unsubscribeAt?: number): Subscription;
    }

    export var Subscription: SubscriptionStatic;
}

(function() {
    var s: Rx.Subscription = new Rx.Subscription(100);
    var s: Rx.Subscription = new Rx.Subscription(100, 200);

    var b: boolean = s.equals(s);
    var st: string = s.toString();
});
