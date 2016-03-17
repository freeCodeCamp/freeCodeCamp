import { CompositeDisposable } from 'rx';
import React, { PropTypes } from 'react';
import { Button, Input, Col, Row, Well } from 'react-bootstrap';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PureComponent from 'react-pure-render/component';
import { createSelector } from 'reselect';

import {
  applyPromo,
  clearPromo,
  updatePromo
} from '../redux/actions';

// real paypal buttons
// will take your money
const paypalIds = {
  regular: 'Q8Z82ZLAX3Q8N',
  highlighted: 'VC8QPSKCYMZLN'
};

const bindableActions = {
  applyPromo,
  clearPromo,
  push,
  updatePromo
};

const mapStateToProps = createSelector(
  state => state.jobsApp.newJob,
  state => state.jobsApp,
  (
    { id, isHighlighted } = {},
    {
      buttonId,
      price = 1000,
      discountAmount = 0,
      promoCode = '',
      promoApplied = false,
      promoName = ''
    }
  ) => {
    if (!buttonId) {
      buttonId = isHighlighted ?
        paypalIds.highlighted :
        paypalIds.regular;
    }
    return {
      id,
      isHighlighted,
      price,
      discountAmount,
      promoName,
      promoCode,
      promoApplied
    };
  }
);

export class JobTotal extends PureComponent {
  constructor(...args) {
    super(...args);
    this._subscriptions = new CompositeDisposable();
  }

  static displayName = 'JobTotal';

  static propTypes = {
    id: PropTypes.string,
    isHighlighted: PropTypes.bool,
    buttonId: PropTypes.string,
    price: PropTypes.number,
    discountAmount: PropTypes.number,
    promoName: PropTypes.string,
    promoCode: PropTypes.string,
    promoApplied: PropTypes.bool
  };

  componentWillMount() {
    if (!this.props.id) {
      this.props.push('/jobs');
    }

    this.props.clearPromo();
  }

  componentWillUnmount() {
    this._subscriptions.dispose();
  }

  renderDiscount(discountAmount) {
    if (!discountAmount) {
      return null;
    }
    return (
      <Row>
        <Col
          md={ 3 }
          mdOffset={ 3 }>
          <h4>Promo Discount</h4>
        </Col>
        <Col
          md={ 3 }>
          <h4>-{ discountAmount }</h4>
        </Col>
      </Row>
    );
  }

  renderHighlightPrice(isHighlighted) {
    if (!isHighlighted) {
      return null;
    }
    return (
      <Row>
        <Col
          md={ 3 }
          mdOffset={ 3 }>
          <h4>Highlighting</h4>
        </Col>
        <Col
          md={ 3 }>
          <h4>+ 250</h4>
        </Col>
      </Row>
    );
  }

  renderPromo() {
    const {
      id,
      promoApplied,
      promoCode,
      promoName,
      isHighlighted,
      applyPromo,
      updatePromo
    } = this.props;

    if (promoApplied) {
      return (
        <div>
          <div className='spacer' />
          <Row>
            <Col
              md={ 3 }
              mdOffset={ 3 }>
              { promoName } applied
            </Col>
          </Row>
        </div>
      );
    }

    return (
      <div>
        <div className='spacer' />
        <Row>
          <Col
            md={ 3 }
            mdOffset={ 3 }>
            Have a promo code?
          </Col>
        </Row>
        <Row>
          <Col
            md={ 3 }
            mdOffset={ 3 }>
            <Input
              onChange={ updatePromo }
              type='text'
              value={ promoCode } />
          </Col>
          <Col
            md={ 3 }>
            <Button
              block={ true }
              onClick={ () => {
                const subscription = applyPromo({
                  id,
                  code: promoCode,
                  type: isHighlighted ? 'isHighlighted' : null
                }).subscribe();
                this._subscriptions.add(subscription);
              }}>
              Apply Promo Code
            </Button>
          </Col>
        </Row>
      </div>
    );
  }

  render() {
    const {
      id,
      isHighlighted,
      buttonId,
      price,
      discountAmount,
      push
    } = this.props;

    return (
      <div>
        <Row>
          <Col
            md={ 10 }
            mdOffset={ 1 }
            sm={ 8 }
            smOffset={ 2 }
            xs={ 12 }>
            <div>
              <Row>
                <Col
                  md={ 6 }
                  mdOffset={ 3 }>
                  <h2 className='text-center'>
                    One more step
                  </h2>
                  <div className='spacer' />
                  You're Awesome! just one more step to go.
                  Clicking on the link below will redirect to paypal.
                </Col>
              </Row>
              <div className='spacer' />
              <Well>
                <Row>
                  <Col
                    md={ 3 }
                    mdOffset={ 3 }>
                    <h4>Job Posting</h4>
                  </Col>
                  <Col
                    md={ 6 }>
                    <h4>+ { price }</h4>
                  </Col>
                </Row>
                { this.renderHighlightPrice(isHighlighted) }
                { this.renderDiscount(discountAmount) }
                <Row>
                  <Col
                    md={ 3 }
                    mdOffset={ 3 }>
                    <h4>Total</h4>
                  </Col>
                  <Col
                    md={ 6 }>
                    <h4>${
                      price - discountAmount + (isHighlighted ? 250 : 0)
                    }</h4>
                  </Col>
                </Row>
              </Well>
              { this.renderPromo() }
              <div className='spacer' />
              <Row>
                <Col
                  md={ 6 }
                  mdOffset={ 3 }>
                  <form
                    action='https://www.paypal.com/cgi-bin/webscr'
                    method='post'
                    onClick={ () => setTimeout(push, 0, '/jobs') }
                    target='_blank'>
                    <input
                      name='cmd'
                      type='hidden'
                      value='_s-xclick' />
                    <input
                      name='hosted_button_id'
                      type='hidden'
                      value={ buttonId } />
                    <input
                      name='custom'
                      type='hidden'
                      value={ '' + id } />
                    <Button
                      block={ true }
                      bsSize='large'
                      className='signup-btn'
                      type='submit'>
                      <i className='fa fa-paypal' />
                      Continue to PayPal
                    </Button>
                    <div className='spacer' />
                    <img
                      alt='An array of credit cards'
                      border='0'
                      src='//i.imgur.com/Q2SdSZG.png'
                      style={{
                        width: '100%'
                      }} />
                  </form>
                </Col>
              </Row>
              <div className='spacer' />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps, bindableActions)(JobTotal);
