import {createRectInit, getContentRect} from './utils/geometry.js';

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
export default class ResizeObservation {
    /**
     * Reference to the observed element.
     *
     * @type {Element}
     */
    target;

    /**
     * Broadcasted width of content rectangle.
     *
     * @type {number}
     */
    broadcastWidth = 0;

    /**
     * Broadcasted height of content rectangle.
     *
     * @type {number}
     */
    broadcastHeight = 0;

    /**
     * Reference to the last observed content rectangle.
     *
     * @private {DOMRectInit}
     */
    contentRect_ = createRectInit(0, 0, 0, 0);

    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    constructor(target) {
        this.target = target;
    }

    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    isActive() {
        const rect = getContentRect(this.target);

        this.contentRect_ = rect;

        return (
            rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight
        );
    }

    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    broadcastRect() {
        const rect = this.contentRect_;

        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;

        return rect;
    }
}
