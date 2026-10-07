export default function isAnnotatedForRemoval(node) {
  const comments = node.trailingComments || []

  return Boolean(comments.find(({ value }) => value.trim() === 'remove-proptypes'))
}
