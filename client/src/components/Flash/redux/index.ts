import { nanoid } from 'nanoid';
import { FlashState, State } from '../../../redux/types';
import { playTone } from '../../../utils/tone';

export const FlashApp = 'flash';

export const sagas = [];

export const flashMessageSelector = (state: State): FlashState['message'] =>
  state[FlashApp].message;

// ACTION DEFINITIONS

enum FlashActionTypes {
  CreateFlashMessage = 'createFlashMessage',
  RemoveFlashMessage = 'removeFlashMessage'
}

export enum FlashMessages {
  AccountDeleted = 'flash.account-deleted',
  AddNameSuccess = 'flash.add-name',
  AlreadyClaimed = 'flash.already-claimed',
  CertClaimSuccess = 'flash.cert-claim-success',
  CertificateMissing = 'flash.certificate-missing',
  CertsPrivate = 'flash.certs-private',
  CreateTokenErr = 'flash.create-token-err',
  DeleteTokenErr = 'flash.delete-token-err',
  EmailValid = 'flash.email-valid',
  HonestFirst = 'flash.honest-first',
  IncompleteSteps = 'flash.incomplete-steps',
  NameNeeded = 'flash.name-needed',
  None = '',
  NotEligible = 'flash.not-eligible',
  NotHonest = 'flash.not-honest',
  NotRight = 'flash.not-right',
  ProfilePrivate = 'flash.profile-private',
  ProgressReset = 'flash.progress-reset',
  ProvideUsername = 'flash.provide-username',
  ReallyWeird = 'flash.really-weird',
  ReportSent = 'flash.report-sent',
  SigninSuccess = 'flash.signin-success',
  TokenCreated = 'flash.token-created',
  TokenDeleted = 'flash.token-deleted',
  UpdatedPreferences = 'flash.updated-preferences',
  UsernameNotFound = 'flash.username-not-found',
  UsernameTaken = 'flash.username-taken',
  UsernameUpdated = 'flash.username-updated',
  UsernameUsed = 'flash.username-used',
  UserNotCertified = 'flash.user-not-certified',
  WrongName = 'flash.wrong-name',
  WrongUpdating = 'flash.wrong-updating',
  WentWrong = 'flash.went-wrong'
}

export type FlashMessageArg = {
  type: string;
  message: FlashMessages;
  variables?: Record<string, unknown>;
};

const initialState = {
  message: {
    id: '',
    type: '',
    message: FlashMessages.None
  }
};

export const createFlashMessage = (
  flash: FlashMessageArg
): ReducerPayload<FlashActionTypes.CreateFlashMessage> => {
  // Do not play tone if flash comes from Nightmode toggle
  if (flash.message !== FlashMessages.None && !flash.variables?.theme) {
    void playTone(flash.message);
  }
  return {
    type: FlashActionTypes.CreateFlashMessage,
    payload: { ...flash, id: nanoid() }
  };
};

export const removeFlashMessage =
  (): ReducerPayload<FlashActionTypes.RemoveFlashMessage> => ({
    type: FlashActionTypes.RemoveFlashMessage
  });

// REDUCER
type ReducerBase<T> = { type: T };
type ReducerPayload<T extends FlashActionTypes> =
  T extends FlashActionTypes.CreateFlashMessage
    ? ReducerBase<T> & {
        payload: FlashState['message'];
      }
    : ReducerBase<T>;

// Does reducer return FlashState or AppState (whole app)?
export const reducer = (
  state: FlashState = initialState,
  action: ReducerPayload<FlashActionTypes>
): FlashState => {
  switch (action.type) {
    case FlashActionTypes.CreateFlashMessage:
      return { ...state, message: action.payload };
    case FlashActionTypes.RemoveFlashMessage:
      return { ...state, message: initialState.message };
    default:
      return state;
  }
};
