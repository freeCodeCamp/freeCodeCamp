import { describe, it, expect, vi, beforeEach } from 'vitest';
import { of } from 'rxjs';
import { toArray } from 'rxjs/operators';
import { navigate } from 'gatsby';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';
import { createFlashMessage } from '../../../components/Flash/redux';
import { standardErrorMessage } from '../../../utils/error-messages';
import {
  setIsProcessing,
  submitComplete,
  updateFailed
} from '../../../redux/actions';
import { post } from '../../../utils/ajax';
import { actionTypes } from './action-types';
import {
  closeModal,
  setIsAdvancing,
  submitChallengeComplete,
  submitChallengeError,
  updateSolutionFormValues
} from './actions';
import completionEpic from './completion-epic';

vi.mock('gatsby', () => ({
  navigate: vi.fn()
}));

vi.mock('../../../utils/ajax', async importOriginal => {
  const actual = await importOriginal();
  return {
    ...actual,
    post: vi.fn()
  };
});

vi.mock('../../../redux/selectors', async importOriginal => {
  const actual = await importOriginal();
  return {
    ...actual,
    isSignedInSelector: () => true,
    userSelector: () => ({ username: 'camperbot' })
  };
});

vi.mock('./selectors', async importOriginal => {
  const actual = await importOriginal();
  return {
    ...actual,
    isBlockNewlyCompletedSelector: () => false,
    isModuleNewlyCompletedSelector: () => false
  };
});

function createState(challengeOverrides = {}) {
  return {
    challenge: {
      challengeMeta: {
        id: 'challenge-1',
        challengeType: challengeTypes.html,
        isLastChallengeInBlock: false,
        nextChallengePath: '/learn/next-challenge',
        superBlock: 'responsive-web-design',
        block: 'basic-html',
        module: '',
        blockHashSlug: '/learn/responsive-web-design/#basic-html',
        saveSubmissionToDB: false,
        ...challengeOverrides
      },
      challengeFiles: [],
      challengeTests: [{ pass: true, err: null }],
      projectFormValues: {
        solution: 'https://example.com/project',
        githubLink: 'https://github.com/example/project'
      },
      userCompletedExam: {}
    }
  };
}

describe('completionEpic submission handling', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('retries failed requests, flashes an error, and keeps the modal open without navigating on rejection', async () => {
    vi.mocked(post).mockRejectedValue(new Error('network failure'));
    const state = createState();

    const emitted = await completionEpic(
      of({ type: actionTypes.submitChallenge }),
      {
        value: state
      }
    )
      .pipe(toArray())
      .toPromise();

    expect(post).toHaveBeenCalledTimes(4);
    expect(emitted).toContainEqual(
      expect.objectContaining({
        type: createFlashMessage(standardErrorMessage).type,
        payload: expect.objectContaining(standardErrorMessage)
      })
    );
    expect(emitted).toContainEqual(
      updateFailed({
        endpoint: '/encoded/modern-challenge-completed',
        payload: { id: 'challenge-1', challengeType: challengeTypes.html }
      })
    );
    expect(emitted).toContainEqual(submitChallengeError());
    expect(emitted).toContainEqual(setIsProcessing(false));

    expect(emitted).not.toContainEqual(setIsAdvancing(true));
    expect(emitted).not.toContainEqual(closeModal('completion'));
    expect(navigate).not.toHaveBeenCalled();
  });

  it('treats non-OK 5xx responses as failures, retries, and does not clear project form values', async () => {
    vi.mocked(post).mockResolvedValue({
      response: { ok: false, status: 503 },
      data: { error: 'Service Unavailable' }
    });
    const state = createState({
      challengeType: challengeTypes.frontEndProject
    });

    const emitted = await completionEpic(
      of({ type: actionTypes.submitChallenge }),
      {
        value: state
      }
    )
      .pipe(toArray())
      .toPromise();

    expect(post).toHaveBeenCalledTimes(4);
    expect(emitted).toContainEqual(
      expect.objectContaining({
        type: createFlashMessage(standardErrorMessage).type,
        payload: expect.objectContaining(standardErrorMessage)
      })
    );
    expect(emitted).toContainEqual(submitChallengeError());
    expect(emitted).toContainEqual(setIsProcessing(false));

    expect(emitted).not.toContainEqual(updateSolutionFormValues({}));
    expect(emitted).not.toContainEqual(closeModal('completion'));
    expect(navigate).not.toHaveBeenCalled();
  });

  it('handles non-OK 4xx error payloads with a message without navigating or closing the modal', async () => {
    const serverError = { type: 'error', message: 'Invalid solution URL' };
    vi.mocked(post).mockResolvedValue({
      response: { ok: false, status: 400 },
      data: serverError
    });
    const state = createState({
      challengeType: challengeTypes.frontEndProject
    });

    const emitted = await completionEpic(
      of({ type: actionTypes.submitChallenge }),
      {
        value: state
      }
    )
      .pipe(toArray())
      .toPromise();

    expect(post).toHaveBeenCalledTimes(1);
    expect(emitted).toContainEqual(
      expect.objectContaining({
        type: createFlashMessage(serverError).type,
        payload: expect.objectContaining(serverError)
      })
    );
    expect(emitted).toContainEqual(submitChallengeError());
    expect(emitted).toContainEqual(setIsProcessing(false));
    expect(emitted).not.toContainEqual(updateSolutionFormValues({}));
    expect(emitted).not.toContainEqual(closeModal('completion'));
    expect(navigate).not.toHaveBeenCalled();
  });

  it('completes, clears project form values, closes modal, and navigates once on success', async () => {
    vi.mocked(post).mockResolvedValue({
      response: { ok: true, status: 200 },
      data: { completedDailyCodingChallenges: [], savedChallenges: [] }
    });
    const state = createState({
      challengeType: challengeTypes.frontEndProject
    });

    const emitted = await completionEpic(
      of({ type: actionTypes.submitChallenge }),
      {
        value: state
      }
    )
      .pipe(toArray())
      .toPromise();

    expect(emitted.some(a => a.type === submitComplete().type)).toBe(true);
    expect(emitted).toContainEqual(submitChallengeComplete());
    expect(emitted).toContainEqual(updateSolutionFormValues({}));
    expect(emitted).toContainEqual(setIsAdvancing(true));
    expect(emitted).toContainEqual(setIsProcessing(false));
    expect(emitted).toContainEqual(closeModal('completion'));
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/learn/next-challenge');
  });
});
