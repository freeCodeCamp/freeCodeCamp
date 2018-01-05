import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col, ControlLabel, FormControl } from 'react-bootstrap';

import { userSelector } from '../../../redux';
import { updatePortfolio } from '../../../entities/user';

const propTypes = {
  portfolio: PropTypes.shape({
    description: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string
  }),
  updatePortfolio: PropTypes.func.isRequired,
  username: PropTypes.string
};

const mapStateToProps = createSelector(
  userSelector,
  ({ portfolio, username }) => ({ portfolio, username })
);

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updatePortfolio
  }, dispatch);
}

class PortfolioSettings extends PureComponent {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { updatePortfolio, username } = this.props;
    console.info(e.target.id, username, e.target.value)
    updatePortfolio(e.target.id, username, e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submitting');
  }

  render() {
    const { portfolio: { title, description, url } } = this.props;
    return (
      <form id='portfolio-settings' onSubmit={ this.handleSubmit }>
        <Row>
          <Col xs={ 5 }>
            <ControlLabel htmlFor='title'>
              Title
            </ControlLabel>
            <FormControl
                bsSize='sm'
                className='portfolio-title'
                id='title'
                onChange={ this.handleChange }
                placeholder='Title'
                type='text'
                value={ title }
            />
            <ControlLabel htmlFor='url'>
              URL
            </ControlLabel>
            <FormControl
                bsSize='sm'
                className='portfolio-url'
                id='url'
                onChange={ this.handleChange }
                placeholder='URL'
                type='url'
                value={ url }
            />
          </Col>
          <Col xs={ 7 }>
          <ControlLabel htmlFor='description'>
              Decsription
            </ControlLabel>
            <FormControl
                className='portfolio-description'
                componentClass='textarea'
                id='description'
                onChange={ this.handleChange }
                placeholder='Description'
                value={ description }
            />
          </Col>
        </Row>
      </form>
    );
  }
}

PortfolioSettings.displayName = 'PortfolioSettings';
PortfolioSettings.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioSettings);
