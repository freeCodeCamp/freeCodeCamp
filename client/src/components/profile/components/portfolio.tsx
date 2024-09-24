import { findIndex, find, isEqual } from 'lodash-es';
import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import type { TFunction } from 'i18next';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  FormGroupProps,
  Button
} from '@freecodecamp/ui';
import { withTranslation } from 'react-i18next';
import isURL from 'validator/lib/isURL';
import { PortfolioProjectData } from '../../../redux/prop-types';

import { hasProtocolRE } from '../../../utils';

import { FullWidthRow, Spacer } from '../../helpers';
import BlockSaveButton from '../../helpers/form/block-save-button';
import SectionHeader from '../../settings/section-header';

type PortfolioProps = {
  picture?: string;
  portfolio: PortfolioProjectData[];
  t: TFunction;
  updatePortfolio: (obj: { portfolio: PortfolioProjectData[] }) => void;
  username?: string;
  setIsEditing: (isEditing: boolean) => void;
};

type PortfolioState = {
  portfolio: PortfolioProjectData[];
  unsavedItemId: string | null;
};

interface ProfileValidation {
  state: FormGroupProps['validationState'];
  message: string;
}

function createEmptyPortfolioItem(): PortfolioProjectData {
  return {
    id: nanoid(),
    title: '',
    description: '',
    url: '',
    image: ''
  };
}

function createFindById(id: string) {
  return (p: PortfolioProjectData) => p.id === id;
}

class PortfolioSettings extends Component<PortfolioProps, PortfolioState> {
  static displayName: string;
  constructor(props: PortfolioProps) {
    super(props);

    const { portfolio = [] } = props;

    this.state = {
      portfolio: [...portfolio],
      unsavedItemId: null
    };
  }

  toggleEditing = () => {
    this.props.setIsEditing(false);
  };

