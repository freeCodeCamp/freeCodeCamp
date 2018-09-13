import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Nav,
  NavItem,
  FormGroup,
  ControlLabel,
  FormControl
} from '@freecodecamp/react-bootstrap';

import { FullWidthRow, Spacer } from '../helpers';
import ThemeSettings from './Theme';
import Camper from './Camper';
import UsernameSettings from './Username';
import BlockSaveButton from '../helpers/form/BlockSaveButton';
import BlockSaveWrapper from '../helpers/form/BlockSaveWrapper';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const propTypes = {
  about: PropTypes.string,
  currentTheme: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
  picture: PropTypes.string,
  points: PropTypes.number,
  username: PropTypes.string
};

class AboutSettings extends Component {
  constructor(props) {
    super(props);

    const { name = '', location = '', picture = '', about = '' } = props;

    this.state = {
      view: 'edit',
      formValues: {
        name,
        location,
        picture,
        about
      },
      isFormPristine: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTabSelect = this.handleTabSelect.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
    this.renderPreview = this.renderPreview.bind(this);
    this.show = {
      edit: this.renderEdit,
      preview: this.renderPreview
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { formValues } = this.state;
    console.log(formValues)
  }

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

  handleTabSelect(key) {
    return this.setState(state => ({
      ...state,
      view: key
    }));
  }

  renderEdit() {
    const {
      formValues: { name, location, picture, about }
    } = this.state;
    return (
      <Fragment>
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
      </Fragment>
    );
  }

  renderPreview() {
    const { about, picture, points, username, name, location } = this.props;
    return (
      <Camper
        about={about}
        location={location}
        name={name}
        picture={picture}
        points={points}
        username={username}
      />
    );
  }

  render() {
    const { currentTheme, username } = this.props;
    const { view, isFormPristine } = this.state;

    const toggleTheme = () => {};
    return (
      <div className='about-settings'>
        <UsernameSettings username={username} />
        <FullWidthRow>
          <Nav
            activeKey={view}
            bsStyle='tabs'
            className='edit-preview-tabs'
            onSelect={k => this.handleTabSelect(k)}
            >
            <NavItem eventKey='edit' title='Edit Bio'>
              Edit Bio
            </NavItem>
            <NavItem eventKey='preview' title='Preview Bio'>
              Preview Bio
            </NavItem>
          </Nav>
        </FullWidthRow>
        <br />
        <FullWidthRow>
          <form id='camper-identity' onSubmit={this.handleSubmit}>
            {this.show[view]()}
            <BlockSaveButton disabled={isFormPristine} />
          </form>
        </FullWidthRow>
        <Spacer />
        <FullWidthRow>
          <ThemeSettings
            currentTheme={currentTheme}
            toggleNightMode={toggleTheme}
          />
        </FullWidthRow>
      </div>
    );
  }
}

AboutSettings.displayName = 'AboutSettings';
AboutSettings.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutSettings);
