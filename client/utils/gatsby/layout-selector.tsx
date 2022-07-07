import React from 'react';

import {
  CertificationLayout,
  TcIntegrationLayout
} from '../../src/components/layouts';
import FourOhFourPage from '../../src/pages/404';
import { isChallenge } from '../../src/utils/path-parsers';

interface LayoutSelectorProps {
  element: JSX.Element;
  props: { location: { pathname: string } };
}
export default function layoutSelector({
  element,
  props
}: LayoutSelectorProps): JSX.Element {
  const {
    location: { pathname }
  } = props;

  if (element.type === FourOhFourPage) {
    return (
      <TcIntegrationLayout pathname={pathname} showFooter={true}>
        {element}
      </TcIntegrationLayout>
    );
  } else if (/\/certification\//.test(pathname)) {
    return (
      <CertificationLayout pathname={pathname}>{element}</CertificationLayout>
    );
  } else if (isChallenge(pathname)) {
    return (
      <TcIntegrationLayout pathname={pathname} showFooter={false}>
        {element}
      </TcIntegrationLayout>
    );
  } else {
    return (
      <TcIntegrationLayout pathname={pathname} showFooter={true}>
        {element}
      </TcIntegrationLayout>
    );
  }
}
