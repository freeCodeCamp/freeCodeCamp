import React from 'react';
import PropTypes from 'prop-types';
import { Link, Spacer } from '../../../components/helpers';

const propTypes = {
  githubPath: PropTypes.string
};

const GuideFooter = ({ githubPath }) => (
  <>
    <Spacer />
    <hr />
    <h4>Contributing to the Guide</h4>
    <p>
      This open source guide is curated by thousands of contributors. You can
      help by researching, writing and updating these articles. It is an easy
      and fun way to get started with contributing to open source.
    </p>
    <ul>
      <li>
        <Link to='https://github.com/freeCodeCamp/freeCodeCamp/blob/master/CONTRIBUTING.md#research-write-and-update-our-guide-articles'>
          Follow our contributing guidelines for working on guide articles
        </Link>
        .
      </li>
      <li>
        <Link to={githubPath}>Edit this article on GitHub</Link>.
      </li>
    </ul>
    <Spacer />
  </>
);

GuideFooter.displayName = 'GuideFooter';
GuideFooter.propTypes = propTypes;

export default GuideFooter;
