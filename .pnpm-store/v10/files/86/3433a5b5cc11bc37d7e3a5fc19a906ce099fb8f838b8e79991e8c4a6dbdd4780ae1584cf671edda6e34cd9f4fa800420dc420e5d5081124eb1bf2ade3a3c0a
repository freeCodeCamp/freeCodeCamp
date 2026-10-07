import {Map} from './shims/es6-collections.js';
import ResizeObserverController from './ResizeObserverController.js';
import ResizeObserverSPI from './ResizeObserverSPI.js';

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
const observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new Map();

/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
class ResizeObserver {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    constructor(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }

        const controller = ResizeObserverController.getInstance();
        const observer = new ResizeObserverSPI(callback, controller, this);

        observers.set(this, observer);
    }
}

// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(method => {
    ResizeObserver.prototype[method] = function () {
        return observers.get(this)[method](...arguments);
    };
});

export default ResizeObserver;
