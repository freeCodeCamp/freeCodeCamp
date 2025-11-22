import type { editor } from 'monaco-editor/esm/vs/editor/editor.api';
import { getScrollbarWidth } from '../../../../utils/scrollbar-width';

/**
 * Helper functions for creating DOM elements and widgets in the Monaco editor.
 * Extracted from editor.tsx to reduce complexity and improve maintainability.
 */

export function getEditorContentWidth(editor: editor.IStandaloneCodeEditor): number {
  return editor.getLayoutInfo().contentWidth - getScrollbarWidth();
}

export function createScrollGutterNode(
  editor: editor.IStandaloneCodeEditor
): HTMLDivElement {
  const scrollGutterNode = document.createElement('div');
  const lineGutterWidth = editor.getLayoutInfo().contentLeft;
  scrollGutterNode.style.width = `${lineGutterWidth}px`;
  scrollGutterNode.style.left = `-${lineGutterWidth}px`;
  scrollGutterNode.style.top = '0';
  scrollGutterNode.style.height = '10000px';
  scrollGutterNode.style.background = 'transparent';
  return scrollGutterNode;
}

export function createWidget(
  editor: editor.IStandaloneCodeEditor,
  id: string,
  domNode: HTMLDivElement,
  // If getTop function is not provided then no positioning will be done here.
  // This allows scroll gutter to do its positioning elsewhere.
  getTop?: () => string
) {
  const getId = () => id;
  const getDomNode = () => domNode;
  const getPosition = () => {
    if (getTop) {
      domNode.style.width = `${getEditorContentWidth(editor)}px`;
      domNode.style.top = getTop();
    }
    // must return null, so that Monaco knows the widget will position
    // itself.
    return null;
  };

  const afterRender = () => {
    if (getTop) {
      domNode.style.left = '0';
    }
  };

  return {
    getId,
    getDomNode,
    getPosition,
    afterRender
  };
}

export function createBreadcrumbElement(
  block: string,
  superBlock: string,
  t: (key: string) => string
): HTMLElement {
  const breadcrumb = document.createElement('nav');
  breadcrumb.setAttribute('aria-label', `${t('aria.breadcrumb-nav')}`);
  const breadcrumbList = document.createElement('ol'),
    breadcrumbLeft = document.createElement('li'),
    breadcrumbLeftLink = document.createElement('a'),
    breadcrumbRight = document.createElement('li'),
    breadcrumbRightLink = document.createElement('a');
  breadcrumbLeftLink.innerHTML = t(`intro:${superBlock}.title`);
  breadcrumbRightLink.innerHTML = t(
    `intro:${superBlock}.blocks.${block}.title`
  );
  breadcrumbLeftLink.setAttribute('href', `/learn/${superBlock}`);
  breadcrumbRightLink.setAttribute('href', `/learn/${superBlock}/#${block}`);
  breadcrumbLeft.appendChild(breadcrumbLeftLink);
  breadcrumbRight.appendChild(breadcrumbRightLink);
  breadcrumbList.setAttribute(
    'data-playwright-test-label',
    'breadcrumb-mobile'
  );
  breadcrumbList.className = 'breadcrumbs';
  breadcrumbList.appendChild(breadcrumbLeft);
  breadcrumbList.appendChild(breadcrumbRight);
  breadcrumb.appendChild(breadcrumbList);

  return breadcrumb;
}

export function createLowerJawContainer(
  editor: editor.IStandaloneCodeEditor,
  outputZoneTop: number
): HTMLDivElement {
  const container = document.createElement('div');
  container.classList.add('editor-lower-jaw');
  container.setAttribute('id', 'editor-lower-jaw');
  container.style.left = `${editor.getLayoutInfo().contentLeft}px`;
  container.style.width = `${getEditorContentWidth(editor)}px`;
  container.style.top = `${outputZoneTop}px`;
  return container;
}
