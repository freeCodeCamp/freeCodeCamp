import { tokTypes } from "acorn";
import { plugin } from "./plugin.cjs";

export default function (options = {}) {
  return Parser => plugin(options, Parser, Parser.acorn ? Parser.acorn.tokTypes : tokTypes);
}
