import type { $ZodStringFormats } from "../core/checks.js";
import type * as errors from "../core/errors.js";
import * as util from "../core/util.js";

const error: () => errors.$ZodErrorMap = () => {
  const Sizable: Record<string, { unit: string; verb: string }> = {
    string: { unit: "caracteres", verb: "ter" },
    file: { unit: "bytes", verb: "ter" },
    array: { unit: "itens", verb: "ter" },
    set: { unit: "itens", verb: "ter" },
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
          return "array";
        }
        if (data === null) {
          return "nulo";
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
    regex: "padrão",
    email: "endereço de e-mail",
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
    datetime: "data e hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "duração ISO",
    ipv4: "endereço IPv4",
    ipv6: "endereço IPv6",
    cidrv4: "faixa de IPv4",
    cidrv6: "faixa de IPv6",
    base64: "texto codificado em base64",
    base64url: "URL codificada em base64",
    json_string: "texto JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada",
  };

  return (issue) => {
    switch (issue.code) {
      case "invalid_type":
        return `Tipo inválido: esperado ${issue.expected}, recebido ${parsedType(issue.input)}`;
      case "invalid_value":
        if (issue.values.length === 1) return `Entrada inválida: esperado ${util.stringifyPrimitive(issue.values[0])}`;
        return `Opção inválida: esperada uma das ${util.joinValues(issue.values, "|")}`;
      case "too_big": {
        const adj = issue.inclusive ? "<=" : "<";
        const sizing = getSizing(issue.origin);
        if (sizing)
          return `Muito grande: esperado que ${issue.origin ?? "valor"} tivesse ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elementos"}`;
        return `Muito grande: esperado que ${issue.origin ?? "valor"} fosse ${adj}${issue.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue.inclusive ? ">=" : ">";
        const sizing = getSizing(issue.origin);
        if (sizing) {
          return `Muito pequeno: esperado que ${issue.origin} tivesse ${adj}${issue.minimum.toString()} ${sizing.unit}`;
        }

        return `Muito pequeno: esperado que ${issue.origin} fosse ${adj}${issue.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue as errors.$ZodStringFormatIssues;
        if (_issue.format === "starts_with") return `Texto inválido: deve começar com "${_issue.prefix}"`;
        if (_issue.format === "ends_with") return `Texto inválido: deve terminar com "${_issue.suffix}"`;
        if (_issue.format === "includes") return `Texto inválido: deve incluir "${_issue.includes}"`;
        if (_issue.format === "regex") return `Texto inválido: deve corresponder ao padrão ${_issue.pattern}`;
        return `${Nouns[_issue.format] ?? issue.format} inválido`;
      }
      case "not_multiple_of":
        return `Número inválido: deve ser múltiplo de ${issue.divisor}`;
      case "unrecognized_keys":
        return `Chave${issue.keys.length > 1 ? "s" : ""} desconhecida${issue.keys.length > 1 ? "s" : ""}: ${util.joinValues(issue.keys, ", ")}`;
      case "invalid_key":
        return `Chave inválida em ${issue.origin}`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return `Valor inválido em ${issue.origin}`;
      default:
        return `Campo inválido`;
    }
  };
};

export default function (): { localeError: errors.$ZodErrorMap } {
  return {
    localeError: error(),
  };
}
