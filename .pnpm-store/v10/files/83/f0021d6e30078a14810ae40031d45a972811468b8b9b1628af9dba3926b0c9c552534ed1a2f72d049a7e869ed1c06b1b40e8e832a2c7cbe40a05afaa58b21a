import { VSBuffer } from '../../../base/common/buffer.js';
import { isLittleEndian } from '../../../base/common/platform.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function reverseEndianness(arr) {
    for (let i = 0, len = arr.length; i < len; i += 4) {
        // flip bytes 0<->3 and 1<->2
        const b0 = arr[i + 0];
        const b1 = arr[i + 1];
        const b2 = arr[i + 2];
        const b3 = arr[i + 3];
        arr[i + 0] = b3;
        arr[i + 1] = b2;
        arr[i + 2] = b1;
        arr[i + 3] = b0;
    }
}
function toLittleEndianBuffer(arr) {
    const uint8Arr = new Uint8Array(arr.buffer, arr.byteOffset, arr.length * 4);
    if (!isLittleEndian()) {
        // the byte order must be changed
        reverseEndianness(uint8Arr);
    }
    return VSBuffer.wrap(uint8Arr);
}
function encodeSemanticTokensDto(semanticTokens) {
    const dest = new Uint32Array(encodeSemanticTokensDtoSize(semanticTokens));
    let offset = 0;
    dest[offset++] = semanticTokens.id;
    if (semanticTokens.type === 'full') {
        dest[offset++] = 1 /* EncodedSemanticTokensType.Full */;
        dest[offset++] = semanticTokens.data.length;
        dest.set(semanticTokens.data, offset);
        offset += semanticTokens.data.length;
    }
    else {
        dest[offset++] = 2 /* EncodedSemanticTokensType.Delta */;
        dest[offset++] = semanticTokens.deltas.length;
        for (const delta of semanticTokens.deltas) {
            dest[offset++] = delta.start;
            dest[offset++] = delta.deleteCount;
            if (delta.data) {
                dest[offset++] = delta.data.length;
                dest.set(delta.data, offset);
                offset += delta.data.length;
            }
            else {
                dest[offset++] = 0;
            }
        }
    }
    return toLittleEndianBuffer(dest);
}
function encodeSemanticTokensDtoSize(semanticTokens) {
    let result = 0;
    result += (1 // id
        + 1 // type
    );
    if (semanticTokens.type === 'full') {
        result += (1 // data length
            + semanticTokens.data.length);
    }
    else {
        result += (1 // delta count
        );
        result += (1 // start
            + 1 // deleteCount
            + 1 // data length
        ) * semanticTokens.deltas.length;
        for (const delta of semanticTokens.deltas) {
            if (delta.data) {
                result += delta.data.length;
            }
        }
    }
    return result;
}

export { encodeSemanticTokensDto };
