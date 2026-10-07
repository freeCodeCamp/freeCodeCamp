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
        string: { unit: "caratteri", verb: "avere" },
        file: { unit: "byte", verb: "avere" },
        array: { unit: "elementi", verb: "avere" },
        set: { unit: "elementi", verb: "avere" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "numero";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "vettore";
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
        email: "indirizzo email",
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
        datetime: "data e ora ISO",
        date: "data ISO",
        time: "ora ISO",
        duration: "durata ISO",
        ipv4: "indirizzo IPv4",
        ipv6: "indirizzo IPv6",
        cidrv4: "intervallo IPv4",
        cidrv6: "intervallo IPv6",
        base64: "stringa codificata in base64",
        base64url: "URL codificata in base64",
        json_string: "stringa JSON",
        e164: "numero E.164",
        jwt: "JWT",
        template_literal: "input",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Input non valido: atteso ${issue.expected}, ricevuto ${parsedType(issue.input)}`;
            // return `Input non valido: atteso ${issue.expected}, ricevuto ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Input non valido: atteso ${util.stringifyPrimitive(issue.values[0])}`;
                return `Opzione non valida: atteso uno tra ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Troppo grande: ${issue.origin ?? "valore"} deve avere ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementi"}`;
                return `Troppo grande: ${issue.origin ?? "valore"} deve essere ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Troppo piccolo: ${issue.origin} deve avere ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Troppo piccolo: ${issue.origin} deve essere ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Stringa non valida: deve iniziare con "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Stringa non valida: deve terminare con "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Stringa non valida: deve includere "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Stringa non valida: deve corrispondere al pattern ${_issue.pattern}`;
                return `Invalid ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Numero non valido: deve essere un multiplo di ${issue.divisor}`;
            case "unrecognized_keys":
                return `Chiav${issue.keys.length > 1 ? "i" : "e"} non riconosciut${issue.keys.length > 1 ? "e" : "a"}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Chiave non valida in ${issue.origin}`;
            case "invalid_union":
                return "Input non valido";
            case "invalid_element":
                return `Valore non valido in ${issue.origin}`;
            default:
                return `Input non valido`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
