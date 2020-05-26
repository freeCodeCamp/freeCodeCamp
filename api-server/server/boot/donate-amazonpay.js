import debug from 'debug';

import amazonPayments from 'amazon-payments';

import keys from '../../../config/secrets';

const log = debug('fcc:boot:donate-amazonpay');

// initialize payment
let payment = amazonPayments.connect({
  environment: amazonPayments.Environment.Sandbox,
  sellerId: keys.amazon.sellerId,
  mwsAccessKey: keys.amazon.mwsId,
  mwsSecretKey: keys.amazon.mwsSecret,
  clientId: keys.amazon.clientId
});

export default function donateAmazonPay(app, done) {
  const api = app.loopback.Router();
  const hooks = app.loopback.Router();
  const donateRouter = app.loopback.Router();

  // check for body and user
  function checkAuthorizatioin(req, res) {
    const { user, body } = req;
    if (!user || !body) {
      return res
        .status(500)
        .send({ error: 'User must be signed in for this request.' });
    }
    return null;
  }

  function getAgreementDetails() {
    return new Promise((resolve, reject) => {
      payment.offAmazonPayments.getBillingAgreementDetails(
        {
          AmazonBillingAgreementId: agreementId
        },
        (err, data) => {
          if (err) {
            reject(err);
          }
          if (data.BillingAgreementDetails.Constraints) {
            let constraintType =
              data.BillingAgreementDetails.Constraints.Constraint.ConstraintID;
            let constraintMessage;

            if (constraintType === 'PaymentPlanNotSet')
              constraintMessage = 'Please choose a payment method and resubmit';
            if (constraintType === 'BuyerConsentNotSet')
              constraintMessage =
                'Please allow reccuring payments' +
                'by clicking on empy box above submit button and resubmit';
            if (constraintType === 'BuyerEqualsSeller')
              constraintMessage =
                'Buyer cannot be sellers. Please try with another account';

            reject({
              message: constraintMessage,
              type: constraintType
            });
          }

          // set this global variable so initial steps could be skiped
          // when the payment object is open
          billingAgreementStatus =
            data.BillingAgreementDetails.BillingAgreementStatus.State;
          console.log('GET AGREEMENT DETAILS');
          console.log(JSON.stringify(data));
          resolve(data);
        }
      );
    });
  }

  function setAgreementDetails() {
    if (billingAgreementStatus === 'Draft')
      return new Promise((resolve, reject) => {
        payment.offAmazonPayments.setBillingAgreementDetails(
          {
            AmazonBillingAgreementId: agreementId,
            BillingAgreementAttributes: {
              SellerNote: 'Donation to freeCodeCamp',
              StoreName: 'freeCodeCamp',
              CustomInformation: customInformation
            }
          },
          (err, data) => {
            if (err) {
              reject(err);
            }
            console.log('SET AGREEMENT DETAILS');
            console.log(JSON.stringify(data));
            resolve(data);
          }
        );
      });
    return null;
  }

  function confirmBillingAgreement() {
    // once the agreement is suspended due to InvalidPaymentMethod
    // we need to reconfirm the agreement
    return new Promise((resolve, reject) => {
      payment.offAmazonPayments.confirmBillingAgreement(
        {
          AmazonBillingAgreementId: agreementId
        },
        (err, data) => {
          if (err) {
            reject(err);
          }
          console.log('CONFIRM AGREEMENT DETAILS');
          console.log(JSON.stringify(data));
          resolve(data);
        }
      );
    });
  }

  function authorizeOnBillingAgreement(TransactionTimeout) {
    console.log('time: ' + TransactionTimeout);
    return new Promise((resolve, reject) => {
      payment.offAmazonPayments.authorizeOnBillingAgreement(
        {
          AmazonBillingAgreementId: agreementId,
          SellerOrderAttributes: {
            SellerOrderId: sellerOrderId
          },
          AuthorizationReferenceId: Number(new Date().getTime()),
          AuthorizationAmount: {
            Amount: amount,
            CurrencyCode: 'USD'
          },
          TransactionTimeout: TransactionTimeout,
          CaptureNow: 'true',
          SoftDescriptor: 'freeCodeCamp',
          SellerAuthorizationNote: 'Donation to freeCodeCamp'
        },
        (err, data) => {
          if (err) {
            reject(err);
          }
          const {
            ReasonCode,
            State
          } = data.AuthorizationDetails.AuthorizationStatus;

          orderReferenceId = data.AmazonOrderReferenceId;

          console.log(ReasonCode);
          console.log(State);

          if (State === 'Pending') {
            // asynccallcompleted
            donationState = 'AsyncCallCompleted';
          } else if (State === 'Declined') {
            if (ReasonCode === 'InvalidPaymentMethod') {
              // error is thrown so the payment method could be changed
              // and authorization can take place
              reject({
                message: 'Please choose another payment method and resubmit',
                type: 'InvalidPaymentMethod'
              });
            } else if (ReasonCode === 'TransactionTimedOut') {
              console.log('TransactionTimedOut');
              // set the donationState
              donationState = 'AsyncAuthorizationCall';
            } else {
              donationState = 'CancelOrderRefrence';
            }
          } else donationState = 'CaptureSuccessful';

          console.log('donationData: ' + donationState);
          console.log('AUTHORIIIZE AGREEMENT DETAILS');
          console.log(JSON.stringify(data));
          resolve(data);
        }
      );
    });
  }

  function CancelOrderReference() {
    // once the agreement is suspended due to InvalidPaymentMethod
    // we need to reconfirm the agreement
    console.log('rfid: ' + orderReferenceId);
    return new Promise((resolve, reject) => {
      payment.offAmazonPayments.cancelOrderReference(
        {
          AmazonOrderReferenceId: orderReferenceId
        },
        (err, data) => {
          if (err) {
            reject(err);
          }
          console.log('CANCEL ORDER REFRENCE');
          console.log(JSON.stringify(data));
          resolve(data);
        }
      );
    });
  }

  async function respondToClient(res) {
    console.log('RESPOND TO CLIENT');
    console.log('donationState: ' + donationState);
    if (donationState === 'CaptureSuccessful') {
      return res.status(200).json({
        type: 'success',
        message: `Your payment has been processed.`
      });
    } else if (donationState === 'AsyncCallCompleted') {
      return res.status(200).json({
        type: 'success',
        message: `Amazon Pay is processing your payment. You will receive a confirmation once your payment is processed successfully`
      });
    } else if (donationState === 'AsyncAuthorizationCall') {
      await authorizeOnBillingAgreement(1440);
      if (donationState === 'AsyncCallCompleted') {
        return res.status(200).json({
          type: 'success',
          message: `Amazon Pay is processing your payment. You will receive a confirmation once your payment is processed successfully`
        });
      } else {
        throw generalError;
      }
    } else if (donationState === 'CancelOrderRefrence') {
      await getAgreementDetails();
      console.log(agreementId);
      if (billingAgreementStatus === 'Open') CancelOrderReference();
      throw generalError;
    } else {
      throw generalError;
    }
  }

  // set global vars to be accessible by all functions
  let billingAgreementStatus;
  let sellerOrderId;
  let agreementId;
  let orderReferenceId;
  let customInformation;
  let amount;
  let donationState;
  const generalError = {
    error: 'Donation failed due to a server error.',
    type: 'ServerError'
  };

  // -- API Endpoints -- //
  function createAmazonPayDonation(req, res) {
    const { user, body } = req;

    // return if user is not signed in
    checkAuthorizatioin(req, res);

    const { billingAgreementId, donationAmount } = body;
    const { externalId } = user;

    amount = 8;
    customInformation = externalId;
    agreementId = billingAgreementId;
    sellerOrderId = externalId;

    return Promise.resolve(req)
      .then(getAgreementDetails)
      .then(setAgreementDetails)
      .then(confirmBillingAgreement)
      .then(() => authorizeOnBillingAgreement(1440))
      .then(() => respondToClient(res))
      .catch(err => {
        log(err.message);
        if (
          err.type === 'PaymentPlanNotSet' ||
          err.type === 'BuyerConsentNotSet' ||
          err.type === 'BuyerEqualsSeller' ||
          err.type === 'InvalidPaymentMethod'
        ) {
          return res.status(402).send({ error: err.message, type: err.type });
        }
        return res.status(500).send(generalError);
      });
  }

  function confirmBillingAgreement() {
    // once the agreement is suspended due to InvalidPaymentMethod
    // we need to reconfirm the agreement
    return new Promise((resolve, reject) => {
      payment.offAmazonPayments.confirmBillingAgreement(
        {
          AmazonBillingAgreementId: agreementId
        },
        (err, data) => {
          if (err) {
            reject(err);
          }
          console.log('CONFIRM AGREEMENT DETAILS');
          console.log(JSON.stringify(data));
          resolve(data);
        }
      );
    });
  }

  function apihookUpdateAmazonPay(req, res) {
    const parsedBody = JSON.parse(req.body);
    payment.parseSNSResponse(parsedBody, function(err, parsed) {
      // parsed will contain the full response from SNS unless the message is an IPN notification, in which case it will be the JSON-ified XML from the message.
      console.log('ERROR', err);
      console.log('PASS', parsed);
    });

    return Promise.resolve(req)
      .catch(err => {
        log(err.message);
      })
      .finally(() =>
        res.status(200).json({ message: 'received amazonpay hook' })
      );
  }

  const { sellerId, mwsId, mwsSecret, clientId, clientSecret } = keys.amazon;

  const sellerIdInvalid =
    !sellerId || sellerId === 'seller_id_from_seller_central';
  const mwsIdInvalid = !mwsId || mwsId === 'mws_access_key_from_seller_central';
  const mwsSecretInvalid =
    !mwsSecret || mwsSecret === 'mws_secret_key_from_seller_central';
  const clientIdInvalid =
    !clientId || clientId === 'client_id_from_seller_central';
  const clientSecretInvalid =
    !clientSecret || clientSecret === 'client_secret_from_seller_central';

  if (
    sellerIdInvalid ||
    mwsIdInvalid ||
    mwsSecretInvalid ||
    clientIdInvalid ||
    clientSecretInvalid
  ) {
    if (process.env.FREECODECAMP_NODE_ENV === 'production') {
      throw new Error('AmazonPay API keys are required to boot the server!');
    }
    log(
      'Donation disabled in development' + ' unless ALL test keys are provided'
    );
    done();
  } else {
    api.post('/charge-amazonpay', createAmazonPayDonation);
    hooks.post('/update-amazonpay', apihookUpdateAmazonPay);
    donateRouter.use('/donate', api);
    donateRouter.use('/hooks', hooks);
    app.use(donateRouter);
  }
}
