// Form used to create a new campsite

import React, { PropTypes } from 'react';
import {
  Button,
   Input
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { normURL } from '../normalize-input';


export default React.createClass({
  displayName: 'Create Campsite Form',

  propTypes: {
    campsite: PropTypes.object,
    searchMap: PropTypes.object,
    submitCampsite: PropTypes.func,
    updateCreateForm: PropTypes.func
  },
  campsiteURLEntered() {
    const { campsiteURL } = this.props.campsite;
    // NOTE: 8 arbitrary length for Facebook group URL
    // in case people are sneaky and use URL shortners
    return campsiteURL.value.length > 8;
  },

  // tell users why submit button isn't visible
  submitButtonMessage() {
    const { markers } = this.props.searchMap;
    let message = '';
    if (markers.length !== 1) {
      message += 'There are currently ' +
      markers.length > 19 ? 'more than ' : null +
      markers.length + ' places selected on the map';
      if (!this.campsiteURLEntered()) {
        message += ' and ';
      }
    }
    if (!this.campsiteURLEntered()) {
      message += message.length === 0 ? 'N' : 'n';
      message += 'o campsite URL entered';
    }
    message += '. Please resolve this to submit your campsite.';
    return message;
  },
  handleInputChange(name, { target: { value } }) {
    const { updateCreateForm } = this.props;
      // NOTE: hardcoding normURL but if other types of values are added to the
      // form this function would need to be updated
      updateCreateForm({ name, value: normURL(value).value });
  },

  render() {
    const { campsite, searchMap, submitCampsite } = this.props;
    return (
      <div>
        <Input
          label='Campsite URL'
          onChange={
            (e) => this.handleInputChange('campsiteURL', e) }
          placeholder='http://facebook.com/your-campsite-group-url'
          type='url'
          value={ campsite.campsiteURL.value }
        />
       <p>Once your campsite is submitted, it will be reviewed by a
          &nbsp;moderator before appearing on the campsites list.</p>
        <div>
          <LinkContainer to='/campsites'>
            <Button bsStyle='warning'>
              Go back without submitting
            </Button>
          </LinkContainer>
          {searchMap.markers.length === 1 && this.campsiteURLEntered() ?
          <LinkContainer to='/campsites'>
            <Button
              bsStyle='success'
              onClick={submitCampsite}>
              Submit Campsite
            </Button>
          </LinkContainer> : (<p>{this.submitButtonMessage()}</p>)}
        </div>
      </div>
    );
  }
});
