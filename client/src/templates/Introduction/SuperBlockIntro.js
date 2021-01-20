import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { uniq } from 'lodash';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { withTranslation } from 'react-i18next';
import { Row, Col } from '@freecodecamp/react-bootstrap';

import Login from '../../components/Header/components/Login';
import Map from '../../components/Map';
import CertChallenge from './components/CertChallenge';
import SuperBlockIntro from './components/SuperBlockIntro';
import { dasherize } from '../../../../utils/slugs';
import Block from './components/Block';
import { FullWidthRow, Spacer } from '../../components/helpers';
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
  constructor(props) {
    super(props);
    this.elementRef = React.createRef();
  }

  componentDidMount() {
    this.initializeExpandedState();
    this.scrollToBlock();
  }

  componentDidUpdate() {
    this.scrollToBlock();
  }

  scrollToBlock() {
    if (this.elementRef.current) {
      setTimeout(() => {
        const scrollTo = this.elementRef.current.offsetTop;

        window.scrollTo({ top: scrollTo, left: 0, behavior: 'smooth' });
      }, 300);
    }
  }

  getChosenBlock(forScrolling) {
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

    return forScrolling ? 'top' : edge.node.block;
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
      fetchState: { pending, complete },
      isSignedIn,
      t
    } = this.props;

    const superBlockDashedName = dasherize(superBlock);

    const nodesForSuperBlock = edges.map(({ node }) => node);
    const blockDashedNames = uniq(nodesForSuperBlock.map(({ block }) => block));

    const i18nSuperBlock = t(`intro:${superBlockDashedName}.title`);

    let blockToScrollTo;
    if (!pending && complete) {
      blockToScrollTo = this.getChosenBlock(true);
    }

    return (
      <>
        <Helmet>
          <title>{i18nSuperBlock} | freeCodeCamp.org</title>
        </Helmet>
        <FullWidthRow
          className='overflow-fix'
          ref={blockToScrollTo === 'top' ? this.elementRef : null}
        >
          <Spacer size={2} />
          <SuperBlockIntro superBlock={superBlock} />
          <Spacer size={2} />
          <h2 className='text-center'>{t(`intro:misc-text.courses`)}</h2>
          <Spacer />
          <div className='block-ui'>
            {blockDashedNames.map(blockDashedName => (
              <div
                key={blockDashedName}
                ref={
                  blockDashedName === blockToScrollTo ? this.elementRef : null
                }
              >
                <Block
                  blockDashedName={blockDashedName}
                  challenges={nodesForSuperBlock.filter(
                    node => node.block === blockDashedName
                  )}
                  superBlockDashedName={superBlockDashedName}
                />
              </div>
            ))}
            {superBlock !== 'Coding Interview Prep' && (
              <div>
                <CertChallenge superBlock={superBlock} />
                <Spacer size={2} />
              </div>
            )}
          </div>
          {!isSignedIn && (
            <Row>
              <Col sm={10} smOffset={1} xs={12}>
                <Login block={true}>{t('buttons.logged-out-cta-btn')}</Login>
                <Spacer />
              </Col>
            </Row>
          )}
          <h2 className='text-center' style={{ whiteSpace: 'pre-line' }}>
            {t(`intro:misc-text.browse-other`)}
          </h2>
          <Spacer />
          <Map currentSuperBlock={superBlock} />
          <Spacer size={2} />
        </FullWidthRow>
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
        }
      }
    }
  }
`;
