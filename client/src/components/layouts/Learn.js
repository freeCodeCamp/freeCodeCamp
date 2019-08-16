import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import DonateModal from '../Donation';

import 'prismjs/themes/prism.css';
import './prism.css';
import './prism-night.css';
import 'react-reflex/styles.css';
import './learn.css';

function LearnLayout({ children }) {
  return (
    <Fragment>
      <main id='learn-app-wrapper'>{children}</main>
      <DonateModal />
    </Fragment>
  );
}

LearnLayout.displayName = 'LearnLayout';
LearnLayout.propTypes = { children: PropTypes.any };

export default LearnLayout;
