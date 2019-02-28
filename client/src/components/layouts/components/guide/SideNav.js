import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PanelGroup from '@freecodecamp/react-bootstrap/lib/PanelGroup';

import NavPanel from './NavPanel';
import NavItem from './NavItem';

const propTypes = {
  expandedState: PropTypes.object,
  onNavigate: PropTypes.func.isRequired,
  pages: PropTypes.arrayOf(PropTypes.object),
  parents: PropTypes.arrayOf(PropTypes.object),
  toggleDisplaySideNav: PropTypes.func.isRequired,
  toggleExpandedState: PropTypes.func.isRequired
};

function parentFilter(node) {
  return node.path.split('/').filter(Boolean).length === 2;
}

class SideNav extends Component {
  constructor(...props) {
    super(...props);

    this.renderChildren = this.renderChildren.bind(this);
    this.renderPanels = this.renderPanels.bind(this);
    this.renderParent = this.renderParent.bind(this);
  }

  renderPanels(parents, pages) {
    if (!parents) {
      return 'No Parents Here';
    }
    return parents.map(parent => this.renderParent(parent, pages));
  }

  renderParent(parent, pages) {
    const childrenForParent = pages.filter(
      page => page.parentPath === parent.path
    );
    const { path } = parent;
    const isExpanded = !!this.props.expandedState[path];
    const [category] = pages.filter(page => page.path === path);
    const { title, hasChildren, dashedName } = category;

    const children = isExpanded
      ? this.renderChildren(childrenForParent, pages)
      : null;
    return (
      <NavPanel
        dashedName={dashedName}
        handleClick={this.props.toggleExpandedState}
        hasChildren={hasChildren}
        isExpanded={isExpanded}
        key={parent.path}
        onNavigate={this.props.onNavigate}
        path={parent.path}
        title={title}
        toggleDisplaySideNav={this.props.toggleDisplaySideNav}
      >
        {children}
      </NavPanel>
    );
  }

  renderChildren(children, pages) {
    return children.map(child => {
      if (child.hasChildren) {
        return this.renderParent(child, pages);
      }
      return (
        <NavItem
          isStubbed={child.isStubbed}
          key={child.path}
          onNavigate={this.props.onNavigate}
          path={child.path}
          title={child.title}
          toggleDisplaySideNav={this.props.toggleDisplaySideNav}
        />
      );
    });
  }

  render() {
    const { pages, expandedState } = this.props;
    const parents = pages.filter(parentFilter);
    const panels = this.renderPanels(parents, pages);
    return (
      <nav className='sideNav' id='side-nav'>
        <PanelGroup id='guide-navigation-side-panel' role='list'>
          {!parents || !expandedState ? (
            <NavPanel
              title='No Parents Here'
              toggleDisplaySideNav={this.props.toggleDisplaySideNav}
            />
          ) : (
            panels
          )}
        </PanelGroup>
      </nav>
    );
  }
}

SideNav.displayName = 'SideNav';
SideNav.propTypes = propTypes;

export default SideNav;
