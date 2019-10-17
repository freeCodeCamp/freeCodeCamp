import meta from './meta';
import scripts from './scripts';

const metaAndStyleSheets = meta.concat(scripts).map((element, i) => ({
  ...element,
  key: `meta-stylesheet-${i}`,
  props: { ...element.props, key: `meta-stylesheet-${i}` }
}));

export default metaAndStyleSheets;
