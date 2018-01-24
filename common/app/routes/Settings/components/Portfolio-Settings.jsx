import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Button
} from 'react-bootstrap';

import { FullWidthRow } from '../../../helperComponents';
import { userSelector } from '../../../redux';
import {
  addPortfolioItem,
  updateUserBackend
} from '../../../entities/user';
import {
  Form,
  maxLength,
  minLength,
  validURL
} from '../formHelpers';

const minTwoChar = minLength(2);
const max288Char = maxLength(288);

const propTypes = {
  addPortfolioItem: PropTypes.func.isRequired,
  picture: PropTypes.string,
  portfolio: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      image: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string
    })
  ),
  updateUserBackend: PropTypes.func.isRequired,
  username: PropTypes.string
};

const mapStateToProps = createSelector(
  userSelector,
  ({ picture, portfolio, username }) => ({
    picture,
    portfolio,
    username
  })
);

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addPortfolioItem,
    updateUserBackend
  }, dispatch);
}

const formFields = [ 'title', 'url', 'image', 'description', 'id' ];
const options = {
  types: {
    id: 'hidden',
    url: 'url',
    image: 'url',
    description: 'textarea'
  },
  required: [ 'url', 'title', 'id' ]
};

function validator(values) {
  const errors = {};
  const {
    title = '',
    url = '',
    description = '',
    image = ''
  } = values;
  errors.title = minTwoChar(title);
  errors.description = max288Char(description);
  errors.url = url && validURL(url);
  errors.image = image && validURL(image);
  return errors;
}

class PortfolioSettings extends PureComponent {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.renderPortfolio = this.renderPortfolio.bind(this);
  }

  handleAdd() {
    this.props.addPortfolioItem(this.props.username);
  }

  handleDelete(id) {
    const { updateUserBackend } = this.props;
    updateUserBackend({ portfolio: { id } });
  }

  handleSave(portfolio) {
    const { updateUserBackend } = this.props;
    updateUserBackend({ portfolio });
  }

  renderPortfolio(portfolio, index, arr) {
    const {
      id
    } = portfolio;
    return (
      <div key={ id }>
        <FullWidthRow>
          <Form
            buttonText='Save portfolio item'
            formFields={ formFields }
            id={ id }
            initialValues={ portfolio }
            options={ options }
            submit={ this.handleSave }
            validate={ validator }
          />
          <div className='button-spacer' />
          <Button
            block={ true }
            bsSize='sm'
            bsStyle='danger'
            id={`delete-${id}`}
            onClick={ () => this.handleDelete(id) }
            type='button'
            >
            Remove this portfolio
          </Button>
          {
            index + 1 !== arr.length && <hr />
          }
        </FullWidthRow>
      </div>
    );
  }

  render() {
    const { portfolio = [] } = this.props;
    return (
      <section id='portfolio-settings' >
        <FullWidthRow>
          <h2>Your Portfolio</h2>
        </FullWidthRow>
        <FullWidthRow>
        <div className='portfolio-settings-intro'>
          <p>
            Share your non-FreeCodeCamp projects, articles or accepted
            pull requests:
          </p>
          <Button
            bsStyle='primary'
            onClick={ this.handleAdd }
            type='button'
            >
            Add a new portfolio Item
          </Button>
        </div>
        </FullWidthRow>
        {
          portfolio.length ? portfolio.map(this.renderPortfolio) : null
        }
      </section>
    );
  }
}

PortfolioSettings.displayName = 'PortfolioSettings';
PortfolioSettings.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioSettings);
