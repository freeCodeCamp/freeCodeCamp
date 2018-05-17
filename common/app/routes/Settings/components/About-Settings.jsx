import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import {
  Nav,
  NavItem
} from 'react-bootstrap';

import { FullWidthRow, Spacer } from '../../../helperComponents';
import ThemeSettings from './ThemeSettings.jsx';
import Camper from './Camper.jsx';
import UsernameSettings from './UsernameSettings.jsx';
import SectionHeader from './SectionHeader.jsx';
import { userSelector, toggleNightMode } from '../../../redux';
import { updateUserBackend } from '../redux';
import {
  BlockSaveButton,
  BlockSaveWrapper,
  FormFields,
  maxLength,
  validURL
} from '../formHelpers';

const max288Char = maxLength(288);

const mapStateToProps = createSelector(
  userSelector,
  (
    {
      about,
      location,
      name,
      picture,
      points,
      theme,
      username
    },
  ) => ({
    about,
    currentTheme: theme,
    initialValues: { name, location, about, picture },
    location,
    name,
    picture,
    points,
    username
  })
);

const formFields = [ 'name', 'location', 'picture', 'about' ];

function validator(values) {
  const errors = {};
  const {
    about,
    picture
  } = values;
  errors.about = max288Char(about);
  errors.picutre = validURL(picture);

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleNightMode,
    updateUserBackend
  }, dispatch);
}

const propTypes = {
    about: PropTypes.string,
    currentTheme: PropTypes.string,
    fields: PropTypes.object,
    handleSubmit: PropTypes.func.isRequired,
    location: PropTypes.string,
    name: PropTypes.string,
    picture: PropTypes.string,
    points: PropTypes.number,
    toggleNightMode: PropTypes.func.isRequired,
    updateUserBackend: PropTypes.func.isRequired,
    username: PropTypes.string
};

class AboutSettings extends PureComponent {
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
    const { fields } = this.props;
    const options = {
      types: {
        about: 'textarea',
        picture: 'url'
      }
    };
    return (
      <div>
        <FormFields
          fields={ fields }
          options={ options }
        />
      </div>
    );
  }

  renderPreview() {
    const {
      fields: {
      picture: { value: picture },
      name: { value: name },
      location: { value: location },
      about: { value: about }
      },
      points,
      username
    } = this.props;
    return (
      <Camper
        about={ about }
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
      fields: { _meta: { allPristine } },
      handleSubmit,
      toggleNightMode,
      username
    } = this.props;
    const { view } = this.state;

    const toggleTheme = () => toggleNightMode(username, currentTheme);
    return (
      <div className='about-settings'>
        <SectionHeader>
          About Settings
        </SectionHeader>
        <UsernameSettings username={ username }/>
        <FullWidthRow>
          <Nav
            activeKey={ view }
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
        <form id='camper-identity' onSubmit={ handleSubmit(this.handleSubmit) }>
          {
            this.show[view]()
          }
          <BlockSaveWrapper>
            <BlockSaveButton disabled={ allPristine } />
          </BlockSaveWrapper>
        </form>
        </FullWidthRow>
        <Spacer />
        <FullWidthRow>
          <ThemeSettings
            currentTheme={ currentTheme }
            toggleNightMode={ toggleTheme }
          />
        </FullWidthRow>
      </div>
    );
  }
}

AboutSettings.displayName = 'AboutSettings';
AboutSettings.propTypes = propTypes;

export default reduxForm(
  {
    form: 'account-settings',
    fields: formFields,
    validate: validator
  },
  mapStateToProps,
  mapDispatchToProps
)(AboutSettings);
