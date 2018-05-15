import capitalize from 'lodash/capitalize';
import noop from 'lodash/noop';
import {
  createAction,
  createTypes,
  handleActions
} from 'berkeleys-redux-utils';

import ns from '../ns.json';
import { createEventMetaCreator } from '../../analytics/index';

export const epics = [];

export const types = createTypes([
  'clickOnLogo',
  'clickOnMap',
  'navLinkClicked',

  'closeDropdown',
  'openDropdown'
], ns);

export const clickOnLogo = createAction(
  types.clickOnLogo,
  noop,
  createEventMetaCreator({
    category: 'Nav',
    action: 'clicked',
    label: 'fcc logo clicked'
  })
);

export const clickOnMap = createAction(
  types.clickOnMap,
  noop,
  createEventMetaCreator({
    category: 'Nav',
    action: 'clicked',
    label: 'map button clicked'
  })
);

export const closeDropdown = createAction(types.closeDropdown);
export const openDropdown = createAction(types.openDropdown);
export function createNavLinkActionCreator(link) {
  return createAction(
    types.navLinkClicked,
    noop,
    createEventMetaCreator({
      category: capitalize(ns),
      action: 'click',
      label: `${link} link`
    })
  );
}

const initialState = {
  isDropdownOpen: false
};

export const dropdownSelector = state => state[ns].isDropdownOpen;

export default handleActions(
  () => ({
    [types.closeDropdown]: state => ({
      ...state,
      isDropdownOpen: false
    }),
    [types.openDropdown]: state => ({
      ...state,
      isDropdownOpen: true
    })
  }),
  initialState,
  ns
);
