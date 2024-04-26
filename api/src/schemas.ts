import { certSlug } from './schemas/certificate/cert-slug';
import { certificateVerify } from './schemas/certificate/certificate-verify';
import { backendChallengeCompleted } from './schemas/challenge/backend-challenge-completed';
import { coderoadChallengeCompleted } from './schemas/challenge/coderoad-challenge-completed';
import { exam } from './schemas/challenge/exam';
import { examChallengeCompleted } from './schemas/challenge/exam-challenge-completed';
import { modernChallengeCompleted } from './schemas/challenge/modern-challenge-completed';
import { msTrophyChallengeCompleted } from './schemas/challenge/ms-trophy-challenge-completed';
import { projectCompleted } from './schemas/challenge/project-completed';
import { saveChallenge } from './schemas/challenge/save-challenge';
import { deprecatedEndpoints } from './schemas/deprecated';
import { chargeStripeCard } from './schemas/donate/charge-stripe-card';
import { addDonation } from './schemas/donate/add-donation';
import { chargeStripe } from './schemas/donate/charge-stripe';
import { updateMyAbout } from './schemas/settings/update-my-about';
import { updateMyClassroomMode } from './schemas/settings/update-my-classroom-mode';
import { updateMyEmail } from './schemas/settings/update-my-email';
import { updateMyHonesty } from './schemas/settings/update-my-honesty';
import { updateMyKeyboardShortcuts } from './schemas/settings/update-my-keyboard-shortcuts';
import { updateMyPortfolio } from './schemas/settings/update-my-portfolio';
import { updateMyPrivacyTerms } from './schemas/settings/update-my-privacy-terms';
import { updateMyProfileUI } from './schemas/settings/update-my-profile-ui';
import { updateMyQuincyEmail } from './schemas/settings/update-my-quincy-email';
import { updateMySocials } from './schemas/settings/update-my-socials';
import { updateMyTheme } from './schemas/settings/update-my-theme';
import { updateMyUsername } from './schemas/settings/update-my-username';
import { deleteMsUsername } from './schemas/user/delete-ms-username';
import { deleteMyAccount } from './schemas/user/delete-my-account';
import { deleteUserToken } from './schemas/user/delete-user-token';
import { getSessionUser } from './schemas/user/get-session-user';
import { postMsUsername } from './schemas/user/post-ms-username';
import { reportUser } from './schemas/user/report-user';
import { resetMyProgress } from './schemas/user/reset-my-progress';
import { submitSurvey } from './schemas/user/submit-survey';

export const schemas = {
  backendChallengeCompleted,
  certificateVerify,
  certSlug,
  chargeStripeCard,
  addDonation,
  chargeStripe,
  coderoadChallengeCompleted,
  deleteMyAccount,
  deleteMsUsername,
  deleteUserToken,
  deprecatedEndpoints,
  exam,
  examChallengeCompleted,
  getSessionUser,
  modernChallengeCompleted,
  msTrophyChallengeCompleted,
  postMsUsername,
  projectCompleted,
  saveChallenge,
  submitSurvey,
  reportUser,
  resetMyProgress,
  updateMyAbout,
  updateMyClassroomMode,
  updateMyEmail,
  updateMyHonesty,
  updateMyKeyboardShortcuts,
  updateMyPortfolio,
  updateMyPrivacyTerms,
  updateMyProfileUI,
  updateMyQuincyEmail,
  updateMySocials,
  updateMyTheme,
  updateMyUsername
};
