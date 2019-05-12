import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel } from '@freecodecamp/react-bootstrap';
import { Link } from 'gatsby';

const propTypes = {
  children: PropTypes.any,
  dashedName: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  hasChildren: PropTypes.bool,
  isExpanded: PropTypes.bool,
  onNavigate: PropTypes.func.isRequired,
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
            'https://github.com/freeCodeCamp/freeCodeCamp/blob/master/docs/' +
            'how-to-work-on-guide-articles.md#how-to-work-on-guide-articles'
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
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.renderBody = this.renderBody.bind(this);
  }

  handleHeaderClick() {
    const { path, handleClick } = this.props;
    handleClick(path);
  }

  handleTitleClick() {
    const { toggleDisplaySideNav, onNavigate } = this.props;
    toggleDisplaySideNav();
    onNavigate();
  }

  renderHeader() {
    const { isExpanded, path, title } = this.props;
    return (
      <div className='title' onClick={this.handleHeaderClick}>
        <span
          className={
            'caret ' + (isExpanded ? 'caretStyle expanded' : 'caretStyle')
          }
        />
        <Link onClick={this.handleTitleClick} to={path}>
          {title}
        </Link>
      </div>
    );
  }

  renderBody() {
    const { hasChildren, children, isExpanded } = this.props;
    return (
      <div className={isExpanded ? 'body' : ''}>
        <ul className='navPanelUl'>
          {hasChildren ? children : <NoArticles />}
        </ul>
      </div>
    );
  }

  render() {
    const { isExpanded, dashedName } = this.props;
    return (
      <Panel
        bsClass='panelStyle panel'
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
