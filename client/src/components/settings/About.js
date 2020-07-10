import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup,
  ControlLabel,
  FormControl
} from '@freecodecamp/react-bootstrap';

import { FullWidthRow, Spacer } from '../helpers';
import ThemeSettings from './Theme';
import UsernameSettings from './Username';
import BlockSaveButton from '../helpers/form/BlockSaveButton';

import getTimezonesOrDefault from '../../utils/get-timezones';

const propTypes = {
  about: PropTypes.string,
  currentTheme: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
  picture: PropTypes.string,
  points: PropTypes.number,
  search: PropTypes.string,
  submitNewAbout: PropTypes.func.isRequired,
  timezone: PropTypes.string,
  toggleNightMode: PropTypes.func.isRequired,
  username: PropTypes.string
};

class AboutSettings extends Component {
  constructor(props) {
    super(props);

    const {
      name = '',
      location = '',
      picture = '',
      about = '',
      timezone = getTimezonesOrDefault(true),
      search = ''
    } = props;
    const values = {
      name,
      location,
      picture,
      about,
      timezone,
      search
    };
    this.state = {
      formValues: { ...values },
      originalValues: { ...values },
      formClicked: false,
      timezones: getTimezonesOrDefault()
    };
  }

  componentDidUpdate() {
    const { name, location, picture, about, timezone, search } = this.props;
    const { formValues, formClicked, timezones } = this.state;
    if (
      formClicked &&
      name === formValues.name &&
      location === formValues.location &&
      picture === formValues.picture &&
      about === formValues.about &&
      timezone === formValues.timezone &&
      search === formValues.search
    ) {
      /* eslint-disable-next-line react/no-did-update-set-state */
      return this.setState({
        originalValues: {
          name,
          location,
          picture,
          about,
          timezone,
          search
        },
        timezones,
        formClicked: false
      });
    }
    return null;
  }

  isFormPristine = () => {
    const { formValues, originalValues } = this.state;
    return Object.keys(originalValues)
      .map(key => originalValues[key] === formValues[key])
      .every(bool => bool);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { formValues } = this.state;
    const { submitNewAbout } = this.props;
    return this.setState({ formClicked: true }, () =>
      submitNewAbout(formValues)
    );
  };

  handleNameChange = e => {
    const value = e.target.value.slice(0);
    return this.setState(state => ({
      formValues: {
        ...state.formValues,
        name: value
      }
    }));
  };

  handleLocationChange = e => {
    const value = e.target.value.slice(0);
    return this.setState(state => ({
      formValues: {
        ...state.formValues,
        location: value
      }
    }));
  };

  handleTimeZoneChange = e => {
    const value = e.target.value.slice(0);
    return this.setState(state => ({
      formValues: {
        ...state.formValues,
        timezone: value
      }
    }));
  };

  handleTimeZoneSearch = e => {
    const value = e.target.value.slice(0);
    let filteredTimeZones = [...getTimezonesOrDefault()].filter(zone => {
      for (let area of zone.areas) {
        if (area.includes(value)) {
          return true;
        }
      }
      return false;
    });
    return this.setState(state => ({
      formValues: {
        ...state.formValues,
        search: value
      },
      timezones: filteredTimeZones
    }));
  };

  handlePictureChange = e => {
    const value = e.target.value.slice(0);
    return this.setState(state => ({
      formValues: {
        ...state.formValues,
        picture: value
      }
    }));
  };

  handleAboutChange = e => {
    const value = e.target.value.slice(0);
    return this.setState(state => ({
      formValues: {
        ...state.formValues,
        about: value
      }
    }));
  };

  render() {
    const {
      formValues: { name, location, picture, about, timezone, search },
      timezones
    } = this.state;
    const { currentTheme, username, toggleNightMode } = this.props;
    return (
      <div className='about-settings'>
        <UsernameSettings username={username} />
        <br />
        <FullWidthRow>
          <form id='camper-identity' onSubmit={this.handleSubmit}>
            <FormGroup controlId='about-name'>
              <ControlLabel>
                <strong>Name</strong>
              </ControlLabel>
              <FormControl
                onChange={this.handleNameChange}
                type='text'
                value={name}
              />
            </FormGroup>
            <FormGroup controlId='about-location'>
              <ControlLabel>
                <strong>Location</strong>
              </ControlLabel>
              <FormControl
                onChange={this.handleLocationChange}
                type='text'
                value={location}
              />
            </FormGroup>
            <FormGroup controlId='about-timezone'>
              <ControlLabel>
                <strong>Time Zone (UTC)</strong>
              </ControlLabel>
              <FormControl
                as='input'
                onChange={this.handleTimeZoneSearch}
                placeholder='Search Here...'
                type='text'
                value={search}
              />
              <FormControl
                as='select'
                componentClass='select'
                onChange={this.handleTimeZoneChange}
                type='select'
                value={timezone.text}
              >
                {timezones.map(timezone => (
                  <option key={timezone.id}>{timezone.text}</option>
                ))}
              </FormControl>
            </FormGroup>
            <FormGroup controlId='about-picture'>
              <ControlLabel>
                <strong>Picture</strong>
              </ControlLabel>
              <FormControl
                onChange={this.handlePictureChange}
                required={true}
                type='url'
                value={picture}
              />
            </FormGroup>
            <FormGroup controlId='about-about'>
              <ControlLabel>
                <strong>About</strong>
              </ControlLabel>
              <FormControl
                componentClass='textarea'
                onChange={this.handleAboutChange}
                value={about}
              />
            </FormGroup>
            <BlockSaveButton disabled={this.isFormPristine()} />
          </form>
        </FullWidthRow>
        <Spacer />
        <FullWidthRow>
          <ThemeSettings
            currentTheme={currentTheme}
            toggleNightMode={toggleNightMode}
          />
        </FullWidthRow>
      </div>
    );
  }
}

AboutSettings.displayName = 'AboutSettings';
AboutSettings.propTypes = propTypes;

export default AboutSettings;
