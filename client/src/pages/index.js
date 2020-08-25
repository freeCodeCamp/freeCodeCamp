import React from 'react';
import PropTypes from 'prop-types';

import Landing from '../components/landing';
import { AllChallengeNode } from '../redux/propTypes';

export const IndexPage = () => {
  return <Landing />;
};

const propTypes = {
  data: PropTypes.shape({
    allChallengeNode: AllChallengeNode
  })
};

IndexPage.propTypes = propTypes;
IndexPage.displayName = 'IndexPage';

export default IndexPage;
