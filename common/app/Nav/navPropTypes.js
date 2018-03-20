import PropTypes from 'prop-types';

export default {
  clickOnLogo: PropTypes.func.isRequired,
  clickOnMap: PropTypes.func.isRequired,
  panes: PropTypes.array,
  shouldShowMapButton: PropTypes.bool
};
