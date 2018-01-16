import React from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import { userSelector } from '../../../redux';
import Camper from './Camper.jsx';

const mapStateToProps = createSelector(
  userSelector,
  ({
    name,
    username,
    location,
    points,
    picture,
    bio
  }) => ({
    name,
    username,
    location,
    points,
    picture,
    bio
  })
);

const propTypes = {
  bio: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
  picture: PropTypes.string,
  points: PropTypes.number,
  username: PropTypes.string
};

function CamperHOC({
  name,
  username,
  location,
  points,
  picture,
  bio
}) {

  return (
    <Camper
      bio={ bio }
      location={ location }
      name={ name }
      picture={ picture }
      points={ points }
      username={ username }
    />
  );
}

CamperHOC.displayName = 'CamperHOC';
CamperHOC.propTypes = propTypes;

export default connect(mapStateToProps)(CamperHOC);
