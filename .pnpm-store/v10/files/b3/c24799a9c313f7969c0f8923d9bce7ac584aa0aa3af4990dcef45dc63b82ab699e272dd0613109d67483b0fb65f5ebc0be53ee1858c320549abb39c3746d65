import ResizeObserverPolyfill from './ResizeObserver.js';
import global from './shims/global.js';

export default (() => {
    // Export existing implementation if available.
    if (typeof global.ResizeObserver !== 'undefined') {
        return global.ResizeObserver;
    }

    return ResizeObserverPolyfill;
})();
