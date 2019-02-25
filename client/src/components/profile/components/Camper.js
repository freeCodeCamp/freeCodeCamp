import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Image } from '@freecodecamp/react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';

import SocialIcons from './SocialIcons';

import './camper.css';

const propTypes = {
  about: PropTypes.string,
  githubProfile: PropTypes.string,
  isGithub: PropTypes.bool,
  isLinkedIn: PropTypes.bool,
  isTwitter: PropTypes.bool,
  isWebsite: PropTypes.bool,
  linkedin: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
  picture: PropTypes.string,
  points: PropTypes.number,
  twitter: PropTypes.string,
  username: PropTypes.string,
  website: PropTypes.string,
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
  yearsTopContributor,
  githubProfile,
  isLinkedIn,
  isGithub,
  isTwitter,
  isWebsite,
  linkedin,
  twitter,
  website
}) {
  return (
    <div>
      <Row>
        <Col className='avatar-container' xs={12}>
          <Image
            alt={username + "'s avatar"}
            className='avatar'
            responsive={true}
            src={picture}
          />
        </Col>
      </Row>
      <SocialIcons
        githubProfile={githubProfile}
        isGithub={isGithub}
        isLinkedIn={isLinkedIn}
        isTwitter={isTwitter}
        isWebsite={isWebsite}
        linkedin={linkedin}
        twitter={twitter}
        website={website}
      />
      <br />
      <h2 className='text-center username'>@{username}</h2>
      {name && <p className='text-center name'>{name}</p>}
      {location && <p className='text-center location'>{location}</p>}
      {about && <p className='bio text-center'>{about}</p>}
      {typeof points === 'number' ? (
        <p className='text-center points'>
          {`${points} ${pluralise('point', points !== 1)}`}
        </p>
      ) : null}
      {yearsTopContributor.filter(Boolean).length > 0 && (
        <div>
          <br />
          <p className='text-center yearsTopContributor'>
            <FontAwesomeIcon icon={faAward} /> Top Contributor
          </p>
          <p className='text-center'>{joinArray(yearsTopContributor)}</p>
        </div>
      )}
      <br />
    </div>
  );
}

Camper.displayName = 'Camper';
Camper.propTypes = propTypes;

export default Camper;
