import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Grid, Col, Row } from '@freecodecamp/react-bootstrap';

import { NavigationContext } from '../../contexts/GuideNavigationContext';
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

class GuideLayout extends React.Component {
  getContentRef = ref => (this.contentRef = ref);

  handleNavigation = () => {
    this.contentRef.scrollTop = 0;
    this.contentRef.focus();
  };

  render() {
    return (
      <StaticQuery
        query={graphql`
          query GuideLayoutQuery {
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
                <Fragment>
                  <Spacer size={1} />
                  <Grid className='guide-container'>
                    <Row>
                      <Col
                        md={4}
                        smHidden={!displaySideNav}
                        xsHidden={!displaySideNav}
                        >
                        <SideNav
                          expandedState={expandedState}
                          onNavigate={this.handleNavigation}
                          pages={pages}
                          toggleDisplaySideNav={toggleDisplaySideNav}
                          toggleExpandedState={toggleExpandedState}
                        />
                      </Col>
                      <Col
                        md={8}
                        smHidden={displaySideNav}
                        xsHidden={displaySideNav}
                        >
                        <main
                          className='content'
                          id='main'
                          ref={this.getContentRef}
                          tabIndex='-1'
                          >
                          {this.props.children}
                        </main>
                      </Col>
                    </Row>
                  </Grid>
                </Fragment>
              )}
            </NavigationContext>
          );
        }}
      />
    );
  }
}

GuideLayout.displayName = 'GuideLayout';
GuideLayout.propTypes = propTypes;

export default GuideLayout;
