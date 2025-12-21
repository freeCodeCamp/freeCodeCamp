import cookies from 'browser-cookies';
import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

import envData from '../../config/env.json';
import type {
  ChallengeFile,
  ChallengeFiles,
  CompletedChallenge,
  ExamTokenResponse,
  GenerateExamResponseWithData,
  SavedChallenge,
  SavedChallengeFile,
  SurveyResults,
  User
} from '../redux/prop-types';
import { DonationDuration } from '../../../shared-dist/config/donation-settings';

const { apiLocation } = envData;

const base = apiLocation;

const defaultOptions: RequestInit = {
  credentials: 'include'
};

// csrf_token is passed to the client as a cookie. The client must send
// this back as a header.
function getCSRFToken() {
  const token =
    typeof window !== 'undefined' ? cookies.get('csrf_token') : null;
  return token ?? '';
}

export interface ResponseWithData<T> {
  response: Response;
  data: T;
}

// TODO: Might want to handle flash messages as close to the request as possible
// to make use of the Response object (message, status, etc)
async function get<T>(
  path: string,
  signal?: AbortSignal
): Promise<ResponseWithData<T>> {
  const response = await fetch(`${base}${path}`, {
    ...defaultOptions,
    headers: { 'CSRF-Token': getCSRFToken() },
    signal
  });

  return combineDataWithResponse(response);
}

async function combineDataWithResponse<T>(response: Response) {
  const data = (await response.json()) as T;
  return { response, data };
}

export function post<T = void>(
  path: string,
  body: unknown
): Promise<ResponseWithData<T>> {
  return request('POST', path, body);
}

function put<T = void>(
  path: string,
  body: unknown
): Promise<ResponseWithData<T>> {
  return request('PUT', path, body);
}

function deleteRequest<T = void>(
  path: string,
  body: unknown
): Promise<ResponseWithData<T>> {
  return request('DELETE', path, body);
}

