import React, { useEffect, ReactElement, ReactNode } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { useTranslation } from 'react-i18next';

import { Test } from '../../../redux/prop-types';
import { SuperBlocks } from '../../../../../shared/config/curriculum';
import { initializeMathJax } from '../../../utils/math-jax';
import { challengeTestsSelector } from '../redux/selectors';
import TestSuite from './test-suite';

import './side-panel.css';

const mapStateToProps = createSelector(
  challengeTestsSelector,
  (tests: Test[]) => ({
    tests
  })
);
interface SidePanelProps {
  block: string;
  challengeDescription: ReactElement;
  challengeTitle: ReactElement;
  instructionsPanelRef: React.RefObject<HTMLDivElement>;
  hasDemo: boolean | null;
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
  tests
}: SidePanelProps): JSX.Element {
  const { t } = useTranslation();
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
      {challengeDescription}
      {hasDemo && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div
          onClick={() => {
            console.log('show demo');
          }}
        >
          {t('buttons.show-demo')}
        </div>
      )}
      {challengeDescription}
      {toolPanel}
      <TestSuite tests={tests} />
    </div>
  );
}

SidePanel.displayName = 'SidePanel';

export default connect(mapStateToProps)(SidePanel);
