import React from 'react';
import { Link, Spacer } from '../../helpers';
import { Col } from '@freecodecamp/react-bootstrap';
import { forumLocation } from '../../../../config/env.json';

import '../intro.css';

function IntroDescription() {
  return (
    <Col
      className='intro-description'
      md={8}
      mdOffset={2}
      sm={10}
      smOffset={1}
      xs={12}
    >
      <strong>Please slow down and read this.</strong>
      <Spacer />
      <p>freeCodeCamp is a proven path to your first software developer job.</p>
      <p>
        More than 40,000 people have gotten developer jobs after completing this
        – including at big companies like Google and Microsoft.
      </p>
      <p>
        If you are new to programming, we recommend you start at the beginning
        and earn these certifications in order.
      </p>
      <p>
        To earn each certification, build its 5 required projects and get all
        their tests to pass.
      </p>
      <p>
        You can add these certifications to your résumé or LinkedIn. But more
        important than the certifications is the practice you get along the way.
      </p>
      <p>If you feel overwhelmed, that is normal. Programming is hard.</p>
      <p>Practice is the key. Practice, practice, practice.</p>
      <p>
        And this curriculum will give you thousands of hours of hands-on
        programming practice.
      </p>
      <p>
        And if you want to learn more math and computer science theory, we also
        have thousands of hours of video courses on{' '}
        <Link className='inline' to='https://youtube.com/freecodecamp'>
          freeCodeCamp's YouTube channel
        </Link>
        .
      </p>
      <p>
        If you want to get a developer job or freelance clients, programming
        skills will be just part of the puzzle. You also need to build your
        personal network and your reputation as a developer.
      </p>
      <p>
        You can do this on Twitter and GitHub, and also on{' '}
        <Link className='inline' to={forumLocation}>
          the freeCodeCamp forum
        </Link>
        .
      </p>
      <p>Happy coding.</p>
    </Col>
  );
}

IntroDescription.displayName = 'IntroDescription';

export default IntroDescription;
