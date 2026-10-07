import isBrowser from './utils/isBrowser.js';
import throttle from './utils/throttle.js';

// Minimum delay before invoking the update of observers.
const REFRESH_DELAY = 20;

// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
const transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];

// Check if MutationObserver is available.
const mutationObserverSupported = typeof MutationObserver !== 'undefined';

/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
export default class ResizeObserverController {
    /**
     * Indicates whether DOM listeners have been added.
     *
     * @private {boolean}
     */
    connected_ = false;

    /**
     * Tells that controller has subscribed for Mutation Events.
     *
     * @private {boolean}
     */
    mutationEventsAdded_ = false;

    /**
     * Keeps reference to the instance of MutationObserver.
     *
     * @private {MutationObserver}
     */
    mutationsObserver_ = null;

    /**
     * A list of connected observers.
     *
     * @private {Array<ResizeObserverSPI>}
     */
    observers_ = [];

    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    static instance_ = null;

    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    constructor() {
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }

    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    addObserver(observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }

        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    }

    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    removeObserver(observer) {
        const observers = this.observers_;
        const index = observers.indexOf(observer);

        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }

        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    }

    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    refresh() {
        const changesDetected = this.updateObservers_();

        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    }

    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    updateObservers_() {
        // Collect observers that have active observations.
        const activeObservers = this.observers_.filter(observer => {
            return observer.gatherActive(), observer.hasActive();
        });

        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(observer => observer.broadcastActive());

        return activeObservers.length > 0;
    }

    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    connect_() {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }

        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);

        window.addEventListener('resize', this.refresh);

        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);

            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        } else {
            document.addEventListener('DOMSubtreeModified', this.refresh);

            this.mutationEventsAdded_ = true;
        }

        this.connected_ = true;
    }

    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    disconnect_() {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }

        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);

        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }

        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }

        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    }

    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    onTransitionEnd_({propertyName = ''}) {
        // Detect whether transition may affect dimensions of an element.
        const isReflowProperty = transitionKeys.some(key => {
            return !!~propertyName.indexOf(key);
        });

        if (isReflowProperty) {
            this.refresh();
        }
    }

    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    static getInstance() {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }

        return this.instance_;
    }
}
