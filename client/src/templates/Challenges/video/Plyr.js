import React from 'react';
import { PlyrComponent } from 'plyr-react';
import PropTypes from 'prop-types';

const Plyr = ({ sources }) => {
  return <PlyrComponent sources={sources} />;
};

Plyr.propTypes = {
  sources: PropTypes.shape({
    type: PropTypes.string.isRequired,
    sources: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        provider: PropTypes.string.isRequired
      })
    ).isRequired
  })
};

export default Plyr;
