import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { Grid, Col, Row } from '@freecodecamp/react-bootstrap';

import { Link, Spacer } from '../components/helpers';

import './common-pages.css';

/* eslint-disable max-len */
const AboutPage = () => {
  return (
    <Fragment>
      <Helmet title='About the freeCodeCamp community | freeCodeCamp.org' />
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
            <h2 className='text-center'>Frequently Asked Questions</h2>
            <hr />
            <h4>What is freeCodeCamp?</h4>
            <p>
              We’re a community that helps you learn to code, then get
              experience by contributing to open source projects used by
              nonprofits.
            </p>
            <h4>How can you help me learn to code?</h4>
            <p>
              You'll learn to code by completing coding challenges and building
              projects. You'll also earn verified certifications along the way.
              We also encourage you to join a study group in your city so you
              can code in-person with other people.
            </p>
            <h4>Is freeCodeCamp really free?</h4>
            <p>Yes. Every aspect of freeCodeCamp is 100% free.</p>
            <h4>Can freeCodeCamp help me get a job as a software developer?</h4>
            <p>
              Yes. Every year, thousands of people who join the freeCodeCamp
              community get their first software developer job. If you're
              curious, you can{' '}
              <Link to='https://www.linkedin.com/school/4831032/alumni/'>
                browse our alumni network on LinkedIn here
              </Link>
              .
            </p>
            <h4>How big is the freeCodeCamp community?</h4>
            <p>
              If you add up all the people who use our learning platform, read
              our <Link to='/news'>news articles</Link>, watch our{' '}
              <Link to='https://youtube.com/freecodecamp'>YouTube channel</Link>
              , and post on{' '}
              <Link external={true} to='/forum'>
                our forum
              </Link>
              , each month we help millions of people learn about coding and
              technology.
            </p>
            <h4>Is freeCodeCamp a nonprofit?</h4>
            <p>
              Yes, we are a 501(c)(3){' '}
              <Link to='/donate'>donor-supported public charity</Link>. You can{' '}
              <Link to='https://s3.amazonaws.com/freecodecamp/Free+Code+Camp+Inc+IRS+Determination+Letter.pdf'>
                download our IRS Determination Letter here
              </Link>
              .
            </p>
            <h4>
              Does freeCodeCamp accept donations in Bitcoin or other crypto
              currencies?
            </h4>
            <p>
              Yes. Our cryptographically signed wallet details are{' '}
              <Link to='https://twitter.com/freeCodeCamp/status/939512108449959936'>
                here
              </Link>
              .
            </p>
            <h4>
              How long will it take me to finish each of freeCodeCamp's
              certifications?
            </h4>
            <p>
              Each certification takes around 300 hours of dedicated learning.
              Some people may take longer. These certifications are completely
              self-paced, so take as long as you need.
            </p>
            <h4>Is freeCodeCamp a coding bootcamp?</h4>
            <p>
              No. A lot of coding bootcamps use freeCodeCamp as part of their
              curriculum, though.
            </p>
            <h4>Is freeCodeCamp a replacement for a 4-year degree?</h4>
            <p>
              No. Please don’t drop out of college just to pursue freeCodeCamp.
              You can pursue both concurrently. Even though you don’t need a
              4-year degree to work as a software developer, it still helps a
              lot.
            </p>
            <h4>Should I complete all of the coding challenges in order?</h4>
            <p>
              We’ve put a lot of thought into how we introduce concepts. But
              you’re free to jump around.
            </p>
            <h4>Do I have to use CodePen for the front end projects?</h4>
            <p>
              As long as your code is publicly viewable somewhere on the
              internet, and you have a live demo, you can use whatever tools you
              want.
            </p>
            <h4>How did freeCodeCamp get started?</h4>
            <p>
              <Link to='https://www.twitter.com/ossia'>Quincy</Link> started the
              freeCodeCamp community in 2014. He is now just one of thousands of
              active contributors.
            </p>
            <h4>
              I'm a teacher. Is freeCodeCamp an appropriate resource for my
              className?
            </h4>
            <p>
              Yes. Many high school, college, and adult ed programs incorporate
              freeCodeCamp into their coursework. We're open source, so no
              license or special permission from us is necessary. We're even
              building special tools for teachers.
            </p>
            <h4>
              Can I live-stream myself working on freeCodeCamp challenges and
              projects? Can I blog about how I solved them?
            </h4>
            <p>
              Yes. We welcome this. Also, don't be shy about "spoiling" projects
              or challenges. The solutions to all of these challenges are
              already all over the internet.
            </p>
            <h4>
              Can I create apps or tools based around the freeCodeCamp community
              and platform?
            </h4>
            <p>
              Yes. freeCodeCamp is open source (BSD-3 license), and most
              non-sensitive freeCodeCamp data is publicly available. But you
              must make it clear that you don't represent freeCodeCamp itself,
              and that your project is not officially endorsed by freeCodeCamp.
            </p>
            <h4>Does freeCodeCamp have a mobile app?</h4>
            <p>
              You can learn on the go by listening to the{' '}
              <Link to='https://podcast.freecodecamp.org'>
                freeCodeCamp Podcast
              </Link>{' '}
              or watching{' '}
              <Link to='https://youtube.com/freecodecamp'>
                freeCodeCamp's YouTube channel
              </Link>
              . And if you want a mobile app designed specifically for learning
              to code, we recommend Grasshopper. It's free and designed by a
              freeCodeCamp contributor and her team. You can download it on{' '}
              <Link to='https://itunes.apple.com/us/app/id1354133284'>iOS</Link>{' '}
              or{' '}
              <Link to='https://play.google.com/store/apps/details?id=com.area120.grasshopper&hl=en'>
                Android
              </Link>
              .
            </p>
            <h4>Can I get a job at freeCodeCamp?</h4>
            <p>
              We're a small donor-supported nonprofit. We've hired several
              prominent contributors from within the freeCodeCamp community, but
              you're much more likely to get a job at{' '}
              <Link to='https://www.linkedin.com/school/free-code-camp/alumni/'>
                one of the hundreds of companies
              </Link>{' '}
              where freeCodeCamp alumni work.
            </p>
            <h4>Can my company advertise on freeCodeCamp?</h4>
            <p>We don’t show ads.</p>
            <h4>How can I support the freeCodeCamp community?</h4>
            <p>
              You can{' '}
              <Link to='/donate'>
                set up a monthly donation to our nonprofit that you can afford
              </Link>
              .
            </p>
            <h4>
              Where can I get technical support for using the freeCodeCamp.org
              platform?
            </h4>
            <p>
              Here are{' '}
              <Link to='/support'>
                answers to common technical support questions
              </Link>
              .
            </p>
          </Col>
        </Row>
        <Spacer size={2} />
      </Grid>
    </Fragment>
  );
};
/* eslint-enable max-len */

AboutPage.displayName = 'AboutPage';

export default AboutPage;
