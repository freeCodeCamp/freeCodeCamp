import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Image } from '@freecodecamp/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import FreeCodeCampLogo from '../../../assets/icons/freeCodeCampLogo';

const propTypes = {
  certName: PropTypes.string,
  certTitle: PropTypes.string,
  completionTime: PropTypes.number,
  date: PropTypes.string,
  name: PropTypes.string,
  username: PropTypes.string
};

const CERT_URL = ' https://www.freecodecamp.org/certification';
const TWITTER_URL = 'https://twitter.com/intent/tweet';
const TWEET = `${TWITTER_URL}?text=After 100's of hours of learning, I've earned the @freeCodeCamp`;

const Certificate = ({
  certName,
  certTitle,
  completionTime,
  date,
  name,
  username
}) => (
  <Grid className='certificate-wrapper certification-namespace'>
    <Row>
      <header>
        <Col md={5} sm={12}>
          <div className='logo'>
            <FreeCodeCampLogo />
          </div>
        </Col>
        <Col className='right' md={7} sm={12}>
          <div className='issue-date'>
            Issued&nbsp;
            <strong>{date}</strong>
          </div>

          <div className='share'>
            <span>Share Certification</span>

            <a
              aria-label={`Tweet your certification`}
              href={`${TWEET} ${certTitle} Certification. ${CERT_URL}/${username}/${certName}`}
              rel='noopener noreferrer'
              target='_blank'
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </Col>
      </header>

      <main className='information'>
        <div className='information-container'>
          <h3>This certifies that</h3>
          <h1>
            <strong>{name}</strong>
          </h1>
          <h3>has successfully completed the freeCodeCamp.org</h3>
          <h1>
            <strong>{certTitle}</strong>
          </h1>
          <h4>
            Developer Certification, representing approximately
            {` ${completionTime} hours of coursework`}
          </h4>
        </div>
      </main>

      <footer>
        <div className='row signatures'>
          <Image
            alt="Quincy Larson's Signature"
            src={
              'https://cdn.freecodecamp.org' +
              '/platform/english/images/quincy-larson-signature.svg'
            }
          />
          <p>
            <strong>Quincy Larson</strong>
          </p>
          <p>Executive Director, freeCodeCamp.org</p>
        </div>

        <Row>
          <p className='verify'>
            Verify this certification at:
            https://www.freecodecamp.org/certification/
            {username}/{certName}
          </p>
        </Row>
      </footer>
    </Row>
  </Grid>
);

Certificate.propTypes = propTypes;

export default Certificate;
