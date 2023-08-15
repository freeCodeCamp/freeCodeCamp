import { FlashMessages } from '../components/Flash/redux/flash-messages';

export const standardErrorMessage = {
  type: 'danger',
  message: FlashMessages.WentWrong
};

export const trophyMissingMessage = {
  type: 'danger',
  message: FlashMessages.MSTrophyMissing
};

export const reallyWeirdErrorMessage = {
  type: 'danger',
  message: FlashMessages.ReallyWeird
};

export const reportedErrorMessage = {
  type: 'danger',
  message: FlashMessages.NotRight
};

export const certificateMissingErrorMessage = {
  type: 'danger',
  message: FlashMessages.CertificateMissing
};
