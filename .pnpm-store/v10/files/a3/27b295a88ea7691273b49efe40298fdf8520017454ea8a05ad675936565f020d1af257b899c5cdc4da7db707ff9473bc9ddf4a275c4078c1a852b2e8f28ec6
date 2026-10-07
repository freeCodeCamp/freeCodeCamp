/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */


/// <reference no-default-lib="true"/>

interface ArrayBuffer {
    /**
     * If this ArrayBuffer is resizable, returns the maximum byte length given during construction; returns the byte length if not.
     *
     * [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/maxByteLength)
     */
    get maxByteLength(): number;

    /**
     * Returns true if this ArrayBuffer can be resized.
     *
     * [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable)
     */
    get resizable(): boolean;

    /**
     * Resizes the ArrayBuffer to the specified size (in bytes).
     *
     * [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resize)
     */
    resize(newByteLength?: number): void;

    /**
     * Returns a boolean indicating whether or not this buffer has been detached (transferred).
     *
     * [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/detached)
     */
    get detached(): boolean;

    /**
     * Creates a new ArrayBuffer with the same byte content as this buffer, then detaches this buffer.
     *
     * [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transfer)
     */
    transfer(newByteLength?: number): ArrayBuffer;

    /**
     * Creates a new non-resizable ArrayBuffer with the same byte content as this buffer, then detaches this buffer.
     *
     * [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transferToFixedLength)
     */
    transferToFixedLength(newByteLength?: number): ArrayBuffer;
}

interface ArrayBufferConstructor {
    new (byteLength: number, options?: { maxByteLength?: number; }): ArrayBuffer;
}