async function request<T>(
  method: 'POST' | 'PUT' | 'DELETE',
  path: string,
  body: unknown
): Promise<ResponseWithData<T>> {
  const options: RequestInit = {
    ...defaultOptions,
    method,
    headers: {
      'CSRF-Token': getCSRFToken(),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };

  const response = await fetch(`${base}${path}`, options);
  return combineDataWithResponse(response);
}

/** GET **/

type CompleteChallengeFromApi = {
  files: Array<Omit<ChallengeFile, 'fileKey'> & { key: string }>;
} & Omit<CompletedChallenge, 'challengeFiles'>;

type SavedChallengeFromApi = {
  files: Array<Omit<SavedChallengeFile, 'fileKey'> & { key: string }>;
} & Omit<SavedChallenge, 'challengeFiles'>;

type ApiUser = Omit<User, 'completedChallenges' & 'savedChallenges'> & {
  completedChallenges?: CompleteChallengeFromApi[];
  savedChallenges?: SavedChallengeFromApi[];
};

type ApiUserResponse = {
  user: {
    [username: string]: ApiUser;
  };
  result?: string;
};

function parseApiResponseToClientUser(data: ApiUserResponse): User | null {
  const userData = data.user?.[data?.result ?? ''];
  let completedChallenges: CompletedChallenge[] = [];
  let savedChallenges: SavedChallenge[] = [];
  if (userData) {
    completedChallenges = mapFilesToChallengeFiles(
      userData.completedChallenges
    );
    savedChallenges = mapFilesToChallengeFiles(userData.savedChallenges);
  }
  return data.result
    ? { ...userData, completedChallenges, savedChallenges }
    : null;
}

// TODO: this at least needs a few aliases so it's human readable
export function mapFilesToChallengeFiles<File, Rest>(
  fileContainer: ({ files: (File & { key: string })[] } & Rest)[] = []
) {
  return fileContainer.map(({ files, ...rest }) => ({
    ...rest,
    challengeFiles: mapKeyToFileKey(files)
  }));
}

function mapKeyToFileKey<K>(
  files: (K & { key: string })[]
): (Omit<K, 'key'> & { fileKey: string })[] {
  return files.map(({ key, ...rest }) => ({ ...rest, fileKey: key }));
}

export function getSessionUser(
  signal?: AbortSignal
): Promise<ResponseWithData<User | null>> {
  const responseWithData: Promise<ResponseWithData<ApiUserResponse>> = get(
    '/user/get-session-user',
    signal
  );
  // TODO: Once DB is migrated, no longer need to parse `files` -> `challengeFiles` etc.
  return responseWithData.then(({ response, data }) => {
    const user = parseApiResponseToClientUser(data);
    return {
      response,
      data: user
    };
  });
}

type UserProfileResponse = {
  entities: Omit<ApiUserResponse, 'result'>;
  result: string | undefined;
};
export function getUserProfile(
  username: string
): Promise<ResponseWithData<User | null>> {
  const responseWithData = get<UserProfileResponse>(
    `/users/get-public-profile?username=${username}`
  );
  return responseWithData.then(({ response, data }) => {
    const user = parseApiResponseToClientUser({
      user: data.entities?.user ?? {},
      result: data.result
    });
    return {
      response,
      data: user
    };
  });
}

interface Cert {
  certTitle: string;
  username: string;
  date: Date;
  completionTime: string;
}
export function getShowCert(
  username: string,
  certSlug: string
): Promise<ResponseWithData<Cert>> {
  return get(`/certificate/showCert/${username}/${certSlug}`);
}

export function getUsernameExists(
  username: string
): Promise<ResponseWithData<boolean>> {
  return get(`/users/exists?username=${username}`);
}

export function getGenerateExam(
  challengeId: string
): Promise<GenerateExamResponseWithData> {
  return get(`/exam/${challengeId}`);
}

export interface Exam {
  id: string;
  config: {
    name: string;
  };
}

export type Attempt = {
  id: string;
  examId: string;
  // ISO 8601 string
  startTime: string;
  questionSets: unknown[];
} & (
  | {
      result: null;
      status: 'InProgress' | 'Expired' | 'PendingModeration' | 'Denied';
    }
  | {
      status: 'Approved';
      result: {
        passingPercent: number;
        score: number;
      };
    }
);

export function getExams(): Promise<ResponseWithData<{ exams: Exam[] }>> {
  return get('/user/exam-environment/exams');
}

export function getExamAttempts(): Promise<ResponseWithData<Attempt[]>> {
  return get('/user/exam-environment/exam/attempts');
}

/** POST **/

interface Donation {
  email: string;
  amount: number;
  duration: string;
  provider: string;
  subscriptionId: string;
  customerId: string;
  startDate: Date;
}
// TODO: Verify if the body has and needs this Donation type. The api seems to
// just need the body to exist, but doesn't seem to use the properties.
export function addDonation(body: Donation): Promise<ResponseWithData<void>> {
  return post('/donate/add-donation', body);
}

export function updateStripeCard() {
  return put('/donate/update-stripe-card', {});
}

export function postChargeStripe(
  body: Donation
): Promise<ResponseWithData<void>> {
  return post('/donate/charge-stripe', body);
}

export function postChargeStripeCard(
  body: Donation
): Promise<ResponseWithData<void>> {
  return post('/donate/charge-stripe-card', body);
}

export function generateExamToken(): Promise<
  ResponseWithData<ExamTokenResponse>
> {
  return post('/user/exam-environment/token', {});
}

type PaymentIntentResponse = Promise<
  ResponseWithData<
    | {
        clientSecret?: never;
        subscriptionId?: never;
        error: string;
      }
    | {
        clientSecret: string;
        subscriptionId: string;
        error?: never;
      }
  >
>;

export function createStripePaymentIntent(body: {
  email: string | undefined;
  name: string | undefined;
  amount: number;
  duration: DonationDuration;
}): PaymentIntentResponse {
  return post('/donate/create-stripe-payment-intent', body);
}

interface Report {
  username: string;
  reportDescription: string;
}
export function postReportUser(body: Report): Promise<ResponseWithData<void>> {
  return post('/user/report-user', body);
}

// Both are called without a payload in danger-zone-saga,
// which suggests both are sent without any body
// TODO: Convert to DELETE
export function postDeleteAccount(): Promise<ResponseWithData<void>> {
  return post('/account/delete', {});
}

export function postResetProgress(): Promise<ResponseWithData<void>> {
  return post('/account/reset-progress', {});
}

export function postUserToken(): Promise<ResponseWithData<void>> {
  return post('/user/user-token', {});
}

export function postMsUsername(body: {
  msTranscriptUrl: string;
}): Promise<ResponseWithData<void>> {
  return post('/user/ms-username', body);
}

export function postSaveChallenge(body: {
  id: string;
  files: ChallengeFiles;
}): Promise<ResponseWithData<void>> {
  return post('/encoded/save-challenge', body);
}

export function postSubmitSurvey(body: {
  surveyResults: SurveyResults;
}): Promise<ResponseWithData<void>> {
  return post('/user/submit-survey', body);
}

/** PUT **/

interface MyAbout {
  name: string;
  location: string;
  about: string;
  picture: string;
}
export function putUpdateMyAbout(
  values: MyAbout
): Promise<ResponseWithData<void>> {
  return put('/update-my-about', { ...values });
}

export function putUpdateMyUsername(
  username: string
): Promise<ResponseWithData<void>> {
  return put('/update-my-username', { username });
}

export function putUpdateMyProfileUI(
  profileUI: User['profileUI']
): Promise<ResponseWithData<void>> {
  return put('/update-my-profileui', { profileUI });
}

export function putUpdateMySocials(
  update: Record<string, string>
): Promise<ResponseWithData<void>> {
  return put('/update-my-socials', update);
}

export function putUpdateMyKeyboardShortcuts(
  update: Record<string, string>
): Promise<ResponseWithData<void>> {
  return put('/update-my-keyboard-shortcuts', update);
}

export function putUpdateMyHonesty(
  update: Record<string, string>
): Promise<ResponseWithData<void>> {
  return put('/update-my-honesty', update);
}

export function putUpdateMyQuincyEmail(update: {
  sendQuincyEmail: boolean;
}): Promise<ResponseWithData<void>> {
  return put('/update-my-quincy-email', update);
}

export function putUpdateMyPortfolio(
  update: Record<string, string>
): Promise<ResponseWithData<void>> {
  return put('/update-my-portfolio', update);
}

export function putUserUpdateEmail(
  email: string
): Promise<ResponseWithData<void>> {
  return put('/update-my-email', { email });
}

export function putVerifyCert(
  certSlug: string
): Promise<ResponseWithData<void>> {
  return put('/certificate/verify', { certSlug });
}

/** DELETE **/
export function deleteUserToken(): Promise<ResponseWithData<void>> {
  return deleteRequest('/user/user-token', {});
}

export function deleteMsUsername(): Promise<ResponseWithData<void>> {
  return deleteRequest('/user/ms-username', {});
}

/** RTK */

export interface ExamEnvironmentChallenge {
  id: string;
  examId: string;
  challengeId: string;
}

export type GetExamsResponse = Array<{
  id: string;
  config: {
    name: string;
    note: string;
    totalTimeInS: number;
    retakeTimeInS: number;
    passingPercent: number;
  };
  canTake: boolean;
  prerequisites: string[];
}>;

export const examAttempts = createApi({
  reducerPath: 'exam-attempts',
  baseQuery: retry(
    fetchBaseQuery({
      baseUrl: apiLocation,
      prepareHeaders(headers) {
        headers.set('CSRF-Token', getCSRFToken());
        return headers;
      },
      credentials: 'include'
    }),
    // Retry in the case this is the initial request - csrf is not set yet, and initial returns 403
    { maxRetries: 2 }
  ),
  endpoints: build => ({
    getExamAttemptsByExamId: build.mutation<Attempt[], string>({
      query: examId => `/user/exam-environment/exams/${examId}/attempts`
    }),
    getExamIdsByChallengeId: build.query<ExamEnvironmentChallenge[], string>({
      query: challengeId =>
        `/exam-environment/exam-challenge?challengeId=${challengeId}`
    }),
    getExams: build.query<GetExamsResponse, void>({
      query: () => '/user/exam-environment/exams'
    })
  })
});

export const examEnvironmentAuthorizationTokenApi = createApi({
  reducerPath: 'exam-environment-authorization-token',
  baseQuery: retry(
    fetchBaseQuery({
      baseUrl: apiLocation,
      prepareHeaders(headers) {
        headers.set('CSRF-Token', getCSRFToken());
        return headers;
      },
      credentials: 'include'
    }),
    // Retry in the case this is the initial request - csrf is not set yet, and initial returns 403
    { maxRetries: 2 }
  ),
  endpoints: build => ({
    postGenerateExamEnvironmentAuthorizationToken: build.mutation<
      ExamTokenResponse,
      void
    >({
      query: () => ({
        url: `/user/exam-environment/token`,
        method: 'POST'
      })
    }),
    getExamEnvironmentAuthorizationToken: build.query<ExamTokenResponse, void>({
      query: () => ({
        url: `/user/exam-environment/token`,
        method: 'GET'
      })
    })
  })
});
