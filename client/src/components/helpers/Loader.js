import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

import './loader.css';

function Loader({ fullScreen }) {
  return (
    <div className={fullScreen ? 'full-screen-wrapper' : ''}>
      <Spinner name='ball-clip-rotate-multiple' />
    </div>
  );
}

Loader.displayName = 'Loader';
Loader.propTypes = {
  fullScreen: PropTypes.bool
};

export default Loader;
