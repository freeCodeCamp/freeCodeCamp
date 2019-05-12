import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const propTypes = {
  isStubbed: PropTypes.bool,
  onNavigate: PropTypes.func.isRequired,
  path: PropTypes.string,
  router: PropTypes.object,
  title: PropTypes.string,
  toggleDisplaySideNav: PropTypes.func.isRequired
};

class NavItem extends React.Component {
  handleClick = () => {
    this.props.toggleDisplaySideNav();
    this.props.onNavigate();
  };
  render() {
    const { isStubbed, path, title } = this.props;
    return (
      <li>
        <Link onClick={this.handleClick} to={path}>
          <span className={'navItemTitle' + (isStubbed ? ' stubbed' : '')}>
            {title}
          </span>
        </Link>
      </li>
    );
  }
}

NavItem.displayName = 'NavItem';
NavItem.propTypes = propTypes;

export default NavItem;
