import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const propTypes = {
  isStubbed: PropTypes.bool,
  path: PropTypes.string,
  router: PropTypes.object,
  title: PropTypes.string,
  toggleDisplaySideNav: PropTypes.func.isRequired
};

function NavItem(props) {
  const { isStubbed, path, title } = props;
  return (
    <li>
      <Link data-navitem='true' onClick={props.toggleDisplaySideNav} to={path}>
        <span className={'navItemTitle' + (isStubbed ? ' stubbed' : '')}>
          {title}
        </span>
      </Link>
    </li>
  );
}

NavItem.displayName = 'NavItem';
NavItem.propTypes = propTypes;

export default NavItem;
