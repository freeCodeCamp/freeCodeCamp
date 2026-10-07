export function _tagged_template_literal(strings, raw) {
    if (!raw) raw = strings.slice(0);

    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
export { _tagged_template_literal as _ };
