import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import DonationModal from '../Donation';

import 'prismjs/themes/prism.css';
import 'react-reflex/styles.css';
import './learn.css';

function LearnLayout({ children }) {
  return (
    <Fragment>
      <main id='learn-app-wrapper'>{children}</main>
      <DonationModal />
    </Fragment>
  );
}

LearnLayout.displayName = 'LearnLayout';
LearnLayout.propTypes = { children: PropTypes.any };

export default LearnLayout;
