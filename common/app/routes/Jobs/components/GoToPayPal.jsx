import React, { PropTypes } from 'react';
import { Button, Col, Panel, Row, Well } from 'react-bootstrap';
import { contain } from 'thundercats-react';

const paypalIds = {
  regular: 'ZVU498PLMPHKU',
  regularDiscount: '58U7P36W3L2GQ',
  highlighted: '3YYSTBAMJYTUW',
  highlightedDiscount: 'QGWTUZ9XEE6EL'
};

export default contain(
  {
    store: 'JobsStore',
    actions: 'JobActions',
    map({
      job: { id, isHighlighted } = {},
      buttonId = paypalIds.regular,
      price = 200,
      discountAmount = 0
    }) {
      return { id, isHighlighted, buttonId, price, discountAmount };
    }
  },
  React.createClass({
    displayName: 'GoToPayPal',

    propTypes: {
      id: PropTypes.string,
      isHighlighted: PropTypes.bool,
      buttonId: PropTypes.string,
      price: PropTypes.number,
      discountAmount: PropTypes.number
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
            <h4>Discount</h4>
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
            <h4>+ 50</h4>
          </Col>
        </Row>
      );
    },

    render() {
      const { id, isHighlighted, buttonId, price, discountAmount } = this.props;
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
                        <h4>+{ price }</h4>
                    </Col>
                  </Row>
                  { this.renderDiscount(discountAmount) }
                  { this.renderHighlightPrice(isHighlighted) }
                  <Row>
                    <Col
                      md={ 3 }
                      mdOffset={ 3 }>
                      <h4>Total</h4>
                    </Col>
                    <Col
                      md={ 6 }>
                      <h4>${
                        price - discountAmount + (isHighlighted ? 50 : 0)
                      }</h4>
                    </Col>
                  </Row>
                </Well>
                <div className='spacer' />
                <Row>
                  <Col
                    md={ 6 }
                    mdOffset={ 3 }>
                    <form
                      action='https://www.sandbox.paypal.com/cgi-bin/webscr'
                      method='post'
                      target='_top'>
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
