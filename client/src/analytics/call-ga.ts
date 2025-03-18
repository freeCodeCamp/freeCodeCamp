import {
  DonationAmount,
  DonationDuration
} from '../../../shared/config/donation-settings';
import { ChallengeFiles } from '../redux/prop-types';
import TagManager from '.';

type DonationEventAction =
  | 'Donate Page PayPal Payment Submission'
  | 'Donate Page Stripe Card Payment Submission'
  | 'Donate Page Stripe Payment Submission'
  | 'Modal PayPal Payment Submission'
  | 'Modal Stripe Card Payment Submission'
  | 'Modal Stripe Payment Submission'
  | 'Certificate PayPal Payment Submission'
  | 'Certificate Stripe Card Payment Submission'
  | 'Certificate Stripe Payment Submission';

interface DonationEvent {
  event: 'donation';
  action: DonationEventAction;
  duration: DonationDuration;
  amount: DonationAmount;
  completed_challenges: number;
  completed_challenges_session: number;
  isSignedIn: boolean;
}

type DonationRelatedEventAction =
  | 'Learn Donation Alert Click'
  | 'Certification Donation Alert Click'
  | 'Modal Become Supporter Click'
  | 'Donate Page Patreon Payment Redirection'
  | 'Modal Patreon Payment Redirection'
  | 'Amount Confirmation Clicked'
  | 'Select Amount Tab Clicked'
  | 'Edit Amount Clicked'
  | 'Certificate Patreon Payment Redirection';

interface DonationRelatedEvent {
  event: 'donation_related';
  action: DonationRelatedEventAction;
  amount?: DonationAmount;
}

type DonationViewEventAction =
  | 'Displayed Block Donation Modal'
  | 'Displayed Progress Donation Modal'
  | 'Displayed Donate Page'
  | 'Displayed Certificate Donation';

interface DonationViewEvent {
  event: 'donation_view';
  action: DonationViewEventAction;
}

interface PageViewEvent {
  event: 'pageview';
  pagePath: string;
}

interface ExperimentViewEvent {
  event: 'experiment_viewed';
  event_category: 'experiment';
  experiment_id: string;
  variation_id: number;
}

interface ChallengeFailedEvent {
  event: 'challenge_failed';
  challenge_id: string;
  challenge_path: string;
  challenge_files: ChallengeFiles;
}

interface UserData {
  event: 'user_data';
  user_id: string;
}

interface SignIn {
  event: 'sign_in';
}

interface SignOut {
  event: 'sign_out';
  user_id: undefined;
}

export type GAevent =
  | DonationViewEvent
  | DonationEvent
  | DonationRelatedEvent
  | PageViewEvent
  | ExperimentViewEvent
  | ChallengeFailedEvent
  | UserData
  | SignOut
  | SignIn;

export default function callGA(payload: GAevent) {
  TagManager.dataLayer({
    dataLayer: payload
  });
}
