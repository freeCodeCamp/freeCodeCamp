import * as util from "../core/util.js";
const error = () => {
    const Sizable = {
        string: { unit: "caractères", verb: "avoir" },
        file: { unit: "octets", verb: "avoir" },
        array: { unit: "éléments", verb: "avoir" },
        set: { unit: "éléments", verb: "avoir" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
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
    const Nouns = {
        regex: "entrée",
        email: "adresse courriel",
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
        datetime: "date-heure ISO",
        date: "date ISO",
        time: "heure ISO",
        duration: "durée ISO",
        ipv4: "adresse IPv4",
        ipv6: "adresse IPv6",
        cidrv4: "plage IPv4",
        cidrv6: "plage IPv6",
        base64: "chaîne encodée en base64",
        base64url: "chaîne encodée en base64url",
        json_string: "chaîne JSON",
        e164: "numéro E.164",
        jwt: "JWT",
        template_literal: "entrée",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Entrée invalide : attendu ${issue.expected}, reçu ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Entrée invalide : attendu ${util.stringifyPrimitive(issue.values[0])}`;
                return `Option invalide : attendu l'une des valeurs suivantes ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "≤" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `Trop grand : attendu que ${issue.origin ?? "la valeur"} ait ${adj}${issue.maximum.toString()} ${sizing.unit}`;
                return `Trop grand : attendu que ${issue.origin ?? "la valeur"} soit ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? "≥" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Trop petit : attendu que ${issue.origin} ait ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `Trop petit : attendu que ${issue.origin} soit ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `Chaîne invalide : doit commencer par "${_issue.prefix}"`;
                }
                if (_issue.format === "ends_with")
                    return `Chaîne invalide : doit se terminer par "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Chaîne invalide : doit inclure "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Chaîne invalide : doit correspondre au motif ${_issue.pattern}`;
                return `${Nouns[_issue.format] ?? issue.format} invalide`;
            }
            case "not_multiple_of":
                return `Nombre invalide : doit être un multiple de ${issue.divisor}`;
            case "unrecognized_keys":
                return `Clé${issue.keys.length > 1 ? "s" : ""} non reconnue${issue.keys.length > 1 ? "s" : ""} : ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Clé invalide dans ${issue.origin}`;
            case "invalid_union":
                return "Entrée invalide";
            case "invalid_element":
                return `Valeur invalide dans ${issue.origin}`;
            default:
                return `Entrée invalide`;
        }
    };
};
export default function () {
    return {
        localeError: error(),
    };
}
