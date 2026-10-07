import Severity from '../../../base/common/severity.js';
import { localize } from '../../../nls.js';
import { createDecorator } from '../../instantiation/common/instantiation.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var MarkerSeverity;
(function (MarkerSeverity) {
    MarkerSeverity[MarkerSeverity["Hint"] = 1] = "Hint";
    MarkerSeverity[MarkerSeverity["Info"] = 2] = "Info";
    MarkerSeverity[MarkerSeverity["Warning"] = 4] = "Warning";
    MarkerSeverity[MarkerSeverity["Error"] = 8] = "Error";
})(MarkerSeverity || (MarkerSeverity = {}));
(function (MarkerSeverity) {
    function compare(a, b) {
        return b - a;
    }
    MarkerSeverity.compare = compare;
    const _displayStrings = Object.create(null);
    _displayStrings[MarkerSeverity.Error] = localize(1732, "Error");
    _displayStrings[MarkerSeverity.Warning] = localize(1733, "Warning");
    _displayStrings[MarkerSeverity.Info] = localize(1734, "Info");
    function toString(a) {
        return _displayStrings[a] || '';
    }
    MarkerSeverity.toString = toString;
    const _displayStringsPlural = Object.create(null);
    _displayStringsPlural[MarkerSeverity.Error] = localize(1735, "Errors");
    _displayStringsPlural[MarkerSeverity.Warning] = localize(1736, "Warnings");
    _displayStringsPlural[MarkerSeverity.Info] = localize(1737, "Infos");
    function toStringPlural(a) {
        return _displayStringsPlural[a] || '';
    }
    MarkerSeverity.toStringPlural = toStringPlural;
    function fromSeverity(severity) {
        switch (severity) {
            case Severity.Error: return MarkerSeverity.Error;
            case Severity.Warning: return MarkerSeverity.Warning;
            case Severity.Info: return MarkerSeverity.Info;
            case Severity.Ignore: return MarkerSeverity.Hint;
        }
    }
    MarkerSeverity.fromSeverity = fromSeverity;
    function toSeverity(severity) {
        switch (severity) {
            case MarkerSeverity.Error: return Severity.Error;
            case MarkerSeverity.Warning: return Severity.Warning;
            case MarkerSeverity.Info: return Severity.Info;
            case MarkerSeverity.Hint: return Severity.Ignore;
        }
    }
    MarkerSeverity.toSeverity = toSeverity;
})(MarkerSeverity || (MarkerSeverity = {}));
var IMarkerData;
(function (IMarkerData) {
    const emptyString = '';
    function makeKey(markerData) {
        return makeKeyOptionalMessage(markerData, true);
    }
    IMarkerData.makeKey = makeKey;
    function makeKeyOptionalMessage(markerData, useMessage) {
        const result = [emptyString];
        if (markerData.source) {
            result.push(markerData.source.replace('¦', '\\¦'));
        }
        else {
            result.push(emptyString);
        }
        if (markerData.code) {
            if (typeof markerData.code === 'string') {
                result.push(markerData.code.replace('¦', '\\¦'));
            }
            else {
                result.push(markerData.code.value.replace('¦', '\\¦'));
            }
        }
        else {
            result.push(emptyString);
        }
        if (markerData.severity !== undefined && markerData.severity !== null) {
            result.push(MarkerSeverity.toString(markerData.severity));
        }
        else {
            result.push(emptyString);
        }
        // Modifed to not include the message as part of the marker key to work around
        // https://github.com/microsoft/vscode/issues/77475
        if (markerData.message && useMessage) {
            result.push(markerData.message.replace('¦', '\\¦'));
        }
        else {
            result.push(emptyString);
        }
        if (markerData.startLineNumber !== undefined && markerData.startLineNumber !== null) {
            result.push(markerData.startLineNumber.toString());
        }
        else {
            result.push(emptyString);
        }
        if (markerData.startColumn !== undefined && markerData.startColumn !== null) {
            result.push(markerData.startColumn.toString());
        }
        else {
            result.push(emptyString);
        }
        if (markerData.endLineNumber !== undefined && markerData.endLineNumber !== null) {
            result.push(markerData.endLineNumber.toString());
        }
        else {
            result.push(emptyString);
        }
        if (markerData.endColumn !== undefined && markerData.endColumn !== null) {
            result.push(markerData.endColumn.toString());
        }
        else {
            result.push(emptyString);
        }
        result.push(emptyString);
        return result.join('¦');
    }
    IMarkerData.makeKeyOptionalMessage = makeKeyOptionalMessage;
})(IMarkerData || (IMarkerData = {}));
const IMarkerService = createDecorator('markerService');

export { IMarkerData, IMarkerService, MarkerSeverity };
