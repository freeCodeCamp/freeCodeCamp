import { getObjectType } from './getObjectType.js';

function checkRendering(rendering, usage) {
    if (rendering === undefined || typeof rendering !== 'function') {
        throw new Error("The render function is not valid (received type ".concat(getObjectType(rendering), ").\n\n").concat(usage));
    }
}

export { checkRendering };
