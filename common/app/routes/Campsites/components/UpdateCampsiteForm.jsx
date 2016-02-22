// Form used by admins to approve/edit campsite

import React, { PropTypes } from 'react';
import {
  Button,
  Input,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';
import Select from 'react-select';

import {
  inHTMLData,
  uriInSingleQuotedAttr
} from 'xss-filters';

import { normURL } from '../normalize-input';

import _ from 'lodash';

export default React.createClass({
  displayName: 'Update Campsite Form',

  propTypes: {
    approvedCampsites: PropTypes.array,
    approvingContext: PropTypes.bool,
    campsites: PropTypes.array,
    onCampsiteDelete: PropTypes.func,
    onCampsiteApprove: PropTypes.func,
    onCampsiteEdit: PropTypes.func
  },

  onInputChange(campsiteID, name, value) {
    const {
      approvingContext,
      onCampsiteEdit
    } = this.props;
    // sanitize inputs
    if (name === 'url') {
      value = normURL(uriInSingleQuotedAttr(value)).value;
    } else {
      // all other fields
      value = inHTMLData(value);
    }
    const newVal = { [name]: value };

    onCampsiteEdit(campsiteID, newVal, approvingContext);

  },

  generateOptions(type, currentCampsite) {
    const { approvedCampsites } = this.props;
    // if not creating country options, filter out all other countries
    const campsites = type !== 'country' ? approvedCampsites.filter(campsite =>
      currentCampsite.country === campsite.country
    ) : approvedCampsites;
    const options = _(campsites).map((campsite) =>
      ({value: campsite[type], label: campsite[type]})
    )
    .uniqBy('value').value();
    // add current campsites values to options
    options.push({value: currentCampsite[type], label: currentCampsite[type]});
    return options;
  },

  // TODO: Workaround until react-select fixes allowCreate={true} -- via:
  // https://github.com/JedWatson/react-select/pull/660#issuecomment-200098060
  filterOptions(options, filter, currentValues) {
    return !filter ? options : _(options)
      .filter(o => new RegExp(filter, 'ig').test(o.label))
      .difference(currentValues)
      .concat(_.some(currentValues, {label: filter}) ?
        [] : [{label: `Add: ${filter}`, value: filter, create: true}])
      .value();
  },

  changeSelectedValue(campsite, type, entered) {
    if (entered && entered.create) {
      entered.label = entered.label.replace(/^Add\: /, '');
    }
    this.onInputChange(campsite.id, type, entered.value);
  },
  // /TODO -----------------

  // show a back button when approving
  // NOTE: don't show when in editing context, because it could mess up state
  showBackButton(show) {
    if (show) {
      return (
        <LinkContainer to='/campsites/admin'>
          <Button bsSize='large' bsStyle='primary'>
            Go back without submitting
          </Button>
        </LinkContainer>
      );
    } else {
      return null;
    }
  },

  renderSelect(title, filt, campsite, opts, componentContext) {
    const field = title.toLowerCase();
    return (
      <div>
        <b>{title}</b>
        <Select
          filterOptions={filt}
          onChange={(value) =>
            componentContext
            .changeSelectedValue(campsite, field, value)}
          options={opts}
          searchable={true}
          value={campsite[field]}
          />
      </div>
    );
  },

  render() {

    const {
      approvingContext,
      campsites,
      onCampsiteApprove,
      onCampsiteDelete
    } = this.props;

    const componentContext = this;
    return (
      <div>
        {this.showBackButton(approvingContext)}
        <ListGroup>
          {campsites.length > 0 ? campsites.map(function(campsite) {
            // all countries, and all cities/subdiv in the selected country
            const countryOptions =
              componentContext.generateOptions('country', campsite);
            const subdivOptions =
              componentContext.generateOptions('subdivision', campsite);
            const cityOptions =
              componentContext.generateOptions('city', campsite);
            const filt = componentContext.filterOptions;
            return (
              <ListGroupItem
                key={'updateform-' + campsite.id + campsite.mapURL}>
                <div>
                  {campsite.mapURL ? <a href={campsite.mapURL} target='_blank'>
                    <b>Link to campsite map in {campsite.city}</b>
                  </a> : null}
                  {componentContext.renderSelect('Country', filt, campsite,
                    countryOptions, componentContext)}
                  {componentContext.renderSelect('Subdivision', filt, campsite,
                    subdivOptions, componentContext)}
                  {componentContext.renderSelect('City', filt, campsite,
                    cityOptions, componentContext)}
                  <b>Facebook Group URL</b>
                  <Input
                    onChange={ (e) =>
                      componentContext
                      .onInputChange(campsite.id, 'url', e.target.value) }
                    type='text'
                    value={campsite.url} />
                  <Button
                    bsStyle='danger'
                    onClick={onCampsiteDelete.bind(null, campsite)}>
                  Delete</Button>
                  <Button
                    bsStyle='success'
                    onClick={onCampsiteApprove.bind(null, campsite)}>
                      {approvingContext ? 'Approve' : 'Submit'}
                    </Button>
                </div>
              </ListGroupItem>
            );
          }) : null }
        </ListGroup>
      </div>
    );
  }
});
