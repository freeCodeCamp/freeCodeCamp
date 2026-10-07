import { SubscriptionLike, TeardownLogic } from './types';
/**
 * Represents a disposable resource, such as the execution of an Observable. A
 * Subscription has one important method, `unsubscribe`, that takes no argument
 * and just disposes the resource held by the subscription.
 *
 * Additionally, subscriptions may be grouped together through the `add()`
 * method, which will attach a child Subscription to the current Subscription.
 * When a Subscription is unsubscribed, all its children (and its grandchildren)
 * will be unsubscribed as well.
 *
 * @class Subscription
 */
export declare class Subscription implements SubscriptionLike {
    /** @nocollapse */
    static EMPTY: Subscription;
    /**
     * A flag to indicate whether this Subscription has already been unsubscribed.
     * @type {boolean}
     */
    closed: boolean;
    /** @internal */
    protected _parentOrParents: Subscription | Subscription[];
    /** @internal */
    private _subscriptions;
    /**
     * @param {function(): void} [unsubscribe] A function describing how to
     * perform the disposal of resources when the `unsubscribe` method is called.
     */
    constructor(unsubscribe?: () => void);
    /**
     * Disposes the resources held by the subscription. May, for instance, cancel
     * an ongoing Observable execution or cancel any other type of work that
     * started when the Subscription was created.
     * @return {void}
     */
    unsubscribe(): void;
    /**
     * Adds a tear down to be called during the unsubscribe() of this
     * Subscription. Can also be used to add a child subscription.
     *
     * If the tear down being added is a subscription that is already
     * unsubscribed, is the same reference `add` is being called on, or is
     * `Subscription.EMPTY`, it will not be added.
     *
     * If this subscription is already in an `closed` state, the passed
     * tear down logic will be executed immediately.
     *
     * When a parent subscription is unsubscribed, any child subscriptions that were added to it are also unsubscribed.
     *
     * @param {TeardownLogic} teardown The additional logic to execute on
     * teardown.
     * @return {Subscription} Returns the Subscription used or created to be
     * added to the inner subscriptions list. This Subscription can be used with
     * `remove()` to remove the passed teardown logic from the inner subscriptions
     * list.
     */
    add(teardown: TeardownLogic): Subscription;
    /**
     * Removes a Subscription from the internal list of subscriptions that will
     * unsubscribe during the unsubscribe process of this Subscription.
     * @param {Subscription} subscription The subscription to remove.
     * @return {void}
     */
    remove(subscription: Subscription): void;
}
