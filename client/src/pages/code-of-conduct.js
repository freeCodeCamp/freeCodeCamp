import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { Grid, Col, Row } from '@freecodecamp/react-bootstrap';

import { Link, Spacer } from '../components/helpers';

const CodeOfConductPage = () => {
  return (
    <Fragment>
      <Helmet title='Code of Conduct | freeCodeCamp.org' />
      <Spacer />
      <Grid>
        <Row>
          <Col md={6} mdOffset={3} sm={10} smOffset={1} xs={12}>
            <h2 className='text-center'>Code of Conduct</h2>
            <hr />
            <p>
              freeCodeCamp is a friendly place to learn to code. We’re committed
              to keeping it that way.
            </p>
            <p>
              By using freeCodeCamp, you agree that you'll follow this code of
              conduct.
            </p>
            <p>In short: Be nice. No harassment, trolling, or spamming.</p>
            <ul style={{ 'margin-top': '0', 'margin-bottom': '10px' }}>
              <li>
                <strong>Harassment</strong> includes sexual language and
                imagery, deliberate intimidation, stalking, name-calling,
                unwelcome attention, libel, and any malicious hacking or social
                engineering. freeCodeCamp should be a harassment-free experience
                for everyone, regardless of gender, gender identity and
                expression, age, sexual orientation, disability, physical
                appearance, body size, race, national origin, or religion (or
                lack thereof).
              </li>
              <li>
                <strong>Trolling</strong> includes posting inflammatory comments
                to provoke an emotional response or disrupt discussions.
              </li>
              <li>
                <strong>Spamming</strong> includes posting off-topic messages to
                disrupt discussions, promoting a product, soliciting donations,
                advertising a job / internship / gig, or flooding discussions
                with files or text.
              </li>
            </ul>
            <p>
              If you see someone harass, troll, or spam anywhere in the
              freeCodeCamp community (forum, chat, YouTube, Facebook, etc.),
              notify us in the{' '}
              <Link to='https://gitter.im/freecodecamp/admin'>
                admin chat room
              </Link>{' '}
              - preferably with a screen shot of the offense. The moderator team
              will take any action we deem appropriate, up to and including
              banning the offender from freeCodeCamp.
            </p>
            <p>
              Also, no bots are allowed in the freeCodeCamp community without
              prior written permission from{' '}
              <Link to='https://gitter.im/quincylarson'>Quincy Larson</Link>.
            </p>
          </Col>
        </Row>
      </Grid>
    </Fragment>
  );
};

CodeOfConductPage.displayName = 'CodeOfConductPage';

export default CodeOfConductPage;
