import React from 'react';
import PropTypes from 'prop-types';

import CompletionModal from './Completion-Modal.jsx';
import AppChildContainer from '../../Child-Container.jsx';

const propTypes = {
  children: PropTypes.node
};

export default function ChildContainer({ children, ...props }) {
  return (
    <AppChildContainer { ...props }>
      { children }
      <CompletionModal />
    </AppChildContainer>
  );
}

ChildContainer.propTypes = propTypes;
