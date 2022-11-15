const emptyProtector = {
  blocks: [],
  challenges: []
};
// protect against malformed map data
// protect(block: { challenges: [], block: [] }|Void) => block|emptyProtector
export default function protect(block) {
  if (!block || !(block.challenges || block.blocks)) {
    return emptyProtector;
  }
  return block;
}
