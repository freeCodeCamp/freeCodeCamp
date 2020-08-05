import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Image } from '@freecodecamp/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAward,
  faHeart,
  faCalendar
} from '@fortawesome/free-solid-svg-icons';
import Identicon from 'react-identicons';

import SocialIcons from './SocialIcons';

import './camper.css';

const propTypes = {
  about: PropTypes.string,
  githubProfile: PropTypes.string,
  isDonating: PropTypes.bool,
  isGithub: PropTypes.bool,
  isLinkedIn: PropTypes.bool,
  isTwitter: PropTypes.bool,
  isWebsite: PropTypes.bool,
  joinDate: PropTypes.string,
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

function parseDate(joinDate) {
  joinDate = new Date(joinDate);
  const year = joinDate.getFullYear();
  const month = joinDate.toLocaleString('en-US', { month: 'long' });
  return `Joined ${month} ${year}`;
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
  isDonating,
  isLinkedIn,
  isGithub,
  isTwitter,
  isWebsite,
  joinDate,
  linkedin,
  twitter,
  website
}) {
  // A lot of the user-profiles are still using the defunct service.
  const avatar = /example.com|identicon.org/.test(picture) ? (
    <Identicon
      bg={'#858591'}
      count={5}
      fg={'#0A0A23'}
      padding={5}
      size={256}
      string={username}
    />
  ) : (
    <Image
      alt={username + "'s avatar"}
      className='avatar'
      responsive={true}
      src={picture}
    />
  );
  return (
    <div>
      <Row>
        <Col className='avatar-container' xs={12}>
          <div className={isDonating ? 'supporter-img' : ''}>{avatar}</div>
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
        username={username}
        website={website}
      />
      <br />
      <h2 className='text-center username'>@{username}</h2>
      {name && <p className='text-center name'>{name}</p>}
      {location && <p className='text-center location'>{location}</p>}
      {isDonating && (
        <p className='text-center supporter'>
          <FontAwesomeIcon icon={faHeart} /> Supporter
        </p>
      )}
      {about && <p className='bio text-center'>{about}</p>}
      {joinDate && (
        <p className='bio text-center'>
          <FontAwesomeIcon icon={faCalendar} /> {parseDate(joinDate)}
        </p>
      )}
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
      {typeof points === 'number' ? (
        <p className='text-center points'>
          {`${points} ${pluralise('total point', points !== 1)}`}
        </p>
      ) : null}
    </div>
  );
}

Camper.displayName = 'Camper';
Camper.propTypes = propTypes;

export default Camper;
