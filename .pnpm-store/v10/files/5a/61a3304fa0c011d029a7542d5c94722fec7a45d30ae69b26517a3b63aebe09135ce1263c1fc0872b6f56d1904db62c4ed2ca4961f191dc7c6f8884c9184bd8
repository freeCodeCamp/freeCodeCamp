'use strict';

require('../utils/dataTransfer/Clipboard.js');
var wait = require('../utils/misc/wait.js');
var parseKeyDef = require('./parseKeyDef.js');

async function keyboard(text) {
    const actions = parseKeyDef.parseKeyDef(this.config.keyboardMap, text);
    for(let i = 0; i < actions.length; i++){
        await wait.wait(this.config);
        await keyboardAction(this, actions[i]);
    }
}
async function keyboardAction(instance, { keyDef, releasePrevious, releaseSelf, repeat }) {
    const { system } = instance;
    // Release the key automatically if it was pressed before.
    if (system.keyboard.isKeyPressed(keyDef)) {
        await system.keyboard.keyup(instance, keyDef);
    }
    if (!releasePrevious) {
        for(let i = 1; i <= repeat; i++){
            await system.keyboard.keydown(instance, keyDef, i > 1);
            if (i < repeat) {
                await wait.wait(instance.config);
            }
        }
        // Release the key only on the last iteration on `state.repeatKey`.
        if (releaseSelf) {
            await system.keyboard.keyup(instance, keyDef);
        }
    }
}
async function releaseAllKeys(instance) {
    for (const k of instance.system.keyboard.getPressedKeys()){
        await instance.system.keyboard.keyup(instance, k);
    }
}

exports.keyboard = keyboard;
exports.releaseAllKeys = releaseAllKeys;
