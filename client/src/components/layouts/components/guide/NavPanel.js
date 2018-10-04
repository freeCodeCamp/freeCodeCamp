import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel } from '@freecodecamp/react-bootstrap';
import { navigate } from 'gatsby';

const propTypes = {
  children: PropTypes.any,
  dashedName: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  hasChildren: PropTypes.bool,
  isExpanded: PropTypes.bool,
  path: PropTypes.string,
  title: PropTypes.string,
  toggleDisplaySideNav: PropTypes.func.isRequired
};

function NoArticles() {
  return (
    <li>
      <span>
        No articles yet.
        <br />
        Could you&nbsp;
        <a
          href={
            'https://github.com/freeCodeCamp/guides/blob/master/README.md' +
            '#freecodecamp-guide'
          }
          rel='noopener noreferrer'
          target='_blank'
          >
          write one?
        </a>
      </span>
    </li>
  );
}

class NavPanel extends Component {
  constructor() {
    super();

    this.renderHeader = this.renderHeader.bind(this);
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
    this.renderBody = this.renderBody.bind(this);
  }

  handleHeaderClick() {
    const { path, handleClick } = this.props;
    handleClick(path);
    navigate(path);
  }

  renderHeader() {
    const { isExpanded, title, toggleDisplaySideNav } = this.props;
    return (
      <div className='title' onClick={this.handleHeaderClick}>
        <span
          className={
            'caret ' + (isExpanded ? 'caretStyle expanded' : 'caretStyle')
          }
        />
        <span onClick={toggleDisplaySideNav}>{title}</span>
      </div>
    );
  }

  renderBody() {
    const { hasChildren, children, isExpanded } = this.props;
    const childrenWithChildren = children.filter(child => child.props.children);
    const uniqueChildren = children.filter(
      child =>
        !childrenWithChildren.some(
          (potentialDupe, index) => index > 0 && potentialDupe.key === child.key
        )
    );
    return (
      <div className={isExpanded ? 'body' : ''}>
        <ul className='navPanelUl'>
          {hasChildren ? uniqueChildren : <NoArticles />}
        </ul>
      </div>
    );
  }

  render() {
    const { isExpanded, dashedName } = this.props;
    return (
      <Panel
        bsClass='panelStyle panel'
        collapsible={true}
        expanded={isExpanded}
        id={`${dashedName}-panel`}
        role='listitem'
        >
        <Panel.Heading>{this.renderHeader()}</Panel.Heading>
        {isExpanded ? <Panel.Body>{this.renderBody()}</Panel.Body> : null}
      </Panel>
    );
  }
}

NavPanel.displayName = 'NavPanel';
NavPanel.propTypes = propTypes;

export default NavPanel;
