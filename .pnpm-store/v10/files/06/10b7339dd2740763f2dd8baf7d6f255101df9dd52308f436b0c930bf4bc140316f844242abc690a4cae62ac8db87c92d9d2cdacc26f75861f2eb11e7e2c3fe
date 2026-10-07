export function flow(...transforms) {
    return (block) => transforms.reduce((block, t) => t(block), block);
}
