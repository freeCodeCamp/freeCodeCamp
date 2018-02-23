import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';

import { FullWidthRow, Spacer } from '../../../helperComponents';
import { BlockSaveButton, BlockSaveWrapper, FormFields } from '../formHelpers';
import SectionHeader from './SectionHeader.jsx';
import { userSelector } from '../../../redux';
import { updateUserBackend } from '../redux';

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

function mapDispatchToProps(dispatch) {
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
      fields: { _meta: { allPristine } },
      handleSubmit
    } = this.props;
    const options = {
      types: formFields.reduce(
        (all, current) => ({ ...all, [current]: 'url' }),
        {}
      ),
      placeholder: false
    };
    return (
      <div className='internet-settings'>
        <SectionHeader>
          Your Internet Presence
        </SectionHeader>
        <FullWidthRow>
          <form
            id='internet-handle-settings'
            onSubmit={ handleSubmit(this.handleSubmit) }
            >
            <FormFields
              fields={ fields }
              options={ options }
            />
            <Spacer />
            <BlockSaveWrapper>
              <BlockSaveButton disabled={ allPristine }/>
            </BlockSaveWrapper>
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
  mapDispatchToProps
)(InternetSettings);
