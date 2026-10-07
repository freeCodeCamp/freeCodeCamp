export default function inspectSymbol(value) {
    if ('description' in Symbol.prototype) {
        return value.description ? `Symbol(${value.description})` : 'Symbol()';
    }
    return value.toString();
}
