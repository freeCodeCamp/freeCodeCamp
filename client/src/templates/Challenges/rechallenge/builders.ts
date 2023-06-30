import { template as _template } from 'lodash-es';

interface ConcatHTMLOptions {
  required: { src: string; link?: string }[];
  template?: string;
  contents?: string;
}

export function concatHtml({
  required = [],
  template,
  contents
}: ConcatHTMLOptions): string {
  const embedSource = template
    ? _template(template)
    : ({ source }: { source: ConcatHTMLOptions['contents'] }) => source;
  const head = required
    .map(({ link, src }) => {
      if (link && src) {
        throw new Error(`
A required file can not have both a src and a link: src = ${src}, link = ${link}
`);
      }
      if (src) {
        return `<script src='${src}' type='text/javascript'></script>`;
      }
      if (link) {
        return `<link href='${link}' rel='stylesheet' />`;
      }
      return '';
    })
    .join('\n');

  return `<head>${head}</head>${embedSource({ source: contents }) || ''}`;
}
