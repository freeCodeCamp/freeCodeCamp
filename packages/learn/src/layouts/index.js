/* global graphql */
import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import ga from '../analytics';

import { AllChallengeNode } from '../redux/propTypes';
import Header from '../components/Header';
import MapModal from '../components/MapModal';

import './global.css';
import 'react-reflex/styles.css';
import './layout.css';

const metaKeywords = [
  'javascript',
  'js',
  'website',
  'web',
  'development',
  'free',
  'code',
  'camp',
  'course',
  'courses',
  'html',
  'css',
  'react',
  'redux',
  'api',
  'front',
  'back',
  'end',
  'learn',
  'tutorial',
  'programming'
];

class Layout extends PureComponent {
  state = {
    location: ''
  };
  componentDidMount() {
    const url = window.location.pathname + window.location.search;
    ga.pageview(url);
    /* eslint-disable react/no-did-mount-set-state */
    // this is for local location tracking only, no re-rendering required
    this.setState(state => ({
      ...state,
      location: url
    }));
  }
  componentDidUpdate() {
    const url = window.location.pathname + window.location.search;
    if (url !== this.state.location) {
      ga.pageview(url);
      /* eslint-disable react/no-did-update-set-state */
      // this is for local location tracking only, no re-rendering required
      this.setState(state => ({
        ...state,
        location: url
      }));
    }
  }
  render() {
    const { children, data: { allChallengeNode: { edges } } } = this.props;
    return (
      <Fragment>
        <Helmet
          meta={[
            {
              name: 'description',
              content:
                'Learn to code with free online courses, programming ' +
                'projects, and interview preparation for developer jobs.'
            },
            { name: 'keywords', content: metaKeywords.join(', ') }
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
  }
}

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
