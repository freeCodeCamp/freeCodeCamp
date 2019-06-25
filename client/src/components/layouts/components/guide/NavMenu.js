import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';

import MenuButton from '../../../../components/Header/components/MenuButton';
import MenuLinks from '../../../../components/Header/components/MenuLinks';

import { toggleDisplayMenu, displayMenuSelector } from './redux';

const mapStateToProps = createSelector(
  displayMenuSelector,
  displayMenu => ({
    displayMenu
  })
);

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleDisplayMenu }, dispatch);

function GuideNavigationMenu(props) {
  const { displayMenu, toggleDisplayMenu } = props;
  return (
    <>
      <MenuButton
        className={'guide-menu-button'}
        displayMenu={displayMenu}
        onClick={toggleDisplayMenu}
      />
      <MenuLinks className={'guide-top-nav'} />
    </>
  );
}

GuideNavigationMenu.displayName = 'GuideNavigationMenu';
GuideNavigationMenu.propTypes = {
  displayMenu: PropTypes.bool.isRequired,
  toggleDisplayMenu: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GuideNavigationMenu);
