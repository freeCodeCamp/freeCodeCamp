// src/browser/reader.ts
function t(...args) {
  const firstArg = args[0];
  let key;
  let message;
  let formatArgs;
  if (typeof firstArg === "string") {
    key = firstArg;
    message = firstArg;
    args.splice(0, 1);
    formatArgs = !args || typeof args[0] !== "object" ? args : args[0];
  } else if (firstArg instanceof Array) {
    const replacements = args.slice(1);
    if (firstArg.length !== replacements.length + 1) {
      throw new Error("expected a string as the first argument to l10n.t");
    }
    let str = firstArg[0];
    for (let i = 1; i < firstArg.length; i++) {
      str += `{${i - 1}}` + firstArg[i];
    }
    return t(str, ...replacements);
  } else {
    message = firstArg.message;
    key = message;
    if (firstArg.comment && firstArg.comment.length > 0) {
      key += `/${Array.isArray(firstArg.comment) ? firstArg.comment.join("") : firstArg.comment}`;
    }
    formatArgs = firstArg.args ?? {};
  }
  {
    return format(message, formatArgs);
  }
}
var _format2Regexp = /{([^}]+)}/g;
function format(template, values) {
  if (Object.keys(values).length === 0) {
    return template;
  }
  return template.replace(_format2Regexp, (match, group) => values[group] ?? match);
}

export { t };
