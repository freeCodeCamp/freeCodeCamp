import type { $ZodStringFormats } from "../core/checks.js";
import type * as errors from "../core/errors.js";
import * as util from "../core/util.js";

function getBelarusianPlural(count: number, one: string, few: string, many: string): string {
  const absCount = Math.abs(count);
  const lastDigit = absCount % 10;
  const lastTwoDigits = absCount % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return many;
  }

  if (lastDigit === 1) {
    return one;
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return few;
  }

  return many;
}

interface BelarusianSizable {
  unit: {
    one: string;
    few: string;
    many: string;
  };
  verb: string;
}
const error: () => errors.$ZodErrorMap = () => {
  const Sizable: Record<string, BelarusianSizable> = {
    string: {
      unit: {
        one: "сімвал",
        few: "сімвалы",
        many: "сімвалаў",
      },
      verb: "мець",
    },
    array: {
      unit: {
        one: "элемент",
        few: "элементы",
        many: "элементаў",
      },
      verb: "мець",
    },
    set: {
      unit: {
        one: "элемент",
        few: "элементы",
        many: "элементаў",
      },
      verb: "мець",
    },
    file: {
      unit: {
        one: "байт",
        few: "байты",
        many: "байтаў",
      },
      verb: "мець",
    },
  };

  function getSizing(origin: string): BelarusianSizable | null {
    return Sizable[origin] ?? null;
  }

  const parsedType = (data: any): string => {
    const t = typeof data;

    switch (t) {
      case "number": {
        return Number.isNaN(data) ? "NaN" : "лік";
      }
      case "object": {
        if (Array.isArray(data)) {
          return "масіў";
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

  const Nouns: {
    [k in $ZodStringFormats | (string & {})]?: string;
  } = {
    regex: "увод",
    email: "email адрас",
    url: "URL",
    emoji: "эмодзі",
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
    datetime: "ISO дата і час",
    date: "ISO дата",
    time: "ISO час",
    duration: "ISO працягласць",
    ipv4: "IPv4 адрас",
    ipv6: "IPv6 адрас",
    cidrv4: "IPv4 дыяпазон",
    cidrv6: "IPv6 дыяпазон",
    base64: "радок у фармаце base64",
    base64url: "радок у фармаце base64url",
    json_string: "JSON радок",
    e164: "нумар E.164",
    jwt: "JWT",
    template_literal: "увод",
  };

  return (issue) => {
    switch (issue.code) {
      case "invalid_type":
        return `Няправільны ўвод: чакаўся ${issue.expected}, атрымана ${parsedType(issue.input)}`;
      case "invalid_value":
        if (issue.values.length === 1) return `Няправільны ўвод: чакалася ${util.stringifyPrimitive(issue.values[0])}`;
        return `Няправільны варыянт: чакаўся адзін з ${util.joinValues(issue.values, "|")}`;
      case "too_big": {
        const adj = issue.inclusive ? "<=" : "<";
        const sizing = getSizing(issue.origin);
        if (sizing) {
          const maxValue = Number(issue.maximum);
          const unit = getBelarusianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `Занадта вялікі: чакалася, што ${issue.origin ?? "значэнне"} павінна ${sizing.verb} ${adj}${issue.maximum.toString()} ${unit}`;
        }
        return `Занадта вялікі: чакалася, што ${issue.origin ?? "значэнне"} павінна быць ${adj}${issue.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue.inclusive ? ">=" : ">";
        const sizing = getSizing(issue.origin);
        if (sizing) {
          const minValue = Number(issue.minimum);
          const unit = getBelarusianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
          return `Занадта малы: чакалася, што ${issue.origin} павінна ${sizing.verb} ${adj}${issue.minimum.toString()} ${unit}`;
        }
        return `Занадта малы: чакалася, што ${issue.origin} павінна быць ${adj}${issue.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue as errors.$ZodStringFormatIssues;
        if (_issue.format === "starts_with") return `Няправільны радок: павінен пачынацца з "${_issue.prefix}"`;
        if (_issue.format === "ends_with") return `Няправільны радок: павінен заканчвацца на "${_issue.suffix}"`;
        if (_issue.format === "includes") return `Няправільны радок: павінен змяшчаць "${_issue.includes}"`;
        if (_issue.format === "regex") return `Няправільны радок: павінен адпавядаць шаблону ${_issue.pattern}`;
        return `Няправільны ${Nouns[_issue.format] ?? issue.format}`;
      }
      case "not_multiple_of":
        return `Няправільны лік: павінен быць кратным ${issue.divisor}`;
      case "unrecognized_keys":
        return `Нераспазнаны ${issue.keys.length > 1 ? "ключы" : "ключ"}: ${util.joinValues(issue.keys, ", ")}`;
      case "invalid_key":
        return `Няправільны ключ у ${issue.origin}`;
      case "invalid_union":
        return "Няправільны ўвод";
      case "invalid_element":
        return `Няправільнае значэнне ў ${issue.origin}`;
      default:
        return `Няправільны ўвод`;
    }
  };
};

export default function (): { localeError: errors.$ZodErrorMap } {
  return {
    localeError: error(),
  };
}
