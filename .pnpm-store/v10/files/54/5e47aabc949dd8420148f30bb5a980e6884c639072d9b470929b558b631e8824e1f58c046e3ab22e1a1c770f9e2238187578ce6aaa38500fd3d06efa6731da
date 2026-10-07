'use strict';

require('../utils/dataTransfer/Clipboard.js');
var readNextDescriptor = require('../utils/keyDef/readNextDescriptor.js');

function parseKeyDef(pointerMap, keys) {
    const defs = [];
    do {
        const { descriptor, consumedLength, releasePrevious, releaseSelf = true } = readNextDescriptor.readNextDescriptor(keys, 'pointer');
        const keyDef = pointerMap.find((p)=>p.name === descriptor);
        if (keyDef) {
            defs.push({
                keyDef,
                releasePrevious,
                releaseSelf
            });
        }
        keys = keys.slice(consumedLength);
    }while (keys)
    return defs;
}

exports.parseKeyDef = parseKeyDef;
