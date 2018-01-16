import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import {
  Col,
  ControlLabel,
  FormControl,
  Nav,
  NavItem,
  Row
} from 'react-bootstrap';

import {
  BlockSaveButton,
  FormFields,
  FullWidthRow
} from '../../../helperComponents';
import LockedSettings from './Locked-Settings.jsx';
import ThemeSettings from './ThemeSettings.jsx';
import Camper from '../../Profile/components/Camper.jsx';
import { userSelector } from '../../../redux';
import {
  updateUserBackend
} from '../../../entities/user';
import { invertTheme } from '../../../../utils/themes';

const mapStateToProps = createSelector(
  userSelector,
  (
    {
      bio,
      isLocked,
      location,
      name,
      picture,
      points,
      theme,
      username
    },
  ) => ({
    bio,
    currentTheme: theme,
    initialValues: { name, location, bio, picture },
    isLocked,
    location,
    name,
    picture,
    points,
    username
  })
);

const formFields = [ 'bio', 'name', 'picture', 'location' ];

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateUserBackend
  }, dispatch);
}

const propTypes = {
    bio: PropTypes.string,
    currentTheme: PropTypes.string,
    fields: PropTypes.object,
    handleSubmit: PropTypes.func.isRequired,
    isLocked: PropTypes.bool,
    location: PropTypes.string,
    name: PropTypes.string,
    picture: PropTypes.string,
    points: PropTypes.number,
    updateUserBackend: PropTypes.func.isRequired,
    username: PropTypes.string
};

class AccountSettings extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTabSelect = this.handleTabSelect.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
    this.renderPreview = this.renderPreview.bind(this);

    this.state = {
      view: 'edit'
    };
    this.show = {
      edit: this.renderEdit,
      preview: this.renderPreview
    };
  }

  handleSubmit(values) {
    this.props.updateUserBackend(values);
  }

  handleTabSelect(key) {
    this.setState(state => ({
      ...state,
      view: key
    }));
  }

  renderEdit() {
    const { fields, fields: { bio } } = this.props;
    const options = {
      ignored: [ 'bio' ],
      types: {
        picture: 'url'
      }
    };
    const bioId = _.kebabCase(bio.name);
    return (
      <div>
        <FormFields
          fields={ fields }
          options={ options }
        />
        <Row className='editable-content-container'>
          <Col xs={ 12 }>
            <ControlLabel htmlFor={ bioId }>
              { _.startCase(bio.name) }
            </ControlLabel>
          </Col>
        </Row>
        <Row className='editable-content-container'>
          <Col xs={ 12 }>
            <FormControl
              componentClass='textarea'
              id={ bioId }
              name={ bio.name }
              onChange={ bio.onChange }
              rows={ 4 }
              value={ bio.value }
            />
          </Col>
        </Row>
      </div>
    );
  }

  renderPreview() {
    const {
      fields: {
      picture: { value: picture },
      name: { value: name },
      location: { value: location },
      bio: { value: bio }
      },
      points,
      username
    } = this.props;
    return (
      <Camper
        bio={ bio }
        location={ location }
        name={ name }
        picture={ picture }
        points={ points }
        username={ username }
      />
    );
  }

  render() {
    const {
      currentTheme,
      handleSubmit,
      isLocked,
      updateUserBackend,
      username
    } = this.props;

    const { view } = this.state;

    const toggleIsLocked = () => updateUserBackend({ isLocked: !isLocked });
    const toggleNightMode = theme => updateUserBackend({
      theme: invertTheme(theme)
    });
    return (
      <div className='account-settings'>
        <FullWidthRow>
          <h2>Account Settings - { username }</h2>
        </FullWidthRow>
        <FullWidthRow>
          <Nav
            activeKey={ view }
            bsStyle='tabs'
            className='edit-preview-tabs'
            onSelect={k => this.handleTabSelect(k)}
            >
            <NavItem eventKey='edit' title='Edit'>
              Edit
            </NavItem>
            <NavItem eventKey='preview' title='Preview'>
              Preview
            </NavItem>
          </Nav>
        </FullWidthRow>
        <br />
        <FullWidthRow>
        <form id='camper-identity' onSubmit={ handleSubmit(this.handleSubmit) }>
          {
            this.show[view]()
          }
          <BlockSaveButton />
        </form>
        </FullWidthRow>
        <FullWidthRow>
          <LockedSettings
            isLocked={ isLocked }
            toggleIsLocked={ toggleIsLocked }
          />
        </FullWidthRow>
        <FullWidthRow>
          <ThemeSettings
            currentTheme={ currentTheme }
            toggleNightMode={ toggleNightMode }
          />
        </FullWidthRow>
      </div>
    );
  }
}

AccountSettings.displayName = 'AccountSettings';
AccountSettings.propTypes = propTypes;

export default reduxForm(
  {
    form: 'account-settings',
    fields: formFields
  },
  mapStateToProps,
  mapDispatchToProps
)(AccountSettings);
