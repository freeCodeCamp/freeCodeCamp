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
import { ExperienceData } from '../../../redux/prop-types';
import { updateMyExperience } from '../../../redux/settings/actions';

import { FullWidthRow, interleave } from '../../helpers';
import BlockSaveButton from '../../helpers/form/block-save-button';
import SectionHeader from '../../settings/section-header';

type ExperienceProps = {
  experience: ExperienceData[];
  t: TFunction;
  updateMyExperience: (obj: { experience: ExperienceData[] }) => void;
};

interface ExperienceValidation {
  state: FormGroupProps['validationState'];
  message: string;
}

interface ValidationResult {
  state: FormGroupProps['validationState'];
  messageKey: string;
}

const mapDispatchToProps = {
  updateMyExperience
};

export const validateDate = ({
  date,
  isRequired,
  fieldName
}: {
  date: string;
  isRequired: boolean;
  fieldName: 'start-date' | 'end-date';
}): ValidationResult => {
  // Check if date is required and empty
  if (isRequired && !date) {
    return { state: 'error', messageKey: `validation.${fieldName}-required` };
  }

  // Allow empty for optional dates
  if (!date) {
    return { state: 'success', messageKey: '' };
  }

  // Check if date matches MM/YYYY format
  const dateRegex = /^\d{2}\/\d{4}$/;
  if (!dateRegex.test(date)) {
    return {
      state: 'error',
      messageKey: 'profile.experience.date-format-error'
    };
  }

  const parsedDate = parse(date, 'MM/yyyy', new Date());
  // Check if the parsed date is valid (e.g., not an invalid month like 13)
  if (!isValid(parsedDate)) {
    return {
      state: 'error',
      messageKey: 'profile.experience.date-invalid'
    };
  }
  return { state: 'success', messageKey: '' };
};

function createEmptyExperienceItem(): ExperienceData {
  return {
    id: nanoid(),
    title: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
    description: ''
  };
}

const byId = (id: string) => (exp: ExperienceData) => exp.id === id;
const notById = (id: string) => (exp: ExperienceData) => exp.id !== id;

