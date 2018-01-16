import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import {
  Button,
  ControlLabel,
  FormControl,
  Row,
  Col
} from 'react-bootstrap';

import {
  BlockSaveButton,
  FormFields,
  FullWidthRow
} from '../../../helperComponents';
import { userSelector } from '../../../redux';
import { updateUserBackend } from '../../../entities/user';

const mapStateToProps = createSelector(
  userSelector,
  ({
    githubURL = '',
    linkedin = '',
    twitter = '',
    website = ''
  }) => ({
    initialValues: {
      githubURL,
      linkedin,
      twitter,
      website
    }
  })
);

const formFields = [ 'githubURL', 'linkedin', 'twitter', 'website' ];

function mapoDispatchToProps(dispatch) {
  return bindActionCreators({
    updateUserBackend
  }, dispatch);
}

const propTypes = {
  fields: PropTypes.object,
  githubURL: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  linkedin: PropTypes.string,
  twitter: PropTypes.string,
  updateUserBackend: PropTypes.func.isRequired,
  username: PropTypes.string,
  website: PropTypes.string
};

class InternetSettings extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.updateUserBackend(values);
  }

  render() {
    const {
      fields,
      handleSubmit
    } = this.props;
    const options = {
      types: {
        githubURL: 'url',
        linkedin: 'url',
        website: 'url'
      }
    };
    return (
      <div className='internet-settings'>
        <FullWidthRow>
          <h2>Your internet presence</h2>
          <br />
        </FullWidthRow>
        <FullWidthRow>
          <form
            id='internet-handle-settings'
            onSubmit={ handleSubmit(this.handleSubmit) }
            >
            <FormFields
              fields={ fields }
              options={ options }
            />
            <BlockSaveButton />
          </form>
        </FullWidthRow>
      </div>
    );
  }
}

InternetSettings.displayName = 'InternetSettings';
InternetSettings.propTypes = propTypes;

export default reduxForm(
  {
    form: 'internet-settings',
    fields: formFields
  },
  mapStateToProps,
  mapoDispatchToProps
)(InternetSettings);
