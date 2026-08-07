/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import { describe, test, expect, vi } from 'vitest';

import FourOhFourPage from '../../src/pages/404';
import Certification from '../../src/pages/certification';
import Learn from '../../src/pages/learn';
import layoutSelector from './layout-selector';

vi.mock('../../src/analytics');

vi.mock('../../src/utils/get-words');

interface NameAndProps {
  props: Record<string, unknown>;
  name: string;
}
function getComponentNameAndProps(
  elementType: React.JSXElementConstructor<never>,
  pathname: string,
  pageContext?: { challengeMeta?: { block?: string; superBlock?: string } }
): NameAndProps {
  const LayoutReactComponent = layoutSelector({
    element: { type: elementType, props: {}, key: '' },
    props: {
      data: {},
      location: {
        pathname
      },
      pageContext,
      params: { '*': '' },
      path: ''
    }
  });
  return {
    props: LayoutReactComponent.props as Record<string, unknown>,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    name: LayoutReactComponent.type.WrappedComponent.displayName
  };
}

const challengePageContext = {
  challengeMeta: {
    block: 'Basic HTML and HTML5',
    superBlock: 'responsive-web-design'
  }
};

describe('Layout selector', () => {
  test('Challenges should have DefaultLayout and no footer', () => {
    const challengePath =
      '/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements';
    const componentObj = getComponentNameAndProps(
      Learn,
      challengePath,
      challengePageContext
    );
    expect(componentObj.name).toEqual('DefaultLayout');
    expect(componentObj.props.showFooter).toEqual(false);
  });

  test('SuperBlock path should have DefaultLayout and footer', () => {
    const superBlockPath = '/learn/responsive-web-design/';
    const componentObj = getComponentNameAndProps(Learn, superBlockPath);
    expect(componentObj.name).toEqual('DefaultLayout');
    expect(componentObj.props.showFooter).toEqual(true);
  });

  test('i18n challenge path should have DefaultLayout and no footer', () => {
    const challengePath =
      'espanol/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements/';
    const componentObj = getComponentNameAndProps(
      Learn,
      challengePath,
      challengePageContext
    );
    expect(componentObj.name).toEqual('DefaultLayout');
    expect(componentObj.props.showFooter).toEqual(false);
  });

  test('i18n superBlock path should have DefaultLayout and footer', () => {
    const superBlockPath = '/learn/responsive-web-design/';
    const componentObj = getComponentNameAndProps(Learn, superBlockPath);
    expect(componentObj.name).toEqual('DefaultLayout');
    expect(componentObj.props.showFooter).toEqual(true);
  });

  test('404 page should have DefaultLayout and footer', () => {
    const challengePath =
      '/espanol/learn/responsive-web-design/basic-html-and-html5/say-hello-to-html-elements/';
    const componentObj = getComponentNameAndProps(
      FourOhFourPage,
      challengePath
    );
    expect(componentObj.name).toEqual('DefaultLayout');
    expect(componentObj.props.showFooter).toEqual(true);
  });

  test('Certification path should have CertificationLayout', () => {
    const challengePath =
      '/certification/mot01/javascript-algorithms-and-data-structures/';
    const componentObj = getComponentNameAndProps(Certification, challengePath);
    expect(componentObj.name).toEqual('CertificationLayout');
  });

  test('Status paths should return raw element without layout', () => {
    const TestComponent = () => <div>Test</div>;
    const statusPath = '/status/version';

    const result = layoutSelector({
      element: { type: TestComponent, props: {}, key: '' },
      props: {
        data: {},
        location: {
          pathname: statusPath
        },
        params: { '*': '' },
        path: ''
      }
    });

    // The result should be the element directly, not wrapped in a layout
    expect(result.type).toBe(TestComponent);
  });
});
