import favicons from './favicons';
import meta from './meta';
import styleSheets from './styleSheets';
import mathjax from './mathjax';

const metaAndStyleSheets = meta
  .concat(favicons, styleSheets, mathjax)
  .map((element, i) => ({ ...element, key: `meta-stylesheet-${i}` }));

export default metaAndStyleSheets;
