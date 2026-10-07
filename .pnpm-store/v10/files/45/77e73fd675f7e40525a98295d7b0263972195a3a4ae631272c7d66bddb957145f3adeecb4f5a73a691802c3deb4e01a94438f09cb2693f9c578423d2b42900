const getEscapedAny = (char) => {
    switch (char) {
        case '\b':
            return '\\b';
        case '\f':
            return '\\f';
        case '\n':
            return '\\n';
        case '\r':
            return '\\r';
        case '\t':
            return '\\t';
        case `"`:
        case '\\':
            return `\\${char}`;
    }
    let unicode = '';
    for (let index = char.length - 1; index >= 0; index--) {
        unicode = `\\u${('000' + char.charCodeAt(index).toString(16)).slice(-4)}${unicode}`;
    }
    return unicode || false;
};
export { getEscapedAny };
//# sourceMappingURL=get-escaped-any.js.map