import React, { PropTypes } from 'react';
import { Button, Input, Col, Panel, Row, Well } from 'react-bootstrap';
import { contain } from 'thundercats-react';

// real paypal buttons
// will take your money
const paypalIds = {
  regular: 'Q8Z82ZLAX3Q8N',
  highlighted: 'VC8QPSKCYMZLN'
};

export default contain(
  {
    store: 'appStore',
    actions: [
      'jobActions',
      'appActions'
    ],
    map({ jobsApp: {
      currentJob: { id, isHighlighted } = {},
      buttonId = isHighlighted ?
        paypalIds.highlighted :
        paypalIds.regular,
      price = 1000,
      discountAmount = 0,
      promoCode = '',
      promoApplied = false,
      promoName = ''
    }}) {
      return {
        id,
        isHighlighted,
        buttonId,
        price,
        discountAmount,
        promoName,
        promoCode,
        promoApplied
      };
    }
  },
  React.createClass({
    displayName: 'GoToPayPal',

    propTypes: {
      appActions: PropTypes.object,
      id: PropTypes.string,
      isHighlighted: PropTypes.bool,
      buttonId: PropTypes.string,
      price: PropTypes.number,
      discountAmount: PropTypes.number,
      promoName: PropTypes.string,
      promoCode: PropTypes.string,
      promoApplied: PropTypes.bool,
      jobActions: PropTypes.object
    },

    goToJobBoard() {
      const { appActions } = this.props;
      appActions.goTo('/jobs');
    },

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
    },

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
    },

    renderPromo() {
      const {
        id,
        promoApplied,
        promoCode,
        promoName,
        isHighlighted,
        jobActions
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
                onChange={ jobActions.setPromoCode }
                type='text'
                value={ promoCode } />
            </Col>
            <Col
              md={ 3 }>
              <Button
                block={ true }
                onClick={ () => {
                  jobActions.applyCode({
                    id,
                    code: promoCode,
                    type: isHighlighted ? 'isHighlighted' : null
                  });
                }}>
                Apply Promo Code
              </Button>
            </Col>
          </Row>
        </div>
      );
    },

    render() {
      const {
        id,
        isHighlighted,
        buttonId,
        price,
        discountAmount
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
              <Panel>
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
                      onClick={ this.goToJobBoard }
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
                        src='http://i.imgur.com/Q2SdSZG.png'
                        style={{
                          width: '100%'
                        }} />
                    </form>
                  </Col>
                </Row>
                <div className='spacer' />
              </Panel>
            </Col>
          </Row>
        </div>
      );
    }
  })
);
