import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { isURL } from 'validator';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import {
  Row,
  Col,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap';

import {
  BlockSaveButton,
  FormFields,
  FullWidthRow
} from '../../../helperComponents';
import PortfolioItem from './PortfolioItem.jsx';
import { userSelector } from '../../../redux';
import { makeToast } from '../../../Toasts/redux';
import {
  addPortfolioItem,
  deletePortfolio,
  updatePortfolio,
  updateUserBackend
} from '../../../entities/user';
import { maxLength, minLength } from '../utils/formValidators';

const minTwoChar = minLength(2);
const max288Char = maxLength(288);
const validURL = str => isURL(str) ? null : 'Must be a valid URL';


const propTypes = {
  addPortfolioItem: PropTypes.func.isRequired,
  deletePortfolio: PropTypes.func.isRequired,
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
    deletePortfolio,
    makeToast,
    updatePortfolio,
    updateUserBackend
  }, dispatch);
}

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
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    console.log('submitting');
    this.handleSave();
  }

  renderPortfolio(portfolio, index, arr) {
    const {
      id
    } = portfolio;
    return (
      <div key={ id }>
        <PortfolioItem
          deletePortfolio={ this.handleDelete }
          id={ id }
          submit={ this.handleSave }
          validator={ validator }
        />
        {
          index + 1 !== arr.length && <hr />
        }
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
