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
  IncompleteSteps = 'flash.incomplete-steps',
  CertClaimSuccess = 'flash.cert-claim-success',
  SigninSuccess = 'flash.signin-success',
  EmailValid = 'flash.email-valid',
  AlreadyClaimed = 'flash.already-claimed',
  WrongName = 'flash.wrong-name',
  NameNeeded = 'flash.name-needed',
  UsernameNotFound = 'flash.username-not-found',
  AddNameSuccess = 'flash.add-name',
  NotEligible = 'flash.not-eligible',
  ProfilePrivate = 'flash.profile-private',
  CertsPrivate = 'flash.certs-private',
  NotHonest = 'flash.not-honest',
  UserNotCertified = 'flash.user-not-certified',
  WrongUpdating = 'flash.wrong-updating',
  UpdatedPreferences = 'flash.updated-preferences',
  UsernameUsed = 'flash.username-used',
  UsernameTaken = 'flash.username-taken',
  UsernameUpdated = 'flash.username-updated',
  CreateTokenErr = 'flash.create-token-err',
  DeleteTokenErr = 'flash.delete-token-err',
  ProvideUsername = 'flash.provide-username',
  ReportSent = 'flash.report-sent',
  HonestFirst = 'flash.honest-first',
  TokenCreated = 'flash.token-created',
  TokenDeleted = 'flash.token-deleted',
  AccountDeleted = 'flash.account-deleted',
  ProgressReset = 'flash.progress-reset',
  CertificateMissing = 'flash.certificate-missing',
  ReallyWeird = 'flash.really-weird',
  NotRight = 'flash.not-right',
  WentWrong = 'flash.went-wrong',
  None = ''
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
  void playTone(flash.message);
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
