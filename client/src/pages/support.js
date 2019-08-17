import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { Grid, Col, Row } from '@freecodecamp/react-bootstrap';

import { Link, Spacer } from '../components/helpers';

import './common-pages.css';

/* eslint-disable max-len */
const SupportPage = () => {
  return (
    <Fragment>
      <Helmet title='Support | freeCodeCamp.org' />
      <Spacer />
      <Grid>
        <Row>
          <Col
            className='questions'
            md={6}
            mdOffset={3}
            sm={10}
            smOffset={1}
            xs={12}
          >
            <h2 className='text-center'>Common Technical Support Questions</h2>
            <hr />
            <h4 id='faq_progress'>
              I just signed into my account and I don't see any of my past
              progress.
            </h4>
            <p>
              You have created a duplicate account.{' '}
              <Link to='/settings'>Sign out of your account</Link> and try
              signing in using a different service (Google, GitHub, Facebook)
              that you may have used to in the past. Or try signing in using an
              email address you may have used on freeCodeCamp in the past.
            </p>
            <h4 id='faq_donation'>
              I set up a monthly donation, but I need to update or cancel the
              monthly recurrence. How can I do this?
            </h4>
            <p>
              We are working on a dashboard for you to be able to update or
              cancel your donations right from your settings page. In the
              meantime, if you need to update or cancel your monthly donation,
              forward an invoice you received in your email to{' '}
              {
                /* prettier-ignore */
              }
              <a href='mailto:team@freecodecamp.org'>
                team@freecodecamp.org
              </a>{' '}
              and tell us what you'd like us to do, and we'll take care of it
              for you in our database.
            </p>
            <h4 id='faq_solutions'>How can I view my past solutions?</h4>
            <p>
              We have archived the millions of solutions from prior to June
              2018, and are working on a sustainable way to host them and future
              solutions.
            </p>
            <p>
              You can meanwhile use the download my solution button to view and
              copy the solution after you complete a challenge, from the local
              copy on your browser.
            </p>
            <h4 id='faq_streak'>My streak on my portfolio is inaccurate.</h4>
            <p>
              We are working on fixing a number of issues with the streaks on
              freeCodeCamp. Thanks for your patience.
            </p>
            <h4>
              When I go to <Link to='/learn'>Learning Curriculum</Link> the
              challenges are completely blank.
            </h4>
            <p>
              Do a hard refresh of the website by pressing control+shift+r in
              Windows or command+shift+r on Mac/Linux. If that doesn't work, you
              may need to clear your cookies. Here is{' '}
              <Link external={true} to='/forum/t/205075'>
                how to clear specific cookies
              </Link>
              .
            </p>
            <h4>
              One of my freeCodeCamp challenges freezes and crashes when I open
              it.
            </h4>
            <p>
              This is caused by an infinite loop in your code editor.{' '}
              <Link external={true} to='/forum/t/19550'>
                Here's how to fix this
              </Link>
              .
            </p>
            <h4>I cannot pass a challenge, but I think my code is correct</h4>
            <p>
              Some browser extensions can interfere with challenge tests. If you
              are using any, try disabling them and running the tests again. If
              the problem remains, click the challenge's 'Ask for Help' button
              to post on the forum. You will need to create a forum account if
              you don't already have one.
            </p>
            <h4>I have a support question that isn't answered here.</h4>
            <p>
              You can ask for help on our forum, and the freeCodeCamp volunteer
              contributor team will do their best to help you. Note that for
              privacy and security reasons, they don't have access to your
              account in the freeCodeCamp database. Also note that you will need
              to create a forum account if you don't already have one.{' '}
              <Link external={true} to='/forum/new-topic?category=support'>
                Click here to ask your support question
              </Link>
              .
            </p>
          </Col>
        </Row>
      </Grid>
    </Fragment>
  );
};
/* eslint-enable max-len */

SupportPage.displayName = 'SupportPage';

export default SupportPage;
