import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { I18nextProvider } from 'react-i18next';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';

import i18nTestConfig from '../../../../../i18n/config-for-tests';
import translations from '../../../../../i18n/locales/english/translations.json';
import { FlashMessages } from '../../../../components/Flash/redux/flash-messages';
import { initialState as appInitialState } from '../../../../redux';
import { createStore } from '../../../../redux/create-store';
import { postSubmitSurvey } from '../../../../utils/ajax';
import FoundationalCSharpSurveyAlert from './foundational-c-sharp-survey-alert';

vi.unmock('react-i18next');

i18nTestConfig.addResourceBundle(
  'en',
  'translations',
  translations,
  true,
  true
);
const t = i18nTestConfig.t.bind(i18nTestConfig);

vi.mock('../../../../utils/ajax', async () => {
  const actual = await vi.importActual<typeof import('../../../../utils/ajax')>(
    '../../../../utils/ajax'
  );

  return {
    ...actual,
    postSubmitSurvey: vi.fn()
  };
});

vi.mock('../../../../utils/get-words');

const originalResizeObserver = globalThis.ResizeObserver;

class ResizeObserverMock {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

beforeAll(() => {
  globalThis.ResizeObserver = ResizeObserverMock;
});

afterAll(() => {
  globalThis.ResizeObserver = originalResizeObserver;
});

const firstQuestionOption = 'survey.foundational-c-sharp.q1.o1';
const secondQuestionOption = 'survey.foundational-c-sharp.q2.o1';

const expectedSurveyResults = {
  title: t('survey.foundational-c-sharp.title', { lng: 'en' }),
  responses: [
    {
      question: t('survey.foundational-c-sharp.q1.q', { lng: 'en' }),
      response: t(firstQuestionOption, { lng: 'en' })
    },
    {
      question: t('survey.foundational-c-sharp.q2.q', { lng: 'en' }),
      response: t(secondQuestionOption, { lng: 'en' })
    }
  ]
};

function setupSurveyAlert() {
  const store = createStore({
    app: {
      ...appInitialState,
      user: {
        ...appInitialState.user,
        sessionUser: {
          completedSurveys: []
        }
      }
    }
  });

  render(
    <Provider store={store}>
      <I18nextProvider i18n={i18nTestConfig}>
        <FoundationalCSharpSurveyAlert />
      </I18nextProvider>
    </Provider>
  );

  return store;
}

async function openSurvey() {
  const user = userEvent.setup();
  await user.click(screen.getByRole('button', { name: t('survey.misc.take') }));
  await screen.findByRole('dialog');

  return user;
}

async function answerSurveyQuestions(user: ReturnType<typeof userEvent.setup>) {
  await user.click(screen.getByRole('radio', { name: t(firstQuestionOption) }));
  await user.click(
    screen.getByRole('radio', { name: t(secondQuestionOption) })
  );
}

function getSubmitButton() {
  return screen.getByRole('button', { name: t('survey.misc.submit') });
}

function expectSubmitButtonDisabled() {
  expect(getSubmitButton()).toHaveAttribute('aria-disabled', 'true');
}

function expectSubmitButtonEnabled() {
  expect(getSubmitButton()).not.toHaveAttribute('aria-disabled', 'true');
}

describe('<FoundationalCSharpSurveyAlert />', () => {
  it('renders the alert and opens the survey modal', async () => {
    expect.hasAssertions();
    const user = userEvent.setup();
    setupSurveyAlert();

    expect(
      screen.getByText(t('survey.foundational-c-sharp.title'))
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('survey.misc.two-questions'))
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole('button', { name: t('survey.misc.take') })
    );

    expect(await screen.findByRole('dialog')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: t('survey.foundational-c-sharp.title')
      })
    ).toBeInTheDocument();
  });

  it('keeps the submit button disabled until both questions are answered', async () => {
    expect.hasAssertions();
    setupSurveyAlert();
    const user = await openSurvey();

    expectSubmitButtonDisabled();

    await user.click(
      screen.getByRole('radio', { name: t(firstQuestionOption) })
    );
    expectSubmitButtonDisabled();

    await user.click(
      screen.getByRole('radio', { name: t(secondQuestionOption) })
    );
    expectSubmitButtonEnabled();
  });

  it('submits the survey and stores the completed survey state', async () => {
    expect.hasAssertions();
    vi.mocked(postSubmitSurvey).mockResolvedValue({
      response: new Response(null, { status: 200 }),
      data: {
        type: 'success',
        message: FlashMessages.SurveySuccess
      }
    } as unknown as Awaited<ReturnType<typeof postSubmitSurvey>>);
    const testStore = setupSurveyAlert();
    const user = await openSurvey();

    await answerSurveyQuestions(user);
    await user.click(getSubmitButton());

    await waitFor(() =>
      expect(postSubmitSurvey).toHaveBeenCalledWith({
        surveyResults: expectedSurveyResults
      })
    );
    await waitFor(() =>
      expect(testStore.getState().challenge.modal.survey).toBe(false)
    );
    const state = testStore.getState() as unknown as {
      app: { user: { sessionUser: { completedSurveys: unknown[] } } };
      flash: { message: { message: FlashMessages } };
    };
    expect(state.app.user.sessionUser.completedSurveys).toEqual([
      expectedSurveyResults
    ]);
    expect(state.flash.message.message).toBe(FlashMessages.SurveySuccess);
  });
});
