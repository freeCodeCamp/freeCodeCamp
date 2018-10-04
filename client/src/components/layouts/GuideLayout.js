import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Col, Row } from '@freecodecamp/react-bootstrap';

import { NavigationContext } from '../../contexts/GuideNavigationContext';
import DefaultLayout from './Default';
import SideNav from './components/guide/SideNav';
import Spacer from '../helpers/Spacer';

import 'prismjs/themes/prism.css';
import './guide.css';

const propTypes = {
  children: PropTypes.any,
  data: PropTypes.shape({
    allNavigationNode: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            dashedName: PropTypes.string,
            isStubbed: PropTypes.bool,
            path: PropTypes.string,
            title: PropTypes.string
          })
        })
      )
    })
  }),
  location: PropTypes.object
};

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        allNavigationNode {
          edges {
            node {
              dashedName
              hasChildren
              isStubbed
              parentPath
              path
              title
            }
          }
        }
      }
    `}
    render={data => {
      const { edges } = data.allNavigationNode;
      const pages = edges.map(edge => edge.node);
      return (
        <NavigationContext>
          {({
            toggleDisplaySideNav,
            displaySideNav,
            expandedState,
            toggleExpandedState
          }) => (
            <DefaultLayout>
              <Spacer size={2} />
              <Row>
                <Col
                  md={4}
                  smHidden={!displaySideNav}
                  xsHidden={!displaySideNav}
                  >
                  <SideNav
                    expandedState={expandedState}
                    pages={pages}
                    toggleDisplaySideNav={toggleDisplaySideNav}
                    toggleExpandedState={toggleExpandedState}
                  />
                </Col>
                <Col
                  className='content'
                  md={8}
                  smHidden={displaySideNav}
                  xsHidden={displaySideNav}
                  >
                  <main className='main' id='main' tabIndex='-1'>
                    {children}
                  </main>
                </Col>
              </Row>
            </DefaultLayout>
          )}
        </NavigationContext>
      );
    }}
  />
);

Layout.displayName = 'Layout';
Layout.propTypes = propTypes;

export default Layout;
