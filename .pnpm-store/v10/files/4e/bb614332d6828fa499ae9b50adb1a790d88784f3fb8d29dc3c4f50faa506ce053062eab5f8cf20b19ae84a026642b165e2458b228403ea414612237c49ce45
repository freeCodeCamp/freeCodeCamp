import '../utils/dataTransfer/Clipboard.js';
import { assertPointerEvents } from '../utils/pointer/cssPointerEvents.js';

async function hover(element) {
    return this.pointer({
        target: element
    });
}
async function unhover(element) {
    assertPointerEvents(this, this.system.pointer.getMouseTarget(this));
    return this.pointer({
        target: element.ownerDocument.body
    });
}

export { hover, unhover };
