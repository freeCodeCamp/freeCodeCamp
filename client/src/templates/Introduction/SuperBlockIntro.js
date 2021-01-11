import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, navigate } from 'gatsby';
import { uniq } from 'lodash';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { withTranslation } from 'react-i18next';
import { Row, Col } from '@freecodecamp/react-bootstrap';

import Login from '../../components/Header/components/Login';
import Map from '../../components/Map';
import CertificationIcon from '../../assets/icons/CertificationIcon';
import GreenPass from '../../assets/icons/GreenPass';
import GreenNotCompleted from '../../assets/icons/GreenNotCompleted';
import { dasherize } from '../../../../utils/slugs';
import Block from './components/Block';
import { FullWidthRow, Spacer } from '../../components/helpers';
import {
  currentChallengeIdSelector,
  userFetchStateSelector,
  isSignedInSelector,
  userSelector
} from '../../redux';
import { resetExpansion, toggleBlock } from './redux';
import { MarkdownRemark, AllChallengeNode, User } from '../../redux/propTypes';

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
  toggleBlock: PropTypes.func,
  user: User
};

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
      user: {
        is2018DataVisCert,
        isApisMicroservicesCert,
        isFrontEndLibsCert,
        isQaCertV7,
        isInfosecCertV7,
        isJsAlgoDataStructCert,
        isRespWebDesignCert,
        isSciCompPyCertV7,
        isDataAnalysisPyCertV7,
        isMachineLearningPyCertV7,
        username
      },
      t
    } = this.props;

    const isCertified = {
      'Responsive Web Design': isRespWebDesignCert,
      'JavaScript Algorithms and Data Structures': isJsAlgoDataStructCert,
      'Front End Libraries': isFrontEndLibsCert,
      'Data Visualization': is2018DataVisCert,
      'APIs and Microservices': isApisMicroservicesCert,
      'Quality Assurance': isQaCertV7,
      'Information Security': isInfosecCertV7,
      'Scientific Computing with Python': isSciCompPyCertV7,
      'Data Analysis with Python': isDataAnalysisPyCertV7,
      'Machine Learning with Python': isMachineLearningPyCertV7
    };

    const superBlockDashedName = dasherize(superBlock);
    const certLocation = `/certification/${username}/${superBlockDashedName}`;

    const certIconStyle = { height: '40px', width: '40px' };
    const nodesForSuperBlock = edges.map(({ node }) => node);
    const blockDashedNames = uniq(nodesForSuperBlock.map(({ block }) => block));

    const certificationText = t(`intro:misc-text.certification`);

    const superBlockIntroObj = t(`intro:${dasherize(superBlock)}`);
    const {
      title: superBlockTitle,
      image: superBlockImage,
      intro: superBlockIntroText
    } = superBlockIntroObj;
    const miscTextObj = t(`intro:misc-text`);
    const {
      'browse-other': browseOtherText,
      tutorials: tutorialsText
    } = miscTextObj;

    let blockToScrollTo;
    if (!pending && complete) {
      blockToScrollTo = this.getChosenBlock(true);
      this.initializeExpandedState();
    }

    return (
      <Fragment>
        <Helmet>
          <title>{superBlockTitle} | freeCodeCamp.org</title>
        </Helmet>
        <FullWidthRow
          className='overflow-fix'
          ref={blockToScrollTo === 'top' ? this.elementRef : null}
        >
          <Spacer size={2} />
          <h1 className='text-center'>{superBlockTitle}</h1>
          <Spacer />
          <div style={{ margin: 'auto', maxWidth: '500px' }}>
            <img
              alt='building a website'
              src={superBlockImage}
              style={{
                backgroundColor: '#f5f6f7',
                padding: '15px',
                width: '100%'
              }}
            />
          </div>
          <Spacer />
          {superBlockIntroText.map((str, i) => (
            <p key={i}>{str}</p>
          ))}
          <Spacer size={2} />
          <h2 className='text-center'>{tutorialsText}</h2>
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
              <div className='block'>
                <button
                  className='map-cert-title'
                  onClick={
                    isCertified[superBlock]
                      ? () => navigate(certLocation)
                      : null
                  }
                >
                  <CertificationIcon />
                  <h3>
                    {superBlockTitle} {certificationText}
                  </h3>
                  <div className='map-title-completed-big'>
                    <span>
                      {isCertified[superBlock] ? (
                        <GreenPass style={certIconStyle} />
                      ) : (
                        <GreenNotCompleted style={certIconStyle} />
                      )}
                    </span>
                  </div>
                </button>
              </div>
            )}
          </div>
          {!isSignedIn && (
            <Row>
              <Col sm={8} smOffset={2} xs={12}>
                <Spacer size={2} />
                <Login block={true}>{t('buttons.logged-out-cta-btn')}</Login>
              </Col>
            </Row>
          )}
          <Spacer size={2} />
          <h2 className='text-center' style={{ whiteSpace: 'pre-line' }}>
            {browseOtherText}
          </h2>
          <Spacer />
          <Map currentSuperBlock={superBlock} />
          <Spacer size={2} />
        </FullWidthRow>
      </Fragment>
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
