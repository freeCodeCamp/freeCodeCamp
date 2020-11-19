import React from 'react';
import { Link, Spacer } from '../../helpers';
import { Col } from '@freecodecamp/react-bootstrap';
import { forumLocation } from '../../../../config/env.json';
import { Trans } from 'gatsby-plugin-react-i18next';

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
      <strong>
        <Trans>learn.read-this.heading</Trans>
      </strong>
      <Spacer />
      <p>
        <Trans>learn.read-this.p1</Trans>
      </p>
      <p>
        <Trans>learn.read-this.p2</Trans>
      </p>
      <p>
        <Trans>learn.read-this.p3</Trans>
      </p>
      <p>
        <Trans>learn.read-this.p4</Trans>
      </p>
      <p>
        <Trans>learn.read-this.p5</Trans>
      </p>
      <p>
        <Trans>learn.read-this.p6</Trans>
      </p>
      <p>
        <Trans>learn.read-this.p7</Trans>
      </p>
      <p>
        <Trans>learn.read-this.p8</Trans>
      </p>
      <p>
        <Trans>learn.read-this.p9</Trans>{' '}
        <Link className='inline' to='https://youtube.com/freecodecamp'>
          <Trans>learn.read-this.p9-link</Trans>
        </Link>
        .
      </p>
      <p>
        <Trans>learn.read-this.p10</Trans>
      </p>
      <p>
        <Trans>learn.read-this.p11</Trans>{' '}
        <Link className='inline' to={forumLocation}>
          <Trans>learn.read-this.p11-link</Trans>
        </Link>
        .
      </p>
      <p>
        <Trans>learn.read-this.p12</Trans>
      </p>
    </Col>
  );
}

IntroDescription.displayName = 'IntroDescription';

export default IntroDescription;
