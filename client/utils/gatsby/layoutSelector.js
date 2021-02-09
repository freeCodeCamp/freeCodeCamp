import React from 'react';
import PropTypes from 'prop-types';

import {
  CertificationLayout,
  DefaultLayout
} from '../../src/components/layouts';
import FourOhFourPage from '../../src/pages/404';

export default function layoutSelector({ element, props }) {
  const {
    location: { pathname }
  } = props;

  if (element.type === FourOhFourPage) {
    return <DefaultLayout pathname={pathname}>{element}</DefaultLayout>;
  }
  if (/\/certification\//.test(pathname)) {
    return (
      <CertificationLayout pathname={pathname}>{element}</CertificationLayout>
    );
  }
  if (/\/guide\//.test(pathname)) {
    console.log('Hitting guide for some reason. Need a redirect.');
  }

  const splitPath = pathname.split('/');
  const isSuperBlock =
    (splitPath.length === 3 && splitPath[1]) ||
    (splitPath.length === 4 && splitPath[2]);

  if (/\/learn\//.test(pathname) && !isSuperBlock) {
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
