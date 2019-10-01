import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function CertificationLayout({ children }) {
  return <Fragment>{children}</Fragment>;
}

CertificationLayout.displayName = 'CertificationLayout';
CertificationLayout.propTypes = { children: PropTypes.any };

export default CertificationLayout;
