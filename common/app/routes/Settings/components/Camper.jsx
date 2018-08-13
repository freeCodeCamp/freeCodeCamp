import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';

import SocialIcons from '../../Profile/components/SocialIcons.jsx';

const propTypes = {
  about: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
  picture: PropTypes.string,
  points: PropTypes.number,
  username: PropTypes.string,
  yearsTopContributor: PropTypes.array
};

function pluralise(word, condition) {
  return condition ? word + 's' : word;
}
function joinArray(array) {
  return array.reduce((string, item, index, array) => {
    if (string.length > 0) {
      if (index === array.length - 1) {
        return `${string} and ${item}`;
      } else {
        return `${string}, ${item}`;
      }
    } else {
      return item;
    }
  });
}

function Camper({
  name,
  username,
  location,
  points,
  picture,
  about,
  yearsTopContributor
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
      <SocialIcons />
      <h2 className='text-center username'>@{ username }</h2>
      { name && <p className='text-center name'>{ name }</p> }
      { location && <p className='text-center location'>{ location }</p> }
      { about && <p className='bio text-center'>{ about }</p> }
      {
        typeof points === 'number' ? (
          <p className='text-center points'>
            { `${points} ${pluralise('point', points !== 1)}` }
          </p>
        ) : null
      }
      { yearsTopContributor.length > 0 &&
        (
          <p className='text-center yearsTopContributor'>
            <FontAwesomeIcon
              icon={faAward}
            /> Top Contributor of { joinArray(yearsTopContributor) }
          </p>
        )
      }
      <br/>
    </div>
  );
}

Camper.displayName = 'Camper';
Camper.propTypes = propTypes;

export default Camper;
