import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import { Button, Col, ControlLabel, FormControl, Row } from 'react-bootstrap';

import {
  BlockSaveButton,
  FormFields,
  FullWidthRow
} from '../../../helperComponents';
import { portfolioSelector } from '../../../entities';

function makePortfolioByIdSelector() {
  return createSelector(
    portfolioSelector,
    portfolio => portfolio
  );
}

function mapStateToProps(state, props) {
  const portfolioByIdSelector = makePortfolioByIdSelector();
  const portfolio = portfolioByIdSelector(state, props);
  return {
    portfolio,
    initialValues: portfolio
  };
}

function mapDispatchToProps() {
  return {};
}

const propTypes = {
  deletePortfolio: PropTypes.func.isRequired,
  errors: PropTypes.object,
  fields: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired
};

const formFields = [ 'title', 'url', 'image', 'description', 'id' ];
const options = {
  ignored: [ 'description' ],
  types: {
    id: 'hidden',
    url: 'url',
    image: 'url'
  },
  required: [ 'url', 'title', 'id' ]
};

function PortfolioItem(props) {
  const {
    // redux-form
    errors,
    fields,
    handleSubmit,

    deletePortfolio,
    id,
    submit
  } = props;
  const { description: desc } = fields;
  return (
    <form onSubmit={ handleSubmit(submit) }>
      <FullWidthRow>
        <FormFields
          errors={ errors }
          fields={ fields }
          options={ options }
        />
      <Row className='editable-content-container'>
          <Col xs={ 12 }>
            <ControlLabel htmlFor={ desc.name }>
              { _.startCase(desc.name) }
            </ControlLabel>
          </Col>
        </Row>
        <Row className='editable-content-container'>
          <Col xs={ 12 }>
            <FormControl
              componentClass='textarea'
              id={ desc.name }
              name={ desc.name }
              onChange={ desc.onChange }
              rows={ 4 }
              value={ desc.value }
            />
          </Col>
        </Row>
        <Button
          block={ true }
          bsSize='sm'
          bsStyle='danger'
          id={`delete-${id}`}
          onClick={ () => deletePortfolio(id) }
          type='button'
          >
          Remove
        </Button>
        <BlockSaveButton>
          Save this portfolio item
        </BlockSaveButton>
      </FullWidthRow>
    </form>
  );
}

PortfolioItem.displayName = 'Portfolio';
PortfolioItem.propTypes = propTypes;

const PortfolioItemWithRedux = reduxForm(
  {
    fields: formFields
  },
  mapStateToProps,
  mapDispatchToProps
)(PortfolioItem);


export default function PortfolioItemWrapper(props) {
  const { deletePortfolio, id, submit, validator } = props;
  return (
    <PortfolioItemWithRedux
      deletePortfolio={ deletePortfolio }
      form={ id }
      id={ id }
      submit={ submit }
      validate={ validator }
    />
  );
}

PortfolioItemWrapper.propTypes = {
  deletePortfolio: PropTypes.func.isRequired,
  id: PropTypes.string,
  submit: PropTypes.func.isRequired,
  validator: PropTypes.func.isRequired
};
