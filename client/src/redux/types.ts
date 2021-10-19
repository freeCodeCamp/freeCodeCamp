import { FlashApp, FlashMessageArg } from '../components/Flash/redux';
import { MainApp } from '.';

export interface State {
  [FlashApp]: FlashState;
  [MainApp]: {
    appUsername: string;
    recentlyClaimedBlock: null | string;
    canRequestProgressDonation: boolean;
    completionCount: number;
    currentChallengId: string;
    showCert: Record<string, unknown>;
    showCertFetchState: DefaultFetchState;
    user: Record<string, unknown>;
    userFetchState: DefaultFetchState;
    userProfileFetchState: DefaultFetchState;
    sessionMeta: {
      activeDonations: number;
    };
    showDonationModal: boolean;
    isOnline: boolean;
    donationFormState: DefaultDonationFormState;
  };
}

export interface FlashState {
  message: { id: string } & FlashMessageArg;
}

export interface DefaultFetchState {
  pending: boolean;
  complete: boolean;
  errored: boolean;
  error: null | string;
}

export interface DefaultDonationFormState {
  redirecting: boolean;
  processing: boolean;
  success: boolean;
  error: null | string;
}

export const defaultFetchState = {
  pending: true,
  complete: false,
  errored: false,
  error: null
};

export const defaultDonationFormState = {
  redirecting: false,
  processing: false,
  success: false,
  error: ''
};
