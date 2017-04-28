import { Observable } from 'rx';
import { ajax$ } from '../../common/utils/ajax-stream';

// value used to break browser ajax caching
const cacheBreakerValue = Math.random();

export function fetchScript(
  {
    src,
    cacheBreaker = false,
    crossDomain = true
  } = {},
) {
  if (!src) {
    throw new Error('No source provided for script');
  }
  if (this.cache.has(src)) {
    return this.cache.get(src);
  }
  const url = cacheBreaker ?
    `${src}?cacheBreaker=${cacheBreakerValue}` :
    src;
  const script = ajax$({ url, crossDomain })
    .doOnNext(res => {
      if (res.status !== 200) {
        throw new Error('Request errror: ' + res.status);
      }
    })
    .map(({ response }) => response)
    .map(script => `<script>${script}</script>`)
    .shareReplay();

  this.cache.set(src, script);
  return script;
}
fetchScript.cache = new Map();

export function fetchLink(
  {
    link: href,
    raw = false,
    crossDomain = true
  } = {},
) {
  if (!link) {
    return Observable.throw(new Error('No source provided for link'));
  }
  if (this.cache.has(href)) {
    return this.cache.get(href);
  }
  // css files with `url(...` may not work in style tags
  // so we put them in raw links
  if (raw) {
    const link = Observable.just(`<link href=${href} rel='stylesheet' />`)
      .shareReplay();
    this.cache.set(href, link);
    return link;
  }
  const link = ajax$({ url: href, crossDomain })
    .doOnNext(res => {
      if (res.status !== 200) {
        throw new Error('Request error: ' + res.status);
      }
    })
    .map(({ response }) => response)
    .map(script => `<style>${script}</style>`)
    .catch(() => Observable.just(''))
    .shareReplay();

  this.cache.set(href, link);
  return link;
}

fetchLink.cache = new Map();
