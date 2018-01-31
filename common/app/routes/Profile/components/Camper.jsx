import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import SocialIcons from './SocialIcons.jsx';

const mapStateToProps = () => ({});

const propTypes = {
  about: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
  picture: PropTypes.string,
  points: PropTypes.number,
  username: PropTypes.string
};

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
        <Col className='avatar-container'>
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
      <h2 className='text-center name'>{ name }</h2>
      <h4 className='text-center username'>@{ username }</h4>
      <h4 className='text-center location'>{ location }</h4>
      <br />
      <h3 className='text-center points'>{ points } points</h3>
      <br/>
      <p className='bio'>{ about }</p>
    </div>
  );
}

Camper.displayName = 'Camper';
Camper.propTypes = propTypes;

export default connect(mapStateToProps)(Camper);
