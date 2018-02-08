import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

import SocialIcons from './SocialIcons.jsx';

const propTypes = {
  about: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
  picture: PropTypes.string,
  points: PropTypes.number,
  username: PropTypes.string
};

function pluralise(word, condition) {
  return condition ? word + 's' : word;
}

function Camper({
  name,
  username,
  location,
  points,
  picture,
  about
}) {

  return (
    <div>
      <Row>
        <Col className='avatar-container' xs={ 12 }>
            <img
              alt={ username + '\'s profile picture' }
              className='avatar'
              src={ picture }
            />
        </Col>
      </Row>
      <br />
      <SocialIcons />
      <br/>
      <h2 className='text-center username'>@{ username }</h2>
      { name && <p className='text-center name'>{ name }</p> }
      { location && <p className='text-center location'>{ location }</p> }
      { about && <p className='bio text-center'>{ about }</p> }
      <p className='text-center points'>
        { `${points} ${pluralise('point', points > 1)}` }
      </p>
      <br/>
    </div>
  );
}

Camper.displayName = 'Camper';
Camper.propTypes = propTypes;

export default Camper;
