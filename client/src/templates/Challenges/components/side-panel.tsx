import React, { useEffect, ReactElement, ReactNode } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Trans } from 'react-i18next';

import { Test } from '../../../redux/prop-types';
import { SuperBlocks } from '../../../../../shared/config/curriculum';
import { initializeMathJax } from '../../../utils/math-jax';
import { challengeTestsSelector } from '../redux/selectors';
import { openModal } from '../redux/actions';
import TestSuite from './test-suite';

import './side-panel.css';

const mapStateToProps = createSelector(
  challengeTestsSelector,
  (tests: Test[]) => ({
    tests
  })
);

const mapDispatchToProps: {
  openModal: (modal: string) => void;
} = {
  openModal
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

interface SidePanelProps extends DispatchProps, StateProps {
  block: string;
  challengeDescription: ReactElement;
  challengeTitle: ReactElement;
  instructionsPanelRef: React.RefObject<HTMLDivElement>;
  hasDemo: boolean;
  toolPanel: ReactNode;
  superBlock: SuperBlocks;
  tests: Test[];
}

export function SidePanel({
  block,
  challengeDescription,
  challengeTitle,
  instructionsPanelRef,
  hasDemo,
  toolPanel,
  superBlock,
  tests,
  openModal
}: SidePanelProps): JSX.Element {
  useEffect(() => {
    const mathJaxChallenge =
      superBlock === SuperBlocks.RosettaCode ||
      superBlock === SuperBlocks.ProjectEuler ||
      block === 'intermediate-algorithm-scripting';
    initializeMathJax(mathJaxChallenge);
  }, [block, superBlock]);

  return (
    <div
      className='instructions-panel'
      ref={instructionsPanelRef}
      tabIndex={-1}
    >
      {challengeTitle}
      {hasDemo && (
        <p>
          <Trans i18nKey='learn.example-app'>
            <span
              className='example-app-link'
              onClick={() => openModal('projectPreview')}
              role='button'
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openModal('projectPreview');
                }
              }}
            ></span>
          </Trans>
        </p>
      )}
      {challengeDescription}
      {toolPanel}
      <TestSuite tests={tests} />
    </div>
  );
}

SidePanel.displayName = 'SidePanel';

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel);
