import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import {
  Image,
  Button,
  ControlLabel,
  FormControl,
  Row,
  Col
} from 'react-bootstrap';

import { Link } from '../../../Router';
import LockedSettings from './Locked-Settings.jsx';
import ThemeSettings from './ThemeSettings.jsx';
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
      theme,
      username
    },
  ) => ({
    bio,
    currentTheme: theme,
    initialValues: { name, location },
    isLocked,
    location,
    name,
    picture,
    username
  })
);


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateUserBackend
  }, dispatch);
}

const propTypes = {
    bio: PropTypes.string,
    currentTheme: PropTypes.string,
    fields: PropTypes.objectOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        value: PropTypes.string.isRequired
      })
    ),
    handleSubmit: PropTypes.func.isRequired,
    isLocked: PropTypes.bool,
    location: PropTypes.string,
    name: PropTypes.string,
    picture: PropTypes.string,
    updateUserBackend: PropTypes.func.isRequired,
    username: PropTypes.string
};

class AccountSettings extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.updateUserBackend(values);
  }

  render() {
    const {
      bio,
      currentTheme,
      fields,
      handleSubmit,
      isLocked,
      picture,
      updateUserBackend,
      username
    } = this.props;

    const toggleIsLocked = () => updateUserBackend({ isLocked: !isLocked });
    const toggleNightMode = theme => updateUserBackend({
      theme: invertTheme(theme)
    });
    return (
      <div className='account-settings'>
        <Row>
          <Col xs={ 12 }>
            <h2>Account Settings - { username }</h2>
          </Col>
          <Col md={ 3 } xs= { 12 }>
            <Link to={`/${username}`}>
              <Button
                block={ true }
                bsSize='lg'
                bsStyle='primary'
                >
                View Public Profile
              </Button>
            </Link>
          </Col>
          <Col md={ 3 } mdPush={ 6 } xs={ 12 }>
            <Button
              block={ true }
              bsSize='lg'
              bsStyle='primary'
              href='/link/github'
              >
              Update from GitHub
            </Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={ 2 } mdPush={ 1 } xs={ 12 }>
            <Image className='avatar' src={ picture } thumbnail={ true } />
          </Col>
          <Col md={ 8 } mdPush={ 1 } xs = { 12 }>
            <blockquote
              className='about-me'
              >
              { bio }
            </blockquote>
          </Col>
        </Row>
        <br />
        <form id='camper-identity' onSubmit={ handleSubmit(this.handleSubmit) }>
          {
            Object.keys(fields).map(key => fields[key])
            .map(({ name, onChange, value }) => {
              const key = _.kebabCase(name);
              return (
              <Row className='editable-content-container' key={ key }>
                <Col sm={ 6 } xs={ 12 }>
                  <ControlLabel htmlFor={ key }>
                    { _.startCase(name) }
                  </ControlLabel>
                </Col>
                <Col sm={ 6 } xs={ 12 }>
                  <FormControl
                    bsSize='sm'
                    id={ key }
                    name={ name }
                    onChange={ onChange }
                    placeholder={ name }
                    required={ true }
                    type='text'
                    value={ value }
                  />
                </Col>
              </Row>
            );
            })
          }
          <Row>
            <Col md={ 2 } mdPush= { 10 } xs={ 12 }>
              <Button
                block={ true }
                bsSize='lg'
                bsStyle='primary'
                type='submit'
                >
                Save
              </Button>
            </Col>
          </Row>
        </form>
        <LockedSettings
          isLocked={ isLocked }
          toggleIsLocked={ toggleIsLocked }
        />
        <ThemeSettings
          currentTheme={ currentTheme }
          toggleNightMode={ toggleNightMode }
        />
      </div>
    );
  }
}

AccountSettings.displayName = 'AccountSettings';
AccountSettings.propTypes = propTypes;

export default reduxForm(
  {
    form: 'account-settings',
    fields: [ 'name', 'location' ]
  },
  mapStateToProps,
  mapDispatchToProps
)(AccountSettings);
