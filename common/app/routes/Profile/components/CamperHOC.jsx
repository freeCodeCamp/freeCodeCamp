import React from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import { userByNameSelector } from '../../../redux';
import Camper from '../../Settings/components/Camper.jsx';

const mapStateToProps = createSelector(
  userByNameSelector,
  ({
    name,
    username,
    location,
    points,
    picture,
    about
  }) => ({
    name,
    username,
    location,
    points,
    picture,
    about
  })
);

const propTypes = {
  about: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
  picture: PropTypes.string,
  points: PropTypes.number,
  showAbout: PropTypes.bool,
  showLocation: PropTypes.bool,
  showName: PropTypes.bool,
  showPoints: PropTypes.bool,
  username: PropTypes.string
};

function CamperHOC({
  name,
  username,
  location,
  points,
  picture,
  about,
  showAbout,
  showLocation,
  showName,
  showPoints
}) {

  return (
    <div>
      <Camper
        about={ showAbout && about }
        location={ showLocation && location }
        name={ showName && name }
        picture={ picture }
        points={ showPoints ? points : 0 }
        username={ username }
      />
      <hr />
    </div>
  );
}

CamperHOC.displayName = 'CamperHOC';
CamperHOC.propTypes = propTypes;

export default connect(mapStateToProps)(CamperHOC);
