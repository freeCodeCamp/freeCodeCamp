import React, { useEffect, ReactElement, ReactNode } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
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
  toolPanel: ReactNode;
  superBlock: SuperBlocks;
  tests: Test[];
}

export function SidePanel({
  block,
  challengeDescription,
  challengeTitle,
  instructionsPanelRef,
  toolPanel,
  superBlock,
  tests
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
      {challengeDescription}
      {toolPanel}
      <TestSuite tests={tests} />
    </div>
  );
}

SidePanel.displayName = 'SidePanel';

export default connect(mapStateToProps)(SidePanel);
