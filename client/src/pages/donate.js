import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Grid, Row, Col, Alert } from '@freecodecamp/react-bootstrap';

import { Spacer, Loader } from '../components/helpers';
import DonateForm from '../components/Donation/DonateForm';
import DonateText from '../components/Donation/DonateText';
import { signInLoadingSelector, userSelector, executeGA } from '../redux';

const propTypes = {
  executeGA: PropTypes.func,
  isDonating: PropTypes.bool,
  showLoading: PropTypes.bool.isRequired
};

const mapStateToProps = createSelector(
  userSelector,
  signInLoadingSelector,
  ({ isDonating }, showLoading) => ({
    isDonating,
    showLoading
  })
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      executeGA
    },
    dispatch
  );

export class DonatePage extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      enableSettings: false
    };
    this.handleProcessing = this.handleProcessing.bind(this);
  }

  componentDidMount() {
    this.props.executeGA({
      type: 'event',
      data: {
        category: 'Donation',
        action: `Displayed donate page`,
        nonInteraction: true
      }
    });
  }

  handleProcessing(duration, amount, action = 'stripe button click') {
    this.props.executeGA({
      type: 'event',
      data: {
        category: 'donation',
        action: `donate page ${action}`,
        label: duration,
        value: amount
      }
    });
  }

  render() {
    const { showLoading, isDonating } = this.props;

    if (showLoading) {
      return <Loader fullScreen={true} />;
    }

    return (
      <Fragment>
        <Helmet title='Support our nonprofit | freeCodeCamp.org' />
        <Grid className='donate-page-wrapper'>
          <Spacer />
          <Row>
            <Col sm={10} smOffset={1} xs={12}>
              <h1 className='text-center'>
                {isDonating
                  ? 'Thank You for Your Support'
                  : 'Become a Supporter'}
              </h1>
              <Spacer />
            </Col>
          </Row>
          <Row>
            <Fragment>
              <Col md={6}>
                <Row>
                  <Col sm={10} smOffset={1} xs={12}>
                    {isDonating ? (
                      <Alert>
                        <p>
                          Thank you for being a supporter of freeCodeCamp. You
                          currently have a recurring donation.
                        </p>
                        <br />
                        <p>
                          If you would like to make additional donations, those
                          will help our nonprofit and our mission, too.
                        </p>
                      </Alert>
                    ) : null}
                  </Col>
                </Row>
                <DonateForm
                  enableDonationSettingsPage={this.enableDonationSettingsPage}
                  handleProcessing={this.handleProcessing}
                />
              </Col>
              <Col md={6}>
                <DonateText />
              </Col>
            </Fragment>
          </Row>
          <Spacer />
        </Grid>
      </Fragment>
    );
  }
}

DonatePage.displayName = 'DonatePage';
DonatePage.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DonatePage);
