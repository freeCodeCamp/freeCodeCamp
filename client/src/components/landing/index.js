import React, { Fragment } from 'react';

import { Grid, Row, Col } from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { uniq } from 'lodash';
import { Spacer } from '../helpers';
import Login from '../Header/components/Login';
import CompanyLogos from './components/CompanyLogos';
import { AsFeatureLogo } from '../../assets/images';

import './landing.css';
import '../Map/map.css';

const propTypes = {
  nodes: PropTypes.array
};

const BigCallToAction = () => (
  <Row>
    <Col md={6} mdOffset={3} sm={8} smOffset={2} xs={12}>
      <Login block={true} data-test-label='landing-big-cta'>
        Jetzt starten (100% kostenfrei)
      </Login>
    </Col>
  </Row>
);

const AsFeaturedSection = () => (
  <Row>
    <Col sm={8} smOffset={2} xs={12}>
      <div className='text-center'>
        <h2 className='medium-heading'>Bekannt aus:</h2>
        <AsFeatureLogo />
      </div>
    </Col>
  </Row>
);

export const Landing = ({ nodes }) => {
  const superBlocks = uniq(nodes.map(node => node.superBlock));
  const interviewPrep = superBlocks.splice(-1);
  return (
    <Fragment>
      <Helmet>
        <title>Programmieren lernen von zu Hause aus | freeCodeCamp.org (deutsch)</title>
      </Helmet>
      <main className='landing-page'>
        <Spacer />
        <Grid>
          <Row>
            <Col sm={10} smOffset={1} xs={12}>
              <h1
                className='big-heading text-center'
                data-test-label='landing-header'
              >
                Willkommen bei freeCodeCamp.org (deutsch)
              </h1>
              <Spacer />
              <h2 className='medium-heading text-center'>
                Lerne Zuhause das Programmieren
              </h2>
              <h2 className='medium-heading text-center'>Projekte erstellen.</h2>
              <h2 className='medium-heading text-center'>
                Verdiene Zertifikate.
              </h2>
              <h2 className='medium-heading text-center'>
                Seit 2014 haben mehr als 40.000 freeCodeCamp.org-Teilnehmende Jobs bei den folgenden Tech- und anderen Unternehmen bekommen:
              </h2>
              <CompanyLogos />
            </Col>
          </Row>
          <Spacer />
          <BigCallToAction />
          <Spacer />
          <AsFeaturedSection />
          <Row>
            <Col sm={10} smOffset={1} xs={12}>
              <h2 className='medium-heading'>Zertifizierung:</h2>
              <ul>
                {superBlocks.map((superBlock, i) => (
                  <li className={'superblock'} key={i}>
                    <Link state={{ superBlock: superBlock }} to={`/learn`}>
                      <h2 className='medium-heading'>{superBlock}</h2>
                    </Link>
                  </li>
                ))}
              </ul>
              <Spacer />
              <h2 className='medium-heading'>Zusätzliche Lernmöglichkeiten:</h2>
              <ul>
                <li>
                  <Link state={{ superBlock: interviewPrep }} to={`/learn`}>
                    <h2 className='medium-heading'>{interviewPrep}</h2>
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
          <Spacer />
        </Grid>
      </main>
    </Fragment>
  );
};

Landing.displayName = 'Landing';
Landing.propTypes = propTypes;
export default Landing;
