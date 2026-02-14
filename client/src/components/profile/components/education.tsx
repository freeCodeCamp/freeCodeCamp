import { isEqual } from 'lodash-es';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import type { TFunction } from 'i18next';
import { isValid, parse } from 'date-fns';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  FormGroupProps,
  Button,
  Spacer
} from '@freecodecamp/ui';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { EducationData } from '../../../redux/prop-types';
import { updateMyEducation } from '../../../redux/settings/actions';

import { FullWidthRow, interleave } from '../../helpers';
import BlockSaveButton from '../../helpers/form/block-save-button';
import SectionHeader from '../../settings/section-header';

type EducationProps = {
  education: EducationData[];
  t: TFunction;
  updateMyEducation: (obj: { education: EducationData[] }) => void;
};

interface EducationValidation {
  state: FormGroupProps['validationState'];
  message: string;
}

interface ValidationResult {
  state: FormGroupProps['validationState'];
  messageKey: string;
}

const mapDispatchToProps = {
  updateMyEducation
};

export const validateDate = ({ date }: { date: string }): ValidationResult => {
  if (!date) {
    return { state: 'success', messageKey: '' };
  }

  const dateRegex = /^\d{2}\/\d{4}$/;
  if (!dateRegex.test(date)) {
    return {
      state: 'error',
      messageKey: 'profile.education.date-format-error'
    };
  }

  const parsedDate = parse(date, 'MM/yyyy', new Date());

  if (!isValid(parsedDate)) {
    return {
      state: 'error',
      messageKey: 'profile.education.date-invalid'
    };
  }
  return { state: 'success', messageKey: '' };
};

function createEmptyEducationItem(): EducationData {
  return {
    id: nanoid(),
    school: '',
    degree: '',
    fieldOfStudy: '',
    location: '',
    startDate: '',
    endDate: '',
    description: ''
  };
}

const byId = (id: string) => (edu: EducationData) => edu.id === id;
const notById = (id: string) => (edu: EducationData) => edu.id !== id;

