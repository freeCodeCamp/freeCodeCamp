/* eslint-disable react/jsx-sort-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import format from 'date-fns/format';
import { Grid, Row, Col, Image, Button } from '@freecodecamp/react-bootstrap';
import FreeCodeCampLogo from '../assets/icons/freeCodeCampLogo';
// eslint-disable-next-line max-len
import MinimalDonateForm from '../components/Donation/MinimalDonateForm';

import {
  showCertSelector,
  showCertFetchStateSelector,
  showCert,
  userFetchStateSelector,
  usernameSelector,
  isDonatingSelector,
  executeGA
} from '../redux';
import { certMap } from '../../src/resources/certAndProjectMap';
import { createFlashMessage } from '../components/Flash/redux';
import standardErrorMessage from '../utils/standardErrorMessage';
import reallyWeirdErrorMessage from '../utils/reallyWeirdErrorMessage';

import RedirectHome from '../components/RedirectHome';
import { Loader } from '../components/helpers';

const propTypes = {
  cert: PropTypes.shape({
    username: PropTypes.string,
    name: PropTypes.string,
    certName: PropTypes.string,
    certTitle: PropTypes.string,
    completionTime: PropTypes.number,
    date: PropTypes.string
  }),
  certDashedName: PropTypes.string,
  certName: PropTypes.string,
  createFlashMessage: PropTypes.func.isRequired,
  executeGA: PropTypes.func,
  fetchState: PropTypes.shape({
    pending: PropTypes.bool,
    complete: PropTypes.bool,
    errored: PropTypes.bool
  }),
  isDonating: PropTypes.bool,
  showCert: PropTypes.func.isRequired,
  signedInUserName: PropTypes.string,
  userFetchState: PropTypes.shape({
    complete: PropTypes.bool
  }),
  userFullName: PropTypes.string,
  username: PropTypes.string,
  validCertName: PropTypes.bool
};

const validCertNames = certMap.map(cert => cert.slug);

const mapStateToProps = (state, { certName }) => {
  const validCertName = validCertNames.some(name => name === certName);
  return createSelector(
    showCertSelector,
    showCertFetchStateSelector,
    usernameSelector,
    userFetchStateSelector,
    isDonatingSelector,
    (cert, fetchState, signedInUserName, userFetchState, isDonating) => ({
      cert,
      fetchState,
      validCertName,
      signedInUserName,
      userFetchState,
      isDonating
    })
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createFlashMessage, showCert, executeGA }, dispatch);

class ShowCertification extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      isDonationSubmitted: false,
      isDonationDisplayed: false,
      isDonationClosed: false
    };

    this.hideDonationSection = this.hideDonationSection.bind(this);
    this.handleProcessing = this.handleProcessing.bind(this);
  }

  componentDidMount() {
    const { username, certName, validCertName, showCert } = this.props;
    if (validCertName) {
      return showCert({ username, certName });
    }
    return null;
  }

  shouldComponentUpdate(nextProps) {
    const {
      userFetchState: { complete: userComplete },
      signedInUserName,
      isDonating,
      cert: { username = '' },
      executeGA
    } = nextProps;
    const { isDonationDisplayed } = this.state;

    if (
      !isDonationDisplayed &&
      userComplete &&
      signedInUserName &&
      signedInUserName === username &&
      !isDonating
    ) {
      this.setState({
        isDonationDisplayed: true
      });

      executeGA({
        type: 'event',
        data: {
          category: 'Donation',
          action: 'Displayed Certificate Donation',
          nonInteraction: true
        }
      });
    }
    return true;
  }

  hideDonationSection() {
    this.setState({ isDonationDisplayed: false, isDonationClosed: true });
  }

  handleProcessing(duration, amount, action = 'stripe form submission') {
    this.props.executeGA({
      type: 'event',
      data: {
        category: 'donation',
        action: `certificate ${action}`,
        label: duration,
        value: amount
      }
    });
    this.setState({ isDonationSubmitted: true });
  }

  render() {
    const {
      cert,
      fetchState,
      validCertName,
      createFlashMessage,
      certName
    } = this.props;

    const {
      isDonationSubmitted,
      isDonationDisplayed,
      isDonationClosed
    } = this.state;

    if (!validCertName) {
      createFlashMessage(standardErrorMessage);
      return <RedirectHome />;
    }

    const { pending, complete, errored } = fetchState;

    if (pending) {
      return <Loader fullScreen={true} />;
    }

    if (!pending && errored) {
      createFlashMessage(standardErrorMessage);
      return <RedirectHome />;
    }

    if (!pending && !complete && !errored) {
      createFlashMessage(reallyWeirdErrorMessage);
      return <RedirectHome />;
    }

    const {
      date: issueDate,
      name: userFullName,
      username,
      certTitle,
      completionTime
    } = cert;

    const donationCloseBtn = (
      <div>
        <Button
          block={true}
          bsSize='sm'
          bsStyle='primary'
          onClick={this.hideDonationSection}
        >
          Close
        </Button>
      </div>
    );

    let donationSection = (
      <Grid className='donation-section'>
        {!isDonationSubmitted && (
          <Row>
            <Col lg={8} lgOffset={2} sm={10} smOffset={1} xs={12}>
              <p>
                Only you can see this message. Congratulations on earning this
                certification. It’s no easy task. Running freeCodeCamp isn’t
                easy either. Nor is it cheap. Help us help you and many other
                people around the world. Make a tax-deductible supporting
                donation to our nonprofit today.
              </p>
            </Col>
          </Row>
        )}
        <MinimalDonateForm
          handleProcessing={this.handleProcessing}
          defaultTheme='light'
        />
        <Row>
          <Col sm={4} smOffset={4} xs={6} xsOffset={3}>
            {isDonationSubmitted && donationCloseBtn}
          </Col>
        </Row>
      </Grid>
    );

    return (
      <div className='certificate-outer-wrapper'>
        {isDonationDisplayed && !isDonationClosed ? donationSection : ''}
        <Grid className='certificate-wrapper certification-namespace'>
          <Row>
            <header>
              <Col md={5} sm={12}>
                <div className='logo'>
                  <FreeCodeCampLogo />
                </div>
              </Col>
              <Col md={7} sm={12}>
                <div className='issue-date'>
                  Issued&nbsp;
                  <strong>{format(new Date(issueDate), 'MMMM D, YYYY')}</strong>
                </div>
              </Col>
            </header>

            <main className='information'>
              <div className='information-container'>
                <h3>This certifies that</h3>
                <h1>
                  <strong>{userFullName}</strong>
                </h1>
                <h3>has successfully completed the freeCodeCamp.org</h3>
                <h1>
                  <strong>{certTitle}</strong>
                </h1>
                <h4>
                  Developer Certification, representing approximately{' '}
                  {completionTime} hours of coursework
                </h4>
              </div>
            </main>
            <footer>
              <div className='row signatures'>
                <Image
                  alt="Quincy Larson's Signature"
                  src={
                    'https://cdn.freecodecamp.org' +
                    '/platform/english/images/quincy-larson-signature.svg'
                  }
                />
                <p>
                  <strong>Quincy Larson</strong>
                </p>
                <p>Executive Director, freeCodeCamp.org</p>
              </div>
              <Row>
                <p className='verify'>
                  Verify this certification at:
                  https://www.freecodecamp.org/certification/
                  {username}/{certName}
                </p>
              </Row>
            </footer>
          </Row>
        </Grid>
      </div>
    );
  }
}

ShowCertification.displayName = 'ShowCertification';
ShowCertification.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowCertification);
