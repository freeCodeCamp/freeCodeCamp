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
   classroomSetting = ''
  }) => ({
    initialValues: {
      classroomSetting
    }
  })
);

const formFields = [
  'classroomSetting'
];

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateUserBackend
  }, dispatch);
}

const propTypes = {
  fields: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  updateUserBackend: PropTypes.func.isRequired,
  username: PropTypes.string,
  classroomSetting: PropTypes.string
};

class ClassroomSettings extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({...others}) {
    this.props.updateUserBackend({ ...others});
  }

  render() {
    const {
      fields,
      fields: { _meta: { allPristine } },
      handleSubmit
    } = this.props;
    const options = {
      types: formFields.reduce(
        (all, current) => ({ ...all, [current]: 'input' }),
        {}
      ),
      placeholder: false
    };
    return (
      <div className='classroom-settings'>
        <SectionHeader>
          Classroom Setting
        </SectionHeader>
        <FullWidthRow>
          <form
            id='classroom-handle-settings'
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

ClassroomSettings.displayName = 'ClassroomSettings';
ClassroomSettings.propTypes = propTypes;

export default reduxForm(
  {
    form: 'classroom-settings',
    fields: formFields
  },
  mapStateToProps,
  mapDispatchToProps
)(ClassroomSettings);
