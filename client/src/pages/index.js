import React from 'react';
import { Grid, Row, Col, Image } from '@freecodecamp/react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faGithub,
  faNodeJs,
  faReact
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Helmet from 'react-helmet';

import { Spacer } from '../components/helpers';
import Layout from '../components/layouts/Default';
import Login from '../components/Header/components/Login';

import './index.css';

const BigCallToAction = () => (
  <Row>
    <Col sm={8} smOffset={2} xs={12}>
      <Login block={true}>Start coding (it's free)</Login>
    </Col>
  </Row>
);

const IndexPage = () => (
  <Layout disableSettings={true} landingPage={true}>
    <Helmet>
      <title>Learn to code | freeCodeCamp.org</title>
    </Helmet>
    <Spacer />
    <Spacer />
    <Grid className='text-center'>
      <Row>
        <h1 className='big-heading'>Learn to code for free.</h1>
        <Spacer />
        <Col md={4} sm={12}>
          <Image
            alt={
              'Get great references and connections to start your software ' +
              'engineer career'
            }
            className='landing-icon img-center'
            responsive={true}
            src={
              'https://s3.amazonaws.com/freecodecamp/landing-icon-community.svg'
            }
          />
          <p className='large-p'>
            Join a supportive community of millions of coders.
          </p>
        </Col>
        <Col md={4} sm={12}>
          <Image
            alt='Help nonprofits with bro bono code projects'
            className='landing-icon img-center'
            responsive={true}
            src={
              'https://s3.amazonaws.com/freecodecamp/landing-icon-' +
              'certificate.svg'
            }
          />
          <p className='large-p'>
            Build projects and earn free certifications.
          </p>
        </Col>
        <Col md={4} sm={12}>
          <Image
            alt={
              'Get hired as a developer and start your software engineer career'
            }
            className='landing-icon img-center'
            responsive={true}
            src={
              'https://s3.amazonaws.com/freecodecamp/landing-icon-' +
              'experience.svg'
            }
          />
          <p className='large-p'>Get experience by coding for nonprofits.</p>
        </Col>
      </Row>
      <Spacer />
      <Spacer />
      <BigCallToAction />
      <Spacer />
      <h2>As featured in:</h2>
      <Image
        alt='companies featuring freeCodeCamp'
        className='img-center'
        responsive={true}
        src='https://s3.amazonaws.com/freecodecamp/as-seen-on.png'
      />
      <Spacer />
      <hr />
      <Spacer />
      <h2>Launch your developer career</h2>
      <Spacer />
      <Row>
        <Col md={4} sm={12}>
          <Image
            alt="Meta's testimonial image"
            className='testimonial-image img-center'
            responsive={true}
            src='https://i.imgur.com/nsvNixW.jpg'
          />
          <p className='testimonial-copy'>
            Through freeCodeCamp, I built a robust and highly functional web app
            for a nonprofit. This led me to getting a fantastic job.
          </p>
          <h3>- Meta Hirschl</h3>
        </Col>
        <Col md={4} sm={12}>
          <Image
            alt="Brian's testimonial image"
            className='testimonial-image img-center'
            responsive={true}
            src='https://i.imgur.com/QPpjPac.jpg'
          />
          <p className='testimonial-copy'>
            freeCodeCamp is a great way for disabled veterans like me to
            retrain. I'm already receiving software engineering job offers.
          </p>
          <h3>- Brian Grant</h3>
        </Col>
        <Col md={4} sm={12}>
          <Image
            alt="Maxim Orlov's testimonial image"
            className='testimonial-image img-center'
            responsive={true}
            src='https://i.imgur.com/wjlDigg.jpg'
          />
          <p className='testimonial-copy'>
            I joined freeCodeCamp with zero knowledge of web development. 6
            months later, I landed my first job as a back end engineer.
          </p>
          <h3>- Maxim Orlov</h3>
        </Col>
      </Row>
      <Spacer />
      <hr />
      <Spacer />
      <h2>Learn powerful skills</h2>
      <Spacer />
      <Row className='text-center'>
        <Col md={3} sm={6} xs={12}>
          <FontAwesomeIcon
            className='landing-skill-icon'
            icon={faHtml5}
            size='9x'
          />
          <h2 className='black-text'>HTML5</h2>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <FontAwesomeIcon
            className='landing-skill-icon'
            icon={faCss3Alt}
            size='9x'
          />
          <h2 className='black-text'>CSS3</h2>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <FontAwesomeIcon
            className='landing-skill-icon'
            icon={faJs}
            size='9x'
          />
          <h2 className='black-text'>JavaScript</h2>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <FontAwesomeIcon
            className='landing-skill-icon'
            icon={faDatabase}
            size='9x'
          />
          <h2 className='black-text'>Databases</h2>
        </Col>
      </Row>
      <Row className='text-center'>
        <Col md={3} sm={6} xs={12}>
          <FontAwesomeIcon
            className='landing-skill-icon'
            icon={faGithub}
            size='9x'
          />
          <h2 className='black-text'>Git & GitHub</h2>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <FontAwesomeIcon
            className='landing-skill-icon'
            icon={faNodeJs}
            size='9x'
          />
          <h2 className='black-text'>Node.js</h2>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <FontAwesomeIcon
            className='landing-skill-icon'
            icon={faReact}
            size='9x'
          />
          <h2 className='black-text'>React.js</h2>
        </Col>
        <Col md={3} sm={6} xs={12}>
          <Image
            alt='The D3.js Logo'
            className='landing-skill-icon custom-landing-skill-icon'
            src='https://s3.amazonaws.com/freecodecamp/d3-logo.svg'
          />
          <h2 className='black-text'>D3.js</h2>
        </Col>
      </Row>
      <hr />
      <Spacer />
      <h3>
        freeCodeCamp is a donor-supported tax-exempt 501(c)(3) nonprofit
        organization (United States Federal Tax Identification Number:
        82-0779546)
      </h3>
      <p className='large-p'>
        Our mission: to help people learn to code for free. We accomplish this
        by creating thousands of videos, articles, and interactive coding
        lessons - all freely available to the public. We also have thousands of
        freeCodeCamp study groups around the world.
      </p>
      <p className='large-p'>
        Donations to freeCodeCamp go toward our education initiatives, and help
        pay for servers, services, and staff. You can{' '}
        <a
          className='large-p underlined-link'
          href='https://donate.freecodecamp.org/'
          rel='noopener noreferrer'
          target='_blank'
          >
          make a tax-deductible donation here
        </a>
      </p>
      .<Spacer />
      <BigCallToAction />
      <Spacer />
      <Spacer />
      <hr />
      <Spacer />
      <Spacer />
      <Spacer />
    </Grid>
  </Layout>
);

export default IndexPage;
