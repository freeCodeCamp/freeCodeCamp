import React, { Component, Fragment } from 'react';
import { Grid, Col, Row } from '@freecodecamp/react-bootstrap';

import ReactGA from '../../../analytics/index.js';
import { Link, Spacer } from '../../helpers';

const paypalMonthlyDonations = [
  {
    eventLabel: 'paypal',
    eventValue: 5,
    defaultValueHash: 'KTAXU8B4MYAT8',
    defaultValue: 'Donate $5 each month'
  },
  {
    eventLabel: 'paypal',
    eventValue: 10,
    defaultValueHash: 'BYEBQEHS5LHNC',
    defaultValue: 'Donate $10 each month'
  },
  {
    eventLabel: 'paypal',
    eventValue: 35,
    defaultValueHash: '57ZPMKJ8G893Y',
    defaultValue: 'Donate $35 each month'
  },
  {
    eventLabel: 'paypal',
    eventValue: 50,
    defaultValueHash: '2ZVYTHK6Q7AFW',
    defaultValue: 'Donate $50 each month'
  },
  {
    eventLabel: 'paypal',
    eventValue: 100,
    defaultValueHash: 'C7PUT3LMJHKK2',
    defaultValue: 'Donate $100 each month'
  },
  {
    eventLabel: 'paypal',
    eventValue: 250,
    defaultValueHash: '69JGTY4DHSTEN',
    defaultValue: 'Donate $250 each month'
  }
];

const paypalOneTimeDonation = {
  eventLabel: 'paypal one time donation',
  eventValue: 0,
  defaultValueHash: 'B256JC6ZCWD3J',
  defaultValue: 'Make a one-time donation'
};

class DonateOther extends Component {
  renderForm(item) {
    return (
      <form
        action='https://www.paypal.com/cgi-bin/webscr'
        key={item.defaultValueHash}
        method='post'
        onSubmit={() =>
          ReactGA.event({
            category: 'donation',
            action: 'click',
            label: item.eventLabel,
            value: item.eventValue
          })
        }
        target='_blank'
      >
        <input name='cmd' type='hidden' value='_s-xclick' />{' '}
        <input
          name='hosted_button_id'
          type='hidden'
          value={item.defaultValueHash}
        />{' '}
        <input
          className='btn btn-cta signup-btn btn-block'
          name='submit'
          type='submit'
          value={item.defaultValue}
        />
      </form>
    );
  }

  /* eslint-disable max-len */
  render() {
    return (
      <Fragment>
        <Spacer />
        <Grid>
          <Row>
            <Col lg={8} lgOffset={2} sm={10} smOffset={1} xs={12}>
              <h2 className='text-center'>
                Other ways you can support our nonprofit
              </h2>
              <p>
                freeCodeCamp is a small donor-supported 501(c)(3) public
                charity. We are tax-exempt, so you can deduct donations you make
                to our nonprofit from your taxes. You can{' '}
                <a href='https://s3.amazonaws.com/freecodecamp/Free+Code+Camp+Inc+IRS+Determination+Letter.pdf'>
                  download our IRS Determination Letter here
                </a>
                .
              </p>
              <hr />
              <h3>Set up a monthly donation using PayPal</h3>
              <p>
                You can set up a monthly donation to freeCodeCamp by clicking
                one of the links below and following the instructions on PayPal.
                You can easily stop your donations at any time in the future.
              </p>
              {paypalMonthlyDonations.map(item => {
                return this.renderForm(item);
              })}
              <hr />
              <h3>Make a one-time donation using PayPal</h3>
              <p>
                You can make a one-time monthly donation to freeCodeCamp for any
                amount of money by clicking one of the links below and following
                the instructions on PayPal:
              </p>
              {this.renderForm(paypalOneTimeDonation)}
              <hr />
              <h3>Get your employer to match your donation</h3>
              <p>
                Many freeCodeCamp supporters are able to get their employers to
                match their donations to freeCodeCamp. Our Tax-exempt number
                (EIN) is 82-0779546. If we can help you with setting this up,
                please email{' '}
                <a href='mailto:team@freecodecamp.org'>team@freecodecamp.org</a>
                .
              </p>
              <hr />
              <h3>Donate through a payroll deduction</h3>
              <p>
                In the US and Canada, some employers have a convenient way to
                give to freeCodeCamp through a payroll deduction. Ask your
                employer if they can do this, and have them send any necessary
                paperwork to:
              </p>
              <p>
                Free Code Camp, Inc.
                <br />
                7800 W Hefner Rd, PO BOX 721024
                <br />
                Oklahoma City, Oklahoma 73172
                <br />
                United States
              </p>
              <hr />
              <h3>Donate cryptocurrency to freeCodeCamp</h3>
              <p>
                Below are our wallets where we can receive cryptocurrency
                donations.
              </p>
              <h4>Make a one-time Bitcoin donation</h4>
              <p className='negative-15'>
                Our Bitcoin wallet is{' '}
                <code className='wallet'>
                  12skYi7aMCjDUdrVdoB3JjZ77ug8gxJfbL
                </code>
              </p>
              <h4>Make a one-time Ethereum donation</h4>
              <p className='negative-15'>
                Our Ethereum wallet is{' '}
                <code className='wallet'>
                  0x0ADbEf2471416BD8732cf0f3944294eE393CcAF5
                </code>
              </p>
              <h4>Make a one-time Litecoin donation</h4>
              <p className='negative-15'>
                Our Litecoin wallet is{' '}
                <code className='wallet'>
                  LKu8UG8Z1nbTxnq9Do96PsC3FwbNtycf3X
                </code>
              </p>
              <h4>Make a one-time Bitcoin Cash donation</h4>
              <p className='negative-15'>
                Our Bitcoin Cash wallet is{' '}
                <code className='wallet'>
                  1EBxPEJWrGZWxe2UayyAsnd5VsRg5H9xfu
                </code>
              </p>
              <hr />
              <h3>Donate to freeCodeCamp by mailing us a check</h3>
              <p>Our mailing address is:</p>
              <p>
                Free Code Camp, Inc.
                <br />
                7800 W Hefner Rd, PO BOX 721024
                <br />
                Oklahoma City, Oklahoma 73172
                <br />
                United States
              </p>
              <hr />
              <h3>Donate Stock to freeCodeCamp</h3>
              <p>
                If you want to donate stocks to freeCodeCamp, please email us at{' '}
                <a href='mailto:team@freecodecamp.org'>team@freecodecamp.org</a>
                .
              </p>
              <hr />
              <h3>Legacy Gift</h3>
              <p>
                You can help future generations of learners by listing
                freeCodeCamp in your will or living trust. If you're interested
                in doing this, email Quincy directly and we can discuss this:{' '}
                <a href='mailto:quincy@freecodecamp.org'>
                  quincy@freecodecamp.org
                </a>
                .
              </p>
              <hr />
              <h3>
                Thank you for supporting our nonprofit and the freeCodeCamp
                community.
              </h3>
              <Spacer />
              <div className='text-center'>
                <Link to='/donate'>Donate using a Credit or Debit card</Link>
              </div>
              <Spacer />
            </Col>
          </Row>
        </Grid>
      </Fragment>
    );
  }
  /* eslint-enable max-len */
}

DonateOther.displayName = 'DonateOther';

export default DonateOther;