const EducationSettings = (props: EducationProps) => {
  const { t, education: initialEducation = [], updateMyEducation } = props;
  const [education, setEducation] = useState(initialEducation);
  const [newItemId, setNewItemId] = useState<string | null>(null);

  const createOnChangeHandler =
    (
      id: string,
      key:
        | 'school'
        | 'degree'
        | 'fieldOfStudy'
        | 'location'
        | 'startDate'
        | 'endDate'
        | 'description'
    ) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.preventDefault();
      const userInput = e.target.value.slice();
      setEducation(prevEducation => {
        return prevEducation.map(edu =>
          byId(id)(edu) ? { ...edu, [key]: userInput } : edu
        );
      });
    };

  const saveItem = (id: string) => {
    if (newItemId === id) {
      setNewItemId(null);
    }
    const itemToSave = education.find(byId(id));

    if (itemToSave && isItemValid(itemToSave)) {
      const itemIndex = props.education.findIndex(byId(id));
      const updatedEducation =
        itemIndex >= 0
          ? props.education.map(item => (byId(id)(item) ? itemToSave : item))
          : [itemToSave, ...props.education];
      updateMyEducation({ education: updatedEducation });
    }
  };

  const handleAdd = () => {
    const item = createEmptyEducationItem();
    setEducation(prev => [item, ...prev]);
    setNewItemId(item.id);
  };

  const handleRemoveItem = (id: string) => {
    setEducation(education.filter(notById(id)));
    if (newItemId === id) {
      setNewItemId(null);
    }
    const filteredEducation = props.education.filter(notById(id));
    updateMyEducation({ education: filteredEducation });
  };

  const isFormPristine = (id: string) => {
    const original = props.education.find(byId(id));
    if (!original) {
      return false;
    }
    const edited = education.find(byId(id));
    return isEqual(original, edited);
  };

  const getDescriptionValidation = (
    description: string
  ): EducationValidation => {
    const len = description.length;
    const charsLeft = 500 - len;
    if (charsLeft < 0) {
      return {
        state: 'error',
        message: t('validation.max-characters-500', { charsLeft: 0 })
      };
    }
    if (charsLeft < 41 && charsLeft > 0) {
      return {
        state: 'warning',
        message: t('validation.max-characters-500', { charsLeft })
      };
    }
    if (charsLeft === 500) {
      return { state: null, message: '' };
    }
    return { state: 'success', message: '' };
  };

  const getTextValidation = (
    value: string,
    field: 'school' | 'degree'
  ): EducationValidation => {
    if (!value) {
      return { state: 'error', message: t(`validation.${field}-required`) };
    }
    const len = value.length;
    if (len < 2) {
      return { state: 'error', message: t(`validation.${field}-short`) };
    }
    if (len > 144) {
      return { state: 'error', message: t(`validation.${field}-long`) };
    }
    return { state: 'success', message: '' };
  };

  const getOptionalTextValidation = (value: string): EducationValidation => {
    if (!value) {
      return { state: null, message: '' };
    }
    const len = value.length;
    if (len > 144) {
      return { state: 'error', message: t('validation.field-too-long') };
    }
    return { state: 'success', message: '' };
  };

  const getSchoolValidation = (school: string) =>
    getTextValidation(school, 'school');
  const getDegreeValidation = (degree: string) =>
    getTextValidation(degree, 'degree');

  const getStartDateValidation = (startDate: string): EducationValidation => {
    const result = validateDate({
      date: startDate
    });
    return {
      state: result.state,
      message: result.messageKey ? t(result.messageKey) : ''
    };
  };

  const getEndDateValidation = (endDate: string): EducationValidation => {
    const result = validateDate({
      date: endDate
    });
    return {
      state: result.state,
      message: result.messageKey ? t(result.messageKey) : ''
    };
  };

  const isItemValid = (educationItem: EducationData): boolean => {
    const { school, degree, startDate, endDate, description, fieldOfStudy } =
      educationItem;
    return (
      getSchoolValidation(school).state !== 'error' &&
      getDegreeValidation(degree).state !== 'error' &&
      getStartDateValidation(startDate || '').state !== 'error' &&
      getEndDateValidation(endDate || '').state !== 'error' &&
      getDescriptionValidation(description || '').state !== 'error' &&
      getOptionalTextValidation(fieldOfStudy || '').state !== 'error'
    );
  };

  const getFormValidation = (educationItem: EducationData) => {
    const {
      id,
      school,
      degree,
      fieldOfStudy,
      startDate,
      endDate,
      description
    } = educationItem;
    const { state: schoolState, message: schoolMessage } =
      getSchoolValidation(school);
    const { state: degreeState, message: degreeMessage } =
      getDegreeValidation(degree);
    const { state: fieldOfStudyState, message: fieldOfStudyMessage } =
      getOptionalTextValidation(fieldOfStudy || '');
    const { state: startDateState, message: startDateMessage } =
      getStartDateValidation(startDate || '');
    const { state: endDateState, message: endDateMessage } =
      getEndDateValidation(endDate || '');
    const { state: descriptionState, message: descriptionMessage } =
      getDescriptionValidation(description || '');
    const pristine = isFormPristine(id);
    const isButtonDisabled = !isItemValid(educationItem);
    return {
      isButtonDisabled,
      school: { schoolState, schoolMessage },
      degree: { degreeState, degreeMessage },
      fieldOfStudy: { fieldOfStudyState, fieldOfStudyMessage },
      startDate: { startDateState, startDateMessage },
      endDate: { endDateState, endDateMessage },
      description: { descriptionState, descriptionMessage },
      pristine
    };
  };

  const renderEducation = (educationItem: EducationData) => {
    const {
      id,
      school,
      degree,
      fieldOfStudy,
      location,
      startDate,
      endDate,
      description
    } = educationItem;
    const {
      isButtonDisabled,
      school: { schoolState, schoolMessage },
      degree: { degreeState, degreeMessage },
      fieldOfStudy: { fieldOfStudyState, fieldOfStudyMessage },
      startDate: { startDateState, startDateMessage },
      endDate: { endDateState, endDateMessage },
      description: { descriptionState, descriptionMessage },
      pristine
    } = getFormValidation(educationItem);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>, id: string) => {
      e.preventDefault();
      if (isButtonDisabled) return null;
      return saveItem(id);
    };
    return (
      <FullWidthRow key={id}>
        <form onSubmit={e => handleSubmit(e, id)}>
          <FormGroup
            controlId={`${id}-school`}
            validationState={
              pristine || (!pristine && !school) ? null : schoolState
            }
          >
            <ControlLabel htmlFor={`${id}-school-input`}>
              {t('profile.education.school')} <span aria-hidden='true'>*</span>
            </ControlLabel>
            <FormControl
              onChange={createOnChangeHandler(id, 'school')}
              required
              type='text'
              value={school}
              name='education-school'
              id={`${id}-school-input`}
              aria-describedby={
                schoolMessage ? `${id}-school-error` : undefined
              }
            />
            {schoolMessage ? (
              <HelpBlock id={`${id}-school-error`}>{schoolMessage}</HelpBlock>
            ) : null}
          </FormGroup>
          <FormGroup
            controlId={`${id}-degree`}
            validationState={
              pristine || (!pristine && !degree) ? null : degreeState
            }
          >
            <ControlLabel htmlFor={`${id}-degree-input`}>
              {t('profile.education.degree')} <span aria-hidden='true'>*</span>
            </ControlLabel>
            <FormControl
              onChange={createOnChangeHandler(id, 'degree')}
              required
              type='text'
              value={degree}
              name='education-degree'
              id={`${id}-degree-input`}
              aria-describedby={
                degreeMessage ? `${id}-degree-error` : undefined
              }
            />
            {degreeMessage ? (
              <HelpBlock id={`${id}-degree-error`}>{degreeMessage}</HelpBlock>
            ) : null}
          </FormGroup>
          <FormGroup
            controlId={`${id}-fieldOfStudy`}
            validationState={pristine ? null : fieldOfStudyState}
          >
            <ControlLabel htmlFor={`${id}-fieldOfStudy-input`}>
              {t('profile.education.field-of-study')}
            </ControlLabel>
            <FormControl
              onChange={createOnChangeHandler(id, 'fieldOfStudy')}
              type='text'
              value={fieldOfStudy || ''}
              name='education-fieldOfStudy'
              id={`${id}-fieldOfStudy-input`}
              aria-describedby={
                fieldOfStudyMessage ? `${id}-fieldOfStudy-error` : undefined
              }
            />
            {fieldOfStudyMessage ? (
              <HelpBlock id={`${id}-fieldOfStudy-error`}>
                {fieldOfStudyMessage}
              </HelpBlock>
            ) : null}
          </FormGroup>
          <FormGroup controlId={`${id}-location`}>
            <ControlLabel htmlFor={`${id}-location-input`}>
              {t('profile.education.location')}
            </ControlLabel>
            <FormControl
              onChange={createOnChangeHandler(id, 'location')}
              type='text'
              value={location || ''}
              name='education-location'
              id={`${id}-location-input`}
            />
          </FormGroup>
          <FormGroup
            controlId={`${id}-startDate`}
            validationState={
              pristine || (!pristine && !startDate) ? null : startDateState
            }
          >
            <ControlLabel htmlFor={`${id}-startDate-input`}>
              {t('profile.education.start-date')}
            </ControlLabel>
            <FormControl
              onChange={createOnChangeHandler(id, 'startDate')}
              type='text'
              value={startDate || ''}
              name='education-startDate'
              id={`${id}-startDate-input`}
              placeholder='MM/YYYY'
              aria-describedby={
                startDateMessage ? `${id}-startDate-error` : undefined
              }
            />
            {startDateMessage ? (
              <HelpBlock id={`${id}-startDate-error`}>
                {startDateMessage}
              </HelpBlock>
            ) : null}
          </FormGroup>
          <FormGroup
            controlId={`${id}-endDate`}
            validationState={
              pristine || (!pristine && !endDate) ? null : endDateState
            }
          >
            <ControlLabel htmlFor={`${id}-endDate-input`}>
              {t('profile.education.end-date')} (
              {t('profile.education.end-date-helper')})
            </ControlLabel>
            <FormControl
              onChange={createOnChangeHandler(id, 'endDate')}
              type='text'
              value={endDate || ''}
              name='education-endDate'
              id={`${id}-endDate-input`}
              aria-describedby={
                endDateMessage ? `${id}-endDate-error` : undefined
              }
            />
            {endDateMessage ? (
              <HelpBlock id={`${id}-endDate-error`}>{endDateMessage}</HelpBlock>
            ) : null}
          </FormGroup>
          <FormGroup
            controlId={`${id}-description`}
            validationState={pristine ? null : descriptionState}
          >
            <ControlLabel htmlFor={`${id}-description-input`}>
              {t('profile.education.description')}
            </ControlLabel>
            <FormControl
              componentClass='textarea'
              onChange={createOnChangeHandler(id, 'description')}
              value={description || ''}
              name='education-description'
              id={`${id}-description-input`}
              aria-describedby={
                descriptionMessage ? `${id}-description-error` : undefined
              }
            />
            {descriptionMessage ? (
              <HelpBlock id={`${id}-description-error`}>
                {descriptionMessage}
              </HelpBlock>
            ) : null}
          </FormGroup>
          <BlockSaveButton
            disabled={isButtonDisabled || pristine}
            bgSize='large'
            {...((isButtonDisabled || pristine) && { tabIndex: -1 })}
          >
            {t('profile.education.save')}
          </BlockSaveButton>
          <Spacer size='xs' />
          <Button
            block
            size='large'
            variant='danger'
            onClick={() => handleRemoveItem(id)}
            type='button'
          >
            {t('profile.education.remove')}
          </Button>
        </form>
      </FullWidthRow>
    );
  };

  return (
    <section id='education-settings'>
      <SectionHeader>{t('profile.education.heading')}</SectionHeader>
      <FullWidthRow>
        <p>{t('profile.education.share-education')}</p>
        <Spacer size='xs' />
        <Button
          block
          size='large'
          variant='primary'
          disabled={newItemId !== null}
          onClick={handleAdd}
          type='button'
        >
          {t('profile.education.add')}
        </Button>
      </FullWidthRow>
      <Spacer size='l' />
      {interleave(education.map(renderEducation), () => (
        <>
          <Spacer size='m' />
          <hr />
          <Spacer size='m' />
        </>
      ))}
    </section>
  );
};

EducationSettings.displayName = 'EducationSettings';

export default withTranslation()(
  connect(null, mapDispatchToProps)(EducationSettings)
);
