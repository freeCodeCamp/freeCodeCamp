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
  username: PropTypes.string
};

function CamperHOC({
  name,
  username,
  location,
  points,
  picture,
  about
}) {

  return (
    <div>
      <Camper
        about={ about }
        location={ location }
        name={ name }
        picture={ picture }
        points={ points }
        username={ username }
      />
      <hr />
    </div>
  );
}

CamperHOC.displayName = 'CamperHOC';
CamperHOC.propTypes = propTypes;

export default connect(mapStateToProps)(CamperHOC);
