import i18next from 'i18next';
import envData from '../../../../../config/env.json';

const { forumLocation } = envData;

interface GuideData {
  forumTopicId?: number;
  title?: string;
}

export function getGuideUrl({ forumTopicId, title = '' }: GuideData): string {
  title = encodeURIComponent(title);
  return forumTopicId
    ? `https://forum.freecodecamp.org/t/${forumTopicId}`
    : `${forumLocation}/search?q=${title}%20in%3Atitle%20order%3Aviews`;
}

export function isGoodXHRStatus(status?: string): boolean {
  if (!status) return false;
  const statusInt = parseInt(status, 10);
  return (statusInt >= 200 && statusInt < 400) || statusInt === 402;
}

export function transformEditorLink(url: string): string {
  return url
    .replace(
      /(\/\/)(?<projectname>[^.]+)\.(?<username>[^.]+)\.repl\.co\/?/,
      '//replit.com/@$<username>/$<projectname>'
    )
    .replace(
      /(\/\/)(?<projectname>[^.]+)\.glitch\.me\/?/,
      '//glitch.com/edit/#!/$<projectname>'
    );
}

export function enhancePrismAccessibility(
  prismEnv: Prism.hooks.ElementHighlightedEnvironment
): void {
  const langs: { [key: string]: string } = {
    js: 'JavaScript',
    javascript: 'JavaScript',
    css: 'CSS',
    html: 'HTML',
    python: 'python',
    py: 'python',
    xml: 'XML',
    jsx: 'JSX',
    scss: 'SCSS',
    sql: 'SQL',
    http: 'HTTP',
    json: 'JSON',
    pug: 'pug'
  };
  const parent = prismEnv?.element?.parentElement;
  if (parent && parent.nodeName === 'PRE' && parent.tabIndex === 0) {
    parent.setAttribute('role', 'region');
    const codeType = prismEnv.element?.className
      .replace(/language-(.*)/, '$1')
      .toLowerCase();
    const codeName = langs[codeType] || '';
    parent.setAttribute(
      'aria-label',
      i18next.t('aria.code-example', {
        codeName
      })
    );
  }
}
