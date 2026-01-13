import { findIndex, find, isEqual } from 'lodash-es';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import type { TFunction } from 'i18next';
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
  setIsEditing: (isEditing: boolean) => void;
};

interface ExperienceValidation {
  state: FormGroupProps['validationState'];
  message: string;
}

const mapDispatchToProps = {
  updateMyExperience
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

function createFindById(id: string) {
  return (exp: ExperienceData) => exp.id === id;
}

const ExperienceSettings = (props: ExperienceProps) => {
  const {
    t,
    experience: initialExperience = [],
    updateMyExperience,
    setIsEditing
  } = props;
  const [experience, setExperience] = useState(initialExperience);
  const [unsavedItemId, setUnsavedItemId] = useState<string | null>(null);

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
        const mutableExperience = [...prevExperience];
        const index = findIndex(prevExperience, exp => exp.id === id);
        mutableExperience[index] = {
          ...mutableExperience[index],
          [key]: userInput
        };
        return mutableExperience;
      });
    };

  const updateItem = (
    id: string,
    updatedExperience?: ExperienceData[],
    closeModal = false
  ) => {
    if (unsavedItemId === id) {
      setUnsavedItemId(null);
    }
    const experienceToUpdate = updatedExperience || experience;
    const currentlySaved = props.experience;
    const itemToUpdate = experienceToUpdate.find(item => item.id === id);

    if (itemToUpdate && isItemValid(itemToUpdate)) {
      const itemIndex = currentlySaved.findIndex(item => item.id === id);
      const updatedSaved =
        itemIndex >= 0
          ? currentlySaved.map(item => (item.id === id ? itemToUpdate : item))
          : [itemToUpdate, ...currentlySaved];
      updateMyExperience({ experience: updatedSaved });
    }

    if (closeModal) {
      setIsEditing(false);
    }
  };

  const handleAdd = () => {
    const item = createEmptyExperienceItem();
    setExperience(prev => [item, ...prev]);
    setUnsavedItemId(item.id);
  };

  const handleRemoveItem = (id: string) => {
    const newExperience = experience.filter(exp => exp.id !== id);
    setExperience(newExperience);
    updateItem(id, newExperience, true);
  };

  const isFormPristine = (id: string) => {
    const original = find(props.experience, createFindById(id));
    if (!original) {
      return false;
    }
    const edited = find(experience, createFindById(id));
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

  const getTitleValidation = (title: string): ExperienceValidation => {
    if (!title) {
      return { state: 'error', message: t('validation.title-required') };
    }
    const len = title.length;
    if (len < 2) {
      return { state: 'error', message: t('validation.title-short') };
    }
    if (len > 144) {
      return { state: 'error', message: t('validation.title-long') };
    }
    return { state: 'success', message: '' };
  };

  const getCompanyValidation = (company: string): ExperienceValidation => {
    if (!company) {
      return { state: 'error', message: t('validation.company-required') };
    }
    const len = company.length;
    if (len < 2) {
      return { state: 'error', message: t('validation.company-short') };
    }
    if (len > 144) {
      return { state: 'error', message: t('validation.company-long') };
    }
    return { state: 'success', message: '' };
  };

  const getStartDateValidation = (startDate: string): ExperienceValidation => {
    if (!startDate) {
      return { state: 'error', message: t('validation.start-date-required') };
    }
    return { state: 'success', message: '' };
  };

  const isItemValid = (experienceItem: ExperienceData): boolean => {
    const { title, company, startDate, description } = experienceItem;
    return (
      getTitleValidation(title).state !== 'error' &&
      getCompanyValidation(company).state !== 'error' &&
      getStartDateValidation(startDate).state !== 'error' &&
      getDescriptionValidation(description).state !== 'error'
    );
  };

  const formCorrect = (experienceItem: ExperienceData) => {
    const { id, title, company, startDate, description } = experienceItem;
    const { state: titleState, message: titleMessage } =
      getTitleValidation(title);
    const { state: companyState, message: companyMessage } =
      getCompanyValidation(company);
    const { state: startDateState, message: startDateMessage } =
      getStartDateValidation(startDate);
    const { state: descriptionState, message: descriptionMessage } =
      getDescriptionValidation(description);
    const pristine = isFormPristine(id);
    const isButtonDisabled = !isItemValid(experienceItem);
    return {
      isButtonDisabled,
      title: { titleState, titleMessage },
      company: { companyState, companyMessage },
      startDate: { startDateState, startDateMessage },
      desc: { descriptionState, descriptionMessage },
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
      desc: { descriptionState, descriptionMessage },
      pristine
    } = formCorrect(experienceItem);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>, id: string) => {
      e.preventDefault();
      if (isButtonDisabled) return null;
      return updateItem(id);
    };
    return (
      <FullWidthRow key={id}>
        <form
          onSubmit={e => handleSubmit(e, id)}
          id='experience-items'
          data-playwright-test-label='experience-items'
        >
          <FormGroup
            controlId={`${id}-title`}
            validationState={
              pristine || (!pristine && !title) ? null : titleState
            }
          >
            <ControlLabel htmlFor={`${id}-title-input`}>
              {t('profile.experience.job-title')} *
            </ControlLabel>
            <FormControl
              onChange={createOnChangeHandler(id, 'title')}
              required
              type='text'
              value={title}
              name='experience-title'
              id={`${id}-title-input`}
            />
            {titleMessage ? (
              <HelpBlock data-playwright-test-label='title-validation'>
                {titleMessage}
              </HelpBlock>
            ) : null}
          </FormGroup>
          <FormGroup
            controlId={`${id}-company`}
            validationState={
              pristine || (!pristine && !company) ? null : companyState
            }
          >
            <ControlLabel htmlFor={`${id}-company-input`}>
              {t('profile.experience.company')} *
            </ControlLabel>
            <FormControl
              onChange={createOnChangeHandler(id, 'company')}
              required
              type='text'
              value={company}
              name='experience-company'
              id={`${id}-company-input`}
            />
            {companyMessage ? (
              <HelpBlock data-playwright-test-label='company-validation'>
                {companyMessage}
              </HelpBlock>
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
              {t('profile.experience.start-date')} *
            </ControlLabel>
            <FormControl
              onChange={createOnChangeHandler(id, 'startDate')}
              required
              type='month'
              value={startDate}
              name='experience-startDate'
              id={`${id}-startDate-input`}
            />
            {startDateMessage ? (
              <HelpBlock data-playwright-test-label='startDate-validation'>
                {startDateMessage}
              </HelpBlock>
            ) : null}
          </FormGroup>
          <FormGroup controlId={`${id}-endDate`}>
            <ControlLabel htmlFor={`${id}-endDate-input`}>
              {t('profile.experience.end-date')} (
              {t('profile.experience.end-date-helper')})
            </ControlLabel>
            <FormControl
              onChange={createOnChangeHandler(id, 'endDate')}
              type='month'
              value={endDate || ''}
              name='experience-endDate'
              id={`${id}-endDate-input`}
            />
          </FormGroup>
          <FormGroup
            controlId={`${id}-description`}
            validationState={pristine ? null : descriptionState}
          >
            <ControlLabel htmlFor={`${id}-description-input`}>
              {t('profile.experience.description')}
            </ControlLabel>
            <FormControl
              componentClass='textarea'
              onChange={createOnChangeHandler(id, 'description')}
              required
              value={description}
              name='experience-description'
              id={`${id}-description-input`}
            />
            {descriptionMessage ? (
              <HelpBlock data-playwright-test-label='description-validation'>
                {descriptionMessage}
              </HelpBlock>
            ) : null}
          </FormGroup>
          <BlockSaveButton
            disabled={isButtonDisabled || pristine}
            bgSize='large'
            data-playwright-test-label='save-experience'
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
          disabled={unsavedItemId !== null}
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
