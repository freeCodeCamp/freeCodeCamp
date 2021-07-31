import React, { Fragment, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { uniq } from 'lodash-es';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { withTranslation } from 'react-i18next';
import { Grid, Row, Col } from '@freecodecamp/react-bootstrap';
import { configureAnchors } from 'react-scrollable-anchor';

import Login from '../../components/Header/components/Login';
import Map from '../../components/Map';
import CertChallenge from './components/CertChallenge';
import SuperBlockIntro from './components/SuperBlockIntro';
import Block from './components/Block';
import DonateModal from '../../../../client/src/components/Donation/DonationModal';
import { Spacer } from '../../components/helpers';
import {
  currentChallengeIdSelector,
  userFetchStateSelector,
  isSignedInSelector,
  tryToShowDonationModal,
  userSelector
} from '../../redux';
import { resetExpansion, toggleBlock } from './redux';
import { MarkdownRemark, AllChallengeNode, User } from '../../redux/prop-types';

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
    hash: PropTypes.string,
    // TODO: state is sometimes a string
    state: PropTypes.shape({
      breadcrumbBlockClick: PropTypes.string
    })
  }),
  resetExpansion: PropTypes.func,
  t: PropTypes.func,
  toggleBlock: PropTypes.func,
  tryToShowDonationModal: PropTypes.func.isRequired,
  user: User
};

configureAnchors({ offset: -40, scrollDuration: 0 });

const mapStateToProps = state => {
  return createSelector(
    currentChallengeIdSelector,
    isSignedInSelector,
    userFetchStateSelector,
    userSelector,
    (currentChallengeId, isSignedIn, fetchState, user) => ({
      currentChallengeId,
      isSignedIn,
      fetchState,
      user
    })
  )(state);
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      tryToShowDonationModal,
      resetExpansion,
      toggleBlock: b => toggleBlock(b)
    },
    dispatch
  );

const SuperBlockIntroductionPage = props => {
  useEffect(() => {
    initializeExpandedState();
    props.tryToShowDonationModal();

    setTimeout(() => {
      configureAnchors({ offset: -40, scrollDuration: 400 });
    }, 0);

    return () => {
      configureAnchors({ offset: -40, scrollDuration: 0 });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getChosenBlock = () => {
    const {
      data: {
        allChallengeNode: { edges }
      },
      isSignedIn,
      currentChallengeId,
      location
    } = props;

    // if coming from breadcrumb click
    if (location.state && location.state.breadcrumbBlockClick) {
      return location.state.breadcrumbBlockClick;
    }

    // if the URL includes a hash
    if (location.hash) {
      const dashedBlock = location.hash.replace('#', '').replace('/', '');
      return dashedBlock;
    }

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
  };

  const initializeExpandedState = () => {
    const { resetExpansion, toggleBlock } = props;

    resetExpansion();
    return toggleBlock(getChosenBlock());
  };

  const {
    data: {
      markdownRemark: {
        frontmatter: { superBlock, title }
      },
      allChallengeNode: { edges }
    },
    isSignedIn,
    t,
    user
  } = props;

  const nodesForSuperBlock = edges.map(({ node }) => node);
  const blockDashedNames = uniq(nodesForSuperBlock.map(({ block }) => block));
  const i18nSuperBlock = t(`intro:${superBlock}.title`);
  const i18nTitle =
    superBlock === 'coding-interview-prep'
      ? i18nSuperBlock
      : t(`intro:misc-text.certification`, {
          cert: i18nSuperBlock
        });

  return (
    <>
      <Helmet>
        <title>{i18nTitle} | freeCodeCamp.org</title>
      </Helmet>
      <Grid>
        <Row className='super-block-intro-page'>
          <Col md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
            <Spacer size={2} />
            <SuperBlockIntro superBlock={superBlock} />
            <Spacer size={2} />
            <h2 className='text-center big-subheading'>
              {t(`intro:misc-text.courses`)}
            </h2>
            <Spacer />
            <div className='block-ui'>
              {blockDashedNames.map(blockDashedName => (
                <Fragment key={blockDashedName}>
                  <Block
                    blockDashedName={blockDashedName}
                    challenges={nodesForSuperBlock.filter(
                      node => node.block === blockDashedName
                    )}
                    superBlock={superBlock}
                  />
                  {blockDashedName !== 'project-euler' ? <Spacer /> : null}
                </Fragment>
              ))}
              {superBlock !== 'coding-interview-prep' && (
                <div>
                  <CertChallenge
                    superBlock={superBlock}
                    title={title}
                    user={user}
                  />
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
      <DonateModal location={props.location} />
    </>
  );
};

SuperBlockIntroductionPage.displayName = 'SuperBlockIntroductionPage';
SuperBlockIntroductionPage.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(memo(SuperBlockIntroductionPage)));

export const query = graphql`
  query SuperBlockIntroPageBySlug($slug: String!, $superBlock: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        superBlock
        title
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
        }
      }
    }
  }
`;
