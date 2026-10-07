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
            return Number.isNaN(data) ? "NaN" : "number";
        }
        case "object": {
            if (Array.isArray(data)) {
                return "array";
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
exports.parsedType = parsedType;
const error = () => {
    const Sizable = {
        string: { unit: "karakter", verb: "olmalı" },
        file: { unit: "bayt", verb: "olmalı" },
        array: { unit: "öğe", verb: "olmalı" },
        set: { unit: "öğe", verb: "olmalı" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const Nouns = {
        regex: "girdi",
        email: "e-posta adresi",
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
        datetime: "ISO tarih ve saat",
        date: "ISO tarih",
        time: "ISO saat",
        duration: "ISO süre",
        ipv4: "IPv4 adresi",
        ipv6: "IPv6 adresi",
        cidrv4: "IPv4 aralığı",
        cidrv6: "IPv6 aralığı",
        base64: "base64 ile şifrelenmiş metin",
        base64url: "base64url ile şifrelenmiş metin",
        json_string: "JSON dizesi",
        e164: "E.164 sayısı",
        jwt: "JWT",
        template_literal: "Şablon dizesi",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Geçersiz değer: beklenen ${issue.expected}, alınan ${(0, exports.parsedType)(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Geçersiz değer: beklenen ${util.stringifyPrimitive(issue.values[0])}`;
                return `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Çok büyük: beklenen ${issue.origin ?? "değer"} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "öğe"}`;
                return `Çok büyük: beklenen ${issue.origin ?? "değer"} ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Çok küçük: beklenen ${issue.origin} ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                return `Çok küçük: beklenen ${issue.origin} ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Geçersiz metin: "${_issue.prefix}" ile başlamalı`;
                if (_issue.format === "ends_with")
                    return `Geçersiz metin: "${_issue.suffix}" ile bitmeli`;
                if (_issue.format === "includes")
                    return `Geçersiz metin: "${_issue.includes}" içermeli`;
                if (_issue.format === "regex")
                    return `Geçersiz metin: ${_issue.pattern} desenine uymalı`;
                return `Geçersiz ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Geçersiz sayı: ${issue.divisor} ile tam bölünebilmeli`;
            case "unrecognized_keys":
                return `Tanınmayan anahtar${issue.keys.length > 1 ? "lar" : ""}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `${issue.origin} içinde geçersiz anahtar`;
            case "invalid_union":
                return "Geçersiz değer";
            case "invalid_element":
                return `${issue.origin} içinde geçersiz değer`;
            default:
                return `Geçersiz değer`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
