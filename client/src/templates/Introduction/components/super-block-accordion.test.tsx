import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, within, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { createStore } from '../../../redux/create-store';
import { SuperBlocks } from '../../../../../shared-dist/config/curriculum';
import {
  BlockLayouts,
  BlockLabel
} from '../../../../../shared-dist/config/blocks';
import { SuperBlockAccordion } from './super-block-accordion';

const t = (key: string) => {
  const translations: Record<
    string,
    string | string[] | { note: string; intro: string[] }
  > = {
    'intro:responsive-web-design.chapters.test-chapter': 'Test Chapter',
    'intro:responsive-web-design.modules.test-module': 'Test Module',
    'intro:responsive-web-design.module-intros.test-module': {
      note: '',
      intro: []
    },
    'intro:responsive-web-design.blocks.block1.title': 'Lab Block',
    'intro:responsive-web-design.blocks.block2.title': 'Workshop Block',
    'learn.not-started': 'Not Started'
  };
  return translations[key];
};

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t }),
  withTranslation:
    () =>
    <P extends Record<string, unknown>>(Component: React.ComponentType<P>) => {
      const WrappedComponent = (props: P) => <Component {...props} t={t} />;
      WrappedComponent.displayName = `WithTranslationComp`;
      return WrappedComponent;
    }
}));

vi.mock('../../../utils/get-words');

function renderWithRedux(
  ui: JSX.Element,
  preloadedState: Record<string, unknown> = {}
) {
  return render(<Provider store={createStore(preloadedState)}>{ui}</Provider>);
}

const mockStructure = {
  superBlock: SuperBlocks.RespWebDesign,
  chapters: [
    {
      dashedName: 'test-chapter',
      modules: [
        {
          dashedName: 'test-module',
          blocks: ['block1', 'block2']
        }
      ]
    }
  ]
};

describe('SuperBlockAccordion', () => {
  it('does not show completed checkmark when there are zero challenges in a chapter', () => {
    render(
      <SuperBlockAccordion
        challenges={[]}
        superBlock={SuperBlocks.RespWebDesign}
        structure={mockStructure}
        chosenBlock={''}
        completedChallengeIds={[]}
      />
    );

    expect(screen.queryByTestId('green-pass')).not.toBeInTheDocument();

    const chapterButtons = screen.getAllByRole('button', {
      name: /test chapter/i
    });
    const chapterButton = chapterButtons[0];
    const checkmark = within(chapterButton).getByTestId('green-not-completed');
    expect(checkmark).toBeInTheDocument();
  });

  it('should render all blocks when all have challenges', () => {
    const mockChallenges = [
      {
        id: '1',
        block: 'block1',
        blockLabel: BlockLabel.lab,
        title: 'Lab 1',
        fields: { slug: 'lab-1' },
        dashedName: 'lab-1',
        challengeType: 1,
        blockLayout: BlockLayouts.Link,
        superBlock: SuperBlocks.RespWebDesign
      },
      {
        id: '2',
        block: 'block2',
        blockLabel: BlockLabel.workshop,
        title: 'Step 1',
        fields: { slug: 'step-1' },
        dashedName: 'step-1',
        challengeType: 1,
        blockLayout: BlockLayouts.ChallengeGrid,
        superBlock: SuperBlocks.RespWebDesign
      },
      {
        id: '3',
        block: 'block2',
        blockLabel: BlockLabel.workshop,
        title: 'Step 2',
        fields: { slug: 'step-2' },
        dashedName: 'step-2',
        challengeType: 1,
        blockLayout: BlockLayouts.ChallengeGrid,
        superBlock: SuperBlocks.RespWebDesign
      }
    ];

    renderWithRedux(
      <SuperBlockAccordion
        challenges={mockChallenges}
        superBlock={SuperBlocks.RespWebDesign}
        structure={mockStructure}
        chosenBlock='block1'
        completedChallengeIds={[]}
      />
    );

    expect(
      screen.getByRole('button', { name: 'Test Chapter' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Test Module' })
    ).toBeInTheDocument();

    const labHeading = screen.getByRole('heading', {
      name: 'Lab Block , Not Started'
    });
    expect(labHeading).toBeInTheDocument();
    expect(
      within(labHeading).getByRole('link', { name: 'Lab Block , Not Started' })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: 'Workshop Block , Not Started' })
    ).toBeInTheDocument();

    // Expand block 2
    fireEvent.click(
      screen.getByRole('button', { name: 'Workshop Block , Not Started' })
    );

    expect(screen.getByRole('link', { name: '1' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '2' })).toBeInTheDocument();
  });

  it('should filter out blocks without challenges', () => {
    const mockChallenges = [
      {
        id: '1',
        block: 'block1',
        blockLabel: BlockLabel.lab,
        title: 'Challenge 1',
        fields: { slug: 'challenge-1' },
        dashedName: 'challenge-1',
        challengeType: 1,
        blockLayout: BlockLayouts.Link,
        superBlock: SuperBlocks.RespWebDesign
      }
    ];

    renderWithRedux(
      <SuperBlockAccordion
        challenges={mockChallenges}
        superBlock={SuperBlocks.RespWebDesign}
        structure={mockStructure}
        chosenBlock={'block1'}
        completedChallengeIds={[]}
      />
    );

    expect(
      screen.getByRole('button', { name: 'Test Chapter' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Test Module' })
    ).toBeInTheDocument();

    const labHeading = screen.getByRole('heading', {
      name: 'Lab Block , Not Started'
    });
    expect(labHeading).toBeInTheDocument();
    expect(
      within(labHeading).getByRole('link', { name: 'Lab Block , Not Started' })
    ).toBeInTheDocument();

    expect(
      screen.queryByRole('heading', { name: 'Workshop Block , Not Started' })
    ).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: '1' })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: '2' })).not.toBeInTheDocument();
  });
});
