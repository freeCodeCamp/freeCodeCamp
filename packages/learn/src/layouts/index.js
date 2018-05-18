/* global graphql */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { AllChallengeNode } from '../redux/propTypes';

import Header from '../components/Header';
import MapModal from '../components/MapModal';

import './global.css';
import 'react-reflex/styles.css';
import './layout.css';

const Layout = ({ children, data: { allChallengeNode: { edges } } }) => (
  <Fragment>
    <Helmet
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Header />
    <div className='app-wrapper'>
      <main>{children()}</main>
    </div>
    <MapModal
      nodes={edges
        .map(({ node }) => node)
        .filter(({ isPrivate }) => !isPrivate)}
    />
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.func,
  data: AllChallengeNode
};

export default Layout;

export const query = graphql`
  query LayoutQuery {
    allChallengeNode(
      filter: { isPrivate: { eq: false } }
      sort: { fields: [superOrder, order, suborder] }
    ) {
      edges {
        node {
          fields {
            slug
            blockName
          }
          block
          title
          isRequired
          isPrivate
          superBlock
          dashedName
        }
      }
    }
  }
`;
