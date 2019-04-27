import meta from './meta';
import mathjax from './mathjax';
import scripts from './scripts';

const metaAndStyleSheets = meta.concat(mathjax, scripts).map((element, i) => ({
  ...element,
  key: `meta-stylesheet-${i}`,
  props: { ...element.props, key: `meta-stylesheet-${i}` }
}));

export default metaAndStyleSheets;
