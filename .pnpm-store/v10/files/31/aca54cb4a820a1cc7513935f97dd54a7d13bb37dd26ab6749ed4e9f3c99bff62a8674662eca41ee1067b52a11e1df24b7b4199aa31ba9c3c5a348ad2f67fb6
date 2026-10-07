import * as util from "../core/util.js";
const error = () => {
    const Sizable = {
        string: { unit: "کاراکتر", verb: "داشته باشد" },
        file: { unit: "بایت", verb: "داشته باشد" },
        array: { unit: "آیتم", verb: "داشته باشد" },
        set: { unit: "آیتم", verb: "داشته باشد" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "NaN" : "عدد";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "آرایه";
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
        regex: "ورودی",
        email: "آدرس ایمیل",
        url: "URL",
        emoji: "ایموجی",
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
        datetime: "تاریخ و زمان ایزو",
        date: "تاریخ ایزو",
        time: "زمان ایزو",
        duration: "مدت زمان ایزو",
        ipv4: "IPv4 آدرس",
        ipv6: "IPv6 آدرس",
        cidrv4: "IPv4 دامنه",
        cidrv6: "IPv6 دامنه",
        base64: "base64-encoded رشته",
        base64url: "base64url-encoded رشته",
        json_string: "JSON رشته",
        e164: "E.164 عدد",
        jwt: "JWT",
        template_literal: "ورودی",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `ورودی نامعتبر: می‌بایست ${issue.expected} می‌بود، ${parsedType(issue.input)} دریافت شد`;
            case "invalid_value":
                if (issue.values.length === 1) {
                    return `ورودی نامعتبر: می‌بایست ${util.stringifyPrimitive(issue.values[0])} می‌بود`;
                }
                return `گزینه نامعتبر: می‌بایست یکی از ${util.joinValues(issue.values, "|")} می‌بود`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `خیلی بزرگ: ${issue.origin ?? "مقدار"} باید ${adj}${issue.maximum.toString()} ${sizing.unit ?? "عنصر"} باشد`;
                }
                return `خیلی بزرگ: ${issue.origin ?? "مقدار"} باید ${adj}${issue.maximum.toString()} باشد`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `خیلی کوچک: ${issue.origin} باید ${adj}${issue.minimum.toString()} ${sizing.unit} باشد`;
                }
                return `خیلی کوچک: ${issue.origin} باید ${adj}${issue.minimum.toString()} باشد`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `رشته نامعتبر: باید با "${_issue.prefix}" شروع شود`;
                }
                if (_issue.format === "ends_with") {
                    return `رشته نامعتبر: باید با "${_issue.suffix}" تمام شود`;
                }
                if (_issue.format === "includes") {
                    return `رشته نامعتبر: باید شامل "${_issue.includes}" باشد`;
                }
                if (_issue.format === "regex") {
                    return `رشته نامعتبر: باید با الگوی ${_issue.pattern} مطابقت داشته باشد`;
                }
                return `${Nouns[_issue.format] ?? issue.format} نامعتبر`;
            }
            case "not_multiple_of":
                return `عدد نامعتبر: باید مضرب ${issue.divisor} باشد`;
            case "unrecognized_keys":
                return `کلید${issue.keys.length > 1 ? "های" : ""} ناشناس: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `کلید ناشناس در ${issue.origin}`;
            case "invalid_union":
                return `ورودی نامعتبر`;
            case "invalid_element":
                return `مقدار نامعتبر در ${issue.origin}`;
            default:
                return `ورودی نامعتبر`;
        }
    };
};
export default function () {
    return {
        localeError: error(),
    };
}
