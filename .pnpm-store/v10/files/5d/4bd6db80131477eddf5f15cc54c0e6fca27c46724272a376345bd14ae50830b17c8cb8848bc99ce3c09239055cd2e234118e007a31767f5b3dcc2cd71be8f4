import * as util from "../core/util.js";
const error = () => {
    const Sizable = {
        string: { unit: "znaků", verb: "mít" },
        file: { unit: "bajtů", verb: "mít" },
        array: { unit: "prvků", verb: "mít" },
        set: { unit: "prvků", verb: "mít" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "číslo";
            }
            case "string": {
                return "řetězec";
            }
            case "boolean": {
                return "boolean";
            }
            case "bigint": {
                return "bigint";
            }
            case "function": {
                return "funkce";
            }
            case "symbol": {
                return "symbol";
            }
            case "undefined": {
                return "undefined";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "pole";
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
        regex: "regulární výraz",
        email: "e-mailová adresa",
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
        datetime: "datum a čas ve formátu ISO",
        date: "datum ve formátu ISO",
        time: "čas ve formátu ISO",
        duration: "doba trvání ISO",
        ipv4: "IPv4 adresa",
        ipv6: "IPv6 adresa",
        cidrv4: "rozsah IPv4",
        cidrv6: "rozsah IPv6",
        base64: "řetězec zakódovaný ve formátu base64",
        base64url: "řetězec zakódovaný ve formátu base64url",
        json_string: "řetězec ve formátu JSON",
        e164: "číslo E.164",
        jwt: "JWT",
        template_literal: "vstup",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `Neplatný vstup: očekáváno ${issue.expected}, obdrženo ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `Neplatný vstup: očekáváno ${util.stringifyPrimitive(issue.values[0])}`;
                return `Neplatná možnost: očekávána jedna z hodnot ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Hodnota je příliš velká: ${issue.origin ?? "hodnota"} musí mít ${adj}${issue.maximum.toString()} ${sizing.unit ?? "prvků"}`;
                }
                return `Hodnota je příliš velká: ${issue.origin ?? "hodnota"} musí být ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `Hodnota je příliš malá: ${issue.origin ?? "hodnota"} musí mít ${adj}${issue.minimum.toString()} ${sizing.unit ?? "prvků"}`;
                }
                return `Hodnota je příliš malá: ${issue.origin ?? "hodnota"} musí být ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `Neplatný řetězec: musí začínat na "${_issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `Neplatný řetězec: musí končit na "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `Neplatný řetězec: musí obsahovat "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `Neplatný řetězec: musí odpovídat vzoru ${_issue.pattern}`;
                return `Neplatný formát ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `Neplatné číslo: musí být násobkem ${issue.divisor}`;
            case "unrecognized_keys":
                return `Neznámé klíče: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `Neplatný klíč v ${issue.origin}`;
            case "invalid_union":
                return "Neplatný vstup";
            case "invalid_element":
                return `Neplatná hodnota v ${issue.origin}`;
            default:
                return `Neplatný vstup`;
        }
    };
};
export default function () {
    return {
        localeError: error(),
    };
}
