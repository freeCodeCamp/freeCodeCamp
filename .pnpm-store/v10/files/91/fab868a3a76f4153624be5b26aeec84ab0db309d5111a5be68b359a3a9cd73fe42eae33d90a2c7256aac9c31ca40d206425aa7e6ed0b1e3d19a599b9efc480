import type { $ZodStringFormats } from "../core/checks.js";
import type * as errors from "../core/errors.js";
import * as util from "../core/util.js";

const error: () => errors.$ZodErrorMap = () => {
  const Sizable: Record<string, { unit: string; verb: string }> = {
    string: { unit: "caracteres", verb: "tener" },
    file: { unit: "bytes", verb: "tener" },
    array: { unit: "elementos", verb: "tener" },
    set: { unit: "elementos", verb: "tener" },
  };

  function getSizing(origin: string): { unit: string; verb: string } | null {
    return Sizable[origin] ?? null;
  }

  const parsedType = (data: any): string => {
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

  const Nouns: {
    [k in $ZodStringFormats | (string & {})]?: string;
  } = {
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
        const _issue = issue as errors.$ZodStringFormatIssues;
        if (_issue.format === "starts_with") return `Cadena inválida: debe comenzar con "${_issue.prefix}"`;
        if (_issue.format === "ends_with") return `Cadena inválida: debe terminar en "${_issue.suffix}"`;
        if (_issue.format === "includes") return `Cadena inválida: debe incluir "${_issue.includes}"`;
        if (_issue.format === "regex") return `Cadena inválida: debe coincidir con el patrón ${_issue.pattern}`;
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

export default function (): { localeError: errors.$ZodErrorMap } {
  return {
    localeError: error(),
  };
}
