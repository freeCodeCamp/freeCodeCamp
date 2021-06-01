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
    return (
      <DefaultLayout pathname={pathname} showFooter={true}>
        {element}
      </DefaultLayout>
    );
  }
  if (/\/certification\//.test(pathname)) {
    return (
      <CertificationLayout pathname={pathname}>{element}</CertificationLayout>
    );
  }

  const splitPath = pathname.split('/').filter(x => x);

  const isChallenge =
    (splitPath.length === 4 && splitPath[0]) === 'learn' ||
    (splitPath.length === 5 && splitPath[1]) === 'learn';

  if (isChallenge) {
    return (
      <DefaultLayout pathname={pathname} showFooter={false}>
        {element}
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout pathname={pathname} showFooter={true}>
      {element}
    </DefaultLayout>
  );
}

layoutSelector.propTypes = {
  element: PropTypes.any,
  location: PropTypes.objectOf({ pathname: PropTypes.string }),
  props: PropTypes.any
};
