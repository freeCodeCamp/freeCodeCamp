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
        string: { unit: "字元", verb: "擁有" },
        file: { unit: "位元組", verb: "擁有" },
        array: { unit: "項目", verb: "擁有" },
        set: { unit: "項目", verb: "擁有" },
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
        regex: "輸入",
        email: "郵件地址",
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
        datetime: "ISO 日期時間",
        date: "ISO 日期",
        time: "ISO 時間",
        duration: "ISO 期間",
        ipv4: "IPv4 位址",
        ipv6: "IPv6 位址",
        cidrv4: "IPv4 範圍",
        cidrv6: "IPv6 範圍",
        base64: "base64 編碼字串",
        base64url: "base64url 編碼字串",
        json_string: "JSON 字串",
        e164: "E.164 數值",
        jwt: "JWT",
        template_literal: "輸入",
    };
    return (issue) => {
        switch (issue.code) {
            case "invalid_type":
                return `無效的輸入值：預期為 ${issue.expected}，但收到 ${parsedType(issue.input)}`;
            case "invalid_value":
                if (issue.values.length === 1)
                    return `無效的輸入值：預期為 ${util.stringifyPrimitive(issue.values[0])}`;
                return `無效的選項：預期為以下其中之一 ${util.joinValues(issue.values, "|")}`;
            case "too_big": {
                const adj = issue.inclusive ? "<=" : "<";
                const sizing = getSizing(issue.origin);
                if (sizing)
                    return `數值過大：預期 ${issue.origin ?? "值"} 應為 ${adj}${issue.maximum.toString()} ${sizing.unit ?? "個元素"}`;
                return `數值過大：預期 ${issue.origin ?? "值"} 應為 ${adj}${issue.maximum.toString()}`;
            }
            case "too_small": {
                const adj = issue.inclusive ? ">=" : ">";
                const sizing = getSizing(issue.origin);
                if (sizing) {
                    return `數值過小：預期 ${issue.origin} 應為 ${adj}${issue.minimum.toString()} ${sizing.unit}`;
                }
                return `數值過小：預期 ${issue.origin} 應為 ${adj}${issue.minimum.toString()}`;
            }
            case "invalid_format": {
                const _issue = issue;
                if (_issue.format === "starts_with") {
                    return `無效的字串：必須以 "${_issue.prefix}" 開頭`;
                }
                if (_issue.format === "ends_with")
                    return `無效的字串：必須以 "${_issue.suffix}" 結尾`;
                if (_issue.format === "includes")
                    return `無效的字串：必須包含 "${_issue.includes}"`;
                if (_issue.format === "regex")
                    return `無效的字串：必須符合格式 ${_issue.pattern}`;
                return `無效的 ${Nouns[_issue.format] ?? issue.format}`;
            }
            case "not_multiple_of":
                return `無效的數字：必須為 ${issue.divisor} 的倍數`;
            case "unrecognized_keys":
                return `無法識別的鍵值${issue.keys.length > 1 ? "們" : ""}：${util.joinValues(issue.keys, "、")}`;
            case "invalid_key":
                return `${issue.origin} 中有無效的鍵值`;
            case "invalid_union":
                return "無效的輸入值";
            case "invalid_element":
                return `${issue.origin} 中有無效的值`;
            default:
                return `無效的輸入值`;
        }
    };
};
function default_1() {
    return {
        localeError: error(),
    };
}
