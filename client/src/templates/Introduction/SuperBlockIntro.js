import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { uniq } from 'lodash';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { withTranslation } from 'react-i18next';
import { Grid, Row, Col } from '@freecodecamp/react-bootstrap';

import Login from '../../components/Header/components/Login';
import Map from '../../components/Map';
import CertChallenge from './components/CertChallenge';
import SuperBlockIntro from './components/SuperBlockIntro';
import { dasherize } from '../../../../utils/slugs';
import Block from './components/Block';
import { Spacer, Link } from '../../components/helpers';
import {
  currentChallengeIdSelector,
  userFetchStateSelector,
  isSignedInSelector
} from '../../redux';
import { resetExpansion, toggleBlock } from './redux';
import { MarkdownRemark, AllChallengeNode } from '../../redux/propTypes';

import './intro.css';

const propTypes = {
  currentChallengeId: PropTypes.string,
  data: PropTypes.shape({
    markdownRemark: MarkdownRemark,
    allChallengeNode: AllChallengeNode
  }),
  expandedState: PropTypes.object,
  fetchState: PropTypes.shape({
    pending: PropTypes.bool,
    complete: PropTypes.bool,
    errored: PropTypes.bool
  }),
  isSignedIn: PropTypes.bool,
  location: PropTypes.shape({
    state: PropTypes.shape({
      breadcrumbBlockClick: PropTypes.string
    })
  }),
  resetExpansion: PropTypes.func,
  t: PropTypes.func,
  toggleBlock: PropTypes.func
};

const mapStateToProps = state => {
  return createSelector(
    currentChallengeIdSelector,
    isSignedInSelector,
    userFetchStateSelector,
    (currentChallengeId, isSignedIn, fetchState) => ({
      currentChallengeId,
      isSignedIn,
      fetchState
    })
  )(state);
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { resetExpansion, toggleBlock: b => toggleBlock(b) },
    dispatch
  );

export class SuperBlockIntroductionPage extends Component {
  componentDidMount() {
    this.initializeExpandedState();
  }

  getChosenBlock() {
    const {
      data: {
        allChallengeNode: { edges }
      },
      isSignedIn,
      currentChallengeId,
      location
    } = this.props;

    // if coming from breadcrumb click
    if (location.state && location.state.breadcrumbBlockClick)
      return dasherize(location.state.breadcrumbBlockClick);

    let edge = edges[0];

    if (isSignedIn) {
      // see if currentChallenge is in this superBlock
      const currentChallengeEdge = edges.find(
        edge => edge.node.id === currentChallengeId
      );

      return currentChallengeEdge
        ? currentChallengeEdge.node.block
        : edge.node.block;
    }

    return edge.node.block;
  }

  initializeExpandedState() {
    const { resetExpansion, toggleBlock } = this.props;

    resetExpansion();
    return toggleBlock(this.getChosenBlock());
  }

  render() {
    const {
      data: {
        markdownRemark: {
          frontmatter: { superBlock }
        },
        allChallengeNode: { edges }
      },
      isSignedIn,
      t
    } = this.props;

    const superBlockDashedName = dasherize(superBlock);

    const nodesForSuperBlock = edges.map(({ node }) => node);
    const blockDashedNames = uniq(nodesForSuperBlock.map(({ block }) => block));

    const superBlockIntroObj = t(`intro:${superBlockDashedName}`);
    const { title: i18nSuperBlock, isTranslated } = superBlockIntroObj;
    const translationBannerText = t(`intro:misc-text.translation-banner`);
    const translationBannerHelpText = t(`intro:misc-text.translation-help`);

    return (
      <>
        <Helmet>
          <title>{i18nSuperBlock} | freeCodeCamp.org</title>
        </Helmet>
        {isTranslated ? (
          ''
        ) : (
          <Link
            className='translation-banner'
            external={true}
            to='https://contribute.freecodecamp.org/#/how-to-translate-files'
          >
            <p>
              {translationBannerText} <span>{translationBannerHelpText}</span>.
            </p>
          </Link>
        )}
        <Grid>
          <Row className='super-block-intro-page'>
            <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
              <Spacer size={isTranslated ? 2 : 3} />
              <SuperBlockIntro superBlock={superBlock} />
              <Spacer size={2} />
              <h2 className='text-center big-subheading'>
                {t(`intro:misc-text.courses`)}
              </h2>
              <Spacer />
              <div className='block-ui'>
                {blockDashedNames.map(blockDashedName => (
                  <div key={blockDashedName}>
                    <Block
                      blockDashedName={blockDashedName}
                      challenges={nodesForSuperBlock.filter(
                        node => node.block === blockDashedName
                      )}
                      superBlockDashedName={superBlockDashedName}
                    />
                    {blockDashedName !== 'project-euler' ? (
                      <Spacer size={2} />
                    ) : null}
                  </div>
                ))}
                {superBlock !== 'Coding Interview Prep' && (
                  <div>
                    <CertChallenge superBlock={superBlock} />
                  </div>
                )}
              </div>
              {!isSignedIn && (
                <div>
                  <Spacer size={2} />
                  <Login block={true}>{t('buttons.logged-out-cta-btn')}</Login>
                </div>
              )}
              <Spacer size={2} />
              <h3
                className='text-center big-block-title'
                style={{ whiteSpace: 'pre-line' }}
              >
                {t(`intro:misc-text.browse-other`)}
              </h3>
              <Spacer />
              <Map currentSuperBlock={superBlock} />
              <Spacer size={2} />
            </Col>
          </Row>
        </Grid>
      </>
    );
  }
}

SuperBlockIntroductionPage.displayName = 'SuperBlockIntroductionPage';
SuperBlockIntroductionPage.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(SuperBlockIntroductionPage));

export const query = graphql`
  query SuperBlockIntroPageBySlug($slug: String!, $superBlock: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        superBlock
      }
    }
    allChallengeNode(
      sort: { fields: [superOrder, order, challengeOrder] }
      filter: { superBlock: { eq: $superBlock } }
    ) {
      edges {
        node {
          fields {
            slug
            blockName
          }
          id
          block
          challengeType
          title
          order
          superBlock
          dashedName
          translationPending
        }
      }
    }
  }
`;
