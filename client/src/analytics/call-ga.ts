import {
  DonationAmount,
  DonationDuration
} from '@freecodecamp/shared/config/donation-settings';
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
  | 'Socrates LowerJaw Become Supporter Click'
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

interface ChallengeTestCodeButtonClickEvent {
  event: 'challenge_test_code_button_click';
}

interface ChallengeSubmitButtonClickEvent {
  event: 'challenge_submit_button_click';
}

interface CallSocratesEvent {
  event: 'call_socrates';
  action: 'Socrates LowerJaw Button Click';
  is_donating: boolean;
  attempts: number | null;
  limit: number | null;
  optimized_request: Record<string, unknown> | null;
}

interface SendSocratesEvent {
  event: 'send_socrates';
  action: 'Socrates Request Sent';
  is_donating: boolean;
  attempts: number | null;
  limit: number | null;
  optimized_request: Record<string, unknown> | null;
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
  | SignIn
  | ChallengeTestCodeButtonClickEvent
  | ChallengeSubmitButtonClickEvent
  | CallSocratesEvent
  | SendSocratesEvent;

export default function callGA(payload: GAevent) {
  TagManager.dataLayer({
    dataLayer: payload
  });
}
