import meta from './meta';

const metaAndStyleSheets = meta.map((element, i) => ({
  ...element,
  key: `meta-stylesheet-${i}`,
  props: { ...element.props, key: `meta-stylesheet-${i}` }
}));

export default metaAndStyleSheets;
