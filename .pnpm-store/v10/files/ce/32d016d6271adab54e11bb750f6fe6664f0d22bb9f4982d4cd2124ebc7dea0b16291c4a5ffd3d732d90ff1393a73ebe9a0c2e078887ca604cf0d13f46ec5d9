'use strict';

async function click(element) {
    const pointerIn = [];
    if (!this.config.skipHover) {
        pointerIn.push({
            target: element
        });
    }
    pointerIn.push({
        keys: '[MouseLeft]',
        target: element
    });
    return this.pointer(pointerIn);
}
async function dblClick(element) {
    return this.pointer([
        {
            target: element
        },
        '[MouseLeft][MouseLeft]'
    ]);
}
async function tripleClick(element) {
    return this.pointer([
        {
            target: element
        },
        '[MouseLeft][MouseLeft][MouseLeft]'
    ]);
}

exports.click = click;
exports.dblClick = dblClick;
exports.tripleClick = tripleClick;
