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
        string: { unit: "caracteres", verb: "tener" },
        file: { unit: "bytes", verb: "tener" },
        array: { unit: "elementos", verb: "tener" },
        set: { unit: "elementos", verb: "tener" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "número";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "arreglo";
                }
                if (data === null) {
                    return "nulo";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "entrada",
        email: "dirección de correo electrónico",
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
        datetime: "fecha y hora ISO",
        date: "fecha ISO",
        time: "hora ISO",
        duration: "duración ISO",
        ipv4: "dirección IPv4",
        ipv6: "dirección IPv6",
        cidrv4: "rango IPv4",
        cidrv6: "rango IPv6",
        base64: "cadena codificada en base64",
        base64url: "URL codificada en base64",
        json_string: "cadena JSON",
        e164: "número E.164",
        jwt: "JWT",
        template_literal: "entrada",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Entrada inválida: se esperaba ${issue.expected}, recibido ${parsedType(issue.input)}`;
            // return `Entrada inválida: se esperaba ${issue.expected}, recibido ${util.getParsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Entrada inválida: se esperaba ${util.stringifyPrimitive(issue.values[0])}`;
                return `Opción inválida: se esperaba una de ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Demasiado grande: se esperaba que ${issue.origin ?? "valor"} tuviera ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementos"}`;
                return `Demasiado grande: se esperaba que ${issue.origin ?? "valor"} fuera ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Demasiado pequeño: se esperaba que ${issue.origin} tuviera ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Demasiado pequeño: se esperaba que ${issue.origin} fuera ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Cadena inválida: debe comenzar con "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Cadena inválida: debe terminar en "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Cadena inválida: debe incluir "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Cadena inválida: debe coincidir con el patrón ${_issue.pattern}`;
                return `Inválido ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Número inválido: debe ser múltiplo de ${issue.divisor}`;
            case "unrecognized_keys":
                return `Llave${issue.keys.length > 1 ? "s" : ""} desconocida${issue.keys.length > 1 ? "s" : ""}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Llave inválida en ${issue.origin}`;
            case "invalid_union":
                return "Entrada inválida";
            case "invalid_element":
                return `Valor inválido en ${issue.origin}`;
            default:
                return `Entrada inválida`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
