export default sizeChunks

// Measure the number of character codes in chunks.
// Counts tabs based on their expanded size, and CR+LF as one character.
function sizeChunks(chunks) {
  var index = -1
  var size = 0

  while (++index < chunks.length) {
    size += typeof chunks[index] === 'string' ? chunks[index].length : 1
  }

  return size
}
