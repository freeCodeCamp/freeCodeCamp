import { isEqual } from 'lodash-es';
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
import isURL from 'validator/lib/isURL';
import { connect } from 'react-redux';
import { PortfolioProjectData } from '../../../redux/prop-types';

import { hasProtocolRE } from '../../../utils';

import { FullWidthRow, interleave } from '../../helpers';
import BlockSaveButton from '../../helpers/form/block-save-button';
import SectionHeader from '../../settings/section-header';
import { updateMyPortfolio } from '../../../redux/settings/actions';

type PortfolioProps = {
  portfolio: PortfolioProjectData[];
  t: TFunction;
  updateMyPortfolio: (obj: { portfolio: PortfolioProjectData[] }) => void;
};

interface ProfileValidation {
  state: FormGroupProps['validationState'];
  message: string;
}

const mapDispatchToProps: {
  updateMyPortfolio: () => void;
} = {
  updateMyPortfolio
};

function createEmptyPortfolioItem(): PortfolioProjectData {
  return {
    id: nanoid(),
    title: '',
    description: '',
    url: '',
    image: ''
  };
}

const byId = (id: string) => (p: PortfolioProjectData) => p.id === id;
const notById = (id: string) => (p: PortfolioProjectData) => p.id !== id;

const PortfolioSettings = (props: PortfolioProps) => {
  const { t, portfolio: initialPortfolio = [], updateMyPortfolio } = props;
  const [portfolio, setPortfolio] = useState(initialPortfolio);
  const [unsavedItemId, setUnsavedItemId] = useState<string | null>(null);
  const [imageValidation, setImageValid] = useState<ProfileValidation>({
    state: 'success',
    message: ''
  });

  const checkIfValidImage = (url: string): Promise<ProfileValidation> => {
    const img = new Image();

    return new Promise(resolve => {
      img.onerror = () =>
        resolve({ state: 'error', message: t('validation.url-not-image') });
      img.onload = () => resolve({ state: 'success', message: '' });
      img.src = url;
    });
  };

  const createOnChangeHandler =
    (id: string, key: 'description' | 'image' | 'title' | 'url') =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const userInput = e.target.value.slice();
      setPortfolio(prevPortfolio =>
        prevPortfolio.map(p => (byId(id)(p) ? { ...p, [key]: userInput } : p))
      );
      if (key === 'image') {
        if (userInput) {
          void checkIfValidImage(userInput).then(setImageValid);
        } else {
          setImageValid({ state: 'success', message: '' });
        }
      }
    };

  const saveItem = (id: string) => {
    if (unsavedItemId === id) {
      setUnsavedItemId(null);
    }
    const itemToSave = portfolio.find(byId(id));

    if (itemToSave) {
      const itemIndex = props.portfolio.findIndex(byId(id));
      const updatedPortfolio =
        itemIndex >= 0
          ? props.portfolio.map(item => (byId(id)(item) ? itemToSave : item))
          : [itemToSave, ...props.portfolio];
      updateMyPortfolio({ portfolio: updatedPortfolio });
    }
  };

  const handleAdd = () => {
    const item = createEmptyPortfolioItem();
    setPortfolio(prev => [item, ...prev]);
    setUnsavedItemId(item.id);
  };

  const handleRemoveItem = (id: string) => {
    setPortfolio(portfolio.filter(notById(id)));
    if (unsavedItemId === id) {
      setUnsavedItemId(null);
    }
    updateMyPortfolio({ portfolio: props.portfolio.filter(notById(id)) });
  };

  const isFormPristine = (id: string) => {
    const original = props.portfolio.find(byId(id));
    if (!original) {
      return false;
    }
    const edited = portfolio.find(byId(id));
    return isEqual(original, edited);
  };

  const getDescriptionValidation = (description: string): ProfileValidation => {
    const len = description.length;
    const charsLeft = 288 - len;
    if (charsLeft < 0) {
      return {
        state: 'error',
        message: t('validation.max-characters', { charsLeft: 0 })
      };
    }
    if (charsLeft < 41 && charsLeft > 0) {
      return {
        state: 'warning',
        message: t('validation.max-characters', { charsLeft })
      };
    }
    if (charsLeft === 288) {
      return { state: null, message: '' };
    }
    return { state: 'success', message: '' };
  };

  const getTitleValidation = (title: string): ProfileValidation => {
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

  const getUrlValidation = (
    url: string
  ): { state: 'success' | 'warning' | 'error'; message: string } => {
    if (!url) {
      return { state: 'success', message: '' };
    }
    if (url.length >= 4 && !hasProtocolRE.test(url)) {
      return { state: 'error', message: t('validation.invalid-protocol') };
    }
    return isURL(url)
      ? { state: 'success', message: '' }
      : { state: 'warning', message: t('validation.use-valid-url') };
  };

  const formCorrect = (portfolioItem: PortfolioProjectData) => {
    const { id, title, description, url, image } = portfolioItem;
    const { state: titleState, message: titleMessage } =
      getTitleValidation(title);
    const { state: urlState, message: urlMessage } = getUrlValidation(url);
    const { state: descriptionState, message: descriptionMessage } =
      getDescriptionValidation(description);
    const { state: imageState, message: imageMessage } =
      getUrlValidation(image);
    const pristine = isFormPristine(id);
    const urlIsValid = !isURL(url, {
      protocols: ['http', 'https'],
      require_tld: true,
      require_protocol: true
    });
    const isButtonDisabled = [
      titleState,
      urlState,
      descriptionState,
      imageState,
      urlIsValid
    ].some(state => state === 'error' || false);
    return {
      isButtonDisabled,
      title: { titleState, titleMessage },
      url: { urlState, urlMessage },
      image: { imageState, imageMessage },
      desc: { descriptionState, descriptionMessage },
      pristine
    };
  };

  const renderPortfolio = (portfolioItem: PortfolioProjectData) => {
    const { id, title, description, url, image } = portfolioItem;
    const {
      isButtonDisabled,
      title: { titleState, titleMessage },
      url: { urlState, urlMessage },
      image: { imageState, imageMessage },
      desc: { descriptionState, descriptionMessage },
      pristine
    } = formCorrect(portfolioItem);
    const imageIsInvalid = imageValidation.state === 'error';
    const saveDisabled = isButtonDisabled || pristine || imageIsInvalid;
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (saveDisabled) return null;
      return saveItem(id);
    };
    const combineImageStatus =
      imageState === 'success' && !imageIsInvalid ? null : 'error';
    const combineImageMessage = imageMessage || imageValidation.message;
    return (
      <FullWidthRow key={id}>
        <form
          onSubmit={handleSubmit}
          id='portfolio-items'
          data-playwright-test-label='portfolio-items'
        >
          <FormGroup
            controlId={`${id}-title`}
            validationState={
              pristine || (!pristine && !title) ? null : titleState
            }
          >
            <ControlLabel htmlFor={`${id}-title-input`}>
              {t('settings.labels.title')}
            </ControlLabel>
            <FormControl
              onChange={createOnChangeHandler(id, 'title')}
              required
              type='text'
              value={title}
              name='portfolio-title'
              id={`${id}-title-input`}
            />
            {titleMessage ? (
              <HelpBlock data-playwright-test-label='title-validation'>
                {titleMessage}
              </HelpBlock>
            ) : null}
          </FormGroup>
          <FormGroup
            controlId={`${id}-url`}
            validationState={pristine || (!pristine && !url) ? null : urlState}
          >
            <ControlLabel htmlFor={`${id}-url-input`}>
              {t('settings.labels.url')}
            </ControlLabel>
            <FormControl
              onChange={createOnChangeHandler(id, 'url')}
              required
              type='url'
              value={url}
              name='portfolio-url'
              id={`${id}-url-input`}
            />
            {urlMessage ? (
              <HelpBlock data-playwright-test-label='url-validation'>
                {urlMessage}
              </HelpBlock>
            ) : null}
          </FormGroup>
          <FormGroup
            controlId={`${id}-image`}
            validationState={pristine ? null : combineImageStatus}
          >
            <ControlLabel htmlFor={`${id}-image-input`}>
              {t('settings.labels.image')}
            </ControlLabel>
            <FormControl
              onChange={createOnChangeHandler(id, 'image')}
              type='url'
              value={image}
              name='portfolio-image'
              id={`${id}-image-input`}
            />
            {combineImageMessage ? (
              <HelpBlock data-playwright-test-label='image-validation'>
                {combineImageMessage}
              </HelpBlock>
            ) : null}
          </FormGroup>
          <FormGroup
            controlId={`${id}-description`}
            validationState={pristine ? null : descriptionState}
          >
            <ControlLabel htmlFor={`${id}-description-input`}>
              {t('settings.labels.description')}
            </ControlLabel>
            <FormControl
              componentClass='textarea'
              onChange={createOnChangeHandler(id, 'description')}
              value={description}
              name='portfolio-description'
              id={`${id}-description-input`}
            />
            {descriptionMessage ? (
              <HelpBlock data-playwright-test-label='description-validation'>
                {descriptionMessage}
              </HelpBlock>
            ) : null}
          </FormGroup>
          <BlockSaveButton
            disabled={saveDisabled}
            bgSize='large'
            data-playwright-test-label='save-portfolio'
            {...(saveDisabled && { tabIndex: -1 })}
          >
            {t('buttons.save-portfolio')}
          </BlockSaveButton>
          <Spacer size='xs' />
          <Button
            block
            size='large'
            variant='danger'
            onClick={() => handleRemoveItem(id)}
            type='button'
          >
            {t('buttons.remove-portfolio')}
          </Button>
        </form>
      </FullWidthRow>
    );
  };

  return (
    <section id='portfolio-settings'>
      <SectionHeader>{t('settings.headings.portfolio')}</SectionHeader>
      <FullWidthRow>
        <p>{t('settings.share-projects')}</p>
        <Spacer size='xs' />
        <Button
          block
          size='large'
          variant='primary'
          disabled={unsavedItemId !== null}
          onClick={handleAdd}
          type='button'
        >
          {t('buttons.add-portfolio')}
        </Button>
      </FullWidthRow>
      <Spacer size='l' />
      {interleave(portfolio.map(renderPortfolio), () => (
        <>
          <Spacer size='m' />
          <hr />
          <Spacer size='m' />
        </>
      ))}
    </section>
  );
};

PortfolioSettings.displayName = 'PortfolioSettings';

export default withTranslation()(
  connect(null, mapDispatchToProps)(PortfolioSettings)
);
