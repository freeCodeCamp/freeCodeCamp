import React from 'react';
import PropTypes from 'prop-types';

import {
  CertificationLayout,
  DefaultLayout
} from '../../src/components/layouts';
import FourOhFourPage from '../../src/pages/404';

const scriptAdd = (id, key, async, src) => {
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.id = id;
  s.key = key;
  s.async = async;
  s.onload = function() {
    console.log('Stripe injected');
  };
  s.src = src;
  document.getElementsByTagName('head')[0].appendChild(s);
};

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
  if (/^\/learn(\/.*)*/.test(pathname)) {
    return (
      <DefaultLayout pathname={pathname} showFooter={false}>
        {element}
      </DefaultLayout>
    );
  }
  if (/^\/donate(\/.*)*/.test(pathname)) {
    scriptAdd('stripe-js', 'stripe-js', false, 'https://js.stripe.com/v3/');
    return <DefaultLayout pathname={pathname}>{element}</DefaultLayout>;
  }
  return <DefaultLayout pathname={pathname}>{element}</DefaultLayout>;
}

layoutSelector.propTypes = {
  element: PropTypes.any,
  location: PropTypes.objectOf({ pathname: PropTypes.string }),
  props: PropTypes.any
};
