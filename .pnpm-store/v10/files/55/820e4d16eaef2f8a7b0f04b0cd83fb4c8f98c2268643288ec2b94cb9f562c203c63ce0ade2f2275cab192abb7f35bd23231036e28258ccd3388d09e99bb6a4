'use strict';

require('../utils/dataTransfer/Clipboard.js');
var cssPointerEvents = require('../utils/pointer/cssPointerEvents.js');

async function hover(element) {
    return this.pointer({
        target: element
    });
}
async function unhover(element) {
    cssPointerEvents.assertPointerEvents(this, this.system.pointer.getMouseTarget(this));
    return this.pointer({
        target: element.ownerDocument.body
    });
}

exports.hover = hover;
exports.unhover = unhover;
