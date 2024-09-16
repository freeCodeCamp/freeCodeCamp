import { FlashMessages } from '../components/Flash/redux/flash-messages';
import { ns as MainApp } from './action-types';

export const FlashApp = 'flash';

export type FlashMessageArg = {
  type: string;
  message: FlashMessages;
  variables?: Record<string, unknown>;
};

export interface State {
  [FlashApp]: FlashState;
  [MainApp]: {
    appUsername: string;
    recentlyClaimedBlock: null | string;
    showMultipleProgressModals: boolean;
    currentChallengId: string;
    showCert: Record<string, unknown>;
    showCertFetchState: DefaultFetchState;
    user: Record<string, unknown>;
    userFetchState: DefaultFetchState;
    userProfileFetchState: DefaultFetchState;
    showDonationModal: boolean;
    showSignoutModal: boolean;
    isOnline: boolean;
    donationFormState: DefaultDonationFormState;
  };
}

export interface FlashState {
  message: { id: string } & FlashMessageArg;
}

interface DefaultFetchState {
  pending: boolean;
  complete: boolean;
  errored: boolean;
  error: null | string;
}

interface DefaultDonationFormState {
  redirecting: boolean;
  processing: boolean;
  success: boolean;
  error: null | string;
}

export interface DonateFormState {
  processing: boolean;
  redirecting: boolean;
  success: boolean;
  error: string;
  loading: {
    stripe: boolean;
    paypal: boolean;
  };
}

export interface UpdateCardState {
  redirecting: boolean;
  success: boolean;
  error: string;
}
