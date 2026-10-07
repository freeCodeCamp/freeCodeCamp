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
        string: { unit: "tecken", verb: "att ha" },
        file: { unit: "bytes", verb: "att ha" },
        array: { unit: "objekt", verb: "att innehålla" },
        set: { unit: "objekt", verb: "att innehålla" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "antal";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "lista";
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
        regex: "reguljärt uttryck",
        email: "e-postadress",
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
        datetime: "ISO-datum och tid",
        date: "ISO-datum",
        time: "ISO-tid",
        duration: "ISO-varaktighet",
        ipv4: "IPv4-intervall",
        ipv6: "IPv6-intervall",
        cidrv4: "IPv4-spektrum",
        cidrv6: "IPv6-spektrum",
        base64: "base64-kodad sträng",
        base64url: "base64url-kodad sträng",
        json_string: "JSON-sträng",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "mall-literal",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Ogiltig inmatning: förväntat ${issue.expected}, fick ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Ogiltig inmatning: förväntat ${util.stringifyPrimitive(issue.values[0])}`;
                return `Ogiltigt val: förväntade en av ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `För stor(t): förväntade ${issue.origin ?? "värdet"} att ha ${adj}${issue.maximum.toString()} ${sizing.unit ?? "element"}`;
                }
                return `För stor(t): förväntat ${issue.origin ?? "värdet"} att ha ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `För lite(t): förväntade ${issue.origin ?? "värdet"} att ha ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `För lite(t): förväntade ${issue.origin ?? "värdet"} att ha ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `Ogiltig sträng: måste börja med "${_issue.prefix}"`;
                }
                if (_issue.format === "ends_with")
                    return `Ogiltig sträng: måste sluta med "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Ogiltig sträng: måste innehålla "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Ogiltig sträng: måste matcha mönstret "${_issue.pattern}"`;
                return `Ogiltig(t) ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Ogiltigt tal: måste vara en multipel av ${issue.divisor}`;
            case "unrecognized_keys":
                return `${issue.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Ogiltig nyckel i ${issue.origin ?? "värdet"}`;
            case "invalid_union":
                return "Ogiltig input";
            case "invalid_element":
                return `Ogiltigt värde i ${issue.origin ?? "värdet"}`;
            default:
                return `Ogiltig input`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
