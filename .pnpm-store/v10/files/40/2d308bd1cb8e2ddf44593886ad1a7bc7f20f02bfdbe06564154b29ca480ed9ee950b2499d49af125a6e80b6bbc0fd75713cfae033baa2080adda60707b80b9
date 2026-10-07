import { getConfig } from '@testing-library/dom';

/**
 * Wrap an internal Promise
 */ function wrapAsync(implementation) {
    return getConfig().asyncWrapper(implementation);
}

export { wrapAsync };
