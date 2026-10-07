import isDocument from './isDocument';
export default function isWindow(node) {
  if ('window' in node && node.window === node) return node;
  if (isDocument(node)) return node.defaultView || false;
  return false;
}