const reTag = /^@\S+/;
/**
 * Creates configured `Parser`
 * @param {Partial<Options>} options
 */
export default function getParser({ fence = '```', } = {}) {
    const fencer = getFencer(fence);
    const toggleFence = (source, isFenced) => fencer(source) ? !isFenced : isFenced;
    return function parseBlock(source) {
        // start with description section
        const sections = [[]];
        let isFenced = false;
        for (const line of source) {
            if (reTag.test(line.tokens.description) && !isFenced) {
                sections.push([line]);
            }
            else {
                sections[sections.length - 1].push(line);
            }
            isFenced = toggleFence(line.tokens.description, isFenced);
        }
        return sections;
    };
}
function getFencer(fence) {
    if (typeof fence === 'string')
        return (source) => source.split(fence).length % 2 === 0;
    return fence;
}
