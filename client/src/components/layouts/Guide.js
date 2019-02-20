import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { createSelector } from 'reselect';
import { Grid, Col, Row } from '@freecodecamp/react-bootstrap';

import SideNav from './components/guide/SideNav';
import Spacer from '../helpers/Spacer';

import 'prismjs/themes/prism.css';
import './guide.css';

// import { expandedState, displaySideNav } from '../../redux';

import { toggleExpandedState, toggleDisplaySideNav } from './redux';

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
  displaySideNav: PropTypes.bool,
  expandedState: PropTypes.object,
  location: PropTypes.object,
  toggleDisplaySideNav: PropTypes.func,
  toggleExpandedState: PropTypes.func
};

const mapStateToProps = state => {
  return {
    expandedState: state.guideNav.expandedState,
    displaySideNav: state.guideNav.displaySideNav
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleExpandedState, toggleDisplaySideNav }, dispatch);

class GuideLayout extends React.Component {
  getContentRef = ref => (this.contentRef = ref);

  handleNavigation = () => {
    this.contentRef.scrollTop = 0;
    this.contentRef.focus();
  };

  render() {
    let {
      displaySideNav,
      expandedState,
      toggleExpandedState,
      toggleDisplaySideNav
    } = this.props;
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
          );
        }}
      />
    );
  }
}

GuideLayout.displayName = 'GuideLayout';
GuideLayout.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GuideLayout);
