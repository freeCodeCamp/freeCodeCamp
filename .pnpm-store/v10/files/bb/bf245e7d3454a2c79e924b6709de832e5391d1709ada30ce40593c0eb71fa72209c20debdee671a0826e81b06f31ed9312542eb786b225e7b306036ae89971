import { getWindow } from '../misc/getWindow.js';
import { readBlobText } from './Blob.js';
import { createDataTransfer, getBlobFromDataTransferItem } from './DataTransfer.js';

function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
// MDN lists string|Blob|Promise<Blob|string> as possible types in ClipboardItemData
// lib.dom.d.ts lists only Promise<Blob|string>
// https://developer.mozilla.org/en-US/docs/Web/API/ClipboardItem/ClipboardItem#syntax
function createClipboardItem(window, ...blobs) {
    const dataMap = Object.fromEntries(blobs.map((b)=>[
            typeof b === 'string' ? 'text/plain' : b.type,
            Promise.resolve(b)
        ]));
    // use real ClipboardItem if available
    /* istanbul ignore if */ if (typeof window.ClipboardItem !== 'undefined') {
        return new window.ClipboardItem(dataMap);
    }
    return new class ClipboardItem {
        get types() {
            return Array.from(Object.keys(this.data));
        }
        async getType(type) {
            const value = await this.data[type];
            if (!value) {
                throw new Error(`${type} is not one of the available MIME types on this item.`);
            }
            return value instanceof window.Blob ? value : new window.Blob([
                value
            ], {
                type
            });
        }
        constructor(d){
            _define_property(this, "data", void 0);
            this.data = d;
        }
    }(dataMap);
}
const ClipboardStubControl = Symbol('Manage ClipboardSub');
function createClipboardStub(window, control) {
    return Object.assign(new class Clipboard extends window.EventTarget {
        async read() {
            return Array.from(this.items);
        }
        async readText() {
            let text = '';
            for (const item of this.items){
                const type = item.types.includes('text/plain') ? 'text/plain' : item.types.find((t)=>t.startsWith('text/'));
                if (type) {
                    text += await item.getType(type).then((b)=>readBlobText(b, window.FileReader));
                }
            }
            return text;
        }
        async write(data) {
            this.items = data;
        }
        async writeText(text) {
            this.items = [
                createClipboardItem(window, text)
            ];
        }
        constructor(...args){
            super(...args), _define_property(this, "items", []);
        }
    }(), {
        [ClipboardStubControl]: control
    });
}
function isClipboardStub(clipboard) {
    return !!(clipboard === null || clipboard === void 0 ? void 0 : clipboard[ClipboardStubControl]);
}
function attachClipboardStubToView(window) {
    if (isClipboardStub(window.navigator.clipboard)) {
        return window.navigator.clipboard[ClipboardStubControl];
    }
    const realClipboard = Object.getOwnPropertyDescriptor(window.navigator, 'clipboard');
    let stub;
    const control = {
        resetClipboardStub: ()=>{
            stub = createClipboardStub(window, control);
        },
        detachClipboardStub: ()=>{
            /* istanbul ignore if */ if (realClipboard) {
                Object.defineProperty(window.navigator, 'clipboard', realClipboard);
            } else {
                Object.defineProperty(window.navigator, 'clipboard', {
                    value: undefined,
                    configurable: true
                });
            }
        }
    };
    stub = createClipboardStub(window, control);
    Object.defineProperty(window.navigator, 'clipboard', {
        get: ()=>stub,
        configurable: true
    });
    return stub[ClipboardStubControl];
}
function resetClipboardStubOnView(window) {
    if (isClipboardStub(window.navigator.clipboard)) {
        window.navigator.clipboard[ClipboardStubControl].resetClipboardStub();
    }
}
function detachClipboardStubFromView(window) {
    if (isClipboardStub(window.navigator.clipboard)) {
        window.navigator.clipboard[ClipboardStubControl].detachClipboardStub();
    }
}
async function readDataTransferFromClipboard(document) {
    const window = document.defaultView;
    const clipboard = window === null || window === void 0 ? void 0 : window.navigator.clipboard;
    const items = clipboard && await clipboard.read();
    if (!items) {
        throw new Error('The Clipboard API is unavailable.');
    }
    const dt = createDataTransfer(window);
    for (const item of items){
        for (const type of item.types){
            dt.setData(type, await item.getType(type).then((b)=>readBlobText(b, window.FileReader)));
        }
    }
    return dt;
}
async function writeDataTransferToClipboard(document, clipboardData) {
    const window = getWindow(document);
    const clipboard = window.navigator.clipboard;
    const items = [];
    for(let i = 0; i < clipboardData.items.length; i++){
        const dtItem = clipboardData.items[i];
        const blob = await getBlobFromDataTransferItem(window, dtItem);
        items.push(createClipboardItem(window, blob));
    }
    const written = clipboard && await clipboard.write(items).then(()=>true, // Can happen with other implementations that e.g. require permissions
    /* istanbul ignore next */ ()=>false);
    if (!written) {
        throw new Error('The Clipboard API is unavailable.');
    }
}
const g = globalThis;
/* istanbul ignore else */ if (typeof g.afterEach === 'function') {
    g.afterEach(()=>{
        if (typeof globalThis.window !== 'undefined') {
            resetClipboardStubOnView(globalThis.window);
        }
    });
}
/* istanbul ignore else */ if (typeof g.afterAll === 'function') {
    g.afterAll(()=>{
        if (typeof globalThis.window !== 'undefined') {
            detachClipboardStubFromView(globalThis.window);
        }
    });
}

export { attachClipboardStubToView, createClipboardItem, detachClipboardStubFromView, readDataTransferFromClipboard, resetClipboardStubOnView, writeDataTransferToClipboard };
