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
        string: { unit: "znaków", verb: "mieć" },
        file: { unit: "bajtów", verb: "mieć" },
        array: { unit: "elementów", verb: "mieć" },
        set: { unit: "elementów", verb: "mieć" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "liczba";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "tablica";
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
        regex: "wyrażenie",
        email: "adres email",
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
        datetime: "data i godzina w formacie ISO",
        date: "data w formacie ISO",
        time: "godzina w formacie ISO",
        duration: "czas trwania ISO",
        ipv4: "adres IPv4",
        ipv6: "adres IPv6",
        cidrv4: "zakres IPv4",
        cidrv6: "zakres IPv6",
        base64: "ciąg znaków zakodowany w formacie base64",
        base64url: "ciąg znaków zakodowany w formacie base64url",
        json_string: "ciąg znaków w formacie JSON",
        e164: "liczba E.164",
        jwt: "JWT",
        template_literal: "wejście",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Nieprawidłowe dane wejściowe: oczekiwano ${issue.expected}, otrzymano ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Nieprawidłowe dane wejściowe: oczekiwano ${util.stringifyPrimitive(issue.values[0])}`;
                return `Nieprawidłowa opcja: oczekiwano jednej z wartości ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Za duża wartość: oczekiwano, że ${issue.origin ?? "wartość"} będzie mieć ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementów"}`;
                }
                return `Zbyt duż(y/a/e): oczekiwano, że ${issue.origin ?? "wartość"} będzie wynosić ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Za mała wartość: oczekiwano, że ${issue.origin ?? "wartość"} będzie mieć ${adj}${issue.minimum.toString()} ${sizing.unit ?? "elementów"}`;
                }
                return `Zbyt mał(y/a/e): oczekiwano, że ${issue.origin ?? "wartość"} będzie wynosić ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Nieprawidłowy ciąg znaków: musi zaczynać się od "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Nieprawidłowy ciąg znaków: musi kończyć się na "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Nieprawidłowy ciąg znaków: musi zawierać "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${_issue.pattern}`;
                return `Nieprawidłow(y/a/e) ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Nieprawidłowa liczba: musi być wielokrotnością ${issue.divisor}`;
            case "unrecognized_keys":
                return `Nierozpoznane klucze${issue.keys.length > 1 ? "s" : ""}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Nieprawidłowy klucz w ${issue.origin}`;
            case "invalid_union":
                return "Nieprawidłowe dane wejściowe";
            case "invalid_element":
                return `Nieprawidłowa wartość w ${issue.origin}`;
            default:
                return `Nieprawidłowe dane wejściowe`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
