import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { uniq, find } from 'lodash';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { withTranslation } from 'react-i18next';
import Map from '../../components/Map';

import { dasherize } from '../../../../utils/slugs';
import Block from '../../components/Map/components/Block';
import { FullWidthRow, Spacer } from '../../components/helpers';
import { currentChallengeIdSelector, isSignedInSelector } from '../../redux';
import { resetExpansion, toggleBlock } from '../../components/Map/redux';
import {
  MarkdownRemark,
  AllChallengeNode,
  AllMarkdownRemark
} from '../../redux/propTypes';

import './intro.css';

const propTypes = {
  currentChallengeId: PropTypes.string,
  data: PropTypes.shape({
    markdownRemark: MarkdownRemark,
    allChallengeNode: AllChallengeNode,
    allMarkdownRemark: AllMarkdownRemark
  }),
  expandedState: PropTypes.object,
  isSignedIn: PropTypes.bool,
  resetExpansion: PropTypes.func,
  t: PropTypes.func,
  toggleBlock: PropTypes.func
};

const mapStateToProps = state => {
  return createSelector(
    currentChallengeIdSelector,
    isSignedInSelector,
    (currentChallengeId, isSignedIn) => ({
      currentChallengeId,
      isSignedIn
    })
  )(state);
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { resetExpansion, toggleBlock: b => toggleBlock(b) },
    dispatch
  );

function renderBlock(nodesForSuperBlock, introNodes) {
  // since the nodes have been filtered based on isHidden, any blocks whose
  // nodes have been entirely removed will not appear in this array.
  const blockDashedNames = uniq(nodesForSuperBlock.map(({ block }) => block));

  // render all non-empty blocks
  return (
    <ul className='block'>
      {blockDashedNames.map(blockDashedName => (
        <Block
          blockDashedName={blockDashedName}
          challenges={nodesForSuperBlock.filter(
            node => node.block === blockDashedName
          )}
          intro={find(
            introNodes,
            ({ frontmatter: { block } }) =>
              block
                .toLowerCase()
                .split(' ')
                .join('-') === blockDashedName
          )}
          key={blockDashedName}
        />
      ))}
    </ul>
  );
}

export class SuperBlockIntroductionPage extends Component {
  constructor(props) {
    super(props);
    this.initializeExpandedState();
  }

  initializeExpandedState() {
    const {
      resetExpansion,
      data: {
        allChallengeNode: { edges }
      },
      isSignedIn,
      currentChallengeId,
      toggleBlock
    } = this.props;

    resetExpansion();

    let edge;

    if (isSignedIn) {
      // see if currentChallenge is in this superBlock
      edge = edges.find(edge => edge.node.id === currentChallengeId);
    }

    // else, find first block in superBlock
    let i = 0;
    while (!edge && i < 20) {
      // eslint-disable-next-line no-loop-func
      edge = edges.find(edge => edge.node.order === i);
      i++;
    }

    if (edge) toggleBlock(edge.node.block);
  }

  render() {
    const {
      data: {
        markdownRemark: {
          frontmatter: { superBlock }
        },
        allChallengeNode: { edges },
        allMarkdownRemark: { edges: mdEdges }
      },
      t
    } = this.props;
    const introTextArr = t(
      `intro:${dasherize(superBlock)}.superblock.intro-text`
    );

    return (
      <Fragment>
        <Helmet>
          <title>{superBlock} | freeCodeCamp.org</title>
        </Helmet>
        <FullWidthRow className='overflow-fix'>
          <Spacer size={2} />
          <h1 className='text-center'>
            {superBlock}
            {superBlock !== 'Coding Interview Prep' ? ' Certification' : ''}
          </h1>
          <Spacer />
          <div style={{ margin: 'auto', maxWidth: '500px' }}>
            <img
              alt='building a website'
              src={t(`intro:${dasherize(superBlock)}.superblock.image`)}
              style={{
                backgroundColor: '#f5f6f7',
                padding: '15px',
                width: '100%'
              }}
            />
          </div>
          <Spacer />
          {introTextArr.map((str, i) => (
            <p key={i}>{str}</p>
          ))}
          <Spacer size={2} />
          <h2 className='text-center'>Learning</h2>
          <div className='block-ui'>
            {renderBlock(
              edges.map(({ node }) => node),
              mdEdges.map(({ node }) => node)
            )}
          </div>
          <Spacer size={2} />
          <h2 className='text-center'>Try our other sections</h2>
          <Spacer />
          <Map currentSuperBlock={superBlock} />
          <Spacer size={2} />
        </FullWidthRow>
      </Fragment>
    );
  }
}

const TranslatedSuperBlockIntroductionPage = withTranslation()(
  SuperBlockIntroductionPage
);

SuperBlockIntroductionPage.displayName = 'SuperBlockIntroductionPage';
SuperBlockIntroductionPage.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TranslatedSuperBlockIntroductionPage);

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
    allMarkdownRemark(
      filter: {
        frontmatter: { block: { ne: null }, superBlock: { eq: $superBlock } }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            block
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
