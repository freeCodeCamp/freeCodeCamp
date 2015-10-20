import React, { PropTypes } from 'react';
import { Button, Col, Panel, Row } from 'react-bootstrap';
import { contain } from 'thundercats-react';

export default contain(
  {
    store: 'JobsStore',
    actions: 'JobActions',
    map({ job: { id, isHighlighted } = {} }) {
      return { id, isHighlighted };
    }
  },
  React.createClass({
    displayName: 'GoToPayPal',

    propTypes: {
      id: PropTypes.string,
      isHighlighted: PropTypes.bool
    },

    render() {
      const { id, isHighlighted } = this.props;
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
                          value={ isHighlighted ?
                            '' :
                            'ZVU498PLMPHKU'
                          } />
                      <input
                        name='custom'
                        type='hidden'
                        value={ '' + id } />
                      <Button
                        block={ true }
                        bsSize='size'
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
