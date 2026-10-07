"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const util = __importStar(require("../core/util.cjs"));
const error = () => {
    const Sizable = {
        string: { unit: "tegn", verb: "å ha" },
        file: { unit: "bytes", verb: "å ha" },
        array: { unit: "elementer", verb: "å inneholde" },
        set: { unit: "elementer", verb: "å inneholde" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "tall";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "liste";
                }
                if (data === null) {
                    return "null";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "input",
        email: "e-postadresse",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO dato- og klokkeslett",
        date: "ISO-dato",
        time: "ISO-klokkeslett",
        duration: "ISO-varighet",
        ipv4: "IPv4-område",
        ipv6: "IPv6-område",
        cidrv4: "IPv4-spekter",
        cidrv6: "IPv6-spekter",
        base64: "base64-enkodet streng",
        base64url: "base64url-enkodet streng",
        json_string: "JSON-streng",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "input",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Ugyldig input: forventet ${issue.expected}, fikk ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Ugyldig verdi: forventet ${util.stringifyPrimitive(issue.values[0])}`;
                return `Ugyldig valg: forventet en av ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `For stor(t): forventet ${issue.origin ?? "value"} til å ha ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementer"}`;
                return `For stor(t): forventet ${issue.origin ?? "value"} til å ha ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `For lite(n): forventet ${issue.origin} til å ha ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `For lite(n): forventet ${issue.origin} til å ha ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Ugyldig streng: må starte med "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Ugyldig streng: må ende med "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Ugyldig streng: må inneholde "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Ugyldig streng: må matche mønsteret ${_issue.pattern}`;
                return `Ugyldig ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Ugyldig tall: må være et multiplum av ${issue.divisor}`;
            case "unrecognized_keys":
                return `${issue.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Ugyldig nøkkel i ${issue.origin}`;
            case "invalid_union":
                return "Ugyldig input";
            case "invalid_element":
                return `Ugyldig verdi i ${issue.origin}`;
            default:
                return `Ugyldig input`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
