import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { I18nextProvider } from 'react-i18next';
import { describe, expect, it, vi } from 'vitest';

import i18nTestConfig from '../../../../i18n/config-for-tests';
import translations from '../../../../i18n/locales/english/translations.json';
import type { Test } from '../../../redux/prop-types';
import ChallengeDescription from './challenge-description';
import ChallengeTitle from './challenge-title';
import { SidePanel } from './side-panel';

vi.unmock('react-i18next');

i18nTestConfig.addResourceBundle(
  'en',
  'translations',
  translations,
  true,
  true
);
const t = i18nTestConfig.t.bind(i18nTestConfig);

// Fixture data from the 'Declare JavaScript Variables' challenge
// (curriculum/challenges/english/blocks/basic-javascript/bd7123c9c443eddfaeb5bdef.md)
const challengeTitle = 'Declare JavaScript Variables';
const description =
  'Variables allow computers to store and manipulate data in a dynamic fashion.';
const instructions = 'Use the var keyword to create a variable called myName.';
const testText =
  'You should declare myName with the var keyword, ending with a semicolon';

const tests: Test[] = [
  {
    text: `<p>${testText}</p>`,
    testString:
      'assert(/var\\s+myName\\s*;/.test(__helpers.removeJSComments(code)));'
  }
];

const toolPanelText = 'Tool panel placeholder';

function renderSidePanel({
  hasDemo = false,
  showSidePanelTests = true,
  openModal = vi.fn()
}: {
  hasDemo?: boolean;
  showSidePanelTests?: boolean;
  openModal?: (modal: string) => void;
} = {}) {
  render(
    <I18nextProvider i18n={i18nTestConfig}>
      <SidePanel
        challengeDescription={
          <ChallengeDescription
            description={`<p>${description}</p>`}
            instructions={`<p>${instructions}</p>`}
            superBlock='javascript-algorithms-and-data-structures'
            challengeId='bd7123c9c443eddfaeb5bdef'
            block='basic-javascript'
          />
        }
        challengeTitle={
          <ChallengeTitle isCompleted={false} translationPending={false}>
            {challengeTitle}
          </ChallengeTitle>
        }
        instructionsPanelRef={React.createRef()}
        hasDemo={hasDemo}
        toolPanel={<div>{toolPanelText}</div>}
        tests={tests}
        openModal={openModal}
        showSidePanelTests={showSidePanelTests}
      />
    </I18nextProvider>
  );
}

describe('<SidePanel />', () => {
  it('renders the challenge title, description, tool panel, and test results', () => {
    renderSidePanel();

    expect(
      screen.getByRole('heading', { level: 1, name: challengeTitle })
    ).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText(instructions)).toBeInTheDocument();

    expect(screen.getByText(toolPanelText)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: t('learn.editor-tabs.tests') })
    ).toBeInTheDocument();
    expect(screen.getByText(`1. ${testText}`)).toBeInTheDocument();

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('hides the tool panel and test results when side panel tests are disabled', () => {
    renderSidePanel({ showSidePanelTests: false });

    expect(
      screen.getByRole('heading', { level: 1, name: challengeTitle })
    ).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();

    expect(screen.queryByText(toolPanelText)).not.toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: t('learn.editor-tabs.tests') })
    ).not.toBeInTheDocument();
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  it('opens the project preview modal from the demo link', async () => {
    const user = userEvent.setup();
    const openModal = vi.fn();
    renderSidePanel({ hasDemo: true, openModal });

    await user.click(
      screen.getByRole('button', { name: 'this example project' })
    );

    expect(openModal).toHaveBeenCalledWith('projectPreview');
  });
});
