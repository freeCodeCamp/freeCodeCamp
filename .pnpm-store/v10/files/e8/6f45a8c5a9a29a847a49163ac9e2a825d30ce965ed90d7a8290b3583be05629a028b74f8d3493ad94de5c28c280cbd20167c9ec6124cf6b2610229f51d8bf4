"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var minimist_exports = {};
__export(minimist_exports, {
  minimist: () => minimist
});
module.exports = __toCommonJS(minimist_exports);
function minimist(args, opts) {
  if (!opts)
    opts = {};
  const bools = {};
  const strings = {};
  for (const key of toArray(opts.boolean))
    bools[key] = true;
  for (const key of toArray(opts.string))
    strings[key] = true;
  const argv = { _: [] };
  function setArg(key, val) {
    if (argv[key] === void 0 || bools[key] || typeof argv[key] === "boolean")
      argv[key] = val;
    else if (Array.isArray(argv[key]))
      argv[key].push(val);
    else
      argv[key] = [argv[key], val];
  }
  let notFlags = [];
  const doubleDashIndex = args.indexOf("--");
  if (doubleDashIndex !== -1) {
    notFlags = args.slice(doubleDashIndex + 1);
    args = args.slice(0, doubleDashIndex);
  }
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    let key;
    let next;
    if (/^--.+=/.test(arg)) {
      const m = arg.match(/^--([^=]+)=([\s\S]*)$/);
      key = m[1];
      if (bools[key])
        throw new Error(`boolean option '--${key}' should not be passed with '=value', use '--${key}' or '--no-${key}' instead`);
      setArg(key, m[2]);
    } else if (/^--no-.+/.test(arg)) {
      key = arg.match(/^--no-(.+)/)[1];
      setArg(key, false);
    } else if (/^--.+/.test(arg)) {
      key = arg.match(/^--(.+)/)[1];
      next = args[i + 1];
      if (next !== void 0 && !/^(-|--)[^-]/.test(next) && !bools[key]) {
        setArg(key, next);
        i += 1;
      } else if (/^(true|false)$/.test(next)) {
        setArg(key, next === "true");
        i += 1;
      } else {
        setArg(key, strings[key] ? "" : true);
      }
    } else if (/^-[^-]+/.test(arg)) {
      const letters = arg.slice(1, -1).split("");
      let broken = false;
      for (let j = 0; j < letters.length; j++) {
        next = arg.slice(j + 2);
        if (next === "-") {
          setArg(letters[j], next);
          continue;
        }
        if (/[A-Za-z]/.test(letters[j]) && next[0] === "=") {
          setArg(letters[j], next.slice(1));
          broken = true;
          break;
        }
        if (/[A-Za-z]/.test(letters[j]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(next)) {
          setArg(letters[j], next);
          broken = true;
          break;
        }
        if (letters[j + 1] && letters[j + 1].match(/\W/)) {
          setArg(letters[j], arg.slice(j + 2));
          broken = true;
          break;
        } else {
          setArg(letters[j], strings[letters[j]] ? "" : true);
        }
      }
      key = arg.slice(-1)[0];
      if (!broken && key !== "-") {
        if (args[i + 1] && !/^(-|--)[^-]/.test(args[i + 1]) && !bools[key]) {
          setArg(key, args[i + 1]);
          i += 1;
        } else if (args[i + 1] && /^(true|false)$/.test(args[i + 1])) {
          setArg(key, args[i + 1] === "true");
          i += 1;
        } else {
          setArg(key, strings[key] ? "" : true);
        }
      }
    } else {
      argv._.push(arg);
    }
  }
  for (const k of notFlags)
    argv._.push(k);
  return argv;
}
function toArray(value) {
  if (!value)
    return [];
  return Array.isArray(value) ? value : [value];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  minimist
});
