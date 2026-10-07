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
exports.parsedType = void 0;
exports.default = default_1;
const util = __importStar(require("../core/util.cjs"));
const parsedType = (data) => {
    const t = typeof data;
    switch (t) {
        case "number": {
            return Number.isNaN(data) ? "NaN" : "nombro";
        }
        case "object": {
            if (Array.isArray(data)) {
                return "tabelo";
            }
            if (data === null) {
                return "senvalora";
            }
            if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                return data.constructor.name;
            }
        }
    }
    return t;
};
exports.parsedType = parsedType;
const error = () => {
    const Sizable = {
        string: { unit: "karaktrojn", verb: "havi" },
        file: { unit: "bajtojn", verb: "havi" },
        array: { unit: "elementojn", verb: "havi" },
        set: { unit: "elementojn", verb: "havi" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const Nouns = {
        regex: "enigo",
        email: "retadreso",
        url: "URL",
        emoji: "emoĝio",
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
        datetime: "ISO-datotempo",
        date: "ISO-dato",
        time: "ISO-tempo",
        duration: "ISO-daŭro",
        ipv4: "IPv4-adreso",
        ipv6: "IPv6-adreso",
        cidrv4: "IPv4-rango",
        cidrv6: "IPv6-rango",
        base64: "64-ume kodita karaktraro",
        base64url: "URL-64-ume kodita karaktraro",
        json_string: "JSON-karaktraro",
        e164: "E.164-nombro",
        jwt: "JWT",
        template_literal: "enigo",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Nevalida enigo: atendiĝis ${issue.expected}, riceviĝis ${(0, exports.parsedType)(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Nevalida enigo: atendiĝis ${util.stringifyPrimitive(issue.values[0])}`;
                return `Nevalida opcio: atendiĝis unu el ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Tro granda: atendiĝis ke ${issue.origin ?? "valoro"} havu ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementojn"}`;
                return `Tro granda: atendiĝis ke ${issue.origin ?? "valoro"} havu ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Tro malgranda: atendiĝis ke ${issue.origin} havu ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Tro malgranda: atendiĝis ke ${issue.origin} estu ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Nevalida karaktraro: devas komenciĝi per "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Nevalida karaktraro: devas finiĝi per "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Nevalida karaktraro: devas inkluzivi "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Nevalida karaktraro: devas kongrui kun la modelo ${_issue.pattern}`;
                return `Nevalida ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Nevalida nombro: devas esti oblo de ${issue.divisor}`;
            case "unrecognized_keys":
                return `Nekonata${issue.keys.length > 1 ? "j" : ""} ŝlosilo${issue.keys.length > 1 ? "j" : ""}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Nevalida ŝlosilo en ${issue.origin}`;
            case "invalid_union":
                return "Nevalida enigo";
            case "invalid_element":
                return `Nevalida valoro en ${issue.origin}`;
            default:
                return `Nevalida enigo`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
