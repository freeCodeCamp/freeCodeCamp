import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import DefaultLayout from './Default';
import DonationModal from '../Donation';

import 'prismjs/themes/prism.css';
import 'react-reflex/styles.css';
import './learn.css';

function LearnLayout({ children }) {
  return (
    <Fragment>
      <DefaultLayout>
        <main id='learn-app-wrapper'>{children}</main>
      </DefaultLayout>
      <DonationModal />
    </Fragment>
  );
}

LearnLayout.displayName = 'LearnLayout';
LearnLayout.propTypes = { children: PropTypes.any };

export default LearnLayout;
