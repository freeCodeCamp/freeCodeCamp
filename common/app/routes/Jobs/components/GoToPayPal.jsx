import React, { PropTypes } from 'react';
import { Col, Panel, Row } from 'react-bootstrap';
import { contain } from 'thundercats-react';

export default contain(
  {
    store: 'JobsStore',
    actions: 'JobActions',
    map({ job: { id } = {} }) {
      return { id };
    }
  },
  React.createClass({
    displayName: 'GoToPayPal',

    propTypes: {
      id: PropTypes.string
    },

    render() {
      const { id } = this.props;
      return (
        <div>
          <Row>
            <Col
              md={ 6 }
              mdOffset={ 3 }
              sm={ 8 }
              smOffset={ 2 }
              xs={ 12 }>
              <Panel>
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
                      value='ZVU498PLMPHKU' />
                  <input
                    alt='PayPal - The safer, easier way to pay online!'
                    border='0'
                    name='submit'
                    src={
                      'https://www.sandbox.paypal.com/' +
                      'en_US/i/btn/btn_buynowCC_LG.gif'
                    }
                    type='image' />
                  <input
                    name='custom'
                    type='hidden'
                    value={ '' + id } />
                  <img
                    alt=''
                    border='0'
                    height='1'
                    src='https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif'
                    width='1' />
                </form>
              </Panel>
            </Col>
          </Row>
        </div>
      );
    }
  })
);
