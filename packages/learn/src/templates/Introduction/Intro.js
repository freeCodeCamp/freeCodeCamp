/* global graphql */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link, { navigateTo } from 'gatsby-link';
import Helmet from 'react-helmet';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';

import FullWidthRow from '../../components/util/FullWidthRow';
import ButtonSpacer from '../../components/util/ButtonSpacer';
import { MarkdownRemark, AllChallengeNode } from '../../redux/propTypes';

import './intro.css';

const propTypes = {
  data: PropTypes.shape({
    markdownRemark: MarkdownRemark,
    allChallengeNode: AllChallengeNode
  })
};

function renderMenuItems({ edges = [] }) {
  return edges.map(({ node }) => node).map(({ title, fields: { slug } }) => (
    <Link key={'intro-' + slug} to={slug}>
      <ListGroupItem>{title}</ListGroupItem>
    </Link>
  ));
}

function handleCurriculumClick() {
  return navigateTo('/');
}

function IntroductionPage({ data: { markdownRemark, allChallengeNode } }) {
  const { html, frontmatter: { block } } = markdownRemark;
  const firstLesson = allChallengeNode && allChallengeNode.edges[0].node;
  const firstLessonPath = firstLesson
    ? firstLesson.fields.slug
    : '/strange-place';
  return (
    <Fragment>
      <Helmet>
        <title>{block} | freeCodeCamp</title>
      </Helmet>
      <FullWidthRow>
        <div
          className='intro-layout'
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </FullWidthRow>
      <FullWidthRow>
        <Link className='btn btn-lg btn-primary btn-block' to={firstLessonPath}>
          Go to the first lesson
        </Link>
        <ButtonSpacer />
        <Button
          block={true}
          bsSize='lg'
          className='btn-primary-invert'
          onClick={handleCurriculumClick}
          >
          View the curriculum
        </Button>
        <ButtonSpacer />
        <hr />
      </FullWidthRow>
      <FullWidthRow>
        <h2 className='intro-toc-title'>Upcoming Lessons</h2>
        <ListGroup className='intro-toc'>
          {allChallengeNode ? renderMenuItems(allChallengeNode) : null}
        </ListGroup>
      </FullWidthRow>
    </Fragment>
  );
}

IntroductionPage.displayName = 'IntroductionPage';
IntroductionPage.propTypes = propTypes;

export default IntroductionPage;

export const query = graphql`
  query IntroPageBySlug($slug: String!, $block: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        block
      }
      html
    }
    allChallengeNode(
      filter: { block: { eq: $block } }
      sort: { fields: [superOrder, order, suborder] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          title
        }
      }
    }
  }
`;
