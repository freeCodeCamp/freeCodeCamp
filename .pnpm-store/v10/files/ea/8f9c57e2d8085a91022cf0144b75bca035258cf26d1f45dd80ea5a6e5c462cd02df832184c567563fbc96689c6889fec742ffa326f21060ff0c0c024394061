import { applyFontInfo } from './domFontInfo.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class CharWidthRequest {
    constructor(chr, type) {
        this.chr = chr;
        this.type = type;
        this.width = 0;
    }
    fulfill(width) {
        this.width = width;
    }
}
class DomCharWidthReader {
    constructor(bareFontInfo, requests) {
        this._bareFontInfo = bareFontInfo;
        this._requests = requests;
        this._container = null;
        this._testElements = null;
    }
    read(targetWindow) {
        // Create a test container with all these test elements
        this._createDomElements();
        // Add the container to the DOM
        targetWindow.document.body.appendChild(this._container);
        // Read character widths
        this._readFromDomElements();
        // Remove the container from the DOM
        this._container?.remove();
        this._container = null;
        this._testElements = null;
    }
    _createDomElements() {
        const container = document.createElement('div');
        container.style.position = 'absolute';
        container.style.top = '-50000px';
        container.style.width = '50000px';
        const regularDomNode = document.createElement('div');
        applyFontInfo(regularDomNode, this._bareFontInfo);
        container.appendChild(regularDomNode);
        const boldDomNode = document.createElement('div');
        applyFontInfo(boldDomNode, this._bareFontInfo);
        boldDomNode.style.fontWeight = 'bold';
        container.appendChild(boldDomNode);
        const italicDomNode = document.createElement('div');
        applyFontInfo(italicDomNode, this._bareFontInfo);
        italicDomNode.style.fontStyle = 'italic';
        container.appendChild(italicDomNode);
        const testElements = [];
        for (const request of this._requests) {
            let parent;
            if (request.type === 0 /* CharWidthRequestType.Regular */) {
                parent = regularDomNode;
            }
            if (request.type === 2 /* CharWidthRequestType.Bold */) {
                parent = boldDomNode;
            }
            if (request.type === 1 /* CharWidthRequestType.Italic */) {
                parent = italicDomNode;
            }
            parent.appendChild(document.createElement('br'));
            const testElement = document.createElement('span');
            DomCharWidthReader._render(testElement, request);
            parent.appendChild(testElement);
            testElements.push(testElement);
        }
        this._container = container;
        this._testElements = testElements;
    }
    static _render(testElement, request) {
        if (request.chr === ' ') {
            let htmlString = '\u00a0';
            // Repeat character 256 (2^8) times
            for (let i = 0; i < 8; i++) {
                htmlString += htmlString;
            }
            testElement.innerText = htmlString;
        }
        else {
            let testString = request.chr;
            // Repeat character 256 (2^8) times
            for (let i = 0; i < 8; i++) {
                testString += testString;
            }
            testElement.textContent = testString;
        }
    }
    _readFromDomElements() {
        for (let i = 0, len = this._requests.length; i < len; i++) {
            const request = this._requests[i];
            const testElement = this._testElements[i];
            request.fulfill(testElement.offsetWidth / 256);
        }
    }
}
function readCharWidths(targetWindow, bareFontInfo, requests) {
    const reader = new DomCharWidthReader(bareFontInfo, requests);
    reader.read(targetWindow);
}

export { CharWidthRequest, readCharWidths };
