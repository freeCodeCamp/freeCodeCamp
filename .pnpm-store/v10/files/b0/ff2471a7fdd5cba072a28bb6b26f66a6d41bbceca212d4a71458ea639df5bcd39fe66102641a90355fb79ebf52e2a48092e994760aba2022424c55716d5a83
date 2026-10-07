import { SelectorType, AttributeAction } from "./types";
const attribValChars = ["\\", '"'];
const pseudoValChars = [...attribValChars, "(", ")"];
const charsToEscapeInAttributeValue = new Set(attribValChars.map((c) => c.charCodeAt(0)));
const charsToEscapeInPseudoValue = new Set(pseudoValChars.map((c) => c.charCodeAt(0)));
const charsToEscapeInName = new Set([
    ...pseudoValChars,
    "~",
    "^",
    "$",
    "*",
    "+",
    "!",
    "|",
    ":",
    "[",
    "]",
    " ",
    ".",
].map((c) => c.charCodeAt(0)));
/**
 * Turns `selector` back into a string.
 *
 * @param selector Selector to stringify.
 */
export function stringify(selector) {
    return selector
        .map((token) => token.map(stringifyToken).join(""))
        .join(", ");
}
function stringifyToken(token, index, arr) {
    switch (token.type) {
        // Simple types
        case SelectorType.Child:
            return index === 0 ? "> " : " > ";
        case SelectorType.Parent:
            return index === 0 ? "< " : " < ";
        case SelectorType.Sibling:
            return index === 0 ? "~ " : " ~ ";
        case SelectorType.Adjacent:
            return index === 0 ? "+ " : " + ";
        case SelectorType.Descendant:
            return " ";
        case SelectorType.ColumnCombinator:
            return index === 0 ? "|| " : " || ";
        case SelectorType.Universal:
            // Return an empty string if the selector isn't needed.
            return token.namespace === "*" &&
                index + 1 < arr.length &&
                "name" in arr[index + 1]
                ? ""
                : `${getNamespace(token.namespace)}*`;
        case SelectorType.Tag:
            return getNamespacedName(token);
        case SelectorType.PseudoElement:
            return `::${escapeName(token.name, charsToEscapeInName)}${token.data === null
                ? ""
                : `(${escapeName(token.data, charsToEscapeInPseudoValue)})`}`;
        case SelectorType.Pseudo:
            return `:${escapeName(token.name, charsToEscapeInName)}${token.data === null
                ? ""
                : `(${typeof token.data === "string"
                    ? escapeName(token.data, charsToEscapeInPseudoValue)
                    : stringify(token.data)})`}`;
        case SelectorType.Attribute: {
            if (token.name === "id" &&
                token.action === AttributeAction.Equals &&
                token.ignoreCase === "quirks" &&
                !token.namespace) {
                return `#${escapeName(token.value, charsToEscapeInName)}`;
            }
            if (token.name === "class" &&
                token.action === AttributeAction.Element &&
                token.ignoreCase === "quirks" &&
                !token.namespace) {
                return `.${escapeName(token.value, charsToEscapeInName)}`;
            }
            const name = getNamespacedName(token);
            if (token.action === AttributeAction.Exists) {
                return `[${name}]`;
            }
            return `[${name}${getActionValue(token.action)}="${escapeName(token.value, charsToEscapeInAttributeValue)}"${token.ignoreCase === null ? "" : token.ignoreCase ? " i" : " s"}]`;
        }
    }
}
function getActionValue(action) {
    switch (action) {
        case AttributeAction.Equals:
            return "";
        case AttributeAction.Element:
            return "~";
        case AttributeAction.Start:
            return "^";
        case AttributeAction.End:
            return "$";
        case AttributeAction.Any:
            return "*";
        case AttributeAction.Not:
            return "!";
        case AttributeAction.Hyphen:
            return "|";
        case AttributeAction.Exists:
            throw new Error("Shouldn't be here");
    }
}
function getNamespacedName(token) {
    return `${getNamespace(token.namespace)}${escapeName(token.name, charsToEscapeInName)}`;
}
function getNamespace(namespace) {
    return namespace !== null
        ? `${namespace === "*"
            ? "*"
            : escapeName(namespace, charsToEscapeInName)}|`
        : "";
}
function escapeName(str, charsToEscape) {
    let lastIdx = 0;
    let ret = "";
    for (let i = 0; i < str.length; i++) {
        if (charsToEscape.has(str.charCodeAt(i))) {
            ret += `${str.slice(lastIdx, i)}\\${str.charAt(i)}`;
            lastIdx = i + 1;
        }
    }
    return ret.length > 0 ? ret + str.slice(lastIdx) : str;
}
