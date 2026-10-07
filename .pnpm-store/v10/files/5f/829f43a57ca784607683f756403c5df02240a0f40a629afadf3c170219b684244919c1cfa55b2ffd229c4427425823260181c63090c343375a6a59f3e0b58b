// deno-fmt-ignore-file
const integerKeyPattern = new RegExp('^(?:0|[1-9][0-9]*)$');
export function ConvertToIntegerKey(value) {
    const normal = `${value}`;
    return (integerKeyPattern.test(normal)
        ? parseInt(normal)
        : value);
}
