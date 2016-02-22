// Renders a countries campsites, grouped and sorted by subdivision if there
// are more than one subdivision, and sorted by city in both cases

import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default React.createClass({
  displayName: 'Campsites List Country',

  propTypes: {
    cities: PropTypes.array,
    numSubdivisions: PropTypes.number,
    showEditButton: PropTypes.bool,
    subdivKey: PropTypes.string
  },

  // only show this on admin page
  displayEditButton(campsite) {
    const {
      showEditButton
    } = this.props;
    if (!showEditButton) {
      return null;
    } else {
      return (
        <span>
          <span> - </span>
          <LinkContainer to={'/campsites/admin/edit/' + campsite.id} >
            <Button
              bsSize='small'
              bsStyle='primary'
              >
              Edit this campsite
            </Button>
          </LinkContainer>
        </span>
      );
    }
  },
  // if there is a key, use it
  // if not, and the index is more than one (0th), call the cities "Other"
  generateSubdivisionLabel(subdivKey, numSubdivisions) {
    if (subdivKey === 'noSubdiv' || subdivKey === 'none') {
      if (numSubdivisions > 1) {
        return (<li key={'subdiv-' + subdivKey}><h4>Other:</h4></li>);
      } else {
        return null;
      }
    } else {
      return (<li key={'subdiv-' + subdivKey}><h4>{subdivKey + ':'}</h4></li>);
    }
  },
  render() {
    const {
      numSubdivisions,
      cities,
      showEditButton,
      subdivKey
    } = this.props;
    const displayEditButton = this.displayEditButton;

    return (
      <ul>
        {this.generateSubdivisionLabel(subdivKey, numSubdivisions)}
        <ul>
          {cities.map(function(campsite) {
            return (<li key={'campsite-' + campsite.id}>
              <a href={campsite.url} target='_blank'>
                {campsite.city}
              </a>
              {showEditButton ? displayEditButton(campsite)
                : null}
            </li>);
          })}
        </ul>
      </ul>
    );
  }
});
