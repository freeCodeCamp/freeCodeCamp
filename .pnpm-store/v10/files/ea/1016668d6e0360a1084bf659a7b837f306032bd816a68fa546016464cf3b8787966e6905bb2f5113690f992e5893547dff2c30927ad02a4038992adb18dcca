import * as util from "../core/util.js";
const error = () => {
    const Sizable = {
        string: { unit: "حرف", verb: "أن يحوي" },
        file: { unit: "بايت", verb: "أن يحوي" },
        array: { unit: "عنصر", verb: "أن يحوي" },
        set: { unit: "عنصر", verb: "أن يحوي" },
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
        regex: "مدخل",
        email: "بريد إلكتروني",
        url: "رابط",
        emoji: "إيموجي",
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
        datetime: "تاريخ ووقت بمعيار ISO",
        date: "تاريخ بمعيار ISO",
        time: "وقت بمعيار ISO",
        duration: "مدة بمعيار ISO",
        ipv4: "عنوان IPv4",
        ipv6: "عنوان IPv6",
        cidrv4: "مدى عناوين بصيغة IPv4",
        cidrv6: "مدى عناوين بصيغة IPv6",
        base64: "نَص بترميز base64-encoded",
        base64url: "نَص بترميز base64url-encoded",
        json_string: "نَص على هيئة JSON",
        e164: "رقم هاتف بمعيار E.164",
        jwt: "JWT",
        template_literal: "مدخل",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `مدخلات غير مقبولة: يفترض إدخال ${issue.expected}، ولكن تم إدخال ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `مدخلات غير مقبولة: يفترض إدخال ${util.stringifyPrimitive(issue.values[0])}`;
                return `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return ` أكبر من اللازم: يفترض أن تكون ${issue.origin ?? "القيمة"} ${adj} ${issue.maximum.toString()} ${sizing.unit ?? "عنصر"}`;
                return `أكبر من اللازم: يفترض أن تكون ${issue.origin ?? "القيمة"} ${adj} ${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `أصغر من اللازم: يفترض لـ ${issue.origin} أن يكون ${adj} ${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `أصغر من اللازم: يفترض لـ ${issue.origin} أن يكون ${adj} ${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `نَص غير مقبول: يجب أن يبدأ بـ "${issue.prefix}"`;
                if (_issue.format === "ends_with")
                    return `نَص غير مقبول: يجب أن ينتهي بـ "${_issue.suffix}"`;
                if (_issue.format === "includes")
                    return `نَص غير مقبول: يجب أن يتضمَّن "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `نَص غير مقبول: يجب أن يطابق النمط ${_issue.pattern}`;
                return `${Nouns[_issue.format] ?? issue.format} غير مقبول`;
            }
            case "not_multiple_of":
                return `رقم غير مقبول: يجب أن يكون من مضاعفات ${issue.divisor}`;
            case "unrecognized_keys":
                return `معرف${issue.keys.length > 1 ? "ات" : ""} غريب${issue.keys.length > 1 ? "ة" : ""}: ${util.joinValues(issue.keys, "، ")}`;
            case "invalid_key":
                return `معرف غير مقبول في ${issue.origin}`;
            case "invalid_union":
                return "مدخل غير مقبول";
            case "invalid_element":
                return `مدخل غير مقبول في ${issue.origin}`;
            default:
                return "مدخل غير مقبول";
        }
    };
};
export default function () {
    return {
        localeError: error(),
    };
}
