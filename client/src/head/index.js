import favicons from './favicons';
import meta from './meta';
import mathjax from './mathjax';
import sassjs from './sassjs';

const metaAndStyleSheets = meta
  .concat(favicons, mathjax, sassjs)
  .map((element, i) => ({
    ...element,
    key: `meta-stylesheet-${i}`,
    props: { ...element.props, key: `meta-stylesheet-${i}` }
  }));

export default metaAndStyleSheets;
