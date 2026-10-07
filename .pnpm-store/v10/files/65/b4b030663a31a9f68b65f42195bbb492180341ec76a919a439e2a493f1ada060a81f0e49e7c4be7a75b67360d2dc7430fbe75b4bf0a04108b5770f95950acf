// @flow strict

export default function parseCSSImport(url: string): string {
  if (!/^(~|\.\/|\/)/.test(url)) {
    return './' + url;
  } else if (!/^(~\/|\.\/|\/)/.test(url)) {
    return url.substring(1);
  } else {
    return url;
  }
}
