// Main navigation around the campsites app

import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default React.createClass({
  displayName: 'Campsites Nav Buttons',

  propTypes: {
    showLinkToAdminPage: PropTypes.bool,
    showLinkToApprove: PropTypes.bool,
    showLinkToHomepage: PropTypes.bool,
    numPendingCampsites: PropTypes.number
  },

  renderButton(url, style, displayText) {
    return (
      <LinkContainer to={ url }>
        <Button bsSize='large' bsStyle={ style }>
          { displayText }
        </Button>
      </LinkContainer>
    );
  },

  // helper function to add 's' when campsites should be plural
  sPad(numPending) {
    return numPending > 1 ? 's' : '';
  },

  // button used on homepage to alert admins that there are pending campsites
  adminButton(numPending) {
    let displayText;
    if (numPending > 0) {
      displayText = String(numPending) + ' Pending Campsite';
      displayText += this.sPad(numPending);
    } else {
      displayText = 'Edit Campsites';
    }
    const adminButton =
      this.renderButton('/campsites/admin', 'info', displayText);
    return adminButton;
  },

  homeButton() {
    return this.renderButton('/campsites',
      'info', 'Return to campsites home');
  },

  addButton() {
    return this.renderButton('/campsites/new',
      'primary', 'Add a new campsite');
  },

  pendingCampsiteButton(numPending) {
    let displayText = String(numPending) + ' pending campsite';
    displayText += this.sPad(numPending);
    displayText += ' awaiting your approval';
    return (
      this.renderButton('/campsites/admin/approve', 'success', displayText)
    );
  },

  render() {

    const {
      numPendingCampsites,
      showLinkToHomepage,
      showLinkToAdminPage,
      showLinkToApprove
    } = this.props;

    return (
      <div className='campsite-nav-buttons'>
        <span>{showLinkToAdminPage ?
          this.adminButton(numPendingCampsites) : null}
          {showLinkToApprove && numPendingCampsites > 1 ?
            this.pendingCampsiteButton(numPendingCampsites) : null}
          {showLinkToHomepage ? this.homeButton() : null}
        {this.addButton()}
        </span>
      </div>
    );
  }
});
