export function isSpace(source) {
    return /^\s+$/.test(source);
}
export function hasCR(source) {
    return /\r$/.test(source);
}
export function splitCR(source) {
    const matches = source.match(/\r+$/);
    return matches == null
        ? ['', source]
        : [source.slice(-matches[0].length), source.slice(0, -matches[0].length)];
}
export function splitSpace(source) {
    const matches = source.match(/^\s+/);
    return matches == null
        ? ['', source]
        : [source.slice(0, matches[0].length), source.slice(matches[0].length)];
}
export function splitLines(source) {
    return source.split(/\n/);
}
export function seedBlock(block = {}) {
    return Object.assign({ description: '', tags: [], source: [], problems: [] }, block);
}
export function seedSpec(spec = {}) {
    return Object.assign({ tag: '', name: '', type: '', optional: false, description: '', problems: [], source: [] }, spec);
}
export function seedTokens(tokens = {}) {
    return Object.assign({ start: '', delimiter: '', postDelimiter: '', tag: '', postTag: '', name: '', postName: '', type: '', postType: '', description: '', end: '', lineEnd: '' }, tokens);
}
/**
 * Assures Block.tags[].source contains references to the Block.source items,
 * using Block.source as a source of truth. This is a counterpart of rewireSpecs
 * @param block parsed coments block
 */
export function rewireSource(block) {
    const source = block.source.reduce((acc, line) => acc.set(line.number, line), new Map());
    for (const spec of block.tags) {
        spec.source = spec.source.map((line) => source.get(line.number));
    }
    return block;
}
/**
 * Assures Block.source contains references to the Block.tags[].source items,
 * using Block.tags[].source as a source of truth. This is a counterpart of rewireSource
 * @param block parsed coments block
 */
export function rewireSpecs(block) {
    const source = block.tags.reduce((acc, spec) => spec.source.reduce((acc, line) => acc.set(line.number, line), acc), new Map());
    block.source = block.source.map((line) => source.get(line.number) || line);
    return block;
}
