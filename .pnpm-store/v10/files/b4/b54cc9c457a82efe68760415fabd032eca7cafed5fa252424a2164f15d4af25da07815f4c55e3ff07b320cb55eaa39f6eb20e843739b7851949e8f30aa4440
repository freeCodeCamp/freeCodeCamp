import * as util from "../core/util.js";
const error = () => {
    const Sizable = {
        string: { unit: "எழுத்துக்கள்", verb: "கொண்டிருக்க வேண்டும்" },
        file: { unit: "பைட்டுகள்", verb: "கொண்டிருக்க வேண்டும்" },
        array: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
        set: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" },
    };
    function getSizing(origin) {
        return Sizable[origin] ?? null;
    }
    const parsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "number": {
                return Number.isNaN(data) ? "எண் அல்லாதது" : "எண்";
            }
            case "object": {
                if (Array.isArray(data)) {
                    return "அணி";
                }
                if (data === null) {
                    return "வெறுமை";
                }
                if (Object.getPrototypeOf(data) !== Object.prototype && data.constructor) {
                    return data.constructor.name;
                }
            }
        }
        return t;
    };
    const Nouns = {
        regex: "உள்ளீடு",
        email: "மின்னஞ்சல் முகவரி",
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
        datetime: "ISO தேதி நேரம்",
        date: "ISO தேதி",
        time: "ISO நேரம்",
        duration: "ISO கால அளவு",
        ipv4: "IPv4 முகவரி",
        ipv6: "IPv6 முகவரி",
        cidrv4: "IPv4 வரம்பு",
        cidrv6: "IPv6 வரம்பு",
        base64: "base64-encoded சரம்",
        base64url: "base64url-encoded சரம்",
        json_string: "JSON சரம்",
        e164: "E.164 எண்",
        jwt: "JWT",
        template_literal: "input",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${issue.expected}, பெறப்பட்டது ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${util.stringifyPrimitive(issue.values[0])}`;
                return `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${util.joinValues(issue.values, "|")} இல் ஒன்று`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${issue.origin ?? "மதிப்பு"} ${adj}${issue.maximum.toString()} ${sizing.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்`;
                }
                return `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${issue.origin ?? "மதிப்பு"} ${adj}${issue.maximum.toString()} ஆக இருக்க வேண்டும்`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${issue.origin} ${adj}${issue.minimum.toString()} ${sizing.unit} ஆக இருக்க வேண்டும்`; //
                }
                return `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${issue.origin} ${adj}${issue.minimum.toString()} ஆக இருக்க வேண்டும்`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with")
                    return `தவறான சரம்: "${_issue.prefix}" இல் தொடங்க வேண்டும்`;
                if (_issue.format === "ends_with")
                    return `தவறான சரம்: "${_issue.suffix}" இல் முடிவடைய வேண்டும்`;
                if (_issue.format === "includes")
                    return `தவறான சரம்: "${_issue.includes}" ஐ உள்ளடக்க வேண்டும்`;
                if (_issue.format === "regex")
                    return `தவறான சரம்: ${_issue.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`;
                return `தவறான ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `தவறான எண்: ${issue.divisor} இன் பலமாக இருக்க வேண்டும்`;
            case "unrecognized_keys":
                return `அடையாளம் தெரியாத விசை${issue.keys.length > 1 ? "கள்" : ""}: ${util.joinValues(issue.keys, ", ")}`;
            case "invalid_key":
                return `${issue.origin} இல் தவறான விசை`;
            case "invalid_union":
                return "தவறான உள்ளீடு";
            case "invalid_element":
                return `${issue.origin} இல் தவறான மதிப்பு`;
            default:
                return `தவறான உள்ளீடு`;
        }
    };
};
export default function () {
    return {
        localeError: error(),
    };
}
