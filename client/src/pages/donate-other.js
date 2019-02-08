/* eslint-disable max-len */
import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { Grid, Col, Row } from '@freecodecamp/react-bootstrap';

import Spacer from '../components/helpers/Spacer';

class IndexPage extends Component {
  render() {
  return (
    <Fragment>
      <Helmet title='Other ways to donate | freeCodeCamp.org' />
      <Spacer />
      <Grid className='container'>
        <Row>
          <Col md={6} mdOffset={3} sm={10} smOffset={1} xs={12}>
            <h2 className='text-center'>
              Other ways you can support the freeCodeCamp.org nonprofit
            </h2>
            <p>
              freeCodeCamp is a small donor-supported 501(c)(3) public charity. We
              are tax-exempt, so you can deduct donations you make to our
              nonprofit from your taxes. You can{' '}
              <a href='https://s3.amazonaws.com/freecodecamp/Free+Code+Camp+Inc+IRS+Determination+Letter.pdf'>
                download our IRS Determination Letter here
              </a>.
            </p>
            <hr />
            <h3>Set up a monthly donation using PayPal</h3>
            <p>
              You can set up a monthly donation to freeCodeCamp by clicking one of
              the links below and following the instructions on PayPal. You can
              easily stop your donations at any time in the future.
            </p>
            <form
              action='//www.paypal.com/cgi-bin/webscr'
              method='post'
              onSubmit="ga('send',  { hitType: 'event', eventCategory: 'donation', eventAction: 'click', eventLabel: 'paypal', eventValue: 5 } );"
              target='_blank'
              >
              <input defaultValue='_s-xclick' name='cmd' type='hidden' />{' '}
              <input
                defaultValue='KTAXU8B4MYAT8'
                name='hosted_button_id'
                type='hidden'
              />{' '}
              <input
                className='btn btn-cta signup-btn btn-block'
                defaultValue='Donate $5 each month'
                name='submit'
                type='submit'
              />
            </form>
            <div className='spacer' />
            <form
              action='//www.paypal.com/cgi-bin/webscr'
              method='post'
              onSubmit="ga('send',  { hitType: 'event', eventCategory: 'donation', eventAction: 'click', eventLabel: 'paypal', eventValue: 10} );"
              target='_blank'
              >
              <input defaultValue='_s-xclick' name='cmd' type='hidden' />{' '}
              <input
                defaultValue='BYEBQEHS5LHNC'
                name='hosted_button_id'
                type='hidden'
              />{' '}
              <input
                className='btn btn-cta signup-btn btn-block'
                defaultValue='Donate $10 each month'
                name='submit'
                type='submit'
              />
            </form>
            <div className='spacer' />
            <form
              action='//www.paypal.com/cgi-bin/webscr'
              method='post'
              onSubmit="ga('send',  { hitType: 'event', eventCategory: 'donation', eventAction: 'click', eventLabel: 'paypal', eventValue: 35} );"
              target='_blank'
              >
              <input defaultValue='_s-xclick' name='cmd' type='hidden' />{' '}
              <input
                defaultValue='57ZPMKJ8G893Y'
                name='hosted_button_id'
                type='hidden'
              />{' '}
              <input
                className='btn btn-cta signup-btn btn-block'
                defaultValue='Donate $35 each month'
                name='submit'
                type='submit'
              />
            </form>
            <div className='spacer' />
            <form
              action='//www.paypal.com/cgi-bin/webscr'
              method='post'
              onSubmit="ga('send', { hitType: 'event', eventCategory: 'donation', eventAction: 'click', eventLabel: 'paypal', eventValue: 50} );"
              target='_blank'
              >
              <input defaultValue='_s-xclick' name='cmd' type='hidden' />{' '}
              <input
                defaultValue='2ZVYTHK6Q7AFW'
                name='hosted_button_id'
                type='hidden'
              />{' '}
              <input
                className='btn btn-cta signup-btn btn-block'
                defaultValue='Donate $50 each month'
                name='submit'
                type='submit'
              />
            </form>
            <div className='spacer' />
            <form
              action='//www.paypal.com/cgi-bin/webscr'
              method='post'
              onSubmit="ga('send', { hitType: 'event', eventCategory: 'donation', eventAction: 'click', eventLabel: 'paypal', eventValue: 100} );"
              target='_blank'
              >
              <input defaultValue='_s-xclick' name='cmd' type='hidden' />{' '}
              <input
                defaultValue='C7PUT3LMJHKK2'
                name='hosted_button_id'
                type='hidden'
              />{' '}
              <input
                className='btn btn-cta signup-btn btn-block'
                defaultValue='Donate $100 each month'
                name='submit'
                type='submit'
              />
            </form>
            <div className='spacer' />
            <form
              action='//www.paypal.com/cgi-bin/webscr'
              method='post'
              onSubmit="ga('send', { hitType: 'event', eventCategory: 'donation', eventAction: 'click', eventLabel: 'paypal', eventValue: 250} );"
              target='_blank'
              >
              <input defaultValue='_s-xclick' name='cmd' type='hidden' />{' '}
              <input
                defaultValue='69JGTY4DHSTEN'
                name='hosted_button_id'
                type='hidden'
              />{' '}
              <input
                className='btn btn-cta signup-btn btn-block'
                defaultValue='Donate $250 each month'
                name='submit'
                type='submit'
              />
            </form>
            <hr />
            <h3>Make a one-time donation using PayPal</h3>
            <p>
              You can make a one-time monthly donation to freeCodeCamp for any
              amount of money by clicking one of the links below and following the
              instructions on PayPal:
            </p>
            <form
              action='//www.paypal.com/cgi-bin/webscr'
              method='post'
              onSubmit="ga('send', { hitType: 'event', eventCategory: 'donation', eventAction: 'click', eventLabel: 'paypal one time donation', eventValue: 0} );"
              target='_blank'
              >
              <input defaultValue='_s-xclick' name='cmd' type='hidden' />{' '}
              <input
                defaultValue='B256JC6ZCWD3J'
                name='hosted_button_id'
                type='hidden'
              />{' '}
              <input
                className='btn btn-cta signup-btn btn-block'
                defaultValue='Make a one-time donation'
                name='submit'
                type='submit'
              />
            </form>
            <hr />
            <h3>Get your employer to match your donation</h3>
            <p>
              Many freeCodeCamp supporters are able to get their employers to
              match their donations to freeCodeCamp. Our Tax-exempt number (EIN)
              is 82-0779546. If we can help you with setting this up, please email{' '}
              <a href='mailto:team@freecodecamp.org'>team@freecodecamp.org</a>.
            </p>
            <hr />
            <h3>Donate through a payroll deduction</h3>
            <p>
              In the US and Canada, some employers have a convenient way to give
              to freeCodeCamp through a payroll deduction. Ask your employer if
              they can do this, and have them send any necessary paperwork to:
            </p>
            <p>
              Free Code Camp, Inc.<br />7800 W Hefner Rd, PO BOX 721024<br />Oklahoma
              City, Oklahoma 73172<br />United States
            </p>
            <hr />
            <h3>Donate cryptocurrency to freeCodeCamp</h3>
            <p>
              Below are our wallets where we can receive cryptocurrency donations.
            </p>
            <h4>Make a one-time Bitcoin donation</h4>
            <p className='negative-15'>
              Our Bitcoin wallet is{' '}
              <code>12skYi7aMCjDUdrVdoB3JjZ77ug8gxJfbL</code>
            </p>
            <h4>Make a one-time Ethereum donation</h4>
            <p className='negative-15'>
              Our Ethereum wallet is{' '}
              <code>0x0ADbEf2471416BD8732cf0f3944294eE393CcAF5</code>
            </p>
            <h4>Make a one-time Litecoin donation</h4>
            <p className='negative-15'>
              Our Litecoin wallet is{' '}
              <code>LKu8UG8Z1nbTxnq9Do96PsC3FwbNtycf3X</code>
            </p>
            <h4>Make a one-time Bitcoin Cash donation</h4>
            <p className='negative-15'>
              Our Bitcoin Cash wallet is{' '}
              <code>1EBxPEJWrGZWxe2UayyAsnd5VsRg5H9xfu</code>
            </p>
            <hr />
            <h3>Donate to freeCodeCamp by mailing us a check</h3>
            <p>Our mailing address is:</p>
            <p>
              Free Code Camp, Inc.<br />7800 W Hefner Rd, PO BOX 721024<br />Oklahoma
              City, Oklahoma 73172<br />United States
            </p>
            <hr />
            <h3>Donate Stock to freeCodeCamp</h3>
            <p>
              If you want to donate stocks to freeCodeCamp, please email us at{' '}
              <a href='mailto:team@freecodecamp.org'>team@freecodecamp.org</a>.
            </p>
            <hr />
            <h3>Legacy Gift</h3>
            <p>
              You can help future generations of learners by listing freeCodeCamp
              in your will or living trust. If you're interested in doing this,
              email Quincy directly and we can discuss this:{' '}
              <a href='mailto:quincy@freecodecamp.org'>quincy@freecodecamp.org</a>.
            </p>
            <hr />
            <h3>
              Thank you for supporting our nonprofit and the freeCodeCamp
              community.
            </h3>
            <Spacer />
            <div className='text-center'>
              <a href='/donate'>Or donate using a Credit or Debit Card.</a>
            </div>
            <Spacer />
          </Col>
        </Row>
      </Grid>
    </Fragment>
  );
  }
}

IndexPage.displayName = 'IndexPage';

export default IndexPage;