  createOnChangeHandler =
    (id: string, key: 'description' | 'image' | 'title' | 'url') =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const userInput = e.target.value.slice();
      return this.setState(state => {
        const { portfolio: currentPortfolio } = state;
        const mutablePortfolio = currentPortfolio.slice(0);
        const index = findIndex(currentPortfolio, p => p.id === id);

        mutablePortfolio[index] = {
          ...mutablePortfolio[index],
          [key]: userInput
        };

        return { portfolio: mutablePortfolio };
      });
    };

  updateItem = (id: string) => {
    const { portfolio, unsavedItemId } = this.state;
    if (unsavedItemId === id) {
      this.setState({ unsavedItemId: null });
    }
    this.props.updatePortfolio({ portfolio });
    this.toggleEditing();
  };

  handleAdd = () => {
    const item = createEmptyPortfolioItem();
    this.setState(state => ({
      portfolio: [item, ...state.portfolio],
      unsavedItemId: item.id
    }));
  };

  handleRemoveItem = (id: string) => {
    this.setState(
      state => ({
        portfolio: state.portfolio.filter(p => p.id !== id)
      }),
      () => this.updateItem(id)
    );
    this.toggleEditing();
  };

  isFormPristine = (id: string) => {
    const { portfolio } = this.state;
    const { portfolio: originalPortfolio } = this.props;
    const original = find(originalPortfolio, createFindById(id));
    if (!original) {
      return false;
    }
    const edited = find(portfolio, createFindById(id));
    return isEqual(original, edited);
  };

  getDescriptionValidation(description: string): ProfileValidation {
    const { t } = this.props;
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
        message: t('validation.max-characters', { charsLeft: charsLeft })
      };
    }
    if (charsLeft === 288) {
      return { state: null, message: '' };
    }
    return { state: 'success', message: '' };
  }

  getTitleValidation(title: string): ProfileValidation {
    const { t } = this.props;
    if (!title) {
      return {
        state: 'error',
        message: t('validation.title-required')
      };
    }
    const len = title.length;
    if (len < 2) {
      return { state: 'error', message: t('validation.title-short') };
    }
    if (len > 144) {
      return { state: 'error', message: t('validation.title-long') };
    }
    return { state: 'success', message: '' };
  }

  getUrlValidation(maybeUrl: string, isImage?: boolean) {
    const { t } = this.props;
    const len = maybeUrl.length;
    if (len >= 4 && !hasProtocolRE.test(maybeUrl)) {
      return {
        state: 'error',
        message: t('validation.invalid-protocol')
      };
    }
    if (isImage && !maybeUrl) {
      return { state: null, message: '' };
    }
    if (isImage && !/\.(png|jpg|jpeg|gif)$/.test(maybeUrl)) {
      return {
        state: 'error',
        message: t('validation.url-not-image')
      };
    }
    return isURL(maybeUrl)
      ? { state: 'success', message: '' }
      : { state: 'warning', message: t('validation.use-valid-url') };
  }

  formCorrect(portfolio: PortfolioProjectData) {
    const { id, title, description, url, image } = portfolio;

    const { state: titleState, message: titleMessage } =
      this.getTitleValidation(title);
    const { state: urlState, message: urlMessage } = this.getUrlValidation(url);
    const { state: descriptionState, message: descriptionMessage } =
      this.getDescriptionValidation(description);
    const { state: imageState, message: imageMessage } = this.getUrlValidation(
      image,
      true
    );
    const pristine = this.isFormPristine(id);

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
      title: {
        titleState,
        titleMessage
      },
      url: {
        urlState,
        urlMessage
      },
      image: {
        imageState,
        imageMessage
      },
      desc: {
        descriptionState,
        descriptionMessage
      },
      pristine
    };
  }

  renderPortfolio = (
    portfolio: PortfolioProjectData,
    index: number,
    arr: PortfolioProjectData[]
  ) => {
    const { t } = this.props;
    const { id, title, description, url, image } = portfolio;
    const {
      isButtonDisabled,
      title: { titleState, titleMessage },
      url: { urlState, urlMessage },
      image: { imageState, imageMessage },
      desc: { descriptionState, descriptionMessage },
      pristine
    } = this.formCorrect(portfolio);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>, id: string) => {
      e.preventDefault();
      if (isButtonDisabled) return null;
      this.toggleEditing();
      return this.updateItem(id);
    };
    return (
      <FullWidthRow key={id}>
        <form
          onSubmit={e => handleSubmit(e, id)}
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
              onChange={this.createOnChangeHandler(id, 'title')}
              required={true}
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
              onChange={this.createOnChangeHandler(id, 'url')}
              required={true}
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
            validationState={pristine ? null : imageState}
          >
            <ControlLabel htmlFor={`${id}-image-input`}>
              {t('settings.labels.image')}
            </ControlLabel>
            <FormControl
              onChange={this.createOnChangeHandler(id, 'image')}
              type='url'
              value={image}
              name='portfolio-image'
              id={`${id}-image-input`}
            />
            {imageMessage ? (
              <HelpBlock data-playwright-test-label='image-validation'>
                {imageMessage}
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
              onChange={this.createOnChangeHandler(id, 'description')}
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
            disabled={isButtonDisabled}
            bgSize='large'
            data-playwright-test-label='save-portfolio'
            {...(isButtonDisabled && { tabIndex: -1 })}
          >
            {t('buttons.save-portfolio')}
          </BlockSaveButton>
          <Spacer size='small' />
          <Button
            block={true}
            size='large'
            variant='danger'
            onClick={() => this.handleRemoveItem(id)}
            type='button'
          >
            {t('buttons.remove-portfolio')}
          </Button>
        </form>
        {index + 1 !== arr.length && (
          <>
            <Spacer size='medium' />
            <hr />
            <Spacer size='medium' />
          </>
        )}
      </FullWidthRow>
    );
  };

  render() {
    const { t } = this.props;
    const { portfolio = [], unsavedItemId } = this.state;
    return (
      <section id='portfolio-settings'>
        <SectionHeader>{t('settings.headings.portfolio')}</SectionHeader>
        <FullWidthRow>
          <p>{t('settings.share-projects')}</p>
          <Spacer size='small' />
          <Button
            block={true}
            size='large'
            variant='primary'
            disabled={unsavedItemId !== null}
            onClick={this.handleAdd}
            type='button'
          >
            {t('buttons.add-portfolio')}
          </Button>
        </FullWidthRow>
        <Spacer size='large' />
        {portfolio.length ? portfolio.map(this.renderPortfolio) : null}
      </section>
    );
  }
}

PortfolioSettings.displayName = 'PortfolioSettings';

export default withTranslation()(PortfolioSettings);
