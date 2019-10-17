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
  if (/^\/certification(\/.*)*/.test(pathname)) {
    return <CertificationLayout>{element}</CertificationLayout>;
  }
  if (/^\/guide(\/.*)*/.test(pathname)) {
    console.log('Hitting guide for some reason. Need a redirect.');
  }
  if (/^\/learn\/coding-interview-prep\/rosetta-code(\/.*)*/.test(pathname)) {
    const mathjax = {
      address:
        'https://cdnjs.cloudflare.com/ajax/libs/mathjax/' +
        '2.7.4/MathJax.js?config=TeX-AMS_HTML',
      key: 'mathjax',
      type: 'text/javascript'
    };
    return (
      <DefaultLayout cdnInfo={mathjax} pathname={pathname} showFooter={false}>
        {element}
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
