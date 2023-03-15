import React from 'react';

import CertificationLayout from '../../src/components/layouts/certification';
import DefaultLayout from '../../src/components/layouts/default';
import FourOhFourPage from '../../src/pages/404';
import { isChallenge } from '../../src/utils/path-parsers';

interface LayoutSelectorProps {
  element: JSX.Element;
  pathname: string;
  pageContext?: { challengeMeta?: { block?: string; superBlock?: string } };
}
export const LayoutSelector = ({
  element,
  pathname,
  pageContext
}: LayoutSelectorProps): JSX.Element => {
  if (element.type === FourOhFourPage) {
    return (
      <DefaultLayout pathname={pathname} showFooter={true}>
        {element}
      </DefaultLayout>
    );
  } else if (/\/certification\//.test(pathname)) {
    return (
      <CertificationLayout pathname={pathname}>{element}</CertificationLayout>
    );
  } else if (isChallenge(pathname)) {
    return (
      <DefaultLayout
        pathname={pathname}
        showFooter={false}
        isChallenge={true}
        block={pageContext?.challengeMeta?.block}
        superBlock={pageContext?.challengeMeta?.superBlock}
      >
        {element}
      </DefaultLayout>
    );
  } else {
    return (
      <DefaultLayout pathname={pathname} showFooter={true}>
        {element}
      </DefaultLayout>
    );
  }
};
