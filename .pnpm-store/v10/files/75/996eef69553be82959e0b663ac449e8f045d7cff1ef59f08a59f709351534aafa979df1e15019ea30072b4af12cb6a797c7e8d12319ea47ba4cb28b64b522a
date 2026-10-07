import { equalsIgnoreCase } from './strings.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var Severity;
(function (Severity) {
    Severity[Severity["Ignore"] = 0] = "Ignore";
    Severity[Severity["Info"] = 1] = "Info";
    Severity[Severity["Warning"] = 2] = "Warning";
    Severity[Severity["Error"] = 3] = "Error";
})(Severity || (Severity = {}));
(function (Severity) {
    const _error = 'error';
    const _warning = 'warning';
    const _warn = 'warn';
    const _info = 'info';
    const _ignore = 'ignore';
    /**
     * Parses 'error', 'warning', 'warn', 'info' in call casings
     * and falls back to ignore.
     */
    function fromValue(value) {
        if (!value) {
            return Severity.Ignore;
        }
        if (equalsIgnoreCase(_error, value)) {
            return Severity.Error;
        }
        if (equalsIgnoreCase(_warning, value) || equalsIgnoreCase(_warn, value)) {
            return Severity.Warning;
        }
        if (equalsIgnoreCase(_info, value)) {
            return Severity.Info;
        }
        return Severity.Ignore;
    }
    Severity.fromValue = fromValue;
    function toString(severity) {
        switch (severity) {
            case Severity.Error: return _error;
            case Severity.Warning: return _warning;
            case Severity.Info: return _info;
            default: return _ignore;
        }
    }
    Severity.toString = toString;
})(Severity || (Severity = {}));
var Severity$1 = Severity;

export { Severity$1 as default };
