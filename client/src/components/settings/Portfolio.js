import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';
import {
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from '@freecodecamp/react-bootstrap';
import { findIndex, find, isEqual } from 'lodash';
import isURL from 'validator/lib/isURL';

import { hasProtocolRE } from '../../utils';

import { FullWidthRow, ButtonSpacer, Spacer } from '../helpers';
import SectionHeader from './SectionHeader';
import BlockSaveButton from '../helpers/form/BlockSaveButton';

const propTypes = {
  picture: PropTypes.string,
  portfolio: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      image: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string
    })
  ),
  updatePortfolio: PropTypes.func.isRequired,
  username: PropTypes.string
};

function createEmptyPortfolio() {
  return {
    id: nanoid(),
    title: '',
    description: '',
    url: '',
    image: ''
  };
}

function createFindById(id) {
  return p => p.id === id;
}

const mockEvent = {
  preventDefault() {}
};

class PortfolioSettings extends Component {
  constructor(props) {
    super(props);

    const { portfolio = [] } = props;

    this.state = {
      portfolio: [...portfolio]
    };
  }

  createOnChangeHandler = (id, key) => e => {
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

  handleSubmit = e => {
    e.preventDefault();
    const { updatePortfolio } = this.props;
    const { portfolio } = this.state;
    return updatePortfolio({ portfolio });
  };

  handleAdd = () => {
    return this.setState(state => ({
      portfolio: [createEmptyPortfolio(), ...state.portfolio]
    }));
  };

  handleRemoveItem = id => {
    return this.setState(
      state => ({
        portfolio: state.portfolio.filter(p => p.id !== id)
      }),
      () => this.handleSubmit(mockEvent)
    );
  };

  isFormPristine = id => {
    const { portfolio } = this.state;
    const { portfolio: originalPortfolio } = this.props;
    const original = find(originalPortfolio, createFindById(id));
    if (!original) {
      return false;
    }
    const edited = find(portfolio, createFindById(id));
    return isEqual(original, edited);
  };

  isFormValid = id => {
    const { portfolio } = this.state;
    const toValidate = find(portfolio, createFindById(id));
    if (!toValidate) {
      return false;
    }
    const { title, url, image, description } = toValidate;

    const { state: titleState } = this.getTitleValidation(title);
    const { state: urlState } = this.getUrlValidation(url);
    const { state: imageState } = this.getUrlValidation(image, true);
    const { state: descriptionState } = this.getDescriptionValidation(
      description
    );
    return [titleState, imageState, urlState, descriptionState]
      .filter(Boolean)
      .every(state => state === 'success');
  };

  getDescriptionValidation(description) {
    const len = description.length;
    const charsLeft = 288 - len;
    if (charsLeft < 0) {
      return {
        state: 'error',
        message: 'There is a maximum limit of 288 characters, you have 0 left'
      };
    }
    if (charsLeft < 41 && charsLeft > 0) {
      return {
        state: 'warning',
        message:
          'There is a maximum limit of 288 characters, you have ' +
          charsLeft +
          ' left'
      };
    }
    if (charsLeft === 288) {
      return { state: null, message: '' };
    }
    return { state: 'success', message: '' };
  }

  getTitleValidation(title) {
    if (!title) {
      return { state: 'error', message: 'A title is required' };
    }
    const len = title.length;
    if (len < 2) {
      return { state: 'error', message: 'Title is too short' };
    }
    if (len > 144) {
      return { state: 'error', message: 'Title is too long' };
    }
    return { state: 'success', message: '' };
  }

  getUrlValidation(maybeUrl, isImage) {
    const len = maybeUrl.length;
    if (len >= 4 && !hasProtocolRE.test(maybeUrl)) {
      return { state: 'error', message: 'URL must start with http or https' };
    }
    if (isImage && !maybeUrl) {
      return { state: null, message: '' };
    }
    if (isImage && !/\.(png|jpg|jpeg|gif)$/.test(maybeUrl)) {
      return {
        state: 'error',
        message: 'URL must link directly to an image file'
      };
    }
    return isURL(maybeUrl)
      ? { state: 'success', message: '' }
      : { state: 'warning', message: 'Please use a valid URL' };
  }

  renderPortfolio = (portfolio, index, arr) => {
    const { id, title, description, url, image } = portfolio;
    const pristine = this.isFormPristine(id);
    const {
      state: titleState,
      message: titleMessage
    } = this.getTitleValidation(title);
    const { state: urlState, message: urlMessage } = this.getUrlValidation(url);
    const { state: imageState, message: imageMessage } = this.getUrlValidation(
      image,
      true
    );
    const {
      state: descriptionState,
      message: descriptionMessage
    } = this.getDescriptionValidation(description);

    return (
      <div key={id}>
        <FullWidthRow>
          <form onSubmit={this.handleSubmit}>
            <FormGroup
              controlId={`${id}-title`}
              validationState={
                pristine || (!pristine && !title) ? null : titleState
              }
            >
              <ControlLabel>Title</ControlLabel>
              <FormControl
                onChange={this.createOnChangeHandler(id, 'title')}
                required={true}
                type='text'
                value={title}
              />
              {titleMessage ? <HelpBlock>{titleMessage}</HelpBlock> : null}
            </FormGroup>
            <FormGroup
              controlId={`${id}-url`}
              validationState={
                pristine || (!pristine && !url) ? null : urlState
              }
            >
              <ControlLabel>URL</ControlLabel>
              <FormControl
                onChange={this.createOnChangeHandler(id, 'url')}
                required={true}
                type='url'
                value={url}
              />
              {urlMessage ? <HelpBlock>{urlMessage}</HelpBlock> : null}
            </FormGroup>
            <FormGroup
              controlId={`${id}-image`}
              validationState={pristine ? null : imageState}
            >
              <ControlLabel>Image</ControlLabel>
              <FormControl
                onChange={this.createOnChangeHandler(id, 'image')}
                type='url'
                value={image}
              />
              {imageMessage ? <HelpBlock>{imageMessage}</HelpBlock> : null}
            </FormGroup>
            <FormGroup
              controlId={`${id}-description`}
              validationState={pristine ? null : descriptionState}
            >
              <ControlLabel>Description</ControlLabel>
              <FormControl
                componentClass='textarea'
                onChange={this.createOnChangeHandler(id, 'description')}
                value={description}
              />
              {descriptionMessage ? (
                <HelpBlock>{descriptionMessage}</HelpBlock>
              ) : null}
            </FormGroup>
            <BlockSaveButton
              disabled={
                pristine ||
                !title ||
                !isURL(url, {
                  protocols: ['http', 'https'],
                  /* eslint-disable camelcase */
                  require_tld: true,
                  require_protocol: true
                  /* eslint-enable camelcase */
                })
              }
            >
              Save this portfolio item
            </BlockSaveButton>
            <ButtonSpacer />
            <Button
              block={true}
              bsSize='lg'
              bsStyle='danger'
              onClick={() => this.handleRemoveItem(id)}
              type='button'
            >
              Remove this portfolio item
            </Button>
          </form>
          {index + 1 !== arr.length && (
            <Fragment>
              <Spacer />
              <hr />
              <Spacer />
            </Fragment>
          )}
        </FullWidthRow>
      </div>
    );
  };

  render() {
    const { portfolio = [] } = this.state;
    return (
      <section id='portfolio-settings'>
        <SectionHeader>Portfolio Settings</SectionHeader>
        <FullWidthRow>
          <div className='portfolio-settings-intro'>
            <p className='p-intro'>
              Share your non-freeCodeCamp projects, articles or accepted pull
              requests.
            </p>
          </div>
        </FullWidthRow>
        <FullWidthRow>
          <ButtonSpacer />
          <Button
            block={true}
            bsSize='lg'
            bsStyle='primary'
            onClick={this.handleAdd}
            type='button'
          >
            Add a new portfolio Item
          </Button>
        </FullWidthRow>
        <Spacer size={2} />
        {portfolio.length ? portfolio.map(this.renderPortfolio) : null}
      </section>
    );
  }
}

PortfolioSettings.displayName = 'PortfolioSettings';
PortfolioSettings.propTypes = propTypes;

export default PortfolioSettings;
