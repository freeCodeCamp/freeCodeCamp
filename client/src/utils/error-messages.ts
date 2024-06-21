import { FlashMessages } from '../components/Flash/redux/flash-messages';

export const standardErrorMessage = {
  type: 'danger',
  message: FlashMessages.WentWrong
};

export const reallyWeirdErrorMessage = {
  type: 'danger',
  message: FlashMessages.ReallyWeird
};

export const reportedErrorMessage = {
  type: 'danger',
  message: FlashMessages.GenericError
};

export const certificateMissingErrorMessage = {
  type: 'danger',
  message: FlashMessages.CertificateMissing
};

export const msTrophyVerified = {
  type: 'success',
  message: FlashMessages.MsTrophyVerified
};
