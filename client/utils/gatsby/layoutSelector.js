import React from 'react';
import PropTypes from 'prop-types';

import {
  CertificationLayout,
  DefaultLayout,
  GuideLayout
} from '../../src/components/layouts';
// eslint-disable-next-line max-len
import GuideNavMenu from '../../src/components/layouts/components/guide/NavMenu';
import FourOhFourPage from '../../src/pages/404';

export default function layoutSelector({ element, props }) {
  const {
    location: { pathname }
  } = props;
  if (pathname === '/') {
    return (
      <DefaultLayout landingPage={true} pathname={pathname}>
        {element}
      </DefaultLayout>
    );
  }
  if (element.type === FourOhFourPage) {
    return <DefaultLayout pathname={pathname}>{element}</DefaultLayout>;
  }
  if (/^\/certification(\/.*)*/.test(pathname)) {
    return <CertificationLayout>{element}</CertificationLayout>;
  }
  if (/^\/guide(\/.*)*/.test(pathname)) {
    return (
      <DefaultLayout navigationMenu={<GuideNavMenu />} pathname={pathname}>
        <GuideLayout>{element}</GuideLayout>
      </DefaultLayout>
    );
  }
  if (/^\/learn(\/.*)*/.test(pathname)) {
    return (
      <DefaultLayout pathname={pathname} showFooter={false}>
        {element}
      </DefaultLayout>
    );
  }
  return <DefaultLayout pathname={pathname}>{element}</DefaultLayout>;
}

layoutSelector.propTypes = {
  element: PropTypes.any,
  location: PropTypes.objectOf({ pathname: PropTypes.string }),
  props: PropTypes.any
};
