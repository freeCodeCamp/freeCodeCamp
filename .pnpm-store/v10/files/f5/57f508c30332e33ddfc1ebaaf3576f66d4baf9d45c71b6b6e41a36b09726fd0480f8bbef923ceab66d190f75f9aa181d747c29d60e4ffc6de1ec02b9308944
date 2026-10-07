import {Map} from './shims/es6-collections.js';
import ResizeObservation from './ResizeObservation.js';
import ResizeObserverEntry from './ResizeObserverEntry.js';
import getWindowOf from './utils/getWindowOf.js';

export default class ResizeObserverSPI {
    /**
     * Collection of resize observations that have detected changes in dimensions
     * of elements.
     *
     * @private {Array<ResizeObservation>}
     */
    activeObservations_ = [];

    /**
     * Reference to the callback function.
     *
     * @private {ResizeObserverCallback}
     */
    callback_;

    /**
     * Public ResizeObserver instance which will be passed to the callback
     * function and used as a value of it's "this" binding.
     *
     * @private {ResizeObserver}
     */
    callbackCtx_;

    /**
     * Reference to the associated ResizeObserverController.
     *
     * @private {ResizeObserverController}
     */
    controller_;

    /**
     * Registry of the ResizeObservation instances.
     *
     * @private {Map<Element, ResizeObservation>}
     */
    observations_ = new Map();

    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    constructor(callback, controller, callbackCtx) {
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }

        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }

    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    observe(target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }

        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }

        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }

        const observations = this.observations_;

        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }

        observations.set(target, new ResizeObservation(target));

        this.controller_.addObserver(this);

        // Force the update of observations.
        this.controller_.refresh();
    }

    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    unobserve(target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }

        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }

        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }

        const observations = this.observations_;

        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }

        observations.delete(target);

        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    }

    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    disconnect() {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    }

    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    gatherActive() {
        this.clearActive();

        this.observations_.forEach(observation => {
            if (observation.isActive()) {
                this.activeObservations_.push(observation);
            }
        });
    }

    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    broadcastActive() {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }

        const ctx = this.callbackCtx_;

        // Create ResizeObserverEntry instance for every active observation.
        const entries = this.activeObservations_.map(observation => {
            return new ResizeObserverEntry(
                observation.target,
                observation.broadcastRect()
            );
        });

        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    }

    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    clearActive() {
        this.activeObservations_.splice(0);
    }

    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    hasActive() {
        return this.activeObservations_.length > 0;
    }
}
