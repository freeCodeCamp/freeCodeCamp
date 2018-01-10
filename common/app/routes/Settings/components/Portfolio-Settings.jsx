import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap';

import { userSelector } from '../../../redux';
import {
  addPortfolioItem,
  deletePortfolio,
  updatePortfolio,
  updateUserBackend
} from '../../../entities/user';

const propTypes = {
  addPortfolioItem: PropTypes.func.isRequired,
  deletePortfolio: PropTypes.func.isRequired,
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
  ({ portfolio, username }) => ({ portfolio, username })
);

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addPortfolioItem,
    deletePortfolio,
    updatePortfolio,
    updateUserBackend
  }, dispatch);
}

class PortfolioSettings extends PureComponent {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderPortfolio = this.renderPortfolio.bind(this);
  }

  handleAdd() {
    this.props.addPortfolioItem(this.props.username);
  }

  handleChange(e) {
    const { updatePortfolio, username } = this.props;
    const [ field, portfolioId ] = e.target.id.split('-');
    updatePortfolio(username, portfolioId, field, e.target.value);
  }

  handleDelete(e) {
    e.preventDefault();
    const { deletePortfolio, username } = this.props;
    const [, id] = e.target.id.split('-');
    console.log(id, username);
    deletePortfolio({ id, username });
  }

  handleSave() {
    const { portfolio, updateUserBackend } = this.props;
    updateUserBackend({ portfolio });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submitting');
    this.handleSave();
  }

  renderPortfolio(username, portfolio, index, arr) {
    const {
      title,
      image = `https://github.com/identicons/${username}.png`,
      description,
      url,
      id
    } = portfolio;
    return (
      <div key={ id }>
        <form onSubmit={ this.handleSubmit }>
          <Row className='portfolio-input-row'>
            <Col xs={ 5 }>
              <ControlLabel htmlFor={ `title-${id}` }>
                Title
              </ControlLabel>
              <FormControl
                  bsSize='sm'
                  className='portfolio-title'
                  id={ `title-${id}` }
                  onChange={ this.handleChange }
                  placeholder='Title'
                  type='text'
                  value={ title }
              />
              <ControlLabel htmlFor={ `url-${id}` }>
                URL
              </ControlLabel>
              <FormControl
                  bsSize='sm'
                  className='portfolio-url'
                  id={ `url-${id}` }
                  onChange={ this.handleChange }
                  placeholder='https://this-awesome.website'
                  type='url'
                  value={ url }
              />
              <ControlLabel htmlFor={ `image-${id}` }>
                Screen Shot
              </ControlLabel>
              <FormControl
                  bsSize='sm'
                  className='portfolio-img'
                  id={ `image-${id}` }
                  onChange={ this.handleChange }
                  placeholder='https://my-image-host.co/my-image.png'
                  type='url'
                  value={ image }
              />
            </Col>
            <Col xs={ 7 }>
            <ControlLabel htmlFor={ `description-${id}` }>
                Decsription
              </ControlLabel>
              <FormControl
                  className='portfolio-description'
                  componentClass='textarea'
                  id={ `description-${id}` }
                  onChange={ this.handleChange }
                  placeholder='Description'
                  value={ description }
              />
            </Col>
          </Row>
          <Row>
            <Col xs={ 12 }>
                <Button
                  block={ true }
                  bsSize='sm'
                  bsStyle='danger'
                  id={`delete-${id}`}
                  onClick={ this.handleDelete }
                  type='button'
                  >
                  Remove
                </Button>
            </Col>
          </Row>
        </form>
        {
          index + 1 !== arr.length && <hr />
        }
      </div>
    );
  }

  render() {
    const { portfolio = [], username } = this.props;
    const renderPortfolioWithUsername = _.curry(this.renderPortfolio, 4)(username);
    return (
      <section id='portfolio-settings' onSubmit={ this.handleSubmit }>
        <h2>Your Portfolio</h2>
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
        {
          portfolio.length ? portfolio.map(renderPortfolioWithUsername) : null
        }
        { portfolio.length ?
          <Button
            block={ true }
            bsStyle='primary'
            onClick={ this.handleSave }
            type='button'
            >
            Save Portfolio
          </Button> :
          null
        }
      </section>
    );
  }
}

PortfolioSettings.displayName = 'PortfolioSettings';
PortfolioSettings.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioSettings);
