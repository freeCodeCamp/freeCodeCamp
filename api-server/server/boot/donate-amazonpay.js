import debug from 'debug';
import generate from 'nanoid/generate';
import amazonPayments from 'amazon-payments';

import keys from '../../../config/secrets';
import { createAsyncUserDonation } from '../utils/donation';

const log = debug('fcc:boot:donate-amazonpay');
const nanoidCharSet =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const randomIdLength = 9;
const billingAgreementIdentifier = 'B';
const generalError = {
  error: 'Donation failed due to a server error.',
  type: 'ServerError'
};
const asyncSuccess = {
  type: 'success',
  message: `Amazon Pay is processing your payment. You will receive a confirmation once your payment is processed successfully`
};
const syncSuccess = {
  type: 'success',
  message: `Your payment has been processed.`
};

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

  function getAgreementDetails(billingAgreementId) {
    return new Promise((resolve, reject) => {
      payment.offAmazonPayments.getBillingAgreementDetails(
        {
          AmazonBillingAgreementId: billingAgreementId
        },
        (err, data) => {
          if (err) {
            return reject(err);
          }

          const { BillingAgreementDetails } = data;
          if (
            BillingAgreementDetails.Constraints &&
            BillingAgreementDetails.Constraints.Constraint
          ) {
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

            return reject({
              message: constraintMessage,
              type: constraintType
            });
          }
          console.log('GET AGREEMENT DETAILS');
          console.log(JSON.stringify(data));
          return resolve(BillingAgreementDetails);
        }
      );
    });
  }

  function setAgreementDetails(BillingAgreementDetail) {
    if (BillingAgreementDetail.BillingAgreementStatus.State === 'Draft')
      return new Promise((resolve, reject) => {
        payment.offAmazonPayments.setBillingAgreementDetails(
          {
            AmazonBillingAgreementId: billingAgreementId,
            BillingAgreementAttributes: {
              SellerNote: 'Donation to freeCodeCamp',
              StoreName: 'freeCodeCamp'
            }
          },
          (err, data) => {
            if (err) {
              return reject(err);
            }
            console.log('SET AGREEMENT DETAILS');
            console.log(JSON.stringify(data));
            return resolve(data);
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
          AmazonBillingAgreementId: billingAgreementId
        },
        (err, data) => {
          if (err) {
            return reject(err);
          }
          console.log('CONFIRM AGREEMENT DETAILS');
          console.log(JSON.stringify(data));
          return resolve(data);
        }
      );
    });
  }

  function authorizeOnBillingAgreement(TransactionTimeout, req) {
    console.log('time: ' + TransactionTimeout);
    const randomchars = generate(nanoidCharSet, randomIdLength);
    const { donationAmount } = req.body;

    // it should not be more than 32 chars
    const AuthorizationReferenceId = `${billingAgreementIdentifier}_${randomchars}_${billingAgreementId}`;

    return new Promise((resolve, reject) => {
      payment.offAmazonPayments.authorizeOnBillingAgreement(
        {
          AmazonBillingAgreementId: billingAgreementId,
          AuthorizationReferenceId,
          AuthorizationAmount: {
            Amount: donationAmount / 100,
            CurrencyCode: 'USD'
          },
          TransactionTimeout: TransactionTimeout,
          CaptureNow: 'true',
          SoftDescriptor: 'freeCodeCamp',
          SellerAuthorizationNote: 'Donation to freeCodeCamp.org'
        },
        (err, data) => {
          if (err) {
            console.log(err);
            return reject(err);
          }
          const {
            ReasonCode,
            State
          } = data.AuthorizationDetails.AuthorizationStatus;
          const orderReferenceId = data.AmazonOrderReferenceId;
          let donationState;

          console.log(ReasonCode);
          console.log(State);

          if (State === 'Pending') {
            // asynccallcompleted
            donationState = 'AsyncCallCompleted';
          } else if (State === 'Declined') {
            if (ReasonCode === 'InvalidPaymentMethod') {
              // error is thrown so the payment method could be changed
              // and authorization can take place
              return reject({
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
          return resolve({ donationState, orderReferenceId });
        }
      );
    });
  }

  function CancelOrderReference(orderReferenceId) {
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
            return reject(err);
          }
          console.log('CANCEL ORDER REFRENCE');
          console.log(JSON.stringify(data));
          return resolve(data);
        }
      );
    });
  }

  function closeBillingAgreement() {
    return new Promise((resolve, reject) => {
      payment.offAmazonPayments.closeBillingAgreement(
        {
          AmazonBillingAgreementId: billingAgreementId
        },
        (err, data) => {
          if (err) {
            return reject(err);
          }
          console.log('CLOSE BILLING AGREEMENT');
          console.log(JSON.stringify(data));
          return resolve(data);
        }
      );
    });
  }

  const createAsyncUserBillingAgreement = (
    user,
    amazonBillingAgreement,
    app
  ) => {
    const { AmazonBillingAgreement } = app.models;
    const { billingAgreementId } = amazonBillingAgreement;
    return AmazonBillingAgreement.findOne(
      { where: { billingAgreementId } },
      (err, billingAgreement) => {
        if (err) throw new Error(err);
        if (!billingAgreement) {
          log(
            `Creating billingAgreement:${amazonBillingAgreement.billingAgreementId}`
          );
          user
            .createAmzBillingAgreement(amazonBillingAgreement)
            .toPromise()
            .catch(err => {
              throw new Error(err);
            });
        }
      }
    );
  };

  const nowDateString = () => {
    return new Date(Date.now()).toISOString();
  };

  async function respondToClient(req, res, app, syncAuthInfo) {
    console.log('RESPOND TO CLIENT');
    const { donationState, orderReferenceId } = syncAuthInfo;
    console.log('donationState: ' + donationState);
    const startDate = nowDateString();
    const {
      user,
      body: { donationDuration, donationAmount }
    } = req;
    const amazonBillingAgreement = {
      duration: donationDuration,
      startDate,
      billingAgreementId
    };
    if (donationState === 'CaptureSuccessful') {
      const {
        Buyer: { Email }
      } = await getAgreementDetails(billingAgreementId);
      amazonBillingAgreement.email = Email;
      const donation = {
        email: Email,
        amount: donationAmount,
        duration: 'AmazonBillingAgreement',
        provider: 'amazon',
        subscriptionId: billingAgreementId,
        customerId: Email,
        startDate,
        orderReferenceId
      };
      await createAsyncUserBillingAgreement(user, amazonBillingAgreement, app);
      await createAsyncUserDonation(user, donation);
      return res.status(200).json(syncSuccess);
    } else if (donationState === 'AsyncCallCompleted') {
      await createAsyncUserBillingAgreement(user, amazonBillingAgreement, app);
      return res.status(200).json(asyncSuccess);
    } else if (donationState === 'AsyncAuthorizationCall') {
      const asyncAuthInfo = await authorizeOnBillingAgreement(1440, req);
      if (asyncAuthInfo.donationState === 'AsyncCallCompleted') {
        const {
          Buyer: { Email }
        } = await getAgreementDetails(billingAgreementId);
        amazonBillingAgreement.email = Email;
        await createAsyncUserBillingAgreement(
          user,
          amazonBillingAgreement,
          app
        );
        return res.status(200).json(asyncSuccess);
      } else {
        throw generalError;
      }
    } else if (donationState === 'CancelOrderRefrence') {
      const BillingAgreementDetails = await getAgreementDetails(
        billingAgreementId
      );
      if (BillingAgreementDetails.BillingAgreementStatus.State === 'Open')
        CancelOrderReference(orderReferenceId);
      throw generalError;
    } else {
      throw generalError;
    }
  }

  // set global vars to be accessible by all functions
  let billingAgreementId;

  // -- API Endpoints -- //
  function createAmazonPayDonation(req, res) {
    // return if user is not signed in
    checkAuthorizatioin(req, res);

    billingAgreementId = req.body.billingAgreementId;

    return (
      Promise.resolve(req)
        .then(() => getAgreementDetails(billingAgreementId))
        .then(setAgreementDetails)
        .then(confirmBillingAgreement)
        .then(() => authorizeOnBillingAgreement(0, req))
        .then(donationState => respondToClient(req, res, app, donationState))
        // .then(closeBillingAgreement)
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
        })
    );
  }

  function apihookUpdateAmazonPay(req, res) {
    return Promise.resolve(req)
      .then(verifyWebHook)
      .then(parsedBody => updateUser(parsedBody, app))
      .catch(err => {
        log(err.message);
      })
      .finally(() =>
        res.status(200).json({ message: 'received amazonpay hook' })
      );
  }

  function getRefrenceIdFromAuthorizationId(authorizationId) {
    var n = authorizationId.lastIndexOf('-');
    return authorizationId.slice(0, n);
  }

  function updateUser(parsedBody, app) {
    console.log('UPDATEUSER');
    const { NotificationData, NotificationType } = parsedBody;

    if (
      NotificationType === 'PaymentAuthorize' &&
      NotificationData.AuthorizationStatus.State === 'Closed' &&
      NotificationData.AuthorizationStatus.ReasonCode === 'MaxCapturesProcessed'
    ) {
      const [
        identifier,
        randomId,
        billingAgreementId
      ] = NotificationData.AuthorizationReferenceId.split('_');
      if (
        identifier === billingAgreementIdentifier &&
        randomId.length === randomIdLength &&
        billingAgreementId
      ) {
        createDonationFromIPN(
          parsedBody,
          billingAgreementId,
          NotificationData,
          app
        );
      }
    } else if (
      NotificationType === 'BillingAgreementNotification' &&
      NotificationData.BillingAgreementStatus.State === 'Closed'
    ) {
      // console.log(parsedBody);
      // console.log(NotificationData);
      // NotificationData.AmazonBillingAgreementId
      // closeSubscription(parsedBody, app);
      // find the user set is donating to false
    } else if (NotificationType === 'OrderReferenceNotification') {
      if (NotificationData.BillingAgreementStatus.State === 'Closed') {
        // check if OrderRefrenceStatus is open  make async call
        // if orderRefrenceStatus is closed and payment not made (
        // (no donation record)
        // then error to sentry
      }
    }
  }

  // function closeSubscription {
  //   console.log(parsedBody);
  // }

  async function createDonationFromIPN(
    parsedBody,
    billingAgreementId,
    NotificationData,
    app
  ) {
    console.log(parsedBody);
    const { AmazonBillingAgreement, User } = app.models;
    AmazonBillingAgreement.findOne(
      { where: { billingAgreementId } },
      (err, billingAgreement) => {
        if (err || !billingAgreement) throw err;
        const { userId, email } = billingAgreement;
        console.log(NotificationData);
        User.findOne({ where: { id: userId } }, (err, user) => {
          if (err || !user) throw err;
          const donation = {
            email,
            amount: Math.trunc(
              parseFloat(NotificationData.CapturedAmount.Amount) * 100
            ),
            duration: 'AmazonBillingAgreement',
            provider: 'amazon',
            subscriptionId: billingAgreementId,
            customerId: email,
            startDate: nowDateString(),
            orderReferenceId: getRefrenceIdFromAuthorizationId(
              NotificationData.AmazonAuthorizationId
            )
          };
          createAsyncUserDonation(user, donation);
        });
      }
    );
  }

  function verifyWebHook(req) {
    // check if webhook type for creation
    const jsonBody = JSON.parse(req.body);
    return new Promise((resolve, reject) => {
      payment.parseSNSResponse(jsonBody, function(err, parsed) {
        if (err) {
          return reject(err);
        }
        console.log(parsed.NotificationType);
        return resolve(parsed);
      });
    });
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