const ExperienceSettings = (props: ExperienceProps) => {
  const { t, experience: initialExperience = [], updateMyExperience } = props;
  const [experience, setExperience] = useState(initialExperience);
  const [newItemId, setNewItemId] = useState<string | null>(null);

  const createOnChangeHandler =
    (
      id: string,
      key:
        | 'title'
        | 'company'
        | 'location'
        | 'startDate'
        | 'endDate'
        | 'description'
    ) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.preventDefault();
      const userInput = e.target.value.slice();
      setExperience(prevExperience => {
        return prevExperience.map(exp =>
          byId(id)(exp) ? { ...exp, [key]: userInput } : exp
        );
      });
    };

  const saveItem = (id: string) => {
    if (newItemId === id) {
      setNewItemId(null);
    }
    const itemToSave = experience.find(byId(id));

    if (itemToSave && isItemValid(itemToSave)) {
      const itemIndex = props.experience.findIndex(byId(id));
      const updatedExperience =
        itemIndex >= 0
          ? props.experience.map(item => (byId(id)(item) ? itemToSave : item))
          : [itemToSave, ...props.experience];
      updateMyExperience({ experience: updatedExperience });
    }
  };

  const handleAdd = () => {
    const item = createEmptyExperienceItem();
    setExperience(prev => [item, ...prev]);
    setNewItemId(item.id);
  };

  const handleRemoveItem = (id: string) => {
    setExperience(experience.filter(notById(id)));
    if (newItemId === id) {
      setNewItemId(null);
    }
    const filteredExperience = props.experience.filter(notById(id));
    updateMyExperience({ experience: filteredExperience });
  };

  const isFormPristine = (id: string) => {
    const original = props.experience.find(byId(id));
    if (!original) {
      return false;
    }
    const edited = experience.find(byId(id));
    return isEqual(original, edited);
  };

  const getDescriptionValidation = (
    description: string
  ): ExperienceValidation => {
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
    field: 'title' | 'company'
  ): ExperienceValidation => {
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

  const getTitleValidation = (title: string) =>
    getTextValidation(title, 'title');
  const getCompanyValidation = (company: string) =>
    getTextValidation(company, 'company');

  const getStartDateValidation = (startDate: string): ExperienceValidation => {
    const result = validateDate({
      date: startDate,
      isRequired: true,
      fieldName: 'start-date'
    });
    return {
      state: result.state,
      message: result.messageKey ? t(result.messageKey) : ''
    };
  };

  const getEndDateValidation = (endDate: string): ExperienceValidation => {
    const result = validateDate({
      date: endDate,
      isRequired: false,
      fieldName: 'end-date'
    });
    return {
      state: result.state,
      message: result.messageKey ? t(result.messageKey) : ''
    };
  };

  const isItemValid = (experienceItem: ExperienceData): boolean => {
    const { title, company, startDate, endDate, description } = experienceItem;
    return (
      getTitleValidation(title).state !== 'error' &&
      getCompanyValidation(company).state !== 'error' &&
      getStartDateValidation(startDate).state !== 'error' &&
      getEndDateValidation(endDate || '').state !== 'error' &&
      getDescriptionValidation(description).state !== 'error'
    );
  };

  const getFormValidation = (experienceItem: ExperienceData) => {
    const { id, title, company, startDate, endDate, description } =
      experienceItem;
    const { state: titleState, message: titleMessage } =
      getTitleValidation(title);
    const { state: companyState, message: companyMessage } =
      getCompanyValidation(company);
    const { state: startDateState, message: startDateMessage } =
      getStartDateValidation(startDate);
    const { state: endDateState, message: endDateMessage } =
      getEndDateValidation(endDate || '');
    const { state: descriptionState, message: descriptionMessage } =
      getDescriptionValidation(description);
    const pristine = isFormPristine(id);
    const isButtonDisabled = !isItemValid(experienceItem);
    return {
      isButtonDisabled,
      title: { titleState, titleMessage },
      company: { companyState, companyMessage },
      startDate: { startDateState, startDateMessage },
      endDate: { endDateState, endDateMessage },
      description: { descriptionState, descriptionMessage },
      pristine
    };
  };

  const renderExperience = (experienceItem: ExperienceData) => {
    const { id, title, company, location, startDate, endDate, description } =
      experienceItem;
    const {
      isButtonDisabled,
      title: { titleState, titleMessage },
      company: { companyState, companyMessage },
      startDate: { startDateState, startDateMessage },
      endDate: { endDateState, endDateMessage },
      description: { descriptionState, descriptionMessage },
      pristine
    } = getFormValidation(experienceItem);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>, id: string) => {
      e.preventDefault();
      if (isButtonDisabled) return null;
      return saveItem(id);
    };
    return (
      <FullWidthRow key={id}>
        <form onSubmit={e => handleSubmit(e, id)}>
          <FormGroup
            controlId={`${id}-title`}
            validationState={
              pristine || (!pristine && !title) ? null : titleState
            }
          >
            <ControlLabel htmlFor={`${id}-title-input`}>
              {t('profile.experience.job-title')}{' '}
              <span aria-hidden='true'>*</span>
            </ControlLabel>
            <FormControl
              onChange={createOnChangeHandler(id, 'title')}
              required
              type='text'
              value={title}
              name='experience-title'
              id={`${id}-title-input`}
              aria-describedby={titleMessage ? `${id}-title-error` : undefined}
            />
            {titleMessage ? (
              <HelpBlock id={`${id}-title-error`}>{titleMessage}</HelpBlock>
            ) : null}
          </FormGroup>
          <FormGroup
            controlId={`${id}-company`}
            validationState={
              pristine || (!pristine && !company) ? null : companyState
            }
          >
            <ControlLabel htmlFor={`${id}-company-input`}>
              {t('profile.experience.company')}{' '}
              <span aria-hidden='true'>*</span>
            </ControlLabel>
            <FormControl
              onChange={createOnChangeHandler(id, 'company')}
              required
              type='text'
              value={company}
              name='experience-company'
              id={`${id}-company-input`}
              aria-describedby={
                companyMessage ? `${id}-company-error` : undefined
              }
            />
            {companyMessage ? (
              <HelpBlock id={`${id}-company-error`}>{companyMessage}</HelpBlock>
            ) : null}
          </FormGroup>
          <FormGroup controlId={`${id}-location`}>
            <ControlLabel htmlFor={`${id}-location-input`}>
              {t('profile.experience.location')}
            </ControlLabel>
            <FormControl
              onChange={createOnChangeHandler(id, 'location')}
              type='text'
              value={location || ''}
              name='experience-location'
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
              {t('profile.experience.start-date')}{' '}
              <span aria-hidden='true'>*</span>
            </ControlLabel>
            <FormControl
              onChange={createOnChangeHandler(id, 'startDate')}
              required
              type='text'
              value={startDate}
              name='experience-startDate'
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
              {t('profile.experience.end-date')} (
              {t('profile.experience.end-date-helper')})
            </ControlLabel>
            <FormControl
              onChange={createOnChangeHandler(id, 'endDate')}
              type='text'
              value={endDate || ''}
              name='experience-endDate'
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
              {t('profile.experience.description')}{' '}
              <span aria-hidden='true'>*</span>
            </ControlLabel>
            <FormControl
              componentClass='textarea'
              onChange={createOnChangeHandler(id, 'description')}
              required
              value={description}
              name='experience-description'
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
            {t('profile.experience.save')}
          </BlockSaveButton>
          <Spacer size='xs' />
          <Button
            block
            size='large'
            variant='danger'
            onClick={() => handleRemoveItem(id)}
            type='button'
          >
            {t('profile.experience.remove')}
          </Button>
        </form>
      </FullWidthRow>
    );
  };

  return (
    <section id='experience-settings'>
      <SectionHeader>{t('profile.experience.heading')}</SectionHeader>
      <FullWidthRow>
        <p>{t('profile.experience.share-experience')}</p>
        <Spacer size='xs' />
        <Button
          block
          size='large'
          variant='primary'
          disabled={newItemId !== null}
          onClick={handleAdd}
          type='button'
        >
          {t('profile.experience.add')}
        </Button>
      </FullWidthRow>
      <Spacer size='l' />
      {interleave(experience.map(renderExperience), () => (
        <>
          <Spacer size='m' />
          <hr />
          <Spacer size='m' />
        </>
      ))}
    </section>
  );
};

ExperienceSettings.displayName = 'ExperienceSettings';

export default withTranslation()(
  connect(null, mapDispatchToProps)(ExperienceSettings)
);
