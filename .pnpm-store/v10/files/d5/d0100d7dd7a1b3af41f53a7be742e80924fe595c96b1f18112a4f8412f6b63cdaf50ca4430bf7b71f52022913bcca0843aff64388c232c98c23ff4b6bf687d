import isPlainObject from './isPlainObject';
import isMap from './isMap';
import hasGeneratorInterface from './hasGeneratorInterface';
import flattenWhenNode from './flattenWhenNode';

export default flattenWhenNode(
  node => (isPlainObject(node) || isMap(node)) && !hasGeneratorInterface(node)
);
