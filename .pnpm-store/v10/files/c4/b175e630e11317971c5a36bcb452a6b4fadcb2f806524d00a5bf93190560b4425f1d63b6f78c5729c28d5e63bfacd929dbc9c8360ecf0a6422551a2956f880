import { Parser } from "acorn";

interface Options {
  source?: boolean;
  defer?: boolean;
}

declare function acornImportPhases(options?: Options): (BaseParser: typeof Parser) => typeof Parser;
export = acornImportPhases;