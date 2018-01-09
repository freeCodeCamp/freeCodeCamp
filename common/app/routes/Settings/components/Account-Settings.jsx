import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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
import { toggleNightMode, userSelector } from '../../../redux';
import {
  editUserFlag,
  toggleUserFlag,
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
    isLocked,
    location,
    name,
    picture,
    username
  })
);


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    editUserFlag,
    toggleNightMode,
    toggleUserFlag,
    updateUserBackend
  }, dispatch);
}

const propTypes = {
    bio: PropTypes.string,
    currentTheme: PropTypes.string,
    editUserFlag: PropTypes.func.isRequired,
    isLocked: PropTypes.bool,
    location: PropTypes.string,
    name: PropTypes.string,
    picture: PropTypes.string,
    toggleUserFlag: PropTypes.func.isRequired,
    updateUserBackend: PropTypes.func.isRequired,
    username: PropTypes.string
};

const fields = ['Name', 'Location'];

class AccountSettings extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const flag = e.target.id;
    this.props.updateUserBackend({flag, newValue: this.props[flag] });
  }

  render() {
    const {
      bio,
      currentTheme,
      editUserFlag,
      isLocked,
      picture,
      toggleUserFlag,
      username
    } = this.props;
    const updatehanders = {
      name: event => editUserFlag('name', username, event.target.value),
      location: event => editUserFlag('location', username, event.target.value)
    };
    const toggleIsLocked = () => toggleUserFlag('isLocked', username);
    const toggleNightMode = theme =>
      editUserFlag('theme', username, invertTheme(theme));
    return (
      <div className='account-settings'>
        <Row>
          <Col xs={ 12 }>
            <h2>Account Settings</h2>
          </Col>
          <Col md={ 3 } xs= { 12 }>
            <Link to={`/${username}`}>
              <Button
                block={ true }
                bsSize='lg'
                bsStyle='primary'
                href='/link/github'
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
          <Col md={ 2 } xs={ 12 }>
            <Image className='avatar' src={ picture } thumbnail={ true } />
          </Col>
          <Col md={ 10 } xs = { 12 }>
            <blockquote
              className='about-me'
              >
              { bio }
            </blockquote>
          </Col>
        </Row>
        <br />
        {
          fields.map(field => {
            const key = field.toLowerCase();
            return (
              <form id={ key } key={ key } onSubmit={ this.handleSubmit } >
                <Row className='editable-content-container'>
                  <Col sm={ 6 } xs={ 12 }>
                    <ControlLabel htmlFor={ key }>
                      { field }
                    </ControlLabel>
                  </Col>
                  <Col sm={ 5 } xs={ 12 }>
                    <FormControl
                      bsSize='sm'
                      id={ key }
                      onChange={ updatehanders[key] }
                      placeholder={ field }
                      required={ true }
                      type='text'
                      value={ this.props[key] }
                    />
                  </Col>
                  <Col sm={ 1 } xs={ 12 }>
                    <Button
                      bsStyle='primary'
                      type='submit'
                      >
                      Save
                    </Button>
                  </Col>
                </Row>
              </form>
            );
          })
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings);
